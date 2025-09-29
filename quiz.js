
//  Quiz Program

let score = 0;

let ans1 = prompt("Q1: What is the largest continent?\nA.Asia       B.Europe      C.Russia\nEnter your choice (1/2/3):");
console.log("Q1: What is the largest continent?\nA.Asia       B.Europe      C.Russia\n\n Answer : A.Asia\n\n");

if (ans1 === "1") 
{

    score++;

}


let ans2 = prompt("Q2: Which is the smallest planet?\nA.Earth       B.Mars        C.Mercury\nEnter your choice (1/2/3):");
console.log("Q2: Which is the smallest planet?\nA.Earth       B.Mars        C.Mercury\n\nAnswer : B.Mars\n\n");

if (ans2 === "3") 
{
    
    score++;

}


let ans3 = prompt("Q3: Which is the smallest bird?\nA.Parrot        B.Humming Bird     C.Peacock\nEnter your choice (1/2/3):");
console.log("Q3: Which is the smallest bird?\nA.Parrot        B.Humming Bird     C.Peacock\n\n Answer : B.Humming Bird \n\n");

if (ans3 === "2") 
{
     
    score++;

}


alert("Your Final Score: " + score);
console.log("Your Final Score: " + score);