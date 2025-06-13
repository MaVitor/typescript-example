import { Carro, Bicicleta } from './veiculos';

describe('Testes da Interface Veiculo', () => {
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