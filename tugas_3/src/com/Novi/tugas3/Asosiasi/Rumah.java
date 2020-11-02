package com.Novi.tugas3.Asosiasi;

public class Rumah {
    private String idRumah; // idRumah bertipe data string
    private String pemilikRumah; // pemilik Rumah bertipe data string
    private int jumlahOrang; // jumlahOrang bertipe data integer

    // Constructor yang parameternya berisi variabel idRumah, pemilikRumah, jumlahOrang
    public Rumah(String idRumah, String pemilikRumah, int jumlahOrang) {
        this.idRumah = idRumah;
        this.pemilikRumah = pemilikRumah;
        this.jumlahOrang = jumlahOrang;
    }

    // Method getter idRumah, pemilikRumah, jumlahOrang
    public String getIdRumah() {
        return idRumah;
    }

    public String getPemilikRumah() {
        return pemilikRumah;
    }

    public int getJumlahOrang() {
        return jumlahOrang;
    }
}
