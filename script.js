const storyElement = document.getElementById("story");
const optionsElement = document.getElementById("options");

let player = {
  name: "",
  health: 100,
};

let story = [
  {
    id: 1,
    text: "Halo, petualang! Siapa nama Anda?",
    options: [
      { text: "John", nextId: 2 },
      { text: "Alice", nextId: 2 },
      { text: "Bob", nextId: 2 },
    ],
  },
  {
    id: 2,
    text: "Halo, [name]! Selamat datang di dunia RPG yang penuh petualangan.",
    options: [
      { text: "Jelajahi hutan", nextId: 3 },
      { text: "Temui penduduk desa", nextId: 4 },
      { text: "Kunjungi gua gelap", nextId: 5 },
    ],
  },
  {
    id: 3,
    text: "Anda memasuki hutan yang lebat. Anda menemukan jalan buntu dan kembali.",
    options: [
      { text: "Kembali", nextId: 2 },
    ],
  },
  {
    id: 4,
    text: "Anda bertemu penduduk desa yang ramah. Mereka memberikan Anda makanan dan menyediakan tempat beristirahat.",
    options: [
      { text: "Terima kasih", nextId: 6 },
      { text: "Minta petunjuk", nextId: 7 },
    ],
  },
  {
    id: 5,
    text: "Gua ini gelap dan berbahaya. Anda merasa takut dan berbalik arah.",
    options: [
      { text: "Kembali", nextId: 2 },
    ],
  },
  {
    id: 6,
    text: "Setelah beristirahat, Anda melanjutkan perjalanan dengan semangat baru.",
    options: [
      { text: "Lanjutkan", nextId: 2 },
    ],
  },
  {
    id: 7,
    text: "Penduduk desa memberikan petunjuk tentang gua rahasia yang menyimpan harta karun.",
    options: [
      { text: "Pergi ke gua", nextId: 8 },
      { text: "Lanjutkan eksplorasi", nextId: 2 },
    ],
  },
  {
    id: 8,
    text: "Anda tiba di gua rahasia. Tetapi, gua ini dijaga oleh monster yang kuat!",
    options: [
      { text: "Hadapi monster", nextId: 9 },
      { text: "Kembali ke desa", nextId: 7 },
    ],
  },
  {
    id: 9,
    text: "Pertarungan dengan monster berlangsung sengit. Anda berhasil mengalahkannya dan mendapatkan harta karun!",
    options: [
      { text: "Kembali dengan harta karun", nextId: 10 },
    ],
  },
  {
    id: 10,
    text: "Selamat! Anda telah menyelesaikan petualangan ini.",
    options: [],
  },
];

function startGame() {
    // Set karakter pemain dan monster
    const playerElement = document.getElementById("player");
    const monsterElement = document.getElementById("monster");
  
    // Mengatur gambar karakter pemain dan monster sesuai dengan ukuran kontainer
    playerElement.style.backgroundSize = "100% 100%";
    monsterElement.style.backgroundSize = "100% 100%";
  
    showStory(1);
  }

function showStory(storyId) {
  const currentStory = story.find((s) => s.id === storyId);
  const currentOptions = currentStory.options;

  let storyText = currentStory.text;
  if (currentStory.id === 2) {
    storyText = storyText.replace("[name]", player.name);
  }

  storyElement.textContent = storyText;
  clearOptions();

  if (currentOptions.length === 0) {
    return;
  }

  currentOptions.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.addEventListener("click", () => handleOptionClick(option.nextId));
    optionsElement.appendChild(button);
  });
}

function clearOptions() {
  optionsElement.innerHTML = "";
}

function handleOptionClick(nextId) {
  showStory(nextId);
}

startGame();
