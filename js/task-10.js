// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість елементів в input
//  і натискає кнопку Створити, після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число.Функція створює стільки < div >,
//   скільки вказано в amount і додає їх у div#boxes.
// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.



// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }


// const controls = document.getElementById("controls");
// const boxes = document.getElementById("boxes");

// boxes.addEventListener("click", createBoxes);
// console.log(boxes);

// function createBoxes(amount) {
//  const elements = [];

//     for (let i = 0; i < amount; i+=1) {
//       const div = document.createElement("div");
//       elements.push(div);
//     }
// }