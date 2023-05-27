// let sekerSayisi = 13;

// let guncelSekerSayisi = 0;

// let userNumber = 0;

// let pcNumber = 0;

// for (let i = 1; i < sekerSayisi; i++) {
//   userNumber = +prompt("Lütfen 1-3 arası bir sayı giriniz");
//   pcNumber = Math.floor(Math.random() * 3) + 1; //! 1-3 arasında sayı üretir.

//   sekerSayisi = sekerSayisi - (userNumber + pcNumber);

//   if (sekerSayisi > 0 && sekerSayisi < 3) {
//     alert(`alert : ${sekerSayisi}`);
//   }
// }

// console.log(`user number :  ${userNumber} pc number : ${pcNumber}`);
// // console.log(``);
// console.log(`seker sayisi : ${sekerSayisi}`);
// console.log(`guncel seker sayisi : ${guncelSekerSayisi}`);

// console.log(``);

/**************************************************************************************************/

let sekerSayisi = 13;
let guncelSekerSayisi = 0;
let userNumber;
let pcNumber = 0;
let hamle = 1;

while (sekerSayisi > 0) {
  userNumber = +prompt(`Lütfen 1-3 arası bir sayı giriniz.`);
  while (userNumber < 0 || userNumber > 3 || sekerSayisi - userNumber < 0) {
    userNumber = +prompt(`Lütfen 1-3 arası bir sayı giriniz.`);
  }
  hamle++;
  sekerSayisi = sekerSayisi - userNumber;
  console.log(`${userNumber} seker aldin.  ${sekerSayisi} seker kaldi`);
  if (sekerSayisi <= 0) {
    break;
  }
  pcNumber = Math.floor(Math.random() * 3) + 1; //! 1-3 arasında sayı üretir.
  console.log(`pc ${pcNumber} sayisini secmek istiyor`);
  while (sekerSayisi - pcNumber < 0) {
    pcNumber = Math.floor(Math.random() * 3) + 1; //! 1-3 arasında sayı üretir.
    console.log(`pc ${pcNumber} sayisini secmek istiyor`);
  }
  hamle++;
  sekerSayisi = sekerSayisi - pcNumber;
  console.log(`pc ${pcNumber} adet seker adli. ${sekerSayisi} seker kaldi`);
  if (sekerSayisi <= 0) {
    break;
  }
}
if (hamle % 2 == 1) {
  console.log("kullanici biberi yedi");
} else {
  console.log("bilgisayar biberi yedi");
}
