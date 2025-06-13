import { Carro, Bicicleta } from './veiculos';
import { FiguraGeometrica, Circulo, Retangulo } from './figuras';

describe('Testes de Orientação a Objetos', () => {

// 1.5 Teste da Interface e Classes

  describe('Interface Veiculo', () => {
    test('deve instanciar, alterar e testar a classe Carro', () => {
      const meuCarro = new Carro('Fiat', 'Uno', 4);
      expect(meuCarro.descrever()).toBe('Carro: Fiat Uno, com 4 portas.');

      // Alterando um atributo
      meuCarro.portas = 2;
      expect(meuCarro.descrever()).toBe('Carro: Fiat Uno, com 2 portas.');
    });

    test('deve instanciar, alterar e testar a classe Bicicleta', () => {
      const minhaBike = new Bicicleta(29, 21);
      expect(minhaBike.descrever()).toBe('Bicicleta: Aro 29, com 21 marchas.');

      // Alterando um atributo
      minhaBike.marchas = 24;
      expect(minhaBike.descrever()).toBe('Bicicleta: Aro 29, com 24 marchas.');
    });
  });

// 2.5 Teste da Classe Abstrata e Subclasses

  describe('Classe Abstrata FiguraGeometrica', () => {
    test('deve instanciar Circulo, alterar e testar o método estático', () => {
      const circulo = new Circulo(10); // Raio 10
      // Teste do método estático com a instância
      expect(FiguraGeometrica.descreverArea(circulo)).toBe('A área da figura é 314.16.');

      // Alterando o atributo
      circulo.raio = 5;
      expect(FiguraGeometrica.descreverArea(circulo)).toBe('A área da figura é 78.54.');
    });

    test('deve instanciar Retangulo, alterar e testar o método estático', () => {
      const retangulo = new Retangulo(10, 5); // Largura 10, Altura 5
      expect(FiguraGeometrica.descreverArea(retangulo)).toBe('A área da figura é 50.00.');

      // Alterando um atributo
      retangulo.largura = 20;
      expect(FiguraGeometrica.descreverArea(retangulo)).toBe('A área da figura é 100.00.');
    });
  });
});