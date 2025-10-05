/*

≈сть массив:

const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];

—оздайте новый массив и запишите в него только уникальные значени€ из массива arr. 
¬ыведите получившийс€ массив в консоль.

*/


const inputArr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];

const collectionSet = new Set(inputArr);

rezArr = Array.from(collectionSet);

console.log(rezArr);



