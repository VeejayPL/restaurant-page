/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const createMenu = () => {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const createPizzaCard = (name, info) => {
    const pizzaCard = document.createElement("div");
    pizzaCard.classList.add("menu-card");

    const pizzaInfo = document.createElement("div");
    pizzaInfo.classList.add("card-info");

    const pizzaName = document.createElement("h2");
    pizzaName.classList.add("card-title");
    pizzaName.textContent = name;

    const pizzaDescription = document.createElement("p");
    pizzaDescription.classList.add("card-description");
    pizzaDescription.textContent = info;

    const pizzaImage = document.createElement("img");
    pizzaImage.classList.add("card-image");
    pizzaImage.src = `./images/${name.toLowerCase()}.jpg`;
    pizzaImage.alt = `Pizza ${name}`;

    pizzaInfo.appendChild(pizzaName);
    pizzaInfo.appendChild(pizzaDescription);

    pizzaCard.appendChild(pizzaImage);
    pizzaCard.appendChild(pizzaInfo);

    return pizzaCard;
  };

  menu.appendChild(
    createPizzaCard("Margharita", "Tomato sauce, cheese, oregano")
  );
  menu.appendChild(createPizzaCard("Vesuvio", "Tomato sauce, cheese, ham"));
  menu.appendChild(
    createPizzaCard("Capriciossa", "Tomato sauce, cheese, ham, oregano")
  );
  menu.appendChild(
    createPizzaCard("Prosciutto", "Tomato sauce, cheese, ham, arugula, oregano")
  );
  menu.appendChild(
    createPizzaCard("Havai", "Tomato sauce, cheese, ham, pineapple, oregano")
  );
  menu.appendChild(
    createPizzaCard(
      "Amore",
      "Tomato sauce, cheese, chicken, arugula, cherry tomato"
    )
  );

  return menu;
};

const loadMenu = () => {
  const main = document.querySelector("#main");

  main.appendChild(createMenu());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);


/***/ }),

/***/ "./src/site.js":
/*!*********************!*\
  !*** ./src/site.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");






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
        (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
      }
      if (section === "Menu") {
        setActiveSection("Menu");
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
      }
      if (section === "Contact") {
        setActiveSection("Contact");
        (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
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
  (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site */ "./src/site.js");


_site__WEBPACK_IMPORTED_MODULE_0__["default"];

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOdUM7O0FBRXZDLDZDQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zaXRlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVDb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1oZWFkZXJcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiTWFrZSB5b3VyIHJlc2VydmF0aW9uIVwiO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWZvcm1cIik7XG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWJ1dHRvblwiKTtcbiAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJCb29rIHRhYmxlXCI7XG4gIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29udGFjdC1pbnB1dFwiKTtcblxuICAgIGlmIChjaGVja0ZpZWxkcyhmaWVsZHMpID09PSB0cnVlKSB7XG4gICAgICBhbGVydEZpZWxkLnRleHRDb250ZW50ID0gXCJQbGVhc2UgZmlsbCBpbiBhbGwgZmllbGRzLlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydEZpZWxkLnRleHRDb250ZW50ID0gXCJZb3VyIHJlcXVlc3QgaGFzIGJlZW4gc2VudC4gVGhhbmsgeW91IVwiO1xuICAgICAgY2xlYXJGaWVsZHMoZmllbGRzKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGFsZXJ0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgYWxlcnRGaWVsZC50ZXh0Q29udGVudCA9IFwiUGxlYXNlIGZpbGwgaW4gYWxsIGZpZWxkcy5cIjtcbiAgYWxlcnRGaWVsZC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1hbGVydFwiKTtcblxuICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKFwiZmlyc3QtbmFtZVwiLCBcIkZpcnN0IG5hbWU6IFwiKSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlSW5wdXQoXCJ0ZXh0XCIsIFwiZmlyc3ROYW1lXCIsIFwiZmlyc3QtbmFtZVwiKSk7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbChcImxhc3QtbmFtZVwiLCBcIkxhc3QgbmFtZTogXCIpKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVJbnB1dChcInRleHRcIiwgXCJsYXN0TmFtZVwiLCBcImxhc3QtbmFtZVwiKSk7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbChcImVtYWlsXCIsIFwiRS1tYWlsOiBcIikpO1xuICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUlucHV0KFwiZW1haWxcIiwgXCJlbWFpbFwiLCBcImVtYWlsXCIpKTtcblxuICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKFwicGhvbmUtbnVtYmVyXCIsIFwiUGhvbmU6IFwiKSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlSW5wdXQoXCJ0ZWxcIiwgXCJwaG9uZU51bWJlclwiLCBcInBob25lLW51bWJlclwiKSk7XG5cbiAgY29udGFjdC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGZvcm0pO1xuICBjb250YWN0LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoYWxlcnRGaWVsZCk7XG5cbiAgcmV0dXJuIGNvbnRhY3Q7XG59O1xuXG5jb25zdCBjcmVhdGVJbnB1dCA9ICh0eXBlLCBuYW1lLCBpZCkgPT4ge1xuICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZmllbGQuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaW5wdXRcIik7XG5cbiAgZmllbGQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBgJHt0eXBlfWApO1xuICBmaWVsZC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGAke25hbWV9YCk7XG4gIGZpZWxkLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2lkfWApO1xuXG4gIHJldHVybiBmaWVsZDtcbn07XG5cbmNvbnN0IGNyZWF0ZUxhYmVsID0gKGlucHV0SUQsIHRleHQpID0+IHtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWxhYmVsXCIpO1xuXG4gIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBgJHtpbnB1dElEfWApO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgcmV0dXJuIGxhYmVsO1xufTtcblxuY29uc3QgY2xlYXJGaWVsZHMgPSAoZmllbGRzKSA9PiB7XG4gIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4gKGZpZWxkLnZhbHVlID0gXCJcIikpO1xufTtcblxuY29uc3QgY2hlY2tGaWVsZHMgPSAoZmllbGRzKSA9PiB7XG4gIGNvbnN0IGlucHV0RmllbGRzID0gQXJyYXkuZnJvbShmaWVsZHMpO1xuICByZXR1cm4gaW5wdXRGaWVsZHMuc29tZSgoZmllbGQpID0+IGZpZWxkLnZhbHVlID09PSBcIlwiKTtcbn07XG5cbmNvbnN0IGxvYWRDb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdCgpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBjcmVhdGVIb21lID0gKCkgPT4ge1xuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcblxuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5mby5jbGFzc0xpc3QuYWRkKFwiaG9tZS1pbmZvXCIpO1xuXG4gIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG91cnMuY2xhc3NMaXN0LmFkZChcImhvbWUtaG91cnNcIik7XG5cbiAgY29uc3Qgc2V0QWN0aXZlQ2xhc3MgPSAoKSA9PiBob3Vycy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBzZXRUaW1lb3V0KHNldEFjdGl2ZUNsYXNzLCAxMDApO1xuXG4gIGhvdXJzLmFwcGVuZENoaWxkKGFkZFRleHQoXCI3IERBWVMgQSBXRUVLXCIsIFwicFwiKSk7XG4gIGhvdXJzLmFwcGVuZENoaWxkKGFkZFRleHQoXCI0UE0gLSA5UE1cIiwgXCJwXCIpKTtcbiAgaG91cnMuYXBwZW5kQ2hpbGQoYWRkVGV4dChcIkRJTkUtSU5cIiwgXCJwXCIpKTtcblxuICBpbmZvLmFwcGVuZENoaWxkKFxuICAgIGZhZGVJblRleHQoXG4gICAgICBcIlJJU1RPUkFOVEUgUElaWkEgJiBXSU5FLiBTYW5kd2ljaGVzLCBwcm92aXNpb25zLCB3aW5lIHNob3AsIGFuZCBtb3JlLlwiLFxuICAgICAgXCJwXCIsXG4gICAgICAyNVxuICAgIClcbiAgKTtcblxuICBob21lLmFwcGVuZENoaWxkKGluZm8pO1xuICBob21lLmFwcGVuZENoaWxkKGhvdXJzKTtcblxuICByZXR1cm4gaG9tZTtcbn07XG5cbmNvbnN0IGZhZGVJblRleHQgPSAodGV4dCwgZWxlbWVudCwgc3BlZWQpID0+IHtcbiAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgcGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoYCR7ZWxlbWVudH0tYW5pbWF0ZWRgKTtcblxuICBjb25zdCBjaGFyYWN0ZXJzID0gQXJyYXkuZnJvbSh0ZXh0KTtcblxuICBjaGFyYWN0ZXJzLmZvckVhY2goKGNoYXJhY3RlciwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IGNoYXJhY3RlcnNbaW5kZXhdO1xuICAgIHNwYW4uc3R5bGUuYW5pbWF0aW9uRGVsYXkgPSBgJHtpbmRleCAqIHNwZWVkfW1zYDtcbiAgICBwYXJhZ3JhcGguYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIH0pO1xuXG4gIGNvbnN0IHJlbW92ZVNwYW5UYWcgPSAoKSA9PiB7XG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGV4dDtcbiAgfTtcblxuICBzZXRUaW1lb3V0KHJlbW92ZVNwYW5UYWcsIDQwMDApO1xuXG4gIHJldHVybiBwYXJhZ3JhcGg7XG59O1xuXG5jb25zdCBhZGRUZXh0ID0gKHRleHQsIGVsZW1lbnQpID0+IHtcbiAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGV4dDtcblxuICByZXR1cm4gcGFyYWdyYXBoO1xufTtcblxuY29uc3QgbG9hZEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIik7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IGNyZWF0ZU1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuXG4gIGNvbnN0IGNyZWF0ZVBpenphQ2FyZCA9IChuYW1lLCBpbmZvKSA9PiB7XG4gICAgY29uc3QgcGl6emFDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwaXp6YUNhcmQuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2FyZFwiKTtcblxuICAgIGNvbnN0IHBpenphSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGl6emFJbmZvLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWluZm9cIik7XG5cbiAgICBjb25zdCBwaXp6YU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgcGl6emFOYW1lLmNsYXNzTGlzdC5hZGQoXCJjYXJkLXRpdGxlXCIpO1xuICAgIHBpenphTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgICBjb25zdCBwaXp6YURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcGl6emFEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiY2FyZC1kZXNjcmlwdGlvblwiKTtcbiAgICBwaXp6YURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaW5mbztcblxuICAgIGNvbnN0IHBpenphSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHBpenphSW1hZ2UuY2xhc3NMaXN0LmFkZChcImNhcmQtaW1hZ2VcIik7XG4gICAgcGl6emFJbWFnZS5zcmMgPSBgLi9pbWFnZXMvJHtuYW1lLnRvTG93ZXJDYXNlKCl9LmpwZ2A7XG4gICAgcGl6emFJbWFnZS5hbHQgPSBgUGl6emEgJHtuYW1lfWA7XG5cbiAgICBwaXp6YUluZm8uYXBwZW5kQ2hpbGQocGl6emFOYW1lKTtcbiAgICBwaXp6YUluZm8uYXBwZW5kQ2hpbGQocGl6emFEZXNjcmlwdGlvbik7XG5cbiAgICBwaXp6YUNhcmQuYXBwZW5kQ2hpbGQocGl6emFJbWFnZSk7XG4gICAgcGl6emFDYXJkLmFwcGVuZENoaWxkKHBpenphSW5mbyk7XG5cbiAgICByZXR1cm4gcGl6emFDYXJkO1xuICB9O1xuXG4gIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlUGl6emFDYXJkKFwiTWFyZ2hhcml0YVwiLCBcIlRvbWF0byBzYXVjZSwgY2hlZXNlLCBvcmVnYW5vXCIpXG4gICk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlUGl6emFDYXJkKFwiVmVzdXZpb1wiLCBcIlRvbWF0byBzYXVjZSwgY2hlZXNlLCBoYW1cIikpO1xuICBtZW51LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVBpenphQ2FyZChcIkNhcHJpY2lvc3NhXCIsIFwiVG9tYXRvIHNhdWNlLCBjaGVlc2UsIGhhbSwgb3JlZ2Fub1wiKVxuICApO1xuICBtZW51LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVBpenphQ2FyZChcIlByb3NjaXV0dG9cIiwgXCJUb21hdG8gc2F1Y2UsIGNoZWVzZSwgaGFtLCBhcnVndWxhLCBvcmVnYW5vXCIpXG4gICk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlUGl6emFDYXJkKFwiSGF2YWlcIiwgXCJUb21hdG8gc2F1Y2UsIGNoZWVzZSwgaGFtLCBwaW5lYXBwbGUsIG9yZWdhbm9cIilcbiAgKTtcbiAgbWVudS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVQaXp6YUNhcmQoXG4gICAgICBcIkFtb3JlXCIsXG4gICAgICBcIlRvbWF0byBzYXVjZSwgY2hlZXNlLCBjaGlja2VuLCBhcnVndWxhLCBjaGVycnkgdG9tYXRvXCJcbiAgICApXG4gICk7XG5cbiAgcmV0dXJuIG1lbnU7XG59O1xuXG5jb25zdCBsb2FkTWVudSA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKTtcblxuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmNvbnN0IGluaXRpYWxpemVXZWJzaXRlID0gKCgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBjb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItdGl0bGVcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlJpc3RvcmFudGVcIjtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZU5hdiA9ICgpID0+IHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIG5hdi5jbGFzc0xpc3QuYWRkKFwibmF2XCIpO1xuXG4gICAgbmF2LmFwcGVuZENoaWxkKGNyZWF0ZUJ1dHRvbihcIkhvbWVcIikpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChjcmVhdGVCdXR0b24oXCJNZW51XCIpKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKFwiQ29udGFjdFwiKSk7XG5cbiAgICByZXR1cm4gbmF2O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IChzZWN0aW9uKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcIm5hdi1idXR0b25cIik7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gc2VjdGlvbjtcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgaWYgKHNlY3Rpb24gPT09IFwiSG9tZVwiKSB7XG4gICAgICAgIHNldEFjdGl2ZVNlY3Rpb24oXCJIb21lXCIpO1xuICAgICAgICBsb2FkSG9tZSgpO1xuICAgICAgfVxuICAgICAgaWYgKHNlY3Rpb24gPT09IFwiTWVudVwiKSB7XG4gICAgICAgIHNldEFjdGl2ZVNlY3Rpb24oXCJNZW51XCIpO1xuICAgICAgICBsb2FkTWVudSgpO1xuICAgICAgfVxuICAgICAgaWYgKHNlY3Rpb24gPT09IFwiQ29udGFjdFwiKSB7XG4gICAgICAgIHNldEFjdGl2ZVNlY3Rpb24oXCJDb250YWN0XCIpO1xuICAgICAgICBsb2FkQ29udGFjdCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfTtcblxuICBjb25zdCBzZXRBY3RpdmVTZWN0aW9uID0gKHNlY3Rpb24pID0+IHtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtYnV0dG9uXCIpO1xuXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGlmIChidXR0b24udGV4dENvbnRlbnQgIT09IHNlY3Rpb24pIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVNYWluID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBtYWluLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpblwiKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuXG4gICAgcmV0dXJuIG1haW47XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJmb290ZXItdGl0bGVcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIk1hZGUgYnkgVmVlamF5UExcIjtcblxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICByZXR1cm4gZm9vdGVyO1xuICB9O1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuXG4gIHNldEFjdGl2ZVNlY3Rpb24oXCJIb21lXCIpO1xuICBsb2FkSG9tZSgpO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZVdlYnNpdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsaXplV2Vic2l0ZSBmcm9tIFwiLi9zaXRlXCI7XG5cbmluaXRpYWxpemVXZWJzaXRlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9