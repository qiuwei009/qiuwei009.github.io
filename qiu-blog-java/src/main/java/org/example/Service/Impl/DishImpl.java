package org.example.Service.Impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.example.Dto.DishDto;
import org.example.Mapper.DishMapper;
import org.example.Service.DishFlavorService;
import org.example.Service.DishService;
import org.example.entity.Dish;
import org.example.entity.DishFlavor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
public class DishImpl extends ServiceImpl<DishMapper, Dish> implements DishService {

    @Autowired
    public DishFlavorService dishFlavorService;

    @Override
    @Transactional
    public void saveWithFlavor(DishDto dishDto) {
        // 保存基本信息
        this.save(dishDto);
        // 保存新数据
        saveFlavors(dishDto);
    }

    @Override
    public void upDateWithFlavor(DishDto dishDto) {
        // 保存基本信息
        this.updateById(dishDto);

        // 删除原本的数据
        LambdaQueryWrapper<DishFlavor> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(DishFlavor::getDishId,dishDto.getId());
        List<DishFlavor> list = dishFlavorService.list(queryWrapper);
        for (DishFlavor dishFlavor : list) {
            dishFlavorService.removeById(dishFlavor.getId()
            );
        }
        // 保存新数据
        saveFlavors(dishDto);
    }

    public void saveFlavors(DishDto dishDto){
        Long dishId = dishDto.getId();
        List<DishFlavor> flavors = dishDto.getFlavors();
        flavors = flavors.stream().map((item) ->{
            item.setDishId(dishId);
            item.setCreateTime(LocalDateTime.now());
            item.setUpdateTime(LocalDateTime.now());
            item.setCreateUser(dishDto.getCreateUser());
            item.setUpdateUser(dishDto.getUpdateUser());
            return item;
        }).collect(Collectors.toList());

        dishFlavorService.saveBatch(flavors);
    }
}
