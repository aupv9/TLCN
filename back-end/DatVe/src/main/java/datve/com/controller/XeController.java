package datve.com.controller;

import datve.com.config.MongoFactory;
import datve.com.model.Xe;
import datve.com.service.XeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;
@RestController
@RequestMapping("/api")
public class XeController {
        @Autowired
        @Qualifier("xeService")
        XeServiceImpl xeService;

        @RequestMapping(value = "/Cars/start={start}&end={end}&date={date}", method = RequestMethod.GET, produces = "application/json")
        public ResponseEntity<List<Xe>> getXes(@PathVariable int start, @PathVariable int end, @PathVariable String date) {
            HttpHeaders headers = new HttpHeaders();
            List<Xe> listXe = xeService.searchXe(start, end, date);

            if (listXe == null) {
                return new ResponseEntity<List<Xe>>(HttpStatus.NOT_FOUND);
            }
            headers.add("Number Of Records Found", String.valueOf(listXe.size()));

            return new ResponseEntity<List<Xe>>(listXe, headers, HttpStatus.OK);
        }

        @RequestMapping(value = "/Car",method = RequestMethod.POST,produces = "application/json")
        public ResponseEntity<Xe> addXe(){
            HttpHeaders headers=new HttpHeaders();
            Xe xe=new Xe();
            xe.set_id(16);
            xeService.addXe(xe);
            System.out.println(MongoFactory.getMongo().getDatabase("datvexe").getCollection("xe"));
            return new ResponseEntity<Xe>(xe,headers,HttpStatus.OK);
        }
}
