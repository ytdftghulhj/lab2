const startBtn = document.getElementById('start')
const screens = document.querySelectorAll('.screen')
const timeList = document.getElementById('time-list')
const timeEl = document.getElementById('time')
const board = document.getElementById('board')

const colors = [
    '#FC2125', '#29C732', '#0A60FF', '#FD8208', '#FEC309', '#90714C',
    '#FB0D8F', '#9D33D6', '#453CCC', '#7B7B81', '#007B81', '#678532'
]

let time = 0
let score = 0
let t

startBtn.addEventListener('click', event => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame() {
    createRandomCircle()
    t = setInterval(decreaseTime, 1000)
    setTime(time)
}

function decreaseTime() {
    if (time === 0) {
        clearInterval(t)
        finishGame()
    } else {
        let current = --time    
        setTime(current)
    }
}

function setTime(value) {
    let minutes = Math.floor(value / 60)
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    let seconds = Math.floor(value % 60)
    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    timeEl.innerHTML = `${minutes}:${seconds}`
}

function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1> Счёт: <span class="primary">${score}</span></h1>`
}

function createRandomCircle() {
    const circle = document.createElement('div')
    circle.classList.add('circle')

    circle.classList.add('circle')
    const size = getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    const color = getRandomColor()

    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.background = color
    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}