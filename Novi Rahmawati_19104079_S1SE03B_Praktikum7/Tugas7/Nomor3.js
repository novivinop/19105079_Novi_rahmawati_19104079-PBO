/*
*Novi Rahmawati*/

var nilai = {
    minMax: function() {
       console.log("Program ini dibuat oleh " + this.firstName + " " + this.lastName);
       
       var nilai = arguments //menetukan nilai min dan max

       console.log("Nilai tertinggi : " + Math.max.apply(Math, nilai));
       console.log("Nilai terendah : " + Math.min.apply(Math, nilai));
    }
}

var creator = { //membuat cretor program
   firstName: "Novi",
   lastName: "Rahmawati"
}

var hasil = nilai.minMax.apply(creator, [5, 6, 2, 3, 7])