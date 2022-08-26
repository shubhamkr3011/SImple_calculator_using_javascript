let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click',(e)=>{ //added a event listener on the click event with a arrow function having parameter e
        buttonText= e.target.innerText;
        console.log(buttonText);
        // if(buttonText=='*'){
        //     screenValue += buttonText;
        //     screen.value = screenValue;
        // }
        if(buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == '='){
              screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}
