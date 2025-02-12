const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function isVowels(c: string): boolean {
	return vowels.includes(c);
}

function halvesAreAlike(s: string): boolean {
	return (
		s
			.substring(0, s.length / 2)
			.split("")
			.filter(isVowels).length ===
		s
			.substring(s.length / 2, s.length)
			.split("")
			.filter(isVowels).length
	);
}

// T1: book
console.log(halvesAreAlike("book"));
// T2: textbook
console.log(halvesAreAlike("textbook"));
// T3: AbCdEfGh
console.log(halvesAreAlike("AbCdEfGh"));
