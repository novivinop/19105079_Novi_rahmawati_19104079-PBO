//function penggabungan 2 object dan jika beberapa properti yang diambil
function mixin(receiver, supplier) {
    if (arguments.length > 2) {
        for (var i = 2, len = arguments.length; i < len; i++){
            if(!receiver.hasOwnProperty(arguments[i])){
                receiver[arguments[i]] = supplier[arguments[i]]
            }
        }
    } else {
        for (var property in supplier) {
            if (supplier.hasOwnProperty(property)) {
                receiver[property] = supplier[property]
            }
        }
    }
  return receiver;
}

// Module Pattern
var person = (function () {
    var name = 'Chara'
    var age = 25

    function setName(newName){
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

// Private Member
var Title = (function () {
    var  element = 'Anemo'

    function InnerTitle(title){
        this.title = title
        this.element = element
    }

    return InnerTitle
}())

person.setName('Jean')
var title = new Title('Grand Master')

//Penggabungan 2 object dan tambahan property yang hanya aka diambil
mixin(person, title, 'title')

console.log('Nama\t: ', person.getName());
console.log('Age\t: ', person.getAge());
console.log('Tittle\t: ', person.title);
console.log('Element\t: ', person.element);