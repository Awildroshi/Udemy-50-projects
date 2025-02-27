const container = document.querySelector('.container')
const picsumURL = 'https://picsum.photos/300/300'
const rows = 5

for(let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${picsumURL}${getRandomSize()}`
    container.appendChild(img)
}

function getRandomSize() {
    return `${getRandomNr()}/${getRandomNr()}`
}

function getRandomNr() {
    return Math.floor(Math.random() * 200) + 100
}
