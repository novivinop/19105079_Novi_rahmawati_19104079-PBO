var person = {
    fullName: function(birth, city) {
        return this.firstName + " " + this.lastName + "," + birth + "," + city
    }
}

var person1 = {
    firstName: "Novi",
    lastName: "Rahmawati"
}

var result = person.fullName.apply(person1, ["Purwokerto", "November"]) //menggunakan apply
console.log(result);