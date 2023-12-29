const video = document.querySelector('video')
const trailerContainer = document.querySelector('.trailer-container')
const closedIcon = document.querySelector('.closed-icon')
const button = document.querySelector('.btn')

button.addEventListener('click', ()=>{
    trailerContainer.classList.remove('active')
    video.play()

})

closedIcon.addEventListener('click', ()=>{
    trailerContainer.classList.add('active')
    video.pause()
    video.currentTime = 0;
})