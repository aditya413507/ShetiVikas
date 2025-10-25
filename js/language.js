// Highlight active language
document.querySelectorAll('input[name="language"]').forEach(radio => {
  radio.addEventListener('change', () => {
    document.querySelectorAll('.lang-option').forEach(el => el.classList.remove('active-lang'));
    radio.closest('.lang-option').classList.add('active-lang');
  });
});

// Continue button → go to login page
document.getElementById('continue-btn').addEventListener('click', () => {
  window.location.href = 'login.html';
});
