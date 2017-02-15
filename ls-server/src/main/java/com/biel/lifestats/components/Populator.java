package com.biel.lifestats.components;

import com.biel.lifestats.model.TimeType;
import com.biel.lifestats.repositories.TimeTypeRepository;
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
    @Override
    public void run(String... args) throws Exception {
        Stream.of("Study", "Sport", "Housework", "Commute")
                .forEach(s -> timeTypeRepository.save(new TimeType(s)));
    }
}
