function sign(fnac:string):string{
        
        let arr:string[]=fnac.split("/");
        let mes:number = +arr[0]
        let dia:number = +arr[1]
        let signo:string=""
    
            if((dia >= 22 && mes== 12)||(dia <= 19 && mes== 1)){
                signo = "Capricornio";
            }else if((dia >= 20 && mes== 1)||(dia <= 18 && mes== 2)){
                signo = "Acuario";
            }else if((dia >= 19 && mes==2)||(dia <= 20 && mes== 3)){
                signo = "Piscis";
            }else if((dia >= 21 && mes==3)||(dia <= 19 && mes== 4)){
                signo = "Aries";
            }else if((dia >= 20 && mes==4)||(dia <= 21 && mes== 5)){
                signo = "Tauro";
            }else if((dia >= 22 && mes==5)||(dia <= 20 && mes== 6)){
                signo = "Geminis";
            }else if((dia >= 21 && mes==6)||(dia <= 22 && mes== 7)){
                signo = "Cancer";
            }else if((dia >= 23 && mes==7)||(dia <= 22 && mes== 8)){
                signo = "Leo";
            }else if((dia >= 23 && mes==8)||(dia <= 22 && mes== 9)){
                signo = "Virgo";
            }else if((dia >= 23 && mes==9)||(dia <= 22 && mes== 10)){
                signo = "Libra";
            }else if((dia >= 23 && mes==10)||(dia <= 21 && mes== 11)){
                signo = "Escorpio";
            }else if((dia >= 22 && mes==11)||(dia <= 21 && mes== 12)){
                signo = "Sagitario";
            }return signo;
    }

function nacional(country:string):string{

    let europe:Array<string> =["España","Italia","Portugal","Alemania"]
    let asia:string[]=["Japon","China","Tailandia","Korea Sur", "Taiwan"]
    let africa:string[]=["Marruecos","Egipto","Congo","Nigeria","Angola"]
    let oceania:string[]=["Australia","Fiyi","Nueva Zelanda","Nueva Guinea","Samoa"]
    let america:string[]=["Canada","Mexico","Estados Unidos","Chile","Argentina"]
    let nacional:string=""
    if(europe.includes(country)){
        return nacional ="Europe"
    }else if(asia.includes(country)){
        return nacional = "Asia"
    }else if(africa.includes(country)){
        return nacional = "Africa"
    }else if(oceania.includes(country)){
        return nacional = "Oceania"
    }else if(america.includes(country)){
        return nacional = "America"
    }
}
function impar(num:number){
    
    for(let i:number=0; i<num;i++){
        if(i%2!=0){console.log(i)}
    }
}
function rverse(arr:number[]):number[]{
    let res:number[]=[]
    let j:number=0;
    for (let i =arr.length;i>=0;i-- ){
        res[j]=arr[i]
        j++;
    }
    return res;
}
function arco(arr:string[]){
    let compare:string[]=["rojo", "naranja", "amarillo", "verde", "cian", "azul","violeta"]
    for(let i:number=0; i<arr.length;i++){
        for(let j:number=0;j<compare.length;j++)
            if(arr[i]==compare[j]){
                console.log("El color "+arr[i]+" se encuentra en el arcoiris"+ "\n")
            }
    }
}
function compareNum(arr:number[]):boolean{
    let siono:boolean=false
    for(let i:number=0; i<arr.length;i++){
       
            if(arr[i]%2==0){
                return siono=true
            }
    }return siono
}
function compareLet(arr:string[]):boolean{
    let siono:boolean=true
    let i:number=0;
    while(i<arr.length && siono){
            if(arr[i][0]!="M"){
                 siono=false
            }i++;
    }return siono
}
function contarChar(arr:string[]):number{
    let res:number
    for(let i = 0 ; i<arr.length;i++){
        res+=arr[i].length;
    }
    return res;
}
function esPar(num:number):string{
    let siono:string=""
    if(num%2==0){
        siono="El numero es par"
    }else{
        siono="El numero es impar"
    }
    return siono;
}
function arrayCharPar(arr:string[]):string{
    let res:number=contarChar(arr)
    let siono:string=esPar(res)
    return siono;
}


// console.log(sign("4/5"))
// console.log(nacional("Japon"))
// impar(31);
// console.log(rverse([12,3,4,5,4,3,2,1]))
// console.log(compareNum([1,2,3,4,5,6,7]))
 console.log(compareLet(["Manuel","Marilo","Maria","Mariano"]))
// console.log(contarChar(["Manuel","Marilo","Maria","Mariano"]))
// console.log(esPar(23))
// console.log(arrayCharPar(["Casa","Coche","Ciudad","Cesta"]))
// console.log(arrayCharPar(["Barco","Baca","Bicicleta","Balon","Bisiesto","Brasil"]))
// console.log(arrayCharPar(["Venezuela","Veneno","Voltaje"]))


