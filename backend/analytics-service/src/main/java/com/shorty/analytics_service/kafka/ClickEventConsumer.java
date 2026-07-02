package com.shorty.analytics_service.kafka;

import com.shorty.analytics_service.service.AnalyticsService;
import com.shorty.shared.event.ClickEvent;
import lombok.RequiredArgsConstructor;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ClickEventConsumer {

    private final AnalyticsService analyticsService;

    @KafkaListener(
            topics = "${kafka.topics.click-events}",
            groupId = "${spring.kafka.consumer.group-id}"
    )
    public void consume(ClickEvent event) {

        analyticsService.recordClick(event);

    }
}