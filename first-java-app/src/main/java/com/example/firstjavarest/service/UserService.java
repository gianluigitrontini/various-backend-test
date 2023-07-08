package com.example.firstjavarest.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.firstjavarest.api.model.User;

@Service
public class UserService {
    private List<User> userList;

    public UserService() {
        userList = new ArrayList<>();

        User user1 = new User(1, "Gian", 26, "gian@gmail.com");
        User user2 = new User(2, "Gion", 26, "gion@gmail.com");
        User user3 = new User(3, "GinGian", 26, "gingian@gmail.com");

        userList.addAll(Arrays.asList(user1, user2, user3));
    }

    public Optional<User> getUser(Integer id) {
        Optional<User> optional = Optional.empty();

        for (User user : userList) {
            if (id == user.getId()) {
                optional = Optional.of(user);
                return optional;
            }
        }
        return optional;
    }

    public List<User> getAllUsers() {
        return userList;
    }
}
