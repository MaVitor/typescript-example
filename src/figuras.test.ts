import { FiguraGeometrica, Circulo, Retangulo } from './figuras';

describe('Testes da Classe Abstrata FiguraGeometrica', () => {
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