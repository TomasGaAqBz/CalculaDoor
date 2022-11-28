// 1- Initiators

let total = 0;
let control = '0';
let previosOperator;

const screen = document.querySelector('.screen');


function btnClick(value){
    if (isNaN(value)){
        handleSymbol(value);
    }else{
        handleNumber(value);
    }
    screen.innerText = control;
}

// 2- Symbols

function handleSymbol(symbol){
    switch(symbol){
        case 'C':
            control = '0'
            total = 0
            break;
        case '=':
            if (previosOperator === null){
                return
            }
            flushOperation(parseInt(control));
            previosOperator = null;
            control = total;
            total = 0;
            break;
        case '←':
            if(control.length ===1){
                control = '0';
            }else{
                control = control.substring(0, control.length - 1);
            }
            break;
            case '+':
            case '−':
            case '×':
            case '÷':
                handleMath(symbol);
                break;
    }
}

// 3 - Operations

function handleMath(symbol){
    if (control === '0'){
        return;
    }

    const intControl = parseInt(control);

    if(total === 0){
        total =  intControl;
    }else{
        flushOperation(intControl);
    }
    previosOperator = symbol;
    control = '0';
}

function flushOperation(intControl){
    if(previosOperator === '+'){
        total += intControl;
    } else if(previosOperator === '−'){
        total -= intControl;
    } else if(previosOperator === '×'){
         total *= intControl;
    } else if (previosOperator === '÷' ){
        total /= intControl;
    }
}
function handleNumber(numberString){
    if (control === "0"){
        control = numberString;
    } else {
        control += numberString;
    }
}

// 4- Starter

function init(){
    document.querySelector('.buttons').addEventListener('click', function(event){
        btnClick(event.target.innerText);
    })
}
init();