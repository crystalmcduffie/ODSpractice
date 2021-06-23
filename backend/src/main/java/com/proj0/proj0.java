package com.proj0;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class proj0 {

		public static void main(String[] args) {
			SpringApplication.run(proj0.class, args);
		}
		@Bean
		public WebMvcConfigurer corsConfigurer() {
			return new WebMvcConfigurer() {
				public void addCorsMapping(CorsRegistry registry) {
					registry.addMapping("/**")
					.allowedMethods("GET", "PUT", "POST", "DELETE", "PATCH", "OPTIONS")
					.allowedOrigins("http://localhost:4200")
					.allowedHeaders("*")
					.allowCredentials(true);
				}
			};
		}
}
