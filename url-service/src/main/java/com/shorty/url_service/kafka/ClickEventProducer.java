package com.shorty.url_service.kafka;

import com.shorty.shared.event.ClickEvent;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class ClickEventProducer {

    @Value("${kafka.topics.click-events}")
    private String clickEventTopic;

    private final KafkaTemplate<String, ClickEvent> kafkaTemplate;

    public void publish(ClickEvent event) {

        kafkaTemplate.send(clickEventTopic, event.shortCode(), event)
                .whenComplete((result, ex) -> {

                    if (ex != null) {
                        log.error(
                                "[Kafka] Failed to publish ClickEvent. shortCode={} error={}",
                                event.shortCode(),
                                ex.getMessage(),
                                ex
                        );
                        return;
                    }

                    log.info(
                            "[Kafka] Published ClickEvent. topic={} partition={} offset={} shortCode={}",
                            result.getRecordMetadata().topic(),
                            result.getRecordMetadata().partition(),
                            result.getRecordMetadata().offset(),
                            event.shortCode()
                    );

                });
    }
}