package datve.com.service;

import datve.com.model.Xe;

import java.util.List;

public interface XeService {

    public List<Xe> searchXe(int start,int end,String date);
    public boolean addXe(Xe xe);
}
