var pegawai = {
  inputData : function (nip, nama, alamat, gajipokok){
    this.nip = prompt('Masukkan NIP\t:')
    this.nama = prompt('Masukkan Nama\t: ')
    this.alamat = prompt ('Masukkan Alamat\t: ')
    this.gajipokok = prompt('Masukkan Gaji Pokok\t: ')
  },  
  inputTunjangan : function(tunjangan){
    this.tunjangan = prompt('Masukkan Tunjangan\t: ')
  } ,

  print : function(){
    console.log('NIP\t: ', this.nip)
    console.log('Nama\t: ', this.nama)
    console.log('Alamat\t: ', this.alamat)
    console.log('Gaji Pokok\t: ', this.gajipokok)
    console.log('Tunjangan\t: ', this.tunjangan)
    console.log('Total Gaji\t: ',(this.gajipokok*1) + (this.tunjangan))
  } 
  }

  var Sales = Object.create(pegawai)
  Sales.inputTunjangan = function(tunjangan){
    jmlPelanggan = prompt('Masukkan Jumlah Pelanggan Yang direkrut\t: ')
    this.tunjangan = jmlPelanggan * 50000
  }
  var Satpam = Object.create(pegawai)
  Satpam.inputTunjangan = function(tunjangan){
  jam = prompt('Masukkan jumlah lembur (dalam jam)\t: ')
  this.tunjangan = jam*10000
  }

  var Manager = Object.create(pegawai)
  Manager.inputTunjangan = function(tunjangan){
    thMasuk = prompt('Masukkan Tahun Masuk\t: ')
    lamaKerja = 2020 - thMasuk
    if(lamaKerja <= 3 ){
      this.tunjangan = 5 / 100 * this.gajipokok
    } else{
      this.tunjangan = 10 / 100 * this.gajipokok
    }
  }

  console.log('Data Pegawat PT ABC')
  console.log("1. Satpam")
  Satpam.inputData()
  Satpam.inputTunjangan()

  console.log("2. Sales")
  Sales.inputData()
  Sales.inputTunjangan()

  console.log("3. Manager")
  Manager.inputData()
  Manager.inputTunjangan()

  console.log("\n <===== Hasil Input Data Pegawai =====>")
  console.log("\n1. Data Satpam")
  Satpam.print()
  console.log("\n2. Data Sales")
  Sales.print()
  console.log("\n1. Data Manager")
  Manager.print()