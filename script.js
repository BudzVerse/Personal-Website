tombol.addEventListener("click", () => {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);

  // Tambah tulisan efek ke halaman
  const p = document.createElement("p");
  p.innerText = "Gaskeun! 🚀";
  p.style.color = "white";
  p.style.fontSize = "24px";
  p.style.textAlign = "center";
  document.body.appendChild(p);
});