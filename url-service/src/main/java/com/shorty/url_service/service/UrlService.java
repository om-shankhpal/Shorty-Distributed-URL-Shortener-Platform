package com.shorty.url_service.service;

import com.shorty.url_service.dto.CreateUrlRequest;
import com.shorty.url_service.dto.UrlResponse;
import com.shorty.url_service.entity.Url;
import com.shorty.url_service.exception.UrlNotFoundException;
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
    public String getOriginalUrl(String shortCode) {
        return urlRepository.findByShortCode(shortCode)
                .map(Url::getOriginalUrl)
                .orElseThrow(() ->
                        new UrlNotFoundException(shortCode)
                );
    }

    @Transactional(readOnly = true)
    public List<UrlResponse> getUrlsByUser(UUID userId) {

        return urlRepository.findByUserId(userId)
                .stream()
                .map(this::toResponse)
                .toList();
    }
}