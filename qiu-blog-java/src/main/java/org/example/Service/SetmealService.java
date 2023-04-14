package org.example.Service;
import org.springframework.stereotype.Service;
import com.baomidou.mybatisplus.extension.service.IService;
import org.example.Dto.SetmealDto;
import org.example.entity.Setmeal;

@Service
public interface SetmealService extends IService<Setmeal> {
    public void saveWithFlavor(SetmealDto setmealDto);

    public void upDateWithFlavor(SetmealDto setmealDto);
}
