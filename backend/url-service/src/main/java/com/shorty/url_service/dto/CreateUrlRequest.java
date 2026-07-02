package com.shorty.url_service.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.hibernate.validator.constraints.URL;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CreateUrlRequest {

    @NotBlank(message = "Original URL is required")
    @URL(message = "Must be a valid URL")
    @Size(max = 2048, message = "URL must not exceed 2048 characters")
    private String originalUrl;
}