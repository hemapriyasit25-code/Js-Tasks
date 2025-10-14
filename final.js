

let nowMs = Date.now();
let date = new Date(nowMs);
console.log(date.toString()); 


//page1




function verify()
{
var email = document.getElementById("email");
var name = document.getElementById("name");
var age = document.getElementById("age");
var Email = String(email.value);
var Name = String(name.value);
var Age = Number(age.value);

let resultData = {
  user: {
    "name ": Name,
    "email ": Email,
    "age ": Age
  },
};

let jsonOutput = JSON.stringify(resultData, null, 2);
console.log(jsonOutput);




    if(Email =="" || Name == "" || Age == "")
    {  
       
        if(Name == "")
        {
            confirm(" Please enter your name ");
            throw Error ("please enter name");

        }
        if(Email=="")
        {
            confirm(" Please enter your email id ");
            throw Error ("please enter email id ");
            document.getElementById("result").innerText = "❌ Email cannot be empty!";


        }
        if(Age == "" )
        {   
            
            
            confirm(" Please enter age ");
            throw Error ("please enter age");
            
            
        }
        
    }
    if(Age<12&&Age>0)
    {
        alert("you are young . so not eligible for event registration ");
        document.getElementById("result").innerText = "❌ Age must be 12 or above!";
        throw "you are young . so not eligible for event registration "
    
    }
    if (Age<= 0)
    {   
          alert("Age must be a valid positive number")
          throw new Error("Age must be a valid positive number.");
    }

    else
    {
            
        alert("registration success ! ");  
        window.location.href = "final-page2.html";  
        
    }

}







// page2

function quizs()
{
    var score=0;

   var quiz1 =document.getElementById("quiz1").value.toLowerCase();
   var quiz2 =document.getElementById("quiz2").value.toLowerCase();
   var quiz3 =document.getElementById("quiz3").value.toLowerCase();
    if(quiz1==="abdul kalam")
    {
            score=score+5;
    }

    if(quiz2==="france")
    {
            score=score+5;

    }

    if(quiz3==="football")
    {
            score=score+5;

    } console.log(score)



        
         var resultz=document.getElementById("resultquiz");
           console.log(resultz); 
           
           var Score=Number(score); 
           console.log(Score);  
           var percentage=(score/15)*100;
           document.getElementById("mark").textContent ="Score: " + Score+ "/" + 15;
           document.getElementById("percentage").textContent = "Percentage: " + percentage + " %"
          // var grade=document.getElementById("grade");
           
           if(Score===15)
           {
              var grade= document.getElementById("grade").textContent = "Grade : "+"A";
           }
           else if(Score===10)
           {
              var grade = document.getElementById("grade").textContent = "Grade : "+"B";
           }
           else if(Score===5)
           {
               var grade=document.getElementById("grade").textContent = "Grade : "+"C";
           }
           else
           {
               var grade=document.getElementById("grade").textContent = "Grade : "+"D";
           }
               //document.getElementById("output").textContent= JSON.stringify(mark, percentage);
           if (Score < 0 || Score > 16)
           {
                 throw new Error("Marks must be between 0 and 100.");
           }  
let outputdata ={
    quiz: {
        "totalScore ": score,
        "percentage ": (score / 15) * 100,
         grade
  }}
let jsonOutput = JSON.stringify(outputdata, null, 2);
console.log(jsonOutput);
 
}



function delay()
{
        var answer=confirm("Please wait 2 secs ")

        setTimeout(quizs, 2000);

}

/* 
function delay()
{
    var mark=document.getElementById("mark");
    var percentage=document.getElementById("percentage");
    var grade =document.getElementById("grade");
    var output =document.getElementById("output");
    document.getElementById("mark").textContent= " Total Marks : " + score ;
    document.getElementById("percentage").textContent= " : " + score ;
    document.getElementById("grade").textContent= " Total Marks : " + score ;


}*






