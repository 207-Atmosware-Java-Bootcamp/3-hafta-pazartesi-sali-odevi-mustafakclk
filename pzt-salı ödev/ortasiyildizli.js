var cumle;
cumle = prompt("Enter name");
var count = "";

function secretString(cumle) {
  for (var i = 0; i < cumle.replace(" ", "").length - 2; i++) {
    count += "*";
  }
}
secretString(cumle);
document.write(
  cumle.replace(cumle.substring(1, cumle.length - 1), count) + "<br>"
);