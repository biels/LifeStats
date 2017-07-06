package com.biel.lifestats.repositories;

import com.biel.lifestats.model.TimeType;
import com.biel.lifestats.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;
import java.util.Optional;

/**
 * Created by Biel on 15/2/2017.
 */
@RepositoryRestResource(exported = true)
public interface TimeTypeRepository extends CrudRepository<TimeType, Long> {
    List<TimeType> findByUser_Username(String username);
    Optional<TimeType> findByName(String name);
}
