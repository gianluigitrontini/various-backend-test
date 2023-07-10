package com.example.firstjavarest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class FirstJavaRestApplication implements CommandLineRunner {
	// Spring Boot will automagically wire this object using application.properties:
	@Autowired
	private JdbcTemplate jdbcTemplate;

	public static void main(String[] args) {
		SpringApplication.run(FirstJavaRestApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		jdbcTemplate.execute(
				"CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, name text, email text UNIQUE, password text, CONSTRAINT email_unique UNIQUE (email))");
	}
}
