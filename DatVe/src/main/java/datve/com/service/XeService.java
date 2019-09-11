package datve.com.service;

import datve.com.model.Xe;

import java.util.List;

public interface XeService {

     List<Xe> searchXe(int start,int end,String date);
     boolean addXe(Xe xe);
     boolean updateXe(Xe xe);
}
