
//  ATM Simulator

let pin = "1234";
let num = 1000;
let balance = Number(num);
let userpin = prompt("Enter your PIN:");


if (userpin === pin)
{
    let choice = prompt("Menu:\n1. Withdraw\n2. Deposit\n3. Check Balance\nEnter your choice (1/2/3):");

    if (choice=="1") 
    {
        let withdrawAmount = Number(prompt("Enter amount to withdraw:"));
        console.log("Enter amount to withdraw:" + withdrawAmount,"\n");


        if (withdrawAmount <= balance) 
        {
            balance -= withdrawAmount;
            alert("Withdrawal successful! New balance: " + balance);
            console.log("Withdrawal successful! New balance:" + balance,"\n\n");
        } 

        else 
        {
            alert("Insufficient balance!");
            console.log("Insufficient balance!\n\n");
        }
    } 

    else if (choice == "2") 
    {

        let depositAmount = Number(prompt("Enter amount to deposit:"));
        console.log("Enter amount to deposit:" +depositAmount );
        balance += depositAmount;
        alert("Deposit successful! New balance: " + balance);
        console.log("Deposit successful! \nNew balance:" + balance,"\n\n");

    } 

    else if (choice == "3") 
    {

        alert("Your balance is: " + balance );
        console.log("Your balance is:" + balance,"\n\n" );

    } 

    else 
    {
        alert("Invalid choice!\n\n");
        console.log("Invalid choice!\n\n");
    }
} 

else 
{
    alert("Incorrect PIN!");
    console.log("Incorrect PIN!");
}




