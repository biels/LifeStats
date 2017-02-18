package com.biel.lifestats.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

/**
 * Created by Biel on 15/2/2017.
 */
@Entity
public class TimeType {
    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @ManyToOne
    private User user;

    public TimeType() {
    }

    public TimeType(String name, User user) {
        this.name = name;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
