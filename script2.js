let displayValue = document.getElementById('display');
function appendToDisplay(value){
    displayValue.value += value;
}
function clearDisplay() {
    displayValue.value = " "
}
function calculate(){
    try{
        let result = eval(displayValue.value);
        displayValue.value= result;
    }
    catch(error){
        displayValue.value = "Input Error"
    }
}
 function squareRoot(){
    displayValue.value = Math.sqrt(displayValue.value);
 }