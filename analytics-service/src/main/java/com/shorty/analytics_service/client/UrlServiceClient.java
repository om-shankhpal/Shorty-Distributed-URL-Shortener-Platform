package com.shorty.analytics_service.client;

import com.shorty.analytics_service.dto.OwnershipResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.UUID;

@FeignClient(name = "url-service")
public interface UrlServiceClient {

    @GetMapping("/internal/urls/{shortCode}/owner")
    OwnershipResponse verifyOwnership(
            @PathVariable String shortCode,
            @RequestParam UUID userId
    );
}