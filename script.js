const login_form = document.getElementById("login_form");
const login_button = document.getElementById("login_button");
const login_error_message = document.getElementById("error_message");


login_button.addEventListener("click", (e) => {
    e.preventDefault();
    const username = login_form.username.value;
    const password = login_form.input_password.value;

    if(username === "user" && password === "pw") {
        alert("You have successfully logged in.");
        location.reload(); //Can be changed to whatever should happen if data correct
    } else {
        login_error_message.style.opacity = 1;
    }
})
