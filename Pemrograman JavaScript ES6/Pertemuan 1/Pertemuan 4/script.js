class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }

    sewaKendaraan(kendaraan) {
        this.kendaraanDisewa = kendaraan;
    }
}

// Membuat data pelanggan
const pelanggan1 = new Pelanggan("Aditia", "081234567890");
const pelanggan2 = new Pelanggan("Budi", "082345678901");
const pelanggan3 = new Pelanggan("Rina", "083456789012");

// Mencatat kendaraan yang disewa
pelanggan1.sewaKendaraan("Toyota Avanza");
pelanggan2.sewaKendaraan("Honda Brio");
pelanggan3.sewaKendaraan("Mitsubishi Xpander");

// Menyimpan semua pelanggan ke dalam array
const daftarPelanggan = [
    pelanggan1,
    pelanggan2,
    pelanggan3
];

// Menampilkan data ke halaman HTML
const tabel = document.getElementById("daftarPelanggan");

daftarPelanggan.forEach((pelanggan, index) => {
    tabel.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${pelanggan.nama}</td>
            <td>${pelanggan.nomorTelepon}</td>
            <td>${pelanggan.kendaraanDisewa}</td>
        </tr>
    `;
});