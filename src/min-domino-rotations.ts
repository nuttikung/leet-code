function minDominoRotations(tops: number[], bottoms: number[]): number {
  const topNumber = tops.shift();
  const bottomNumber = bottoms.shift();
  let countTop = 0;
  let countBot = 0;

  for (let i = 0; i < tops.length; i++) {
    if (countTop === -1 && countBot === -1) {
      break;
    }

    if (countTop !== -1 && topNumber !== tops[i] && topNumber !== bottoms[i]) {
      countTop = -1;
    } else if (countTop !== -1 && topNumber === tops[i]) {
      countTop += 0;
    } else if (countTop !== -1 && topNumber === bottoms[i]) {
      countTop += 1;
    }

    if (
      countBot !== -1 &&
      bottomNumber !== tops[i] &&
      bottomNumber !== bottoms[i]
    ) {
      countBot = -1;
    } else if (countBot !== -1 && bottomNumber === bottoms[i]) {
      countBot += 0;
    } else if (countBot !== -1 && bottomNumber === tops[i]) {
      countBot += 1;
    }
  }

  if (countTop === -1 && countBot === -1) {
    return -1;
  }

  if (countTop === -1) {
    return countBot;
  }

  if (countBot === -1) {
    return countTop;
  }

  return countBot < countTop ? countBot : countTop;
}

// console.log(minDominoRotations([2, 1, 2, 4, 2, 2], [5, 2, 6, 2, 3, 2]));

// console.log(minDominoRotations([3, 5, 1, 2, 3], [3, 6, 3, 3, 4]));

// console.log(
//   minDominoRotations(
//     [1, 1, 2, 1, 1, 1, 1, 1, 2, 1],
//     [1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
//   ),
// );

// console.log(
//   minDominoRotations([1, 2, 1, 1, 1, 2, 2, 2], [2, 1, 2, 2, 2, 2, 2, 2]),
// );

console.log(
  minDominoRotations(
    [1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1],
    [2, 2, 1, 1, 1, 1, 2, 1, 2, 2, 1, 2],
  ),
);

export { minDominoRotations };
