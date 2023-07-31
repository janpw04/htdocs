const login_button = document.getElementById("login_button");
const login_error_message = document.getElementById("error_message");
const u = null;

function loginButtonClicked(){
    const log_username = document.getElementById("inputUsername").value;
    const log_password = document.getElementById("inputPassword").value;

    console.log(log_username + log_password);

    if(log_username === "user" && log_password === "pw") {
        alert("You have successfully logged in!");
        console.log("You have successfully logged in!")
        location.reload(); //Can be changed to whatever should happen if data correct
    } else {
        console.log("Wrong username or password");
        login_error_message.style.opacity = 1;
    }
}

function registerButtonClicked(){
    var reg_username = document.getElementById("inputUsername").value;
    var reg_password = document.getElementById("inputPassword").value;

    u = new user(reg_username);

    console.log(reg_username + reg_password);

    if(reg_username === "user" && reg_password === "pw") {
        alert("You have successfully logged in!");
        console.log("You have successfully logged in!")
        location.reload(); //Can be changed to whatever should happen if data correct
    } else {
        console.log("Wrong username or password");
        login_error_message.style.opacity = 1;
    }
}