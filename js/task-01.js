// const itemElements = document.querySelectorAll(".item");
// console.log(`Number of categories: ${itemElements.length}`);
// const allElements = itemElements.forEach(element => {
//     console.log(`Category: ${element.firstElementChild.textContent}`)
//     console.log(`Elements: ${element.querySelectorAll("li").length}`)
// })
// const categoriesList = document.querySelectorAll('.item');
// console.log(`Number of categories: ${categoriesList.length}`)

// categoriesList.forEach(item => {
//     console.log(`Category: ${item.firstElementChild.textContent}`);
//     console.log(`Elements: ${item.lastElementChild.children.length}`)
// });
const itemElements = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemElements.length}`);
const allElements = itemElements.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`)
    console.dir(`Elements: ${element.lastElementChild.children.length}`)
})
