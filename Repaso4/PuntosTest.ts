import { Punto } from "./Puntos";
import { Triangulo } from "./Triangulo";
let p1 = new Punto(14,-2)
let p2 = new Punto(10,16)
let p3 = new Punto(-2,14)
let p4 = new Punto(24,9)
let arr:Punto[] =[p1,p2,p3]
console.log(p1.calcularDistancia(p2))
console.log(p1.distanciaAlOrigen())

p1.setX(5)
p1.setY(7)
console.log(p4.calcularPuntoCercano(arr))
console.log(p1.getX());
console.log(p1.getY());
console.log(p1.calcularcuadrante());
let arrp= [p1,p2,p3]
let tri = new Triangulo(arrp)
console.log(tri)
console.log(tri.calcularLongLad())
