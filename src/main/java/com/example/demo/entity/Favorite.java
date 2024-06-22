package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
public class Favorite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long favoriteId;

    private String userId;
    private String sceneId;

    // Getters and Setters
    public Long getFavoriteId() {
        return favoriteId;
    }

    public void setFavoriteId(Long favorite_id) {
        this.favoriteId = favorite_id;
    }

    public String getUser_id() {
        return userId;
    }

    public void setUser_id(String user_id) {
        this.userId = user_id;
    }

    public String getScene_id() {
        return sceneId;
    }

    public void setScene_id(String scene_id) {
        this.sceneId = scene_id;
    }
}
