//deklarasi
var n =0
var o=0
bilPrima = " "

//looping
for(n = 1; n<= 50; n++){
    var counter = 0
    
    for(o= n; o >= 1; o = o - 1){
        if(n % o == 0){
        counter = counter + 1
        }
    }
    if(counter == 2){
        bilPrima = bilPrima + n + ", ";
    }
}
console.log('Bilangan Prima\t: ' + bilPrima) //output