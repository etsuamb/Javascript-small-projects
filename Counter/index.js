let counter = 0;
let buttons = document.querySelectorAll("button");
let value = document.getElementById("value");
console.log(buttons);

buttons.forEach(function (btns){
    btns.addEventListener("click", function (event){
        let action = event.currentTarget.classList;
        if(action.contains("decrease")){
            counter--;
        }
       else if (action.contains("increase")) {
          counter++;
        }
        if (action.contains("reset")) {
          counter = 0;
        }
        if(counter>0){
            value.style.color = "green"
        }
        if (counter < 0) {
          value.style.color = "red";
        }
        if (counter === 0) {
          value.style.color = "black";
        }
        value.textContent = counter;
    })
})