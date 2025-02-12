let interval = null;
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let body = document.querySelector("body");
console.log(colorPicker());

start.addEventListener("click", () => {
    if (!interval) {
        let startInterval = () => {
            let rgb = colorPicker();
            body.style.backgroundColor = rgb;
        }
        interval = setInterval(startInterval, 600);
    }
});
stop.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});
function colorPicker() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    console.log(`rgba(${red}, ${green}, ${blue}, 1)`);
    return `rgba(${red}, ${green}, ${blue}, 1)`;
}