package com.safalifter.auction.dto;

import lombok.Data;

import java.util.Set;

@Data
public class ProductDto {
    private Long id;
    private String name;
    private String description;
    private Double startingPrice;
    private Set<OfferDto> offers;
}
