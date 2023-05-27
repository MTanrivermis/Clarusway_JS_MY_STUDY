document.getElementById("myButton").onclick = function () {
  const namesurname = String(document.getElementById("namesurname").value);
  const note1 = parseInt(document.getElementById("note1").value);
  const note2 = parseInt(document.getElementById("note2").value);
  const note3 = parseInt(document.getElementById("note3").value);
  let calc = Math.trunc((note1 + note2 + note3) / 3);
  let sonuc;
  if (calc > 90) {
    sonuc = "AA";
  } else if (calc > 80 && calc <= 90) {
    sonuc = "AB";
  } else if (calc > 70 && calc <= 80) {
    sonuc = "BB";
  } else if (calc > 60 && calc <= 70) {
    sonuc = "BC";
  } else if (calc > 50 && calc <= 60) {
    sonuc = "CC";
  } else if (calc > 40 && calc <= 50) {
    sonuc = "CD ";
  } else if (calc > 30 && calc <= 40) {
    sonuc = "DD 👌";
  } else if (calc <= 30) {
    sonuc = "FF 😢";
  } else {
    sonuc = "Lütfen Değer Giriniz";
  }
  document.querySelector("#nameinfo").innerHTML = namesurname;
  document.querySelector("#sonuc").innerHTML = sonuc;
};
