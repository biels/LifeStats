package com.biel.lifestats.repositories;

import com.biel.lifestats.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

/**
 * Created by Biel on 18/2/2017.
 */
public interface UserRepository extends CrudRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Optional<User> findById(Long id);
}
