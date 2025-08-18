
document.getElementById("klikBtn").addEventListener("click", function() {
  // Ganti background ke warna random
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);

  // Tambahin teks "Gaskeun! 🚀"
  const p = document.createElement("p");
  p.innerText = "Gaskeun! 🚀";
  p.style.color = "white";
  p.style.fontSize = "24px";
  p.style.textAlign = "center";
  document.body.appendChild(p);

  // Tunggu 2 detik, lalu pindah ke playlist YouTube
  setTimeout(function() {
    window.location.href = "https://youtube.com/playlist?list=PLPanbgyToztYKvNJ42N1cw4_jhsABKUBH&si=fus4WT9kIsVY9xMD";
  }, 2000);
});
