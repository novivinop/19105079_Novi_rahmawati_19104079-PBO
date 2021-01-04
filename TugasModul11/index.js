var mhsArray = [];

var app = (function() {

  function addMahasiswa() {
    console.log("\n Tambah data mahasiswa ");
    nama = prompt("Masukan nama mahasiswa : ")
    tanggalLahir = prompt("Masukan tanggal lahir : ")
    nim = prompt("Masukan NIM : ")
    prodi = prompt("Masukan prodi : ")

    return {
      nama: nama,
      tanggalLahir: tanggalLahir,
      nim: nim,
      prodi: prodi,
      grade: null
    }
  }
  function ask(inputName) {
    return prompt(inputName);
  }

  function getGrade(nilai) {
    if (nilai >= 80 && nilai <= 100) {
      return 'A'
    } else if (nilai >= 60 && nilai <= 79) {
      return 'B'
    } else if (nilai >= 40 && nilai <= 59) {
      return 'C'
    } else if (nilai >= 0 && nilai <= 39) {
      return 'D'
    }
  }

  function printMenu() {
    console.log("\n Menu Penilaian ");
    console.log("1. Tambah mahasiswa");
    console.log("2. Penilaian");
    console.log("3. Lihat seluruh mahasiswa");
    console.log("4. Keluar");
  }

  return {
    addMahasiswa: addMahasiswa,
    ask: ask,
    getGrade: getGrade,
    printMenu: printMenu,
  }

}())

var loop = 1;

while (loop > 0) {
  app.printMenu()

  var menuYangDipilih = app.ask("Masukan menu : ")

  switch (menuYangDipilih) { //meanampilkan menu yang dipilih
    case '1':

      mhsArray.push(app.addMahasiswa())
      break;

    case '2':
      for (let m = 0; m < mhsArray.length; m++) {
        console.log("\n Nomor Urut Mahasiswa : " + (m + 1));
        console.log("\n Data Mahasiswa Sebelum dinilai");
        console.log("Nama : " + mhsArray[m].nama);
        console.log("Tanggal lahir : " + mhsArray[m].tanggalLahir);
        console.log("Nim : " + mhsArray[m].nim);
        console.log("Prodi : "+mhsArray[m].prodi);
        console.log("Grade : " + mhsArray[m].grade);
      }

      console.log("\n");
        console.log("\n Memasukkan Nilai Mahasiswa");
      var dataYangInginDiEdit = app.ask("Masukan nomor urut mahasiswa : ")
      var index = dataYangInginDiEdit - 1;
      
      var tanyaNilai = app.ask("Masukan nilai mahasiswa : ")

      mhsArray[index].grade = app.getGrade(tanyaNilai)

      console.log("Nilai Berhasil di Inputkan ");

      break;

    case '3':
      for (let m = 0; m < mhsArray.length; m++) {
        console.log("\n Nomor Urut Mahasiswa : " + (m + 1));
        console.log("Nama : " + mhsArray[m].nama);
        console.log("Tanggal lahir : " + mhsArray[m].tanggalLahir);
        console.log("Nim : " + mhsArray[m].nim);
        console.log("Prodi : "+mhsArray[m].prodi);
        console.log("Grade : " + mhsArray[m].grade);
      }
      break;

    case '4':
      console.log("Terimakasih ^^");
      loop = 0
      break;

    default:
      console.log("Error : Menu " + menuYangDipilih + " tidak tersedia!");
  }
}