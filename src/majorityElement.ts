export const majorityElement = (nums: number[]): number => {
	const myMap = new Map<number, number>();
	for (const num of nums) {
		if (myMap.get(num) !== undefined) {
			myMap.set(num, (myMap.get(num) as number) + 1);
		} else {
			myMap.set(num, 1);
		}
	}
	for (const [num, weight] of myMap) {
		if (weight > nums.length / 2) {
			return num;
		}
	}
	return 0;
};
