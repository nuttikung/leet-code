function countBlack(text: string) {
  let count = 0;
  for (let i = 0; i <= text.length; i++) {
    if (text[i] === "B") {
      count += 1;
    }
  }
  return count;
}

function minimumRecolors(blocks: string, k: number): number {
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i + k <= blocks.length; i++) {
    const temp = blocks.slice(i, i + k);
    const totalBlack = k - countBlack(temp);
    if (totalBlack === 0) {
      min = 0;
      break;
    }

    if (totalBlack < min) {
      min = totalBlack;
    }
  }

  return min;
}

export { countBlack, minimumRecolors };
