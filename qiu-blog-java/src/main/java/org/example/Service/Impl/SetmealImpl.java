package org.example.Service.Impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.example.Dto.SetmealDto;
import org.example.Mapper.SetmealMapper;
import org.example.Service.SetmealDishService;
import org.example.Service.SetmealService;
import org.example.entity.DishFlavor;
import org.example.entity.Setmeal;
import org.example.entity.SetmealDish;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
public class SetmealImpl extends ServiceImpl<SetmealMapper, Setmeal> implements SetmealService {
    @Autowired
    public SetmealDishService setmealDishService;
    @Override
    public void saveWithFlavor(SetmealDto setmealDto) {
        log.info(setmealDto.toString());
        // 基本信息保存
        this.save(setmealDto);
        // 保存套餐菜品
        saveFlavors(setmealDto);
    }

    @Override
    public void upDateWithFlavor(SetmealDto setmealDto) {
        // 基本信息保存
        this.updateById(setmealDto);

        // 删除原本的数据
        LambdaQueryWrapper<SetmealDish> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(SetmealDish::getSetmealId,setmealDto.getId());
        List<SetmealDish> list = setmealDishService.list(queryWrapper);
        for (SetmealDish setmealDish : list) {
            setmealDishService.removeById(setmealDish.getId());
        }

        // 保存套餐菜品
        saveFlavors(setmealDto);
    }

    public void saveFlavors(SetmealDto setmealDto){
        Long dishId = setmealDto.getId();
        List<SetmealDish> meals = setmealDto.getSetmealDishes();
        meals = meals.stream().map((item) ->{
            item.setSetmealId(dishId);
            item.setCreateTime(LocalDateTime.now());
            item.setUpdateTime(LocalDateTime.now());
            item.setCreateUser(setmealDto.getCreateUser());
            item.setUpdateUser(setmealDto.getUpdateUser());
            return item;
        }).collect(Collectors.toList());
        setmealDishService.saveBatch(meals);
    }
}
