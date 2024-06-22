package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/page")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody User user) {
        try {
            userService.register(user);
            return ResponseEntity.ok("User registered successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        }
    }

    @PostMapping("/signin")
    public ResponseEntity<String> signin(@RequestBody User user, HttpSession session) {
        return userService.signin(user.getUsername(), user.getPassword())
                .map(u -> {
                    session.setAttribute("user", u);
                    return ResponseEntity.ok("User logged in successfully");
                })
                .orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password"));
    }

    @GetMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "User logged out successfully";
    }

    @GetMapping("/current-user")
    public ResponseEntity<User> getCurrentUser(HttpSession session) {
        try {
            User user = (User) session.getAttribute("user");
            return ResponseEntity.ok(user);
        } catch (NullPointerException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
    }
}
