package com.safalifter.auction.controller;

import com.safalifter.auction.request.OfferRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class OfferController {
    private final SimpMessagingTemplate messagingTemplate;

    @MessageMapping("/bid/{productId}")
    public void offerEndPoint(@DestinationVariable(value = "productId") Long productId,
                              OfferRequest request) {
        messagingTemplate.convertAndSend("/topic/products/" + productId, request);
    }
}
