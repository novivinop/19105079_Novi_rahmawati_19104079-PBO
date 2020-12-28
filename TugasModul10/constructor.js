function Kendaraan(noPlat, merk, pajakKendaraan){ //contructor
  this.noPlat = noPlat
  this.merk = merk
  this.pajakKendaraan = pajakKendaraan
  }

  Kendaraan.prototype.inputAtribut = function(){
    this.noPlat = prompt('Input Nomor Kendaraan\t\t: ')
    this.merk = prompt('Input Merk\t\t: ')
    this.pajakKendaraan = prompt('Input Pajak Kendaraan\t\t: ')
    },

    Kendaraan.prototype.FasiTambahan = function(){},
    Kendaraan.prototype.printFasiTambahan = function(){},
    Kendaraan.prototype.hitungPajak = function(){},
     
    Kendaraan.prototype.print = function(){
      console.log('INFO KENDARAAN')
        console.log('Nomor Kendaraan \t\t\t: ', this.noPlat)
        console.log('Merk Kendaraan  \t\t\t: ', this.merk)
        this.printFasiTambahan()
        console.log('Masukkan Pajak Kendaraan \t: ', this.pajakKendaraan)
        console.log('Total Pembayaran Pajak   \t: ', this.hitungPajak)
     }
    
    function Sedan(fasKeamanan, kapasitasCC, fasKenyamanan){ //properti kendaraaan
    this.fasKeamanan = fasKeamanan
    this.kapasitasCC = kapasitasCC
    this.fasKenyamanan = fasKenyamanan
    }
    Sedan.prototype = new Kendaraan() //contructor
    Sedan.prototype.constructor = Kendaraan

    Sedan.prototype.FasiTambahan = function(){
        this.fasKeamanan = prompt('Input Fasilitas Keamanan   \t: ')
        this.kapasitasCC = prompt('Input Kapasitas (dalam CC) \t: ')
        this.fasKenyamanan = prompt('Input Fasilitas Kenyamanan \t: ')
    }

    Sedan.prototype.printFasiTambahan = function(){
        console.log('Fasilitas Keamanan   \t\t: ', this.fasKeamanan)
        console.log('Kapasitas CC         \t\t: ', this.kapasitasCC)
        console.log('Fasilitas Kenyamanan \t\t: ', this.fasKenyamanan)
    }

    Sedan.prototype.hitungPajak = function(){
        this.hitungPajak = (Number(this.pajakKendaraan * 1 + (this.pajakKendaraan * this.kapasitasCC * 0.00005)))
    }

    // untuk Bus
    function Bus(kapPenumpang, kapBagasi){
        this.kapPenumpang = kapPenumpang
        this.kapBagasi    = kapBagasi
    }

    Bus.prototype = new Kendaraan()
    Bus.prototype.constructor = Kendaraan

    Bus.prototype.FasiTambahan = function(){
        this.kapPenumpang = prompt('Input Kapasitas Penumpang \t: ')
        this.kapBagasi    = prompt('Input Kapasitas Bagasi(kg)\t: ')
    }

    Bus.prototype.printFasiTambahan = function(){
        console.log('Kapasitas Penumpang \t\t: ', this.kapPenumpang)
        console.log('Kapasitas Bagasi    \t\t: ', this.kapBagasi)
    }

    Bus.prototype.hitungPajak = function(){
        this.hitungPajak = (Number(this.pajakKendaraan * 1 + (this.pajakKendaraan * this.kapPenumpang * this.kapBagasi * 0.00005)))
    }
    console.log('\n INPUT DATA ') //input data sedan
    console.log('\n1. Sedan')
    var obSedan = new Sedan()
    obSedan.inputAtribut()
    obSedan.FasiTambahan()
   
    console.log('\n2. Bus') //input data bus
    var obBus = new Bus()
    obBus.inputAtribut()
    obBus.FasiTambahan()
    
    console.log('\nDATA SELURUH KENDARAAN ') //menampilan output seluruh kendaraaan
    console.log()
    console.log('\n1. Sedan')

    obSedan.hitungPajak()
    obSedan.print()
    
    console.log('\n2. Bus')
    obBus.hitungPajak()
    obBus.print()