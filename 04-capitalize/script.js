/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
 */

function capitalize(str) {
  if (str === "" || str === " ") return str;
  else {
    const arr = str
      .toLowerCase()
      .replace(/\s{2,}/g, " ")
      .trim()
      .split(" ")
      .map((element) => {
        return element[0].toUpperCase() + element.slice(1);
      });
    return arr.join(" ");
  }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize("молодость всё простит")); // "Молодость Всё Простит"
