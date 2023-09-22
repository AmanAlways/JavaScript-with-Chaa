const AcNo = 123456;
let AcEmail = "Aman@gmail.com";
let ACState;
/** Do not use Var
 * Because of issue on block scope and functional scope.
 * ACState Undefined.
 * Because I was yet to declare it :p.
 */
// AcNo = 456789; //Type Error
AcEmail = "mango@gmail.com";

console.log(AcEmail);
console.table([AcNo, AcEmail, ACState]);

console.log(AcNo);
console.table([AcNo, AcEmail]);
