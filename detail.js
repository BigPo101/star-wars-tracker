let data = JSON.parse(localStorage.getItem("progress"));
let selected = localStorage.getItem("selected");

let item = data.find(d => d.id == selected);

document.getElementById("title").textContent = item.title;
document.getElementById("description").textContent = item.description;

const content = document.getElementById("content");

// MOVIE VIEW
if (item.type === "movie") {
  const status = document.createElement("p");
  status.textContent = item.watched ? "Watched" : "Not Watched";
  content.appendChild(status);
}

// SHOW VIEW
else {
  item.seasons.forEach((count, sIndex) => {
    const seasonDiv = document.createElement("div");
    seasonDiv.innerHTML = `<h3>Season ${sIndex + 1}</h3>`;

    for (let e = 1; e <= count; e++) {
      const ep = document.createElement("span");
      ep.textContent = `E${e} `;
      seasonDiv.appendChild(ep);
    }

    content.appendChild(seasonDiv);
  });

  const current = document.createElement("p");
  current.textContent = `Current: Season ${item.season}, Episode ${item.episode}`;
  content.appendChild(current);
}
