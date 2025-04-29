function ePangrama(palavra){
    let alfabeto = "abcdefghijklmnopqrstuvwxyz";
    palavra = palavra.toLowerCase();
    for(letra of alfabeto){
        if(!palavra.includes(letra)){ //Se não tiver essa letra na palavra
            return false;
        }
    }
    return true;
}