import { RandomizedSet } from "../randomizedSet"

test("should create a class with a default value as list property as empty Set", () => {
  const randomize = new RandomizedSet()
  expect(randomize).toHaveProperty("list", new Set<number>())
})

test("should getting true when value can be inserted to list", () => {
  const randomize = new RandomizedSet()
  const responseOne = randomize.insert(1)
  expect(responseOne).toBeTruthy()
  const expected = new Set().add(1)
  expect(randomize.list).toMatchObject(expected)
})

test("should getting false when value does not able to insert as it is duplicated", () => {
  const randomize = new RandomizedSet()
  const responseOne = randomize.insert(1)
  expect(responseOne).toBeTruthy()
  const expected = new Set().add(1)
  expect(randomize.list).toMatchObject(expected)
  const responseTwo = randomize.insert(1)
  expect(responseTwo).toBeFalsy()
})

test("should getting false when value does not exits to remove", () => {
  const randomize = new RandomizedSet()
  const responseOne = randomize.remove(1)
  expect(responseOne).toBeFalsy()
  const expected = new Set()
  expect(randomize.list).toMatchObject(expected)
})

test("should getting true if value is existing for removing", () => {
  const randomize = new RandomizedSet()
  const responseOne = randomize.insert(1)
  expect(responseOne).toBeTruthy()
  const expected = new Set().add(1)
  expect(randomize.list).toMatchObject(expected)
  const responseTwo = randomize.remove(1)
  expect(responseTwo).toBeTruthy()
  expect(randomize.list).toMatchObject(new Set())
})

test("should insert 3 values and get random value as a return by one of its", () => {
  const randomize = new RandomizedSet()
  const responseOne = randomize.insert(1)
  expect(responseOne).toBeTruthy()
  const responseTwo = randomize.insert(2)
  expect(responseTwo).toBeTruthy()
  const responseThree = randomize.insert(3)
  expect(responseThree).toBeTruthy()
  const expected = new Set().add(1).add(2).add(3)
  expect(randomize.list).toMatchObject(expected)
  const randomNumber = randomize.getRandom()
  expect(randomNumber).toBe(1 || 2 || 3)
})
