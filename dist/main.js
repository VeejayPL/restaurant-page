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

  const check = document.createElement("p");
  check.textContent = "Contact";

  contact.appendChild(check);

  return contact;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJkO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsUUFBUTs7QUFFckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsY0FBYztBQUNqRDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQy9EWDtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMsbUJBQW1CO0FBQ3BELDhCQUE4QixLQUFLOztBQUVuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9EWDs7QUFFaUI7QUFDQTtBQUNNOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQVE7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBVztBQUNuQjtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsaURBQVE7QUFDVixDQUFDOztBQUVELGlFQUFlLGlCQUFpQixFQUFDOzs7Ozs7O1VDbkdqQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnVDOztBQUV2Qyw2Q0FBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2l0ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlQ29udGFjdCA9ICgpID0+IHtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XG5cbiAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY2hlY2sudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcblxuICBjb250YWN0LmFwcGVuZENoaWxkKGNoZWNrKTtcblxuICByZXR1cm4gY29udGFjdDtcbn07XG5cbmNvbnN0IGxvYWRDb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdCgpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBjcmVhdGVIb21lID0gKCkgPT4ge1xuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcblxuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5mby5jbGFzc0xpc3QuYWRkKFwiaG9tZS1pbmZvXCIpO1xuXG4gIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG91cnMuY2xhc3NMaXN0LmFkZChcImhvbWUtaG91cnNcIik7XG5cbiAgaG91cnMuYXBwZW5kQ2hpbGQoYWRkVGV4dChcIjcgREFZUyBBIFdFRUtcIiwgXCJwXCIpKTtcbiAgaG91cnMuYXBwZW5kQ2hpbGQoYWRkVGV4dChcIjRQTSAtIDlQTVwiLCBcInBcIikpO1xuICBob3Vycy5hcHBlbmRDaGlsZChhZGRUZXh0KFwiRElORS1JTlwiLCBcInBcIikpO1xuXG4gIGluZm8uYXBwZW5kQ2hpbGQoXG4gICAgZmFkZUluVGV4dChcbiAgICAgIFwiUklTVE9SQU5URSBQSVpaQSAmIFdJTkUuIFNhbmR3aWNoZXMsIHByb3Zpc2lvbnMsIHdpbmUgc2hvcCwgYW5kIG1vcmUuXCIsXG4gICAgICBcInBcIixcbiAgICAgIDI1XG4gICAgKVxuICApO1xuXG4gIGhvbWUuYXBwZW5kQ2hpbGQoaW5mbyk7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoaG91cnMpO1xuXG4gIHJldHVybiBob21lO1xufTtcblxuY29uc3QgZmFkZUluVGV4dCA9ICh0ZXh0LCBlbGVtZW50LCBzcGVlZCkgPT4ge1xuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICBwYXJhZ3JhcGguY2xhc3NMaXN0LmFkZChgJHtlbGVtZW50fS1hbmltYXRlZGApO1xuXG4gIGNvbnN0IGNoYXJhY3RlcnMgPSBBcnJheS5mcm9tKHRleHQpO1xuICBjb25zb2xlLmxvZyhjaGFyYWN0ZXJzKTtcblxuICBjaGFyYWN0ZXJzLmZvckVhY2goKGNoYXJhY3RlciwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IGNoYXJhY3RlcnNbaW5kZXhdO1xuICAgIHNwYW4uc3R5bGUuYW5pbWF0aW9uRGVsYXkgPSBgJHtpbmRleCAqIHNwZWVkfW1zYDtcbiAgICBwYXJhZ3JhcGguYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIH0pO1xuXG4gIGNvbnN0IHJlbW92ZVNwYW5UYWcgPSAoKSA9PiB7XG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGV4dDtcbiAgfTtcbiAgc2V0VGltZW91dChyZW1vdmVTcGFuVGFnLCA0MDAwKTtcbiAgcmV0dXJuIHBhcmFncmFwaDtcbn07XG5cbmNvbnN0IGFkZFRleHQgPSAodGV4dCwgZWxlbWVudCkgPT4ge1xuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gIHJldHVybiBwYXJhZ3JhcGg7XG59O1xuXG5jb25zdCBsb2FkSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKTtcblxuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuY29uc3QgY3JlYXRlTWVudSA9ICgpID0+IHtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG5cbiAgY29uc3QgY3JlYXRlUGl6emFDYXJkID0gKG5hbWUsIGluZm8pID0+IHtcbiAgICBjb25zdCBwaXp6YUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBpenphQ2FyZC5jbGFzc0xpc3QuYWRkKFwibWVudS1jYXJkXCIpO1xuXG4gICAgY29uc3QgcGl6emFJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwaXp6YUluZm8uY2xhc3NMaXN0LmFkZChcImNhcmQtaW5mb1wiKTtcblxuICAgIGNvbnN0IHBpenphTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBwaXp6YU5hbWUuY2xhc3NMaXN0LmFkZChcImNhcmQtdGl0bGVcIik7XG4gICAgcGl6emFOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcblxuICAgIGNvbnN0IHBpenphRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwaXp6YURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWRlc2NyaXB0aW9uXCIpO1xuICAgIHBpenphRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpbmZvO1xuXG4gICAgY29uc3QgcGl6emFJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcGl6emFJbWFnZS5jbGFzc0xpc3QuYWRkKFwiY2FyZC1pbWFnZVwiKTtcbiAgICBwaXp6YUltYWdlLnNyYyA9IGAuL2ltYWdlcy8ke25hbWUudG9Mb3dlckNhc2UoKX0uanBnYDtcbiAgICBwaXp6YUltYWdlLmFsdCA9IGBQaXp6YSAke25hbWV9YDtcblxuICAgIHBpenphSW5mby5hcHBlbmRDaGlsZChwaXp6YU5hbWUpO1xuICAgIHBpenphSW5mby5hcHBlbmRDaGlsZChwaXp6YURlc2NyaXB0aW9uKTtcblxuICAgIHBpenphQ2FyZC5hcHBlbmRDaGlsZChwaXp6YUltYWdlKTtcbiAgICBwaXp6YUNhcmQuYXBwZW5kQ2hpbGQocGl6emFJbmZvKTtcblxuICAgIHJldHVybiBwaXp6YUNhcmQ7XG4gIH07XG5cbiAgbWVudS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVQaXp6YUNhcmQoXCJNYXJnaGFyaXRhXCIsIFwiVG9tYXRvIHNhdWNlLCBjaGVlc2UsIG9yZWdhbm9cIilcbiAgKTtcbiAgbWVudS5hcHBlbmRDaGlsZChjcmVhdGVQaXp6YUNhcmQoXCJWZXN1dmlvXCIsIFwiVG9tYXRvIHNhdWNlLCBjaGVlc2UsIGhhbVwiKSk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlUGl6emFDYXJkKFwiQ2FwcmljaW9zc2FcIiwgXCJUb21hdG8gc2F1Y2UsIGNoZWVzZSwgaGFtLCBvcmVnYW5vXCIpXG4gICk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlUGl6emFDYXJkKFwiUHJvc2NpdXR0b1wiLCBcIlRvbWF0byBzYXVjZSwgY2hlZXNlLCBoYW0sIGFydWd1bGEsIG9yZWdhbm9cIilcbiAgKTtcbiAgbWVudS5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVQaXp6YUNhcmQoXCJIYXZhaVwiLCBcIlRvbWF0byBzYXVjZSwgY2hlZXNlLCBoYW0sIHBpbmVhcHBsZSwgb3JlZ2Fub1wiKVxuICApO1xuICBtZW51LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVBpenphQ2FyZChcbiAgICAgIFwiQW1vcmVcIixcbiAgICAgIFwiVG9tYXRvIHNhdWNlLCBjaGVlc2UsIGNoaWNrZW4sIGFydWd1bGEsIGNoZXJyeSB0b21hdG9cIlxuICAgIClcbiAgKTtcblxuICByZXR1cm4gbWVudTtcbn07XG5cbmNvbnN0IGxvYWRNZW51ID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuY29uc3QgaW5pdGlhbGl6ZVdlYnNpdGUgPSAoKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIGNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImhlYWRlci10aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiUmlzdG9yYW50ZVwiO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcblxuICAgIHJldHVybiBoZWFkZXI7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlTmF2ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZcIik7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKFwiSG9tZVwiKSk7XG4gICAgbmF2LmFwcGVuZENoaWxkKGNyZWF0ZUJ1dHRvbihcIk1lbnVcIikpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChjcmVhdGVCdXR0b24oXCJDb250YWN0XCIpKTtcblxuICAgIHJldHVybiBuYXY7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQnV0dG9uID0gKHNlY3Rpb24pID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmF2LWJ1dHRvblwiKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBzZWN0aW9uO1xuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBpZiAoc2VjdGlvbiA9PT0gXCJIb21lXCIpIHtcbiAgICAgICAgc2V0QWN0aXZlU2VjdGlvbihcIkhvbWVcIik7XG4gICAgICAgIGxvYWRIb21lKCk7XG4gICAgICB9XG4gICAgICBpZiAoc2VjdGlvbiA9PT0gXCJNZW51XCIpIHtcbiAgICAgICAgc2V0QWN0aXZlU2VjdGlvbihcIk1lbnVcIik7XG4gICAgICAgIGxvYWRNZW51KCk7XG4gICAgICB9XG4gICAgICBpZiAoc2VjdGlvbiA9PT0gXCJDb250YWN0XCIpIHtcbiAgICAgICAgc2V0QWN0aXZlU2VjdGlvbihcIkNvbnRhY3RcIik7XG4gICAgICAgIGxvYWRDb250YWN0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYnV0dG9uO1xuICB9O1xuXG4gIGNvbnN0IHNldEFjdGl2ZVNlY3Rpb24gPSAoc2VjdGlvbikgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1idXR0b25cIik7XG5cbiAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgaWYgKGJ1dHRvbi50ZXh0Q29udGVudCAhPT0gc2VjdGlvbikge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZU1haW4gPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluXCIpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG5cbiAgICByZXR1cm4gbWFpbjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImZvb3Rlci10aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiTWFkZSBieSBWZWVqYXlQTFwiO1xuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIHJldHVybiBmb290ZXI7XG4gIH07XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG5cbiAgc2V0QWN0aXZlU2VjdGlvbihcIkhvbWVcIik7XG4gIGxvYWRIb21lKCk7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplV2Vic2l0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGluaXRpYWxpemVXZWJzaXRlIGZyb20gXCIuL3NpdGVcIjtcblxuaW5pdGlhbGl6ZVdlYnNpdGU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=