package datve.com.service;

import datve.com.dao.XeDaoImpl;
import datve.com.model.Xe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service(value = "xeService")
public class XeServiceImpl  implements XeService{

    /*Injection XeDao */
    @Autowired
    @Qualifier("xeDao")
    XeDaoImpl xeDao;

    public List<Xe> searchXe(int start, int end, String date) {
        return xeDao.searchXe(start,end,date);
    }
    /*
    * method thêm Xe  *
    * */
    public boolean addXe(Xe xe) {
        xeDao.addXe(xe);
        return true;
    }
}

