document.getElementById("signupForm").addEventListener("submit", function(e){

    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const messageBox = document.getElementById("messageBox");

    let errors = [];

    if(username.length < 3 || username.length > 20){
    errors.push("Username must be between 3 and 20 characters.");
    }

    if(!isNaN(username[0])){  // if first character is a number, error
        errors.push("Username must start with a letter.");
    }

    for(let i = 0; i < username.length; i++){

        let ch = username[i];

        if(!(ch >= 'a' && ch <= 'z') &&
            !(ch >= 'A' && ch <= 'Z') &&
            !(ch >= '0' && ch <= '9') &&
            ch !== '_' &&
            ch !== '-'){

            errors.push("Username contains invalid characters.");
            break;
        }
    }

    if(password.length < 8){
    errors.push("Password must be at least 8 characters.");
    }

    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSpecial = false;

    for(let i = 0; i < password.length; i++){

        let ch = password[i];

        if(ch >= 'A' && ch <= 'Z') hasUpper = true;
        else if(ch >= 'a' && ch <= 'z') hasLower = true;
        else if(ch >= '0' && ch <= '9') hasNumber = true;
        else if(ch === ' ') errors.push("Password cannot contain spaces.");
        else hasSpecial = true;
    }

    if(!hasUpper) errors.push("Password must contain an uppercase letter.");
    if(!hasLower) errors.push("Password must contain a lowercase letter.");
    if(!hasNumber) errors.push("Password must contain a number.");
    if(!hasSpecial) errors.push("Password must contain a special character.");

    if(password !== confirmPassword){
        errors.push("Passwords do not match.");
    }

    if(email.includes(" ") || !email.includes("@") || !email.includes(".")){
        errors.push("Email must be a valid format.");
    }

    if(errors.length > 0){
        messageBox.innerHTML = errors.join("<br>"); // combines error array into a string, seperating elements by an html line break
        messageBox.style.display = "flex";

    }
    else{
        messageBox.innerText = "Signup successful! Redirecting...";
        messageBox.style.display = "flex";
        messageBox.style.backgroundColor = "lightgreen";
        messageBox.style.color = "black";

        setTimeout(function(){
            window.location.href = "login.html";
        },2000);
    }

});