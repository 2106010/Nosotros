const openFileButton = document.querySelector("#openFile");
const story = document.querySelector("#story");
const yesButton = document.querySelector("#yesButton");
const talkButton = document.querySelector("#talkButton");
const responseMessage = document.querySelector("#responseMessage");

openFileButton.addEventListener("click", () => {
  story.classList.remove("hidden");
  story.scrollIntoView({ behavior: "smooth", block: "start" });
  openFileButton.innerHTML = '<span>Expediente abierto</span><span aria-hidden="true">✓</span>';
  openFileButton.setAttribute("aria-expanded", "true");
});

yesButton.addEventListener("click", () => {
  responseMessage.textContent = "Entonces queda oficial: empieza nuestro siguiente capítulo. ♥, quedo atento a tu mensaje que no puse para saber que elejias a la distancia.";
  launchConfetti();
});

talkButton.addEventListener("click", () => {
  responseMessage.textContent = "Mentirosa!!!, yo se que si quieres jejejeje. quedo atento a tu mensaje que no puse para saber que elejias a la distancia.";
});

function launchConfetti() {
  const colors = ["#cf7587", "#f0a5b2", "#f4ede5", "#b3a5d7"];
  for (let i = 0; i < 34; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.backgroundColor = colors[i % colors.length];
    piece.style.animationDelay = `${Math.random() * 0.7}s`;
    piece.style.setProperty("--drift", `${(Math.random() - 0.5) * 180}px`);
    document.body.appendChild(piece);
    window.setTimeout(() => piece.remove(), 2600);
  }
}

const confettiStyle = document.createElement("style");
confettiStyle.textContent = `.confetti{position:fixed;top:-12px;width:7px;height:12px;z-index:999;border-radius:2px;pointer-events:none;animation:confetti-fall 2.2s ease-in forwards}@keyframes confetti-fall{to{transform:translate3d(var(--drift),105vh,0) rotate(680deg);opacity:.1}}`;
document.head.appendChild(confettiStyle);
