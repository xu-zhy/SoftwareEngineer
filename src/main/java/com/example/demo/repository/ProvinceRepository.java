package com.example.demo.repository;

import com.example.demo.entity.Province;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProvinceRepository extends JpaRepository<Province, String> {
    Province findByProvinceName(String provinceName);
}