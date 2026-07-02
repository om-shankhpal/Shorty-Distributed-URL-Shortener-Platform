package com.shorty.url_service.exception;

public class ForbiddenException extends RuntimeException {

    public ForbiddenException() {
        super("You are not allowed to perform this action");
    }
}