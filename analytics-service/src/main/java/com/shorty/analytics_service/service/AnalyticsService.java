package com.shorty.analytics_service.service;

import com.shorty.analytics_service.client.UrlServiceClient;
import com.shorty.analytics_service.dto.AnalyticsResponse;
import com.shorty.analytics_service.dto.OwnershipResponse;
import com.shorty.analytics_service.entity.Click;
import com.shorty.analytics_service.exception.AnalyticsNotFoundException;
import com.shorty.analytics_service.exception.ForbiddenException;
import com.shorty.analytics_service.projection.ClickStatsProjection;
import com.shorty.analytics_service.repository.ClickRepository;
import com.shorty.shared.event.ClickEvent;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class AnalyticsService {

    private final ClickRepository clickRepository;
    private final UrlServiceClient urlServiceClient;

    @Transactional
    public void recordClick(ClickEvent event) {

        Click click = Click.builder()
                .shortCode(event.shortCode())
                .clickedAt(event.clickedAt())
                .build();

        clickRepository.save(click);

        log.info("[Analytics] Click saved. shortCode={}", event.shortCode());
    }

    @Transactional(readOnly = true)
    public AnalyticsResponse getAnalytics(String shortCode, UUID userId){
        OwnershipResponse ownership =
                urlServiceClient.verifyOwnership(shortCode, userId);
        if (!ownership.owner()) {
            throw new ForbiddenException();
        }
        ClickStatsProjection stats =
                clickRepository.getStatsByShortCode(shortCode)
                        .orElseThrow(() -> new AnalyticsNotFoundException(shortCode));

        return AnalyticsResponse.builder()
                .shortCode(stats.getShortCode())
                .firstClick(stats.getFirstClick())
                .lastClick(stats.getLastClick())
                .totalClicks(stats.getTotalClicks())
                .build();
    }
}