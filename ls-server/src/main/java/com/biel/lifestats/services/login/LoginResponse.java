package com.biel.lifestats.services.login;

/**
 * Created by Biel on 18/2/2017.
 */
public class LoginResponse {
    boolean success;
    String message;

    public LoginResponse(boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
