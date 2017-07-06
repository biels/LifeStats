package com.biel.lifestats.services;

import com.biel.lifestats.model.TimeRecord;
import com.biel.lifestats.model.TimeType;
import com.biel.lifestats.model.User;
import com.biel.lifestats.repositories.TimeRecordRepository;
import com.biel.lifestats.repositories.TimeTypeRepository;
import com.biel.lifestats.repositories.UserRepository;
import com.biel.lifestats.services.exceptions.TimeTypeNotFoundException;
import com.biel.lifestats.services.exceptions.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityLinks;
import org.springframework.hateoas.ExposesResourceFor;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.Resource;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.Date;
import java.util.Optional;

@RestController
@ExposesResourceFor(User.class)
@RequestMapping("/users/{userId}/switchTimeRecord")
public class UserSwitchActiveTimeRecordService {
    @Autowired
    EntityLinks entityLinks;
    @Autowired
    UserRepository userRepository;
    @Autowired
    TimeTypeRepository timeTypeRepository;
    @Autowired
    TimeRecordRepository timeRecordRepository;

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> switchTimeRecord(@PathVariable Long userId, @RequestParam String timeTypeName){
        Optional<User> userOptional = userRepository.findById(userId);
        if(!userOptional.isPresent()) throw new UserNotFoundException(userId.toString());
        User user = userOptional.get();

        Optional<TimeType> timeTypeOptional = timeTypeRepository.findByName(timeTypeName);
        if(!timeTypeOptional.isPresent()) throw new TimeTypeNotFoundException(timeTypeName);
        TimeType timeType = timeTypeOptional.get();

        Optional<TimeRecord> activeTimeRecordOptional = Optional.ofNullable(user.getActiveTimeRecord());
        activeTimeRecordOptional.ifPresent(r -> r.finish());
        Date startTime = new Date();
        if(activeTimeRecordOptional.isPresent()) {
            startTime = user.getActiveTimeRecord().getEndTime();
            //Check that time type will change
            if(activeTimeRecordOptional.get().getTimeType().equals(timeType)){
                return ResponseEntity.ok().build();
            }
        }
        TimeRecord timeRecord = timeRecordRepository.save(
                new TimeRecord(user, timeType, startTime));

        user.setActiveTimeRecord(timeRecord);
        userRepository.save(user);
        Link link = entityLinks.linkToSingleResource(TimeRecord.class, timeRecord.getId()).expand();
        return ResponseEntity.created(URI.create(link.getHref())).build();
    }
}
