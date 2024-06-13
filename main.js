// მოახდინე პროექტის ინიციალიზაცია
// ● დააინსტალირე პაკეტი validator
// ● მოიძიე validator-ის დოკუმენტაცია
// npmjs.com - ზე
// ● დოკუმენტაციის მიხედვით გამოიყენე
// ბრძანება isEmail და დაბეჭდე არის თუ არა
// შემდეგი სიტყვები მეილი:
// ● test@test.com, abcDE123

const validator = require('validator')
const email = 'test@test.com'
const letters = 'abcDE123'

console.log(validator.isEmail(email));
console.log(validator.isEmail(letters));
