"use strict";
exports.__esModule = true;
exports.Triangulo = void 0;
var Triangulo = /** @class */ (function () {
    function Triangulo(arrp) {
        this.arrP = arrp;
    }
    Triangulo.prototype.calcularLongLad = function () {
        var llados = [];
        llados[0] = this.arrP[0].calcularDistancia(this.arrP[1]);
        llados[1] = this.arrP[1].calcularDistancia(this.arrP[2]);
        llados[2] = this.arrP[2].calcularDistancia(this.arrP[0]);
        return llados;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
