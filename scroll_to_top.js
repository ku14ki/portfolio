// Initialize EmailJS with your User ID
(function(){
  emailjs.init("tRsD34z8a_wwvATY-"); // <-- Replace with your actual EmailJS user ID
})();


// Send form data
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_q84t1rr", "template_40n7k48", this)
    .then(function(response) {
      alert("Message sent successfully!");
      document.getElementById("contact-form").reset();
    }, function(error) {
      alert("Failed to send message. Error: " + JSON.stringify(error));
    });
});

// Show button when scrolled down
window.onscroll = function () {
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (window.scrollY > 200) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
};

// Scroll to top smoothly when the button is clicked
document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollTopBtn");
  scrollBtn.style.display = "none"; // Hide initially

  scrollBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

