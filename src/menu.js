"use strict";
const createMenu = () => {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const check = document.createElement("p");
  check.textContent = "Menu";

  const createPizzaCard = (name, info) => {
    const pizzaCard = document.createElement("div");
    pizzaCard.classList.add("menu-card");

    const pizzaName = document.createElement("h2");
    pizzaName.classList.add("card-title");
    pizzaName.textContent = name;

    const pizzaInfo = document.createElement("p");
    pizzaInfo.classList.add("card-description");
    pizzaInfo.textContent = info;

    const pizzaImage = document.createElement("img");
    pizzaImage.classList.add("card-image");
    pizzaImage.src = `./images/${name}.png`;
    pizzaImage.alt = `Pizza ${name}`;

    pizzaCard.appendChild(pizzaName);
    pizzaCard.appendChild(pizzaInfo);
    pizzaCard.appendChild(pizzaImage);

    return pizzaCard;
  };

  menu.appendChild(
    createPizzaCard("Margharita", "Just a dough with pomodoro sauce")
  );
  menu.appendChild(
    createPizzaCard("Margharita", "Just a dough with pomodoro sauce")
  );
  menu.appendChild(
    createPizzaCard("Margharita", "Just a dough with pomodoro sauce")
  );
  menu.appendChild(
    createPizzaCard("Margharita", "Just a dough with pomodoro sauce")
  );

  return menu;
};

const loadMenu = () => {
  const main = document.querySelector("#main");

  main.appendChild(createMenu());
};

export default loadMenu;
