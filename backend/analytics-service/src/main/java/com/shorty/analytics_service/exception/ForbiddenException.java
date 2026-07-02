package com.shorty.analytics_service.exception;

public class ForbiddenException extends RuntimeException {

    public ForbiddenException() {
        super("You are not authorized to access this resource.");
    }
}