document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (!loginForm) return;

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const mobile = document.getElementById("mobile").value.trim();
    const otp = document.getElementById("otp").value.trim();

    // ✅ Validate mobile
    if (!/^\d{10}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // ✅ Validate OTP (can be anything non-empty for now)
    if (otp === "") {
      alert("Please enter the OTP.");
      return;
    }

    // ✅ Simulate success and redirect
    alert("Login successful!");
    window.location.href = "home.html";
  });
});
