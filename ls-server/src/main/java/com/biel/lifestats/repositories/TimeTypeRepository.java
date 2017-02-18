package com.biel.lifestats.repositories;

import com.biel.lifestats.model.TimeType;
import com.biel.lifestats.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Created by Biel on 15/2/2017.
 */
public interface TimeTypeRepository extends CrudRepository<TimeType, Long> {
    List<TimeType> findByUser_Username(String username);
}
