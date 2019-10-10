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
         alert("Enter correct field values");
         e.preventDefault();
      } else
         console.log(pilotField, copilotField, fuelField, cargoField);
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
