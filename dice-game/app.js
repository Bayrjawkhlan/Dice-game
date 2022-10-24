// Тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогчийг 0, 2-р тоглогчийг 1 гэж тэмдэглэе.

var activePlayer = 1;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч

var scores = [0, 0];

// Тоглогчийн өөрийн ээлжиндээ цуглуулж байгааа оноо.

var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

var dice = Math.floor(Math.random() * 6) + 1;

// <div class="player-score" id="score-0">43</div>

// window.document.querySelector('#score-0').textContent = dice
// document.querySelector('#score-1').textContent = dice

// Програм эхлэхэд бэлтгэе
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;
document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;
document.querySelector('.dice').style.display = "none";

console.log('Шоо :' + dice);