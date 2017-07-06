package com.biel.lifestats.services.resourceprocessors;

import com.biel.lifestats.model.User;
import com.biel.lifestats.services.UserSwitchActiveTimeRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityLinks;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.ResourceProcessor;
import org.springframework.stereotype.Component;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

@Component
public class UserResourceProcessor implements ResourceProcessor<Resource<User>> {

    @Autowired
    EntityLinks entityLinks;

    @Override
    public Resource<User> process(Resource<User> resource) {
        User user = resource.getContent();
        //resource.add(entityLinks.linkFor(TimeRecordService.class).withSelfRel());
        resource.add(linkTo(methodOn(UserSwitchActiveTimeRecordService.class).switchTimeRecord(user.getId(), null)).withRel("switchTimeRecord"));
        return resource;
    }
}
