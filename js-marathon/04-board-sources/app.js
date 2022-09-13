const board = document.getElementById('board')
const SQUARES_NUMBER = 600
const colors = ['#FEBDD3', '#FDB666', '#FFFF66', '#A3FD5A', '#57E3F7', '#B59DD7', '#CCCCCC']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}

function setColor(e) {
    const color = getRandomColor()
    e.style.backgroundColor = color
    e.style.boxShadow = `0 0 2px ${color}`
}

function removeColor(e) {
    e.style.backgroundColor = '#1d1d1d'
    e.style.boxShadow = `0 0 2px #1d1d1d`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}