function makeNextText(value: string): string {
  const clone = value.split("");

  let character: string = "";
  let count: number = 0;
  let temp: string = "";

  while (clone.length > 0) {
    const c = clone.shift()!;

    if (character === "") {
      count += 1;
      character = c;
    } else if (c === character) {
      count += 1;
    } else {
      temp = temp + `${count}${character}`;
      count = 1;
      character = c;
    }

    if (clone.length === 0) {
      temp = temp + `${count}${character}`;
    }
  }

  return temp;
}

// ----------------------------------------------------------------------

function countAndSay(n: number): string {
  if (n === 1) {
    return "1";
  }

  if (n === 2) {
    return "11";
  }

  let ans: string = "11";
  for (let i = 2; i <= n - 1; i++) {
    ans = makeNextText(ans);
  }

  return ans;
}

// ----------------------------------------------------------------------

// console.log(countAndSay(1));
// console.log(countAndSay(4));
// console.log(countAndSay(5));
// console.log(countAndSay(7));

// ----------------------------------------------------------------------

// n=1 , "1"
// n=2 , "11"
// n=3 , "21"
// n=4 , "1211"
// n=5 , "3112"   -> "xxxxxxxxx" ->
// n=6 , "132112"
// n=7 , "311322"
// n=8 , "232122"

// "3322251"
// "23321511"

export { makeNextText, countAndSay };
