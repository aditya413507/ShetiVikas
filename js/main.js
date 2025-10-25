// main.js — AgroMarket main page functionality

document.addEventListener("DOMContentLoaded", function () {
  // ====== Auto Scroll for Market Rates ======
  const rateWrapper = document.querySelector(".scrolling-wrapper");
  if (rateWrapper) {
    let scrollSpeed = 1;
    let scrollInterval;

    function startScrolling() {
      scrollInterval = setInterval(() => {
        rateWrapper.scrollLeft += scrollSpeed;
        if (
          rateWrapper.scrollLeft + rateWrapper.clientWidth >=
          rateWrapper.scrollWidth
        ) {
          rateWrapper.scrollLeft = 0;
        }
      }, 30);
    }

    function stopScrolling() {
      clearInterval(scrollInterval);
    }

    rateWrapper.addEventListener("mouseenter", stopScrolling);
    rateWrapper.addEventListener("mouseleave", startScrolling);
    startScrolling();
  }

  // ====== Category Click Events ======
  const categories = document.querySelectorAll(".category-item");
  categories.forEach((item) => {
    item.addEventListener("click", () => {
      const category = item.querySelector("p").textContent.trim();
      alert(`You selected: ${category}`);
    });
  });

  // ====== Apply Loan Button Click ======
  const loanButton = document.querySelector(".btn-success");
  if (loanButton) {
    loanButton.addEventListener("click", () => {
      window.location.href = "login.html"; // redirect to OTP login page
    });
  }

  console.log("AgroMarket Home initialized successfully.");
});
