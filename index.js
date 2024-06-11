#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\nWelcome to 'Number Guessing Game'\n");
const secretNum = Math.floor(Math.random() * 10 + 1);
let myLoop = true;
let attemps = 1;
while (myLoop) {
    const userInput = await inquirer.prompt({
        type: "number",
        name: "usernumber",
        message: "Enter your number"
    });
    const { usernumber } = userInput;
    console.log(`\nYour attepmt no is ${attemps}`);
    if (usernumber === secretNum)
        wonMatch();
    if (usernumber > secretNum)
        greaterNum();
    if (usernumber < secretNum)
        lessNum();
    function wonMatch() {
        console.log(`Congratulation! Your guessed number is correct!`);
        console.log(`\nYou have attemped ${attemps} times to guess the correct number.`);
        myLoop = false;
    }
    function greaterNum() {
        console.log(`Your guessed number is greater than  actual number`);
        attemps++;
    }
    function lessNum() {
        console.log(`Your guessed number is less than  actual number`);
        attemps++;
    }
}
