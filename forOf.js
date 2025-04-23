const livros = ["Moby Dick", "Dracula", "Paradise Lost", "Call of Cthulhu"];

for (let i = 0; i < livros.length; i++){
    console.log(livros[i]);
}

for (let nome of livros){
    console.log(nome);
}

const magicSquare = [[2,7,6], [9,5,1], [4,3,8]];

for (let row of magicSquare){
    let sum = 0;
    for (let num of row){
        sum += num;
    }
    console.log(`${row} summed to ${sum}`);
}

// for of objetos

const filmes = {
    Dracula         : 8,
    'Cidade de Deus': 10,
    Coraline        : 9,
    'O Batman'      : 7.5
}

for(let filme of Object.keys(filmes)){
    console.log(filme, filmes[filme]);
}

const nota = Object.values(filmes);
let total = 0;
for(let c of nota){
    total += c;
}

let media = total / nota.length;
console.log(media);