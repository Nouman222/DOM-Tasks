let form = document.getElementById("admissionForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let formData = new FormData(form);
  
  // Convert FormData to a plain object
  let data = Object.fromEntries(formData.entries());

  // Save to localStorage
  let convertToString = JSON.stringify(data);
  localStorage.setItem("user_detail", convertToString);

  // Retrieve from localStorage
  let getData = JSON.parse(localStorage.getItem("user_detail"));

  // Create element and display data
  let showdata = document.createElement("h2");
  
  // CORRECTED: Use assignment (=) instead of brackets ()
  // Also: Stringify the object again so it's readable in the H2
  showdata.innerText = JSON.stringify(getData, null, 2); 
  
  document.body.appendChild(showdata);
});




