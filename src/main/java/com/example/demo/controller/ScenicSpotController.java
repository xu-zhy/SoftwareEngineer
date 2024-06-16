package com.example.demo.controller;

import com.example.demo.entity.ScenicSpot;
import com.example.demo.service.ScenicSpotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/scenicSpot")
public class ScenicSpotController {

    @Autowired
    private ScenicSpotService scenicSpotService;

    @GetMapping("/byProvince")
    public List<ScenicSpot> getScenicSpotsByProvinceName(@RequestParam String provinceName) {
        return scenicSpotService.getScenicSpotsByProvinceName(provinceName);
    }
}
