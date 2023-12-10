const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    const signUpButton = document.getElementById("register");
    const signInButton = document.getElementById("login");

    // Toggle between sign-up and sign-in forms
    signUpButton.addEventListener("click", function () {
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", function () {
        container.classList.remove("right-panel-active");
    });

    // Add a listener for the sign-up form submission
    const signUpForm = document.querySelector(".sign-up form");
    signUpForm.addEventListener("submit", function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Redirect to the image.html page after clicking the sign-up button
        window.location.href = "image.html";
    });

    // Add a listener for the sign-in form submission
    const signInForm = document.querySelector(".sign-in form");
    signInForm.addEventListener("submit", function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Redirect to the image.html page after clicking the sign-in button
        window.location.href = "image.html";
    });
});
