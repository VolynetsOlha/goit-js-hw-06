// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
//     підставляє його поточне значення в span#name - output.Якщо інпут порожній,
//         у спані повинен відображатися рядок "Anonymous".

const inputElement = document.getElementById("name-input")
console.log(inputElement);
const outputElement = document.getElementById("name-output");
console.log(outputElement);


inputElement.addEventListener("input", changeInput);

function changeInput(evt) {
    const inputText = evt.currentTarget.value.trim();
    outputElement.textContent = inputText === "" ? "Anonymous" : inputText;
}