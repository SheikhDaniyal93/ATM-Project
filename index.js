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
    console.log("Correct Pin Code!!!");
    let transaction = await inquirer.prompt([
        {
            name: "transaction",
            message: "Select Your Transaction",
            type: "list",
            choices: ["Fast Cash", "Withdraw", "Balance Information"],
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
}
else {
    console.log("Incorrect Pin Code!!!");
}
