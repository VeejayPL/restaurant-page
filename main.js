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
    pizzaImage.src = `./images/${name.toLowerCase()}.png`;
    pizzaImage.alt = `Pizza ${name}`;

    pizzaInfo.appendChild(pizzaName);
    pizzaInfo.appendChild(pizzaDescription);

    pizzaCard.appendChild(pizzaImage);
    pizzaCard.appendChild(pizzaInfo);

    return pizzaCard;
  };

  menu.appendChild(
    createPizzaCard("Margharita", "Just a dough with pomodoro sauce")
  );
  menu.appendChild(
    createPizzaCard("Margharita", "Just a dough with pomodoro sauce")
  );
  menu.appendChild(
    createPizzaCard("Margharita", "Just a dough with pomodoro sauce")
  );
  menu.appendChild(
    createPizzaCard("Margharita", "Just a dough with pomodoro sauce")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNuQmQ7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGNBQWM7QUFDakQ7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNwQ1g7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLG1CQUFtQjtBQUNwRCw4QkFBOEIsS0FBSzs7QUFFbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERYOztBQUVpQjtBQUNBO0FBQ007O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQVE7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBUTtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFXO0FBQ25CO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxpREFBUTtBQUNWLENBQUM7O0FBRUQsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7VUNuR2pDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOdUM7O0FBRXZDLDZDQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zaXRlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IGNyZWF0ZUNvbnRhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuXG4gIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNoZWNrLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG5cbiAgY29udGFjdC5hcHBlbmRDaGlsZChjaGVjayk7XG5cbiAgcmV0dXJuIGNvbnRhY3Q7XG59O1xuXG5jb25zdCBsb2FkQ29udGFjdCA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKTtcblxuICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3QoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuY29uc3QgY3JlYXRlSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG5cbiAgaG9tZS5hcHBlbmRDaGlsZChmYWRlSW5UZXh0KFwiS29jaGFtIEFzaWUgamFrIHBpenplIHogZnJvbnRpZXJ5XCIsIFwicFwiLCA1MCkpO1xuXG4gIHJldHVybiBob21lO1xufTtcblxuY29uc3QgZmFkZUluVGV4dCA9ICh0ZXh0LCBlbGVtZW50LCBzcGVlZCkgPT4ge1xuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuXG4gIGNvbnN0IGNoYXJhY3RlcnMgPSBBcnJheS5mcm9tKHRleHQpO1xuICBjb25zb2xlLmxvZyhjaGFyYWN0ZXJzKTtcblxuICBjaGFyYWN0ZXJzLmZvckVhY2goKGNoYXJhY3RlciwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IGNoYXJhY3RlcnNbaW5kZXhdO1xuICAgIHNwYW4uc3R5bGUuYW5pbWF0aW9uRGVsYXkgPSBgJHtpbmRleCAqIHNwZWVkfW1zYDtcbiAgICBwYXJhZ3JhcGguYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIH0pO1xuXG4gIGNvbnN0IHJlbW92ZVNwYW5UYWcgPSAoKSA9PiB7XG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGV4dDtcbiAgfTtcbiAgc2V0VGltZW91dChyZW1vdmVTcGFuVGFnLCAzMDAwKTtcbiAgcmV0dXJuIHBhcmFncmFwaDtcbn07XG5cbmNvbnN0IGxvYWRIb21lID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBjcmVhdGVNZW51ID0gKCkgPT4ge1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICBjb25zdCBjcmVhdGVQaXp6YUNhcmQgPSAobmFtZSwgaW5mbykgPT4ge1xuICAgIGNvbnN0IHBpenphQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGl6emFDYXJkLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNhcmRcIik7XG5cbiAgICBjb25zdCBwaXp6YUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBpenphSW5mby5jbGFzc0xpc3QuYWRkKFwiY2FyZC1pbmZvXCIpO1xuXG4gICAgY29uc3QgcGl6emFOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHBpenphTmFtZS5jbGFzc0xpc3QuYWRkKFwiY2FyZC10aXRsZVwiKTtcbiAgICBwaXp6YU5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgY29uc3QgcGl6emFEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBpenphRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImNhcmQtZGVzY3JpcHRpb25cIik7XG4gICAgcGl6emFEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGluZm87XG5cbiAgICBjb25zdCBwaXp6YUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBwaXp6YUltYWdlLmNsYXNzTGlzdC5hZGQoXCJjYXJkLWltYWdlXCIpO1xuICAgIHBpenphSW1hZ2Uuc3JjID0gYC4vaW1hZ2VzLyR7bmFtZS50b0xvd2VyQ2FzZSgpfS5wbmdgO1xuICAgIHBpenphSW1hZ2UuYWx0ID0gYFBpenphICR7bmFtZX1gO1xuXG4gICAgcGl6emFJbmZvLmFwcGVuZENoaWxkKHBpenphTmFtZSk7XG4gICAgcGl6emFJbmZvLmFwcGVuZENoaWxkKHBpenphRGVzY3JpcHRpb24pO1xuXG4gICAgcGl6emFDYXJkLmFwcGVuZENoaWxkKHBpenphSW1hZ2UpO1xuICAgIHBpenphQ2FyZC5hcHBlbmRDaGlsZChwaXp6YUluZm8pO1xuXG4gICAgcmV0dXJuIHBpenphQ2FyZDtcbiAgfTtcblxuICBtZW51LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVBpenphQ2FyZChcIk1hcmdoYXJpdGFcIiwgXCJKdXN0IGEgZG91Z2ggd2l0aCBwb21vZG9ybyBzYXVjZVwiKVxuICApO1xuICBtZW51LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVBpenphQ2FyZChcIk1hcmdoYXJpdGFcIiwgXCJKdXN0IGEgZG91Z2ggd2l0aCBwb21vZG9ybyBzYXVjZVwiKVxuICApO1xuICBtZW51LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVBpenphQ2FyZChcIk1hcmdoYXJpdGFcIiwgXCJKdXN0IGEgZG91Z2ggd2l0aCBwb21vZG9ybyBzYXVjZVwiKVxuICApO1xuICBtZW51LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZVBpenphQ2FyZChcIk1hcmdoYXJpdGFcIiwgXCJKdXN0IGEgZG91Z2ggd2l0aCBwb21vZG9ybyBzYXVjZVwiKVxuICApO1xuXG4gIHJldHVybiBtZW51O1xufTtcblxuY29uc3QgbG9hZE1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIik7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuXG5jb25zdCBpbml0aWFsaXplV2Vic2l0ZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLXRpdGxlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJSaXN0b3JhbnRlXCI7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVOYXYgPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcblxuICAgIG5hdi5hcHBlbmRDaGlsZChjcmVhdGVCdXR0b24oXCJIb21lXCIpKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKFwiTWVudVwiKSk7XG4gICAgbmF2LmFwcGVuZENoaWxkKGNyZWF0ZUJ1dHRvbihcIkNvbnRhY3RcIikpO1xuXG4gICAgcmV0dXJuIG5hdjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVCdXR0b24gPSAoc2VjdGlvbikgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuYXYtYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHNlY3Rpb247XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIGlmIChzZWN0aW9uID09PSBcIkhvbWVcIikge1xuICAgICAgICBzZXRBY3RpdmVTZWN0aW9uKFwiSG9tZVwiKTtcbiAgICAgICAgbG9hZEhvbWUoKTtcbiAgICAgIH1cbiAgICAgIGlmIChzZWN0aW9uID09PSBcIk1lbnVcIikge1xuICAgICAgICBzZXRBY3RpdmVTZWN0aW9uKFwiTWVudVwiKTtcbiAgICAgICAgbG9hZE1lbnUoKTtcbiAgICAgIH1cbiAgICAgIGlmIChzZWN0aW9uID09PSBcIkNvbnRhY3RcIikge1xuICAgICAgICBzZXRBY3RpdmVTZWN0aW9uKFwiQ29udGFjdFwiKTtcbiAgICAgICAgbG9hZENvbnRhY3QoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBidXR0b247XG4gIH07XG5cbiAgY29uc3Qgc2V0QWN0aXZlU2VjdGlvbiA9IChzZWN0aW9uKSA9PiB7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWJ1dHRvblwiKTtcblxuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBpZiAoYnV0dG9uLnRleHRDb250ZW50ICE9PSBzZWN0aW9uKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlTWFpbiA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5cIik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcblxuICAgIHJldHVybiBtYWluO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLXRpdGxlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJNYWRlIGJ5IFZlZWpheVBMXCI7XG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgcmV0dXJuIGZvb3RlcjtcbiAgfTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcblxuICBzZXRBY3RpdmVTZWN0aW9uKFwiSG9tZVwiKTtcbiAgbG9hZEhvbWUoKTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVXZWJzaXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdGlhbGl6ZVdlYnNpdGUgZnJvbSBcIi4vc2l0ZVwiO1xuXG5pbml0aWFsaXplV2Vic2l0ZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==