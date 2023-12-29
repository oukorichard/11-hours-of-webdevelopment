
const container = document.querySelector('.container');
const loginContainer = document.querySelector('.log-in');
const closeButton = document.querySelector('.close-btn');
const btn = document.querySelector('.btn');

btn.addEventListener('click', ()=>{
    container.classList.add('active');
    loginContainer.classList.add('visible');
   
})

closeButton.addEventListener('click',()=>{
    container.classList.remove('active');
    loginContainer.classList.remove('visible');
})