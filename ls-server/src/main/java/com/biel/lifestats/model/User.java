package com.biel.lifestats.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

/**
 * Created by Biel on 30/1/2017.
 */
@Data
@Entity
public class User {
    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private String username;
    @JsonIgnore
    private String password;

    @OneToMany(mappedBy = "user")
    private List<Statistic> statistics;

    public User() {
    }

    public User(String name, String username, String password) {
        this.name = name;
        this.username = username;
        this.password = password;
    }
}
