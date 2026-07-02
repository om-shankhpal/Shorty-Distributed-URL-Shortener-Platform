package com.shorty.url_service.controller;

import com.shorty.url_service.dto.OwnershipResponse;
import com.shorty.url_service.service.UrlService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/internal")
@RequiredArgsConstructor
public class InternalController {
    private final UrlService urlService;

    @GetMapping("/urls/{shortCode}/owner")
    public ResponseEntity<OwnershipResponse> checkOwnership(
            @PathVariable String shortCode,
            @RequestParam UUID userId
    ) {
        OwnershipResponse response = urlService.verifyOwnership(shortCode, userId);
        return ResponseEntity.ok(response);
    }
}
