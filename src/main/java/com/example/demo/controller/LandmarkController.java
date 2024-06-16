package com.example.demo.controller;

import com.example.demo.entity.Landmark;
import com.example.demo.service.LandmarkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/landmark")
public class LandmarkController {

    @Autowired
    private LandmarkService landmarkService;

    @GetMapping("/all")
    public List<Landmark> getAllLandmarks() {
        return landmarkService.getAllLandmarks();
    }

    @GetMapping("/byProvince")
    public List<Landmark> getLandmarksByProvinceName(@RequestParam String provinceName) {
        return landmarkService.getLandmarksByProvinceName(provinceName);
    }
}