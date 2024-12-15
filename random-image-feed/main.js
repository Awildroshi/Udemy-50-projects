const container = document.querySelector('.container')
const picsumURL = 'https://picsum.photos/'
const rows = 5

for(let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${picsumURL}${getRandomSize()}`
    container.appendChild(img)
}

function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300
}