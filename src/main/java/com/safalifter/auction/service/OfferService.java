package com.safalifter.auction.service;


import com.safalifter.auction.exc.InvalidOfferException;
import com.safalifter.auction.model.Offer;
import com.safalifter.auction.model.Product;
import com.safalifter.auction.model.User;
import com.safalifter.auction.repository.OfferRepository;
import com.safalifter.auction.request.OfferRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class OfferService {
    private final OfferRepository offerRepository;
    private final UserService userService;
    private final ProductService productService;

    public Offer makeAnOffer(Long productId, OfferRequest request) {
        User bidder = userService.getUserById(request.getUserId());
        Product offeredProduct = productService.getProductById(productId);
        Double finalOffer = offeredProduct.getOffers().stream().mapToDouble(Offer::getOfferedPrice).max()
                .orElse(offeredProduct.getStartingPrice());
        if (request.getOfferedPrice() > finalOffer) {
            Offer offer = Offer.builder()
                    .user(bidder)
                    .product(offeredProduct)
                    .offeredPrice(request.getOfferedPrice())
                    .id(UUID.randomUUID()).build();
            return offerRepository.save(offer);
        } else {
            throw new InvalidOfferException("Bid higher! Last bid: " + finalOffer);
        }
    }
}
