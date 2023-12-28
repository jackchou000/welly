function formatName1(firstName1, lastName1) {
  const formattedFirstName = firstName1 ? firstName1 : '';
  const formattedLastName = lastName1 ? lastName1 : '';
  return `${formattedFirstName} ${formattedLastName}`;
}
console.log(formatName1("JACK"))

// 以我的理解意思來說，原本的程式碼是想將firstName以及lastName做拼接，並且字串為空時，不會輸入undefined，我重構程式碼後，先利用二元運算判斷是否為空值，若不為空則輸出字串，反之輸入空字串，return `${formattedFirstName} ${formattedLastName}`是利用 JavaScript 中的模板字面量語法，這段程式不用任何拼接字串就可以讓兩個字串做拼接，這樣的程式碼更容易閱讀以及維護，也更加簡潔。