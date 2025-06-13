// 2.1: Classe abstrata com um método abstrato.

export abstract class FiguraGeometrica {
  abstract calcularArea(): number;


// 2.4: Método estático que usa o método abstrato de uma instância.

  static descreverArea(figura: FiguraGeometrica): string {
    const area = figura.calcularArea();
    return `A área da figura é ${area.toFixed(2)}.`;
  }
}

// 2.2 e 2.3: Subclasse com construtor e atributo próprio.

export class Circulo extends FiguraGeometrica {
  raio: number;

  constructor(raio: number) {
    super(); // Chama o construtor da classe pai (FiguraGeometrica)
    this.raio = raio;
  }

  calcularArea(): number {
    return Math.PI * this.raio * this.raio;
  }
}

// 2.2 e 2.3: Outra subclasse com construtor e atributos diferentes.

export class Retangulo extends FiguraGeometrica {
  largura: number;
  altura: number;

  constructor(largura: number, altura: number) {
    super();
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea(): number {
    return this.largura * this.altura;
  }
}