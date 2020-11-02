package Abstract;

public class Burung extends Binatang {
    Burung (String nama) {
        super("Burung");
        this.nama = nama;
    }
    public void suara() {
        System.out.println("berkicau");
    }
    public String toString() {
        return super.toString() + " " + nama;
    }
    private String nama;
}
