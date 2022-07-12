const createHome = () => {
  const home = document.createElement("div");
  home.classList.add("home");

  const check = document.createElement("p");
  check.textContent = "Home";

  home.appendChild(check);

  return home;
};

const loadHome = () => {
  const main = document.querySelector("#main");

  main.appendChild(createHome());
};

export default loadHome;
