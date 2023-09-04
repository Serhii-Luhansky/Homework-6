const feedbackForm = document.querySelector(".login-form");
feedbackForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;
    const info = {
        email: email.value,
        password: password.value,
    }
    if (info.email === "" || info.password === "") {
        return alert("Заповніть всі поля вводу!")
    }
    console.log(info)
    event.currentTarget.reset();
}

