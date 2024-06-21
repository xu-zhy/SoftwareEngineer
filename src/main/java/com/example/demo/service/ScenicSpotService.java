package com.example.demo.service;

import com.example.demo.entity.ScenicSpot;
import com.example.demo.repository.ScenicSpotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ScenicSpotService {

    @Autowired
    private ScenicSpotRepository scenicSpotRepository;

    public List<ScenicSpot> getScenicSpotsByProvinceName(String provinceName) {
        return scenicSpotRepository.findByProvince_ProvinceName(provinceName);
    }

    public ScenicSpot getScenicSpotBySceneName(String sceneName) {
        return scenicSpotRepository.findBySceneName(sceneName)
                .orElseThrow(() -> new IllegalArgumentException("Scenic spot not found with sceneName: " + sceneName));
    }

    public List<ScenicSpot> search(String keyword) {
        return scenicSpotRepository.findBySceneNameContaining(keyword);
    }

    public ScenicSpot getScenicSpotBySceneId(String sceneId) {
        return scenicSpotRepository.findBySceneId(sceneId)
                .orElseThrow(() -> new IllegalArgumentException("Scenic spot not found with sceneName: " + sceneId));
    }
}
