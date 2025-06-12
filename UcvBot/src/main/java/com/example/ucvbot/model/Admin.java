package com.example.ucvbot.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.Check;

import java.util.UUID;

@Data
@Entity
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "v_userName", nullable = false, unique = true, length = 20)
    private String userName;

    @Check(constraints = "password LIKE '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'", name = "CK_Password_Admin")
    @Column(name = "v_password", nullable = false, length = 8)
    private String password;

    @Column(name = "v_email", nullable = false, unique = true, length = 100)
    private String email;
}
