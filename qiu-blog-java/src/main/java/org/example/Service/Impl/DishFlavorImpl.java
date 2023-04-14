package org.example.Service.Impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.example.Mapper.DishFlavorMapper;
import org.example.Service.DishFlavorService;
import org.example.entity.DishFlavor;
import org.springframework.stereotype.Service;

@Service
public class DishFlavorImpl extends ServiceImpl<DishFlavorMapper,DishFlavor> implements DishFlavorService {
}
