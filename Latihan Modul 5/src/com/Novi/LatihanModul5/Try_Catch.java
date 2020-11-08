package com.Novi.LatihanModul5;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;

public class Try_Catch {
    public static void main(String[] args) {
        File file=new File( "C:\\Users\\win8.1\\IdeaProjects\\LatMod5");

        try {
            FileReader fileReader= new FileReader(file);
            System.out.println("Read file berhasil");
        } catch (FileNotFoundException e) {
            System.out.println("Tidak ada File");
            e.printStackTrace();
        }
    }
}
