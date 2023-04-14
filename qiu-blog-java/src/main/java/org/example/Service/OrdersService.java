package org.example.Service;

import com.baomidou.mybatisplus.extension.service.IService;
import org.example.Mapper.OrdersMapper;
import org.example.entity.Orders;
import org.springframework.stereotype.Service;

@Service
public interface OrdersService extends IService<Orders>  {
}
