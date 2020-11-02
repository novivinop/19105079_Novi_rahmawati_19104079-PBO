package com.Novi.tugas4;

import java.util.Random;

public class DemoEmployee {
    public static void main(String[] args) {
        Employee[] employee = {
                new Commision( //memanggil mthod array
                        "KIKI",
                        "1191008",
                        500000,
                        6000,
                        4,
                        (float) 0
                ),
                new Salaired(
                        "Rohayeh",
                        "1912333",
                        300000,
                        50000,
                        4,
                        4
                ),
                new ProjectPlanner(
                        "Kandram",
                        "12444244",
                        400000,
                        40000,
                        3,
                        5
                )
        };

        Random pilihan = new Random(); //INDEX RANDOM
        Employee karyawan = employee[pilihan.nextInt(employee.length)];

        System.out.println("Semua gaji karyawan"); //MENDAPATKAN GAJI
        karyawan.getGaji();
    }
}
