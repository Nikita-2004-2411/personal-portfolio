/* Contact Validation */
document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();

    let valid=true;

    const name=document.getElementById("name");
    const email=document.getElementById("email");
    const message=document.getElementById("message");

    nameError.textContent="";
    emailError.textContent="";
    messageError.textContent="";
    successMsg.textContent="";

    if(name.value===""){nameError.textContent="Enter name"; valid=false;}
    if(email.value===""){emailError.textContent="Enter email"; valid=false;}
    if(message.value===""){messageError.textContent="Enter message"; valid=false;}

    if(valid){
        successMsg.textContent="Message Sent!";
        this.reset();
    }
});

/* Scroll Animation */
const cards=document.querySelectorAll(".project-card");

const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

cards.forEach(card=>observer.observe(card));

/* Scroll Top Button */
const topBtn=document.getElementById("topBtn");

window.onscroll=()=>{
    if(document.documentElement.scrollTop>200)
        topBtn.style.display="block";
    else
        topBtn.style.display="none";
};

topBtn.onclick=()=>window.scrollTo({top:0,behavior:"smooth"});

/* Active Navbar */
const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{
    let current="";
    sections.forEach(sec=>{
        if(pageYOffset>=sec.offsetTop-150)
            current=sec.id;
    });

    navLinks.forEach(link=>{
        link.classList.remove("active");
        if(link.getAttribute("href")==="#"+current)
            link.classList.add("active");
    });
});
