package com.shorty.url_service.exception;

import java.util.UUID;

public class UrlNotFoundException extends RuntimeException {

    public UrlNotFoundException(UUID id) {
        super("URL not found with id: " + id);
    }

    public UrlNotFoundException(String shortCode) {
        super("URL not found with short code: " + shortCode);
    }
}