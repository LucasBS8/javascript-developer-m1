function printTabuada(numero) {
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
printTabuada(5);

function printNumerosPares(lista) {
    console.log("Números pares encontrados:");
    lista.forEach(numero => {
        if (numero % 2 === 0) {
            console.log(numero);
        }
    });
}
printNumerosPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function printNomes(listaNomes) {
    console.log("Nomes que começam com 'V':");
    listaNomes.forEach(nome => {
        if (nome.startsWith('V')) {
            console.log(nome);
        }
    });
}
printNomes(['Victor', 'Carlos', 'Vinícius', 'Ana', 'Valéria']);

function printListaPares() {
    const listaPares = [];
    for (let i = 10; i <= 50; i++) {
        if (i % 2 === 0) {
            listaPares.push(i);
        }
    }
    return listaPares;
}
console.log(printListaPares());

function printMediaRecuperacao(medias) {
    console.log("Médias de recuperação:");
    medias.forEach(media => {
        if (media < 5) {
            console.log(media);
        }
    });
}
printMediaRecuperacao([2, 7, 3, 8, 10, 4]);

function printMaiorNota(notas) {
    const maiorNota = Math.max(...notas);
    console.log(`A maior nota é: ${maiorNota}`);
}
printMaiorNota([2, 7, 3, 8, 10, 4]);
