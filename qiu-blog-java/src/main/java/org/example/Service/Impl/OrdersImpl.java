package org.example.Service.Impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.example.Mapper.OrdersMapper;
import org.example.Service.OrdersService;
import org.example.entity.Orders;
import org.springframework.stereotype.Service;

@Service
public class OrdersImpl extends ServiceImpl<OrdersMapper, Orders> implements OrdersService {
}
