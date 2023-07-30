const loginForm = document.getElementById("main_container");
const loginButton = document.getElementById("");

// Function to check if the device is a mobile phone
function isMobile() {
    return window.innerWidth <= 768; // Adjust the width as needed
}

// Function to add a class to the <body> tag based on device type
function addDeviceClass() {
    if (isMobile()) {
        document.body.classList.add('mobile');
    } else {
        document.body.classList.add('desktop');
    }
}

// Call the function on page load
addDeviceClass();
