
const container = document.querySelector('#main');
const inputNumber = document.querySelector('input');
const convertButton = document.querySelector('button');

function convertToRoman(number) {
  const romanNumbers = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1,
  }

  let roman = '';

  for (const iterator of Object.keys(romanNumbers)) {
    // Saves the number of times the roman number needs to be repeated, based on the iteration 
    const toBeRepeated = Math.floor(number / romanNumbers[iterator])
    // Subtract the number that represents the roman number ex: 1863 after the first iteration becomes 863 that is  minus 1000 represented by M
    number -= toBeRepeated * romanNumbers[iterator]
    // Add to roman representation the number of times the Roman characters needs to be repeated
    roman += iterator.repeat(toBeRepeated)
  }

  return roman
}

console.log(convertToRoman(1863))

function showConversion() {
  const valueC = inputNumber.value;
 

  container.querySelector('#converted').innerHTML = valueC


}


convertButton.addEventListener('click', showConversion)
// container.innerHTML = convertToRoman(1836)