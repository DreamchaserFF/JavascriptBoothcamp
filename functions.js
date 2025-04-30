function jogarDado(lados){
    resultado = Math.floor(Math.random() * lados) +1;
    return `Rodou: ${resultado}`;
}

function jogarDados(dados, lados){
    for(i = 0; i < dados; i++){
       return jogarDado(lados);
    }
}

function contemRoxo(arr){
    for(let cor of arr){
        if(cor === "roxo" ||cor === "violeta" ){
            return true;
        }
    }
    return false;
}

const soma = function (x, y){
    return x + y;
}
