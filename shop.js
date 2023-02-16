const games = [
  {
    name: "Screeps: World",
    price: "14.99",
    imgSrc: "./img/games/screeps.png",
  },
  {
    name: "The Talos Principle",
    price: "24.99",
    imgSrc: "./img/games/talos.png",
  },
  {
    name: "Rust",
    price: "34.99",
    imgSrc: "./img/games/rust.png",
  },
  {
    name: "The Long Dark",
    price: "27.79",
    imgSrc: "./img/games/dark.png",
  },
  {
    name: "Sid Meier's Civilization® IV",
    price: "9.99",
    imgSrc: "./img/games/civ.png",
  },
  {
    name: "Kerbal Space Program",
    price: "29.99",
    imgSrc: "./img/games/kerbal.png",
  },
];
const gamesListEl = document.getElementById("games-list");

games.forEach((game) => {
  gamesListEl.appendChild(createGameListItem(game.name, game.price, game.imgSrc));
});

function createGameListItem(name, price, imgSrc) {
  let li = document.createElement("li");
  let nameEl = document.createElement("p");
  let nameText = document.createTextNode(name);
  nameEl.classList.add("name");
  nameEl.appendChild(nameText);
  let priceEl = document.createElement("p");
  let priceText = document.createTextNode(price);
  priceEl.classList.add("price");
  priceEl.appendChild(priceText);
  let imgEl = document.createElement("img");
  imgEl.classList.add("thumb");
  imgEl.setAttribute("src", imgSrc);
  li.appendChild(nameEl);
  li.appendChild(priceEl);
  li.appendChild(imgEl);
  return li;
}
