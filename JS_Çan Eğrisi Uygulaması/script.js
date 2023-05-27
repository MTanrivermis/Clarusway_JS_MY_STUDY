let vize = Number(prompt("Lütfen vize notunuzu giriniz ?"));
let final = Number(prompt("Lütfen final notunuzu giriniz ?"));
let canEgrisi = 65;
const result = vize * 0.4 + final * 0.6;
console.log(typeof result);
sonuc = result >= canEgrisi && "GEÇTİNİZ";
sonuc1 = result < canEgrisi && "KALDINIZ";
console.log(sonuc || sonuc1);
