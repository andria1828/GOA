var time = 20;
var p = document.getElementById('t');

setInterval(function() {
    p.textContent = time;
    time--;

    if (time < 0) {
        p.textContent = " time is over";
    }
}, 1000);