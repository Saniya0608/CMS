// Handle Profile Update Form Submission
document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    // Here you would typically send the data to the server
    // For this demo, we'll just log it to the console and show an alert
    console.log("Profile Updated:", { username, email });
    alert("Profile updated successfully!");
});

// Handle Password Change Form Submission
document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const currentPassword = document.getElementById("currentPassword").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validate the new password and confirm password
    if (newPassword !== confirmPassword) {
        alert("New password and confirm password do not match!");
        return;
    }

    // Here you would typically send the data to the server
    // For this demo, we'll just log it to the console and show an alert
    console.log("Password Changed:", { currentPassword, newPassword });
    alert("Password changed successfully!");
});
