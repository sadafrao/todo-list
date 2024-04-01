#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todolist = [];
let conditions = true;

console.log(chalk.red.bold("\n \twell come to my todo list \n "));
while(conditions){
    let addTask = await inquirer.prompt([
        {
             name : "task",
             type : "input ",
             message : chalk.green.bold("Enter your new task"),
}
]);
todolist.push(addTask.task);
console.log(`${addTask.task} Task add in Todo_list succesfully` );
let addMoreTask = await inquirer.prompt([
    {

    name : "addmore",
    type : "confirm",
    message : chalk.green.bold("Do you want to add more task"),
    default : "False",
}
]);
conditions = addMoreTask.addmore
}
console.log("your update Todo-list", todolist);
