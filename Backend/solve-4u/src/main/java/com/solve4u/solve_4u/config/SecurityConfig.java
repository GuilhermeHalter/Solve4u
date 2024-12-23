package com.solve4u.solve_4u.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.cors.CorsConfigurationSource;

import java.util.Arrays;
import java.util.Collections;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        // Habilita o CORS e configura as permissões de segurança
        http.cors()
            .and()
            .authorizeRequests()
            .requestMatchers("/api/**").permitAll() // Permite acesso sem autenticação aos endpoints /api
            .anyRequest().authenticated();  // Outras requisições exigem autenticação
        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        // Configura as origens e métodos permitidos para CORS
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(Collections.singletonList("http://localhost:5173")); // Origem do frontend
        config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS")); // Métodos permitidos
        config.setAllowedHeaders(Arrays.asList("Content-Type", "Authorization")); // Cabeçalhos permitidos
        config.setAllowCredentials(true); // Permite enviar cookies, se necessário

        // Configura o CORS para os endpoints /api
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/api/**", config);
        return source;
    }
}
