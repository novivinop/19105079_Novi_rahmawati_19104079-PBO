package Abstract;

public abstract class Binatang {
    Binatang(String jenis) {
        this.jenis = jenis;
    }

    protected abstract void suara();

    public String toString() {
        return "Seekor " + jenis;
    }

    private String jenis;

}
