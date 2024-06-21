package com.example.demo.service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void register(User user) {
        // 检查用户名是否已存在
        Optional<User> existingUser = userRepository.findByUsername(user.getUsername());
        if (existingUser.isPresent()) {
            // 如果用户已存在，抛出异常
            throw new IllegalArgumentException("Username already exists");
        }
        System.out.println("Saving user: " + user.getUsername() + ", " + user.getEmail());
        // 如果用户名不存在，保存用户
        userRepository.save(user);
    }

    public Optional<User> signin(String username, String password) {
        return userRepository.findByUsernameAndPassword(username, password);
    }
}
