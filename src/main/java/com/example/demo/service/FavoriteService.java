package com.example.demo.service;

import com.example.demo.entity.Favorite;
import com.example.demo.entity.ScenicSpot;
import com.example.demo.entity.User;
import com.example.demo.repository.FavoriteRepository;
import com.example.demo.repository.ScenicSpotRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class FavoriteService {

    @Autowired
    private FavoriteRepository favoriteRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ScenicSpotRepository scenicSpotRepository;

    public List<Favorite> findFavoriteByUserName(String username) {
        Optional<User> user = userRepository.findByUsername(username);
        List<Favorite> favorites = new ArrayList<>();
        if (user.isPresent()) {
            favorites = favoriteRepository.findByUserId(user.get().getId().toString());
        }
        return favorites;
    }

    public Boolean findFavoriteByUserIdAndScenicSpotId(Long userId, String scenicSpotId) {
        Optional<Favorite> existingFavorite = favoriteRepository.findByUserIdAndSceneId(userId.toString(), scenicSpotId);
        return existingFavorite.isPresent();
    }

    public void addFavorite(Long userId, String sceneId) {
        // 查找用户
//        User user = userRepository.findByUserId(userId)
//                .orElseThrow(() -> new IllegalArgumentException("User not found with id: " + userId));

        // 查找景点

        ScenicSpot scenicSpot = scenicSpotRepository.findBySceneId(sceneId)
                .orElseThrow(() -> new IllegalArgumentException("Scenic spot not found with id: " + sceneId));

        // 创建收藏记录
        Favorite favorite = new Favorite();
        favorite.setUser_id(userId.toString());
        favorite.setScene_id(sceneId);

        // 保存收藏记录
        favoriteRepository.save(favorite);
    }
}
