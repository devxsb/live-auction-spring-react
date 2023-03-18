package com.safalifter.auction.dto;

import lombok.Data;

@Data
public class OfferDto {
    private Long id;
    private Long userId;
    private Long productId;
    private Double offeredPrice;
}
