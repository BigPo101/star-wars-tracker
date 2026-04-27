let data = [
  {
    id: 1,
    title: "The Clone Wars",
    type: "show",
    poster: "https://upload.wikimedia.org/wikipedia/en/6/6c/Star_Wars_The_Clone_Wars_poster.jpg",
    description: "An animated series exploring the Clone Wars between the Republic and Separatists. It follows Anakin Skywalker, Obi-Wan Kenobi, and Ahsoka Tano as they face moral conflict, war, and the rising influence of the Sith.",
    seasons: [22,22,22,22,20,13,12],
    season: 3,
    episode: 5
  },
  {
    id: 2,
    title: "Revenge of the Sith",
    type: "movie",
    poster: "https://upload.wikimedia.org/wikipedia/en/5/5f/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg",
    description: "As the Clone Wars reach their end, Anakin Skywalker is seduced by the dark side of the Force and becomes Darth Vader, leading to the fall of the Jedi Order and the rise of the Galactic Empire.",
    watched: true
  },
  {
    id: 3,
    title: "The Mandalorian",
    type: "show",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/cb/The_Mandalorian_season_1_poster.jpg",
    description: "A lone bounty hunter travels the outer rim of the galaxy, discovering a mysterious child known as Grogu. Their journey explores survival, honor, and the remnants of the fallen Empire.",
    seasons: [8,8,8],
    season: 1,
    episode: 2
  }
];

const grid = document.getElementById("grid");

// CARDS
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
    <div class="desc">${item.description}</div>
  `;

  card.onclick = () => {
    localStorage.setItem("selected", item.id);
    localStorage.setItem("data", JSON.stringify(data));
    window.location.href = "detail.html";
  };

  grid.appendChild(card);
});

// progress bar
let total = data.length;
let done = data.filter(i =>
  i.type === "movie" ? i.watched : i.season > 1
).length;

document.getElementById("progressBar").style.width =
  (done / total) * 100 + "%";
