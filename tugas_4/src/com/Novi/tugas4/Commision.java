package com.Novi.tugas4;

public class Commision extends Employee {
    public Commision(
            String nama,
            String nip,
            float upah,
            float komisi,
            float total_penjualan,
            float total_proyek

    ) {
        super( //CONSTRUCTOR
                nama,
                nip,
                upah,
                komisi,
                total_penjualan,
                total_proyek
        );
    }
    @Override //Override Methods
    public void getGaji() {
        float gaji = this.upah + (this.komisi * this.total_penjualan);
        System.out.println("Total gaji " + this.nama + " adalah " + gaji);
    }
}
