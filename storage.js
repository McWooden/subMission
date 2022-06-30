// ini fitur salam buat apa ya hmm saya juga bingung kenapa buat ini
// cuman nerapin web storage hasil dari belajar di dicoding hehe

// ngambil variable


// ngejalanin code kalauuuu ada storagenya
if (typeof (Storage) != undefined) {
    const username = 'CHACHE_USERNAME_COKIE_4D'
    // ngecek kalo chache nya undefined dia bakal ngebuat item di localstorage
    if (localStorage.getItem(username) == undefined) {
        localStorage.setItem(username, `Guest#${Math.floor(Math.random()*9999)}`)
    }

    const displayUsername = document.getElementById('username')
    const pen = document.getElementById('pen')
    const save = document.getElementById('save')

    // ini fiturnya kalo pensil tadi di klik ntar span nya bakal berubah jadi input
    pen.addEventListener('click', () => {
        displayUsername.innerHTML = `<input type="text" max="20" value="${localStorage.getItem(username)}" id="newName">`
        save.style.display = 'inline'
        pen.style.display = 'none'
    })
    // nge save hasil inputnnya ke localstorage
    save.addEventListener('click', () => {
        const inputNewName = document.getElementById('newName')
        pen.style.display = 'inline'
        save.style.display = 'none'
        localStorage.setItem(username, inputNewName.value)
        displayUsername.innerText = localStorage.getItem(username)
    })

    // nampilin namanya di h2 #welcome
    displayUsername.innerText = localStorage.getItem(username)




} else {
    // kalo gada div welcomenya di ilangin aja
    alert('browsermu gada web storagenya :)')
    document.getElementById('welcome').style.display = 'none'
}