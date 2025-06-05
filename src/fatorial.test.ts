import { fatorial } from './fatorial';

describe('fatorial', () => {
  test('deve retornar 1 para fatorial de 0', () => {
    expect(fatorial(0)).toBe(1);
  });

  test('deve retornar 1 para fatorial de 1', () => {
    expect(fatorial(1)).toBe(1);
  });

  test('deve calcular corretamente o fatorial de 5 (resultado 120)', () => {
    expect(fatorial(5)).toBe(120);
  });

  test('deve calcular corretamente o fatorial de 3 (resultado 6)', () => {
    expect(fatorial(3)).toBe(6);
  });

  // Teste extra para casos de erro (opcional, mas boa prática)
  test('deve lançar um erro para números negativos', () => {
    expect(() => fatorial(-1)).toThrow("Fatorial não é definido para números negativos.");
  });
});