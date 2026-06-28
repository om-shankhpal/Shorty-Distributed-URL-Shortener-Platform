package com.shorty.analytics_service.kafka;

import com.shorty.shared.event.ClickEvent;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class ClickEventConsumer {

    @KafkaListener(
            topics = "${kafka.topics.click-events}",
            groupId = "${spring.kafka.consumer.group-id}"
    )
    public void consume(ClickEvent event) {

        log.info(
                "[Kafka] Received ClickEvent. shortCode={} clickedAt={}",
                event.shortCode(),
                event.clickedAt()
        );

    }
}