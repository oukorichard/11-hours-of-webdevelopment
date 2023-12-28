const bodyE1 = document.querySelector('body')

bodyE1.addEventListener('mousemove', (event)=>{
    
    const xposition = event.offsetX
    const yposition = event.offsetY
    const size = Math.floor(Math.random()*100) + 'px'


    const spanE1 = document.createElement("span")

    spanE1.style.left = xposition + 'px'
    spanE1.style.top = yposition + 'px'
    
    spanE1.style.backgroundColor = randomColor()
    spanE1.style.width = size
    spanE1.style.height = size
    bodyE1.appendChild(spanE1)

    setTimeout(()=>{
        spanE1.remove()
    }, 1000)
})

function randomColor(){
    const char = '123456789abscdef';
    let colorCode = '';
    const colorcodelength = 6;
    for (let index = 0; index < colorcodelength; index++) {
        const randomColors = Math.floor(Math.random()*char.length);
        colorCode += char[randomColors]
    }
    return '#' + colorCode;
}

