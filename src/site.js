"use strict";

import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

const initializeWebsite = (() => {
  const content = document.querySelector("#content");

  const createHeader = () => {
    const header = document.createElement("header");
    header.classList.add("header");

    const title = document.createElement("h1");
    title.classList.add("header-title");
    title.textContent = "Ristorante";
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

  const createButton = (section) => {
    const button = document.createElement("button");
    button.classList.add("nav-button");
    button.textContent = section;

    button.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) return;
      main.textContent = "";
      if (section === "Home") {
        setActiveSection("Home");
        loadHome();
      }
      if (section === "Menu") {
        setActiveSection("Menu");
        loadMenu();
      }
      if (section === "Contact") {
        setActiveSection("Contact");
        loadContact();
      }
    });

    return button;
  };

  const setActiveSection = (section) => {
    const buttons = document.querySelectorAll(".nav-button");

    buttons.forEach((button) => {
      if (button.textContent !== section) {
        button.classList.remove("active");
      } else {
        button.classList.add("active");
      }
    });
  };

  const createMain = () => {
    const main = document.createElement("main");
    main.setAttribute("id", "main");
    main.classList.add("main");

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

  setActiveSection("Home");
  loadHome();
})();

export default initializeWebsite;
