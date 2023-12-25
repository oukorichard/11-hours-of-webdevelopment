const navBar = document.querySelector('.navbar')

const bottomNav = document.querySelector('.bottom-container')


window.addEventListener('scroll', ()=>{
    if(window.scrollY > bottomNav.offsetTop-50){
        navBar.classList.add('active')
    }
    else{
        navBar.classList.remove('active')
    }
})