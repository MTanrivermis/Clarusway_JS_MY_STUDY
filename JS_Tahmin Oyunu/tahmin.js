// let hak = 5;
// let pcSayi = Math.floor(Math.random() * 100) + 1;

// while (1) {
//   let tahmin = +prompt(`Lütfen bir sayi giriniz `);

//   if (tahmin > pcSayi) {
//     alert("Daha küçük bir sayı giriniz");
//   } else if (tahmin < pcSayi) {
//     alert("Daha büyük bir sayı giriniz");
//   } else if (tahmin == pcSayi) {
//     alert("Tebrikler kazandınız");
//   }

//   hak--;
//   if (hak == 0) {
//     alert("5 Hakkınız dolmuştur");
//     break;
//   }
// }

let hak = 6;
let pcSayi = Math.floor(Math.random() * 100) + 1;

for (let i = 1; i < hak; i++) {
  let tahmin = +prompt(`Lütfen bir sayi giriniz `);

  if (tahmin > pcSayi) {
    alert("Daha küçük bir sayı giriniz");
  } else if (tahmin < pcSayi) {
    alert("Daha büyük bir sayı giriniz");
  } else if (tahmin == pcSayi) {
    alert("Tebrikler kazandınız");
    break;
  }
  alert(`${i}` + ". Hakkınızı kullandınız");

  if (i == hak - 1) {
    alert("Hakkınız bitmiştir.");
    break;
  }
}
