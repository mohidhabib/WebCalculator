const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");


let firstNumber = "";
let secondNumber = "";
let operator = "";

let expression = "";



buttons.forEach((button) => {


    button.addEventListener("click", (event) => {

        const value = event.target.value;

        
        if (value === "C") {
            
            cleardisplay();
            return;


        }

        
        if (value === "=")     
        {
            
            calculate();
            return;
        }

        
        if (value === "+" || value === "-" || value === "*" || value === "/") {

            
            if (firstNumber === "") {
                return;

            }

        
            if (operator !== "" && secondNumber === "") {
                
                return;
            }

            operator = value;
            expression += " " + value + " ";
            display.value = expression;
            
            
            return;



        }

      
        if (operator === "") {

            
            if (firstNumber === "0") {
                firstNumber = value;

            } 
            
            else {
                
                firstNumber += value;
            }

            expression = firstNumber;
        }
        else {

            if (secondNumber === "0") {
                secondNumber = value;
            } 
            else {
                secondNumber += value;

            }

            expression = firstNumber + " " + operator + " " + secondNumber;


        }

        display.value = expression;



    });

});


function add(a, b) {
   
    return a + b;

}

function subtract(a, b) {
    
    
    return a - b;

}

function multiply(a, b) {
    
    return a * b;


}

function divide(a, b) {
    if (b === 0) {
       
       
        return "ERROR";


    }

    return a / b;
}


function calculate() {


    if (firstNumber === "" || secondNumber === "" || operator === "") {
        return;

    }

    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);
    let result;

    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;



        case "-":
            result = subtract(num1, num2);
            
            break;


        
        case "*":
            result = multiply(num1, num2);
            
            break;

        case "/":
            
            result = divide(num1, num2);
            break;
    }

    display.value = result;

    
    firstNumber = result.toString();
    secondNumber = "";
    operator = "";
    expression = firstNumber;


}


function cleardisplay() {
   
    firstNumber = "";
    secondNumber = "";
    operator = "";
    expression = "";
    display.value = "0";

}

