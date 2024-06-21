package com.example.demo.controller;

import com.example.demo.entity.Favorite;
import com.example.demo.entity.ScenicSpot;
import com.example.demo.service.FavoriteService;
import com.example.demo.service.ScenicSpotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/favorite")
public class FavoriteController {

    @Autowired
    private FavoriteService favoriteService;
    @Autowired
    private ScenicSpotService scenicSpotService;

    @GetMapping("/byUsername")
    public List<ScenicSpot> getFavoriteScenicSpotByUsername(@RequestParam("username") String username) {
        List<Favorite> favoriteList = favoriteService.findFavoriteByUserName(username);
        List<ScenicSpot> scenicSpotList = new ArrayList<>();
        for (Favorite favorite : favoriteList) {
            ScenicSpot newScene = scenicSpotService.getScenicSpotBySceneId(favorite.getScene_id());
            scenicSpotList.add(newScene);
        }
        return scenicSpotList;
    }

    @PostMapping("/add")
    public ResponseEntity<String> addFavorite(@RequestParam String userId, @RequestParam String sceneId) {
        try {
            favoriteService.addFavorite(userId, sceneId);
            return ResponseEntity.ok("favorite add successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        }
    }
}
