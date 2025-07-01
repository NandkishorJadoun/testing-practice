import { capWord } from '../js/capitalize.js'

test('does not change a one-letter lowercase word incorrectly', () => {
    expect(capWord("a")).toBe("A")
})

test('capitalize only first letter of the word', ()=>{
    expect(capWord('apple')).toBe('Apple')
})

test('return empty string if passed an empty string', ()=>{
    expect(capWord('')).toBe('')
})