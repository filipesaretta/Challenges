/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/

function panicButton(callOut) {
  if (callOut.split(' ').length === 1) {
    return `${callOut.toUpperCase()}!`;
  }

 return  `${callOut.toUpperCase().split(' ').join(' 😱 ')}!` 
}


// Test your function
console.log(panicButton("winter"))
console.log(panicButton("I'm almost out of coffee")); 

