package datve.com.dao;


import datve.com.model.Ve;
import org.springframework.stereotype.Repository;


public interface VeDao {

    boolean addVe(Ve ve);
    boolean cancelVe(Ve ve);

}
