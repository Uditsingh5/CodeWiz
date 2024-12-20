var toggle = document.getElementById("toggle");
var toggleBtn = document.getElementById("checkbox");
var circle = document.querySelector(".circle");
const root = document.documentElement;

function applyTheme(theme) {
    if (theme === "dark") {
        root.style.setProperty("--light-txtcolor", "#fafafa");
        root.style.setProperty("--light-pribg", "#1b1b1b");
        root.style.setProperty("--light-secbg", "#232323");
        root.style.setProperty("--light-bottxtbg", "#2a2a2a");
        root.style.setProperty("--light-usertxtbg", "#3a3a3a");
        root.style.setProperty("--light-greycardbg", "#2e2e2e");
        root.style.setProperty("--light-grayborder", "#3c3c3c");
        root.style.setProperty("--light-darktoneshadow", "#666666");
        root.style.setProperty("--light-mainhead", "#eaeaea");
        root.style.setProperty("--light-sectxt", "#b0b0b0");
        root.style.setProperty("--light-terttxt", "#8c8c8c");
        root.style.setProperty("--light-placeholder", "#d2d2d2");
        root.style.setProperty("--light-cta", "#ffffff");
        root.style.setProperty("--top-right", "#2b2b2b");
        localStorage.setItem("theme", "dark");
    } else {
        root.style.setProperty("--light-txtcolor", "#2a2a2a");
        root.style.setProperty("--light-pribg", "#fafafa");
        root.style.setProperty("--light-secbg", "#f2f2f2");
        root.style.setProperty("--light-bottxtbg", "#d9d9d9");
        root.style.setProperty("--light-usertxtbg", "#c4c4c4");
        root.style.setProperty("--light-greycardbg", "#e5e5e5");
        root.style.setProperty("--light-grayborder", "#cccccc");
        root.style.setProperty("--light-darktoneshadow", "#b3b3b3");
        root.style.setProperty("--light-mainhead", "#333333");
        root.style.setProperty("--light-sectxt", "#4f4f4f");
        root.style.setProperty("--light-terttxt", "#666666");
        root.style.setProperty("--light-placeholder", "#696969");
        root.style.setProperty("--light-cta", "#1a1a1a");
        root.style.setProperty("--top-right", "#eaeaea");
        localStorage.setItem("theme", "light");
    }
}

toggle.addEventListener("click", function () {
    if (toggleBtn.checked) {
        circle.style.left = "40px";
        toggle.style.backgroundColor = "#2b2b2b";
        circle.style.backgroundColor = "#02060C";
        circle.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/>
            </svg>
        `;
        applyTheme("dark");
    } else {
        circle.style.left = "0px";
        circle.style.boxShadow = "inset 0 4px 8px rgba(0,0,0,0.2)";
        toggle.style.backgroundColor = "#e3e3e3";
        circle.style.backgroundColor = "#1c1b1b";
        circle.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                <path d="M440-760v-160h80v160h-80Zm266 110-55-55 112-115 56 57-113 113Zm54 210v-80h160v80H760ZM440-40v-160h80v160h-80ZM254-652 140-763l57-56 113 113-56 54Zm508 512L651-255l54-54 114 110-57 59ZM40-440v-80h160v80H40Zm157 300-56-57 112-112 29 27 29 28-114 114Zm283-100q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z"/>
            </svg>
        `;
        applyTheme("light");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);
    toggleBtn.checked = savedTheme === "dark";
    if (savedTheme === 'dark') {
        circle.style.left = "40px";
        toggle.style.backgroundColor = "#2b2b2b";
        circle.style.backgroundColor = "#02060C";
        circle.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/>
            </svg>
        `;
    }
});



// toggler of chat area


