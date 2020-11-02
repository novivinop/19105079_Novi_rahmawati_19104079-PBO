package Interface;

public class Paket extends Buku implements InterfaceCD{
    long hargaPaket;
    InterfaceCD interfaceCD;

    public  Paket(String judul, String pengarang, long hargaBuku, String ukuran, long hargaCD){
        super(judul, pengarang, hargaBuku);
        interfaceCD = new ChildCD(ukuran, hargaCD);
    }
    public void hitungHargaPaket(){
        hargaPaket = super.hargaBuku + getHargaCD();
    }
    public long getHargaCD() {
        return (interfaceCD.getHargaCD());
    }
    public void cetakCD(){
        interfaceCD.cetakCD();
    }
    public void cetakPaket(){
        super.cetakBuku();
        cetakCD();
        System.out.println("Harga Paket Buku dan CD : Rp" + hargaPaket + "\n");
    }
}
