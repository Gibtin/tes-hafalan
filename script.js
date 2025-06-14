let userName = "";

function mulaiGame() {
    let input = document.getElementById("namaInput").value.trim();
    if (input === "") {
        alert("Silakan masukkan nama dulu.");
        return;
    }

    userName = input;
    document.getElementById("start-screen").style.display = "none";
    document.querySelector(".container").style.display = "block";
    showQuestion();
}

let soal = [
    "...وَجَآءَ مِنۡ اَقۡصَا الۡمَدِيۡنَةِ رَجُلٌ يَّسۡعٰى قَالَ يٰقَوۡمِ اتَّبِعُوا",
    "...اتَّبِعُوۡا مَنۡ لَّا يَسۡـــَٔلُكُمۡ اَجۡرًا وَّهُمۡ",
    ".....وَمَآ أَرْسَلْنَٰكَ إِلَّا",
   "...وَلَا تُطِعِ الۡكٰفِرِيۡنَ وَالۡمُنٰفِقِيۡنَ وَدَعۡ اَذٰٮهُمۡ وَتَوَكَّلۡ عَلَى اللّٰهِ ؕ",
   "...قُلۡ جَآءَ الۡحَـقُّ",
   "لِّيُعَذِّبَ اللّٰهُ الۡمُنٰفِقِيۡنَ وَالۡمُنٰفِقٰتِ وَالۡمُشۡرِكِيۡنَ وَالۡمُشۡرِكٰتِ وَيَتُوۡبَ اللّٰهُ عَلَى الۡمُؤۡمِنِيۡنَ وَالۡمُؤۡمِنٰتِؕ وَكَانَ اللّٰهُ غَفُوۡرًا رَّحِيۡمًا.(٧٣) بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ",
   "...يٰٓاَيُّهَا النَّاسُ اذْكُرُوْا نِعْمَتَ اللّٰهِ عَلَيْكُمْۗ",
   "...وَاللّٰهُ الَّذِىۡۤ اَرۡسَلَ الرِّيٰحَ فَتُثِيۡرُ سَحَابًا",
   "...اِنَّآ اَرْسَلْنٰكَ بِالْحَقِّ بَشِيْرًا وَّنَذِيْرًا",
   "...يٰٓاَيُّهَا النَّاسُ اِنَّ وَعْدَ اللّٰهِ حَقٌّ"    
];

let pilihan = [
    ["الۡمُرۡسَلِيۡنَۙ", "الْمُرْسَلُونَ"],
    ["مُّهۡتَدُوۡنَ", "مُّهۡتَدِيْنَ", "مُّكْرَمُوْنَ", "مُّكْرَمِيْنَ"],
    ["كَآفَّةً لِّلنَّاسِ", "رَحْمَةً لِّلْعَٰلَمِينَ"],
    ["وَكَفٰى بِاللّٰهِ وَكِيۡلًا","وَكَفٰى بِاللّٰهِ شَهِيْدًا"," وَكَفٰى بِاللّٰهِ عَلِيْمًا "
    ], ["وَزَهَقَ الۡبَاطِلُ​ؕ اِنَّ الۡبَاطِلَ كَانَ زَهُوۡقًا", "وَمَا يُبۡدِئُ الۡبَاطِلُ وَمَا يُعِيۡدُ"],
    ["اَلۡحَمۡدُ لِلّٰهِ الَّذِىۡ لَهٗ مَا فِى السَّمٰوٰتِ وَمَا فِى الۡاَرۡضِ", "اَلۡحَمۡدُ لِلّٰهِ فَاطِرِ السَّمٰوٰتِ وَالۡاَرۡضِ"],
    ["اِذْ جَاۤءَتْكُمْ جُنُوْدٌ فَاَرْسَلْنَا عَلَيْهِمْ رِيْحًا وَّجُنُوْدًا لَّمْ تَرَوْهَا","هَلْ مِنْ خَالِقٍ غَيْرُ اللّٰهِ يَرْزُقُكُمْ مِّنَ السَّمَاۤءِ وَالْاَرْضِۗ"],
    ["فَيَبْسُطُهٗ فِى السَّمَاۤءِ كَيْفَ يَشَاۤءُ وَيَجْعَلُهٗ كِسَفًا فَتَرَى الْوَدْقَ يَخْرُجُ مِنْ خِلٰلِهٖۚ", "فَسُقْنٰهُ اِلٰى بَلَدٍ مَّيِّتٍ فَاَحْيَيْنَا بِهِ الْاَرْضَ بَعْدَ مَوْتِهَاۗ"],
    ["وَّلَا تُسْـَٔلُ عَنْ اَصْحٰبِ الْجَحِيْمِ", "وَاِنْ مِّنْ اُمَّةٍ اِلَّا خَلَا فِيْهَا نَذِيْرٌ"],
    ["وَّاسْتَغْفِرْ لِذَنْۢبِكَ وَسَبِّحْ بِحَمْدِ رَبِّكَ بِالْعَشِيِّ وَالْاِبْكَارِ","وَّلَا يَسْتَخِفَّنَّكَ الَّذِيْنَ لَا يُوْقِنُوْنَ", "فَلَا تَغُرَّنَّكُمُ الْحَيٰوةُ الدُّنْيَاۗ"]
];

let jawaban = ["الۡمُرۡسَلِيۡنَۙ", "مُّهۡتَدُوۡنَ", "كَآفَّةً لِّلنَّاسِ", "وَكَفٰى بِاللّٰهِ وَكِيۡلًا","وَمَا يُبۡدِئُ الۡبَاطِلُ وَمَا يُعِيۡدُ", "اَلۡحَمۡدُ لِلّٰهِ الَّذِىۡ لَهٗ مَا فِى السَّمٰوٰتِ وَمَا فِى الۡاَرۡضِ", "هَلْ مِنْ خَالِقٍ غَيْرُ اللّٰهِ يَرْزُقُكُمْ مِّنَ السَّمَاۤءِ وَالْاَرْضِۗ", "فَسُقْنٰهُ اِلٰى بَلَدٍ مَّيِّتٍ فَاَحْيَيْنَا بِهِ الْاَرْضَ بَعْدَ مَوْتِهَاۗ", 
"وَاِنْ مِّنْ اُمَّةٍ اِلَّا خَلَا فِيْهَا نَذِيْرٌ",
 "فَلَا تَغُرَّنَّكُمُ الْحَيٰوةُ الدُّنْيَاۗ"
];

let index = 0;
let score = 0;

let soalEl = document.getElementById("soal");
let pilihanEl = document.getElementById("pilihan");
let hasilEl = document.getElementById("hasil");
let nextBtn = document.getElementById("next");

function showQuestion() {
    soalEl.textContent = soal[index];
    pilihanEl.innerHTML = "";
    hasilEl.textContent = "";
    nextBtn.style.display = "none";

    for (let i = 0; i < pilihan[index].length; i++) {
        let btn = document.createElement("button");
        btn.textContent = pilihan[index][i];
        btn.onclick = function(){
            checkAnswer(this.textContent,this);
        };
        pilihanEl.appendChild(btn);
    }
}

function checkAnswer(answer,buttonClicked) {
    let correct = jawaban[index];

    if (answer === correct) {
        hasilEl.textContent = "Mumtaazz !!";
        hasilEl.style.color = "green";
        score++;
        buttonClicked.style.backgroundColor = "lightgreen";
    } else {
        hasilEl.textContent = "Salah !!";
        hasilEl.style.color = "red";
        buttonClicked.style.backgroundColor = "#ffaaaa"
    }
    // nonaktifkan semua tombol

    let allButtons = pilihanEl.getElementsByTagName("button");
for (let i = 0; i < allButtons.length; i++){
    allButtons[i].disabled = true;
    if (allButtons[i].textContent === correct){
    allButtons[i].style.backgroundColor = "lightgreen";
    }
}


nextBtn.style.display = "inline-block";
}

function nextQuestion() {
    index++;
    if (index < soal.length) {
        showQuestion();
    } else {
    soalEl.textContent = "Tes Juz 22 Selesai";
    pilihanEl.innerHTML = "";
    hasilEl.textContent = `${userName}, skor kamu: ${score * 10}, Barakallahu fiikum.
    Semangat terus murojaahnya`;
    hasilEl.style.color = "black";
    nextBtn.style.display = "none";

    // Simpan skor ke localStorage
    localStorage.setItem("skor_" + userName, score * 10);
}
}
showQuestion();