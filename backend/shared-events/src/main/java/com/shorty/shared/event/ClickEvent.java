package com.shorty.shared.event;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.Instant;

/**
 * Event published by url-service whenever a short URL is visited.
 * analytics-service consumes this event to record clicks.
 */
public record ClickEvent(

        @JsonProperty("short_code")
        String shortCode,

        @JsonProperty("clicked_at")
        Instant clickedAt

) {

    public static ClickEvent of(String shortCode) {
        return new ClickEvent(shortCode, Instant.now());
    }

}