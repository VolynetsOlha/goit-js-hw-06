// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input сірий

// #validation-input.valid зелений

// #validation-input.invalid червоний


const inputElement = document.getElementById("validation-input");

inputElement.addEventListener('blur', addBlur)
    
    function addBlur(evt)  {
      const correctLength = parseInt(inputElement.getAttribute("data-length"));
        console.log(correctLength);
        
        if (evt.currentTarget.value.length === correctLength) {   
       inputElement.classList.add("valid");
        }

        else {   
            inputElement.classList.remove("valid");
            inputElement.classList.add("invalid");
      }
};