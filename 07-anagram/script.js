/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    const arr=str1.toLowerCase().split('');
    const arr2=str2.toLowerCase().split('');
        if (str1.toLowerCase()===str2.toLowerCase() || arr.length!==arr2.length)
        return false;
        else {
            if(arr.sort().join('')===arr2.sort().join(''))
            return true;
        }
    
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'friend')); // true
console.log(anagram('hello', 'bye')); // false