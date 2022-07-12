const createContact = () => {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const check = document.createElement("p");
  check.textContent = "Contact";

  contact.appendChild(check);

  return contact;
};

const loadContact = () => {
  const main = document.querySelector("#main");

  main.appendChild(createContact());
};

export default loadContact;
