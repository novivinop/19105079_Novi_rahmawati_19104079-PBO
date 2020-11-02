package com.Novi.Modul3.Asosiasi;

public class Dosen {
    private String kodeDosen;
    private int[] nimMhs = new int[10];
    private int jmlMahasiswa;

    public String getKodeDosen(){
        return kodeDosen;
    }
    public void setKodeDosen(String kodeDosen){
        this.kodeDosen = kodeDosen;
    }
    public int getNimMhs(int indeks){
        return (nimMhs[indeks]);
    }
    public void setNimMhs(int nim){
        nimMhs[jmlMahasiswa] = nim;
        jmlMahasiswa++;
    }
    public int getJmlMahasiswa(){
        return jmlMahasiswa;
    }
}
