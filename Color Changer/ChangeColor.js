let button=document.querySelectorAll(".button");
// console.log(button);
let body=document.querySelector("body");
button.forEach(( btn) => {
btn.addEventListener('click',  (e) => {
if(e.target.id === 'Red' ){
    body.style.backgroundColor = 'red';
}
if(e.target.id === 'Orange'){
body.style.backgroundColor='orange';
}
if(e.target.id === 'Yellow'){
body.style.backgroundColor='yellow';
}
if(e.target.id === 'DarkGreen'){
body.style.backgroundColor='darkgreen';
}
if(e.target.id === 'Purple'){
    body.style.backgroundColor='purple';
}
})
});
