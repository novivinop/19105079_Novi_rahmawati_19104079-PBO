package com.Novi.tugas3.Komposisi;

public class Ibu {
    private int idIbu; //tipe data integer
    private String namaIbu; //tipe data string
    private int umurIbu; //tipe data integer

    public Ibu(int idIbu, String namaIbu, int umurIbu) { //CONSTRACTOR
        this.idIbu = idIbu;
        this.namaIbu = namaIbu;
        this.umurIbu = umurIbu;
    }

    public int getIdIbu() {
        return idIbu;
    } //METHOD

    public String getNamaIbu() {
        return namaIbu;
    }

    public int getUmurIbu() {
        return umurIbu;
    }
}
