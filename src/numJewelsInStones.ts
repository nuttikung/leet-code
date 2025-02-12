export const numJewelsInStones = (jewels: string, stones: string): number => {
	let ans = 0;
	const characterList = new Set([...jewels.split('')]);
	// biome-ignore lint/complexity/noForEach: <explanation>
	stones.split('').forEach((char) => {
		if (characterList.has(char)) {
			ans += 1;
		}
	});
	return ans;
};
