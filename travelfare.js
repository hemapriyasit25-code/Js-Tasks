
//  Travel Fare Calculator

function travelCalculator() {
    let distance = Number(prompt("Enter distance in km :"));
    console.log("Enter distance in km : " + distance);

    let transType = prompt(("Enter transport type (Car/Bus/Train):").toLowerCase());
    console.log("Enter transport type : " + transType);


    let farePerKm;
    switch (transType) {
        case "car":
            farePerKm = 15;
            break;
        case "bus":
            farePerKm = 2;
            break;
        case "train":
            farePerKm = 5;
            break;
        default:
            alert("Invalid transport type!");
            return;
    }

    let totalFare = distance * farePerKm;
    alert("Total Fare : "+ totalFare);
    console.log("Total Fare : "+ totalFare);

}

// Function call

travelCalculator();
