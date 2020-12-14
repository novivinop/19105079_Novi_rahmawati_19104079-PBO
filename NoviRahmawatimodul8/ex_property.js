var person0 = {}

var person1 = { name : 'Novi' }

var person2 = new Object()
person2.name = 'Shawn'

person1.age = 20 
person2.age = 25

//akses cara 1
console.log('Object dari person1 : ')
console.log(`Name\t: ${person1.name}``)
console.log('age\t\t: ' + person1.age)

console.log()

//akses cara 2
console.log('Object dari person2 : ')
console.log(`Name\t: ${person2.name }``)
console.log('age\t\t: ' + person2.age)