package com.Novi.LatihanModul5;

public class Multi_Try_2 {
    public static void main(String[] args) {
        int[]array = new int[5];
        try {
            System.out.println(array[5]);
            array[4]=30/0;

        }catch (ArrayIndexOutOfBoundsException e){
            System.out.println("Panjang kurang dari 5!!");
        }catch (ArithmeticException e){
            System.out.println("Jangan dibagi 0!");
        }
    }
}
