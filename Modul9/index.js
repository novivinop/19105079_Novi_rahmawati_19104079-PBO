function Mahasiswa(nim, nama, prodi){
  this.nim = nim;
  this.nama = nama;
  this.prodi = prodi;

  //fungsi menampilkan
  this.tampil = function(){
    console.log('NIM : ',this.nim)
    console.log('Nama : ',this.nama)
    console.log('Prodi : ',this.prodi)
  }
}

let jmlMhs = prompt('Masukkan Jumlah Mahasiswa : ')

//array mahasiswa
var arrayMhs = []

//object Mahasiswa
var mhs = {}

for(let i=1; i<=jmlMhs; i++){
  console.log(`\nMahasiswa ke-${i}`)

  //buat object Mhs
  mhs = new Mahasiswa(
    prompt('Masukkan NIM : '),
    prompt('Masukkan Nama : '),
    prompt('Masukkan Prodi : ')
  )
  arrayMhs.push(mhs)
}

var editData = prompt('ingin Mengubah Data? [ya/tidak] : ')

if(editData == 'ya'){
  var noMhs = prompt('Masukkan Nomor Urut Mahasiswa : ')

  //tambah fungsi baru ke constructur
  Mahasiswa.prototype.edit = function(){
   nim = prompt('Masukkan NIM : '),
   nama = prompt('Masukkan Nama : '),
   prodi =  prompt('Masukkan Prodi : '),
   tampil = this.tampil
   return {nim, nama, prodi,tampil}
  }

  let index = noMhs-1
  arrayMhs[index] = arrayMhs[index].edit()
  console.log('nData setelah di ubah')
  index = 1

  for (let i in arrayMhs){
    console.log(`\nMahasiswa ke-${index}`)
    index++
    arrayMhs[i].tampil() 
  }}else if(editData == 'tidak'){
    console.log('\nData setelah diubah : ')
    index = 1

    for (let i in arrayMhs){
    console.log(`\nMahasiswa ke-${index}`)
    index++
    arrayMhs[i].tampil()
  } 
  }else {
    console.log('Pilihan Tidak Sesuai')
  }