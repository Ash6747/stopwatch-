let sec = ms = "0" + 0,
startTimer;

const startbtn = document.querySelector('.start'),
stopbtn = document.querySelector('.stop'),
resetbtn = document.querySelector('.reset');

startbtn.addEventListener('click', start);
stopbtn.addEventListener('click', stop);
resetbtn.addEventListener('click', reset);

function start() {
    stopbtn.classList.remove("stopActive");
    startbtn.classList.add("active");
    startTimer = setInterval(()=>{
        ms++
        ms = ms <10 ? "0" + ms : ms;

        if(ms == 100){
            sec++;
            sec = sec < 10 ? "0" + sec : sec;
            ms = "0" + 0;
        }
        putValue();
    },10);//1000ms = 1s
}
function stop() {
    startbtn.classList.remove("active");
    stopbtn.classList.add("stopActive");
    clearInterval(startTimer);
}
function reset() {
    startbtn.classList.remove("active");
    stopbtn.classList.remove("stopActive");
    clearInterval(startTimer);
    sec = ms = "0" + 0;

    putValue();
}

function putValue() {
    document.querySelector(".milliseconds").innerText = ms;
    document.querySelector(".seconds").innerText = sec;

}