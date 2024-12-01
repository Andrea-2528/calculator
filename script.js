function add (a, b) {
    return (parseFloat(a)+parseFloat(b));
}

function subtract (a, b) {
    return (parseFloat(a)-parseFloat(b));
}

function multiply (a, b) {
    return (parseFloat(a)*parseFloat(b));
}

function divide (a, b) {
    return (parseFloat(a)/parseFloat(b));
}

function printResult(result){
    let str = toString(result);
    if(result>=100000000||result<=-100000000||((result>=-0.01&&result<=0.01)&&result!==0)){
        displayInput.textContent = result.toExponential(4);
    }else{
        displayInput.textContent = result;
    }

    checkResult(displayInput.textContent);

    isResultDisplayed=true;

}

function checkResult(str){
    if(str.includes(".")){
        displayInput.textContent = parseFloat(str).toFixed(2);
    }
}

function operate (a, b, op) {
    if(a==undefined && b==undefined){return};

    isOperationInProgress = false;

    if (b==undefined){
        b = displayInput.textContent;
        secondNumber = b;
    }

    switch(op){
        case "+":
            result = add(a,b);
            printResult(result);
            break;
        case "-":
            result = subtract(a,b);
            printResult(result);
            break;
        case "x":
            result = multiply(a,b);
            printResult(result);
            break;
        case "/":
            if(b!==0){
                result = divide(a,b);
                printResult(result);
                break;
            }else {
                displayInput.textContent = "ERROR"
                displayLog.textContent ="Cannot divide by 0. Press AC."
                break;
            }
    }
}

function populate(str) {

    if(isResultDisplayed==false){
        if(isOperationInProgress==false){
            if(displayInput.textContent.length<9){displayInput.textContent = displayInput.textContent.concat(str)};            
        }else {
            displayInput.textContent=str;
            isOperationInProgress=false;
        };
    }else {
            displayLog.textContent = displayInput.textContent + ";";
            displayInput.textContent=str;
            firstNumber=undefined;
            secondNumber=undefined;
            result=undefined;
            isResultDisplayed=false;
        }

}

function beginOperation(str){

    if(firstNumber!==undefined){
        operate(firstNumber, secondNumber, operator);
        secondNumber=undefined;
        firstNumber = result;
        result = undefined;
    }else {
        firstNumber = parseFloat(displayInput.textContent);
    }

    operator = str;
    isResultDisplayed = false;
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

function decimal(){
    let str = displayInput.textContent;
    if(!str.includes(".")){
        populate(".");
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
digits.forEach((digit) => {digit.addEventListener("click", () => populate(digit.textContent))});

const operators = document.querySelectorAll(".operator");  //Selects all operators
operators.forEach((symbol) => {symbol.addEventListener("click", () => beginOperation(symbol.textContent))});

const equal = document.querySelector(".result");  //Selects the "=" button
equal.addEventListener("click", () => operate(firstNumber, secondNumber, operator));

const AC = document.querySelector(".ac");       //Selects the "AC" button
AC.addEventListener("click", () => clear());

const C = document.querySelector(".c");
C.addEventListener("click", () => remove());

const SIGN = document.querySelector(".sign");
SIGN.addEventListener("click", () => changeSign());

const DECIMAL = document.querySelector(".decimal");
DECIMAL.addEventListener("click", () => decimal());
