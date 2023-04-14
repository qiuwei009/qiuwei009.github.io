package org.example.Contorller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import lombok.extern.slf4j.Slf4j;
import org.example.Dto.DishDto;
import org.example.Dto.SetmealDto;
import org.example.Service.SetmealDishService;
import org.example.Service.SetmealService;
import org.example.common.R;

import org.example.entity.Dish;
import org.example.entity.DishFlavor;
import org.example.entity.Setmeal;
import org.example.entity.SetmealDish;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/setmeal")
public class SetmealComtorller {

    @Autowired
    public SetmealDishService setmealDishService;

    @Autowired
    public SetmealService setmealService;

    /*
     * 新增
     * */
    @PostMapping
    public R<String> save(HttpServletRequest request, @RequestBody SetmealDto setmealDto) {
        // 获取创建用户ID
        Long empId = (Long) request.getSession().getAttribute("employee");
        // 创建及更新时间
        setmealDto.setCreateTime(LocalDateTime.now());
        setmealDto.setUpdateTime(LocalDateTime.now());
        setmealDto.setCreateUser(empId);
        setmealDto.setUpdateUser(empId);
        setmealService.saveWithFlavor(setmealDto);
        return R.successMsg("新增成功！");
    }

    /*
     * 分页查询
     * */
    @GetMapping("/page")
    public R<Page> page(int page, int pageSize, String name) {
        Page<Setmeal> pageInfo = new Page<>(page, pageSize);
        LambdaQueryWrapper<Setmeal> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.orderByDesc(Setmeal::getUpdateTime);
        if (name != null) queryWrapper.like(Setmeal::getName, name);
        setmealService.page(pageInfo, queryWrapper);
        return R.success(pageInfo);
    }

    /*
     * 列表查询
     * */
    @GetMapping("/list")
    public R<List> list(HttpServletRequest request) {

        return null;
    }

    /*
     * 详情查询
     * */
    @GetMapping("/{id}")
    public R<SetmealDto> update(@PathVariable Long id) {
        SetmealDto setmealDto = new SetmealDto();
        Setmeal byId = setmealService.getById(id);
        LambdaQueryWrapper<SetmealDish> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(SetmealDish::getSetmealId, id);
        List<SetmealDish> list = setmealDishService.list(queryWrapper);
        setmealDto.setSetmealDishes(list);
        BeanUtils.copyProperties(byId, setmealDto, "setmealDishes");
        return R.success(setmealDto);
    }

    /*
     * 修改
     * */
    @PutMapping
    public R<String> update(HttpServletRequest request, @RequestBody SetmealDto setmealDto) {
        Long empId = (Long) request.getSession().getAttribute("employee");
        // 更新时间
        setmealDto.setUpdateTime(LocalDateTime.now());
        setmealDto.setUpdateUser(empId);
        setmealService.upDateWithFlavor(setmealDto);
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
            Setmeal byId = setmealService.getById(id);
            byId.setStatus(status);
            setmealService.updateById(byId);
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
            setmealService.removeByIds(Collections.singleton(id));
        }
        return R.successMsg("删除成功！");
    }
}
