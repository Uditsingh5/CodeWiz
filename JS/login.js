const CLIENT_ID = "498297296740-ju3qffirl55sdhf20jn2pces8qsa4so6.apps.googleusercontent.com";
const REDIRECT_URI = "http://localhost:5500/home.html";
const SCOPE = "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email";

// Google login function
function loginWithGoogle() {
    const authURL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&include_granted_scopes=true`;
    window.location.href = authURL;
}

// Login with credentials
function loginWithCredentials() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        localStorage.setItem("userName", username);
        window.location.href = "home.html";
    } else {
        alert("Please enter a valid username and password.");
    }
}

// Get user info after successful login
function getUserInfo(accessToken) {
    fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("User Data:", data);
            // Save the user data and profile picture URL to localStorage
            localStorage.setItem("userName", data.name);
            localStorage.setItem("userPic", data.picture); // Save the profile picture URL
            window.location.href = "home.html"; // Redirect to home page after successful login
        })
        .catch((error) => console.error("Error fetching user info:", error));
}

// Check login status
function checkLoginStatus() {
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = hashParams.get("access_token");

    if (accessToken) {
        getUserInfo(accessToken); // If access token exists, fetch user info
    } else {
        const username = localStorage.getItem("userName");
        const userPic = localStorage.getItem("userPic");
        if (username && userPic) {
            document.getElementById("user-info").innerHTML = `Hello, ${username}!`;
            // Set the profile picture from localStorage
            const profilePicElement = document.getElementById("profile-pic");
            if (profilePicElement && userPic) {
                profilePicElement.src = userPic; // Set the profile picture
                profilePicElement.alt = `${username}'s Profile Picture`; // Set alt text
            }
            gsap.from(".container", { duration: 1, y: 50, opacity: 0, ease: "power3.out" });
        } else {
            document.getElementById("user-info").innerText = "Hello, Guest!";
            gsap.from(".container", { duration: 1, y: 50, opacity: 0, ease: "power3.out" });
        }
    }
}

// Logout function
function logout() {
    localStorage.clear(); // Clear localStorage
    window.location.href = "login.html"; // Redirect to login page
}

// On page load
window.onload = function () {
    checkLoginStatus(); // Check login status when page loads
    gsap.to(".container", { duration: 1, opacity: 1, y: 0, ease: "power3.out" });
};
