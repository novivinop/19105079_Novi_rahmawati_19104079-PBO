package Interface;

public class Buku {
    String judul, pengarang;
    long hargaBuku;

    public Buku(String judul, String pengarang, long hargaBuku) {
        this.judul = judul;
        this.pengarang = pengarang;
        this.hargaBuku = hargaBuku;
    }

    public void cetakBuku() {
        System.out.println("\n Judul : " + judul);
        System.out.println("Pengarang : " + pengarang);
        System.out.println("Harga Buku " + hargaBuku);
        System.out.println();
    }
}
