package datve.com.dao;

import com.mongodb.MongoException;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import datve.com.config.MongoFactory;
import datve.com.model.Ghe;
import datve.com.model.LichTrinh;
import datve.com.model.Xe;
import org.apache.log4j.Logger;
import org.bson.Document;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import static com.mongodb.client.model.Filters.*;
import java.util.ArrayList;
import java.util.List;


@Repository("xeDao")
@Transactional
public class XeDaoImpl implements XeDao{
    private static Logger log = Logger.getLogger(XeDaoImpl.class);
    //get collection từ database

    private MongoCollection coll= MongoFactory.getCollection("datvexe","xe");
    public List<Xe> searchXe(int start, int end, String date) {
        /*
        * Tìm vé xe thông qua nơi đi qua và ngày đi
        * */
        MongoCursor<Document> cursor = coll.find(and(
                in("tinhdiqua",start),
                in("tinhdiqua",end),
                eq("ngaydi",date))).iterator();
        List<Xe> list=new ArrayList<Xe>();
        /*
        * Set dữ liệu search được vào mảng xe
        * */
        while(cursor.hasNext()) {
            Xe xe=new Xe();
            Document doc=cursor.next();
            xe.set_id(Integer.parseInt(doc.get("_id").toString()));
            xe.setLoaixe(doc.get("loaixe").toString());
            xe.setNhaxe(doc.get("nhaxe").toString());
            xe.setLoaidi(doc.get("loaidi").toString());
            xe.setChuyendi(doc.get("chuyendi").toString());
            xe.setDanhgia(Integer.parseInt(doc.get("danhgia").toString()));
            xe.setHinhanh(doc.get("hinhanh").toString());
            xe.setNgaydi(doc.get("ngaydi").toString());
            xe.setChinhsachhuyve(doc.get("chinhsachhuyve").toString());
            List<Ghe> listGhe=new ArrayList<Ghe>();
            listGhe=(List<Ghe>)doc.get("danhsachghe");
            xe.setDanhsachghe(listGhe);
            List<LichTrinh> listLT=new ArrayList<LichTrinh>();
            listLT=(List<LichTrinh>) doc.get("lichtrinh");
            xe.setLichtrinh(listLT);
            list.add(xe);
        }
        return list;
    }

    public boolean addXe(Xe xe) {
        try {
            coll.insertOne(new Document("_id",xe.get_id())
                    .append("loaixe",xe.getLoaixe())
                    .append("nhaxe",xe.getNhaxe())
                    .append("loaidi",xe.getLoaidi())
                    .append("chuyendi",xe.getChuyendi())
                    .append("danhgia",xe.getDanhgia())
                    .append("hinhanh",xe.getHinhanh())
                    .append("tinhdiqua",xe.getTinhdiqua())
                    .append("giodi",xe.getGiodi())
                    .append("ngaydi",xe.getNgaydi())
                    .append("chinhsachhuyve",xe.getChinhsachhuyve())
                    .append("lichtrinh",xe.getLichtrinh())
                    .append("danhsachghe",xe.getDanhsachghe())
            );
            return true;
        }
        catch (MongoException e){
            System.out.println(e);
        }

        return false;
    }
    public boolean updateXe(Xe xe){
        try {
            coll.updateOne(eq("_id",xe.get_id()),new Document("$set",new Document("loaixe",xe.getLoaixe())
                    .append("nhaxe",xe.getNhaxe())
                    .append("loaidi",xe.getLoaidi())
                    .append("chuyendi",xe.getChuyendi())
                    .append("danhgia",xe.getDanhgia())
                    .append("hinhanh",xe.getHinhanh())
                    .append("tinhdiqua",xe.getTinhdiqua())
                    .append("giodi",xe.getGiodi())
                    .append("ngaydi",xe.getNgaydi())
                    .append("chinhsachhuyve",xe.getChinhsachhuyve())
                    .append("lichtrinh",xe.getLichtrinh())
                    .append("danhsachghe",xe.getDanhsachghe())
                    )
            );
            return true;
        }
        catch (MongoException e){
            System.out.println(e);
        }

        return false;
    }
}
