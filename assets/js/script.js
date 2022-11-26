// 1- Initiators

let total = 0;
let control = '0';
let previosOperator;

const screen = document.querySelector('.screen');


function btnClick(value){
    if (isNaN(value)){
        handleSymbol(value)
    }else{
        handleNumber(value)
    }
    screen.innerText = control;
}

// 2- Symbols

function handleSymbol(symbol){
    switch(symbol){
        case 'c':
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
        case '← ':
            

    }
}




// 3 - Numbers