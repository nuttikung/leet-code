export function maximum69Number(num: number): number {
	let max = num;
	const numArray = num.toString().split('');
	numArray.forEach((value, index, self) => {
		if (value === '6') {
			const replacedNum = self
				.slice(0, index)
				.concat(['9'], ...self.slice(index + 1, self.length))
				.join('');
			if (Number(replacedNum) > max) {
				max = Number(replacedNum);
			}
		}
	});
	return max;
}
