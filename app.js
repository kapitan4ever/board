const board = document.querySelector('#board')
const colors = ['#FBCEB1', '#7FFFD4', '#F19CBB', '#CD2682', '#9966CC', '#A8E4A0', '#C1876B', '#003153']
const SQUARES_NUMBER = 400

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', setColor)
  //2 способ
  //square.addEventListener('mouseover', () => setColor(square))

  square.addEventListener('mouseleave', removeColor)
  //2 способ
  //square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square)
}

function setColor(event) {
  const element = event.target
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

//2 способ
/*function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}*/

function removeColor(event) {
  const element = event.target
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`
}
//2 способ
/*function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`
}*/

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}
// или
/* function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
} */