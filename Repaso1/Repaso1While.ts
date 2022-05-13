function compareLet(arr:string[]):boolean{
    let siono:boolean=true
    let i:number=0;
    while(i<arr.length && siono){
            if(arr[i][0]!="M"){
                 siono=false
            }i++;
    }return siono
}