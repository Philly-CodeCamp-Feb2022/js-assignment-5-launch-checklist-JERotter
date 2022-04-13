// Write your JavaScript code here!

window.addEventListener("load", () => {
    // let formVar = document.querySelector("form");
    let listVar = document.querySelector("ol");
    let pilotVar = document.querySelector("input[name=pilotName]");
    let copilotVar = document.querySelector("input[name=copilotName]");
    let fuelVar = document.querySelector("input[name=fuelLevel]");
    let cargoVar = document.querySelector("input[name=cargoMass]");
    let formVar = document.getElementById("launchForm");
    
    // setTimeout ( () => { 
    //     formVar.addEventListener("submit", event => 
    //     formSubmission(event, document, listVar, pilotVar, copilotVar, fuelVar, cargoVar), 5000)
    // })

    formVar.addEventListener("submit", (event) => formSubmission(event, document, listVar, pilotVar, copilotVar, fuelVar, cargoVar));
    //  document.querySelector("form").submit();  // or maybe in scriptHelper?
     //also maybe reset()??
    //  setTimeout(document.querySelector("form").submit(), 5000);

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanetsResponse);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planetVar = pickPlanet(listedPlanets);
       console.log(planetVar);
       //addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
       addDestinationInfo(document, planetVar.name, planetVar.diameter, planetVar.star, planetVar.distance, planetVar.moons, planetVar.image)
     }) 
   
});//window load event

  