// - Help our chef fill a tray with tacos! 

function getRandomNumberOfTacos() {
  /*
  Make this function return an array that contains 
  between one and ten taco emojis 🌮
  Use the following JavaScript concepts:
      - Math.random()
      - Math.floor()
      - new Array()
      - Array.fill()
  */

  const howManyTacos = new Array(Math.floor(Math.random() * (10 - 1) + 1));
  return howManyTacos.fill('🌮')

}

function putTacosOnTray() {
  return getRandomNumberOfTacos().map(function (taco) {
      return `<div class="taco">${taco}</div>`
  }).join('')
}

document.getElementById('tray').innerHTML = putTacosOnTray()
