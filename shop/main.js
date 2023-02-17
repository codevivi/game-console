const gamesListEl = document.getElementById("games-list");

games.forEach((game) => {
  gamesListEl.appendChild(createGameListItem(game.name, `${game.price}€`, game.imgSrc));
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
  li.appendChild(imgEl);
  li.appendChild(priceEl);
  return li;
}
