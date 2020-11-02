package com.Novi.tugas3.Komposisi;

public class Anak {
    private int idAnak; //tipe data integer
    private String namaAnak; //tipe data string
    private int umurAnak; //tipe data interger
    private String statusAnak; //tipe data string

    public Anak(int idAnak, String namaAnak, int umurAnak, String statusAnak) { //CONSTRUCTOR
        this.idAnak = idAnak;
        this.namaAnak = namaAnak;
        this.umurAnak = umurAnak;
        this.statusAnak = statusAnak;
    }

    public int getIdAnak() {
        return idAnak;
    } //METHOD

    public String getNamaAnak() {
        return namaAnak;
    }

    public int getUmurAnak() {
        return umurAnak;
    }

    public String getStatusAnak() {
        return statusAnak;
    }
}
