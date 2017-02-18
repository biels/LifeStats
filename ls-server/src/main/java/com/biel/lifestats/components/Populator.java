package com.biel.lifestats.components;

import com.biel.lifestats.model.TimeType;
import com.biel.lifestats.model.User;
import com.biel.lifestats.repositories.TimeTypeRepository;
import com.biel.lifestats.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.stream.Stream;

/**
 * Created by Biel on 15/2/2017.
 */
@Component
public class Populator implements CommandLineRunner{
    @Autowired
    TimeTypeRepository timeTypeRepository;
    @Autowired
    UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
        User bielUser = userRepository.save(new User("Biel Simon","biel", "1234"));
        Stream.of("Study", "Sport", "Housework", "Commute")
                .forEach(s -> timeTypeRepository.save(new TimeType(s, bielUser)));
    }
}
