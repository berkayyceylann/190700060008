// Replace 'YOUR_MOCKY_URL' with the URL provided by Mocky.io
const mockyUrl = "https://run.mocky.io/v3/b74ac23e-829d-4e2e-a93f-0024efdd1fd9";

// Function to fetch data from Mocky.io and fill the form options
function fillFormOptions() {
  // Perform the GET request to the Mocky.io URL
  fetch(mockyUrl)
    .then((response) => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Parse the JSON response
      return response.json();
    })
    .then((data) => {
      // Access the cities and course types from the response data
      const cities = data.cities;
      const courseTypes = data.course_types;

      // Get your form select elements by their IDs or class names
      const citiesSelect = document.getElementById("validationCustom01");
      const coursesSelect = document.getElementById("coursesSelect");

      // Fill the cities select element with options
      cities.forEach((city) => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        citiesSelect.appendChild(option);
      });

      // Fill the courses select element with options
      courseTypes.forEach((courseType) => {
        const option = document.createElement("option");
        option.value = courseType;
        option.textContent = courseType;
        coursesSelect.appendChild(option);
      });
    })
    .catch((error) => {
      // Handle any errors that occurred during the fetch
      console.error("There was a problem with the fetch operation:", error);
    });
}

// Call the function to fill the form when the page loads or when it's appropriate
fillFormOptions();
