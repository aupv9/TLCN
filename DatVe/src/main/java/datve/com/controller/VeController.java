package datve.com.controller;


import datve.com.model.Ve;
import datve.com.service.VeServiceImpl;
import datve.com.service.XeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class VeController {

    @Autowired
    @Qualifier("veService")
    VeServiceImpl veService;

    /*
     * find các xe có đủ điều kiện guest cần
     * @param start mã nơi đi
     * @param end mã nơi đến
     * @param date ngày đi
     */
    /*


     * add xe
     * kèm theo x-user-token để xác thực
     * */
    @RequestMapping(value = "/Ve",method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity<Ve> addVe(@RequestBody Ve ve){
        HttpHeaders headers=new HttpHeaders();
        if(veService.addVe(ve)){
            return  new ResponseEntity<Ve>(ve,headers,HttpStatus.CREATED);
        }
        return new ResponseEntity<Ve>(ve,headers,HttpStatus.NOT_EXTENDED);
    }

}
