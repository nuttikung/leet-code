export const rearrangeArray = (nums: number[]): number[] => {
	let noSihgArr: number[] = [];
	let signArr: number[] = [];
	for (const num of nums) {
		if (num > 0) {
			noSihgArr = [...noSihgArr, num];
		} else {
			signArr = [...signArr, num];
		}
	}
	let ans: number[] = [];
	noSihgArr.map((value, index) => {
		ans = [...ans, value, signArr[index]];
	});
	return ans;
};
