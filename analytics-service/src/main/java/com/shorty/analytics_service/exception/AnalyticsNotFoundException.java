package com.shorty.analytics_service.exception;

public class AnalyticsNotFoundException extends RuntimeException {

    public AnalyticsNotFoundException(String shortCode) {
        super("Analytics not found for short code: " + shortCode);
    }

}