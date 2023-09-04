// const buttonDecrement = document.querySelector('[data-action="decrement"]');
// const buttonIncrement = document.querySelector('[data-action="increment"]');
// const value = document.querySelector("#value");


// let counterValue = 0;

// buttonDecrement.addEventListener("click", countMinus);
// function countMinus() {
//     counterValue -= 1
//     value.textContent = counterValue;
// }
// buttonIncrement.addEventListener("click", countPlus);
// function countPlus() {
//     counterValue += 1;
//     value.textContent = counterValue;
// }

const incrementEl = document.querySelector("[data-action='decrement']");
const decrementEl = document.querySelector("[data-action='increment']");
const valueEl = document.querySelector("#value");

let counterValue = 0;

incrementEl.addEventListener("click", () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});

decrementEl.addEventListener("click", () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});