/**
 * const,let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数を上書き";
// console.log(val1);

// let val2 ="let変数";
// console.log(val2);

// //letは上書きは可能

// //letは再宣言不可能
// let val2 ="再宣言";

// const val4 = {
//   name: "seiji",
//   age: 32
// };
// val4.name = "jak";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5.push("monkey");
// console.log(val5);

//**テンプレート文字列

// const name = "上本";
// const age = 28;

//従来の方法
// const message1 = "私の名前は" +　name + "です";
// console.log(message1);

// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数
// function func1(str) {
//   return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

//アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("func2です"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(10, 20));
