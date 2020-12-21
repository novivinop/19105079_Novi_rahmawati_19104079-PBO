//deklarasi prompt
const prompt = require('prompt-sync')()
//function
function Buku(judulBuku, pengarang, penerbit, thTerbit) {
  this.judulBuku = judulBuku
  this.pengarang = pengarang
  this.penerbit = penerbit
  this.thTerbit = thTerbit

  this.tampil = function() {
    console.log('Judul Buku : ', this.judulBuku)
    console.log('Nama Pengarang : ', this.pengarang)
    console.log('Penerbit : ', this.penerbit)
    console.log('Tahun Terbit : ', this.thTerbit)
  }
}

let jmlBuku = prompt('Jumlah buku yang akan diimput : ')

//array 
var arrayBuku = []

//Objek
var buku = {}

//array Objek
for (let i = 1; i <= jmlBuku; i++) {
  console.log('\n')
  //constructor
  buku = new Buku(
    prompt(`Masukan judul buku ke-${i} : `),
    prompt('Masukan nama pengarang : '),
    prompt('Masukan nama penerbit : '),
    prompt('Masukan tahun terbit : ')
  )

  arrayBuku.push(buku)
}

console.log('\n')
var editData = prompt('Ingin mengubah data ? [ya/tidak] : ')

if (editData == 'ya') {
  var noBuku = prompt('Masukan urutan yang ingin diubah : ')
  var namaData = prompt('Masukan data yang ingin diubah [Judul/Pengarang/Penerbit/Tahun Terbit]: ')

  let index = noBuku - 1
  if (namaData == 'Judul') {
    arrayBuku[index].judulBuku = prompt('Masukan judul buku baru : ')
  } else if (namaData == 'Pengarang') {
    arrayBuku[index].pengarang = prompt('Masukan nama pengarang : ')
  } else if (namaData == 'Penerbit') {
    arrayBuku[index].penerbit = prompt('Masukan nama penerbit :')
  } else if (namaData == 'Tahun Terbit') {
    arrayBuku[index].thTerbit = prompt('Masukan tahun terbit : ')
  } else {
    console.log('Pilihan tidak sesuai')
  }

  console.log('\nData buku yang berhasil disimpan')

  index = 1

  //array
  for (let i in arrayBuku) {
    console.log(`\nBuku ke-${index}`)
    index++
    arrayBuku[i].tampil()
  }
} else if (editData == 'Tidak') {
  console.log('\nData buku yang berhasil disimpan')

  index = 1

  //array
  for (let i in arrayBuku) {
    console.log(`\nBuku ke-${index}`)
    index++
    arrayBuku[i].tampil()
  }
} else {
  console.log('Pilihan tidak sesuai')
}