package com.example.demo.repository;

import com.example.demo.entity.Landmark;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LandmarkRepository extends JpaRepository<Landmark, String> {
}
