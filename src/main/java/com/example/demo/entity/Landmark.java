package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
public class Landmark {
    @Id
    private String landmarkId;
    private String briefIntro;

    @OneToOne
    @JoinColumn(name = "sceneId")
    private ScenicSpot scenicSpot;

    // Getters and Setters
    public String getLandmarkId() {
        return landmarkId;
    }

    public void setLandmarkId(String landmarkId) {
        this.landmarkId = landmarkId;
    }

    public String getBriefIntro() {
        return briefIntro;
    }

    public void setBriefIntro(String briefIntro) {
        this.briefIntro = briefIntro;
    }

    public ScenicSpot getScenicSpot() {
        return scenicSpot;
    }

    public void setScenicSpot(ScenicSpot scenicSpot) {
        this.scenicSpot = scenicSpot;
    }
}