package com.example.demo.repository;

import com.example.demo.entity.ScenicSpot;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ScenicSpotRepository extends JpaRepository<ScenicSpot, String> {
    List<ScenicSpot> findByProvince_ProvinceName(String provinceName);
    Optional<ScenicSpot> findBySceneName(String sceneName);
    Optional<ScenicSpot> findBySceneId(String sceneId);
    List<ScenicSpot> findBySceneNameContaining(String keyword);
}
