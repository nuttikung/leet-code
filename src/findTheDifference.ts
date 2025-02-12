export function findTheDifference(s: string, t: string): string {
  const oldMap = new Map<string, number>()
  const newMap = new Map<string, number>()
  s.split("").forEach((c: string) => {
    if (oldMap.get(c) === undefined) {
      oldMap.set(c, 1)
    } else {
      oldMap.set(c, oldMap.get(c)! + 1)
    }
  })
  t.split("").forEach((c: string) => {
    if (newMap.get(c) === undefined) {
      newMap.set(c, 1)
    } else {
      newMap.set(c, newMap.get(c)! + 1)
    }
  })
  for (const [key, value] of newMap) {
    if (oldMap.get(key) !== value) {
      return key
    }
  }
  return ""
}

console.log(findTheDifference("abcd", "abcde"))
console.log(findTheDifference("", "y"))
