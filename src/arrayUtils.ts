// 1a. Calcula o quadrado de cada número em um array usando um loop for.

export function quadradosComFor(numeros: number[]): number[] {
  const quadrados: number[] = [];
  for (let i = 0; i < numeros.length; i++) {
    quadrados.push(numeros[i] * numeros[i]);
  }
  return quadrados;
}


// 1b. Calcula o quadrado de cada número em um array usando forEach.

export function quadradosComForEach(numeros: number[]): number[] {
  const quadrados: number[] = [];
  numeros.forEach(numero => {
    quadrados.push(numero * numero);
  });
  return quadrados;
}


// 2. Concatena um array de strings em uma única string, separada por espaços.

export function concatenarStrings(palavras: string[]): string {
  return palavras.join(' ');
}


// 3. Ordena um array de strings em ordem alfabética. Cria uma cópia para não modificar o array original.

export function ordenarStrings(palavras: string[]): string[] {
  return [...palavras].sort();
}


// 4. Retorna os dois primeiros elementos de um array.

export function doisPrimeiros<T>(elementos: T[]): T[] {
  return elementos.slice(0, 2);
}


// 5. Filtra um array, retornando apenas os números pares.

export function filtrarPares(numeros: number[]): number[] {
  return numeros.filter(numero => numero % 2 === 0);
}