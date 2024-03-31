#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let author = "SD93";
console.log(chalk.italic.blue(`Welcome to ${author} ATM Machine!!!`));
let myBalance = 50000;
let myPin = 1993;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin Code",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.italic.green("Correct User Pin !!!"));
    let transaction = await inquirer.prompt([
        {
            name: "account option",
            message: "Select Your Account Type",
            type: "list",
            choices: ["Current", "Saving"],
        },
        {
            name: "transaction",
            message: "Select Your Transaction",
            type: "list",
            choices: ["Fast Cash", "Withdraw", "Account Transfer", "Balance Information"],
        },
    ]);
    if (transaction.transaction === "Withdraw") {
        let withdraw = await inquirer.prompt([
            {
                name: "withdraw",
                message: "Enter Your Amount",
                type: "number",
            },
        ]);
        if (withdraw.withdraw <= myBalance) {
            myBalance = myBalance - withdraw.withdraw;
            console.log(chalk.italic.bold.green("Collect Your Cash !!!"));
            console.log(chalk.italic.yellow(`Your New Balance is ${myBalance}`));
            console.log(chalk.italic.bold.blue(`Thank you For Using ${author} ATM Machine!!!`));
        }
        else {
            console.log(chalk.italic.bold.red("Insufficient Balance!!!"));
        }
    }
    else if (transaction.transaction === "Balance Information") {
        console.log(chalk.italic.yellow(`Your Balance is:` + myBalance));
        console.log(chalk.italic.bold.blue(`Thank you For Using ${author} ATM Machine!!!`));
    }
    else if (transaction.transaction === "Fast Cash") {
        let amountOption = await inquirer.prompt([
            { name: "fastcash",
                message: "Select Your Amount",
                type: "list",
                choices: ["1000", "5000", "10000", "15000", "20000"],
            },
        ]);
        myBalance = myBalance - amountOption.fastcash;
        console.log(chalk.bold.italic.green("Collect Your Cash !!!"));
        console.log(chalk.italic.yellow(`Your New Balance is ${myBalance}`));
        console.log(chalk.italic.bold.blue(`Thank you For Using ${author} ATM Machine!!!`));
    }
    else if (transaction.transaction === "Account Transfer") {
        let transfer = await inquirer.prompt([
            {
                name: "transfer",
                message: "Select The Account Number",
                type: "list",
                choices: ["00123", "00321", "00456"],
            },
            {
                name: "addmore",
                message: "Enter the aount you want to transfer",
                type: "number",
            }
        ]);
        if (transfer.addmore <= myBalance) {
            myBalance = myBalance - transfer.addmore;
            console.log(chalk.bold.italic.green("Your amount has been successfully transfered !!!"));
            console.log(chalk.italic.yellow(`Your New Balance is ${myBalance}`));
            console.log(chalk.italic.bold.blue(`Thank you For Using ${author} ATM Machine!!!`));
        }
        else {
            console.log(chalk.italic.bold.red("Insufficient Balance!!!"));
            console.log(chalk.italic.bold.blue(`Thank you For Using ${author} ATM Machine!!!`));
        }
    }
}
else {
    console.log(chalk.italic.bold.red("Invalid User Pin !!!"));
    console.log(chalk.italic.blueBright("Please Enter Correct User Pin."));
}
