package com.Novi.TugasModul5;

import java.util.Scanner;

public class InputID {
    public static void main(String[] args) throws Exception {

        System.out.println("<-- Pelanggan Roti Keju -->");
        System.out.print("Jumlah Pelanggan : ");


        int scan = scanInt();
        try {

            if (scan <= 10) {

                int[] jmlPengunjung = new int[scan]; //deklarasi array
                System.out.println();
                System.out.println("Masukan Data Pengunjung : ");
                for (int i = 0; i < jmlPengunjung.length ; i++) { //data array
                    System.out.println();
                    System.out.print("UID " + i + ":\t");
                    jmlPengunjung[i] = scanInt();
                    System.out.println("Data Ke-" + i + " : " + "Terdaftar!\t");
                    System.out.println();
                }

                System.out.println("\nLihat Data Pengunjung"); //print data array

                while (true) {
                    System.out.print("Indeks :\t");
                    int scanLihatData = scanInt();

                    if (scanLihatData > jmlPengunjung.length) {
                        throw new Exception("Index " + scanLihatData + " tidak ditemukan");
                    }

                    System.out.println("Data ke-" + scanLihatData + " : " + jmlPengunjung[scanLihatData]);
                    System.out.print("Mau lihat data lagi (y/n) : ");
                    String inginLihatData = scanString();

                    if (inginLihatData == "n" || inginLihatData == "N") {
                        break;
                    }

                }


            } else {
                throw new Exception("Jumlah pengunjung tidak boleh melebihi 10");
            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public static int scanInt() {
        Scanner scan = new Scanner(System.in);
        int result = scan.nextInt();
        return (int) result;
    }
    public static String scanString() {
        Scanner scan = new Scanner(System.in);
        String result = scan.nextLine();
        return (String) result;
    }
}
