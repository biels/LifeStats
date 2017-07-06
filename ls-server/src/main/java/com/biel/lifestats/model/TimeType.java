package com.biel.lifestats.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

/**
 * Created by Biel on 15/2/2017.
 */
@Data
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
}
