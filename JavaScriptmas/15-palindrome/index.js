function palindrome(str) {
  const cleanUpString = str.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
  const reversed = cleanUpString.split('').reverse().join('');

  console.log(cleanUpString)

  return cleanUpString === reversed ? true : false;
}

console.log(palindrome("1 eye for of 1 eye."))
console.log(palindrome("madam"))
console.log(palindrome("civi*c"));
console.log(palindrome("civic"));
