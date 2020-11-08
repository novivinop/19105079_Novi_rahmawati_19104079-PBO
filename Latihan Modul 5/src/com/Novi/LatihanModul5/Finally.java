package com.Novi.LatihanModul5;

public class Finally {
    public static void main(String[] args) {
        int[]array=new int[5];
        try{
            System.out.println("Akses Elemen ke-5\t: "+array[5]); //open database
        }catch (ArrayIndexOutOfBoundsException e){
            System.out.println("Ada Exception Array");
        }finally {
            array[array.length -1]=10; //close database
            System.out.println("Nilai elemen terakhir\t: "+array[array.length -1]);
        }
    }
}
