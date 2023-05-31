document.getElementById("appointmentForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the form values
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;

  // Create a new div to display the appointment details
  var appointmentDetails = document.createElement("div");
  appointmentDetails.className = "appointment-details";

  // Create HTML content for the appointment details
  appointmentDetails.innerHTML = `
    <h2>Appointment Details</h2>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Time:</strong> ${time}</p>
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Gender:</strong> ${gender}</p>
  `;

  // Append the appointment details to the document body
  document.body.appendChild(appointmentDetails);

  // Reset the form
  document.getElementById("appointmentForm").reset();

  const appointmentData = {
    date: date,
    time: time,
    firstName: firstName,
    lastName: lastName,
    age: age,
    gender: gender
  };

  // Store the data in local storage
  localStorage.setItem('appointmentData', JSON.stringify(appointmentData));
});

// Retrieve the data from local storage
var storedData = localStorage.getItem('appointmentData');

// Check if the data exists in local storage
if (storedData) {
  // Parse the JSON string back into an object
  var appointmentData = JSON.parse(storedData);

  // Access the properties of the appointmentData object
  var date = appointmentData.date;
  var time = appointmentData.time;
  var firstName = appointmentData.firstName;
  var lastName = appointmentData.lastName;
  var age = appointmentData.age;
  var gender = appointmentData.gender;

  // Use the retrieved data as needed
  console.log(date, time, firstName, lastName, age, gender);
}
