package com.Novi.tugas3.Agregasi;

import com.Novi.tugas3.Agregasi.Planet;

import java.util.ArrayList;
import java.util.List;

public class SolarSystem {
    private String id; //tipe data string
    private String nama; //tipe data string

    private List<Planet> planetList = new ArrayList<>(); //deklarasi kelas planet

    public SolarSystem(String id, String nama) { //constructor parameter id dan nama
        this.id = id;
        this.nama = nama;
    }
    public int getTotalMember() {
        return getPlanets().size();
    } //getter and shetter method

    public List<Planet> getPlanets() {
        return planetList;
    }

    public void setPlanetList(List<Planet> planetList) {
        this.planetList = planetList;
    }

    public String getId() { //tipe data string
        return id;
    }
    public String getNama() {

        return nama;
    }

    // Method getData untuk mencetak output program
    public void getData() {
        System.out.println("ID Solar System\t\t: " + getId());
        System.out.println("Nama Solar System\t: " + getNama());
        System.out.println("Total Member\t\t: " + getTotalMember());
        System.out.println();
        for (Planet planet: planetList) {
            System.out.println(" ID Planet\t: " + planet.getIdPlanet() +
                    " \t Urutan Planet\t: " + planet.getUrutanPlanet() +
                    " \t Nama Planet\t: " + planet.getNamaPlanet());
        }
    }
}
