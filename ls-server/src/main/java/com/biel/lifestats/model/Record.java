package com.biel.lifestats.model;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by Biel on 30/1/2017.
 */
@Data
@Entity
public class Record {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    private TimeType timeType;
    @ManyToOne
    private Statistic statistic;

}
