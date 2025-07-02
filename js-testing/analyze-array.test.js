import { analyzeArray } from '../js/analyze-array'

test('should return correct average, min, max and length of all numbers', () => {
    expect(analyzeArray([4, 5, 6])).toEqual({
        average: 5,
        min: 4,
        max: 6,
        length: 3
    })
})

test('should work with different data types', () => {
    expect(analyzeArray([false, "hi", 5, 10, [], 15])).toEqual({
        average: 10,
        min: 5,
        max: 15,
        length: 6
    })
})

test('should work with NaN', () => {
    expect(analyzeArray([NaN, "hi", 2, 4, NaN, 9])).toEqual({
        average: 5,
        min: 2,
        max: 9,
        length: 6
    })
})