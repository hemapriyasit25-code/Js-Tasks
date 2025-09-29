
//  Monthly Budget Checker

let monthlyIncome = Number(prompt("Enter your monthly income:"));
console.log("Enter your monthly income:" + monthlyIncome );

let rent = Number(prompt("Enter rent expense:"));
console.log("Enter rent expense:" + rent);

let groceries = Number(prompt("Enter groceries expense:"));
console.log("Enter groceries expense:" + groceries);

let transport = Number(prompt("Enter transport expense:"));
console.log("Enter transport expense:" + transport);


let totalExpenses = rent + groceries + transport;

let message;

if (totalExpenses < monthlyIncome)
{

     message = "You are within budget.";

}

else 
{

    message = "Overspending!";

}


let savings = monthlyIncome - totalExpenses
alert ("Total Expenses: " + totalExpenses);
alert("Remaining Balance: " + savings );
alert("Message: " + message );


console.log("Total Expenses: " + totalExpenses);
console.log("Remaining Balance: " + savings );
console.log("Message: " + message );
