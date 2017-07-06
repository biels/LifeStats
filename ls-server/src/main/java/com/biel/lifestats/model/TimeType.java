package com.biel.lifestats.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.hibernate.annotations.NaturalId;

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

    @NaturalId
    private String name;

    @ManyToOne
    @JsonIgnore
    private User user;

    public TimeType() {
    }

    public TimeType(String name, User user) {
        this.name = name;
        this.user = user;
    }
}
