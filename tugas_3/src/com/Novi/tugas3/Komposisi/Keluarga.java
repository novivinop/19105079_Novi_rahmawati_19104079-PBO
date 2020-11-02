package com.Novi.tugas3.Komposisi;

import java.util.ArrayList;

public class Keluarga {
    private String namaKeluarga; //tipe data string
    private String kotaAsal; //tipe data string
    private Ayah ayah;
    private Ibu ibu;

    private ArrayList<Anak> anakList = new ArrayList<>(); //DEKLARASI ARRAY

    public Keluarga(String namaKeluarga, String kotaAsal) {//CONSTRACTOR
        this.namaKeluarga = namaKeluarga;
        this.kotaAsal = kotaAsal;
    }

    public String getNamaKeluarga() {

        return namaKeluarga;
    }

    public String getKotaAsal() {

        return kotaAsal;
    }

    public void addAnggotaKeluarga(Ayah ayah, Ibu ibu, ArrayList<Anak> anakList) { //METHOD
        this.ayah = ayah;
        this.ibu = ibu;
        this.anakList = anakList;
    }

    public Ayah getAyah() {
        return ayah;
    }

    public Ibu getIbu() {
        return ibu;
    }

    public ArrayList<Anak> getAnakList() {

        return anakList;
    }

    public void getDataKeluarga() { //METHOD UNTUK MENCETAK OUTPUT
        System.out.println("Nama Keluarga\t: " + getNamaKeluarga());
        System.out.println("Kota Asal\t\t: " + getKotaAsal());
        System.out.println();

        System.out.println("ID Ayah\t\t: " + getAyah().getIdAyah() + "\n" + //DATA AYAH
                "Nama Ayah\t: " + getAyah().getNamaAyah() + "\n" +
                "Umur Ayah\t: " + getAyah().getUmurAyah() + " Tahun");
        System.out.println();

        System.out.println("ID Ibu\t\t: " + getIbu().getIdIbu() + "\n" + //DATA IBU
                "Nama Ibu\t: " + getIbu().getNamaIbu() + "\n" +
                "Umur Ibu\t: " + getIbu().getUmurIbu() + " Tahun");
        System.out.println();

        System.out.println("Jumlah Anak\t: " + getAnakList().size()); //DATA ANAK
        System.out.println();

        for (Anak anak : anakList ) {
            System.out.println("ID Anak\t\t: " + anak.getIdAnak() + "\n" +
                    "Nama Anak\t: " + anak.getNamaAnak() + "\n" +
                    "Umur Anak\t: " + anak.getUmurAnak() + " Tahun" + "\n" +
                    "Status Anak\t: " + anak.getStatusAnak() + "\n");
        }
    }
}
