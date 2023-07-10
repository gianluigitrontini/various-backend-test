package com.example.firstjavarest.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.example.firstjavarest.api.model.User;

@Service
public class UserService {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public UserService() {
    }

    public Optional<User> getUser(Integer id) {
        Optional<User> optional = Optional.empty();

        List<User> user = jdbcTemplate.query("SELECT * FROM user WHERE id = ?",
                (resultSet, rowNum) -> new User(
                        resultSet.getInt("id"),
                        resultSet.getString("name"),
                        resultSet.getString("email"),
                        resultSet.getString("password")),
                id);

        if (!user.get(0).equals(null)) {
            optional = Optional.of(user.get(0));
            return optional;
        }

        return optional;
    }

    public List<User> getAllUsers() {
        List<User> users = jdbcTemplate.query("SELECT * FROM user",
                (resultSet, rowNum) -> new User(resultSet.getInt("id"),
                        resultSet.getString("name"),
                        resultSet.getString("email"),
                        resultSet.getString("password")));

        return users;
    }
}
