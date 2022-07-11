const loadContact = () => {
  const main = document.querySelector("#main");
  const check = document.createElement("p");
  check.textContent = "Contact";

  main.appendChild(check);
};

export default loadContact;
