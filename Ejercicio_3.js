function listar(arreglo){
    let numbers=0,strings=0,booleans=0;
    for(let element of arreglo){
        if(typeof element==typeof 'a'){
            strings+=1;
        }
        if(typeof element==typeof 1){
            numbers+=1;
        }
        if(typeof element==typeof true){
            booleans+=1;
        }
    }
    console.log("El arreglo tiene "+numbers+ " Numeros "+strings+" Strings "+ booleans+" Booleans ");
    return 0;
}