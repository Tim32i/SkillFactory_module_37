/*

Перепишите задание 10.3.

Определите остаток от деления количества лет на 10. 
В зависимости от этого выведите в алерт «Антон: 21 год» или «Антон: 24 года», или «Антон: 25 лет». 
То есть для всех чисел с 1 в конце должно быть «_1 год», для чисел с 2, 3, 4 в конце – «_3 года», 
а для всех остальных – «_7 лет».

Вы можете использовать для этого условные конструкции if-else или switch-case.

*/


let userName = prompt("Ваше имя:");

let userBirthYear = +prompt("Ваш год рождения:");

let rezOut = "", rezYear = "";
let userAge = 0; 


if (!userBirthYear) {
  alert("Год должен быть числом!");
 }
else {
  rezOut = `${userName}: `;
  userAge = 2025 - userBirthYear;
  switch(userAge % 10) {
      case 1:
           rezYear = "год";
           break;
      case 2:
      case 3:
      case 4:
           rezYear = "года";
           break;
      default:
           rezYear = "лет" 
  }
  rezOut += `${userAge} ${rezYear}`;
   
  alert(rezOut);
}
