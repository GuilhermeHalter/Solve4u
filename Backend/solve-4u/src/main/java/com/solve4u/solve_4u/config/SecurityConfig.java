package com.solve4u.solve_4u.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable() // Desabilita CSRF para simplificar testes com APIs REST
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/h2-console/**").permitAll() // Permite acesso ao console do H2
                .requestMatchers("/api/**").permitAll() // Permite acesso público às APIs
                .requestMatchers("/**").permitAll()
                .anyRequest().authenticated() // Requer autenticação para outras requisições
            )
            .headers(headers -> headers.frameOptions().sameOrigin()); // Necessário para o H2 Console

        return http.build();
    }
}
