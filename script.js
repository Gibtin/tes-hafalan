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
    "Apa ibu kota Indonesia",
    "3 + 2 = ?",
    "Warna langit di siang hari ?"
];

let pilihan = [
    ["Jakarta", "Klaten", "Jogja", "Solo"],
    ["3", "5", "4", "8"],
    ["Merah", "Kuning", "Biru", "Hijau"]
];

let jawaban = ["Jakarta", "5", "Biru"];

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
        hasilEl.textContent = "Jawabanmu Benar";
        hasilEl.style.color = "green";
        score++;
        buttonClicked.style.backgroundColor = "lightgreen";
    } else {
        hasilEl.textContent = "Salah !";
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
    soalEl.textContent = "Permainan Selesai";
    pilihanEl.innerHTML = "";
    hasilEl.textContent = `Hai ${userName}, skor kamu: ${score * 10} dari ${soal.length * 10}`;
    hasilEl.style.color = "black";
    nextBtn.style.display = "none";

    // Simpan skor ke localStorage
    localStorage.setItem("skor_" + userName, score * 10);
}
}
showQuestion();