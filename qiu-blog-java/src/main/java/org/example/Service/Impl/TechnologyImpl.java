package org.example.Service.Impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.example.Mapper.TechnologyMapper;
import org.example.Service.TechnologyService;
import org.example.entity.Technology;
import org.springframework.stereotype.Service;

@Service
public class TechnologyImpl extends ServiceImpl<TechnologyMapper, Technology> implements TechnologyService {
}
