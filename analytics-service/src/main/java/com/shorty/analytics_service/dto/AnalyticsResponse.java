package com.shorty.analytics_service.dto;

import lombok.Builder;

import java.time.Instant;

@Builder
public record AnalyticsResponse(

        String shortCode,

        long totalClicks,

        Instant firstClick,

        Instant lastClick

) {
}