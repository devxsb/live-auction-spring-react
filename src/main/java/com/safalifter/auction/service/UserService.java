package com.safalifter.auction.service;

import com.safalifter.auction.model.User;
import com.safalifter.auction.repository.UserRepository;
import com.safalifter.auction.request.UserCreateRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User create(UserCreateRequest request) {
        User user = User.builder()
                .username(request.getUsername())
                .password(request.getPassword()).build();
        return userRepository.save(user);
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }
}
