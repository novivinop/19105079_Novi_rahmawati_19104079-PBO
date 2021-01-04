function mixin(receiver, supplier) {
    for (var property in supplier) {
        if (supplier.hasOwnProperty(property)) {
            receiver[property] = supplier[property]
        }
    }
    return receiver
}

// Module pattern
var person = (function() {
    var name = 'Chara'
    var age = 25

    function setName(newName) {
        name = newName
    }

    function getName() {
        return name
    }

    function getAge() {
        return age
    }

    return {
        setName : setName,
        getName : getName,
        getAge : getAge
    }
}())

// private Member
var Title = (function () {
    var element = 'Anemo'

    function InnerTitle(title){
        this.title = title
        this.element = element
    }

    return InnerTitle

}())

person.setName('Jean')
var title = new Title('Grand Master')

//Pengabunggan 2 object
mixin(person, title)

console.log('Nama\t: ', person.getName());
console.log('Age\t: ', person.getAge());
console.log('Tittle\t: ', person.title);
console.log('Element\t: ', person.element);