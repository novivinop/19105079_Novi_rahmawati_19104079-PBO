var person = (function() {
    var age = 25
    
    function getAge() {
        return age
    }

    function growOlder() {
        age++
    }

    return {
        name: "Paimon",
        getAge : getAge,
        growOlder : growOlder
    }
}())   

console.log("Nama person\t: ", person.name)
console.log("Umur person\t: ", person.getAge())

//mengganti umur
person.age = 100
console.log("Umur person yang diganti\t: ", person.getAge())

person.growOlder()
console.log("Umur person yang ditambah\t: ", person.getAge()) 