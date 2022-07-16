"use strict";
const createHome = () => {
  const home = document.createElement("div");
  home.classList.add("home");

  home.appendChild(fadeInText("Kocham Asie jak pizze z frontiery", "p", 50));

  return home;
};

const fadeInText = (text, element, speed) => {
  const paragraph = document.createElement(element);

  const characters = Array.from(text);
  console.log(characters);

  characters.forEach((character, index) => {
    const span = document.createElement("span");
    span.textContent = characters[index];
    span.style.animationDelay = `${index * speed}ms`;
    paragraph.appendChild(span);
  });

  const removeSpanTag = () => {
    paragraph.textContent = text;
  };
  setTimeout(removeSpanTag, 3000);
  return paragraph;
};

const loadHome = () => {
  const main = document.querySelector("#main");

  main.appendChild(createHome());
};

export default loadHome;
