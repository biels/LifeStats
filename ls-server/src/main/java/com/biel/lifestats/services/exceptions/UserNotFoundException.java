package com.biel.lifestats.services.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.text.MessageFormat;


public class UserNotFoundException extends EntityNotFoundException{
    public UserNotFoundException(String userId) {
        super(1, "User", userId);
    }
}
