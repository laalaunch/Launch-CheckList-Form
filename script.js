// Write your JavaScript code here!
let e = "";

function isValidInput(e) {
   let pilotName = document.querySelector("input[name=pilotName]").value;
   let copilotName = document.querySelector("input[name=copilotName]").value;
   let fuelLevel = parseInt(document.querySelector("input[name=fuelLevel]").value);
   let cargoWeight = parseInt(document.querySelector("input[name=cargoWeight]").value);

   document.getElementById("pilotStatus").innerHTML = (`Pilot ${pilotName} Ready`);
   document.getElementById("copilotStatus").innerHTML = (`Co-Pilot ${copilotName} Ready`);

   if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoWeight === "") {
      alert("all fields are required");
      e.preventDefault();
   } else {
      isValidType(pilotName, copilotName, fuelLevel, cargoWeight, e);
   }
}

function isValidType(pilotName, copilotName, fuelLevel, cargoWeight, e) {
   if (typeof (pilotName) !== 'string' || typeof copilotName !== 'string' || isNaN(fuelLevel) === true || isNaN(cargoWeight) === true) {
      alert("Make sure to enter valid information for each field");
      e.preventDefault();
   } else {
      alert("Completed form field entries are valid");
      checkFuelLevel(fuelLevel, cargoWeight, e);
   }
}

function checkFuelLevel(fuelLevel, cargoWeight, e) {
   if (fuelLevel * 3.785412 < 10000) {
      document.getElementById("faultyItems").style.visibility = "inherit";
      document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey.";
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red";
      e.preventDefault();
   } else {
      checkCargoWeight(cargoWeight, e);
   }
}

function checkCargoWeight(cargoWeight, e) {
   if (cargoWeight * 0.45359237 > 10000) {
      document.getElementById("faultyItems").style.visibility = "inherit";
      document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off.";
      launchStatus.innerHTML = "Shuttle is not ready for launch";
      launchStatus.style.color = "red";
      e.preventDefault();
   } else {
      readyForLaunch(e);
   }
}

function readyForLaunch(e) {
   document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch.";
   document.getElementById("cargoStatus").innerHTML = "Cargo weight low enough for launch.";
   document.getElementById("faultyItems").style.visibility = "inherit";
   launchStatus.innerHTML = "Shuttle is ready for launch";
   launchStatus.style.color = "green";
   let pilot = document.querySelector("input[name=pilotName]").value;
   let copilot = document.querySelector("input[name=copilotName]").value;
   alert(`${pilot} and ${copilot} your mission has been confrimed. \n\nSafe travels on the journey!`);
   e.preventDefault();
}

window.addEventListener("load", function () {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (json) {
         let setRandom = json[Math.floor(Math.random() * json.length)];

         let div = document.getElementById("missionTarget");
         // Add HTML that includes the JSON data
         div.innerHTML = `
         <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${setRandom.name}</li>
               <li>Diameter: ${setRandom.diameter}</li>
               <li>Star: ${setRandom.star}</li>
               <li>Distance from Earth: ${setRandom.distance}</li>
               <li>Number of Moons: ${setRandom.moons}</li>
            </ol>
            <img src="${setRandom.image}">
         `;
      });
   });
   let form = document.querySelector("form");
   form.addEventListener("submit", function (e) {
      isValidInput(e);
   });
});
