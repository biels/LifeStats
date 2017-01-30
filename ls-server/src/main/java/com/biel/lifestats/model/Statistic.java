package com.biel.lifestats.model;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Biel on 30/1/2017.
 */
@Entity
public class Statistic {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    private User user;
    public enum StatisticType{ACCUMULATIVE, ABSOLUTE};
    private StatisticType type;


    @OneToMany(mappedBy = "statistic")
    List<Record> records;

}
