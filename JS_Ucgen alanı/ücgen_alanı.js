function hesapla() {
  //text kutusu içindeki değerleri okuyup sayi1,sayi2 değişkenine aktarıyoruz.
  var sayi1 = document.getElementById("kenar1").value;
  var sayi2 = document.getElementById("kenar2").value;

  //text kutusuna girilen değerler metinsel türdedir. Hesaplama yapabilmek için sayıya çeviriyoruz.
  sayi1 = Number(sayi1);
  sayi2 = Number(sayi2);

  var alan = (sayi1 * sayi2) / 2;
  alert("Üçgenin alanı:" + alan);
}

//hesaplama yapması için hesap butonunu seçiyoruz.
var hesapBtn = document.getElementById("hesapla");

//fonksiyonu olaya bağlıyoruz.
hesapBtn.onclick = hesapla;
