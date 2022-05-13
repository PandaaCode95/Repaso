function sign(fnac) {
    var arr = fnac.split("/");
    var mes = +arr[0];
    var dia = +arr[1];
    var signo = "";
    if ((dia >= 22 && mes == 12) || (dia <= 19 && mes == 1)) {
        signo = "Capricornio";
    }
    else if ((dia >= 20 && mes == 1) || (dia <= 18 && mes == 2)) {
        signo = "Acuario";
    }
    else if ((dia >= 19 && mes == 2) || (dia <= 20 && mes == 3)) {
        signo = "Piscis";
    }
    else if ((dia >= 21 && mes == 3) || (dia <= 19 && mes == 4)) {
        signo = "Aries";
    }
    else if ((dia >= 20 && mes == 4) || (dia <= 21 && mes == 5)) {
        signo = "Tauro";
    }
    else if ((dia >= 22 && mes == 5) || (dia <= 20 && mes == 6)) {
        signo = "Geminis";
    }
    else if ((dia >= 21 && mes == 6) || (dia <= 22 && mes == 7)) {
        signo = "Cancer";
    }
    else if ((dia >= 23 && mes == 7) || (dia <= 22 && mes == 8)) {
        signo = "Leo";
    }
    else if ((dia >= 23 && mes == 8) || (dia <= 22 && mes == 9)) {
        signo = "Virgo";
    }
    else if ((dia >= 23 && mes == 9) || (dia <= 22 && mes == 10)) {
        signo = "Libra";
    }
    else if ((dia >= 23 && mes == 10) || (dia <= 21 && mes == 11)) {
        signo = "Escorpio";
    }
    else if ((dia >= 22 && mes == 11) || (dia <= 21 && mes == 12)) {
        signo = "Sagitario";
    }
    return signo;
}
function nacional(country) {
    var europe = ["España", "Italia", "Portugal", "Alemania"];
    var asia = ["Japon", "China", "Tailandia", "Korea Sur", "Taiwan"];
    var africa = ["Marruecos", "Egipto", "Congo", "Nigeria", "Angola"];
    var oceania = ["Australia", "Fiyi", "Nueva Zelanda", "Nueva Guinea", "Samoa"];
    var america = ["Canada", "Mexico", "Estados Unidos", "Chile", "Argentina"];
    var nacional = "";
    if (europe.includes(country)) {
        return nacional = "Europe";
    }
    else if (asia.includes(country)) {
        return nacional = "Asia";
    }
    else if (africa.includes(country)) {
        return nacional = "Africa";
    }
    else if (oceania.includes(country)) {
        return nacional = "Oceania";
    }
    else if (america.includes(country)) {
        return nacional = "America";
    }
}
function impar(num) {
    for (var i = 0; i < num; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
function rverse(arr) {
    var res = [];
    var j = 0;
    for (var i = arr.length; i >= 0; i--) {
        res[j] = arr[i];
        j++;
    }
    return res;
}
function arco(arr) {
    var compare = ["rojo", "naranja", "amarillo", "verde", "cian", "azul", "violeta"];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < compare.length; j++)
            if (arr[i] == compare[j]) {
                console.log("El color " + arr[i] + " se encuentra en el arcoiris" + "\n");
            }
    }
}
function compareNum(arr) {
    var siono = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            return siono = true;
        }
    }
    return siono;
}
function compareLet(arr) {
    var siono = true;
    var i = 0;
    while (i < arr.length && siono) {
        if (arr[i][0] != "M") {
            siono = false;
        }
        i++;
    }
    return siono;
}
function contarChar(arr) {
    var res;
    for (var i = 0; i < arr.length; i++) {
        res += arr[i].length;
    }
    return res;
}
function esPar(num) {
    var siono = "";
    if (num % 2 == 0) {
        siono = "El numero es par";
    }
    else {
        siono = "El numero es impar";
    }
    return siono;
}
function arrayCharPar(arr) {
    var res = contarChar(arr);
    var siono = esPar(res);
    return siono;
}
// console.log(sign("4/5"))
// console.log(nacional("Japon"))
// impar(31);
// console.log(rverse([12,3,4,5,4,3,2,1]))
// console.log(compareNum([1,2,3,4,5,6,7]))
console.log(compareLet(["Manuel", "Marilo", "Maria", "Mariano"]));
// console.log(contarChar(["Manuel","Marilo","Maria","Mariano"]))
// console.log(esPar(23))
// console.log(arrayCharPar(["Casa","Coche","Ciudad","Cesta"]))
// console.log(arrayCharPar(["Barco","Baca","Bicicleta","Balon","Bisiesto","Brasil"]))
// console.log(arrayCharPar(["Venezuela","Veneno","Voltaje"]))
