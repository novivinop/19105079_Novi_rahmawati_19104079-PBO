function reflect(params) {// membuat fungsi 1 parameter
    return params
}

console.log(reflect("Halo"));
console.log(reflect("Hari ini hari ke " + 2));
console.log("Panjang argumen : " + reflect.length);

reflect = function() { //definisi fungsi reflect
    return arguments[1]
}

console.log(reflect("Halo"));
console.log(reflect("Hari ini hari ke " + 2));
console.log("Panjang argumen : " + reflect.length);