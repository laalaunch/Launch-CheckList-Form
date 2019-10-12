// Write your JavaScript code here!

window.addEventListener("load", function () {
   let form = document.querySelector("form");
   form.addEventListener("submit", function (e) {
      let pilotField = document.querySelector("input[name=pilotName]").value;
      let copilotField = document.querySelector("input[name=copilotName]").value;
      let fuelField = parseInt(document.querySelector("input[name=fuelLevel").value);
      let cargoField = parseInt(document.querySelector("input[name=cargoWeight").value);

      if (pilotField === "" || copilotField === "" || fuelField === "" || cargoField === "") {
         alert("All fields are required");
         e.preventDefault();
      } else if (typeof (pilotField) !== 'string' || typeof (copilotField) !== 'string' || isNaN(fuelField) === true || isNaN(cargoField) === true) {
         alert("Make sure to enter valid information for each field");
         e.preventDefault();
      } else {

         console.log("Set Shuttle is running here");

         document.getElementById("pilotStatus").innerHTML = (`Pilot ${pilotField} Ready`);
         document.getElementById("copilotStatus").innerHTML = (`Co-Pilot ${copilotField} Ready`);

         let fuelLevel = fuelField * 3.785412;
         let cargoWeight = cargoField * 0.45359237;
         console.log(fuelLevel, cargoWeight);

         if (fuelLevel < 10000) {
            document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey."
            document.getElementById("faultyItems").style.visibility = "inherit";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";

            e.preventDefault();
         }
         if (cargoWeight > 10000) {
            document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off."
            document.getElementById("faultyItems").style.visibility = "inherit";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";

            e.preventDefault();
         }

         launchStatus.style.color = "green";
         document.getElementById("faultyItems").style.visibility = "inherit";
         e.preventDefault();

      }
   })
})


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
