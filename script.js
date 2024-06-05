// Hitungan Mundur Bulan Juni

// Tanggal target (Akhir bulan Juni)
const targetDate = new Date('June 30, 2024 23:59:59').getTime();

// Perbarui hitungan mundur setiap detik
const countdownInterval = setInterval(function () {

    // Dapatkan tanggal dan waktu saat ini
    const now = new Date().getTime();

    // Hitung selisih waktu antara sekarang dan tanggal target
    const distance = targetDate - now;

    // Hitung hari, jam, menit, dan detik
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // menampilkan nilai berdasarkan ID
    document.getElementById('days').innerHTML = days + "<br> Hari";
    document.getElementById('hours').innerHTML = hours + "<br> Jam";
    document.getElementById('minutes').innerHTML = minutes + "<br> Menit";
    document.getElementById('seconds').innerHTML = seconds + "<br> Detik";
})