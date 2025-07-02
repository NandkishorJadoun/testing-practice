import { calculator } from '../js/calculator'

test('should add two numbers', () => {
    expect(calculator.add(2, 2)).toBe(4)
})

test('should return difference between two numbers', () => {
    expect(calculator.subtract(10, 5)).toBe(5)
})

test('should return the correct calculation for multiplication', () => {
    expect(calculator.multiply(2, 5)).toBe(10)
})

test('should return the correct calculation for division', () => {
    expect(calculator.divide(22, 2)).toBe(11)
})

test('should return correct calculation with float point (round to 2 decimals)', () => {
    expect(calculator.add(0.02, 0.5211)).toBe(0.54);
    expect(calculator.subtract(0.1, 0.01)).toBe(0.09);
    expect(calculator.multiply(0.5, 1.1)).toBe(0.55);
    expect(calculator.divide(10, 3)).toBe(3.33);
})

test('should throw error when passing other data types', () => {
    expect(() => calculator.add("hi", [])).toThrow();
    expect(() => calculator.subtract("", 0)).toThrow();
    expect(() => calculator.multiply(52, {})).toThrow();
    expect(() => calculator.multiply(true, [false])).toThrow();
})

test('should throw error when NaN or Infinity passed as a param',()=>{
    expect(()=> calculator.add(5, NaN)).toThrow();
    expect(()=> calculator.add(NaN, Infinity)).toThrow();
})