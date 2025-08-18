// Ambil tombol dengan id "klikBtn"
const tombol = document.getElementById("klikBtn");

// Kasih event klik ke tombol
tombol.addEventListener("click", () => {
  // Ubah warna background jadi random
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);

  // Buka WhatsApp di tab baru
  window.open("https://wa.me/6288226917073", "_blank");
});