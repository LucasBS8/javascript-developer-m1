const distanciaPercorrida = 100
const precoCombustivel = 5.00;
class Carro {
    constructor(marca, cor, gastoPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
    }
    calcularCustoViagem(distancia, precoCombustivel) {
        const valorGasto = distancia * this.gastoPorKm * precoCombustivel;
        return valorGasto.toFixed(2);
    }
}

const meuCarro = new Carro('Fusca', 'azul', 0.15);
const custoViagem = meuCarro.calcularCustoViagem(distanciaPercorrida, precoCombustivel);
console.log(`O custo da viagem será R$ ${custoViagem}`);


class Pessoa {
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        const imc = this.peso / (this.altura * this.altura);
        return imc.toFixed(2);
    }
    printIMC() {
        const imc = this.calcularIMC();
        console.log(`${this.nome}, seu IMC é ${imc}`);
    }
}
const jose = new Pessoa('José', 70, 1.75);
jose.printIMC();
