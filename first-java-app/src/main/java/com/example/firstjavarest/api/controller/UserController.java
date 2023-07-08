package com.example.firstjavarest.api.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.firstjavarest.api.model.User;
import com.example.firstjavarest.service.UserService;

@RestController
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/user")
    public User getUser(@RequestParam Integer id) {
        Optional<User> user = userService.getUser(id);

        if (user.isPresent()) {
            return user.get();
        }

        return null;
    }

    @GetMapping("/users")
    public List<User> getUser(@RequestParam Optional<Integer> id) {
        List<User> userList = userService.getAllUsers();
        return userList;
    }
}
