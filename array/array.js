function filterNumbersGreaterThanFive(numbers) {
  return numbers.filter(function (number){
    return number > 5
  });
}
const numbers = [2, 8, 4, 10, 1, 7];
console.log("question 2");
console.log(filterNumbersGreaterThanFive(numbers));
