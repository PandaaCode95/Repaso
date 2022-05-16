export class Punto{
   public x:number;
    public y:number;
    constructor(x:number,y:number){
        this.x=x;
        this.y=y;

    }
    toStringP():void{
        let res:string;
            for (let atribute in this){
                if(typeof this[atribute] == "number"){
                    res = res + atribute+"-"+ this[atribute]+"\n";
            }console.log(res)
    }
}
setX(x:number){
    this.x=x;
}
setY(y:number){
    this.y=y;
}
getX():number{
    return this.x;
}
getY():number{
    return this.y;
}
distanciaAlOrigen():number{
    let res:number;
    res = Math.sqrt(this.x*this.x+this.y*this.y)
    return res;
}
calcularDistancia(otroPunto:Punto):number{
    let res:number;

        res = Math.sqrt(Math.abs((this.x-otroPunto.x)*(this.x-otroPunto.x)+(this.y-otroPunto.y)*(this.y-otroPunto.y)))

    return res;
}
calcularcuadrante():string{
    let cuadrante:string;
    if (this.x>0){
        if (this.y>0){
            cuadrante="Primer cuadrante"
        }else{
            cuadrante="Cuarto cuadrante"
        }
    }else{
        if(this.y>0){
            cuadrante="Segundo cuadrante"
        }else{
            cuadrante="Tercer Cuadrante"
        }
    }
    return cuadrante;
}
calcularPuntoCercano(puntos:Punto[]):Punto{
    let menor:Punto;
    for(let i = 1 ; i<puntos.length;i++){
        if(puntos[i].calcularDistancia(this)<puntos[i-1].calcularDistancia(this)){
            menor = puntos[i]
        }
    }return menor;
}
}