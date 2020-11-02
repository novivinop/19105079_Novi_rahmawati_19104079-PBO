package com.Novi.tugas3.Agregasi;

public class Planet {
    private int idPlanet; // tipe data integer
    private int urutanPlanet; // tipe data integer
    private String namaPlanet; // tipe data string

    public Planet(int idPlanet, int urutanPlanet, String namaPlanet) { //CONSTRUCTOR
        this.idPlanet = idPlanet;
        this.urutanPlanet = urutanPlanet;
        this.namaPlanet = namaPlanet;
    }

    public void setIdPlanet(int idPlanet) {
        this.idPlanet = idPlanet;
    } //METHOD

    public void setUrutanPlanet(int urutanPlanet) {
        this.urutanPlanet = urutanPlanet;
    }

    public void setNamaPlanet(String namaPlanet) {
        this.namaPlanet = namaPlanet;
    }

    // Method getter id planet, urutan planet, dan nama planet
    public int getIdPlanet() {
        return idPlanet;
    }

    public int getUrutanPlanet() {
        return urutanPlanet;
    }

    public String getNamaPlanet() {
        return namaPlanet;
    }
}
