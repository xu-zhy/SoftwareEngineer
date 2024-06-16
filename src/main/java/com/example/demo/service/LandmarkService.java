package com.example.demo.service;

import com.example.demo.entity.Landmark;
import com.example.demo.repository.LandmarkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class LandmarkService {

    @Autowired
    private LandmarkRepository landmarkRepository;

    public List<Landmark> getAllLandmarks() {
        return landmarkRepository.findAll();
    }

    public List<Landmark> getLandmarksByProvinceName(String provinceName) {
        // 获取所有地标
        List<Landmark> alllandmarks = getAllLandmarks();
        List<Landmark> landmarks = alllandmarks.stream()
                .filter(landmark -> provinceName.equals(landmark.getScenicSpot().getProvince().getProvinceName()))
                .toList();
        return landmarks;
    }
}