package com.shorty.analytics_service.dto;

import lombok.Builder;

@Builder
public record OwnershipResponse(
        boolean owner
) {
}