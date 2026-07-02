package com.shorty.analytics_service.repository;

import com.shorty.analytics_service.entity.Click;
import com.shorty.analytics_service.projection.ClickStatsProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.UUID;

public interface ClickRepository extends JpaRepository<Click, UUID> {
    @Query(value = """
        SELECT
            short_code AS shortCode,
            COUNT(*) AS totalClicks,
            MIN(clicked_at) AS firstClick,
            MAX(clicked_at) AS lastClick
        FROM clicks
        WHERE short_code = :shortCode
        GROUP BY short_code
        """, nativeQuery = true)
    Optional<ClickStatsProjection> getStatsByShortCode(@Param("shortCode") String shortCode);
}