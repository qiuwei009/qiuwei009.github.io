package org.example.Service;

import com.baomidou.mybatisplus.extension.service.IService;
import org.example.Dto.DishDto;
import org.example.entity.Dish;
import org.springframework.stereotype.Service;

@Service
public interface DishService extends IService<Dish> {
//    新增菜品，插入口味
    public void saveWithFlavor(DishDto dishDto);

    public void upDateWithFlavor(DishDto dishDto);
}
