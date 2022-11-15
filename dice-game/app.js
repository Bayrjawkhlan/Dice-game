// Тоглогчийн ээлжийг хадгалах хувьсагч, 1-р тоглогчийг 0, 2-р тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 0;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн өөрийн ээлжиндээ цуглуулж байгааа оноо.
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var diceNumber = Math.floor(Math.random() * 6) + 1;

// Програм эхлэхэд бэлтгэе

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

var diceDom = document.querySelector('.dice')
diceDom.style.display = "none";

// Шоог шидэх евент листенер
document.querySelector('.btn-roll').addEventListener('click', function() {

	// 1-6 доторх санамсаргүй нэг тоо гаргаж авна 
	var diceNumber = Math.floor(Math.random() * 6) + 1;

	// Шооны зургийг веб дээр гаргаж ирнэ
	diceDom.style.display = "block";

	// Буусан санамсаргүй тоонд харгалзах шооны зургийг веб дээр гаргаж ирнэ
	diceDom.src = 'dice-' + diceNumber + '.png';

	// Буусан тоо нь нэгээс ялгаатай бол идэвхитэй тоглогчийн ээлжийн оноог өөрчилнө
	if(diceNumber !== 1) {
		// Нэгээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө\
		roundScore = roundScore + diceNumber;
		document.getElementById('current-' + activePlayer).textContent = roundScore;
	} else {

		switchToNextPlayer();
	}
});

// HOLD товчны евент листенер
document.querySelector('.btn-hold').addEventListener('click', function(){
	// Уг тоглогчийн ээлжиийн оноог глобал оноон дээр нь нэмж өгнө

	scores[activePlayer] = scores[activePlayer] + roundScore;

	// Дэлгэц дээр оноог нь өөрчилнө.
	document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

	// if (activePlayer === 0) {
	// 	scores[0] = scores[0] + roundScore;
	// } else {
	// 	scores[1] = scores[1] + roundScore;
	// }

	// Уг тоглогч хожсон эсэхийг шалгах
	if (scores[activePlayer] >= 20) {
		document.getElementById('name-' + activePlayer).textContent = "WINNER!!!";
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
	} else {
		// Тоглогчийн ээлжийг солино
		switchToNextPlayer();
	}
});

// Энэ функц нь тоглох ээлжийг дараачийн тоглогч руу шилжүүлж өгнө.
function switchToNextPlayer() {
	// Энэ тоглогчийн ээлжиндээ цуглуулсан current оноог 0 болгоно
	roundScore = 0;
	document.getElementById('current-' + activePlayer).textContent = 0;

	// Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ
	activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

	// if (activePlayer === 0) {
	// 	activePlayer = 1;
	// } else {
	// 	activePlayer = 0;
	// }


	// Улаан цэгийг шилжүүлэх код
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	// Шоог түр алга болгоно
	diceDom.style.display = 'none';
}
