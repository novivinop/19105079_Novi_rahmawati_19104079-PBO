function PersegiPanjang(panjang, lebar){
  this.panjang = panjang
  this.lebar = lebar
}

PersegiPanjang.prototype.getLuas = function(){
  var luas = this.panjang * this.lebar
  console.log("Luas : ", this.panjang)
  console.log("Luas : ", this.panjang, " X ", this.lebar, " : ", luas)
}

PersegiPanjang.prototype.print = function(){
  console.log("Panjang sisi : ", this.panjang)
  console.log("Lebar sisi : ", this.lebar)
}

function Persegi(sisi){ //fungsi turunan
  this.panjang = sisi
  this.lebar = sisi
}

Persegi.prototype = new PersegiPanjang() //inheritance fungsi persegi panjang
Persegi.prototype.constructor = PersegiPanjang

Persegi.prototype.print = function(){ //redefinisi fungsi print
  console.log("Panjang Sisi : ", this.panjang)
}

//const prompt = require('Prompt-sync')()

console.log("Input Persegi Panjang")
var obPersegiPanjang = new PersegiPanjang(
  prompt('Masukkan Panjang : '),
  prompt('Masukkan Lebar : ')
)

console.log("\nInput Persegi")
var obPersegi = new Persegi(
  prompt('Masukkan Panjang Sisi : ')
)

console.log("\nMenghitung Luas Persegi Panjang")
obPersegiPanjang.print()
obPersegiPanjang.getLuas()

console.log("\nMenghitung Luas Persegi")
obPersegi.print()
obPersegi.getLuas()