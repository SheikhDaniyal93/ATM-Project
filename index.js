#! /usr/bin/env node
import inquirer from "inquirer";
let author = "SD93";
console.log(`Welcome to ${author} ATM Machine!!!`);
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
    console.log("Correct User Pin !!!");
    let transaction = await inquirer.prompt([
        {
            name: "account option",
            message: "Select Your Account",
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
            console.log("Collect Your Cash !!!");
            console.log(`Your New Balance is ${myBalance}\nThank you For Using ${author} ATM Machine!!!`);
        }
        else {
            console.log("Insufficient Balance!!!");
        }
    }
    else if (transaction.transaction === "Balance Information") {
        console.log(`Your Balance is:` + myBalance);
        console.log(`Thank you For Using ${author} ATM Machine!!!`);
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
        console.log(`Collect Your Cash !!!\nYour New Balance is ${myBalance}\nThank you For Using ${author} ATM Machine!!!`);
    }
    else if (transaction.transaction === "Account Transfer") {
        let transfer = await inquirer.prompt([
            {
                name: "transfer",
                message: "Select Your Account",
                type: "list",
                choices: ["00123", "00321", "00456"],
            },
            {
                name: "addmore",
                message: "Enter Your Amount You Want to Transfer",
                type: "number",
            }
        ]);
        if (transfer.addmore <= myBalance) {
            myBalance = myBalance - transfer.addmore;
            console.log(`Your amount has been successfully transfered !!!\nYour New Balance is ${myBalance}\nThank you For Using ${author} ATM Machine!!!`);
        }
        else {
            console.log(`Insufficient Balance!!!\nThank you For Using ${author} ATM Machine!!!`);
        }
    }
}
else {
    console.log(`Invalid User Pin !!!\nPlease Enter Correct User Pin.`);
}
