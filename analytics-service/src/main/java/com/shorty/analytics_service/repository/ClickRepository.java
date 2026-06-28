package com.shorty.analytics_service.repository;

import com.shorty.analytics_service.entity.Click;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ClickRepository extends JpaRepository<Click, UUID> {
}