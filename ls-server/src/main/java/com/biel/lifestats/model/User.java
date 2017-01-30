package com.biel.lifestats.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

/**
 * Created by Biel on 30/1/2017.
 */
@Entity
public class User {
    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private String username;
    private String password;

    @OneToMany(mappedBy = "user")
    private List<Statistic> statistics;
}
