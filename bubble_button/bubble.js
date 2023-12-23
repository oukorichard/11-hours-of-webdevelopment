const buttonE1 = document.querySelector('.btn')

buttonE1.addEventListener('mouseover', movement)

function movement(event){
    const y = event.pageY - buttonE1.offsetTop
    const x = event.pageX - buttonE1.offsetLeft

    buttonE1.style.setProperty('--xpage', x + 'px')
    buttonE1.style.setProperty('--ypage', y + 'px')
}