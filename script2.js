const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {
        navLinks.classList.remove("active");

    });
});


const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();

    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        alert("Please fill all fields.");
        return;
    }


    alert(
        "Thank you " +
        name +
        "! Your message has been submitted."
    );

    contactForm.reset();

});


const year =
    new Date().getFullYear();

const copyright =
    document.querySelector(".copyright");

copyright.innerHTML =
    "© " +
    year +
    " Mahek. All Rights Reserved.";