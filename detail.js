let data = JSON.parse(localStorage.getItem("data"));
let id = localStorage.getItem("selected");

let item = data.find(d => d.id == id);

document.getElementById("title").textContent = item.title;
document.getElementById("description").textContent = item.description;

const content = document.getElementById("content");

// MOVIE
if (item.type === "movie") {
  content.innerHTML = `<h3>Status: ${item.watched ? "Watched" : "Not Watched"}</h3>`;
}

// SHOW
else {
  item.seasons.forEach((eps, sIndex) => {
    const season = document.createElement("div");
    season.innerHTML = `<h3>Season ${sIndex + 1}</h3>`;

    for (let i = 1; i <= eps; i++) {
      season.innerHTML += `E${i} `;
    }

    content.appendChild(season);
  });

  content.innerHTML += `<p>Current: S${item.season} E${item.episode}</p>`;
}
