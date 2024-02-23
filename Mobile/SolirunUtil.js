let variable1 = 0;
let variable2 = 0;
let variable4 = 0;
 
 
function incrementVariable(variableName)
{
    eval(variableName + "++")
 
        document.getElementById("value" + variableName.charAt(variableName.length - 1)).innerText = eval(variableName);
}

