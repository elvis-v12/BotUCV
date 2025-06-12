package com.example.ucvbot.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Level {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "v_id")
    private Long id;

    @Column(name = "v_name", nullable = false, unique = true, length = 50)
    private String name;
}
