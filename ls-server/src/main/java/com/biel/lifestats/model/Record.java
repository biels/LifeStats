package com.biel.lifestats.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

/**
 * Created by Biel on 30/1/2017.
 */
@Entity
public class Record {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    private Statistic statistic;

    public Record() {
    }
}
