package com.shorty.analytics_service.projection;

import java.time.Instant;

public interface ClickStatsProjection {

    String getShortCode();

    long getTotalClicks();

    Instant getFirstClick();

    Instant getLastClick();

}