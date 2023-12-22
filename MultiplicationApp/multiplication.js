const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questioE1 = document.getElementById('question');
const score1 = document.getElementById('score');
const submit1 = document.getElementById('submit');
const input1 = document.getElementById('input');
const form1 = document.getElementById('form');

questioE1.innerText = `What is ${num1} by ${num2}`;
const correctAnswer = num1*num2

let outCome = JSON.parse(localStorage.getItem('outCome')); 

form1.addEventListener('submit',sub)
function sub(){
    const userAns = +input1.value 
    if(userAns === correctAnswer){
        outCome++
        storage()
    }
    else if(!userAns){
        outCome = 0;
    }
    else{
        outCome--
        storage()
    } 
}
function storage(){
    localStorage.setItem('outCome', JSON.stringify(outCome))
}

score1.innerText = `score: ${outCome}`