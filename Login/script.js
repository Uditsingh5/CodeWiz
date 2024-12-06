const CLIENT_ID = "498297296740-ju3qffirl55sdhf20jn2pces8qsa4so6.apps.googleusercontent.com";
const REDIRECT_URI = "http://localhost:5500/welcome.html";
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

    // For simplicity, let's assume you have a valid set of credentials:
    if (username && password) {
        localStorage.setItem("userName", username);
        window.location.href = "welcome.html";
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
            localStorage.setItem("userName", data.name);
            window.location.href = "welcome.html";
        })
        .catch((error) => console.error("Error fetching user info:", error));
}


function checkLoginStatus() {
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = hashParams.get("access_token");

    if (accessToken) {
        getUserInfo(accessToken);
    } else {
        const username = localStorage.getItem("userName");
        if (username) {
            document.getElementById("user-info").innerText = `Hello, ${username}!`;
            gsap.from(".container", { duration: 1, y: 50, opacity: 0, ease: "power3.out" });
        } else {
            document.getElementById("user-info").innerText = "Hello, Guest!";
            gsap.from(".container", { duration: 1, y: 50, opacity: 0, ease: "power3.out" });
        }
    }
}

function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}


window.onload = function () {
    checkLoginStatus();
    gsap.to(".container", { duration: 1, opacity: 1, y: 0, ease: "power3.out" });
};
