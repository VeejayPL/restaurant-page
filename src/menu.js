const createMenu = () => {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const check = document.createElement("p");
  check.textContent = "Menu";

  const createPizzaCard = (name, info) => {
    const pizzaCard = document.createElement("div");
    pizzaCard.classList.add("menu-card");

    const pizzaName = document.createElement("p");
    pizzaName.classList.add("card-title");
    pizzaName.textContent = name;

    const pizzaInfo = document.createElement("p");
    pizzaInfo.classList.add("card-description");
    pizzaInfo.textContent = info;

    pizzaCard.appendChild(pizzaName);
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
