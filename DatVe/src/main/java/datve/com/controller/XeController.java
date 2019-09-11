package datve.com.controller;

import datve.com.config.MongoFactory;
import datve.com.model.Xe;
import datve.com.service.XeServiceImpl;
import org.apache.catalina.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api")
public class XeController {

        @Autowired
        @Qualifier("xeService")
        XeServiceImpl xeService;

        /*
        * find các xe có đủ điều kiện guest cần
        * @param start mã nơi đi
        * @param end mã nơi đến
        * @param date ngày đi
        */
        @RequestMapping(value = "/Cars/start={start}&end={end}&date={date}", method = RequestMethod.GET, produces = "application/json")
        public ResponseEntity<List<Xe>> getXes(@PathVariable int start, @PathVariable int end, @PathVariable String date) {
            HttpHeaders headers = new HttpHeaders();
            List<Xe> listXe = xeService.searchXe(start, end, date);

            if (listXe == null) {
                return new ResponseEntity<List<Xe>>(HttpStatus.NOT_FOUND);
            }
            headers.add("Numbers", String.valueOf(listXe.size()));

            return new ResponseEntity<List<Xe>>(listXe, headers, HttpStatus.FOUND);
        }

        /*
        * add xe
        * kèm theo x-user-token để xác thực
        * */
        @RequestMapping(value = "/Car",method = RequestMethod.POST,produces = "application/json")
        public ResponseEntity<Xe> addXe(@RequestBody Xe xe, @RequestHeader(value ="x-user-token") String x_user_token){
            HttpHeaders headers=new HttpHeaders();

            System.out.println(x_user_token);
            if(xeService.addXe(xe)){
                return  new ResponseEntity<Xe>(xe,headers,HttpStatus.CREATED);
            }
            return new ResponseEntity<Xe>(xe,headers,HttpStatus.NOT_EXTENDED);
        }

//        @RequestMapping(value = "/Car/update",method = RequestMethod.PUT,produces = "application/json")
//        public ResponseEntity<Xe> updateXe(@RequestBody Xe xe){
//
//            HttpHeaders headers=new HttpHeaders();
//            if(xeService.updateXe(xe)){
//                return new ResponseEntity<Xe>(xe,headers,HttpStatus.OK);
//            }
//            return new ResponseEntity<Xe>(xe,headers,HttpStatus.NOT_MODIFIED);
//        }

}
