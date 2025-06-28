/* app.js */
const cards = ['card1.png', 'card2.png', 'card3.png', 'card4.png', 'card5.png', 'card6.png', 'card7.png', 'card8.png', 'card9.png' ]; // Replace with your actual filenames

function drawCard() {
  const button = document.getElementById("drawBtn");
  button.style.display = "none";

  const cardContainer = document.getElementById("cardContainer");

  const music = document.getElementById("bg-music");
  music.play();

  cardContainer.innerHTML = `<p style="font-size:18px;">Shuffling...</p>`;

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const selectedCard = cards[randomIndex];

    cardContainer.innerHTML = `
      <img id="drawnCard" src="images/${selectedCard}" alt="Healing Card" class="card" />
    `;

    const img = document.getElementById('drawnCard');
    setTimeout(() => {
      img.classList.add('show');
    }, 50);
  }, 1000);
	
	
Z

}



// JavaScript Document