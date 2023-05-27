let adet = +prompt("Kaç tane fibonacci sayisi istiyorsunuz");
while (adet <= 0) {
  adet = +prompt("0'dan büyük sayi girmeniz gerekiyor");
}
let kucukSayi = 0;
let buyukSayi = 1;
let toplamSayi;
let metin;

for (let i = 1; i <= adet; i++) {
  console.log(kucukSayi);
  toplamSayi = kucukSayi + buyukSayi;
  kucukSayi = buyukSayi;
  buyukSayi = toplamSayi;
}
