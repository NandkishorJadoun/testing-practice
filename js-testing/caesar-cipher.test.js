import { caesarCipher } from '../js/caesar-cipher'

test('should take a string and returns it with each character shifted', () => {
    expect(caesarCipher('abc', 1)).toBe("bcd")
})

test('should work for wrapping from z to a', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc')
})

test('shifted lettercase should follow the original lettercase',()=>{
    expect(caesarCipher('HeLLoxYz', 3)).toBe('KhOOraBc')
})

test('Punctuation, spaces, and other non-alphabetical characters should remain unchanged', ()=>{
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})