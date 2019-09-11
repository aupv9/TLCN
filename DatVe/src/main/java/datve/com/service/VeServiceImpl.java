package datve.com.service;

import datve.com.dao.VeDaoImpl;
import datve.com.model.Ve;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service("veService")
public class VeServiceImpl implements VeService {


    @Autowired
    VeDaoImpl veDao;

    @Override
    public boolean addVe(Ve ve){
        return veDao.addVe(ve);
    }

    @Override
    public boolean cancelVe(Ve ve){
        return veDao.cancelVe(ve);
    }

}
