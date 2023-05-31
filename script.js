document.addEventListener('DOMContentLoaded', function() {
    // Get active location from the server
    var activeLocationElement = document.getElementById('active-location');
    var batteryPercentageElement = document.getElementById('battery-percentage');
    var startButton = document.getElementById('start-button');
    var stopButton = document.getElementById('stop-button');
    var xmlFileInput = document.getElementById('xml-file');
  
    // Example data
    var activeLocation = {
      latitude: 51.505,
      longitude: -0.09
    };
  
    function updateActiveLocation() {
      activeLocationElement.textContent = 'Active Location: ' + activeLocation.latitude.toFixed(5) + ', ' + activeLocation.longitude.toFixed(5);
    }
  
    function updateBatteryPercentage() {
      // Make an API request to get the current battery percentage
      // Replace the API request with your actual logic
      var batteryPercentage = 75;
      batteryPercentageElement.textContent = batteryPercentage + '%';
    }
  
    function startRobot() {
      // Make an API request to start the robot
      // Replace the API request with your actual logic
      console.log('Robot started');
    }
  
    function stopRobot() {
      // Make an API request to stop the robot
      // Replace the API request with your actual logic
      console.log('Robot stopped');
    }
  
    function handleFileSelect(e) {
      var file = e.target.files[0];
      // Handle the selected file
      // Replace with your actual logic
      console.log(file);
    }
  
    // Update the active location and battery percentage initially
    updateActiveLocation();
    updateBatteryPercentage();
  
    // Add event listeners to buttons
    startButton.addEventListener('click', startRobot);
    stopButton.addEventListener('click', stopRobot);
    xmlFileInput.addEventListener('change', handleFileSelect);
  });
  