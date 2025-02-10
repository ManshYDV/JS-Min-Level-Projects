//min and max operations
let min = document.getElementById("min");
let max = document.getElementById("max");
let MinMaxForm = document.querySelector(".MinMax");
let chancesInput = document.querySelector("#chances");
let remainingChances = 10;
let cRSpan = document.querySelector("#RemainingGuesses");
let minVal = null;
let maxVal = null;
let ans = null;
MinMaxForm.addEventListener("submit", (e) => {
    e.preventDefault();
    minVal = parseInt(min.value, 10);
    maxVal = parseInt(max.value, 10);
    if (isNaN(minVal) || isNaN(maxVal) || minVal >= maxVal) {
        alert("Please enter a valid min and max range");
        return;
    }
    document.querySelector("#minValue").innerText = minVal;
    document.querySelector("#maxValue").innerText = maxVal;
    remainingChances = parseInt(chancesInput.value) || 10;
    cRSpan.innerHTML = remainingChances;
    ans = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
})
//guess operations
let prevGuess = null;
let currGuess = document.querySelector("#currGuess");
let pGSpan = document.querySelector("#previousGuess");
let form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
    e.preventDefault();//stops page refresh
    let userGuess = parseInt(currGuess.value, 10);
    if (isNaN(userGuess) || userGuess < minVal || userGuess > maxVal) {
        alert(`Please enter a valid number between ${minVal} to ${maxVal}`);
        return;
    }
    remainingChances--;
    if (userGuess === ans) {
        alert("Congratulations 🎉, you guesses the correct number. You won 🎉🎉🎉🎉");
        return;
    }
    pGSpan.innerText = prevGuess != null ? prevGuess : "None";
    cRSpan.innerText = remainingChances;
    prevGuess = userGuess;
    if (remainingChances === 0) {
        alert(`Sorry, you ran out of chances, the correct ans was ${ans}`);
    }
    currGuess.value = "";
})
