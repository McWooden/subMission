const jumbotron = document.getElementById('jumbotron')
const minimize = document.querySelector('.minimize')
const aside = document.getElementsByTagName('aside')[0]
const items = Array.from(document.querySelectorAll('aside .aside-container .item'))
const randomImg = Array.from(document.getElementsByClassName('simple-img'))

minimize.addEventListener('click', () => {
    aside.classList.toggle('mini-aside')
    minimize.classList.toggle('mirror')
    items.map(el => el.classList.toggle('hilang'))
})

function getRandomUrl(el) {
    console.log('clicked')
    const randomNumber = Math.floor(Math.random()*10)
    const url = `https://source.unsplash.com/random/200x200?sig=${randomNumber}`
    el.attributes.src = url
}

randomImg.map(event => {
    event.addEventListener('click', (el) => {
        const randomNumber = Math.floor(Math.random()*15)
        const url = `https://source.unsplash.com/random/200x200?sig=${randomNumber}`
        el.target.src = url
    })
})
function random(max) {
    return Math.floor(Math.random()*max)
}
function randomX() {
    let index = random(3)
    if (index == 0) {
        return 'left'
    } else if (index == 2) {
        return 'right'
    } else {
        return 'center'
    }
}
function randomY() {
    let index = random(3)
    if (index == 0) {
        return 'top'
    } else if (index == 2) {
        return 'bottom'
    } else {
        return 'center'
    }
}


let randomZoom = setInterval(() => {
    let zoom = random(250)
    jumbotron.style.backgroundSize = `calc(100% + ${zoom}%)`
    jumbotron.style.backgroundPositionX = randomX()
    jumbotron.style.backgroundPositionY = randomY()
    setTimeout(() => {
        jumbotron.style.backgroundSize = '100%'
    }, 6000)
}, 9000)