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
      checkFuelLevel(fuelLevel, cargoWeight, e);
   }
}

function checkFuelLevel(fuelLevel, cargoWeight, e) {
   if (fuelLevel * 3.785412 < 10000) {
      document.getElementById("faultyItems").style.visibility = "inherit";
      document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey."
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
      document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off."
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red";
      e.preventDefault();
   } else {
      readyForLaunch(e);
   }
}

function readyForLaunch(e) {
   document.getElementById("faultyItems").style.visibility = "inherit";
   launchStatus.innerHTML = "Shuttle is ready for launch";
   launchStatus.style.color = "green";
   e.preventDefault();
}

window.addEventListener("load", function () {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (json) {
         const div = document.getElementById("missionTarget");
         // Add HTML that includes the JSON data
         div.innerHTML = `
         <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[1].name}</li>
               <li>Diameter: ${json[1].diameter}</li>
               <li>Star: ${json[1].star}</li>
               <li>Distance from Earth: ${json[1].distance}</li>
               <li>Number of Moons: ${json[1].moons}</li>
            </ol>
            <img src="${json[1].image}">
         `;
      });
   });
   let form = document.querySelector("form");
   form.addEventListener("submit", function (e) {
      isValidInput(e);
   });
});
