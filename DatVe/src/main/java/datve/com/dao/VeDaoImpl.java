package datve.com.dao;

import com.mongodb.MongoException;
import com.mongodb.client.MongoCollection;
import datve.com.config.MongoFactory;
import datve.com.model.Ve;
import datve.com.service.VeService;
import org.apache.log4j.Logger;
import org.bson.Document;
import org.springframework.stereotype.Repository;

import javax.xml.bind.ValidationEvent;

import static com.mongodb.client.model.Filters.eq;


@Repository(value = "veDao")
public class VeDaoImpl implements VeService {

    private static Logger log = Logger.getLogger(VeDaoImpl.class);
    //get collection từ database

    private MongoCollection coll= MongoFactory.getCollection("datvexe","ve");
    @Override
    public boolean addVe(Ve ve){
        try {
            coll.insertOne(
                    new Document("_id",ve.get_id())
                    .append("hangxe",ve.getHangxe())
                    .append("noidon",ve.getNoidon())
                    .append("giodon",ve.getGiodon())
                    .append("noitra",ve.getNoitra())
                    .append("giotra",ve.getGiotra())
                    .append("soghe",ve.getSoghe())
                    .append("tuyenduong",ve.getTuyenduong())
                    .append("giave",ve.getGiave())
                    .append("phuthu",ve.getPhuthu())
                    .append("hinhthucthanhtoan",ve.getHinhthucthanhtoan())
                    .append("huy",ve.getHuy())
                    .append("ngaydat",ve.getNgaydat())
                    .append("tuyenduong",ve.getTuyenduong())
                        );
            return true;
        }catch (MongoException e){
           return false;
        }

    }

    @Override
    public boolean cancelVe(Ve ve){
        try {
            coll.updateOne(eq("_id",ve.get_id()),new Document("huy",ve.getHuy()));

            return true;
        }
        catch (MongoException e){
            System.out.println(e);
        }
        return false;
    }
}
