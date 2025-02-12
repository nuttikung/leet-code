export function uniqueOccurrences(arr: number[]): boolean {
  // Optimize
  const frequency = new Map<number, number>()
  arr.forEach((num: number) => {
    if (frequency.get(num) === undefined) {
      frequency.set(num, 1)
    } else {
      frequency.set(num, frequency.get(num)! + 1)
    }
  })
  return new Set(frequency.values()).size === frequency.size
  /**
   * V1
   */
  // let isOccurrences = true
  // console.log()
  // const hashMap = new Map<number, number>()
  // for (const [key, freq] of frequency) {
  //   if (hashMap.get(freq) === undefined) {
  //     hashMap.set(freq, key)
  //   } else {
  //     isOccurrences = false
  //     break
  //   }
  // }
  // return isOccurrences
}
