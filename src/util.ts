function letterToNumberConverter(square: string): { x: number; y: number } {
  const file = square.charAt(0);
  const rank = parseInt(square.charAt(1), 10) - 1;
  const x = file.charCodeAt(0) - 'a'.charCodeAt(0);
  const y = 7 - rank;

  return { x, y };
}

const getRandomInteger = (a: number, b: number) => {
  const lower = Math.ceil(Math.min(a, b));
  const higher = Math.floor(Math.max(a, b));
  const result = Math.random() * (higher - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomArrayElement = (array: Array<string>) => array[getRandomInteger(0, array.length - 1)];

export { letterToNumberConverter, getRandomArrayElement }
