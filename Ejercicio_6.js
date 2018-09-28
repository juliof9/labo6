
function encripta(cad) {
    arreglo = cad.split('')
    encriptado = [];
    arreglo.forEach(element0 => {
        switch (element0) {
            case 'm':
                encriptado.push("0");
                break;

            case 'M':
                encriptado.push("0");
                break;

            case 'u':
                encriptado.push("1");
                break;
                
            case 'U':
                encriptado.push("1");
                break;

            case 'r':
                encriptado.push("2");
                break;

            case 'R':
                encriptado.push("2");
                break;
                
            case 'c':
                encriptado.push("3");
                break;

            case 'C':
                encriptado.push("3");
                break;

            case 'i':
                encriptado.push("4");
                break;

            case 'I':
                encriptado.push("4");
                break;
                
            case 'e':
                encriptado.push("5");
                break;

            case 'E':
                encriptado.push("5");
                break;

            case 'l':
                encriptado.push("6");
                break;
                
            case 'L':
                encriptado.push("6");
                break;

            case 'a':
                encriptado.push("7");
                break;

            case 'A':
                encriptado.push("7");
                break;
                
            case 'g':
                encriptado.push("8");
                break;

            case 'G':
                encriptado.push("8");
                break;

            case 'o':
                encriptado.push("9");
                break;

            case 'O':
                encriptado.push("9");
                break;
        
            default:
                encriptado.push(element0);
                break;
        }
    });
        
    return encriptado.join('').toString();
}