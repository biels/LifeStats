package com.biel.lifestats.services.login;

import com.biel.lifestats.model.User;
import com.biel.lifestats.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

/**
 * Created by Biel on 18/2/2017.
 */
@RestController
public class LoginService {
    @Autowired
    UserRepository userRepository;
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest)  {
        Optional<User> userOptional = userRepository.findByUsername(loginRequest.username);
        if(!userOptional.isPresent())  {
            return ResponseEntity.ok(new LoginResponse(false, "User not found"));
        }
        if(!userOptional.get().getPassword().equalsIgnoreCase(loginRequest.password))
            return ResponseEntity.ok(new LoginResponse(false, "Wrong password"));
        return ResponseEntity.ok(new LoginResponse(true, "OK", userOptional.get().getName()));
    }
}
