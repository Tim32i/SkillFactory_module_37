/*

���������� ������� 10.3.

���������� ������� �� ������� ���������� ��� �� 10. 
� ����������� �� ����� �������� � ����� ������: 21 ��� ��� ������: 24 ����, ��� ������: 25 ���. 
�� ���� ��� ���� ����� � 1 � ����� ������ ���� �_1 ���, ��� ����� � 2, 3, 4 � ����� � �_3 ����, 
� ��� ���� ��������� � �_7 ���.

�� ������ ������������ ��� ����� �������� ����������� if-else ��� switch-case.

*/


let userName = prompt("���� ���:");

let userBirthYear = +prompt("��� ��� ��������:");

let rezOut = "", rezYear = "";
let userAge = 0; 


if (!userBirthYear) {
  alert("��� ������ ���� ������!");
 }
else {
  rezOut = `${userName}: `;
  userAge = 2025 - userBirthYear;
  switch(userAge % 10) {
      case 1:
           rezYear = "���";
           break;
      case 2:
      case 3:
      case 4:
           rezYear = "����";
           break;
      default:
           rezYear = "���" 
  }
  rezOut += `${userAge} ${rezYear}`;
   
  alert(rezOut);
}
