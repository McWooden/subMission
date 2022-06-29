const welcome = document.getElementById('welcome')

if (typeof (Storage) != undefined) {
    const username = 'CHACHE_USERNAME_COKIE_4D'
    if (localStorage.getItem(username) == undefined) {
        localStorage.setItem(username, generateNameGuest())
    }

    const greeting = document.querySelector('#welcome h2')
    const displayUsername = document.getElementById('username')
    const pen = document.getElementById('pen')
    const save = document.getElementById('save')

    function generateNameGuest() {
        return `Guest#${Math.floor(Math.random()*9999)}`
    }
    pen.addEventListener('click', () => {
        displayUsername.innerHTML = `<input type="text" max="20" value="${localStorage.getItem(username)}" id="newName">`
        save.style.display = 'inline'
        pen.style.display = 'none'
    })
    save.addEventListener('click', () => {
        const inputNewName = document.getElementById('newName')
        pen.style.display = 'inline'
        save.style.display = 'none'
        localStorage.setItem(username, inputNewName.value)
        displayUsername.innerText = localStorage.getItem(username)
    })


    displayUsername.innerText = localStorage.getItem(username)















} else {
    console.log('browsermu tidak suport storage :)')
    welcome.style.display = 'none'
}