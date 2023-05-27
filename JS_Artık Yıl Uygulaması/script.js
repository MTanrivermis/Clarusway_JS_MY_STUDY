// 3- Artık yıl sorusu
// Artık yıl, bir yıldaki günlerin 365 yerine 366 gün olmasına denir. Bu fazladan gün (artık gün), normalde 28 gün olan şubat ayına 29 Şubat’ın eklenmesi ile elde edilir.  Bunun hesaplanması için aşağıdaki algoritma kullanılır.
​
// Bir tarih 4 ile tam bölünüp 100 katları ile tam bölünemiyorsa, veya yıl 400 sayısına tam bölünüyorsa artık yıldır. BU iki şartın dışında yılarda şubat ayı 28 gün, artık yıllarda 29 gün olarak belirlenir.
​
// Yukarıdaki bilgilere göre bir yılın artık yıl olup olmadığını konsola yazdıran conditional statement'i yazınız.
​
let yil = +prompt('yil giriniz')
​
if (yil % 4 == 0 && yil % 100 != 0) {
  console.log(`${yil} yılı artık yıldır.`)
}
else if (yil % 400 == 0) {
  console.log(`${yil} yılı artık yıldır.`)
}
else {
  console.log(`${yil} yılı artık yıl değildir.`)
}
​
yil % 100 != 0
​
if ((yil % 4 == 0) && (yil % 100 != 0) || (yil % 400 == 0) ) {
  console.log(`${yil} yılı artık yıldır.`)
}
​
else {
  console.log(`${yil} yılı artık yıl değildir.`)
}