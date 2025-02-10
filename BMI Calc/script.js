let form=document.querySelector("form");
form.addEventListener('submit',  (e) => {
    e.preventDefault();
    let val1=form.querySelector('#height').value;
    let val2=form.querySelector('#weight').value;
    let result=document.querySelector("#result");
    if(val1 <= 0 || val1 === '' || isNaN(val1)){
        result.innerText="Please Enter valid value";
    }
    else if(val2 <= 0 || val2 === '' || isNaN(val2)){
        result.innerText="Please Enter valid value";
    }
    let ans=(val2/((val1*val1)/10000)).toFixed(2);
    result.innerText=ans;
    let msg=document.querySelector("#msg");
    if(ans <18.6){
        msg.innerText="You are underweight, please increase your diet"
    }
    else if(ans>=18.6 && ans<24.9){
        msg.innerText="You are healthy person accroding to your height and weight"
    }
    else{
        msg.innerText="You are overweight, please eat less"
    }
})
