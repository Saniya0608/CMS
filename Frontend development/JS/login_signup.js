// Get modal elements
var signupModal = document.getElementById("signupModal");
var loginModal = document.getElementById("loginModal");

// Get button elements
var signupBtn = document.getElementById("signupBtn");
var loginBtn = document.getElementById("loginBtn");

// Get close elements
var closeSignup = document.getElementById("closeSignup");
var closeLogin = document.getElementById("closeLogin");

// Open signup modal
signupBtn.onclick = function() {
    signupModal.style.display = "block";
}

// Open login modal
loginBtn.onclick = function() {
    loginModal.style.display = "block";
}

// Close signup modal
closeSignup.onclick = function() {
    signupModal.style.display = "none";
}

// Close login modal
closeLogin.onclick = function() {
    loginModal.style.display = "none";
}

// Close modals if clicking outside of them
window.onclick = function(event) {
    if (event.target == signupModal) {
        signupModal.style.display = "none";
    }
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
}

// Handle sign-up form submission
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    // Here you would send the data to the server
    console.log("Sign-Up:", { username, email, password });

    alert("Sign-Up successful!");
    signupModal.style.display = "none";
});

// Handle login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // Here you would send the data to the server
    console.log("Login:", { username, password });

    alert("Login successful!");
    loginModal.style.display = "none";
});
