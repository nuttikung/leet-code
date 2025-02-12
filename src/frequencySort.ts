const frequencySort = (s: string): string => {
	const hashMap = new Map<string, number>();
	for (const character of s.split('')) {
		if (hashMap.get(character) !== undefined) {
			hashMap.set(character, (hashMap.get(character) as number) + 1);
		} else {
			hashMap.set(character, 1);
		}
	}
	console.log('🚀 ~ frequencySort ~ hashMap:', hashMap);
	return '';
};

frequencySort('tree');
