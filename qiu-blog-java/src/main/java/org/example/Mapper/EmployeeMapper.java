package org.example.Mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.example.entity.Employee;

@Mapper
public interface EmployeeMapper extends BaseMapper<Employee> {

}
