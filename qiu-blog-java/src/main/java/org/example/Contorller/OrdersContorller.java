package org.example.Contorller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import lombok.extern.slf4j.Slf4j;
import org.example.Service.OrdersService;
import org.example.common.R;
import org.example.entity.Orders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.util.Collections;

@Slf4j
@RestController
@RequestMapping("/order")
public class OrdersContorller {

    @Autowired
    public OrdersService ordersService;

    @GetMapping
    public R<String> save(HttpServletRequest request, @RequestBody Orders orders){
        // 获取创建用户ID
        Long empId = (Long) request.getSession().getAttribute("employee");
        // 设置创建用户
        orders.setUserId(empId);
        // 设置创建时间
        orders.setOrderTime(LocalDateTime.now());

        // 获取订单是否存在，避免重复提交
        Orders byId = ordersService.getById(orders.getId());
        if(byId == null) {
            ordersService.save(orders);
            return R.success("新增成功！");
        }
        else return R.error("存在订单，请重新查询！");
    }


    @GetMapping("/page")
    public R<Page> page(int page, int pageSize, String number){
        Page<Orders> pageInfo = new Page<>(page, pageSize);
        LambdaQueryWrapper<Orders> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.orderByDesc(Orders::getOrderTime);
        if (number != null) queryWrapper.like(Orders::getNumber, number);
        ordersService.page(pageInfo, queryWrapper);
        return R.success(pageInfo);
    }

    /*
     * 详情查询
     * */
    @GetMapping("/{id}")
    public R<Orders> update(@PathVariable Long id) {
        Orders byId = ordersService.getById(id);
        return R.success(byId);
    }

    /*
     * 修改
     * */
    @PutMapping
    public R<String> update(HttpServletRequest request, @RequestBody Orders Orders) {
        // 更新时间
        Orders.setOrderTime(LocalDateTime.now());
        ordersService.updateById(Orders);
        return R.successMsg("修改成功！");
    }

    /*
     * 状态修改
     * */
    @PostMapping("/status/{status}")
    public R<String> updateStatus(@PathVariable Integer status, String ids) {
        log.info(ids);
        String[] split = ids.split(",");
        for (String id : split) {
            Orders byId = ordersService.getById(id);
            byId.setStatus(status);
            ordersService.updateById(byId);
        }
        return R.successMsg("修改成功！");
    }

    /*
     * 删除
     * */
    @DeleteMapping
    public R<String> del(String ids) {
        String[] split = ids.split(",");
        for (String id : split) {
            ordersService.removeByIds(Collections.singleton(id));
        }
        return R.successMsg("删除成功！");
    }
    
}
