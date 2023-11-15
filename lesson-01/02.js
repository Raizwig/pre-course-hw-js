// code
let number1 = alert(Math.floor(Math.random() * 100));
let checkingTheNumber = +prompt('введите число');
if (checkingTheNumber %2 === 0) {
  alert(`${checkingTheNumber} -число чётное!`);
}else{
  alert(`${checkingTheNumber} -число нечётное!`);
}