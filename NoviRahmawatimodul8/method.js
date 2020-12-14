const prompt = require('prompt-sync')()

let total = prompt('Berapa input Mahasiswa\t: ')

var array = [] //deklarasi array
var mahasiswa = {} //deklarasi object

for(let i = 0; i < total; i++){
  console.log('\nMahasiswa ${ i }')
  mahasiswa = {
    firstName : prompt('Input Nama Depan\t\t: '),
    lastName : prompt('Input Nama Belakang\t\t: '),
    fullName : function(){
      return.this.firstName + " " + this.lastName
    },
    birth : prompt('Input Tanggal Lahir\t: '),
    nim : prompt('Input NIM\t\t\t: '),
    age : function(){
      let year = this.birth.slice(this.birth.length - 4)
      return 2020 - year
    }
  }
  array.push(mahasiswa)
}
console.log()

let index = 0 

for(let x in array){
  console.log(`\nData Mahasiswa\t: ${ index }`);
	index++;
	console.log(`Nama\t\t\t: ${ aray[x].fullName() }`);
	console.log(`Tanggal Lahir\t: ${ aray[x].birth }`);
	console.log(`NIM\t\t\t\t: ${ aray[x].nim }`);
	console.log(`Umur\t\t\t: ${ aray[x].age() }`);
}