package datve.com.config;


import datve.com.dao.XeDaoImpl;
import datve.com.service.XeServiceImpl;
import org.springframework.context.annotation.*;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
@EnableWebMvc
@ComponentScan("datve.com.*")
public class ApplicationContextConfig implements WebMvcConfigurer {

    /*
    * Khai báo các domain được phép access
    * */
    public void addCorsMappings(CorsRegistry registry) {
        WebMvcConfigurer.super.addCorsMappings(registry);
         registry.addMapping("/api/**")
        .allowedOrigins("http://localhost:3000")
        .allowedMethods("POST", "GET",  "PUT", "OPTIONS", "DELETE");
    }

    /*
     *Khai báo các lớp để DI
    */
    @Bean(name = "xeDao")
    public XeDaoImpl xeDao(){
        return new XeDaoImpl();
    }
    @Bean(name="xeService")
    public XeServiceImpl xeService(){
        return new XeServiceImpl();
    }
}
