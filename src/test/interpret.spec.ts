import { interpret } from "../interpret";

describe('interpret', () => {
	it.each([
		['G()(al)', 'Goal'],
		['G()()()()(al)', 'Gooooal'],
		['(al)G(al)()()G', 'alGalooG'],
	])(
		'should return o instead of () but if non empty (a) return a',
		(input, expected) => {
			const result = interpret(input);
			expect(result).toEqual(expected);
		}
	);
});
