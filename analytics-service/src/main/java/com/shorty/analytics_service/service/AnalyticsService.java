package com.shorty.analytics_service.service;

import com.shorty.analytics_service.entity.Click;
import com.shorty.analytics_service.repository.ClickRepository;
import com.shorty.shared.event.ClickEvent;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class AnalyticsService {

    private final ClickRepository clickRepository;

    @Transactional
    public void recordClick(ClickEvent event) {

        Click click = Click.builder()
                .shortCode(event.shortCode())
                .clickedAt(event.clickedAt())
                .build();

        clickRepository.save(click);

        log.info("[Analytics] Click saved. shortCode={}", event.shortCode());
    }
}