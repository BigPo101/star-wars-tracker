let data = JSON.parse(localStorage.getItem("data"));
let id = localStorage.getItem("selected");

let item = data.find(d => d.id == id);

document.body.innerHTML = `
  <div style="max-width:900px;margin:auto;padding:30px;">
    
    <img src="${item.poster}" style="
      width:100%;
      border-radius:16px;
      box-shadow:0 0 40px rgba(255,232,31,0.2);
    ">

    <h1 style="text-align:center;margin-top:20px;">
      ${item.title}
    </h1>

    <p style="color:#bbb;line-height:1.6;">
      ${item.description}
    </p>

    <div style="margin-top:20px;">
      ${
        item.type === "movie"
        ? `<h3>Status: ${item.watched ? "Watched" : "Not Watched"}</h3>`
        : `<h3>Current: S${item.season} E${item.episode}</h3>`
      }
    </div>

    <br>
    <a href="index.html" style="color:#ffe81f;">← Back</a>
  </div>
`;
