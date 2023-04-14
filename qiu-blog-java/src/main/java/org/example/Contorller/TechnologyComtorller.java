package org.example.Contorller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import lombok.extern.slf4j.Slf4j;
import org.example.Service.TechnologyService;
import org.example.common.R;
import org.example.entity.Orders;
import org.example.entity.Technology;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.util.Collections;

@Slf4j
@RestController
@RequestMapping("/technology")
public class TechnologyComtorller {
    @Autowired
    public TechnologyService technologyService;

    @GetMapping
    public R<String> save(HttpServletRequest request, @RequestBody Technology technology){
        // 获取创建用户ID
        String empId = (String) request.getSession().getAttribute("employee");
        // 设置创建用户
        technology.setCreateAuth(empId);
        // 设置创建时间
        technology.setCreateTime(LocalDateTime.now().toString());

        // 获取订单是否存在，避免重复提交
        Technology byId = technologyService.getById(technology.getId());
        if(byId == null) {
            technologyService.save(technology);
            return R.success("新增成功！");
        }
        else return R.error("存在信息，请重新查询！");
    }


    @GetMapping("/page")
    public R<Page> page(int page, int pageSize, String content){
        System.out.println(page);
        System.out.println(pageSize);
        Page<Technology> pageInfo = new Page<>(page, pageSize);
        LambdaQueryWrapper<Technology> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.orderByDesc(Technology::getCreateTime);
        if (content != null) queryWrapper.like(Technology::getContents, content);
        technologyService.page(pageInfo, queryWrapper);
        return R.success(pageInfo);
    }

    /*
     * 详情查询
     * */
    @GetMapping("/{id}")
    public R<Technology> update(@PathVariable Long id) {
        Technology byId = technologyService.getById(id);
        return R.success(byId);
    }

    /*
     * 修改
     * */
    @PutMapping
    public R<String> update(HttpServletRequest request, @RequestBody Technology technology) {
        // 更新时间
        technology.setCreateTime(LocalDateTime.now().toString());
        technologyService.updateById(technology);
        return R.successMsg("修改成功！");
    }

    /*
     * 状态修改
     * */
    @PostMapping("/status/{status}")
    public R<String> updateStatus(@PathVariable String content, String ids) {
        log.info(ids);
        String[] split = ids.split(",");
        for (String id : split) {
            Technology byId = technologyService.getById(id);
            byId.setContents(content);
            technologyService.updateById(byId);
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
            technologyService.removeByIds(Collections.singleton(id));
        }
        return R.successMsg("删除成功！");
    }
}
