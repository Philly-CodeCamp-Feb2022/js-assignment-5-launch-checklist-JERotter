// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let myTarget = document.getElementById("missionTarget");
   myTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
`}

function validateInput(testInput) {
    let numVal = Number(testInput.value);

    if (testInput.value === "" || testInput.value === " ") {
       return "Empty";         
    }
    
    if (isNaN(numVal)) {
        return "Not a number";         
    }

    if (!isNaN(numVal)) {
        return "Is a number";         
    }
}

function formSubmission(event, document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotNameVer = (validateInput(pilot));
    let copilotNameVer = (validateInput(copilot));
    let fuelVer = (validateInput(fuelLevel));
    let cargoVer = (validateInput(cargoLevel));
    
    if (pilotNameVer === "Is a number") {
        alert("Make sure to enter valid information for each field!");
        event.preventDefault();
    } else {
        pVar = document.getElementById('pilotStatus');
        pVar.innerText = `Pilot ${pilot.value} is ready for launch.`
        event.preventDefault();
    }//end pilot


    if (copilotNameVer === "Is a number") {
        alert("Make sure to enter valid information for each field!");
        console.log(typeof pilot.value);
        event.preventDefault();
    } else {
        cpVar = document.getElementById('copilotStatus'); 
        cpVar.innerText = `Copilot ${copilot.value} is ready for launch.`
        event.preventDefault();
    }//copilot

    
    if (cargoVer === "Not a number") {
        alert("Make sure to enter valid information for each field!");
        console.log(typeof cargoVer.value);
        event.preventDefault();
    } else if (cargoLevel.value > 10000) {
        cVar = document.getElementById('cargoStatus');
        cVar.innerText = `there is too much mass for the shuttle to take off.`
        list.style.visibility = "visible"; 
        hVar1 = document.getElementById("launchStatus");
        hVar1.style.color = "red";
        hVar1.innerText = "Shuttle not ready for launch";
        event.preventDefault();
    }//cargo

    if (fuelVer === "Not a number") {
        alert("Make sure to enter valid information for each field!");
        console.log(typeof fuelVer.value);
        event.preventDefault();
    } else if (fuelLevel.value < 10000) {
        fVar = document.getElementById('fuelStatus');
        fVar.innerText = `there is not enough fuel for the journey.`
        list.style.visibility = "visible";
        hVar1 = document.getElementById("launchStatus");
        hVar1.style.color = "red";
        hVar1.innerText = "Shuttle not ready for launch"; 
        event.preventDefault();
    }//fuel


    if(pilotNameVer === "Empty" || copilotNameVer === "Empty" || fuelVer === "Empty" || cargoVer === "Empty") {
        alert("All fields are required!");
        event.preventDefault();
    }


    if (pilot.value.length > 1 && copilot.value.length > 1 && fuelLevel.value > 10000 && cargoLevel.value < 10000) { 
       
        hVar1 = document.getElementById("launchStatus");
        hVar1.style.color = "green";
        hVar1.innerText = "Shuttle ready for launch"; 
    }
}

async function myFetch() {
    const response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    let planetsReturned = await response.json();
    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*6);
    let randomPlanet = planets[index];
    console.log(randomPlanet);
    return randomPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
