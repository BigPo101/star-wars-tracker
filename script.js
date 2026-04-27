let data = [
  {
    id: 0,
    title: "The Acolyte",
    type: "show",
    poster: "https://upload.wikimedia.org/wikipedia/en/3/3e/The_Acolyte_poster.jpg",
    description: "Set in the High Republic era, The Acolyte explores a dark mystery involving a former Padawan and a Jedi Master as tensions rise within the Order. The series dives into the early roots of the Sith and the growing corruption hidden beneath the surface of the Jedi’s golden age.",
    seasons: [8],
    season: 1,
    episode: 1
  },
  {
    id: 1,
    title: "The Phantom Menace",
    type: "movie",
    poster: "https://upload.wikimedia.org/wikipedia/en/4/4f/Star_Wars_Phantom_Menace_poster.jpg",
    description: "The Jedi discover young Anakin Skywalker, a boy with extraordinary Force potential. Meanwhile, the Sith re-emerge after centuries in hiding, and political tensions threaten the Republic.",
    watched: false
  },
  {
    id: 2,
    title: "Attack of the Clones",
    type: "movie",
    poster: "https://upload.wikimedia.org/wikipedia/en/5/5d/Attack_of_the_Clones_poster.jpg",
    description: "As the galaxy teeters on the brink of war, Jedi Knight Anakin Skywalker grows increasingly conflicted. The Clone Wars begin to take shape in the shadows of political manipulation.",
    watched: false
  },
  {
    id: 3,
    title: "The Clone Wars",
    type: "show",
    poster: "https://upload.wikimedia.org/wikipedia/en/6/6c/Star_Wars_The_Clone_Wars_poster.jpg",
    description: "An animated series following the brutal Clone Wars between the Republic and Separatists. It explores Anakin, Obi-Wan, and Ahsoka as they face moral struggles and the growing influence of the dark side.",
    seasons: [22,22,22,22,20,13,12],
    season: 1,
    episode: 1
  },
  {
    id: 4,
    title: "Revenge of the Sith",
    type: "movie",
    poster: "https://upload.wikimedia.org/wikipedia/en/5/5f/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg",
    description: "The Clone Wars reach their devastating conclusion. Anakin Skywalker is seduced by Darth Sidious and transforms into Darth Vader, bringing about the fall of the Jedi Order.",
    watched: false
  },
  {
    id: 5,
    title: "The Mandalorian",
    type: "show",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/cb/The_Mandalorian_season_1_poster.jpg",
    description: "A lone bounty hunter in the outer reaches of the galaxy takes on a mysterious child known as Grogu. Their journey explores honor, survival, and the remnants of the fallen Empire.",
    seasons: [8,8,8],
    season: 1,
    episode: 1
  }
];

// SAVE
localStorage.setItem("data", JSON.stringify(data));

const grid = document.getElementById("grid");

// BUILD CARDS
data.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${item.poster}" class="poster">
    <h3>${item.title}</h3>
    <div class="progress">
      ${item.type === "show"
        ? `S${item.season} E${item.episode}`
        : (item.watched ? "Watched" : "Not Watched")}
    </div>
    <div class="desc">${item.description.substring(0, 120)}...</div>
  `;

  card.onclick = () => {
    localStorage.setItem("selected", item.id);
    window.location.href = "detail.html";
  };

  grid.appendChild(card);
});

// PROGRESS BAR
let total = data.length;
let completed = 0;

data.forEach(item => {
  if (item.type === "movie" && item.watched) completed++;
  if (item.type === "show" && (item.season > 1 || item.episode > 1)) completed++;
});

document.getElementById("progressBar").style.width =
  (completed / total) * 100 + "%";
