// ⭐ EDIT YOUR PROGRESS HERE
let data = [
  {
    id: 0,
    title: "The Clone Wars",
    type: "show",
    description: "Animated series set during the Clone Wars.",
    poster: "https://upload.wikimedia.org/wikipedia/en/6/6c/Star_Wars_The_Clone_Wars_poster.jpg",
    seasons: [22,22,22,22,20,13,12],

    // 🔥 CHANGE THESE
    season: 3,
    episode: 5
  },
  {
    id: 1,
    title: "Revenge of the Sith",
    type: "movie",
    description: "Anakin becomes Darth Vader.",
    poster: "https://upload.wikimedia.org/wikipedia/en/5/5f/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg",

    // 🔥 CHANGE THIS
    watched: true
  },
  {
    id: 2,
    title: "The Mandalorian",
    type: "show",
    description: "A bounty hunter travels the galaxy.",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/cb/The_Mandalorian_season_1_poster.jpg",
    seasons: [8,8,8],

    // 🔥 CHANGE THESE
    season: 1,
    episode: 2
  }
];

// SAVE DATA
localStorage.setItem("progress", JSON.stringify(data));

const grid = document.getElementById("grid");

// BUILD CARDS
data.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${item.poster}" class="poster">
    <h3>${item.title}</h3>
    <div class="progress">
      ${
        item.type === "show"
          ? `S${item.season} E${item.episode}`
          : (item.watched ? "Watched" : "Not Watched")
      }
    </div>
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

let percent = (completed / total) * 100;
document.getElementById("progressBar").style.width = percent + "%";
