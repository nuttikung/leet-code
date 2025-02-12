export function maxLength(arr: string[]): number {
  let ans = 0
  const memo = new Map<string, number>()
  const dupeArr = arr.filter(
    (value) => new Set(...value.split("")).size === value.length
  )
  console.log("🚀 ~ maxLength ~ dupeArr:", dupeArr)
  //   arr.forEach((value, index) => {
  //     memo.set(`${index}`, value.length)
  //   })
  //   // 0,1,2,3
  //   for (let i = 0; i < arr.length; i++) {

  //   }
  return 0
}

maxLength(["aa", "bb", "aab"])
// maxLength(["cha", "r", "act", "ers"])
