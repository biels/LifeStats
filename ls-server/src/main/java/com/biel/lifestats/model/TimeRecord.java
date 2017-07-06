package com.biel.lifestats.model;

import lombok.Data;
import org.springframework.hateoas.Identifiable;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * Created by Biel on 30/1/2017.
 */
@Data
@Entity
public class TimeRecord implements Identifiable<Serializable> {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    User user;

    @ManyToOne
    private TimeType timeType;

    private Date startTime;
    private Date endTime;

    protected TimeRecord(){

    }
    public TimeRecord(User user, TimeType timeType, Date startTime) {
        this.user = user;
        this.timeType = timeType;
        this.startTime = startTime;
        endTime = null;
    }
    public TimeRecord(User user, TimeType timeType){
        this(user, timeType, new Date());
    }

    public boolean hasFinished(){
        return endTime != null;
    }
    public void finish(){
        endTime = new Date();
    }

}
