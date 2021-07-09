const factorialofANum = require("../factorial/index.js");
const ratioofTwoNums = require("../ratio/index.js");

function ratioAndFactorial(firstNum, secondNum, thirdNum) {
  const ratio = ratioofTwoNums(firstNum, secondNum);
  const factorial = factorialofANum(thirdNum);

  return { ratio, factorial };
}

module.exports = ratioAndFactorial;
