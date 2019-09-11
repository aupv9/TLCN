package datve.com.dao;

import datve.com.model.Xe;

import java.util.List;

public interface XeDao {

     List<Xe> searchXe(int start,int end,String date);
     boolean addXe(Xe xe);

}
