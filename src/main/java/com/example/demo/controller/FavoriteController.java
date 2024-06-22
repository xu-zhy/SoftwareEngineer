package com.example.demo.controller;

import com.example.demo.entity.Favorite;
import com.example.demo.entity.ScenicSpot;
import com.example.demo.entity.User;
import com.example.demo.service.FavoriteService;
import com.example.demo.service.ScenicSpotService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

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
    public ResponseEntity<String> addFavorite(@RequestParam String sceneId, HttpSession session) {
        try {
            User loggedInUser = (User) session.getAttribute("user");
            if (loggedInUser == null) {
                throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "User is not logged in");
            }
            favoriteService.addFavorite(loggedInUser.getId(), sceneId);
            return ResponseEntity.ok("favorite add successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        } catch (ResponseStatusException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }

    @GetMapping("/check")
    public ResponseEntity<String> checkFavorite(@RequestParam String sceneId, HttpSession session) {
        try {
            User loggedInUser = (User) session.getAttribute("user");
            if (loggedInUser == null) {
                throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "User is not logged in");
            }
            if (favoriteService.findFavoriteByUserIdAndScenicSpotId(loggedInUser.getId(), sceneId)) {
                return ResponseEntity.status(HttpStatus.FOUND).body("favorite found");
            }
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("favorite not found");
        } catch (ResponseStatusException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }
}
