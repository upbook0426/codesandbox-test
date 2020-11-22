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
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "上本",
//   age: 32
// };

// const message1 = `名前は${myProfile.name}です`;
// console.log(message1);

// const { name, age } = myProfile;

// const message2 = `名前は${name}です`;
// console.log(message2);

// const myProfile = ['せいじ',32];

// const message3 = `名前は${myProfile[0]},年齢は${myProfile[1]}`;
// console.log(message3);

// const [name,age] = myProfile;
// const message4 = `名前は${name}です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
//  */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello("せいじ");

/**
 * スプレッド構文...
 */
//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

// const arr6 =[...arr4];
// console.log(arr6);

// const arr7 =[...arr4,...arr5];
// console.log(arr7);

const arr8 = arr4;
console.log(arr8);
arr8[0] = 100;
console.log(arr4);
