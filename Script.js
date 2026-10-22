// ==========================================
// KELAS KENDARAAN (Parent/Base Class)
// ==========================================
class Kendaraan {
    constructor(namaKendaraan, jenis) {
        this.namaKendaraan = namaKendaraan;
        this.jenis = jenis;
    }

    getInfo() {
        return `${this.jenis} - ${this.namaKendaraan}`;
    }
}

// ==========================================
// KELAS PELANGGAN (Sesuai Instruksi Tugas)
// ==========================================
class Pelanggan {
    constructor(nama, nomorTelepon, kendaraanDisewa) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = kendaraanDisewa; // Objek dari kelas Kendaraan
    }

    // Metode untuk menampilkan detail pelanggan
    getInfoPelanggan() {
        return `Nama: ${this.nama} | No. Telp: ${this.nomorTelepon} | Kendaraan: ${this.kendaraanDisewa.getInfo()}`;
    }
}

// ==========================================
// SISTEM MANAJEMEN TRANSPORTASI (Manajemen Data)
// ==========================================
class SistemManajemenTransportasi {
    constructor() {
        this.daftarPelanggan = [];
    }

    // 2. Menambahkan transaksi penyewaan kendaraan oleh pelanggan
    tambahPelanggan(nama, nomorTelepon, kendaraanDisewa) {
        let pelangganBaru = new Pelanggan(nama, nomorTelepon, kendaraanDisewa);
        this.daftarPelanggan.push(pelangganBaru);
        console.log(`Berhasil mencatat penyewaan untuk: ${nama}`);
    }

    // 3. Menampilkan daftar pelanggan yang sedang menyewa kendaraan
    tampilkanDaftarPelanggan() {
        console.log("=== DAFTAR PELANGGAN PENYEWAAN KENDARAAN ===");
        if (this.daftarPelanggan.length === 0) {
            console.log("Belum ada data pelanggan yang menyewa.");
            return;
        }
        
        this.daftarPelanggan.forEach((pelanggan, index) => {
            console.log(`${index + 1}. ${pelanggan.getInfoPelanggan()}`);
        });
        console.log("===========================================\n");
    }
}

// ==========================================
// PENGUJIAN / DEMONSTRASI PROGRAM
// ==========================================

// Inisialisasi sistem manajemen
let sistem = new SistemManajemenTransportasi();

// Membuat beberapa objek kendaraan
let mobil1 = new Kendaraan("Toyota Avanza", "Mobil");
let motor1 = new Kendaraan("Honda Beat", "Motor");
let mobil2 = new Kendaraan("Honda Civic", "Mobil");

console.log("--- 1. MENAMBAHKAN TRANSAKSI PENYEWAAN ---");
sistem.tambahPelanggan("Budi Santoso", "081234567890", mobil1);
sistem.tambahPelanggan("Siti Aminah", "089876543210", motor1);
sistem.tambahPelanggan("Ahmad Fauzi", "081122334455", mobil2);

console.log("\n--- 2. MENAMPILKAN DAFTAR PELANGGAN ---");
sistem.tampilkanDaftarPelanggan();