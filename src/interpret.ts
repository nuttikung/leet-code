export function interpret(command: string): string {
	return command.split('').reduce((accumulative, current, index) => {
		if (current === '(' && command[index + 1] === ')') {
			return `${accumulative}o`;
		}
		if (current === '(' || current === ')') {
			return accumulative;
		}
		return `${accumulative}${current}`;
	}, '');
}
