

// 1. Greetings


const now = new Date();
const currentHour = now.getHours();
   
if(currentHour>"1" && currentHour<"12")
{
    alert("Good Morning !");
}
else if(currentHour>="12" && currentHour<="16")
{
        alert("Good afternoon");

}
else 
    {
    alert("Good evening !");
}


// 2. personal info


let name = prompt ("Enter your name") ;
let year = 2025 ;
let birth = prompt("Enter your birth year : ") ;
let city = prompt("Enter your city : ") ;
let eligible;


// 3. json format : 


var output={
    " Name ":name ,
    " Birth Year ":birth ,
    " City ":city
    
}
var out= JSON.stringify(output);
console.log(out);



// 4. calculate age & eligiblity 


let age = year - birth ;
if (age>=18)
{
    eligible = alert("you are " + age + " years old . So , you are eligible . ");
}

else
{
    eligible = alert("you are " + age + " years old . So , you are not eligible .");

}


console.log(name);
console.log(birth);
console.log(city);
console.log(age); 


// 5. Random quotes : 



let num = prompt("Enter random number (1 to 10 ) : ");

switch(true) 
{
    case num == "1":
    {
        alert("You entered 1 ")
        if(num==1)
        {
            confirm("Never stop until you succeed");
        }
        break;
    }
    case num == "2":
    {
        alert("You entered 2")
        if(num==2)
        {
            confirm("Failure cannot stay in the hands of a hard worker.");
        }
        break;
    }
    case num == "3":
    {
        alert("You entered 3")
        if(num==3)
        {
            confirm("Every failure is a step towards success.");
        }
        break;
    }
    case num == "4":
    {
        alert("You entered 4")
        if(num==4)
        {
            confirm("Hope is the power that moves life forward.");
        }
        break;
    }
    case num == "5":
    {
        alert("You entered 5")
        if(num==5)
        {
            confirm("Yesterday’s failure makes you stronger today.");
        }
        break;
    }
    case num == "6":
    {
        alert("You entered 6")
        if(num==6)
        {
            confirm("Try to achieve the impossible, success will follow you.");
        }
        break;
    }
    case num == "7":
    {
        alert("You entered 7")
        if(num==7)
        {
            confirm("Life is a struggle, but for the one who fights, success is certain.");
        }
        break;
    }
    case num == "8":
    {
        alert("You entered 8")
        if(num==8)
        {
            confirm("No art without struggle, no success without sweat.");
        }
        break;
    }
    case num == "9":
    {
        alert("You entered 9")
        if(num==9)
        {
            confirm("Even a small effort is the beginning of great success.");
        }
        break;
    }
    case num == "10":
    {
        alert("You entered 10")
        if(num==10)
        {
            confirm("Life is very short nanba ,always be happy!-Vijay");
        }
        break;
    }

    default:
        alert("Invalid number ?")
}


// 6. Basic math operators : 


let a = Number(prompt("Enter first number : "));
let b = Number(prompt("Enter second number : "));
let c=prompt("1=addition    2=subtraction    3=multiplication     4=division :");
let d;

switch(c)
{    
    
    
    case "1" :
    
        d=a+b;
        confirm("Addition");
        alert(d);
        break;
    
    case "2" :
    
        d=a-b;
        confirm("Subtraction");
        alert(d);
        break;
    
    case "3" :
    
        d=a*b;
        confirm("Multiplication");
        alert(d);
        break;
    
    case "4" :

        {
            function divide(a, b) 
               {
                       if (b === 0) 
                       {
                            throw new Error("Division by zero is not allowed!");
                       }
                         return a / b;
               }
                       
            try 
               {
          
                         console.log(divide(a, b));
              
                      } 
            catch (err) 
               {
          
                         console.log("Error caught: " + err.message);
               
                      }
               divide(a,b)
          
                 
               d=a/b;
               confirm("Division");
               alert(d);
               break;
        }         
    
    default:
        
        alert("Invalid operator ? ")
        

}


    





