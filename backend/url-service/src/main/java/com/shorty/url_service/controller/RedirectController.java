package com.shorty.url_service.controller;

import com.shorty.url_service.service.UrlService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RestController
@RequiredArgsConstructor
public class RedirectController {

    private final UrlService urlService;

    @GetMapping("/{shortCode}")
    public ResponseEntity<Void> redirect(@PathVariable String shortCode) {

        String originalUrl = urlService.getOriginalUrl(shortCode);

        if (originalUrl == null || originalUrl.isBlank()) {
            return ResponseEntity.notFound().build();
        }

        // SAFE redirect (no URI.create issues)
        return ResponseEntity.status(HttpStatus.FOUND)
                .header("Location", originalUrl)
                .build();
    }
}
