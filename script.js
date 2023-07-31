const login_button = document.getElementById("login_button");
const login_error_message = document.getElementById("error_message");
var user;

function loginButtonClicked(){
    const log_username = document.getElementById("inputUsername").value;
    const log_password = document.getElementById("inputPassword").value;

    console.log(log_username + log_password);
    
    if(log_username === user.cUsername && log_password === user.cPassword || log_username === 'user' && log_password === 'pw') {
        alert("You have successfully logged in!");
        console.log("You have successfully logged in!")
        location.reload(); //Can be changed to whatever should happen if data correct
    } else {
        console.log("Wrong username or password");
        login_error_message.style.opacity = 1;
    }
}

function registerButtonClicked(){
    const reg_username = document.getElementById("inputUsername").value;
    const reg_password = document.getElementById("inputPassword").value;

    const u = new User(reg_username, reg_password);

    console.log(u.getUsername);
    console.log(u.getPassword);

    user = u;

    console.log(user)
}

class User{     
    constructor(reg_username, reg_password) {
        this.cUsername = reg_username;
        this.cPassword = reg_password;
        localStorage.setItem(reg_username, reg_password);
    }

    get getUsername() {
        return this.cUsername;
    }
    get getPassword() {
        return this.cPassword;
    }

    setUsernameAndPassword(reg_username, reg_password) {
        this.cUsername = reg_username;
        this.cPassword = reg_password;
    }
}