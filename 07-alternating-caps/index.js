/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str){
  const string = str.split('').map((letter, index) => index % 2 === 0 ? letter.toLowerCase() : letter.toUpperCase()).join('')


  return string;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));