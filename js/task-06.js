
const inputText = document.querySelector("#validation-input")
console.log(`Необхідно ввести: ${inputText.getAttribute("data-length")} символів без пробілів`)
inputText.addEventListener("blur", handleBlur);
function handleBlur(event) {
    // console.log(event.currentTarget.value);
    if (event.currentTarget.value.trim().length === Number(inputText.getAttribute("data-length"))) {
        inputText.classList.add('valid');
        inputText.classList.remove("invalid")
    }
    else {
        inputText.classList.add("invalid");
        inputText.classList.remove("valid")
    }

}


