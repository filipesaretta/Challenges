function centuryFromYear(num) {
  //  write code here.
  const calc = num / 100;

  if (calc % 2 === 1 || calc % 2 === 0) { 
    return calc

  } else {
    return Math.floor(calc) + 1
  }
}


 
/**
* Test Suite 
*/
describe('centuryFromYear()', () => {
  it('returns current century', () => {
      // arrange
      const year = 1901;
      
      // act
      const result = centuryFromYear(year);

      // log
      console.log("result 1: ", result);
      
      // assert
      expect(result).toBe(20);
  });
  
  it('returns current century for edge ca se of start of century', () => {
      // arrange
      const year = 1700;
      
      // act
      const result = centuryFromYear(year);

      // log
      console.log("result 2: ", result);
      
      // assert
      expect(result).toBe(17);
  });    
});