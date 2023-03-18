package com.safalifter.auction.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TokenDTO {
    private String accessToken;
    private String username;
}
