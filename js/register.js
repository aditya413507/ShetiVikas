// register.js

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
