function replaceName() {
  let name = prompt("siapa nama anda?", "");
  document.getElementById("name").innerHTML = name;
}

document.getElementById("tombol").addEventListener("click", function () {
  replaceName();
});
