/*NOAH HOCA ÖDEV*/

const team = [
  { name: "Ahmet", surname: "Can", job: "Developer", age: 30 },
  { name: "Mary", surname: "Bary", job: "tester", age: 22 },
  { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
  { name: "Mehmet", surname: "Tanrivermiş", job: "JS Developer", age: 35 },
  { name: "Koray", surname: "Köksal", job: "React Developer", age: 29 },
];

//* Ornek4: Yasi(age) 22 'den kucuk esit olan kisilerin adlarini (name) listeyiniz.

team.filter((v) => v.age <= 22).forEach((v) => console.log(v.name));

//* Ornek5: 22 yasindan kucuk ve esit olanlarin isimlerini diziye saklayiniz.

const lessThan22 = team.filter((v) => v.age <= 22).map((i) => i.name);

console.log(lessThan22);

//* Ornek6: ortalama yasi hesaplayiniz.

//1. yol
let totalAge = 0;
let avgAge = 0;
let count = 0;

const ortalamaYas = team.forEach((v) => {
  totalAge += v.age;
  count += 1;
});

avgAge = totalAge / count;
console.log(avgAge);

// 2. yol temiz kod
const ortalama = team.reduce((sum, i) => sum + i.age, 0) / team.length;
console.log(ortalama);
