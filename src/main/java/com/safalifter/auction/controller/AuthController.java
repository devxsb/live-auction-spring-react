package com.safalifter.auction.controller;

import com.safalifter.auction.dto.TokenDTO;
import com.safalifter.auction.dto.UserDto;
import com.safalifter.auction.request.LoginRequest;
import com.safalifter.auction.request.RegisterRequest;
import com.safalifter.auction.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/v1/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/login")
    ResponseEntity<TokenDTO> handleLogin(@RequestBody LoginRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }

    @PostMapping("/signup")
    ResponseEntity<UserDto> handleSignUp(@Valid @RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authService.signup(request));
    }
}
