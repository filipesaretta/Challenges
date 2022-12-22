function rot13(str) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const key = alphabet.split('');
  const strToArr = str.split('')
  const reg = /[!?.\s]$/
  let cipher = []

  for (let i = 0; i < str.length; i++) {
    // Saves the punctuation to the respective positions
    if (reg.test(strToArr[i])) {
      cipher.push(strToArr[i])
    }
    console.log(strToArr[i])

    // Get the letter
    const curr = str.charAt(i)
    // Get the letter position in the key which is the alphabet 
    const letter = key.indexOf(curr)

    if(letter !== -1){
      let decryptKey = (letter - 13)
      // Check if the decryptKey is negative
      if (decryptKey < 0) {
        // If it is  reset to go the other way around
        decryptKey = letter + 13
        cipher.push(key[decryptKey])
      } else {
        cipher.push(key[decryptKey])
      }
    }
  }

  return cipher.join('')

}

console.log(rot13("SERR YBIR?"))

