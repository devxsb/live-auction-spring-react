package com.safalifter.auction.controller;

import com.safalifter.auction.dto.UserDto;
import com.safalifter.auction.request.UserCreateRequest;
import com.safalifter.auction.service.UserService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/v1/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private final ModelMapper modelMapper;

    @PostMapping
    ResponseEntity<UserDto> create(@RequestBody UserCreateRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(modelMapper.map(userService.create(request), UserDto.class));
    }

    @GetMapping
    ResponseEntity<List<UserDto>> getUsers() {
        return ResponseEntity.ok(userService.getUsers().stream()
                .map(x -> modelMapper.map(x, UserDto.class)).collect(Collectors.toList()));
    }
}
