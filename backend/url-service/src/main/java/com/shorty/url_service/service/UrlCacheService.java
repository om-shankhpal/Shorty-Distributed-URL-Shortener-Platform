package com.shorty.url_service.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class UrlCacheService {

    private static final String CACHE_PREFIX  = "shorty:redirect:";
    private static final Duration CACHE_TTL   = Duration.ofHours(24);

    private final RedisTemplate<String, String> redisTemplate;

    public Optional<String> get(String shortCode) {
        String key = buildKey(shortCode);
        String value = redisTemplate.opsForValue().get(key);

        if (value != null) {
            log.info("[Cache HIT]  shortCode='{}' cachedUrl='{}'", shortCode, value);
            return Optional.of(value);
        }

        log.info("[Cache MISS] shortCode='{}'", shortCode);
        return Optional.empty();
    }

    public void put(String shortCode, String originalUrl) {
        String key = buildKey(shortCode);
        redisTemplate.opsForValue().set(key, originalUrl, CACHE_TTL);
        log.info("[Cache WRITE] shortCode='{}' url='{}' ttl='{}'", shortCode, originalUrl, CACHE_TTL);
    }

    private String buildKey(String shortCode) {
        return CACHE_PREFIX + shortCode;
    }
}