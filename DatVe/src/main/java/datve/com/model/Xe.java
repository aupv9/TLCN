package datve.com.model;



import java.util.List;

public class Xe {

    private int _id;
    private String loaixe;
    private String nhaxe;
    private int giodi;
    public int[] getTinhdiqua() {
        return tinhdiqua;
    }

    public void setTinhdiqua(int[] tinhdiqua) {
        this.tinhdiqua = tinhdiqua;
    }

    public int getGiodi() {
        return giodi;
    }

    public void setGiodi(int giodi) {
        this.giodi = giodi;
    }

    private String loaidi;
    private String chuyendi;
    private int danhgia;
    private int[] tinhdiqua;
    public int get_id() {
        return _id;
    }

    public void set_id(int _id) {
        this._id = _id;
    }

    public String getLoaixe() {
        return loaixe;
    }

    public void setLoaixe(String loaixe) {
        this.loaixe = loaixe;
    }

    public String getNhaxe() {
        return nhaxe;
    }

    public void setNhaxe(String nhaxe) {
        this.nhaxe = nhaxe;
    }

    public String getLoaidi() {
        return loaidi;
    }

    public void setLoaidi(String loaidi) {
        this.loaidi = loaidi;
    }

    public String getChuyendi() {
        return chuyendi;
    }

    public void setChuyendi(String chuyendi) {
        this.chuyendi = chuyendi;
    }

    public float getDanhgia() {
        return danhgia;
    }

    public void setDanhgia(int danhgia) {
        this.danhgia = danhgia;
    }

    public String getHinhanh() {
        return hinhanh;
    }

    public void setHinhanh(String hinhanh) {
        this.hinhanh = hinhanh;
    }

    public String getNgaydi() {
        return ngaydi;
    }

    public void setNgaydi(String ngaydi) {
        this.ngaydi = ngaydi;
    }

    public String getChinhsachhuyve() {
        return chinhsachhuyve;
    }

    public void setChinhsachhuyve(String chinhsachhuyve) {
        this.chinhsachhuyve = chinhsachhuyve;
    }

    public List<LichTrinh> getLichtrinh() {
        return lichtrinh;
    }

    public void setLichtrinh(List<LichTrinh> lichtrinh) {
        this.lichtrinh = lichtrinh;
    }

    public List<Ghe> getDanhsachghe() {
        return danhsachghe;
    }

    public void setDanhsachghe(List<Ghe> danhsachghe) {
        this.danhsachghe = danhsachghe;
    }

    private String hinhanh;
    private String ngaydi;
    private String chinhsachhuyve;
    private List<LichTrinh> lichtrinh;
    private List<Ghe> danhsachghe;


}
