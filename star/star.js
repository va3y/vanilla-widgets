import './star.css'

const rootEl = document.querySelector('#star-widget')
let currRating = 1
let selectedStar = 0

for (let i = 1; i <= 5; i++) {
  const starEl = document.createElement('div')
  starEl.id = `star-${i}`
  starEl.className = 'star'
  starEl.innerText = '⭐️'
  starEl.onmouseenter = () => onMouseMove(i)
  starEl.onmouseleave = onMouseLeave
  starEl.onclick = () => onClick(i)
  rootEl.appendChild(starEl)
}

function onMouseMove(i) {
  selectedStar = i
  redraw()
}

function onMouseLeave() {
  selectedStar = null
  redraw()
}

function onClick(i) {
  currRating = i
  redraw()
}

function redraw() {
  for (let i = 1; i <= 5; i++) {
    const starEl = document.querySelector(`#star-${i}`)
    const isActive = (i <= currRating) || (selectedStar >= i)
    isActive && starEl.classList.add('active')
    !isActive && starEl.classList.remove('active')
  }
}