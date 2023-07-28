// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const elementValue = document.getElementById("value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

    function newCounterValue() {
      elementValue.textContent = counterValue;
    }

    function deleteCounter() {
      counterValue-=1;
      newCounterValue();
    } 

    function addCounter() {
      counterValue+=1;
      newCounterValue();
    }

decrementBtn.addEventListener("click", deleteCounter);
incrementBtn.addEventListener("click", addCounter);