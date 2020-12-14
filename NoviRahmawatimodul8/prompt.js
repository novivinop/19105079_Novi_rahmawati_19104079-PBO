const prompt = require('prompt-sync')()

let object = {}
object.name = prompt('Input Name\t: ')
object.age = prompt('Input Age\t: ')
object.nim = prompt('Input NIM\t: ')
object.prodi = prompt('Input PRODI\t: ')

console.log()

for(property in object){
  console.log(property + '\t: ${object[property] }')
}