function letterToNumberConverter(square: string): { x: number; y: number } {
  const file = square.charAt(0);
  const rank = parseInt(square.charAt(1), 10) - 1;
  const x = file.charCodeAt(0) - 'a'.charCodeAt(0);
  const y = 7 - rank;

  return { x, y };
}

export { letterToNumberConverter }
