// Write your JavaScript code here!
window.addEventListener("load", function () {
   let form = document.querySelector("form");
   form.addEventListener("submit", function (e) {
      let pilotField = document.querySelector("input[name=pilotName]").value;
      let copilotField = document.querySelector("input[name=copilotName]").value;
      if (pilotField === "" || copilotField === "") {
         alert("All fields are required");
      } else {
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
