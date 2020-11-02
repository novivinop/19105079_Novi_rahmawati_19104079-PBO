package Abstract;

import java.util.Random;

public class DemoAbstract {
    public static void main(String[] args) {
        Binatang[] peliharaanku = {
                new Burung("Beo"),
                new Kambing("Etawa"),
                new Kucing("Persia"),
                new Anjing("Chihuahua")
        };
        Binatang kesayangan;
        Random pilihan = new Random();

        kesayangan = peliharaanku[pilihan.nextInt(peliharaanku.length)];

        System.out.println("Bintang kesayangan anda : " + kesayangan);
        System.out.println("Suaranya : ");
        kesayangan.suara();
    }
}
