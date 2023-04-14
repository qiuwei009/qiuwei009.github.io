package org.example.filter;

import com.alibaba.fastjson.JSON;
import lombok.extern.slf4j.Slf4j;
import org.example.common.R;
import org.springframework.util.AntPathMatcher;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@WebFilter(filterName = "loginFilter",urlPatterns = "/*")
public class LoginFilter implements Filter {
    // 路径匹配器
    public static final AntPathMatcher PATH_MATCHER = new AntPathMatcher();
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        log.info("拦截到请求：{}",request.getRequestURI());

        String requestUrl = request.getRequestURI();

        String[] urls = new String[]{
                "/employee/login",
                        "/employee/logout",
                "/backend/**",
                "/front/**",
                "/common/**"
        };

        boolean check = check(urls,requestUrl);

        if(check){
            log.info("白名单放行");
            filterChain.doFilter(request,response);
            return;
        }

        filterChain.doFilter(request,response);
//        if(request.getSession().getAttribute("employee") != null){
//            log.info(request.toString());
//            log.info("用户登录放行");
//            filterChain.doFilter(request,response);
//            return;
//        }
//        log.info("用户未登录不放行");
//        response.getWriter().write(JSON.toJSONString(R.error("NOTLOGIN")));
    }

    public boolean check(String[] urls,String requestUrl){
        for (String url : urls) {
            boolean match = PATH_MATCHER.match(url,requestUrl);
            if(match) return true;
        }
        return false;
    }
}
