for(i = 0; i < 5; i++){
    console.log(`${i}`)
}

for(let num = 1; num <= 20; num++){
    console.log(`${num} x ${num} = ${num * num}`);
}

//Loopando array
const animais = ["leoes", "tigres", "ursos"];
for(i = 0; i < animais.length; i++){
    console.log(animais[i]);
}

//Loopando objeto
const deuses = [
    {
        nome: "zeus",
        nota: 70
    },
    {
        nome: "artemis",
        nota: 100
    },
    {
        nome: "hades",
        nota: 90
    }
]

for(i = 0; i < deuses.length; i++){
    console.log(`${deuses[i].nome} tirou ${deuses[i].nota}`);
}

//Loops aninhados
const gameBoard = [
    [4, 32, 8, 4],
    [64, 8, 32, 2],
    [8, 32, 16, 4],
    [2, 8, 4, 2]
]

let totalScore = 0;
for(let i = 0; i < gameBoard.length; i++){
    let row = gameBoard[i];
    for(let j = 0; j < row.length; j++){
        totalScore += row[j];
    }
}
