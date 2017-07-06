package com.biel.lifestats.services.exceptions;

public class TimeTypeNotFoundException extends EntityNotFoundException {
    public TimeTypeNotFoundException(String timeTypeId) {
        super(2, "TimeType", timeTypeId);
    }
}
