// mengambil semua element yang diperlukan
const jumbotron = document.getElementById('jumbotron')
const minimize = document.querySelector('.minimize')
const aside = document.getElementsByTagName('aside')[0]
const items = Array.from(document.querySelectorAll('aside .aside-container .item'))
const randomImg = Array.from(document.getElementsByClassName('simple-img'))

// minimize kalo di klik dia bakal mengubah size dari aside dan mengubah arah panah minimize 180deg
// class item di aside bisa hilang karena ada class .hilang, jika diterapkan akan memiliki property display dan valuenya none
minimize.addEventListener('click', () => {
    aside.classList.toggle('mini-aside')
    minimize.classList.toggle('mirror')
    items.map(el => el.classList.toggle('hilang'))
})

// fitur ini akan membuat link url random 
function getRandomUrl(el) {
    const randomNumber = Math.floor(Math.random()*15)
    return `https://source.unsplash.com/random/200x200?sig=${randomNumber}`
}

// ini akan mengganti source url elemen target yang di klik
// element nya si img yang punya class 'simple-img'
randomImg.map(event => {
    event.addEventListener('click', (el) => {
        const url = getRandomUrl()
        el.target.src = url
    })
})


function random(max) {
    return Math.floor(Math.random()*max)
}
// mendapatkan value random dari property css background-position-x
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
// mendapatkan value random dari property css background-position-y
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

// menjalankan script setiap parameter kedua dari setinterval
// biar kayak game CODM mode BR kalo menang dia bakal ngeliatin map yang nge rekam jarak tempuh player
let randomZoom = setInterval(() => {
    let zoom = random(250)
    jumbotron.style.backgroundSize = `calc(100% + ${zoom}%)`
    jumbotron.style.backgroundPositionX = randomX()
    jumbotron.style.backgroundPositionY = randomY()
    // biar ngak cuma nge zoom, ini bakal balikin background sizenya jadi semula biar keliatan enak
    setTimeout(() => {
        jumbotron.style.backgroundSize = '100%'
    }, 6000)
}, 9000)
