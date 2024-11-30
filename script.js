function add (a, b) {
    return (parseFloat(a)+parseFloat(b));
}

function subtract (a, b) {
    return parseFloat(a-b);
}

function multiply (a, b) {
    return parseFloat(a*b);
}

function divide (a, b) {
    return parseFloat(a/b);
}

function operate (a, b, op) {
    if(a==undefined && b==undefined){return};

    isOperationInProgress = false;

    if (b==undefined){
        b = displayInput.textContent;
        secondNumber = b;
    }

    // displayLog.textContent= displayLog.textContent.concat(displayInput.textContent) + "=";
    switch(op){
        case "+":
            result = add(a,b);
            if(result>=100000000||result<=-100000000||(result>=-0.01&&result<=0.01)){
                // firstNumber=undefined;
                // secondNumber=undefined;
                displayInput.textContent = result.toExponential(4);
                isResultDisplayed = true;
                break;
            }else if(result>=-0.01&&result<=0.01){


            }else{
                // firstNumber=undefined;
                // secondNumber=undefined;
                displayInput.textContent = result.toFixed(2);
                isResultDisplayed = true;
                break;
            }
        case "-":
            result = subtract(a,b);
            if(result>=100000000||result<=-100000000||(result>=-0.01&&result<=0.01)){
                // firstNumber=undefined;
                // secondNumber=undefined;
                displayInput.textContent = result.toExponential(4);
                isResultDisplayed = true;
                break;
            }else{
                // firstNumber=undefined;
                // secondNumber=undefined;
                displayInput.textContent = result.toFixed(2);
                isResultDisplayed = true;
                break;
            }
        case "x":
            result = multiply(a,b);
            if(result>=100000000||result<=-100000000||(result>=-0.01&&result<=0.01)){
                // firstNumber=undefined;
                // secondNumber=undefined;
                displayInput.textContent = result.toExponential(4);
                isResultDisplayed = true;
                break;
            }else{
                // firstNumber=undefined;
                // secondNumber=undefined;
                displayInput.textContent = result.toFixed(2);
                isResultDisplayed = true;
                break;
            }
        case "/":
            if(b!==0){
                result = divide(a,b);
                if(result>=100000000||result<=-100000000||(result>=-0.01&&result<=0.01)){
                    // firstNumber=undefined;
                    // secondNumber=undefined;
                    displayInput.textContent = result.toExponential(4);
                    isResultDisplayed = true;
                    break;
                }else{
                    // firstNumber=undefined;
                    // secondNumber=undefined;
                    displayInput.textContent = result.toFixed(2);
                    isResultDisplayed = true;
                    break;
                }
            }else {
                // firstNumber=undefined;
                // secondNumber=undefined;
                displayInput.textContent = "ERROR"
                displayLog.textContent ="Cannot divide by 0. Press AC."
                break;
            }
    }
}

function populate(str) {

    if(isResultDisplayed==false){
        if(isOperationInProgress==false){
            if(displayInput.textContent.length<8){displayInput.textContent = displayInput.textContent.concat(str)};            
        }else {
            displayInput.textContent=str;
            isOperationInProgress=false;
        };
    }else {
            displayLog.textContent = displayInput.textContent; // + ";"
            displayInput.textContent=str;
            isResultDisplayed=false;
        }

}

function beginOperation(str){

    if(firstNumber!==undefined){
        // secondNumber = parseFloat(displayInput.textContent);
        operate(firstNumber, secondNumber, operator);
        firstNumber = result;
        result = undefined;
    }else {
        firstNumber = parseFloat(displayInput.textContent);

    }

    operator = str;
    isResultDisplayed = false;
    // displayLog.textContent = displayLog.textContent + displayInput.textContent.concat(str);
    // displayInput.textContent="";
    displayInput.textContent += ` ${str}`;
    isOperationInProgress=true;
}

function clear() {
    displayLog.textContent="";
    displayInput.textContent="";
    operator="";
    result=undefined;
    firstNumber=undefined;
    secondNumber=undefined;
    isResultDisplayed=false;
    isOperationInProgress=false;
}

function remove() {
    let str = displayInput.textContent;
    let lastChar = str.charAt(str.length-1);
    let newStr;
    if(!str.includes("e")){
        if(["+", "-", "x", "/"].includes(lastChar)){
            newStr = str.slice(0, -2);
            displayInput.textContent = newStr;
            isOperationInProgress=false
            firstNumber = undefined;
            secondNumber = undefined;
        }else{
            newStr = str.slice(0, -1);
            displayInput.textContent = newStr;            
        }
    }
}

function changeSign(){
    let str = displayInput.textContent;
    switch(true){
        case str=="":
            displayInput.textContent="-";
            break;
        case str.charAt(0)=="-":
            if(str.length==1){
                displayInput.textContent="";
                break;
            }else{
                displayInput.textContent = str.slice(1);
                break;
            }
        default:
            displayInput.textContent = "-" + str;
            break;
    }
}

let firstNumber=undefined;
let secondNumber=undefined;
let result = undefined;
let operator="";     // Should accept +, -, *, /
let isResultDisplayed = false;
let isOperationInProgress = false;
let displayInput = document.querySelector(".displayInput");
let displayLog = document.querySelector(".displayLog");

const digits = document.querySelectorAll(".digit");  //Selects all digits in div.digits and "."
digits.forEach((digit) => {digit.addEventListener("click", () => populate(digit.textContent))})

const operators = document.querySelectorAll(".operator");  //Selects all operators
operators.forEach((symbol) => {symbol.addEventListener("click", () => beginOperation(symbol.textContent))});

const equal = document.querySelector(".result");  //Selects the "=" button
equal.addEventListener("click", () => operate(firstNumber, secondNumber, operator));

const AC = document.querySelector(".ac");       //Selects the "AC" button
AC.addEventListener("click", () => clear());

const C = document.querySelector(".c");
C.addEventListener("click", () => remove())

const SIGN = document.querySelector(".sign");
SIGN.addEventListener("click", () => changeSign());
