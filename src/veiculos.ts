
// 1.3 A interface deve possuir pelo menos um método.

export interface Veiculo {
  descrever(): string;
}

// 1.1 e 1.2: Classe com atributos próprios que implementa a interface Veiculo.

export class Carro implements Veiculo {
  marca: string;
  modelo: string;
  portas: number;

  constructor(marca: string, modelo: string, portas: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.portas = portas;
  }

// 1.4: Método que utiliza os atributos da classe Carro.

  descrever(): string {
    return `Carro: ${this.marca} ${this.modelo}, com ${this.portas} portas.`;
  }
}

// 1.1 e 1.2: Outra classe com atributos diferentes que implementa a mesma interface.

export class Bicicleta implements Veiculo {
  aro: number;
  marchas: number;

  constructor(aro: number, marchas: number) {
    this.aro = aro;
    this.marchas = marchas;
  }

//  1.4: Método que utiliza os atributos da classe Bicicleta.

  descrever(): string {
    return `Bicicleta: Aro ${this.aro}, com ${this.marchas} marchas.`;
  }
}