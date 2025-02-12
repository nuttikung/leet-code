const memo = new Map<number, number>();

export const factorial = (n: number): number => {
	if (n === 0 || n === 1) {
		return 1;
	}
	if (memo.get(n) !== undefined) {
		return memo.get(n) as number;
	}
	const result = n * factorial(n - 1);
	memo.set(n, result);
	return result;
};

export function climbStairs(n: number): number {
	if (n === 1) {
		return 1;
	}
	let total = 0;
	for (let i = n; i >= Math.ceil(n / 2); i--) {
		const one = n - (n - i) * 2;
		const two = n - i;
		const totalPosition =
			factorial(one + two) / (factorial(one) * factorial(two));
		total += totalPosition;
	}
	return total;
}
