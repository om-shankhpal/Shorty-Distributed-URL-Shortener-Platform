package com.shorty.analytics_service.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "clicks")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Click {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false)
    private String shortCode;

    @Column(nullable = false)
    private Instant clickedAt;
}