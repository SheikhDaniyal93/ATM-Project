#! /usr/bin/env node
import inquirer from "inquirer";
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
            choices: ["Withdraw", "Balance Information"],
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
            console.log(`Your Remaining Balance is ${myBalance}`);
        }
        else {
            console.log("Insufficient Balance!!!");
        }
    }
    else if (transaction.transaction === "Balance Information") {
        console.log(`Your Balance is:` + myBalance);
    }
}
else {
    console.log("Incorrect Pin Code!!!");
}
