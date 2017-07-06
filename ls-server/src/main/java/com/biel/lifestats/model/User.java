package com.biel.lifestats.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
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
    private List<TimeType> timeTypes;

    @OneToMany(mappedBy = "user")
    private List<TimeRecord> timeRecords;


    @OneToOne
    @Getter
    private TimeRecord activeTimeRecord;

    public User() {
    }

    public User(String name, String username, String password) {
        this.name = name;
        this.username = username;
        this.password = password;
    }

}
