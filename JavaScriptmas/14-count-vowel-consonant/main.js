function countVowelConsonant(str) {
  // write code here
  return str.split('').reduce((acc, arr ,index) => {
    if (/[aeiou]/.test(arr)) {
       acc++;
    } else {
       acc += 2;
    }
    return acc;
  },0)
}



/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';
        const value2 = 'abcdee';
        
        // act
        const result = countVowelConsonant(value);
        const result2 = countVowelConsonant(value2);

        // log
        console.log("result: ", result);
        console.log("result: ", result2);
        
        // assert
        expect(result).toBe(8);
        expect(result2).toBe(9);
    });
});