package com.Novi.tugas3.Komposisi;

public class Ayah {
    private int idAyah; //tipe data integer
    private String namaAyah; //tipe data string
    private int umurAyah; //tipe data integer


    public Ayah(int idAyah, String namaAyah, int umurAyah) { //CONSTRUCTOR
        this.idAyah = idAyah;
        this.namaAyah = namaAyah;
        this.umurAyah = umurAyah;
    }

    public int getIdAyah() {
        return idAyah;
    }

    public String getNamaAyah() {
        return namaAyah;
    }

    public int getUmurAyah() {
        return umurAyah;
    }
}
