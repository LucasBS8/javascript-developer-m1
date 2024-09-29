
/* 
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

// function calcularMedia(nota1, nota2, nota3) {
//     const media = (nota1 + nota2 + nota3) / 3;

//     if (media < 5) {
//         console.log('Reprovado');
//     } else if (media >= 5 && media <= 7) {
//         console.log('Recuperação');
//     } else {
//         console.log('Passou de semestre');
//     }

//     return media.toFixed(2);
// }
// const media = calcularMedia(9.5, 9.0, 9.5);
// console.log(`Média: ${media}`);

/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/

// function calcularIMC(peso, altura) {
//     const imc = peso / (altura * altura);

//     if (imc < 18.5) {
//         console.log('Abaixo do peso');
//     } else if (imc >= 18.5 && imc < 25) {
//         console.log('Peso normal');
//     } else if (imc >= 25 && imc < 30) {
//         console.log('Acima do peso');
//     } else if (imc >= 30 && imc <= 40) {
//         console.log('Obeso');
//     } else {
//         console.log('Obesidade Grave');
//     }

//     return imc.toFixed(2);
// }

// const imc = calcularIMC(75, 1.75);
// console.log(`IMC: ${imc}`);


/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

function calcularPrecoFinal(precoEtiqueta, condicaoPagamento) {
    let precoFinal;

    switch (condicaoPagamento) {
        case 1:
            precoFinal = precoEtiqueta * 0.9;
            break;
        case 2:
            precoFinal = precoEtiqueta * 0.85;
            break;
        case 3: 
            precoFinal = precoEtiqueta;
            break;
        case 4:
            precoFinal = precoEtiqueta * 1.1;
            break;
        default:
            console.log('Condição de pagamento inválida');
            return;
    }
    return precoFinal.toFixed(2);
}

const preco = calcularPrecoFinal(100, 2);
console.log(`Preço final: ${preco}`);
