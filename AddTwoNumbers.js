function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
	console.log(l1.map((value) => value));
	const mergeList = parseInt(l1.join("")) + parseInt(l2.join(""));
	const reverseValue = `${mergeList}`
		.split("")
		.map((value) => parseInt(value))
		.reverse();
	return reverseValue;
};

let start = Date.now();

const a = new ListNode([2, 4, 3]);
const b = new ListNode([5, 6, 4]);

console.log(addTwoNumbers(a, b));

let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);
