var num;
num = Number(prompt("Dizi uzunluğunu giriniz"));
var rand;
var sum = 0;
var odd = 0;
var arrNew = [];
var even = 0;
var arr = [];

function arrayList(num) {
  for (var i = 0; i < num; i++) {
    rand = Math.round(Math.random() * 9 + 1);
    arr[i] = rand;
    arrNew[i] = rand + 1;
    sum += rand;
    if (rand % 2 == 0) {
      even += rand;
    } else {
      odd += rand;
    }
  }
}
arrayList(num);

document.write("<br> oluşturulan dizi: "+arr);
document.write("<br> İlk Sayi: " + arr[0]);
document.write("<br> Son Sayi: " + arr[num - 1] + "<br>");
document.write("<br> Çift Sayilar Toplami: " + even);
document.write("<br> Tek Sayilarin Toplami: " + odd);
document.write("<br> Dizi Elemanlarinin Toplami: " + sum + "<br>");
document.write("<br> Dizi küçükten büyüğe siralanmiş: "+arr.sort(function (a, b) { return a - b;}));
document.write(" <br> Dizi büyükten küçüğe siralanmiş: "+arr.sort(function (a, b) {return a - b;}).reverse());
document.write("<br> Her elemana 1 ekleyerek yeni bir dizi oluşturalim: "+arrNew);