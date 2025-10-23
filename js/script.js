// Toggle password visibility
document.getElementById("togglePassword").addEventListener("click", function () {
  const passwordField = document.getElementById("password");
  const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
  this.textContent = type === "password" ? "Show" : "Hide";
});

// Mobile number validation
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const mobile = document.getElementById("mobileNumber");
  const regex = /^[0-9]{10}$/;

  if (!regex.test(mobile.value)) {
    mobile.classList.add("is-invalid");
  } else {
    mobile.classList.remove("is-invalid");
    alert("Login successful (demo) ✅");
    const modal = bootstrap.Modal.getInstance(document.getElementById("loginModal"));
    modal.hide();
  }
});

// Auto open login popup after 12 seconds
window.addEventListener("load", () => {
  setTimeout(() => {
    const loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
    loginModal.show();
  }, 12000); // 12 seconds
});
