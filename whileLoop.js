let alvo = Math.floor(Math.random() * 10) + 1;
let chute = Math.floor(Math.random() * 10) + 1

while(alvo != chute){
    console.log(`Eu chutei ${chute} e errei.`);
    chute = Math.floor(Math.random() * 10) + 1
}
console.log(`Eu chutei ${chute} e o numero era ${alvo}. Acertei!`)