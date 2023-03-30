console.log(`Calculator in JavaScript`);

let inputScreen = document.getElementById('screen')
let buttons = document.querySelectorAll('button');
let screenVal = '';

for (items of buttons) {
    items.addEventListener('click', (e) => {
        buttonTxt = e.target.innerText;
        if (buttonTxt == "X") {
            buttonTxt = "*";
            screenVal += buttonTxt;
            inputScreen.value = screenVal;
        }
        else if (buttonTxt == "÷") {
            buttonTxt = "/";
            screenVal += buttonTxt;
            inputScreen.value = screenVal;
        }
        else if (buttonTxt == 'AC') {
            screenVal = "";
            inputScreen.value = screenVal;
        }
        else if (buttonTxt == 'DEL') {
            screenVal = inputScreen.value.slice(0,-1);
            inputScreen.value = screenVal;
        }
        else if (buttonTxt == '=') {
            screenVal = eval(screenVal);
            inputScreen.value = screenVal;
        }
        else if (buttonTxt == 'sin(') {
            buttonTxt = 'sin('
            screenVal += Math.sin(screenVal);
            inputScreen.value = screenVal;
        }
        else {
            screenVal += buttonTxt;
            inputScreen.value = screenVal;
        }
    })
}