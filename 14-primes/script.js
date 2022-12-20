/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/
function isPrime(n) {
    let sum=0;
    if(n <= 1) {
    return false;
    }
    else for (let i=1; i<=n; i++) {
        if (n%i===0) 
        sum++;
    }
    if (sum > 2) 
    return false;
    else return true;
}

function primes(num) {
    
    const arr=[];
    for (let n=2; n<=num; n++) 
        if(isPrime(n)) 
        arr.push(n)
        return arr;
    
}


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]