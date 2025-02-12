var SmallestInfiniteSet = function () {
    this.count = 0
    this.temp = []
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
    // we might use temp or count to return
    if (this.temp.length === 0) {
        this.count += 1
        return this.count
    } else {
        [h, ...t] = this.temp
        this.temp = [...t]
        return h
    }
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
    if (num < this.count + 1 && this.temp.indexOf(num) === -1) {
        this.temp = [...this.temp, num].sort((a, b) => a - b)
    }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */

let start = Date.now();
// T1 
const smallestInfiniteSet = new SmallestInfiniteSet();
// 2 is already in the set, so no change is made.
console.log(smallestInfiniteSet.addBack(2))
// return 1, since 1 is the smallest number, and remove it from the set.
console.log(smallestInfiniteSet.popSmallest())
// return 2, and remove it from the set.
console.log(smallestInfiniteSet.popSmallest())
// return 3, and remove it from the set.
console.log(smallestInfiniteSet.popSmallest())
// 1 is added back to the set.
console.log(smallestInfiniteSet.addBack(1))
// return 1, since 1 was added back to the set and
console.log(smallestInfiniteSet.popSmallest())
// is the smallest number, and remove it from the set.
// return 4, and remove it from the set.
console.log(smallestInfiniteSet.popSmallest())
// return 5, and remove it from the set.
console.log(smallestInfiniteSet.popSmallest())


// T2
/**
 const smallestInfiniteSet = new SmallestInfiniteSet();
 console.log(smallestInfiniteSet.popSmallest())
 console.log(smallestInfiniteSet.addBack(1))
 console.log(smallestInfiniteSet.popSmallest())
 console.log(smallestInfiniteSet.popSmallest())
 console.log(smallestInfiniteSet.popSmallest())
 console.log(smallestInfiniteSet.addBack(2))
 console.log(smallestInfiniteSet.addBack(3))
 console.log(smallestInfiniteSet.popSmallest())
 console.log(smallestInfiniteSet.popSmallest())
 */

let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);



