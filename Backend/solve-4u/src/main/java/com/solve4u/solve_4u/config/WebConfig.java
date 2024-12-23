package com.solve4u.solve_4u.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:5173")  // Permite requisições do frontend
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")  // Permite os métodos HTTP necessários
                .allowedHeaders("Content-Type", "Authorization")  // Permite cabeçalhos específicos
                .allowCredentials(true);  // Permite credenciais se necessário
    }
}
