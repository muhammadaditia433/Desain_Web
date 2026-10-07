const dataPelanggan = require("./data");

// ========================================
// 1. MELIHAT SEMUA DATA
// ========================================

function lihatData() {
  console.log("=== DAFTAR DATA PELANGGAN ===");

  dataPelanggan.map((data, index) => {
    console.log(`${index + 1}. Nama    : ${data.nama}`);
    console.log(`   Umur    : ${data.umur}`);
    console.log(`   Alamat  : ${data.alamat}`);
    console.log(`   Email   : ${data.email}`);
    console.log("-----------------------------");
  });
}

// ========================================
// 2. MENAMBAHKAN DATA
// ========================================

function tambahData(nama, umur, alamat, email) {
  dataPelanggan.push({
    nama: nama,
    umur: umur,
    alamat: alamat,
    email: email,
  });
}

// Menambahkan 2 data baru
tambahData("Kevin", 22, "Yogyakarta", "kevin@gmail.com");
tambahData("Lina", 23, "Semarang", "lina@gmail.com");

// ========================================
// 3. MENGHAPUS DATA
// ========================================

function hapusData(nama) {
  const index = dataPelanggan.findIndex((data) => data.nama === nama);

  if (index !== -1) {
    dataPelanggan.splice(index, 1);
    console.log(`Data ${nama} berhasil dihapus.`);
  } else {
    console.log(`Data ${nama} tidak ditemukan.`);
  }
}

// ========================================
// MENAMPILKAN DATA AWAL
// ========================================

console.log("=== DATA SETELAH PENAMBAHAN ===");

lihatData();

console.log(`Jumlah data saat ini: ${dataPelanggan.length}`);

// ========================================
// MENGHAPUS DATA KEVIN
// ========================================

hapusData("Kevin");

// ========================================
// MENAMPILKAN DATA SETELAH PENGHAPUSAN
// ========================================

console.log("\n=== DATA SETELAH KEVIN DIHAPUS ===");

lihatData();

console.log(`Jumlah data saat ini: ${dataPelanggan.length}`);
