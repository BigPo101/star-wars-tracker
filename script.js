// 🔒 SIMPLE PASSWORD (change this)
const PASSWORD = "jedi123";

let isOwner = false;

// Ask for password
const input = prompt("Enter password to edit progress (or cancel for view only):");
if (input === PASSWORD) {
  isOwner = true;
}

// 📦 DATA (you can expand this later)
const starWars = [
  { title: "The Acolyte", type: "show", season: 1, episode: 1 },
  { title: "Episode I – The Phantom Menace", type: "movie", watched: false },
  { title: "Episode II – Attack of the Clones", type: "movie", watched: false },
  { title: "The Clone Wars", type: "show", season: 1, episode: 1 },
  { title: "Episode III – Revenge of the Sith", type: "movie", watched: false },
  { title: "The Bad Batch", type: "show", season: 1, episode: 1 },
  { title: "Solo", type: "movie", watched: false },
  { title: "Obi-Wan Kenobi", type: "show", season: 1, episode: 1 },
  { title: "Rebels", type: "show", season: 1, episode: 1 },
  { title: "Andor", type: "show", season: 1, episode: 1 },
  { title: "Rogue One", type: "movie", watched: false },
  { title: "Episode IV – A New Hope", type: "movie", watched: false },
  { title: "Episode V – The Empire Strikes Back", type: "movie", watched: false },
  { title: "Episode VI – Return of the Jedi", type: "movie", watched: false },
  { title: "The Mandalorian", type: "show", season: 1, episode: 1 },
  { title: "The Book of Boba Fett", type: "show", season: 1, episode: 1 },
  { title: "Ahsoka", type: "show", season: 1, episode: 1 },
  { title: "Episode VII – The Force Awakens", type: "movie", watched: false },
  { title: "Episode VIII – The Last Jedi", type: "movie", watched: false },
  { title: "Episode IX – The Rise of Skywalker", type: "movie", watched: false }
];

// 📥 Load saved progress
let saved = JSON.parse(localStorage.getItem("progress"));
if (saved) {
  saved.forEach((s, i) => {
    starWars[i] = s;
  });
}

const grid = document.getElementById("grid");

// 🎬 Build UI
starWars.forEach((item, index) => {
  const card = document.createElement("div");
  card.classList.add("card");

  if (item.watched) {
    card.classList.add("watched");
  }

  card.innerHTML = `
    <h3>${item.title}</h3>
    <div class="progress">
      ${item.type === "show"
        ? `Season ${item.season}, Episode ${item.episode}`
        : (item.watched ? "Watched" : "Not Watched")}
    </div>
  `;

  // 🎮 CLICK FUNCTION
  card.addEventListener("click", () => {
    if (!isOwner) return; // 🔒 viewers can't edit

    if (item.type === "movie") {
      item.watched = !item.watched;
      card.classList.toggle("watched");
    } else {
      item.episode++;

      // simple episode reset logic
      if (item.episode > 10) {
        item.episode = 1;
        item.season++;
      }
    }

    // Update text
    card.querySelector(".progress").textContent =
      item.type === "show"
        ? `Season ${item.season}, Episode ${item.episode}`
        : (item.watched ? "Watched" : "Not Watched");

    // 💾 Save progress
    localStorage.setItem("progress", JSON.stringify(starWars));
  });

  grid.appendChild(card);
});
