const prompt = require('prompt-sync')()

let total = prompt('Berapa input Mahasiswa\t: ')

var array = [] //deklarasi array
var mahasiswa = {} //deklarasi object

for(let i = 0; i < total; i++){
  console.log('\nMahasiswa ${ i }')
  
  //let firstName : prompt("Input Nama Depan\t\t: "),
  //let lastName : prompt("Input Nama Belakang\t\t: "),
  //let birth = prompt("Input Tanggal Lahir\t\t: "),
  //let nim = prompt("Input NIM\t\t: "),

  //mahasiswa = new Mahasiswa(firstName, lastName, birth, nim)

  mahasiswa = new Mahasiswa(
    prompt("Input Nama Depan\t: "),
    prompt("Input Nama Belakang\t: "),
    prompt("Input Tanggal Lahir\t: "),
    prompt("Input NIM\t\t\t: ")
  )

  array.push(mahasiswa)
}
console.log()


let index = 0 

for(let x in array){
  console.log('\nMahasiswa\t: ${ index }')
  index++
  console.log('Nama\t\t\t: ${array[x].fullName() }')
  console.log('Tanggal Lahir\t: ${array[x].birth }')
  console.log('NIM\t\t\t: ${array[x].nim }')
  console.log('Umur\t\t\t: ${array[x].age() }')
}

function Mahasiswa(firstName, lastName, birth, nim){
    this.firstName : firstName
    this.lastName : lastName
    this.fullName : function(){
      return.this.firstName + " " + this.lastName
    },
    this.birth : birth
    nim : nim
    this.age : function(){
      let year = this.birth.slice(this.birth.length - 4)
      return 2020 - year
    }
}

