package com.Novi.Modul3.Komposisi;

public class Monitor {
    private String merk;
    private String size;
    private String refreshRate;

    public Monitor(String merk, String size, String refreshRate) {
        this.merk = merk;
        this.size = size;
        this.refreshRate = refreshRate;
    }

    public void PrintSpec(){
        System.out.println("- Merk\t\t: " + merk);
        System.out.println("- Size\t\t: " + size);
        System.out.println("- Refresh Rate\t: " + refreshRate);
    }
}
