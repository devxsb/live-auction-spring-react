package com.safalifter.auction.service;

import com.safalifter.auction.dto.TokenDTO;
import com.safalifter.auction.dto.UserDto;
import com.safalifter.auction.exc.WrongCredentialsException;
import com.safalifter.auction.request.LoginRequest;
import com.safalifter.auction.request.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final TokenService tokenService;
    private final ModelMapper modelMapper;

    public TokenDTO login(LoginRequest request) {
        try {
            Authentication auth = authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
            return TokenDTO
                    .builder()
                    .accessToken(tokenService.generateToken(auth))
                    .username(request.getUsername())
                    .build();
        } catch (final BadCredentialsException badCredentialsException) {
            throw new WrongCredentialsException("Invalid Username or Password");
        }
    }

    public UserDto signup(RegisterRequest request) {
        return modelMapper.map(userService.create(request), UserDto.class);
    }
}