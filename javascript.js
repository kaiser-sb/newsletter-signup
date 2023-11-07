const form = document.getElementById("subscription-form");
const dismiss = document.getElementById("dismiss");
const signUpPage = document.getElementById("sign-up-page");
const confirmation = document.getElementById("confirmation");
const targetEmail = document.getElementById("target-email");
const email = document.getElementById("email");
const error = document.getElementById('error');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;

    if(regex.test(email.value.trim())) {

        signUpPage.style.display = "none";
        confirmation.style.display = "block";
        targetEmail.innerHTML = email.value.trim();
    }
    else {
        alert("Please enter a valid Email ID to subscribe!");
        error.style.display = "inline";
        email.className = "error";
        email.focus();
    }

})

dismiss.addEventListener("click", (e) => {
    signUpPage.style.display = "flex";
    confirmation.style.display = "none";
    email.value = "";
    email.className = "";
})

email.addEventListener("input", (e) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;

    if(!regex.test(email.value.trim())) {
        error.style.display = "inline";
        email.className = "error";
    }

    else {
        error.style.display = "none";
        email.className = "correct";
    }
})

