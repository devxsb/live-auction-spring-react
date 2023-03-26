package com.safalifter.auction.service;

import com.safalifter.auction.exc.NotFoundException;
import com.safalifter.auction.model.Product;
import com.safalifter.auction.repository.ProductRepository;
import com.safalifter.auction.request.ProductAddRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;

    public Product addProduct(ProductAddRequest request) {
        Product product = Product.builder()
                .name(request.getName())
                .startingPrice(request.getStartingPrice()).build();
        return productRepository.save(product);
    }

    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id) {
        return findProductById(id);
    }

    protected Product findProductById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Product not found!"));
    }
}
