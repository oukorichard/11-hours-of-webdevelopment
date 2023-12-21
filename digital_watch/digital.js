const hourE1 = document.getElementById('hour');
const minute1 = document.getElementById('minutes');
const second1 = document.getElementById('second');
const ampm1 = document.getElementById('ampm');

function updateTime(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = 'Am'

    if(h < 10){
        h = '0' + h;
    }
    else{
        h=h
    }

    if(m < 10){
        m = '0' + m;
    }
    else{
        m=m
    }

    if(s < 10){
        s = '0' + s;
    }
    else{
        s=s
    }

    hourE1.innerText = h;
    minute1.innerText = m;
    second1.innerText = s;

    setTimeout(()=>{
        updateTime()
    }, 1000)
}
updateTime()