package com.shorty.analytics_service.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(AnalyticsNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleAnalyticsNotFound(
            AnalyticsNotFoundException ex
    ) {

        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(
                        ErrorResponse.of(
                                HttpStatus.NOT_FOUND.value(),
                                "Not Found",
                                ex.getMessage()
                        )
                );
    }

    @ExceptionHandler(ForbiddenException.class)
    public ResponseEntity<ErrorResponse> handleForbidden(
            ForbiddenException ex
    ) {

        return ResponseEntity
                .status(HttpStatus.FORBIDDEN)
                .body(
                        ErrorResponse.of(
                                HttpStatus.FORBIDDEN.value(),
                                "Forbidden",
                                ex.getMessage()
                        )
                );
    }
}