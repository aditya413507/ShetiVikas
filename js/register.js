<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Register | AgroMarket</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="css/style.css" />
</head>

<body class="bg-light">
  <nav class="navbar navbar-dark bg-success">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold" href="#">AgroMarket</a>
    </div>
  </nav>

  <section class="container d-flex flex-column justify-content-center align-items-center min-vh-100">
    <div class="card p-4 shadow border-0" style="max-width: 500px; width: 100%;">
      <h5 class="fw-bold text-center mb-4">Register New User</h5>

      <form id="registerForm">
        <!-- Mobile -->
        <div class="mb-3">
          <label class="form-label">Mobile Number</label>
          <input type="tel" class="form-control" id="mobile" placeholder="Enter 10-digit mobile number" required pattern="[0-9]{10}">
          <div class="invalid-feedback">Please enter a valid 10-digit mobile number</div>
        </div>

        <!-- Full Name -->
        <div class="mb-3">
          <label class="form-label">Full Name</label>
          <input type="text" class="form-control" id="fullname" placeholder="Enter your full name" required>
        </div>

        <!-- State -->
        <div class="mb-3">
          <label class="form-label">State</label>
          <select class="form-select" id="state" required>
            <option value="">Select State</option>
          </select>
        </div>

        <!-- District -->
        <div class="mb-3">
          <label class="form-label">District</label>
          <select class="form-select" id="district" required>
            <option value="">Select District</option>
          </select>
        </div>

        <!-- Taluka -->
        <div class="mb-3">
          <label class="form-label">Taluka</label>
          <select class="form-select" id="taluka" required>
            <option value="">Select Taluka</option>
          </select>
        </div>

        <!-- Village -->
        <div class="mb-3">
          <label class="form-label">Village</label>
          <input type="text" class="form-control" id="village" placeholder="Enter your village" required>
        </div>

        <!-- Terms -->
        <div class="form-check mb-3">
          <input class="form-check-input" type="checkbox" id="terms" required>
          <label class="form-check-label" for="terms">
            I agree to the <a href="#" class="text-success">Terms & Conditions</a>
          </label>
        </div>

        <button type="submit" class="btn btn-success w-100">Register</button>

        <div class="text-center mt-3">
          <a href="login.html" class="text-success text-decoration-none">Already have an account? Login</a>
        </div>
      </form>
    </div>// register.js

// Select DOM elements
const stateSelect = document.getElementById('state');
const districtSelect = document.getElementById('district');
const talukaSelect = document.getElementById('taluka');

let locationData = {}; // To store the JSON after fetching

// Fetch JSON data from data/Location.json
fetch('data/Location.json')
  .then(response => response.json())
  .then(data => {
    locationData = data;
    populateStates();
  })
  .catch(error => console.error("Error loading location data:", error));

// Populate state dropdown
function populateStates() {
  Object.keys(locationData).forEach(state => {
    const option = document.createElement('option');
    option.value = state;
    option.textContent = state;
    stateSelect.appendChild(option);
  });
}

// Populate district dropdown based on selected state
function populateDistricts() {
  districtSelect.innerHTML = '<option value="">Select District</option>';
  talukaSelect.innerHTML = '<option value="">Select Taluka</option>';

  const selectedState = stateSelect.value;
  if (!selectedState) return;

  const districts = Object.keys(locationData[selectedState]);
  districts.forEach(district => {
    const option = document.createElement('option');
    option.value = district;
    option.textContent = district;
    districtSelect.appendChild(option);
  });
}

// Populate taluka dropdown based on selected district
function populateTalukas() {
  talukaSelect.innerHTML = '<option value="">Select Taluka</option>';

  const selectedState = stateSelect.value;
  const selectedDistrict = districtSelect.value;
  if (!selectedState || !selectedDistrict) return;

  const talukas = locationData[selectedState][selectedDistrict];
  talukas.forEach(taluka => {
    const option = document.createElement('option');
    option.value = taluka;
    option.textContent = taluka;
    talukaSelect.appendChild(option);
  });
}

// Event listeners
stateSelect.addEventListener('change', populateDistricts);
districtSelect.addEventListener('change', populateTalukas);

// Handle form submission
document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = {
    mobile: document.getElementById('mobile').value,
    fullname: document.getElementById('fullname').value,
    state: stateSelect.value,
    district: districtSelect.value,
    taluka: talukaSelect.value,
    village: document.getElementById('village').value,
    terms: document.getElementById('terms').checked
  };

  if (!formData.terms) {
    alert("You must accept the terms and conditions.");
    return;
  }

  console.log("Form Submitted:", formData);
  alert("Registration successful!");
  this.reset();
  districtSelect.innerHTML = '<option value="">Select District</option>';
  talukaSelect.innerHTML = '<option value="">Select Taluka</option>';
});

  </section>

  <footer class="bg-success text-white text-center py-3">
    <p class="mb-0">© 2025 AgroMarket. All Rights Reserved.</p>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="js/register.js"></script>
</body>
</html>
