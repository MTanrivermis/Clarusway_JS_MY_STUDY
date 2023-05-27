//* 1.ÖDEV

// function celsius(c) {
//   let celc = (c * 9) / 5 + 32;

//   return celc;
// }
// console.log(celsius(20));

//************************************************************** */

//* 2.ÖDEV

//.split(): Elimizde bulunan metini istediğimiz şekilde parçalara bölerek ondanbir array oluşturan JavaScript String metodudur.
//.join(): Bir array içerisindeyer alan bütün elemanları birleştirerek string bir ifade olarak geri döndürür.
//.reverse(): Bir dizinin öğelerinin sırasını tersine çevirmenize olanak tanır

// function reverseString(str) {
//   const reverse = str.split("").reverse().join("");
//   return reverse;
// }
// console.log(reverseString("car"));

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("car"));

//***************************************************************/

//** TEAM WORK ÖDEVİ

// function reverseWord(x) {
//   return x.split(" ").reverse().join(" ");
// }
// console.log(reverseWord("? doing you are how hi"));
// console.log(reverseString("days. big make things Little"));

//***************************************************************/

//* 3.ÖDEV

// 3- Belirli bir string ifadenin palindrome olup olmadığını bulan fonksiyonu yazınız?

const string = "alila";

function isPalindrome(str) {
  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  if (str == newStr) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome(string)); // output: true

//***************************************************************/
// 4- Belirli bir string ifadenin içindeki sesli harfleri bulan fonksiyonu yazınız?(includes)
// console.log(findVowels('hello world')) // output: eoo

// 5- Belirli bir sayının tam bölenlerinin toplamını bulan fonksiyonu yazınız?
// console.log(sumOfDivisors(12)) // output: 28

// 6- Belirli bir sayının asal olup olmadığını bulan fonksiyonu yazınız?
// console.log(isPrime(7)) // output: true

// 7- Bir sayının faktöriyelini hesaplayan bir fonksiyon yazınız.
// console.log(factorial(5)) // output: 120

// 8- Bir dizi içerisindeki en büyük sayıyı bulan bir fonksiyon yazınız.
// console.log(findMax([1, 2, 3, 4, 5, 6, 7, 8, 9])) // output: 9

// 9- Bir dizi içerisindeki sayıları toplayan bir fonksiyon yazınız.
// console.log(sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9])) // output: 45

// 10-Girilen bir cümledeki kelime sayısını bulan bir fonksiyon yazınız.

// console.log(findWordCount('hello world')) // output: 2

// 11- Girilen bir sayının pozitif çarpanlarını bulan bir fonksiyon yazınız
// console.log(findPositiveDivisors(12)) // output: [1, 2, 3, 4, 6, 12]
