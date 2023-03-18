package com.safalifter.auction.model;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity(name = "users")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;
    private String profileImage;

    @OneToMany(mappedBy = "user")
    private Set<Offer> offers;
}
