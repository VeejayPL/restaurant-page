const loadMenu = () => {
  const main = document.querySelector("#main");
  const menu = document.createElement("p");
  menu.textContent = "Menu";

  main.appendChild(menu);
};

export default loadMenu;
