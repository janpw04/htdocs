const login_button = document.getElementById("login_button");
const login_error_message = document.getElementById("error_message");

function loginButtonClicked(){
    const username = document.getElementById("inputUsername").value;
    const password = document.getElementById("inputPassword").value;

    console.log(username + password);

    if(username === "user" && password === "pw") {
        alert("You have successfully logged in!");
        console.log("You have successfully logged in!")
        location.reload(); //Can be changed to whatever should happen if data correct
    } else {
        login_error_message.style.opacity = 1;
        console.log("Wrong username or password");
    }
}