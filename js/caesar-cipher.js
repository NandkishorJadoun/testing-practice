export function caesarCipher(str, shftNum) {
  return str
    .split('')
    .map(letter => {

      if(!letter.match(/[a-zA-Z]/)){
        return letter
      }

      const letterCode = letter.toLowerCase().charCodeAt();
      const shiftedLetterCode = letterCode + shftNum;
      
      let result = shiftedLetterCode > 122 ?
        String.fromCharCode(shiftedLetterCode - 26) :
        String.fromCharCode(shiftedLetterCode)

      return letter === letter.toUpperCase() ?
        result.toUpperCase() : result

    })
    .join('');
}