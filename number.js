function add() {
    var inputTextFromFile = document.getElementById("inputText").value;
    if (!typeof inputTextFromFile === "String") {
        console.log("Error, la variable de entrada no es una string")
    }
    var result = 0;
    var operatorString = "";
    var sumOperator = ","
    for (var iterator = 0; iterator < inputTextFromFile.length; iterator +=1) {
        var operatorNumber = 0;
        if (inputTextFromFile[iterator] == "/" && inputTextFromFile[iterator + 1] == "/" && inputTextFromFile[iterator + 3] == "/") {
            sumOperator = inputTextFromFile[iterator + 2];
            iterator += 3; 
        } else if (!isNaN(inputTextFromFile[iterator])) {
            //console.log("entra1")
            operatorString += inputTextFromFile[iterator];
        } else if (inputTextFromFile[iterator] == sumOperator ) {
            if (!isNaN(inputTextFromFile[iterator + 1])) {
                operator2 = Number(inputTextFromFile[iterator + 1])
                operatorNumber = Number(operatorString);
                op1sumop2 = operatorNumber + operator2;
                iterator += 2;
                operatorString = "";
                //console.log("entra2")
                result += op1sumop2;
            }
        }
        if (!isNaN(inputTextFromFile[iterator]) && iterator === inputTextFromFile.length - 1 && inputTextFromFile[iterator -1] === sumOperator) {
            operatorNumber = Number(operatorString);
            //console.log("entra3")
            operatorString = "";
            result += operatorNumber;
        }
        if (!isNaN(inputTextFromFile[iterator]) && inputTextFromFile[iterator -1] !== sumOperator && iterator !== 0 && inputTextFromFile[iterator -1] !== "/") {
            if (result !== 0) {
                tmpString = String(result) + inputTextFromFile[iterator];
                result = Number(tmpString);
            } else {
                tmpString = operatorString;
                operatorString = "";
                result = Number(tmpString);
            }
        }
    }
    console.log(result);

}