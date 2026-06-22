package com.shorty.url_service.dto;

import lombok.*;

import java.time.Instant;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UrlResponse {

    private UUID id;
    private String originalUrl;
    private String shortCode;
    private String shortUrl;
    private Instant createdAt;
}