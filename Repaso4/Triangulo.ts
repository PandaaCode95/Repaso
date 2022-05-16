import { Punto } from "./Puntos"

export class Triangulo {
    public arrP:Punto[];

    constructor(arrp:Punto[]){
        this.arrP=arrp;
    }   

    calcularLongLad():number[]{
        let llados:number[]=[];
        llados[0] = this.arrP[0].calcularDistancia(this.arrP[1])
        llados[1] = this.arrP[1].calcularDistancia(this.arrP[2])
        llados[2] = this.arrP[2].calcularDistancia(this.arrP[0])
        
        return llados;
    }
}