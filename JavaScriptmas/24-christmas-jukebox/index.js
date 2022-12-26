const player = document.getElementById("player")
const buttons = document.querySelectorAll('button')

function playSong(id) {
  const newURL = `https://www.youtube.com/embed/${id}?autoplay=1`

  return player.src = newURL
}
