var n = 0
var o = 1
var result = 0

//looping
for(var i = 0; i <= 10; i++){
    n = n + o
    o = n - o
    result = result + o + ', ';
}
//output
console.log('Bilangan Fibonacci\t : \n ' + result)