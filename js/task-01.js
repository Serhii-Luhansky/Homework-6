const itemElements = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemElements.length}`);
const allElements = itemElements.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`)
    console.log(`Elements: ${element.querySelectorAll("li").length}`)
})
