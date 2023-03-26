package com.safalifter.auction;

import com.safalifter.auction.model.Product;
import com.safalifter.auction.repository.ProductRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class AuctionApplication {
    private static ProductRepository productRepository;

    public AuctionApplication(ProductRepository productRepository) {
        AuctionApplication.productRepository = productRepository;
    }

    public static void main(String[] args) {

        SpringApplication.run(AuctionApplication.class, args);

        var products =
                List.of(
                        Product.builder()
                                .name("Gibson Les Paul")
                                .startingPrice(4999.0)
                                .build(),
                        Product.builder()
                                .name("Fender Stratocaster")
                                .startingPrice(2849.0)
                                .build(),
                        Product.builder()
                                .name("Jackson Premium")
                                .startingPrice(1467.0)
                                .build());
        if (productRepository.findAll().size() == 0)
            productRepository.saveAll(products); // startup script
    }
}