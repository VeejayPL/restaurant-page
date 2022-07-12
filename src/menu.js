"use strict";
const createMenu = () => {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const check = document.createElement("p");
  check.textContent = "Menu";

  const createPizzaCard = (name, info) => {
    const pizzaCard = document.createElement("div");
    pizzaCard.classList.add("menu-card");

    const pizzaInfo = document.createElement("div");
    pizzaInfo.classList.add("card-info");

    const pizzaName = document.createElement("h2");
    pizzaName.classList.add("card-title");
    pizzaName.textContent = name;

    const pizzaDescription = document.createElement("p");
    pizzaDescription.classList.add("card-description");
    pizzaDescription.textContent = info;

    const pizzaImage = document.createElement("img");
    pizzaImage.classList.add("card-image");
    pizzaImage.src = `./images/${name}.png`;
    pizzaImage.alt = `Pizza ${name}`;

    pizzaInfo.appendChild(pizzaName);
    pizzaInfo.appendChild(pizzaDescription);

    pizzaCard.appendChild(pizzaImage);
    pizzaCard.appendChild(pizzaInfo);

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
