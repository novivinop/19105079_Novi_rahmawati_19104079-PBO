package com.Novi.tugas3.Komposisi;

import java.util.ArrayList;

public class DemoKeluarga {
    public static void main(String[] args) {
        Keluarga keluarga = new Keluarga("Keluarga Bebas", "Bandung");

        ArrayList<Anak> anakList = new ArrayList<>();

        keluarga.addAnggotaKeluarga(new Ayah(1, "Dady", 50),
                new Ibu(2, "Lala", 40),
                anakList);
        anakList.add(new Anak(3, "Galang", 20,"Anak Kandung")); //menambahkan object
        anakList.add(new Anak(4, "Dika", 15,"Anak Kandung"));

        keluarga.getDataKeluarga();
    }
}
