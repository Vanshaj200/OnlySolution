document.getElementById('diagnosisForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const userData = {};
    formData.forEach(function(value, key){
      userData[key] = value;
    });
    saveUserData(userData);
  });
  
  function saveUserData(userData) {
    // Send the user data to the server (Node.js/Express) to save in the SQL database
    // You need to implement this functionality separately
    // Example: Use Fetch API to send a POST request to your backend API endpoint
    fetch('/api/save-user-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
      // Display the result to the user
      displayResult(data.result);
    })
    .catch(error => console.error('Error:', error));
  }
  
  function displayResult(result) {
    // Display the result to the user
    document.getElementById('result').innerHTML = `<h2>Diagnosis Result</h2><p>${result}</p>`;
  }
  