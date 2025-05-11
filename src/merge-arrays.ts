function mergeArrays(
  nums1: Array<Array<number>>,
  nums2: Array<Array<number>>,
): Array<Array<number>> {
  const resultArray: Array<Array<number>> = []
  const answerMap = new Map<number, number>();

  nums1.forEach(([id, value]) => answerMap.set(id, value));

  nums2.forEach(([id,value]) => {
    if(answerMap.has(id)){
      const sum = (answerMap.get(id) ?? 0) + value
      answerMap.set(id,  sum)
    }else {
      answerMap.set(id, value)
    }
  })

  const keys = [...answerMap.keys()].sort((a,b) => a-b)

  keys.forEach((k) => {
    resultArray.push([k, answerMap.get(k)!])
  })

  answerMap.clear()

  return resultArray
}

export { mergeArrays };
