package com.example.firstjavarest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class FirstJavaRestApplication {
	public static void main(String[] args) {
		SpringApplication.run(FirstJavaRestApplication.class, args);
	}
}
