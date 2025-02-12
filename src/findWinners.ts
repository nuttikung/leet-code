export function findWinners(matches: number[][]): number[][] {
	const scoreBoard = new Map<number, number>();
	for (const [win, lose] of matches) {
		if (scoreBoard.get(win) === undefined) {
			scoreBoard.set(win, 0);
		}
		scoreBoard.set(lose, (scoreBoard.get(lose) || 0) + 1);
	}
	const winners: number[] = [];
	const loserOne: number[] = [];
	scoreBoard.forEach((scores, player) => {
		if (scores === 0) winners.push(player);
		if (scores === 1) loserOne.push(player);
	});
	scoreBoard.clear();
	return [winners.sort((a, b) => a - b), loserOne.sort((a, b) => a - b)];
}
