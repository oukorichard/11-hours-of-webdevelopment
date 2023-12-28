
const container = document.querySelector('.container');

for (let index = 0; index < 30; index++) {
    const colorContainer = document.createElement('div');

    colorContainer.classList.add('color-container');
    container.appendChild(colorContainer);
}
const colorContainerE1 = document.querySelectorAll('.color-container')

colorGenerator()

function colorGenerator(){
    colorContainerE1.forEach(colorContainerE1 => {
        colorContainerE1.style.backgroundColor = randomCodeGenerator();
        colorContainerE1.innerText = randomCodeGenerator()
    });
}

// create random colo generator
randomCodeGenerator()

function randomCodeGenerator(){
    const char = '123456789abcdef';
    let colorCode = '';
    const colorCodelenth = 6;

    for (let index = 0; index < colorCodelenth; index++) {
        let randomColor =  Math.floor(Math.random()*char.length);
        colorCode += char[randomColor]
        
    }
     return '#' + colorCode;
}