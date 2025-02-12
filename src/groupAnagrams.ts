export const groupAnagrams = (strs: string[]): string[][] => {
	const hashMap = new Map<string, string[]>();
	for (const str of strs) {
		const key = str.split('').sort().toString();
		if (hashMap.has(key)) {
			hashMap.set(key, [...(hashMap.get(key) as string[]), str]);
		} else {
			hashMap.set(key, [str]);
		}
	}
	let ans: string[][] = [];
	for (const [key, value] of hashMap) {
		ans = [...ans, value];
	}
	return ans;
};

groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
