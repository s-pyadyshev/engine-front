/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/accordion.js":
/*!****************************************!*\
  !*** ./src/js/components/accordion.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   accordion: function() { return /* binding */ accordion; }
/* harmony export */ });
var accordion = function () {
  var init = function init() {
    var accordionList = document.querySelectorAll(".accordion-list");
    if (!accordionList.length) {
      return;
    }
    var toggleAccordion = function toggleAccordion(event) {
      var accordionItem = event.target.closest(".accordion");
      var accordionContent = accordionItem.querySelector(".accordion__content");
      accordionItem.classList.toggle("active");
      // const isExpanded =
      //   accordionButton.getAttribute("aria-expanded") === "true";
      // const target = accordionButton.parentElement.nextElementSibling;
      // accordionButton.setAttribute("aria-expanded", !isExpanded);

      if (accordionItem.classList.contains("active")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      } else {
        accordionContent.style.maxHeight = "0";
      }
    };
    accordionList.forEach(function (accordion) {
      accordion.addEventListener("click", toggleAccordion);
    });
  };
  return {
    init: init
  };
}();

/***/ }),

/***/ "./src/js/components/backToTop.js":
/*!****************************************!*\
  !*** ./src/js/components/backToTop.js ***!
  \****************************************/
/***/ (function() {

var btnUp = {
  addEventListener: function addEventListener() {
    document.querySelector(".button--up").onclick = function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    };
  }
};
btnUp.addEventListener();

/***/ }),

/***/ "./src/js/components/cases-slider.js":
/*!*******************************************!*\
  !*** ./src/js/components/cases-slider.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   casesSlider: function() { return /* binding */ casesSlider; }
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


var casesSlider = function () {
  var init = function init() {
    var resizableSwiper = function resizableSwiper(breakpoint, swiperClass, swiperSettings) {
      var casesSwiper;
      breakpoint = window.matchMedia(breakpoint);
      var enableSwiper = function enableSwiper(className, settings) {
        if (document.querySelector(className)) {
          casesSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](className, settings);
        }
      };
      var checker = function checker() {
        if (breakpoint.matches) {
          return enableSwiper(swiperClass, swiperSettings);
        } else {
          if (casesSwiper !== undefined) casesSwiper.destroy(true, true);
          return;
        }
      };
      breakpoint.addEventListener('change', checker);
      checker();
    };
    resizableSwiper('(max-width: 1024px)', '.cases-slider', {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination],
      spaceBetween: 23,
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
        type: "bullets",
        bulletElement: "button"
      }
    });
  };
  return {
    init: init
  };
}();

/***/ }),

/***/ "./src/js/components/hero-slider.js":
/*!******************************************!*\
  !*** ./src/js/components/hero-slider.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   heroSlider: function() { return /* binding */ heroSlider; }
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


var heroSlider = function () {
  var init = function init() {
    var heroSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".hero-swiper", {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination],
      spaceBetween: 20,
      slidesPerView: "auto",
      followFinger: false,
      breakpoints: {
        1025: {
          spaceBetween: 0,
          rewind: true
        }
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
        type: "bullets",
        bulletElement: "button"
      }
    });
    heroSwiper.on("click", function () {
      heroSwiper.slideNext();
    });
  };
  return {
    init: init
  };
}();

/***/ }),

/***/ "./src/js/components/job-slider.js":
/*!*****************************************!*\
  !*** ./src/js/components/job-slider.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   jobSlider: function() { return /* binding */ jobSlider; }
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


var jobSlider = function () {
  var init = function init() {
    var jobSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".job-swiper", {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Mousewheel],
      spaceBetween: 20,
      slidesPerView: "auto",
      centeredSlides: "auto",
      mousewheel: {
        releaseOnEdges: true,
        eventsTarget: ".job-slider"
      },
      breakpoints: {
        1025: {
          spaceBetween: 30
        }
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        clickable: true
      }
    });
    if (!jobSwiper.slides.length) {
      return;
    }
    var currentFraction = document.querySelector(".swiper-fraction-current");
    var totalFraction = document.querySelector(".swiper-fraction-total");
    if (jobSwiper.slides.length >= 10) {
      totalFraction.textContent = jobSwiper.slides.length;
      currentFraction.textContent = "0" + (jobSwiper.activeIndex + 1).toString();
    } else {
      totalFraction.textContent = "0" + jobSwiper.slides.length.toString();
      currentFraction.textContent = "0" + (jobSwiper.activeIndex + 1).toString();
    }
    jobSwiper.on("slideChange", function () {
      if (jobSwiper.slides.length >= 10) {
        currentFraction.textContent = "0" + (jobSwiper.activeIndex + 1).toString();
        if (jobSwiper.activeIndex + 1 >= 10) {
          var arrCurrentFraction = [];
          arrCurrentFraction = currentFraction.textContent.split("");
          arrCurrentFraction.shift();
          currentFraction.textContent = arrCurrentFraction.join("");
        }
      } else {
        currentFraction.textContent = "0" + (jobSwiper.activeIndex + 1).toString();
      }
      if (currentFraction.textContent == totalFraction.textContent) {
        currentFraction.classList.add("disabled");
      } else {
        currentFraction.classList.remove("disabled");
      }
    });
  };
  return {
    init: init
  };
}();

/***/ }),

/***/ "./src/js/components/mobile-menu.js":
/*!******************************************!*\
  !*** ./src/js/components/mobile-menu.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mobileMenu: function() { return /* binding */ mobileMenu; }
/* harmony export */ });
var mobileMenu = function () {
  var init = function init() {
    var mobileMenuOpen = document.querySelector(".js-open-menu");
    if (!mobileMenuOpen) {
      return;
    }
    var mobileMenuClose = document.querySelector(".js-close-menu");
    var body = document.querySelector("body");
    mobileMenuOpen.addEventListener("click", function () {
      body.classList.toggle("mobile-menu-active");
      mobileMenuClose.focus();
    });
    mobileMenuClose.addEventListener("click", function () {
      body.classList.toggle("mobile-menu-active");
    });
  };
  return {
    init: init
  };
}();

/***/ }),

/***/ "./src/js/components/permutation.js":
/*!******************************************!*\
  !*** ./src/js/components/permutation.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   permutation: function() { return /* binding */ permutation; }
/* harmony export */ });
var permutation = function () {
  var init = function init() {
    var textBlock = document.querySelector(".main-cases__text");
    var swiperWrapper = document.querySelector(".cases-slider .swiper-wrapper");
    var firstPlace = document.querySelector(".main-cases .container");
    if (!textBlock) {
      return;
    }
    var replaceBlock = function replaceBlock() {
      if (window.innerWidth >= 1025) {
        swiperWrapper.append(textBlock);
      } else if (window.innerWidth > 320 && window.innerWidth < 1025) {
        firstPlace.prepend(textBlock);
      }
    };
    replaceBlock();
    window.addEventListener("resize", function () {
      replaceBlock();
    });
  };
  return {
    init: init
  };
}();

/***/ }),

/***/ "./src/js/components/scrollspy.js":
/*!****************************************!*\
  !*** ./src/js/components/scrollspy.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scrollspy: function() { return /* binding */ scrollspy; }
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/js/helpers.js");

var applyScrollspyClasses = function applyScrollspyClasses(elements) {
  elements.forEach(function (element) {
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isElementInViewport)(element)) {
      var animationClass = element.dataset.scrollspy;
      element.classList.add("animate__animated");
      if (animationClass) {
        element.classList.add(animationClass);
      }
    }
  });
};
var scrollspy = function () {
  var init = function init() {
    var scrollspyElements = document.querySelectorAll("[data-scrollspy]");
    if (!scrollspyElements.length) {
      return;
    }
    applyScrollspyClasses(scrollspyElements);
    document.addEventListener("scroll", (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.throttle)(function () {
      applyScrollspyClasses(scrollspyElements);
    }, 100));
  };
  return {
    init: init
  };
}();

/***/ }),

/***/ "./src/js/components/scrollto.js":
/*!***************************************!*\
  !*** ./src/js/components/scrollto.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var scrolltosmooth_dist_scrolltosmooth_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scrolltosmooth/dist/scrolltosmooth.esm */ "./node_modules/scrolltosmooth/dist/scrolltosmooth.esm.js");

var smoothScroll = new scrolltosmooth_dist_scrolltosmooth_esm__WEBPACK_IMPORTED_MODULE_0__["default"]("button", {
  targetAttribute: "data-scrollto",
  duration: 400,
  durationRelative: false,
  durationMin: false,
  durationMax: false
});
smoothScroll.init();

/***/ }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   slider: function() { return /* binding */ slider; }
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


var slider = function () {
  var init = function init() {
    var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".slider", {
      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
        type: "bullets",
        bulletElement: "button"
      }
    });
  };
  return {
    init: init
  };
}();

/***/ }),

/***/ "./src/js/components/tabs.js":
/*!***********************************!*\
  !*** ./src/js/components/tabs.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tabs: function() { return /* binding */ tabs; }
/* harmony export */ });
var tabs = function () {
  var init = function init() {
    var tabContainers = document.querySelectorAll("[data-tabs]");
    if (!tabContainers.length) {
      return;
    }
    tabContainers.forEach(function (tabContainer) {
      var currentTab = tabContainer.getAttribute("data-tabs");
      tabContainer.addEventListener("click", function (event) {
        var target = event.target;
        if (!target.hasAttribute("data-tab")) {
          return;
        }
        var tabButton = target;
        var tabId = tabButton.getAttribute("data-tab");
        var matchingTabData = document.querySelector("[data-tabs-content=\"".concat(currentTab, "\"] [data-tab-content=\"").concat(tabId, "\"]"));
        var activeTabContent = document.querySelector("[data-tabs-content=\"".concat(currentTab, "\"] [data-tab-content].is-active"));
        var activeTabButton = document.querySelector("[data-tabs=".concat(currentTab, "] .button.is-active"));
        activeTabContent.classList.remove("is-active");
        activeTabButton.classList.remove("is-active");
        matchingTabData.classList.add("is-active");
        tabButton.classList.add("is-active");
      });
    });
  };
  return {
    init: init
  };
}();

/***/ }),

/***/ "./src/js/components/toggle.js":
/*!*************************************!*\
  !*** ./src/js/components/toggle.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggle: function() { return /* binding */ toggle; }
/* harmony export */ });
var toggle = function () {
  var init = function init() {
    var collapseLinks = document.querySelectorAll("[data-collapse-target]");
    if (!collapseLinks.length) {
      return;
    }
    collapseLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        var collapseTarget = event.target.dataset.collapseTarget;
        var collapseTargets = document.querySelectorAll("[data-collapse-target=\"".concat(collapseTarget, "\"]"));
        var target = document.querySelector("[data-collapse-content=\"".concat(collapseTarget, "\"]"));
        target.classList.toggle("active");
        collapseTargets.forEach(function (target) {
          return target.classList.toggle("active");
        });
      });
    });
  };
  return {
    init: init
  };
}();

/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounce: function() { return /* binding */ debounce; },
/* harmony export */   isElementCompletelyInViewport: function() { return /* binding */ isElementCompletelyInViewport; },
/* harmony export */   isElementInViewport: function() { return /* binding */ isElementInViewport; },
/* harmony export */   throttle: function() { return /* binding */ throttle; }
/* harmony export */ });
function debounce(func, wait) {
  var timeout;
  return function () {
    var _arguments = arguments,
      _this = this;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(function () {
      func.apply(_this, _arguments);
    }, wait);
  };
}

// const onType = debounce(() => {
//   // send request
// }, 500);

// const searchField = document.querySelector("#searchField");

// searchField.addEventListener("keydown", onType);

function throttle(func, wait) {
  var waiting = false;
  return function () {
    var _arguments2 = arguments,
      _this2 = this;
    if (waiting) {
      return;
    }
    waiting = true;
    setTimeout(function () {
      func.apply(_this2, _arguments2);
      waiting = false;
    }, wait);
  };
}

// Usage
// const onScroll = throttle(() => {}, 100);

// document.addEventListener("scroll", onScroll);

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  var windowWidth = window.innerWidth || document.documentElement.clientWidth;
  var vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
  var horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
  return vertInView && horInView;
}
function isElementCompletelyInViewport(element) {
  var coordinates = element.getBoundingClientRect();
  if (coordinates.right > window.innerWidth || coordinates.bottom > window.innerHeight) {
    return false;
  }
  if (coordinates.top < 0 || coordinates.left < 0) {
    return false;
  }
  return true;
}

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/accordion */ "./src/js/components/accordion.js");
/* harmony import */ var _components_mobile_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mobile-menu */ "./src/js/components/mobile-menu.js");
/* harmony import */ var _components_hero_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/hero-slider */ "./src/js/components/hero-slider.js");
/* harmony import */ var _components_permutation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/permutation */ "./src/js/components/permutation.js");
/* harmony import */ var _components_cases_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cases-slider */ "./src/js/components/cases-slider.js");
/* harmony import */ var _components_job_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/job-slider */ "./src/js/components/job-slider.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/slider */ "./src/js/components/slider.js");
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tabs */ "./src/js/components/tabs.js");
/* harmony import */ var _components_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/toggle */ "./src/js/components/toggle.js");
/* harmony import */ var _components_scrollspy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/scrollspy */ "./src/js/components/scrollspy.js");
/* harmony import */ var _components_scrollto__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/scrollto */ "./src/js/components/scrollto.js");
/* harmony import */ var _components_backToTop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/backToTop */ "./src/js/components/backToTop.js");
/* harmony import */ var _components_backToTop__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_backToTop__WEBPACK_IMPORTED_MODULE_12__);

// import { vhFix } from "./vendor/vh-fix";












window.addEventListener("load", function () {
  _components_accordion__WEBPACK_IMPORTED_MODULE_1__.accordion.init();
  _components_mobile_menu__WEBPACK_IMPORTED_MODULE_2__.mobileMenu.init();
  _components_hero_slider__WEBPACK_IMPORTED_MODULE_3__.heroSlider.init();
  _components_cases_slider__WEBPACK_IMPORTED_MODULE_5__.casesSlider.init();
  _components_job_slider__WEBPACK_IMPORTED_MODULE_6__.jobSlider.init();
  _components_permutation__WEBPACK_IMPORTED_MODULE_4__.permutation.init();
  _components_slider__WEBPACK_IMPORTED_MODULE_7__.slider.init();
  _components_tabs__WEBPACK_IMPORTED_MODULE_8__.tabs.init();
  _components_toggle__WEBPACK_IMPORTED_MODULE_9__.toggle.init();
  _components_scrollspy__WEBPACK_IMPORTED_MODULE_10__.scrollspy.init();
  document.querySelector("body").classList.add("page-loaded");
}, false);

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! ./vendor/fancyselect */ "./src/js/vendor/fancyselect.js");

/***/ }),

/***/ "./src/js/vendor/fancyselect.js":
/*!**************************************!*\
  !*** ./src/js/vendor/fancyselect.js ***!
  \**************************************/
/***/ (function() {

/*!
 * Copyright (c) 2021 Momo Bassit.
 * Licensed under the MIT License (MIT)
 * https://github.com/mdbassit/fancySelect
 */

(function (window, document, autoInitialize) {
  var currentElement = null;
  var searchString = "";
  var searchTimeout = null;
  var counter = 0;

  /**
   * Initialize the custom select box elements.
   * @param {string} [selector] An optional selector representing native select elements.
   */
  function init(selector) {
    selector = selector || "select:not(.fsb-ignore)";

    // Replace all eligible native select elements with custom select boxes
    document.querySelectorAll(selector).forEach(replaceNativeSelect);
  }

  /**
   * Replace a native select element with a custom select box.
   * @param {object} select The native select.
   * @param {function} [renderer] An optional custom item label renderer.
   */
  function replaceNativeSelect(select, renderer) {
    // Skip if the native select has already been processed
    if (select.nextElementSibling && select.nextElementSibling.classList.contains("fsb-select")) {
      return;
    }
    var options = select.children;
    var parentNode = select.parentNode;
    var customSelect = document.createElement("span");
    var label = document.createElement("span");
    var button = document.createElement("button");
    var list = document.createElement("span");
    var widthAdjuster = document.createElement("span");
    var index = counter++;

    // Add a custom CSS class to the native select element
    select.classList.add("fsb-original-select");

    // Label for accessibility
    label.id = "fsb_" + index + "_label";
    label.className = "fsb-label";
    label.textContent = getNativeSelectLabel(select, parentNode);

    // List box button
    button.id = "fsb_" + index + "_button";
    button.className = "fsb-button";
    button.textContent = "&nbsp;";
    button.setAttribute("type", "button");
    button.setAttribute("aria-disabled", select.disabled);
    button.setAttribute("aria-haspopup", "listbox");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-labelledby", "fsb_" + index + "_label fsb_" + index + "_button");

    // List box
    list.className = "fsb-list";
    list.setAttribute("role", "listbox");
    list.setAttribute("tabindex", "-1");
    list.setAttribute("aria-labelledby", "fsb_" + index + "_label");

    // List items
    for (var i = 0, len = options.length; i < len; i++) {
      var _getItemFromOption = getItemFromOption(options[i], renderer),
        item = _getItemFromOption.item,
        selected = _getItemFromOption.selected,
        itemLabel = _getItemFromOption.itemLabel;
      list.appendChild(item);
      if (selected) {
        button.innerHTML = itemLabel;
      }
    }

    // Custom select box container
    customSelect.className = "fsb-select";
    customSelect.appendChild(label);
    customSelect.appendChild(button);
    customSelect.appendChild(list);
    customSelect.appendChild(widthAdjuster);

    // Hide the native select
    select.style.display = "none";

    // Insert the custom select box after the native select
    if (select.nextSibling) {
      parentNode.insertBefore(customSelect, select.nextSibling);
    } else {
      parentNode.appendChild(customSelect);
    }

    // Force the select box to take the width of the longest item by default
    if (list.firstElementChild) {
      var span = document.createElement("span");
      span.setAttribute("style", "width: " + list.firstElementChild.offsetWidth + "px;");
      widthAdjuster.className = "fsb-resize";
      widthAdjuster.appendChild(span);
    }
  }

  /**
   * Update the custom select box attached to a native select.
   * @param {object} select The native select.
   * @param {function} [renderer] An optional custom item label renderer.
   */
  function updateFromNativeSelect(select, renderer) {
    var options = select.children;
    var parentNode = select.parentNode;
    var customSelect = select.nextElementSibling;

    // Abort if this native select hasn't been initialized
    if (!customSelect || !customSelect.classList.contains("fsb-select")) {
      return;
    }
    var label = customSelect.firstElementChild;
    var button = label.nextElementSibling;
    var list = button.nextElementSibling;
    var widthAdjuster = list.nextElementSibling;
    var listContent = document.createDocumentFragment();

    // Update the accessibility label
    label.textContent = getNativeSelectLabel(select, parentNode);

    // Update the button status
    button.setAttribute("aria-disabled", select.disabled);

    // Generate the list items
    for (var i = 0, len = options.length; i < len; i++) {
      var _getItemFromOption2 = getItemFromOption(options[i], renderer),
        item = _getItemFromOption2.item,
        selected = _getItemFromOption2.selected,
        itemLabel = _getItemFromOption2.itemLabel;
      listContent.appendChild(item);
      if (selected) {
        button.innerHTML = itemLabel;
      }
    }

    // Clear the list box
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }

    // Update the list items
    list.appendChild(listContent);

    // Force the select box to take the width of the longest item by default
    if (list.firstElementChild) {
      widthAdjuster.firstElementChild.setAttribute("style", "width: " + list.firstElementChild.offsetWidth + "px;");
    }
  }

  /**
   * Try to guess the native select element's label if any.
   * @param {object} select The native select.
   * @param {object} parent The parent node.
   * @return {string} The native select's label or an empty string.
   */
  function getNativeSelectLabel(select, parent) {
    var id = select.id;
    var labelElement;

    // If the select element is inside a label element
    if (parent.nodeName === "LABEL") {
      labelElement = parent;

      // Or if the select element has an ID, and there is a label element
      // with an attribute "for" that points to that ID
    } else if (id !== undefined) {
      labelElement = document.querySelector('label[for="' + id + '"]');
    }

    // If a label element is found, return the first non empty child text node
    if (labelElement) {
      var textNodes = [].filter.call(labelElement.childNodes, function (n) {
        return n.nodeType === 3;
      });
      var texts = textNodes.map(function (n) {
        return n.textContent.replace(/\s+/g, " ").trim();
      });
      var label = texts.filter(function (l) {
        return l !== "";
      })[0];
      if (label) {
        // Open the list box on click on the label element
        labelElement.onclick = function (event) {
          select.nextElementSibling.querySelector("button").click();
          event.preventDefault();
          event.stopImmediatePropagation();
        };
        return label;
      }
    }
    return "";
  }

  /**
   * Generate a listbox item from a native select option.
   * @param {object} option The native select option.
   * @param {function} [renderer] An optional custom item label renderer.
   * @return {object} The listbox item, its selected state and its label.
   */
  function getItemFromOption(option, renderer) {
    var item = document.createElement("span");
    var selected = option.selected;
    var itemLabel = getItemLabel(option, renderer);
    item.className = "fsb-option";
    item.innerHTML = itemLabel;
    item.setAttribute("role", "option");
    item.setAttribute("tabindex", "-1");
    item.setAttribute("aria-selected", selected);
    return {
      item: item,
      selected: selected,
      itemLabel: itemLabel
    };
  }

  /**
   * Render a listbox item's label.
   * @param {object} option The native select option.
   * @param {function} [renderer] An optional custom item label renderer.
   * @return {string} The listbox item's label.
   */
  function getItemLabel(option, renderer) {
    if (typeof renderer === "function") {
      return renderer(option);
    }
    var text = option.text;
    var icon = option.getAttribute("data-icon");
    var label = text !== "" ? text : "&nbsp;";

    // Wrap label in a span to better handle long text
    label = "<span>" + label + "</span>";
    if (icon !== null) {
      label = '<svg aria-hidden="true"><use href="' + icon + '"></use></svg> ' + label;
    }
    return label;
  }

  /**
   * Open a list box.
   * @param {object} button The button to which the list box is attached.
   */
  function openListBox(button) {
    var rect = button.getBoundingClientRect();
    var list = button.nextElementSibling;
    var selectedItem = list.querySelector('[aria-selected="true"]');
    if (!selectedItem) {
      selectedItem = list.firstElementChild;
    }

    // Open the list box and focus the selected item
    button.parentNode.className = "fsb-select";
    button.setAttribute("aria-expanded", "true");
    selectedItem.focus();
    currentElement = button;

    // Position the list box on top of the button if there isn't enough space on the bottom
    if (rect.y + rect.height + list.offsetHeight > document.documentElement.clientHeight) {
      button.parentNode.className = "fsb-select fsb-top";
    }
  }

  /**
   * Close the active list box.
   * @param {boolean} focusButton If true, set focus on the button to which the list box is attached.
   */
  function closeListBox(focusButton) {
    var activeListBox = document.querySelector('.fsb-button[aria-expanded="true"]');
    if (activeListBox) {
      activeListBox.setAttribute("aria-expanded", "false");
      if (focusButton) {
        activeListBox.focus();
      }

      // Clear the search string in case someone is a ninja!!!
      searchString = "";
      searchTimeout = null;
    }
    currentElement = null;
  }

  /**
   * Set the selected item.
   * @param {object} item The item to be selected.
   */
  function selectItem(item) {
    var list = item.parentNode;
    var button = list.previousElementSibling;
    var itemIndex = [].indexOf.call(list.children, item);
    var selectedItem = list.querySelector('[aria-selected="true"]');
    var originalSelect = list.parentNode.previousElementSibling;
    if (selectedItem) {
      selectedItem.setAttribute("aria-selected", "false");
    }
    item.setAttribute("aria-selected", "true");
    button.innerHTML = item.innerHTML;

    // Update the original select
    originalSelect.selectedIndex = itemIndex;
    originalSelect.dispatchEvent(new Event("input", {
      bubbles: true
    }));
    originalSelect.dispatchEvent(new Event("change", {
      bubbles: true
    }));
  }

  /**
   * Get the next item that matches a string.
   * @param {object} list The active list box.
   * @param {string} search The search string.
   * @return {object} The item that matches the string.
   */
  function getMatchingItem(list, search) {
    var items = [].map.call(list.children, function (item) {
      return item.textContent.trim().toLowerCase();
    });
    var firstMatch = filterItems(items, search)[0];

    // If an exact match is found, return it
    if (firstMatch) {
      return list.children[items.indexOf(firstMatch)];

      // If the search string is the same character repeated multiple times
      // we need to cycle through the items starting with that character
    } else if (isRepeatedCharacter(search)) {
      // Get all the items matching the character
      var matches = filterItems(items, search[0]);

      // The match we want depends on the length of the repeated string
      // e.g: "aa" means the second item starting with "a"
      var matchIndex = (search.length - 1) % matches.length;

      // Return the match
      var match = matches[matchIndex];
      return list.children[items.indexOf(match)];
    }
    return null;
  }

  /**
   * Focus the next item that matches a string.
   * @param {object} list The active list box.
   */
  function focusMatchingItem(list) {
    var item = getMatchingItem(list, searchString);
    if (item) {
      item.focus();
    }
  }

  /**
   * Filter an array of string.
   * @param {array} items.
   * @param {string} filter The filter string.
   * @return {array} The array items that matches the filter.
   */
  function filterItems(items, filter) {
    return items.filter(function (item) {
      return item.indexOf(filter.toLowerCase()) === 0;
    });
  }

  /**
   * Check if the the user is typing printable characters.
   * @param {object} event A keydown event.
   * @return {boolean} True if the key pressed is a printable character.
   */
  function isTyping(event) {
    var key = event.key,
      altKey = event.altKey,
      ctrlKey = event.ctrlKey,
      metaKey = event.metaKey;
    if (key.length === 1 && !altKey && !ctrlKey && !metaKey) {
      if (searchTimeout) {
        window.clearTimeout(searchTimeout);
      }
      searchTimeout = window.setTimeout(function () {
        searchString = "";
      }, 500);
      searchString += key;
      return true;
    }
    return false;
  }

  /**
   * Check if a string is the same character repeated multiple times.
   * @param {string} str The string to check.
   * @return {boolean} True if the string the same character repeated multiple times (e.g "aaa").
   */
  function isRepeatedCharacter(str) {
    var characters = str.split("");
    return characters.every(function (_char) {
      return _char === characters[0];
    });
  }

  /**
   * Shortcut for addEventListener with delegation support.
   * @param {object} context The context to which the listener is attached.
   * @param {string} type Event type.
   * @param {(string|function)} selector Event target if delegation is used, event handler if not.
   * @param {function} [fn] Event handler if delegation is used.
   */
  function addListener(context, type, selector, fn) {
    var matches = Element.prototype.matches || Element.prototype.msMatchesSelector;

    // Delegate event to the target of the selector
    if (typeof selector === "string") {
      context.addEventListener(type, function (event) {
        if (matches.call(event.target, selector)) {
          fn.call(event.target, event);
        }
      });

      // If the selector is not a string then it's a function
      // in which case we need regular event listener
    } else {
      fn = selector;
      context.addEventListener(type, fn);
    }
  }

  /**
   * Call a function only when the DOM is ready.
   * @param {function} fn The function to call.
   * @param {array} [args] Arguments to pass to the function.
   */
  function DOMReady(fn, args) {
    args = args !== undefined ? args : [];
    if (document.readyState !== "loading") {
      fn.apply(void 0, args);
    } else {
      document.addEventListener("DOMContentLoaded", function () {
        fn.apply(void 0, args);
      });
    }
  }

  // On click on the list box button
  addListener(document, "click", ".fsb-button", function (event) {
    var isClickToClose = currentElement === event.target;
    closeListBox();
    if (!isClickToClose) {
      openListBox(event.target);
    }
    event.preventDefault();
    event.stopImmediatePropagation();
  });

  // On key press on the list box button
  addListener(document, "keydown", ".fsb-button", function (event) {
    var button = event.target;
    var list = button.nextElementSibling;
    var preventDefault = true;
    switch (event.key) {
      case "ArrowUp":
      case "ArrowDown":
      case "Enter":
      case " ":
        openListBox(button);
        break;
      default:
        if (isTyping(event)) {
          openListBox(button);
          focusMatchingItem(list);
        } else {
          preventDefault = false;
        }
    }
    if (preventDefault) {
      event.preventDefault();
    }
  });

  // When the mouse moves on an item, focus it.
  // Use mousemove instead of mouseover to prevent accidental focus on the wrong item,
  // namely when the list box is opened with a keyboard shortcut, and the mouse arrow
  // just happens to be on an item.
  addListener(document.documentElement, "mousemove", ".fsb-option", function (event) {
    event.target.focus();
  });

  // On click on an item
  addListener(document, "click", ".fsb-option", function (event) {
    selectItem(event.target);
    closeListBox(true);
  });

  // On key press on an item
  addListener(document, "keydown", ".fsb-option", function (event) {
    var item = event.target;
    var list = item.parentNode;
    var preventDefault = true;
    switch (event.key) {
      case "ArrowUp":
      case "ArrowLeft":
        if (item.previousElementSibling) {
          item.previousElementSibling.focus();
        }
        break;
      case "ArrowDown":
      case "ArrowRight":
        if (item.nextElementSibling) {
          item.nextElementSibling.focus();
        }
        break;
      case "Home":
        list.firstElementChild.focus();
        break;
      case "End":
        list.lastElementChild.focus();
        break;
      case "PageUp":
      case "PageDown":
        // Disable Page Up and Page Down keys
        break;
      case "Tab":
        selectItem(item);
        closeListBox();
        preventDefault = false;
        break;
      case "Enter":
      case " ":
        selectItem(item);
      case "Escape":
        closeListBox(true);
        break;
      default:
        if (isTyping(event)) {
          focusMatchingItem(list);
        } else {
          preventDefault = false;
        }
    }
    if (preventDefault) {
      event.preventDefault();
    }
  });

  // On click outside the custom select box, close it
  addListener(document, "click", function (event) {
    closeListBox();
  });

  // Expose the constructor to the global scope
  window.FancySelect = function () {
    function FancySelect() {
      DOMReady(init);
    }

    // Available methodes
    FancySelect.init = init;
    FancySelect.replace = replaceNativeSelect;
    FancySelect.update = updateFromNativeSelect;
    return FancySelect;
  }();

  // Initialize the custom select boxes when the DOM is ready
  if (autoInitialize) {
    DOMReady(init);
  }
})(window, document, typeof FancySelectAutoInitialize !== "undefined" ? FancySelectAutoInitialize : true);

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkninelines_template"] = self["webpackChunkninelines_template"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/main.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map