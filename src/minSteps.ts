function minSteps(s: string, t: string): number {
  let diff = 0
  const list = new Map<string, number>()
  s.split("").forEach((c) => {
    if (list.get(c) !== undefined) {
      list.set(c, list.get(c)! + 1)
    } else {
      list.set(c, 1)
    }
  })
  // Map is rescue us by frequency of alphabets
  t.split("").forEach((c) => {
    if (list.get(c) !== undefined && list.get(c)! > 0) {
      list.set(c, list.get(c)! - 1)
    } else {
      diff += 1
    }
  })
  return diff
}

// T1: s = "bab", t = "aba"
console.log(minSteps("bab", "aba"))
// T2: s = "leetcode", t = "practice"
console.log(minSteps("leetcode", "practice"))
// T3: s = "anagram", t = "mangaar"
console.log(minSteps("anagram", "mangaar"))
