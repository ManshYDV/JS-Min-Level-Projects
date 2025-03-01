let interval;
let time = 60;
let score = 0;
let button = document.querySelector("button");
let target;
function createBubble() {
    let bubble = `<div class="bubble">1</div>`;
    for (var i = 2; i <= 96; i++) {
        var val = Math.floor(Math.random() * 10);
        bubble += `<div class="bubble">${val}</div>`;
    }
    document.querySelector("#pBottom").innerHTML = bubble;
}
function timer() {
    clearInterval(interval);
    time = 60;
    let timer = document.querySelector(".timer");
    timer.innerHTML = time;
    interval = setInterval(() => {
        if (time > 0) {
            time--;
            timer.innerHTML = time;
        }
        else {
            document.querySelector("#pBottom").innerHTML = `<h1>Game Over</h1>`
            alert(`Timeout, Congratulation your final score is ${score}`);
            clearInterval(interval)
        }
    }, 1000);
}
function getNewHit() {
    target = Math.floor(Math.random() * 10);
    document.querySelector("#hit").innerHTML = target;
}
function increaseScore() {
    score += 10;
    document.querySelector("#score").innerHTML = score;
}
function Score() {
    document.querySelector("#score").innerHTML = 0;
}
document.querySelector("#pBottom").addEventListener("click", (e) => {
    let clickedOn = parseInt(e.target.textContent);
    if (clickedOn === target) {
        increaseScore();
        createBubble();
    }
})
button.addEventListener("click", () => {
    createBubble()
    timer();
    getNewHit();
    Score();
})
