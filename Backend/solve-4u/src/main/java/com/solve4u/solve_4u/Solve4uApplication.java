package com.solve4u.solve_4u;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = "com.solve4u.solve_4u")
@EnableJpaRepositories(basePackages = "com.solve4u.solve_4u.repository")
@EntityScan(basePackages = "com.solve4u.solve_4u.model")
public class Solve4uApplication {

    public static void main(String[] args) {
        SpringApplication.run(Solve4uApplication.class, args);
    }

}
