function media(arr){
    let soma = 0;
    let mediaArr = 0;
    for (num of arr){
        soma += num;
    }
    mediaArr = soma / arr.length;
    return mediaArr;
}