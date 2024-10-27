let time;
let sec = 0;

function updateDisplay() {
    document.getElementById("nummain").textContent = sec;
}

document.getElementById("num1").onclick = () => {
    if (!time) {
        time = setInterval(() => {
            sec++;
            updateDisplay();
        }, 1000);
    }
};

document.getElementById("num2").onclick = () => {
    clearInterval(time);
    time = null;
};

document.getElementById("num3").onclick = () => {
    clearInterval(time);
    time = null;
    sec = 0;
    updateDisplay();
};