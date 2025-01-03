let c = 0;

let min = window.prompt("Enter number of minutes");
while (isNaN(min) || min == "") {
    min = window.prompt("Enter a valid number of minutes, please");
}
let sec = window.prompt("Enter number of seconds:");
while (isNaN(sec) || sec == "") {
    sec = window.prompt("Enter a valid number of seconds, please");
}

let max = Number(min) * 60 + Number(sec);
max = Number(max);

let t;

document.getElementById("play").onclick = function() {
    t = setInterval(count, 1000);
};

document.getElementById("pause").onclick = function() {
    clearInterval(t);
};

function count() {
    c = c + 1;
    document.getElementById("dis").innerHTML = c;

    if (c >= max) {
        document.getElementById("msg").innerHTML = "Time's up!";
        clearInterval(t);
    }
}
