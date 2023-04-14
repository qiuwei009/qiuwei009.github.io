package org.example.Contorller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import lombok.extern.slf4j.Slf4j;
import org.example.Dto.DishDto;
import org.example.Service.CategoryService;
import org.example.Service.DishFlavorService;
import org.example.Service.DishService;
import org.example.common.R;
import org.example.entity.Category;
import org.example.entity.Dish;
import org.example.entity.DishFlavor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RestController
@RequestMapping("/dish")
public class DishContorller {
    @Autowired
    private DishService dishService;

    @Autowired
    private DishFlavorService dishFlavorService;

    @Autowired
    private CategoryService categoryService;

    /*
     * 新增
     * */
    @PostMapping
    public R<String> save(HttpServletRequest request, @RequestBody DishDto dishDto) {
        // 获取创建用户ID
        Long empId = (Long) request.getSession().getAttribute("employee");
        // 创建及更新时间
        dishDto.setCreateTime(LocalDateTime.now());
        dishDto.setUpdateTime(LocalDateTime.now());
        dishDto.setCreateUser(empId);
        dishDto.setUpdateUser(empId);
        dishService.saveWithFlavor(dishDto);
        return R.successMsg("新增成功！");
    }

    /*
     * 分页查询
     * */
    @GetMapping("/page")
    public R<Page> page(int page, int pageSize, String name) {
        Page<Dish> pageInfo = new Page<>(page, pageSize);
        LambdaQueryWrapper<Dish> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.orderByDesc(Dish::getUpdateTime);
        if (name != null) queryWrapper.like(Dish::getName, name);
        dishService.page(pageInfo, queryWrapper);
        List<Dish> records = pageInfo.getRecords();
        records = records.stream().map((item) -> {
            DishDto dishDto = new DishDto();
            Long categoryId = item.getCategoryId();
            Category byId = categoryService.getById(categoryId);
            dishDto.setCategoryName(byId.getName());
            BeanUtils.copyProperties(item, dishDto, "flavors");
            return dishDto;
        }).collect(Collectors.toList());
        pageInfo.setRecords(records);
        return R.success(pageInfo);
    }

    /*
     * 列表查询
     * */
    @GetMapping("/list")
    public R<List> list(HttpServletRequest request) {
        Long empId = (Long) request.getSession().getAttribute("employee");
        LambdaQueryWrapper<Dish> queryWrapper = new LambdaQueryWrapper<>();
        if (empId != null) queryWrapper.like(Dish::getCreateUser, empId);
        List<Dish> list = dishService.list(queryWrapper);
        return R.success(list);
    }

    /*
     * 详情查询
     * */
    @GetMapping("/{ids}")
    public R<DishDto> update(@PathVariable Long ids) {
        DishDto dishDto = new DishDto();
        // 基本信息查询
        Dish dish = dishService.getById(ids);
        // 口味查询
        LambdaQueryWrapper<DishFlavor> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(DishFlavor::getDishId, dish.getId());
        List<DishFlavor> list = dishFlavorService.list(queryWrapper);
        dishDto.setFlavors(list);
        BeanUtils.copyProperties(dish, dishDto, "flavors");
        return R.success(dishDto);
    }

    /*
     * 修改
     * */
    @PutMapping
    public R<String> update(HttpServletRequest request, @RequestBody DishDto dishDto) {
        Long empId = (Long) request.getSession().getAttribute("employee");
        dishDto.setUpdateUser(empId);
        dishDto.setUpdateTime(LocalDateTime.now());
        dishService.upDateWithFlavor(dishDto);
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
            Dish byId = dishService.getById(id);
            byId.setStatus(status);
            dishService.updateById(byId);
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
            Dish byId = dishService.getById(id);
            dishService.removeByIds(Collections.singleton(byId));
        }
        return R.successMsg("删除成功！");
    }
}
