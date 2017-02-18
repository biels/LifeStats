package com.biel.lifestats.repositories;

import com.biel.lifestats.model.TimeType;
import com.biel.lifestats.model.User;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.stream.Stream;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TimeTypeRepositoryTest {
	@Autowired
	TimeTypeRepository timeTypeRepository;
	@Autowired
	UserRepository userRepository;
	@Test
	public void findByUsername(){
		User user = userRepository.save(new User("Sample", "sample", "1234"));
        Stream.of("Study", "Sport", "Housework", "Commute")
                .forEach(s -> timeTypeRepository.save(new TimeType(s, user)));
		Assert.assertEquals(timeTypeRepository.findByUser_Username("sample").size(), 4);
	}
}
