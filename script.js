// generating a random color
const randomColor = function(){
    let color ='#'
    const hex = '0123456789ABCDEF'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)];
    }
    return color
}

let intervalId
const startChaningColor = function(){
    if(!intervalId){
        intervalId = setInterval(function(){
            document.body.style.backgroundColor = randomColor()
        },1000)
    }
}

const stopChaningColor = function(){
    clearInterval(intervalId)
    intervalId = null
}

document.querySelector('#start').addEventListener('click',startChaningColor,false)
document.querySelector('#stop').addEventListener('click',stopChaningColor,false)