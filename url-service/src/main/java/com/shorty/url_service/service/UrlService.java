package com.shorty.url_service.service;

import com.shorty.shared.event.ClickEvent;
import com.shorty.url_service.dto.CreateUrlRequest;
import com.shorty.url_service.dto.OwnershipResponse;
import com.shorty.url_service.dto.UrlResponse;
import com.shorty.url_service.entity.Url;
import com.shorty.url_service.exception.ForbiddenException;
import com.shorty.url_service.exception.UrlNotFoundException;
import com.shorty.url_service.kafka.ClickEventProducer;
import com.shorty.url_service.repository.UrlRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.SecureRandom;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UrlService {
    private static final String ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    private static final int SHORT_CODE_LENGTH = 6;
    private static final SecureRandom SECURE_RANDOM = new SecureRandom();

    private final UrlRepository urlRepository;
    private final UrlCacheService urlCacheService;
    private final ClickEventProducer clickEventProducer;

    @Value("${app.base-url}")
    private String baseUrl;

    @Transactional
    public UrlResponse createShortUrl(CreateUrlRequest request, UUID userId) {
        String shortCode = generateUniqueShortCode();

        Url url = Url.builder()
                .originalUrl(request.getOriginalUrl())
                .shortCode(shortCode)
                .userId(userId)
                .build();

        Url savedUrl = urlRepository.saveAndFlush(url);

        return toResponse(savedUrl);
    }

    @Transactional(readOnly = true)
    public String getOriginalUrl(String shortCode) {

        String originalUrl = urlCacheService.get(shortCode)
                .orElseGet(() -> {
                    String dbUrl = urlRepository.findByShortCode(shortCode)
                            .map(Url::getOriginalUrl)
                            .orElseThrow(() -> new UrlNotFoundException(shortCode));

                    urlCacheService.put(shortCode, dbUrl);

                    return dbUrl;
                });

        clickEventProducer.publish(ClickEvent.of(shortCode));

        return originalUrl;
    }

    @Transactional(readOnly = true)
    public List<UrlResponse> getUrlsByUser(UUID userId) {

        return urlRepository.findByUserId(userId)
                .stream()
                .map(this::toResponse)
                .toList();
    }

    @Transactional
    public void deleteUrl(UUID id, UUID currentUserId) {

        Url url = urlRepository.findById(id)
                .orElseThrow(() -> new UrlNotFoundException(id));

        if (!url.getUserId().equals(currentUserId)) {
            throw new ForbiddenException();
        }

        urlRepository.delete(url);

        // Add cache eviction later
        // urlCacheService.evict(url.getShortCode());
    }

    private String generateUniqueShortCode() {
        String code;
        do {
            code = generateShortCode();
        } while (urlRepository.existsByShortCode(code));
        return code;
    }

    private String generateShortCode() {
        StringBuilder sb = new StringBuilder(SHORT_CODE_LENGTH);
        for (int i = 0; i < SHORT_CODE_LENGTH; i++) {
            sb.append(ALPHABET.charAt(SECURE_RANDOM.nextInt(ALPHABET.length())));
        }
        return sb.toString();
    }

    private UrlResponse toResponse(Url url) {
        return UrlResponse.builder()
                .id(url.getId())
                .originalUrl(url.getOriginalUrl())
                .shortCode(url.getShortCode())
                .shortUrl(baseUrl + "/" + url.getShortCode())
                .createdAt(url.getCreatedAt())
                .build();
    }

    @Transactional(readOnly = true)
    public OwnershipResponse verifyOwnership(String shortCode, UUID userId){
        Url url = urlRepository.findByShortCode(shortCode)
                .orElseThrow(() -> new UrlNotFoundException(shortCode));

        boolean owner = url.getUserId().equals(userId);

        return OwnershipResponse.builder()
                .owner(owner)
                .build();
    }
}