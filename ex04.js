function sacarCarta(){
    const valor = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
    const naipe = ["Paus", "Espadas", "Copas", "Ouros"];
    
    let randValor = valor[Math.floor(Math.random () * valor.length)];
    let randNaipe = naipe[Math.floor(Math.random() * naipe.length)];
    let carta = {
        valor: randValor,
        naipe: randNaipe
    }
    return carta;
}
//Outro jeito de fazer
function pegar(arr){
    //retorna elemento aleatório da array
    const ind = Math.floor(Math.random() * arr.length);
    return arr[ind];
}

function pegarCarta(){
    const valor = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
    const naipe = ["Paus", "Espadas", "Copas", "Ouros"];
    return {valor: pegar(valor), naipe: pegar(naipe)};
}