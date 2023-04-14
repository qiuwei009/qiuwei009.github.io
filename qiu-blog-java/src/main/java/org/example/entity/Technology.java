package org.example.entity;

import lombok.Data;

import java.io.Serializable;

@Data
public class Technology implements Serializable {
    private Long id;
    private String title;
    private String tabs;
    private String contents;
    private String createAuth;
    private String createTime;



}
