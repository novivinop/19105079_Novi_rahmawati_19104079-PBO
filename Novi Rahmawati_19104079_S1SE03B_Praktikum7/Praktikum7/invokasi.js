function myFunction(a, b, c) { //contoh 1
    console.log("Hello my name is " + a);
    console.log("I'm " + b + " years old");
    console.log("I like " + c);
}

console.log("\nOutput contoh 1");
myFunction("Novi Rahmawati", 19, 'Eating')

function myFunction2(arg1, arg2) { //contoh 2
    this.firstName = arg1
    this.lastName = arg2
}
