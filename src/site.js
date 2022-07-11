"use strict";
const initializeWebsite = (() => {
  const content = document.querySelector("#content");

  const createHeader = () => {
    const header = document.createElement("header");
    header.classList.add("header");

    const title = document.createElement("h1");
    title.classList.add("header-title");
    title.textContent = "Pizzeria";

    header.appendChild(title);
    header.appendChild(createNav());

    return header;
  };

  const createNav = () => {
    const nav = document.createElement("nav");
    nav.classList.add("nav");

    nav.appendChild(createButton("Home"));
    nav.appendChild(createButton("Menu"));
    nav.appendChild(createButton("Contact"));

    return nav;
  };

  const createButton = (name) => {
    const button = document.createElement("button");
    button.classList.add("nav-button");
    button.textContent = name;

    button.addEventListener("click", () => {
      console.log("Clicked " + name);
    });

    return button;
  };

  const createMain = () => {
    const main = document.createElement("main");
    main.setAttribute("id", "main");
    main.classList.add("main");

    const description = document.createElement("p");
    description.textContent = "I am main";

    main.appendChild(description);

    return main;
  };

  const createFooter = () => {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const title = document.createElement("p");
    title.classList.add("footer-title");
    title.textContent = "Made by VeejayPL";

    footer.appendChild(title);

    return footer;
  };

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  return { content };
})();

export default initializeWebsite;
