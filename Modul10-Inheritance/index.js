function PersegiPanjang(panjang, lebar){
  this.panjang = panjang
  this.lebar = lebar
}

PersegiPanjang.prototype.getLuas = function() {
  var luas = this.panjang * this.lebar
  console.log('Luas : ', this.panjang, ' x ', this.lebar, ' : ', luas)
}

PersegiPanjang.prototype.print = function(){
  var luas = this.panjang * this.lebar
  console.log('Luas : ', this.panjang, 'x', this.lebar, ' : ', luas)
}

PersegiPanjang.prototype.print = function(){
  console.log('Panjang sisi : ', this.panjang)
  console.log('Lebar sisi : ', this.lebar)
}

function Persegi(sisi) {
  this.panjang = sisi
  this.lebar = sisi
}

Persegi.prototype = new PersegiPanjang()
Persegi.prototype.constructor = new PersegiPanjang

Persegi.prototype.print = function() {
  console.log.('Panjang sisi : ', this.panjang)
}
//const prompt = require('prompt-sync')


console.log('Input Persegi Panjang')
var obPersegiPanjang = new PersegiPanjang(
  prompt('Masukkan panjang : '),
  prompt('Masukkan lebar : ')
)

console.log('\nInput Persegi')
var obPersegi = new Persegi(
  prompt('Masukkan panjang sisi : ')
)

console.log('\nMenghitung Luas Persegi Panjang')
obPersegiPanjang.print()
obPersegiPanjang.getLuas()

console.log('\nMenghitung Luas Persegi')
obPersegi.print()
obPersegi.getLuas()