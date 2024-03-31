#! /usr/bin/env node
import inquirer from "inquirer";
import { TestScheduler } from "rxjs/testing";
// asking questions from users through inquirer
let answers= await inquirer.prompt([
    {message : "enter your first number", type:"number",name:"firstnumber"},
    {message: "enter your second number",type:"number",name:"secondnumber"},
    {
        message:"select operator",
        type:"list",
        name:"operator",
        choices:["Addition","Subtraction","Multiplication","Division"],
    },
]);

// conditional statements:If-Else
if(answers.operator === "Addition"){
console.log(answers.firstnumber + answers.secondnumber);
}
else if (answers.operator === "Subtraction"){
    console.log(answers.firstnumber - answers.secondnumber);
}
else if (answers.operator === "Multiplication"){
    console.log(answers.firstnumber * answers.secondnumber);
}
else if (answers.operator === "Division"){
    console.log(answers.firstnumber / answers.secondnumber);
    
}
else{
    console.log("invalid");
}