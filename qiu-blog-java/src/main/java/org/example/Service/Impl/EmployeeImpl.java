package org.example.Service.Impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.example.Mapper.EmployeeMapper;
import org.example.Service.EmployeeService;
import org.example.entity.Employee;
import org.springframework.stereotype.Service;

@Service
public class EmployeeImpl extends ServiceImpl<EmployeeMapper,Employee> implements EmployeeService {
}
