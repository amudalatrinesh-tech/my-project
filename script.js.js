const btn = document.querySelector("button");
const formInfoBox = document.getElementById("form-info");
const msg = document.getElementById("form-msg");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    //getting all input values
    const userName = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");

    //getting inputs thenselves
    const userNameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    
    function showError(input, message) {
        input.style.outlineColor = "red";
        input.focus();
        formInfoBox.style.backgroundColor = "red";
        msg.textContent = message;
        msg.style.color = "black";
        msg.style.backgroundColor = "red";
    }

    function showSuccess() {
        formInfoBox.style.backgroundColor = "white";
        msg.textContent = "Enter all fields";
        msg.style.color = "black";
        msg.style.backgroundColor = "white";
        console.log(Object.fromEntries(formData.entries()));
        
        form.reset();
    }

    if (userName === "") {
        showError(userNameInput, "Enter Username");
        return;
    }

    if (!email === "" || !email.includes("@")) {
        showError(emailInput, "Enter valid email");
        return;
    }

    if (password === "" || confirmPassword === "") {
        showError(passwordInput, "Password cannot be empty!");
        return;
    }

    if (password !== confirmPassword) {
        showError(confirmPasswordInput, "Passwords dont match");
        return;
    }

    showSuccess();
});
