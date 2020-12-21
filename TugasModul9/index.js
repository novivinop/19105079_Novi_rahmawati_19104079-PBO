const prompt = require('prompt-sync')()

function Hewan(nama, jenis, umur, makanan, riwayat_penyakit) {
  this.nama = nama
  this.jenis = jenis
  this.umur = umur
  this.makanan = makanan
  this.riwayat_penyakit = riwayat_penyakit

  this.tampil = function() { //menggunakan fungsi menampilkan
    console.log('Nama\t\t\t\t: ', this.nama)
    console.log('Jenis\t\t\t\t: ', this.jenis)
    console.log('Umur\t\t\t\t: ', this.umur)
    console.log('Makanan\t\t\t\t: ', this.makanan)
    console.log('Riwayat Penyakit\t: ', this.riwayat_penyakit)
  }
}

var array = [] //deklarasi objek array tanpa value
var hewan = {} // deklarasi objek hewan tanpa value

var cek = false

do {
  console.log()

  console.log('Selamat Datang di Pet Shop Hokie')
  console.log('Menu Pilihan')
  console.log('1. Tambah Hewan')
  console.log('2. Edit Hewan')
  console.log('3. Tampil Hewan')
  console.log('4. Exit')
  console.log()
  let pil = prompt('Masukkan Pilihan Menu\t: ')

  console.log()

  if (pil == 1) {
    let jmlHewan = prompt('Masukkan Jumlah Hewan\t: ')

    for (let i = 0; i < jmlHewan; i++) {
      console.log(`\nHewan ke-${i}`);
      hewan = new Hewan(
        prompt(`Masukkan Nama\t\t\t\t: `),
        prompt(`Masukkan Jenis\t\t\t\t: `),
        prompt(`Masukkan Umur\t\t\t\t: `),
        prompt(`Masukkan Makanan\t\t\t: `),
        prompt(`Masukkan Riwayat Penyakit\t: `)
      )
      array.push(hewan)
    }
    console.log()

  } else if (pil == 2) {
    var noHewan = prompt('Masukkan Nomor Hewan\t: ')

    Hewan.prototype.edit = function() { //menambah fungsi baru
      nama = prompt(`Masukkan Nama\t\t\t\t: `),
        jenis = prompt(`Masukkan Jenis\t\t\t\t: `),
        umur = prompt(`Masukkan Umur\t\t\t\t: `),
        makanan = prompt(`Masukkan Makanan\t\t\t: `),
        riwayat_penyakit = prompt(`Masukkan Riwayat Penyakit\t: `),
        tampil = this.tampil
      return { nama, jenis, umur, makanan, riwayat_penyakit, tampil }
    }

    let index = noHewan - 1
    array[index] = array[index].edit()

    console.log('\nData Berhasil Dirubah')
    console.log()

  } else if (pil == 3) {
    index = 1

    for (let x in array) { //fungsi untuk menampilkan output
      console.log(`\nHewan ke-${index}`);
      index++;
      array[x].tampil()
    }
    console.log()

  } else if (pil == 4) {
    cek = true
    console.log('Terima kasih telah berlangganan di Pet Shop Hokie')

  } else {
    console.log('Maaf data yang anda masukkan salah')
    console.log()
  }
} while (!cek)