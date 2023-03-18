package com.safalifter.auction.request;

import lombok.Getter;

@Getter
public class ProductAddRequest {
    private String name;
    private String description;
    private Double startingPrice;
}
