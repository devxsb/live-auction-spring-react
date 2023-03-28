package com.safalifter.auction.dto;

import lombok.Data;

import java.util.UUID;

@Data
public class OfferDto {
    private UUID id;
    private Long userId;
    private Long productId;
    private Double offeredPrice;
}
