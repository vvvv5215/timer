let c = 0;

let min = window.prompt("Enter number of minutes")
while(isNaN(min)||min==""){min = window.prompt("Enter a valid number of minutes,idiot")}
let sec = window.prompt("Enter number of seconds:")
while(isNaN(sec)||sec==""){sec = window.prompt("Enter a valid number of seconds,idiot")}


max = Number(min)*60 + Number(sec)
max = Number(max);



const time = setInterval(count, 1000);

function count() {
    c = c + 1;
    document.getElementById("dis").innerHTML = c;
    
    if (c >= max) {
        document.getElementById("msg").innerHTML = "Time's up lil bro";
        clearInterval(time);
    }
}