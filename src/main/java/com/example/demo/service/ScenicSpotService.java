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

//    public List<ScenicSpot> getLandmarksByProvinceName(String provinceName) {
//        // 查询所有省份的景点
//        List<ScenicSpot> scenicSpots = scenicSpotRepository.findByProvince_ProvinceName(provinceName);
//        // 筛选出地标景点（landmark字段为'1'）
//        List<ScenicSpot> landmarks = scenicSpots.stream()
//                .filter(scenicSpot -> "1".equals(scenicSpot.getLandmark()))
//                .collect(Collectors.toList());
//
//        return landmarks;
//    }
}
