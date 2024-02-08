/*let userNum = +prompt("Введите число");
let dividers = ``;
let amountOfDoubleDividers = 0;
let sumOfDoubleDividers = 0;
for (let i = 1; i <= userNum; i++) {
  if (!(userNum % i)) {
    dividers += `${i} `;
    if (!(i % 2)) {
      sumOfDoubleDividers += i;
      amountOfDoubleDividers++;
    }
  }
}
console.log(dividers);
console.log(`Amount of double dividers is ${amountOfDoubleDividers}`);
console.log(`Sum of double dividers is ${sumOfDoubleDividers}`);
