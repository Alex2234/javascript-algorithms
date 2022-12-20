/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/

function intersection(arr1, arr2) {
    function uniq(arr) {
    
        const sortArr=arr.sort();
        for (let i=0; i<=sortArr.length; i++) {
            if (sortArr[i]===sortArr[i+1]||sortArr[i]===sortArr[i-1])
                sortArr.splice(i,1);
                
        }
        return sortArr;
    }
     uniq(arr1);
     uniq(arr2);
     const newArray=[];
    for (let i of arr1) {
        if (arr2.includes(i)) {
           newArray.push(i);
          
        }
         
    }
    return newArray; 
}


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []
console.log(intersection([1, 1, 5, 4, 2], [8, 91, 4, 1, 1, 3]));
