const randomImages = document.querySelector('.random-image')
const button = document.querySelector('.btn')

button.addEventListener('click', ()=>{
    for (let index = 0; index < 12; index++) {
        generateRandomImage()
    }
})

function generateRandomImage(){
    const random = document.createElement('img')
    random.src=`https://picsum.photos/200/300?random=${Math.floor(Math.random(13)*2000)}`

    randomImages.appendChild(random)
}