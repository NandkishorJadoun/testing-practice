import { revStr } from "../js/reverseString.js"

test('should return an empty string if an empty string passed', () => {
    expect(revStr("")).toBe("")
})

test('should reverse a string', () => {
    expect(revStr("apple")).toBe('elppa')
})