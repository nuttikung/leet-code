const selection = (nums = []) => {
    let temp = []
    let chunk = []
    for (let i = 0; i < nums.length; i++) {
        temp.push(nums[i])
        if ((i + 1) % 5 === 0 || i === nums.length - 1) {
            chunk = [...chunk, temp]
            temp = []
        }
    }
    // sorting
    for (let i = 0; i < chunk.length; i++) {
        if (chunk[i].legnth > 1) {
            chunk[i] = chunk[i].sort((a, b) => a - b)
        }
        temp = [...temp, chunk[i][Math.floor(chunk[i].length / 2)]]
    }
    return temp.sort((a, b) => a - b)[Math.floor(temp.length / 2)]
}

// s = set, k = position
const findMed = (s = [], k = 0) => {
    if (s.length === 1) {
        return s[0]
    }
    const Left = []
    const Right = []
    const pivot = s[0]
    // console.log(s, k, pivot)
    for (let i = 1; i < s.length; i++) {
        if (s[i] < pivot) {
            Left.push(s[i])
            // Left = [...Left, s[i]]
        } else {
            Right.push(s[i])
            // Right = [...Right, s[i]]
        }
    }
    if (Left.length === k - 1) {
        return pivot
    }
    if (Left.length > k - 1) {
        return findMed(Left, k)
    }
    if (Left.length < k - 1) {
        return findMed(Right, k - (Left.length + 1))
    }
    // if(Left.legnth === k)
    // console.log("🚀 ~ file: leetcode.js:27 ~ findMed ~ pivot:", pivot)
    // // Left = smaller, Right = bigger
    // let smaller = []
    // let bigger = []
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] <= pivot) {
    //         smaller = [...smaller, s[i]]
    //     } else {
    //         bigger = [...bigger, s[i]]
    //     }
    // }
    // // console.log("🚀 ~ file: leetcode.js:28 ~ findMed ~ smaller:", smaller.sort((a, b) => a - b))
    // // console.log("🚀 ~ file: leetcode.js:29 ~ findMed ~ bigger:", bigger)
    // if (smaller.length === k) {
    //     return s[k - 1]
    // }

    // if (smaller.length > k) {
    //     return findMed(smaller, k)
    // }

    // if (smaller.length < k) {
    //     return findMed(bigger, k - smaller.length)
    // }

    // if (smaller.length < k) {
    //     return findMed(bigger, k - smaller.length)
    // } else {
    //     if (bigger.length > 0) {
    //         return findMed(smaller, k)
    //     } else {
    //         return s[k]
    //     }
    // }
}

var MedianFinder = function () {
    this.nums = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    this.nums.push(num)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    // this.nums.sort((a, b) => a - b)
    const length = this.nums.length
    if (length % 2 === 0) {
        // find 2 element sum and divide 2
        const result1 = findMed(this.nums, Math.ceil((length - 1) / 2))
        const result2 = findMed(this.nums, ((length) / 2) + 1)
        // let result = (findMed(this.nums, Math.floor((length - 1) / 2)) + findMed(this.nums, Math.ceil((length - 1) / 2))) / 2
        return (result1 + result2) / 2
    }
    return findMed(this.nums, Math.ceil(length / 2))
    // console.log("🚀 ~ file: leetcode.js:78 ~ length:", length)
    // if (length % 2 === 0) {
    //     // Find 2 value sum and divide by 2
    //     let result = (findMed(this.nums, Math.floor((length - 1) / 2)) + findMed(this.nums, Math.ceil((length - 1) / 2))) / 2
    //     return result
    //     // return (this.nums[Math.floor((length - 1) / 2)] + this.nums[Math.ceil((length - 1) / 2)]) / 2
    // }
    // return findMed(this.nums, Math.floor(length / 2))
    // this.nums[(length - 1) / 2]
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// TODO: Optimize due to time exceed
let start = Date.now();
// ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
const medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// console.log(medianFinder.findMedian())
// medianFinder.addNum(2);    // arr = [1, 2]
// console.log(medianFinder.findMedian())// return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// console.log(medianFinder.findMedian())  // return 2.0
// medianFinder.addNum(4);
// console.log(medianFinder.findMedian())
// medianFinder.addNum(5);
// console.log(medianFinder.findMedian())
// medianFinder.addNum(6);
// console.log(medianFinder.findMedian())
// medianFinder.addNum(7);
// console.log(medianFinder.findMedian())
// medianFinder.addNum(8);
// console.log(medianFinder.findMedian())
// medianFinder.addNum(9);
// console.log(medianFinder.findMedian())
// medianFinder.addNum(10);
// console.log(medianFinder.findMedian())

// [[],[1],[],[2],[],[3],[],[4],[],[5],[],[6],[],[7],[],[8],[],[9],[],[10],[]]

// const T1 = [25, 24, 33, 39, 3, 18, 19, 31, 23, 49, 45, 16, 1, 29, 40, 22, 15, 20, 24, 4, 13, 34, 18, 90, 40, 42, 28, 76]
// const T0 = [4, 8, 2, 3, 1, 5, 4, 7, 4, 7, 9, 8, 1, 3, 3, 2, 4, 1, 4, 10, 5, 1, 4, 3, 6, 6, 6, 9, 10, 4, 10, 6, 7, 9, 8]

// console.log(T0.length)
// console.log(findMed(T0, Math.ceil(T0.length / 2)))
// const T2 = [10, 1, 67, 20, 56, 8, 43, 90, 54, 34, 0]
// const T3 = [1, 2, 3, 4, 5, 6]
// T0.forEach(element => {
//     medianFinder.addNum(element)
// });
// console.log(medianFinder.findMedian())
// console.log(findMed(T3, Math.ceil(T3.length / 2)))
// findMed([10, 3, 1, 2, 6, 17, 21, 81, 29, 14])
// T1 nums = [3,2,2,3], val = 3
// console.log(removeElement([3, 2, 2, 3], 3))
// T2 nums = [0,1,2,2,3,0,4,2], val = 2
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))
// T3 people = [3,5,3,4], limit = 5
// console.log(numRescueBoats([3, 5, 3, 4], 5))
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);