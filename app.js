// 1. DATABASE SISWA BERDASARKAN SPREADSHEET
const dataSiswaPerKelas = {
  "10-A": ["Abdhu Khairul Azzam Siregar", "Abdullah Khairii Nizar", "Ahmad Mulyadi", "Althaf Faith Elmer", "Andi Rif'at Alvaro", "Anugrah Putra Pratama", "Bintang Sayyidina Parsa", "Faith Lionel Dzaky", "Faiz Azmi", "Farid Rahman Fuady", "Hadi Zhaqy Pratama", "Handika Basri", "Khaleed Misy'al Qayyeem Rabbani", "Leonel Febrian Pramudya", "Muhamad Rahel Syahfutra", "Muhammad Al Fahreza Ilham", "Muhammad Dzakwan Nafis Al Fatih", "Muhammad Kamalul Yaqin", "Najwan Khusnul Ain", "Rafa Putra De Sam", "Raissa Akbar Setiadi", "Rasya Choirul Rohim", "Regan Faizi Zisrinifa", "Rifki Ibnu Raditya", "Syafwan Syahzani", "Zhafir Mufadhdhal", "Ziyad Ammar Zen"],
  "10-B": ["Adi Pranata", "Adjie Dharma Satriadisi", "Agusiya Ramadhan", "Ahmad Ray Fikran", "Amirul Adli Fawwaz", "Anez Qothrunnada Qila", "Arya Cahya Nugraha", "Aslan Syamil Fathan", "Damar Yusuf Sholihin", "Faiq Al Mudrik", "Fairuz Afif Amrulah", "Fayyadh Dimas Roja", "Ghani Alif Yassar Rabbani", "Haekal Ansyar Fadillah", "Haekhal Ady Pratama", "Khairul Azzam", "Muhammad Akhmal Yusuf", "Muhammad Asyraf Annaufal", "Muhammad Farhan Anugrah Usman", "Muhammad Hillan Kafin", "Muhammad Miftahul Khaer", "Muhammad Rifky Assidiq", "Ray Calestial Lobo"],
  "10-C": ["Adzkia Rahfi Ramadhani", "Aisyah Rodhiyya", "Alinia Rahman", "Almira Zalika Yaumi Afarin", "Alyana Qotrun Nada", "Amirah Nur Syarafatul Afifah", "Ayyatul Husna", "Azizah Zahra Hamid", "Chantika Fitri", "Dehani Anggun Ramadan", "Dhiya Riqqa Az Zahrah", "Humaira", "Khansa Tsurayya", "Nafisatul Ilmi Djibran", "Naura Khairunnisa", "Olif Via Agusdina", "Qalisya Aliya Zahra", "Renny Mutiara Agustin", "Sarah Malihah Salsabila", "Syaira Farah Adziqru", "Vinna Dhatul Az-Zhafir", "Zhafira Husna Azzahra"],
  "10-D": ["Aisyah Nabila Riawan", "Aisyatul Haninah", "Almira Putri Ramadhani", "Alya Ghina", "Amira Adzkia 'Izzati", "Asyifa Almalika Putri", "Aurora Ramadhani Wahono", "Ayyatul Khusna Az-Zahirah", "Cahaya Azzahira Sandi", "Cinta Nur Asyifa", "Dheeara Faza Al Aleeva", "Fakhiroh Inayatus Sabila", "Huriyatul Zakiah", "Meisya Putri Nur Aqillah", "Nahwa Khusnil Ain", "Naura Salsabila Fairus Salim", "Olivia Jasmine", "Ratu Zada Shabirah", "Sakinah Nur Mawaddah", "Shintia", "Uswatun Khasanah Saragih", "Yeva Salsabila Ahdiyat Syaputri"],
  "10-E": ["Afiyana Triastuti", "Aisyah Putri Mirahwati", "Andini Fitrotul Syalwa", "Asilah Kaltsum Najlaa", "Besse Asvira", "Fadyasmin Nurhaliza", "Fatiha Alin Dzakiyyah", "Humairoh Abidah", "Iffah Rahmi Azzahra", "Indira Novita Sari", "Iqlima Mazhidatul Muthia", "Kayla Haerani Putri", "Khansaa Zhaafira Tsaqiif", "Kirana Abirah Putri", "Lutfia Az Zahrah", "Marselia Adinda", "Nia Rahmayani", "Nur Isnaini Firaudhatissalamah", "Nur Latifah", "Tsania Iftihatul Jannah", "Yuswiarizky Cholifah Syam", "Zhaskia Aura Syafiqa"],
  "11-A": ["Abdiel Al Ghani Ahmad", "Ahmad Yusuf Safri", "Alzam Fawwaz Ahnafi", "Armi Yasir", "Desta Anugrah", "Fadhil Rizky", "Fakhry Aqil", "Imam Mahdi Al-Maliq", "Kautsar Danis Munandar", "Lukman Hakim Affan", "Muhammad Abdul Hakim Ar-Rasyid", "Muhammad Abdul Huda Yakub", "Muhammad Fadhil R Naki", "Muhammad Hanif", "Muhammad Rizqi", "Muhammad Toriq Sakib", "Muhammad Zakky Firdausi Nuzula", "Musyary Rasyid Al-Muhyiyuddin", "Nadhif Akmal", "Nadhif Ammarul Mishbah", "Nadhif Yusuf Risqullah", "Rizqi Putra Pratama", "Trian Kurniawan Irsyad", "Yazid Hanif Abqary"],
  "11-B": ["Aisyah Aqila Azizah", "Alya Mukhbita", "Annisa Sausan Salsabiil", "Annisa Ulya Diannoor", "Aufa Mafaza Zamil", "Auliya Firdausi Adiwi", "Aurel Gabril Avia", "Azka Farras Mazaya", "Dayana Batrisya Qariru Prasetyo", "Dinda Amirah Zahra", "Diva Nur Zahra Laela Azhar", "Kaila Raissa Putri", "Keysha Arumi Fauziah", "Laila Mutiara Syifa", "Latifah Azizah Permana", "Mawaddatul Khusna", "Najwa Alya Nur Ramadhani", "Nasma Shyafira", "Nur Abilla Syafa Putri Aqilah", "Nur Asyifa Alya", "Rahma Setyaningrum", "Raysya Yusriana", "Rexana Prananti Anggono", "Rumaisha Aulia Zahwa", "Safira Nazahah", "Safirah Ramahdhanni", "Saskia Azizah Salim", "Shanty Wahyuni", "Siti Halisa", "Syakira As Zahrah", "Syifa Azzahra", "Tsabitah Salma Bahiroh", "Zahra Aurelya Sakinah", "Zahra Bellicia", "Zalzabillah Mar'atus Soliha", "Zulfa Aisyah Nazla"],
  "11-C": ["Akhmad Rizqie Maulana", "Alif Wira Zakaria", "Andi Saputra", "Azka Dhiaulhaq Sutopo", "Erlangga Bagus Putranto", "Fadhil Muhammad Adinata", "Fauzan Firdaus", "Iqbal Arya Ramadhan", "Irvan Habib Muhammad Huda", "Khairullah Yusuf Aydin", "Maulana Girindra Wardana", "Muchammad Annizam Abdullah", "Muhammad Arfan Maddilau", "Muhammad Daffa Al Farizi", "Muhammad Dzaki Izzuddin Rahman", "Muhammad Fa'iq Ibni Athallah", "Muhammad Fatih Kaysan", "Muhammad Riswan Wanara", "Muhammad Salman Alfarizi", "Muhammad Syaifullah Safa", "Rahmat Mudzaky Chaniago", "Raihan Fayyadh Fahrezy Rafi", "Sabiqi Yaziq Kustaman", "Thirza Nur Charirissofa", "Wafii Liwang Islami", "Zidane Rizqi Pratama"],
  "11-D": ["Al'fatia Rahadatul Aisi", "Alfisna Alifia Fauzia", "Amelia Nur Halimah", "Anaya Carissa Filzah", "Aristy Yuniar Manggara", "Audy Cahya Anugrah Ramadhani", "Aura Julia Mahadewi", "Azela Ilmy Fiddaroin Cholid", "Defa Anindya", "Deswita Puspa Ariyanti", "Fathimah Azzahrah", "Inayah Angel Az Zahra", "Izzatul Fikriyah Almaulida", "Janeeta Oktaviani Alfania", "Khanita Alimah Batubara", "Khayla Athaya Rahmawati", "Laila Aticha Rizky", "Laila Rizki Nur Amalia Hamzah", "Nabila Al Wanami", "Nadhira Fadiya Aqila Arif", "Nazra Tul Aina", "Nia Ramadani", "Nike Suci Sholekhah", "Nur Fathiah Az Zahra", "Nurainiyah", "Nurliana", "Olivia", "Ori Latifah", "Pamela Fanastasya Ardi", "Puspita", "Raeesa Elizza", "Rizkyka Dewi Tabran", "Sakyla Sisy", "Salwa Az Zahra Mubarak", "Syifa Afifah Khairun Ramadania", "Zahra Al Syifa", "Zahroo' Aadillah", "Zakiyyah Zahranova", "Zaskia Dwi Syahlifah"],
  "12-A": ["Alfan Rizkia Ramadhan Worang", "Alief Nur Heri", "Andi Ahmad Rabbani Alkautsar", "Andi Huzaifah Sabiil", "Dzakii Dha'if Valensea", "Fandi Ahmad Syarif", "Fathi Rahmat", "Ghany Firdaus Syaputra", "Hafidz Khoirul Azzam", "Maulana Fadhil Abdillah", "Mohamad Fahri Komsat", "Muhamad Hafizun Nafis", "Muhammad Ardan Malawali", "Muhammad Diego Baharuddin", "Muhammad Hafizh Fajar Gemilang Islami", "Muhammad Rafif Sava Adivan", "Muhammad Ravindra Aaqilah", "Muhammad Ridho", "Muhandis Jumdan Alzikri", "Rafa Ziya Mawla", "Raffi Wijaya", "Ramdhani Al-Muzakie Suryadarma", "Razzan Fawwaz Zisrinifa", "Rifqi Kurniawan", "Shafi Atha Trisan", "Tirta Arya Wibawa", "Turwahyu Ramadhan", "Yeza Athallariq Ashar", "Yusuf Ilham Zuhdii"],
  "12-B": ["Adek Rahmadian", "Ahya Izzati", "Alisa Putri Agustin", "Ayscel Gina Amelia", "Az Zahra Aurelia", "Bilqiis Qoonita Al-Ihsan", "Dira Sabila Paradisa", "Haya Zahirah Sabdania", "Hilwa Aufa Adzkia", "Jacinda Puji Qatrunnada", "Juliana Tungga Dewi", "Kayla Khalifah Rasman", "Keisya Khairunnisa", "Kheysya Syahida Asjari", "Maharani Lista Fitri Az-Zahra", "Naisha Adzkiyya Raudatussyahlaa'", "Naurah Nadhifah Razzaq", "Nisa Khofifah Putri Harin", "Nouvalya Anditha", "Nur Azizah Amalia", "Nur Fajarina", "Nurul Izzati Nazmi", "Quaneisha Safa Rahadatul Aisy", "Silvia Tiani Wahono", "Syarlina Nur Awalia", "Thalita Maritza Reihana", "Vania Amada Raihanna", "Zhafra Ufaira Aufa Rahman"],
  "12-C": ["Abdul Hady", "Faeyza Nararya Deandra Nasution", "Fathi Dhia Zhafar", "Fauzan Nur Roid Gunawan", "Hedi Dwi Alkin Augusta", "Ikhsan Musthofa", "M. Zaki Respati Nayaka", "Mochamad Rezky Aristia Pratama", "Muhammad April", "Muhammad Naufal Ahnaf", "Muhammad Rizqi Ramadhan", "Muhammad Yusuf Fairussinatra", "Muhammad Zaky", "Nathan Ibrahim Mufid", "Nirwan Rastra Hartanto", "Qomari Anwar Hatta", "Rafie Pandya Hafizha", "Razan Muhammad Ihsan", "Sakti Abbiyu Tamma", "Widzar Al Gifari Mahardika", "Zaki Pratama"],
  "12-D": ["Adzkiya Giza Maharani", "Afifaturrifda", "Aisyah Aulia Habibah", "Aisyah Lutfi Azzahra", "Aisyah Sabrina Ayu Ramadhani", "Aisyah Wilda Rohmatillah", "Alysa Nadina Putri", "Annajma Madina Azkiya", "Asha Ainiyah Sari", "Ayudya Ningrum Puspita Sari", "Azzahra Ayu Pratama", "Diva Lestari", "Ellena Archa Rizki", "Fa'izah Fahmi Ardani", "Faizatud Daraini", "Fani Afnan Jannati", "Fatima Zahra", "Fayra Aqeela Huwaidah", "Fikha Angelina Putri", "Izzati Bilqis Al Qisti", "Luthfiyyah Khalvati", "Ma'rifatul Isnaini", "Mauliyana Sariatul", "Miftahul Janna", "Nalita Rahmadani", "Naura Bilqisthi Al-Waheedah", "Nesha Mustakim", "Nimas Ayu Artami", "Paquita Luthfira Putri", "Rani Melati Anggraini", "Salsa Rahayu Nengtyas", "Syahrotusita Jannatun Khusnia", "Syakira Apriani", "Viyra Saskia", "Wafa Nur Najma Dalila"]
};

// 2. CONFIGURASI & BACKGROUND ROTATION LOKAL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz09hnkKvkRsAvoWMmANT_AeOaYZEAeHr5lJHngCeP_-z8TyoiRQsBCvFFAxU_fUUq29A/exec';

const backgroundImages = [
  '1001.jpg',
  '1002.jpg',
  '1003.jpg',
  '1004.jpg',
  '1005.jpg'
];

let currentBgIndex = 0;
function changeBackground() {
  document.body.style.backgroundImage = `url('${backgroundImages[currentBgIndex]}')`;
  currentBgIndex = (currentBgIndex + 1) % backgroundImages.length;
}

// 3. INISIALISASI APPS & EVENT DETEKSI ONLINE/OFFLINE
document.addEventListener('DOMContentLoaded', () => {
  changeBackground();
  setInterval(changeBackground, 2 * 60 * 1000); // Rotasi background 2 menit
  
  loadIssues();
  syncPendingIssues();

  // AUTO-REFRESH DAFTAR LAPORAN SETIAP 10 DETIK
  setInterval(loadIssues, 10000);

  const kelasSelect = document.getElementById('kelas');
  kelasSelect.addEventListener('change', updateDaftarNama);

  const issueForm = document.getElementById('issueForm');
  issueForm.addEventListener('submit', handleFormSubmit);

  window.addEventListener('online', () => {
    syncPendingIssues();
    loadIssues();
  });
});

// 4. UPDATE DROPDOWN NAMA SISWA
function updateDaftarNama() {
  const kelasSelect = document.getElementById('kelas');
  const namaSelect = document.getElementById('nama');
  const selectedKelas = kelasSelect.value;

  namaSelect.innerHTML = '<option value="">-- Pilih Nama Siswa --</option>';

  if (selectedKelas && dataSiswaPerKelas[selectedKelas]) {
    namaSelect.disabled = false;
    dataSiswaPerKelas[selectedKelas].forEach(nama => {
      const option = document.createElement('option');
      option.value = nama;
      option.textContent = nama;
      namaSelect.appendChild(option);
    });
  } else {
    namaSelect.disabled = true;
    namaSelect.innerHTML = '<option value="">-- Pilih Kelas Terlebih Dahulu --</option>';
  }
}

// 5. PROSES FORM SUBMIT
function handleFormSubmit(e) {
  e.preventDefault();

  const issueForm = e.target;
  const submitBtn = issueForm.querySelector('button[type="submit"]');
  submitBtn.disabled = true;

  const kelas = document.getElementById('kelas').value;
  const nama = document.getElementById('nama').value;
  const kategori = document.getElementById('kategori').value;
  const deskripsi = document.getElementById('deskripsi').value;
  
  const now = new Date();
  const waktu = now.toLocaleString('id-ID');
  const tanggalString = now.toDateString();
  const id = Date.now();

  const newIssue = { 
    id, 
    kelas, 
    nama, 
    kategori, 
    deskripsi, 
    waktu, 
    tanggalString, 
    pendingSync: true
  };

  saveIssueToStorage(newIssue);
  loadIssues();

  issueForm.reset();
  document.getElementById('nama').disabled = true;
  document.getElementById('nama').innerHTML = '<option value="">-- Pilih Kelas Terlebih Dahulu --</option>';
  submitBtn.disabled = false;

  if (navigator.onLine) {
    syncSingleIssue(newIssue);
  } else {
    alert('Laporan tersimpan secara OFFLINE. Akan otomatis dikirim ke Google Sheets saat online!');
  }
}

// 6. SINKRONISASI KE GOOGLE SHEETS
function syncSingleIssue(issue) {
  fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(issue)
  })
  .then(() => {
    markAsSynced(issue.id);
  })
  .catch(error => console.error('Error Syncing ID:', issue.id, error));
}

function syncPendingIssues() {
  if (!navigator.onLine) return;

  const issues = getIssuesFromStorage();
  const pending = issues.filter(item => item.pendingSync === true);

  if (pending.length > 0) {
    pending.forEach(issue => syncSingleIssue(issue));
  }
}

function markAsSynced(id) {
  let issues = getIssuesFromStorage();
  issues = issues.map(item => {
    if (item.id === id) {
      return { ...item, pendingSync: false };
    }
    return item;
  });
  localStorage.setItem('chromebook_issues', JSON.stringify(issues));
  loadIssues();
}

// 7. PENYIMPANAN LOCALSTORAGE
function saveIssueToStorage(issue) {
  let issues = getIssuesFromStorage();
  issues.unshift(issue);
  localStorage.setItem('chromebook_issues', JSON.stringify(issues));
}

function getIssuesFromStorage() {
  return localStorage.getItem('chromebook_issues') 
    ? JSON.parse(localStorage.getItem('chromebook_issues')) 
    : [];
}

// 8. MEMUAT & SINKRONISASI 10 LAPORAN TERAKHIR DARI GOOGLE SHEETS
function loadIssues() {
  if (!navigator.onLine) {
    loadIssuesFromLocalStorage();
    return;
  }

  fetch(GOOGLE_SCRIPT_URL)
    .then(response => response.json())
    .then(data => {
      const issueList = document.getElementById('issueList');
      issueList.innerHTML = '';

      if (!data || data.length === 0) {
        issueList.innerHTML = '<li class="issue-item">Belum ada laporan kendala.</li>';
        updateRunningText([]);
        return;
      }

      // Ambil maksimal 10 laporan terakhir
      const last10 = data.slice(0, 10);
      
      last10.forEach(issue => {
        const li = document.createElement('li');
        li.className = 'issue-item';
        li.innerHTML = `
          <strong>Kelas:</strong> ${issue.kelas} | <strong>Pelapor:</strong> ${issue.nama} <br>
          <strong>Kategori:</strong> ${issue.kategori || '-'} <br>
          <strong>Detail Masalah:</strong> ${issue.deskripsi} <br>
          <small style="color: gray;">Waktu: ${issue.waktu}</small>
        `;
        issueList.appendChild(li);
      });

      updateRunningText(data);
    })
    .catch(error => {
      console.error('Gagal mengambil data server, menggunakan data lokal:', error);
      loadIssuesFromLocalStorage();
    });
}

// Fungsi Cadangan jika Offline
function loadIssuesFromLocalStorage() {
  const issues = getIssuesFromStorage();
  const today = new Date().toDateString();
  const issueList = document.getElementById('issueList');
  
  issueList.innerHTML = '';
  
  const todayIssues = issues.filter(issue => issue.tanggalString === today);
  const last10Issues = todayIssues.slice(0, 10);
  
  last10Issues.forEach(issue => renderIssue(issue));
  updateRunningText(todayIssues);
}

function renderIssue(issue) {
  const issueList = document.getElementById('issueList');
  const li = document.createElement('li');
  li.className = 'issue-item';
  
  const statusBadge = issue.pendingSync 
    ? `<span style="color: #d93025; font-size: 11px; font-weight: bold;">[Belum Tersinkron]</span>`
    : `<span style="color: #188038; font-size: 11px; font-weight: bold;">[Tersinkron]</span>`;

  li.innerHTML = `
    <strong>Kelas:</strong> ${issue.kelas} | <strong>Pelapor:</strong> ${issue.nama} ${statusBadge}<br>
    <strong>Kategori:</strong> ${issue.kategori || '-'} <br>
    <strong>Detail Masalah:</strong> ${issue.deskripsi} <br>
    <small style="color: gray;">Waktu: ${issue.waktu}</small>
  `;
  issueList.appendChild(li);
}

function updateRunningText(issues) {
  const runningTextEl = document.getElementById('runningText');
  
  if (!issues || issues.length === 0) {
    runningTextEl.innerText = 'Belum ada laporan kendala untuk hari ini.';
    return;
  }

  const categoryCount = {};
  issues.forEach(issue => {
    if (issue.kategori) {
      categoryCount[issue.kategori] = (categoryCount[issue.kategori] || 0) + 1;
    }
  });

  let topCategory = '';
  let maxCount = 0;
  for (const [kat, count] of Object.entries(categoryCount)) {
    if (count > maxCount) {
      maxCount = count;
      topCategory = kat;
    }
  }

  runningTextEl.innerText = `🔥 Kendala Paling Sering Dilaporkan Hari Ini: ${topCategory} (${maxCount} Laporan) — Segera Diperiksa!`;
}