package com.example.ucvbot.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "v_id")
    private Long id;

    @Column(name = "v_statement", columnDefinition = "TEXT", nullable = false)
    private String statement;

    @Column(name = "v_role", nullable = false, length = 10)
    private String role;

    @Column(name = "v_unixTime", nullable = false)
    private Long unixTime;

    @OneToMany(mappedBy = "v_message", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<Alternative> alternatives;

    @Column(name = "v_answer", nullable = true)
    private Integer answer;

    @Column(name = "v_answered", nullable = true)
    private Boolean answered;

    @ManyToOne
    @JoinColumn(name = "chat_id", nullable = false, foreignKey = @ForeignKey(name = "FK_Message_Chat"))
    @JsonBackReference
    private Chat chat;
}
