package com.example.demo.service;

import com.example.demo.entity.Province;
import com.example.demo.repository.ProvinceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProvinceService {

    @Autowired
    private ProvinceRepository provinceRepository;

    public List<Province> getAllProvinces() {
        return provinceRepository.findAll();
    }

    public String getProvinceIdByName(String name) {
        return provinceRepository.findByProvinceName(name).getProvinceId();
    }
}
