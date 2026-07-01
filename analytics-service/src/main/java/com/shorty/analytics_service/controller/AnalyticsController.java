package com.shorty.analytics_service.controller;

import com.shorty.analytics_service.dto.AnalyticsResponse;
import com.shorty.analytics_service.service.AnalyticsService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("analytics")
@RequiredArgsConstructor
public class AnalyticsController {
    private final AnalyticsService analyticsService;

    @GetMapping("/{shortCode}")
    public ResponseEntity<AnalyticsResponse> getStats(
            @PathVariable String shortCode,
            HttpServletRequest request
    ) {
        UUID userId = (UUID) request.getAttribute("userId");

        AnalyticsResponse response =
                analyticsService.getAnalytics(shortCode, userId);

        return ResponseEntity.ok(response);
    }
}
