package com.Novi.tugas4;

public class Salaired extends Employee {
    public Salaired(
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
                (float) 0,
                (float) 0,
                (float) 0
        );
    }
    //Override Methods
    @Override
    public void getGaji() {
        System.out.println("Total gaji " + this.nama + " adalah " + this.upah);
    }
}
