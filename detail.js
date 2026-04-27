let data = JSON.parse(localStorage.getItem("data"));
let id = localStorage.getItem("selected");

let item = data.find(d => d.id == id);

document.getElementById("poster").src = item.poster;
document.getElementById("title").textContent = item.title;
document.getElementById("desc").textContent = item.description;

const extra = document.getElementById("extra");

if (item.type === "movie") {
  extra.innerHTML = `<h3>Status: ${item.watched ? "Watched" : "Not Watched"}</h3>`;
} else {
  extra.innerHTML = `<h3>Current: S${item.season} E${item.episode}</h3>`;

  item.seasons.forEach((eps, i) => {
    let div = document.createElement("div");
    div.innerHTML = `<h4>Season ${i+1}</h4>Episodes: ${eps}`;
    extra.appendChild(div);
  });
}
