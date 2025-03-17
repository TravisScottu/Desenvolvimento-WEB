function transporMatriz(A) {
    let transposta = [];
    for (let i = 0; i < A[0].length; i++) {
        transposta[i] = []; 
        for (let j = 0; j < A.length; j++) {
            transposta[i][j] = A[j][i]; 
        }
    }
    return transposta;
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(" ")); 
    }
}


let matriz = [
    [1, 2],
    [3, 4],
    [5, 6]
];

console.log("Matriz Original:");
imprimirMatriz(matriz);

let matrizTransposta = transporMatriz(matriz);

console.log("\nMatriz Transposta:");
imprimirMatriz(matrizTransposta);