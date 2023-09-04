// const input = document.querySelector("#name-input")
// const span = document.querySelector("#name-output")
// input.addEventListener("input", handlInput)
// function handlInput(event) {
//     if (event.currentTarget.value === "") {
//         span.textContent = "Anonymous"
//     }
//     else { span.textContent = event.currentTarget.value }


// }

const input = document.querySelector("#name-input")
const span = document.querySelector("#name-output")
input.addEventListener("input", handlInput)
function handlInput(event) {
    if (event.currentTarget.value.trim() !== "") {
        span.textContent = event.currentTarget.value

    }
    else { span.textContent = "Anonymous" }


}
