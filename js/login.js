document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const mobile = document.getElementById("mobile").value;
  const otp = document.getElementById("otp").value;

  if (!/^\d{10}$/.test(mobile)) {
    alert("Enter a valid 10-digit mobile number");
    return;
  }

  if (otp.trim() === "") {
    alert("Enter OTP");
    return;
  }

  // Redirect to home.html after successful login
  window.location.href = "home.html";
});
