// Disions based onmultiple conditions
//Logical AND (&&), Return true if both operands are TRUE
console.log(true && true); //---->true
console.log(false && true); //----> False
console.log(false && false); //----> False

//e.g.:
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);
