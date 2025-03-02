import { mergeArrays} from '../merge-arrays'

describe('mergeArrays', () => {
  it('should union array when not duplicate id', () => {
    const result = mergeArrays([[1,2]], [[2,3]])
    expect(result).toStrictEqual([[1,2],[2,3]])
  })

  it('should merge value when similar id', () => {
    const result = mergeArrays([[1,2]], [[1,3]])
    expect(result).toStrictEqual([[1,5]])
  })

  it('should merge with sum value', () => {
    const result = mergeArrays([[1,2],[2,3],[4,5]], [[1,4],[3,2],[4,1]])
    expect(result).toStrictEqual([[1,6],[2,3],[3,2],[4,6]])
  })
})
