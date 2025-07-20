const scriptURL = "https://script.google.com/macros/s/AKfycbwLJlcBiXnF0G5IPwcbxMmZN5GBnHCEAtqf1oLIuL35Y2J4SE9cwcslhTvPlydpGZkF/exec";
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");
const popup = document.getElementById("popup");
const closePopupBtn = document.getElementById("closePopupBtn");

form.addEventListener("submit", e => {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(scriptURL, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      popup.classList.remove("hidden"); // ✅ Show the popup
      successMessage.textContent = "";
      form.reset();
    } else {
      successMessage.textContent = "Something went wrong. Try again!";
    }
  })
  .catch(error => {
    successMessage.textContent = "Error sending message.";
    console.error('Error!', error.message);
  });
});

// ✅ Close the popup when button is clicked
closePopupBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});
