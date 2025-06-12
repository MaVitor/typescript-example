import {
  quadradosComFor,
  quadradosComForEach,
  concatenarStrings,
  ordenarStrings,
  doisPrimeiros,
  filtrarPares
} from './arrayUtils';

describe('Funções de Manipulação de Array', () => {

  // 1.1 Teste para o cálculo de quadrados
  
  describe('Quadrados de um array', () => {
    const arrayTeste = [3, 5, 7, 3, 8, 9, 1];
    const resultadoEsperado = [9, 25, 49, 9, 64, 81, 1];

    test('deve funcionar com loop for', () => {
      expect(quadradosComFor(arrayTeste)).toEqual(resultadoEsperado);
    });

    test('deve funcionar com forEach', () => {
      expect(quadradosComForEach(arrayTeste)).toEqual(resultadoEsperado);
    });
  });

  // 2.1 Teste para concatenar strings (join)

  test('deve concatenar o array de strings com espaços', () => {
    const arrayTeste = ['Arrays', 'com', 'TypeScript'];
    expect(concatenarStrings(arrayTeste)).toBe('Arrays com TypeScript');
  });

  // 3.1 Teste para ordenar (sort)

  test('deve ordenar o array de strings em ordem alfabética', () => {
    const arrayTeste = ['carro', 'boneco', 'ave', 'lapis'];
    const resultadoEsperado = ['ave', 'boneco', 'carro', 'lapis'];
    expect(ordenarStrings(arrayTeste)).toEqual(resultadoEsperado);
  });

  // 4.1 Teste para pegar os dois primeiros (slice)

  test('deve retornar os dois primeiros elementos do array', () => {
    const arrayTeste = [2, 4, 6, 2, 8, 9, 5];
    expect(doisPrimeiros(arrayTeste)).toEqual([2, 4]);
  });

  // 5.1 Teste para filtrar pares (filter)

  test('deve extrair apenas os números pares do array', () => {
    const arrayTeste = [8, 3, 9, 5, 6, 12];
    expect(filtrarPares(arrayTeste)).toEqual([8, 6, 12]);
  });

});