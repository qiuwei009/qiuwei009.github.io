package org.example.Service.Impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.example.Mapper.SetmealDishMapper;
import org.example.Service.SetmealDishService;
import org.example.entity.SetmealDish;
import org.springframework.stereotype.Service;

@Service
public class SetmealDishImpl extends ServiceImpl<SetmealDishMapper, SetmealDish> implements SetmealDishService {
}
