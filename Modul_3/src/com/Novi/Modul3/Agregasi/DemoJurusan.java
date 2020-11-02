package com.Novi.Modul3.Agregasi;

import com.Novi.Modul3.Asosiasi.Mahasiswa;

import java.util.List;

public class DemoJurusan {
    public static void main(String[] args) {
        Jurusan jurusan = new Jurusan("2110", "Software Engineering");

        Mahasiswa mahasiswa1 = new Mahasiswa("Paimon", 21104001);
        Mahasiswa mahasiswa2 = new Mahasiswa("Tabi Bito", 21104006);
        Mahasiswa mahasiswa3 = new Mahasiswa("Barbara" 2104007);

        List<Mahasiwa> mahasiswaList = new ArrayList<>();
        mahasiswaList.add(mahasiswa1);
        mahasiswaList.add(mahasiswa2);
        mahasiswaList(new Mahasiswa("Fischl", 21104004));

        //untuk compas data dari list mahsiswa class demoJurusan ke class "jurusan
        jurusan.setMahasiswaList(mahasiswaList);

        jurusan.addMahasiswa(mahasiswa3);
    }
}
