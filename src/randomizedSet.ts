export class RandomizedSet {
  list: Set<number>
  constructor() {
    this.list = new Set<number>()
  }

  getRandomInt(range: number) {
    return Math.floor(Math.random() * range)
  }

  insert(val: number): boolean {
    if (!this.list.has(val)) {
      this.list.add(val)
      return true
    }
    return false
  }

  remove(val: number): boolean {
    if (this.list.has(val) === false) {
      return false
    }
    this.list.delete(val)
    return true
  }

  getRandom(): number {
    return Array.from(this.list)[this.getRandomInt(this.list.size)]
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
