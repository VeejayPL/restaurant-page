"use strict";
const createHome = () => {
  const home = document.createElement("div");
  home.classList.add("home");

  const info = document.createElement("div");
  info.classList.add("home-info");

  const hours = document.createElement("div");
  hours.classList.add("home-hours");

  const setActiveClass = () => hours.classList.add("active");
  setTimeout(setActiveClass, 100);

  hours.appendChild(addText("7 DAYS A WEEK", "p"));
  hours.appendChild(addText("4PM - 9PM", "p"));
  hours.appendChild(addText("DINE-IN", "p"));

  info.appendChild(
    fadeInText(
      "RISTORANTE PIZZA & WINE. Sandwiches, provisions, wine shop, and more.",
      "p",
      25
    )
  );

  home.appendChild(info);
  home.appendChild(hours);

  return home;
};

const fadeInText = (text, element, speed) => {
  const paragraph = document.createElement(element);
  paragraph.classList.add(`${element}-animated`);

  const characters = Array.from(text);

  characters.forEach((character, index) => {
    const span = document.createElement("span");
    span.textContent = characters[index];
    span.style.animationDelay = `${index * speed}ms`;
    paragraph.appendChild(span);
  });

  const removeSpanTag = () => {
    paragraph.textContent = text;
  };

  setTimeout(removeSpanTag, 4000);

  return paragraph;
};

const addText = (text, element) => {
  const paragraph = document.createElement(element);
  paragraph.textContent = text;

  return paragraph;
};

const loadHome = () => {
  const main = document.querySelector("#main");

  main.appendChild(createHome());
};

export default loadHome;
