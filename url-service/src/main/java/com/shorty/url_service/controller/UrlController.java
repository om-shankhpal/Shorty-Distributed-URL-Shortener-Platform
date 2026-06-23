package com.shorty.url_service.controller;

import com.shorty.url_service.dto.CreateUrlRequest;
import com.shorty.url_service.dto.UrlResponse;
import com.shorty.url_service.service.UrlService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/urls")
@RequiredArgsConstructor
public class UrlController {

    private final UrlService urlService;

    @PostMapping
    public ResponseEntity<UrlResponse> createShortUrl(
            @Valid @RequestBody CreateUrlRequest request,
            HttpServletRequest requestContext
    ) {
        UUID userId = (UUID) requestContext.getAttribute("userId");

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(urlService.createShortUrl(request, userId));
    }

    @GetMapping
    public ResponseEntity<List<UrlResponse>> getMyUrls(
            HttpServletRequest requestContext
    ) {
        UUID userId = (UUID) requestContext.getAttribute("userId");

        return ResponseEntity.ok(
                urlService.getUrlsByUser(userId)
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUrl(
            @PathVariable UUID id
    ) {
        urlService.deleteUrl(id);

        return ResponseEntity.noContent().build();
    }

}