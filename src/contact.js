const createContact = () => {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const header = document.createElement("h3");
  header.classList.add("contact-header");
  header.textContent = "Make your reservation!";

  const form = document.createElement("div");
  form.classList.add("contact-form");

  const submitButton = document.createElement("button");
  submitButton.classList.add("contact-button");
  submitButton.textContent = "Book table";
  submitButton.addEventListener("click", () => {
    const fields = document.querySelectorAll(".contact-input");

    if (checkFields(fields) === true) {
      alertField.textContent = "Please fill in all fields.";
    } else {
      alertField.textContent = "Your request has been sent. Thank you!";
      clearFields(fields);
    }
  });

  const alertField = document.createElement("p");
  alertField.textContent = "Please fill in all fields.";
  alertField.classList.add("contact-alert");

  form.appendChild(createLabel("first-name", "First name: "));
  form.appendChild(createInput("text", "firstName", "first-name"));

  form.appendChild(createLabel("last-name", "Last name: "));
  form.appendChild(createInput("text", "lastName", "last-name"));

  form.appendChild(createLabel("email", "E-mail: "));
  form.appendChild(createInput("email", "email", "email"));

  form.appendChild(createLabel("phone-number", "Phone: "));
  form.appendChild(createInput("tel", "phoneNumber", "phone-number"));

  contact.appendChild(header);
  contact.appendChild(form);
  contact.appendChild(submitButton);
  contact.appendChild(alertField);

  return contact;
};

const createInput = (type, name, id) => {
  const field = document.createElement("input");
  field.classList.add("contact-input");

  field.setAttribute("type", `${type}`);
  field.setAttribute("name", `${name}`);
  field.setAttribute("id", `${id}`);

  return field;
};

const createLabel = (inputID, text) => {
  const label = document.createElement("label");
  label.classList.add("contact-label");

  label.setAttribute("for", `${inputID}`);
  label.textContent = text;

  return label;
};

const clearFields = (fields) => {
  fields.forEach((field) => (field.value = ""));
};

const checkFields = (fields) => {
  const inputFields = Array.from(fields);
  return inputFields.some((field) => field.value === "");
};

const loadContact = () => {
  const main = document.querySelector("#main");

  main.appendChild(createContact());
};

export default loadContact;
