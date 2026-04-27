let data = JSON.parse(localStorage.getItem("data"));
let id = localStorage.getItem("selected");

let item = data.find(d => d.id == id);

document.getElementById("detailRoot").innerHTML = `
  <div class="detailPage">

    <div class="hero">
      <img src="${item.poster}">
      <div class="heroOverlay"></div>

      <div class="heroText">
        <h1>${item.title}</h1>
      </div>
    </div>

    <div class="content">
      <p>${item.description}</p>

      <h3>
        ${
          item.type === "movie"
            ? "Movie Status: " + (item.watched ? "Watched" : "Not Watched")
            : `Current: S${item.season} E${item.episode}`
        }
      </h3>

      <br>
      <a class="back" href="index.html">← Back</a>
    </div>

  </div>
`;
