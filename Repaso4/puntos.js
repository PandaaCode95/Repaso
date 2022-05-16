"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.toStringP = function () {
        var res;
        for (var atribute in this) {
            if (typeof this[atribute] == "number") {
                res = res + atribute + "-" + this[atribute] + "\n";
            }
            console.log(res);
        }
    };
    Punto.prototype.setX = function (x) {
        this.x = x;
    };
    Punto.prototype.setY = function (y) {
        this.y = y;
    };
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.distanciaAlOrigen = function () {
        var res;
        res = Math.sqrt(this.x * this.x + this.y * this.y);
        return res;
    };
    Punto.prototype.calcularDistancia = function (otroPunto) {
        var res;
        res = Math.sqrt(Math.abs((this.x - otroPunto.x) * (this.x - otroPunto.x) + (this.y - otroPunto.y) * (this.y - otroPunto.y)));
        return res;
    };
    Punto.prototype.calcularcuadrante = function () {
        var cuadrante;
        if (this.x > 0) {
            if (this.y > 0) {
                cuadrante = "Primer cuadrante";
            }
            else {
                cuadrante = "Cuarto cuadrante";
            }
        }
        else {
            if (this.y > 0) {
                cuadrante = "Segundo cuadrante";
            }
            else {
                cuadrante = "Tercer Cuadrante";
            }
        }
        return cuadrante;
    };
    Punto.prototype.calcularPuntoCercano = function (puntos) {
        var menor;
        for (var i = 1; i < puntos.length; i++) {
            if (puntos[i].calcularDistancia(this) < puntos[i - 1].calcularDistancia(this)) {
                menor = puntos[i];
            }
        }
        return menor;
    };
    return Punto;
}());
exports.Punto = Punto;
