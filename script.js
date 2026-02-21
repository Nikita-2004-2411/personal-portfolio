// Mobile Menu
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.onclick = () => {
  nav.classList.toggle("active");
};

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e){

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let error = document.getElementById("error");

  if(name === "" || email === "" || message === ""){
    e.preventDefault();
    error.textContent = "Please fill all fields";
    return;
  }

  if(!email.includes("@")){
    e.preventDefault();
    error.textContent = "Enter valid email";
    return;
  }

  error.style.color = "green";
  error.textContent = "Message sent successfully!";
});
