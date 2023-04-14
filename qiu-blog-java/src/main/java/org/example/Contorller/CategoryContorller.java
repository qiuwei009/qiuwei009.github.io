package org.example.Contorller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import lombok.extern.slf4j.Slf4j;
import org.example.Service.CategoryService;
import org.example.common.R;
import org.example.entity.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/category")
public class CategoryContorller {
    @Autowired
    public CategoryService categoryService;

    /*
     * 新增
     * */
    @PostMapping
    public R<String> save(HttpServletRequest request, @RequestBody Category category) {
        // 创建及更新时间
        category.setCreateTime(LocalDateTime.now());
        category.setUpdateTime(LocalDateTime.now());
        // 获取创建用户ID
        Long empId = (Long) request.getSession().getAttribute("employee");
        category.setCreateUser(empId);
        category.setUpdateUser(empId);
        categoryService.save(category);
        return R.successMsg("新增成功！");
    }

    /*
     * 分页查询
     * */
    @GetMapping("/page")
    public R<Page> page(HttpServletRequest request, int page, int pageSize, String name) {
        Long empId = (Long) request.getSession().getAttribute("employee");
        Page pageInfo = new Page(page, pageSize);
        // 筛选当前用户创建的用户
        LambdaQueryWrapper<Category> queryWrapper = new LambdaQueryWrapper<>();
        if (name != null) queryWrapper.like(Category::getName, name);
        categoryService.page(pageInfo, queryWrapper);
        return R.success(pageInfo);
    }

    /*
     * 列表查询
     * */
    @GetMapping("/list")
    public R<List> page(HttpServletRequest request) {
        Long empId = (Long) request.getSession().getAttribute("employee");
        // 筛选当前用户创建的
        LambdaQueryWrapper<Category> queryWrapper = new LambdaQueryWrapper<>();
        if (empId != null) queryWrapper.like(Category::getCreateUser, empId);
        List<Category> list = categoryService.list(queryWrapper);
        return R.success(list);
    }

    /*
     * 详情查询
     * */
    @GetMapping("/{ids}")
    public R<Category> update(@PathVariable Long ids) {
        Category category = categoryService.getById(ids);
        if (category != null) return R.success(category);
        else return R.error("暂无数据！");
    }

    /*
     * 修改
     * */
    @PutMapping
    public R<String> update(HttpServletRequest request, @RequestBody Category category) {
        Long empId = (Long) request.getSession().getAttribute("employee");
        category.setUpdateUser(empId);
        category.setUpdateTime(LocalDateTime.now());
        categoryService.updateById(category);
        return R.successMsg("修改成功！");
    }

    /*
     * 删除
     * */
    @DeleteMapping
    public R<String> del(Long ids) {
        categoryService.removeByIds(Collections.singleton(ids));
        return R.successMsg("删除成功！");
    }
}
