var person = {
    fullname: function() {
        return this.firstName + " " + this.lastName
    }
}

var person1 = { //memasukan orang1
    firstName: "Novi",
    lastName: "Rahmawati"
}

var person2 = { //memasukan orang2
    firstName: "Shawn",
    lastName: "Mendes"
}
var result = person.fullname.call(person2)

console.log(result); 