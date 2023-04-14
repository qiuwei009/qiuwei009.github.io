package org.example.Contorller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import lombok.extern.slf4j.Slf4j;
import org.example.Service.EmployeeService;
import org.example.common.R;
import org.example.entity.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;


@Slf4j
@RestController
@RequestMapping("/employee")
public class EmployeeContorller {
    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/login")
    public R<Employee> login(HttpServletRequest request, @RequestBody Employee employee){
        System.out.println("登录");
        // 名称筛选数据
        LambdaQueryWrapper<Employee> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(Employee::getUsername,employee.getUsername());
        Employee emp = employeeService.getOne(queryWrapper);
        // 名称验证
        if(emp == null) return R.error("暂无输入账号，请先注册！");
        // 密码验证
        String password = DigestUtils.md5DigestAsHex(employee.getPassword().getBytes());
        if(!emp.getPassword().equals(password)) return R.error("密码输入错误！");
        // 状态验证
        if(emp.getStatus().equals(0)) return R.error("用户已禁用！");
        // 存储用户Id
        request.getSession().setAttribute("employee",emp.getId());
        // 成功返回
        return R.success(emp);
    }

    @PostMapping("/logout")
    public R<String> logout(HttpServletRequest request){
        request.getSession().removeAttribute("employee");
        return R.success("退出成功！");
    }

    // 新增
    @PostMapping
    public R<String> save(HttpServletRequest request, @RequestBody Employee employee){
        // 密码md5加密
        employee.setPassword(DigestUtils.md5DigestAsHex("123456".getBytes()));
        // 创建及更新时间
        employee.setCreateTime(LocalDateTime.now());
        employee.setUpdateTime(LocalDateTime.now());
        // 获取创建用户ID
        Long empId = (Long) request.getSession().getAttribute("employee");
        employee.setCreateUser(empId);
        employee.setUpdateUser(empId);
        employeeService.save(employee);
        return R.successMsg("新增成功！");
    }


    @GetMapping("/page")
    public R<Page> page(HttpServletRequest request, int page, int pageSize, String name){
        Long empId = (Long) request.getSession().getAttribute("employee");

        Page pageInfo = new Page(page,pageSize);
        LambdaQueryWrapper<Employee> queryWrapper = new LambdaQueryWrapper<>();
        if(name != null) queryWrapper.like(Employee::getName,name);
        employeeService.page(pageInfo,queryWrapper);
        return R.success(pageInfo);
    }

    @GetMapping("/{id}")
    public R<Employee> update(@PathVariable Long id){
        Employee employee = employeeService.getById(id);
        if(employee != null) return R.success(employee);
        else return R.error("暂无数据！");
    }

    // 修改
    @PutMapping
    public R<String> update(HttpServletRequest request, @RequestBody Employee employee){
        Long empId = (Long) request.getSession().getAttribute("employee");
        employee.setUpdateUser(empId);
        employee.setUpdateTime(LocalDateTime.now());
        employeeService.updateById(employee);
        return R.successMsg("修改成功！");
    }
}
