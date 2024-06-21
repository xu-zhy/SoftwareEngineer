package com.example.demo.controller;

import com.example.demo.entity.ScenicSpot;
import com.example.demo.service.ScenicSpotService;
import org.springframework.core.io.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Path;
import java.nio.file.Paths;
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

    @GetMapping("/bySceneName")
    public ScenicSpot getSceneInfo(@RequestParam String sceneName) {
        return scenicSpotService.getScenicSpotBySceneName(sceneName);
    }

    @GetMapping("/image")
    public ResponseEntity<Resource> getImage(@RequestParam String sceneName) {
        try {
            // Decode the sceneName to handle URL encoded characters
            String decodedSceneName = URLDecoder.decode(sceneName, StandardCharsets.UTF_8.toString());
            // Construct the file path
            Path filePath = Paths.get("src/main/resources/static/images/scenicSpots/" + decodedSceneName + ".jpg");
            Resource resource = new UrlResource(filePath.toUri());

            if (resource.exists() || resource.isReadable()) {
                return ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                        .contentType(MediaType.IMAGE_JPEG)
                        .body(resource);
            } else {
                throw new RuntimeException("Could not read the file!");
            }
        } catch (Exception e) {
            throw new RuntimeException("Error: " + e.getMessage());
        }
    }
}
