package com.biel.lifestats;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;

@SpringBootApplication
public class LsServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(LsServerApplication.class, args);
	}
}
