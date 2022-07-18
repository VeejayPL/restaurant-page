const createContact = () => {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const submitButton = document.createElement("button");
  submitButton.classList.add("contact-button");
  submitButton.textContent = "Book table";
  submitButton.addEventListener(
    "click",
    () => (alertField.textContent = "Your request has been sent. Thank you")
  );

  const alertField = document.createElement("p");
  alertField.classList.add("contact-alert");

  contact.appendChild(createLabel("first-name", "First name: "));
  contact.appendChild(createInput("text", "firstName", "first-name"));

  contact.appendChild(createLabel("last-name", "Last name: "));
  contact.appendChild(createInput("text", "lastName", "last-name"));

  contact.appendChild(createLabel("email", "E-mail: "));
  contact.appendChild(createInput("email", "email", "email"));

  contact.appendChild(createLabel("phone-number", "Phone: "));
  contact.appendChild(createInput("tel", "phoneNumber", "phone-number"));

  contact.appendChild(submitButton);
  contact.appendChild(alertField);

  return contact;
};

const createInput = (type, name, id) => {
  const field = document.createElement("input");

  field.setAttribute("type", `${type}`);
  field.setAttribute("name", `${name}`);
  field.setAttribute("id", `${id}`);

  return field;
};

const createLabel = (inputID, text) => {
  const label = document.createElement("label");

  label.setAttribute("for", `${inputID}`);
  label.textContent = text;

  return label;
};

const loadContact = () => {
  const main = document.querySelector("#main");

  main.appendChild(createContact());
};

export default loadContact;
