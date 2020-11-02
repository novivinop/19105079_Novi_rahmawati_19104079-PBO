package com.Novi.tugas3.Asosiasi;

public class DemoKomplek {
    public static void main(String[] args) {
        Komplek komplek = new Komplek("PERUM HARAPAN", "Java"); //INISIASI OBJEK KOMPLEK

        Rumah rumah1 = new Rumah("A-11", "BARBARA", 1); //INISIASI OBJEKRUMAH
        Rumah rumah2 = new Rumah("A-12", "LUCAS", 4);
        Rumah rumah3 = new Rumah("A-13", "LALA", 3);
        Rumah rumah4 = new Rumah("A-14", "PETER", 6);
        Rumah rumah5 = new Rumah("A-15", "THOMAS", 2);

        komplek.addRumah(rumah1.getIdRumah()); //MEMANGGIL METHOD
        komplek.addRumah(rumah2.getIdRumah());
        komplek.addRumah(rumah3.getIdRumah());
        komplek.addRumah(rumah4.getIdRumah());
        komplek.addRumah(rumah5.getIdRumah());

        komplek.getDataKompek();

    }
}
