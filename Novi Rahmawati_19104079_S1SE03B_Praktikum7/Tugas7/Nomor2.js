/*
*Novi Rahmawati*/

class mean {
    constructor(nama = null, nilaiAsArray = []) {
        this.nama = nama
        this.nilai = nilaiAsArray
    }

    getMean() {
        var tambahSemua = this.sum(this.nilai) //meanmbahkan nilai array

        var hasil = Number(tambahSemua / this.nilai.length) //membagi dengan jumlah data

        console.log(this.nama + " rata rata nilai kamu adalah " + hasil);
    }
    
    sum(input){ //menjumlahkan value array
             
        if (toString.call(input) !== "[object Array]")
        return false;
      
        var total =  0;
        for(var i = 0; i < input.length; i++)
        {                  
            if(isNaN(input[i])){
            continue;
             }
              total += Number(input[i]);
        }
        return total;
    }
}


function askFor(name) { //method menanyakan inputan
    return prompt("Masukan " + name)
}

var tanyaJumlahNilai = askFor("Jumlah nilai");

var nilai = []  //meamasukan nilai kedalam array
for (let i = 0; i < tanyaJumlahNilai; i++) {
    nilai[i] = askFor("Nilai ke-" + (i + 1) )
}

var app = new mean("Novi Rahmawati", nilai) //memasukan class untuk diproses

app.getMean() //mencetak nilai ratarata