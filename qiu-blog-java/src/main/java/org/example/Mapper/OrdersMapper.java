package org.example.Mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.example.entity.Orders;

@Mapper
public interface OrdersMapper extends BaseMapper<Orders> {
}
