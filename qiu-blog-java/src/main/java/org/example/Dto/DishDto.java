package org.example.Dto;

import lombok.Data;
import org.example.entity.Dish;
import org.example.entity.DishFlavor;
import org.example.entity.Setmeal;

import java.util.ArrayList;
import java.util.List;

@Data
public class DishDto extends Dish {

    private List<DishFlavor> flavors = new ArrayList<>();
    private List<Setmeal> meals = new ArrayList<>();

    private String categoryName;

    private Integer copies;
}
