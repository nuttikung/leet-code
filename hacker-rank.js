// TODO: Climbing the Leaderboard
// const climbingLeaderboard = (ranked = [], player = []) => {
// 	// Write your code here
// 	let result = [];
// 	let total = [...new Set([...ranked])].sort((a, b) => b - a);
// 	player.forEach((element) => {
// 		total = [...new Set(total.concat(element))].sort((a, b) => b - a);
// 		result = [...result, total.findIndex((t) => t === element) + 1];
// 	});
// 	// COMMENT: 1
// 	// for (let i = 0; i < player.length; i = i + 1) {
// 	// 	total = [...new Set(total.concat(player[i]))].sort((a, b) => b - a);
// 	// 	// total = [...new Set([...total, player[i]])].sort((a, b) => b - a);
// 	// 	result = [...result, total.findIndex((t) => t === player[i]) + 1];
// 	// }
// 	// COMMENT: 2
// 	// let result = player.map((value) => {
// 	// 	total = [...new Set([...total, value])].sort((a, b) => b - a);
// 	// 	return total.findIndex((t) => t === value) + 1;
// 	// });
// 	return result;
// };

// const Ranked = [100, 90, 90, 80, 75, 60];
// const Players = [50, 65, 77, 90, 102];

// Extra Long Factorials
// function extraLongFactorials(n) {
// 	// Write your code here
// 	let result = BigInt(1);
// 	for (let i = 1; i <= n; i++) {
// 		result = result * BigInt(i);
// 	}
// 	return result.toString()
// }

// TODO: Non-Divisible Subset
function nonDivisibleSubset(k, s = [5,7,9,11]) {
	const sum = (arr = []) =>
		arr.reduce(
			(previousValue, currentValue) => currentValue + previousValue,
			0,
		);
	// Find this -> [5,7,9,11] -> [5,7], [5,9], [5,11], [7,9], [7,11], [9,11], [5,7,9], [5,7,11], [5,9,11], [7,9,1], [5,7,9,11]
	// TODO: Implement here
    let totalResult = []
    for (let lim = 1; i < s.length; i++) {
        
        
    }

}

let start = Date.now();
// console.log(nonDivisibleSubset(3, [1, 7, 2, 4]));
let timeTaken = Date.now() - start;
console.log(`Total time taken : ${timeTaken} milliseconds`);

