import { MyQueue } from './myQueue';

describe('MyQueue', () => {
	test('should return empty as true when nothing ther', () => {
		const q = new MyQueue();
		const isEmpty = q.empty();
		expect(isEmpty).toBeTruthy();
	});

	test('should able to insert number and get value', () => {
		const q = new MyQueue();
		q.push(1);
		expect(q.empty()).toBeFalsy();
		expect(q.peek()).toBe(1);
		expect(q.empty()).toBeFalsy();
		q.push(2);
		expect(q.pop()).toBe(1);
		expect(q.peek()).toBe(2);
		expect(q.pop()).toBe(2);
		expect(q.empty()).toBeTruthy();
	});
});
