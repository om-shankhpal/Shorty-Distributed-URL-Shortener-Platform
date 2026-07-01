package com.shorty.url_service.dto;

import lombok.Builder;

@Builder
public record OwnershipResponse(
        boolean owner
) {
}