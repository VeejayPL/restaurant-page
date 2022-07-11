const loadHome = () => {
  const main = document.querySelector("#main");
  const check = document.createElement("p");
  check.textContent = "Home";

  main.appendChild(check);
};

export default loadHome;
