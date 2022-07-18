"use strict";
const createMenu = () => {
  const menu = document.createElement("div");
  menu.classList.add("menu");

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
    pizzaImage.src = `./images/${name.toLowerCase()}.jpg`;
    pizzaImage.alt = `Pizza ${name}`;

    pizzaInfo.appendChild(pizzaName);
    pizzaInfo.appendChild(pizzaDescription);

    pizzaCard.appendChild(pizzaImage);
    pizzaCard.appendChild(pizzaInfo);

    return pizzaCard;
  };

  menu.appendChild(
    createPizzaCard("Margharita", "Tomato sauce, cheese, oregano")
  );
  menu.appendChild(createPizzaCard("Vesuvio", "Tomato sauce, cheese, ham"));
  menu.appendChild(
    createPizzaCard("Capriciossa", "Tomato sauce, cheese, ham, oregano")
  );
  menu.appendChild(
    createPizzaCard("Prosciutto", "Tomato sauce, cheese, ham, arugula, oregano")
  );
  menu.appendChild(
    createPizzaCard("Havai", "Tomato sauce, cheese, ham, pineapple, oregano")
  );
  menu.appendChild(
    createPizzaCard(
      "Amore",
      "Tomato sauce, cheese, chicken, arugula, cherry tomato"
    )
  );

  return menu;
};

const loadMenu = () => {
  const main = document.querySelector("#main");

  main.appendChild(createMenu());
};

export default loadMenu;
