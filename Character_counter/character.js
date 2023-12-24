const textCounter = document.getElementById('textarea')
const totalCounter = document.getElementById('total-counter')
const remainingCounter = document.getElementById('remaining-counter')

textCounter.addEventListener('keyup', ()=>{
    counter()
})

function counter(){
    totalCounter.innerText = textCounter.value.length
    remainingCounter.innerText = textCounter.getAttribute('maxLength')-textCounter.value.length

}