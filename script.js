let data = [
  {
    id: 1,
    title: "The Phantom Menace",
    type: "movie",
    poster: "https://upload.wikimedia.org/wikipedia/en/4/4f/Star_Wars_Phantom_Menace_poster.jpg",
    description: "The Jedi discover Anakin Skywalker, a child with extraordinary Force sensitivity. As political tensions rise, a hidden Sith threat begins to emerge.",
    watched: false
  },
  {
    id: 2,
    title: "Attack of the Clones",
    type: "movie",
    poster: "https://upload.wikimedia.org/wikipedia/en/5/5d/Attack_of_the_Clones_poster.jpg",
    description: "The galaxy edges toward war as the Clone Army is revealed. Anakin struggles with attachment and fear, setting the stage for the coming darkness.",
    watched: false
  },
  {
    id: 3,
    title: "The Clone Wars",
    type: "show",
    poster: "https://upload.wikimedia.org/wikipedia/en/6/6c/Star_Wars_The_Clone_Wars_poster.jpg",
    description: "The Clone Wars rage across the galaxy. Jedi generals lead armies while facing moral conflict, political manipulation, and the rise of the Sith.",
    seasons: [22,22,22,22,20,13,12],
    season: 3,
    episode: 5
  },
  {
    id: 4,
    title: "Revenge of the Sith",
    type: "movie",
    poster: "https://upload.wikimedia.org/wikipedia/en/5/5f/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg",
    description: "Anakin Skywalker is seduced by Darth Sidious and becomes Darth Vader, leading to the fall of the Jedi Order and the rise of the Galactic Empire.",
    watched: true
  },
  {
    id: 5,
    title: "The Mandalorian",
    type: "show",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/cb/The_Mandalorian_season_1_poster.jpg",
    description: "A lone bounty hunter travels the outer rim of the galaxy, protecting a mysterious child named Grogu while remnants of the Empire attempt to rebuild power.",
    seasons: [8,8,8],
    season: 1,
    episode: 2
  }
];

localStorage.setItem("data", JSON.stringify(data));

const grid = document.getElementById("grid");

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
