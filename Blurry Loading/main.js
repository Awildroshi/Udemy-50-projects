const text= document.querySelector('.text');
const bg= document.querySelector('.background img');

let load= 0;
let int= setInterval(blurr, 30);

function blurr(){
    load++;
    if(load>99){
        clearInterval(int);
    }
    text.innerText = `${load}%`
    console.log('load');
    text.style.opacity= scale(load, 0 ,100, 1 ,0);
    bg.style.filter= `blur(${scale(load, 0, 100, 30, 0)}px)`;


}
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}



