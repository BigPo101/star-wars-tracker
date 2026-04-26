const starWarsList = [
  "The Acolyte",
  "Episode I – The Phantom Menace",
  "Episode II – Attack of the Clones",
  "The Clone Wars",
  "Episode III – Revenge of the Sith",
  "The Bad Batch",
  "Solo",
  "Obi-Wan Kenobi",
  "Rebels",
  "Andor",
  "Rogue One",
  "Episode IV – A New Hope",
  "Episode V – The Empire Strikes Back",
  "Episode VI – Return of the Jedi",
  "The Mandalorian",
  "The Book of Boba Fett",
  "Ahsoka",
  "Episode VII – The Force Awakens",
  "Episode VIII – The Last Jedi",
  "Episode IX – The Rise of Skywalker"
];

const listDiv = document.getElementById("list");

// Load saved progress
let watched = JSON.parse(localStorage.getItem("watched")) || [];

starWarsList.forEach((item, index) => {
  const div = document.createElement("div");
  div.classList.add("item");

  if (watched.includes(index)) {
    div.classList.add("watched");
  }

  div.textContent = item;

  div.addEventListener("click", () => {
    if (watched.includes(index)) {
      watched = watched.filter(i => i !== index);
      div.classList.remove("watched");
    } else {
      watched.push(index);
      div.classList.add("watched");
    }

    localStorage.setItem("watched", JSON.stringify(watched));
  });

  listDiv.appendChild(div);
});
