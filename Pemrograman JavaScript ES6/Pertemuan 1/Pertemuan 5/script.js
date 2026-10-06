// Data produk awal
let produk = [
  {
    id: 1,
    nama: "Laptop",
    harga: 7000000,
  },
  {
    id: 2,
    nama: "Mouse",
    harga: 200000,
  },
  {
    id: 3,
    nama: "Keyboard",
    harga: 350000,
  },
  {
    id: 4,
    nama: "Headset",
    harga: 450000,
  },
  {
    id: 5,
    nama: "Webcam",
    harga: 600000,
  },
];

// Fungsi untuk menampilkan semua produk
function tampilkanProduk(...dataProduk) {
  const tabel = document.getElementById("daftarProduk");

  tabel.innerHTML = "";

  dataProduk.forEach((item, index) => {
    // Destructuring
    const { id, nama, harga } = item;

    tabel.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${nama}</td>
                <td>Rp ${harga.toLocaleString("id-ID")}</td>
                <td>
                    <button class="hapus" onclick="hapusProduk(${id})">
                        Hapus
                    </button>
                </td>
            </tr>
        `;
  });
}

// Fungsi menambahkan produk
function tambahProduk(nama, harga) {
  const produkBaru = {
    id: Date.now(),
    nama: nama,
    harga: harga,
  };

  // Spread Operator
  produk = [...produk, produkBaru];

  tampilkanProduk(...produk);
}

// Fungsi menghapus produk
function hapusProduk(id) {
  produk = produk.filter((item) => item.id !== id);

  tampilkanProduk(...produk);
}

// Event Listener tombol tambah
document.getElementById("btnTambah").addEventListener("click", function () {
  const nama = document.getElementById("namaProduk").value;
  const harga = Number(document.getElementById("hargaProduk").value);

  if (nama === "" || harga === 0) {
    alert("Nama dan harga produk harus diisi!");
    return;
  }

  tambahProduk(nama, harga);

  document.getElementById("namaProduk").value = "";
  document.getElementById("hargaProduk").value = "";
});

// Menampilkan produk saat halaman pertama kali dibuka
tampilkanProduk(...produk);
