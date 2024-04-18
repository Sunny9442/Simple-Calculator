import inquirer from "inquirer";

console.log("/n/ Welcome Sunny Wrold (Simple Calculator)/n/")
let answer = await inquirer.prompt([
    {message : "Enter First Number", type : "number" , name : "firstNumber"},
    {message : "Enter First Number", type :  "number" , name : "secondNumber"},
    {
        message : "Select one operator to perform a Operation",  
        type: "list",
        name : "operator",
        choices : ["Addition", "Substraction", "Division", "Multiplication", "Percentage"],
    },
]);
console.log(answer)
if (answer.operator === "Addition"){
    console.log(answer. firstNumber + answer.secondNumber)
}
else if (answer. operator === "Substraction"){
    console.log(answer. firstNumber - answer.secondNumber)
}
else if (answer. operator === "Multiplication"){
    console.log(answer.firstNumber * answer. secondNumber)
}
else if (answer.operator === "Division"){
    console.log(answer. firstNumber / answer. secondNumber)
}
else if (answer.operator === "Percentage"){
    console.log(answer. firstNumber % answer . secondNumber)
}
else {
    console.log("invalid input")
}