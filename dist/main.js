/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!./style.css":
/*!**********************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./style.css ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! img/menu.jpg */ \"./img/menu.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Big+Shoulders+Text:100, 300, 400, 500, 600, 700, 800, 900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* font-family: 'Big Shoulders Text', cursive; */\\r\\n body {\\r\\n     margin: 0;\\r\\n     padding: 0;\\r\\n}\\r\\n\\r\\n#content {\\r\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat bottom / cover;\\r\\n    background-attachment: fixed;\\r\\n}\\r\\n\\r\\n/*HEADER */\\r\\n\\r\\n.header-wrap {\\r\\n    padding-top: 10px;\\r\\n    width: 80%;\\r\\n    margin: 0 auto;\\r\\n    display: flex;\\r\\n    justify-content: space-around;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n    float: left;\\r\\n    margin-left: 100px;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.logo img {\\r\\n    height: 100px;\\r\\n    width: 100px;\\r\\n}\\r\\n\\r\\n.nav-flex-row {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-around;\\r\\n    align-items: center;\\r\\n    z-index: 100;\\r\\n    width: 50%;\\r\\n}\\r\\n \\r\\n.nav-item {\\r\\n    text-decoration: none;\\r\\n    list-style-type: none;\\r\\n    padding: 20px 30px;\\r\\n    position: relative;\\r\\n}\\r\\n \\r\\n.nav-item a {\\r\\n    font-family: 'Big Shoulders Text', cursive;\\r\\n    color: #000;\\r\\n    font-size: 1.5em;\\r\\n    text-transform: uppercase;\\r\\n    font-weight: 500;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.nav-item a:hover{\\r\\n    color: #fff;\\r\\n}\\r\\n\\r\\n.nav-item-active::after {\\r\\n    content: \\\" \\\";\\r\\n    position: absolute;\\r\\n    bottom: 0;\\r\\n    right: 0;\\r\\n    width: 100%;\\r\\n    height: 3px;\\r\\n    background-color: #000;\\r\\n}\\r\\n\\r\\n/* HOME PAGE*/\\r\\n \\r\\n.home {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n \\r\\n.home-block h1 {\\r\\n    text-align: center;\\r\\n    color: #000;\\r\\n    font-size: 4em;\\r\\n    font-weight: 700;\\r\\n    color: #fff;\\r\\n}\\r\\n\\r\\n.home-img {\\r\\n    text-align: center;\\r\\n}\\r\\n \\r\\n.home-img img{\\r\\n    width: 75%;\\r\\n    border-radius: 30px;\\r\\n}\\r\\n \\r\\n.link-to-book-wrapper {\\r\\n    flex: 1;\\r\\n}\\r\\n\\r\\n/*FOOTER*/\\r\\n\\r\\n.container {\\r\\n    width: 70%;\\r\\n    margin: 0 auto;\\r\\n    padding: 30px 0 30px 0;\\r\\n}\\r\\n \\r\\n.row-flex {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    text-align: center;\\r\\n    margin-bottom: 60px;\\r\\n    color: #fff;\\r\\n}\\r\\n \\r\\n.flex-column-form {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    flex: 1;\\r\\n    margin: 30px 20px;\\r\\n}\\r\\n\\r\\n.form-control {\\r\\n    margin-top: 10px;\\r\\n    padding: 5px 10px;\\r\\n    border-radius: 3px;\\r\\n}\\r\\n\\r\\n.form-group p {\\r\\n    font-size: 1.2em;\\r\\n}\\r\\n \\r\\n.btn.btn-primary {\\r\\n    font-family: 'Big Shoulders Text', cursive;\\r\\n    color: #ffffff;\\r\\n    background-color: #95999e;\\r\\n    text-transform: uppercase;\\r\\n    font-size: 16px;\\r\\n    padding: 5px 10px;\\r\\n    letter-spacing: 2px;\\r\\n    border: 0;\\r\\n    margin-top: 10px;\\r\\n    border-radius: 3px;\\r\\n    cursor: pointer;\\r\\n}\\r\\n \\r\\n.btn.btn-primary:hover {\\r\\n    background-color: #747474;\\r\\n}\\r\\n.opening-time,\\r\\n.contact-address {\\r\\n    flex: 1;\\r\\n    margin: 30px 20px;\\r\\n    font-size: 1.2em;\\r\\n}\\r\\n \\r\\n.opening-time p span,\\r\\n.contact-address p span {\\r\\n    display: block;\\r\\n}\\r\\n\\r\\n/* Menu Section */\\r\\n\\r\\n.section-title {\\r\\n    padding: 0 0 50px 0;\\r\\n    text-align: center;\\r\\n    font-size: 24px;\\r\\n    color: #fff;\\r\\n}\\r\\n\\r\\n.menu-wrap {\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    justify-content: space-between;\\r\\n    padding-top: 10px;\\r\\n}\\r\\n\\r\\n.menu-item {\\r\\n    text-align: center;\\r\\n    width: 310px;\\r\\n    border: 1px solid #000;\\r\\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\\r\\n    padding: 20px 40px;\\r\\n    margin-bottom: 40px;\\r\\n    position: relative;\\r\\n    z-index: 1;\\r\\n}\\r\\n\\r\\n.menu-item::after {\\r\\n    content: \\\"\\\";\\r\\n    position: absolute;\\r\\n    top: 0; \\r\\n    left: 0;\\r\\n    width: 100%; \\r\\n    height: 100%;  \\r\\n    opacity: .9; \\r\\n    z-index: -1;\\r\\n    background-color: #fff;\\r\\n}\\r\\n\\r\\n.menu-img {\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.menu-img img {\\r\\n    width: 270px;\\r\\n    height: 200px;\\r\\n}\\r\\n\\r\\n.menu-name {\\r\\n    font-size: 20px;\\r\\n}\\r\\n\\r\\n.menu-price {\\r\\n    font-weight: 700;\\r\\n    font-size: 21px;\\r\\n}\\r\\n\\r\\n.menu-line {\\r\\n    margin-top: 25px;\\r\\n    height: 1px;\\r\\n    width: 100%;\\r\\n    background-color: #000;\\r\\n}\\r\\n\\r\\n/* Contact-section */\\r\\n\\r\\n.contact-section {\\r\\n    height: 100vh;\\r\\n}\\r\\n\\r\\n.contact-wrap {\\r\\n    display: flex;\\r\\n    justify-content: space-around;\\r\\n    align-items: center;\\r\\n    flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.contact-info {\\r\\n    background-color: #fff;\\r\\n    border-radius: 50%;\\r\\n    padding: 20px;\\r\\n    text-align: center;\\r\\n    margin-left: 100px;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 1333px) {\\r\\n\\r\\n    .contact-info {\\r\\n        margin-top: 40px;\\r\\n        margin-right: 100px;\\r\\n    }    \\r\\n}\\r\\n\\r\\n@media screen and (max-width: 1150px) {\\r\\n\\r\\n    .container {\\r\\n        width: 80%;\\r\\n    }\\r\\n\\r\\n    .menu-item {\\r\\n        width: 330px;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 990px) {\\r\\n\\r\\n    .nav-item {\\r\\n        padding: 10px 15px;\\r\\n    }\\r\\n\\r\\n    .nav-item a {\\r\\n        font-size: 1.2em;\\r\\n    }\\r\\n\\r\\n    .home-block h1 {\\r\\n        font-size: 3em;\\r\\n    }\\r\\n\\r\\n    .container {\\r\\n        width: 90%;\\r\\n    }\\r\\n\\r\\n    .menu-item {\\r\\n        width: 290px;\\r\\n    }\\r\\n\\r\\n    .row-flex {\\r\\n        display: flex;\\r\\n        flex-direction: column;\\r\\n    }\\r\\n    \\r\\n}\\r\\n\\r\\n@media screen and (max-width: 750px) {\\r\\n\\r\\n    .logo {\\r\\n        margin-left: 20px;\\r\\n    }\\r\\n\\r\\n    .logo img {\\r\\n        height: 75px;\\r\\n        width:  75px;\\r\\n    }\\r\\n\\r\\n    .home-block h1 {\\r\\n        font-size: 2.4em;\\r\\n    }\\r\\n\\r\\n    .home-img img {\\r\\n        width: 90%;;\\r\\n    }\\r\\n\\r\\n    .menu-wrap {\\r\\n        justify-content: center;\\r\\n    }\\r\\n\\r\\n    .menu-item {\\r\\n        width: 300px;\\r\\n    }\\r\\n\\r\\n    .contact-frame {\\r\\n        width: 400px;\\r\\n    }\\r\\n\\r\\n    .contact-info {\\r\\n        margin-left: 0;\\r\\n        margin-right: 0;\\r\\n    }\\r\\n    \\r\\n}\\r\\n \\r\\n@media screen and (max-width: 576px) {\\r\\n\\r\\n    .logo {\\r\\n        margin: 0;\\r\\n    }\\r\\n\\r\\n    .logo img {\\r\\n        height: 60px;\\r\\n        width:  60px;\\r\\n    }\\r\\n\\r\\n    .nav-item a {\\r\\n        font-size: 1em;\\r\\n    }\\r\\n\\r\\n    .home-block h1 {\\r\\n        font-size: 2em;\\r\\n    }\\r\\n\\r\\n    .menu-item {\\r\\n        width: 270px;\\r\\n    }\\r\\n \\r\\n    .about-wrap {\\r\\n        padding: 30px;\\r\\n    }\\r\\n \\r\\n    .about-wrap p,\\r\\n    .about-wrap h3 {\\r\\n        font-size: 15px;\\r\\n    }\\r\\n \\r\\n    .row-flex h3 {\\r\\n        font-size: 25px;\\r\\n        text-align: center;\\r\\n    }\\r\\n \\r\\n    .form-group p {\\r\\n        font-size: 15px;\\r\\n    }\\r\\n \\r\\n    .opening-time p span,\\r\\n    .contact-address p span {\\r\\n        font-size: 15px;\\r\\n        text-align: center;\\r\\n    }\\r\\n \\r\\n}\\r\\n\\r\\n@media screen and (max-width: 472px) {\\r\\n\\r\\n    .header-wrap {\\r\\n        width: 95%;\\r\\n    }\\r\\n\\r\\n    .nav-flex-row {\\r\\n        width: auto;\\r\\n    }\\r\\n\\r\\n    .nav-item {\\r\\n        padding: 5px 10px;\\r\\n    }\\r\\n    \\r\\n    .nav-item a {\\r\\n        font-size: 0.9em;\\r\\n    }\\r\\n    \\r\\n    .contact-frame {\\r\\n        width: 300px;\\r\\n        height: 400px;\\r\\n    }\\r\\n\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./style.css?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home */ \"./pages/home.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu */ \"./pages/menu.js\");\n/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact */ \"./pages/contact.js\");\n/* harmony import */ var _img_logo_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/logo.jpg */ \"./img/logo.jpg\");\n\r\n\r\n\r\n\r\n\r\nconst content = document.getElementById('content');\r\n\r\nfunction createheader() {\r\n    const header = document.createElement('section');\r\n    header.id = \"header\";\r\n    const menu = document.createElement('nav');\r\n    menu.classList.add('header-wrap');\r\n    const logo = document.createElement('div');\r\n    logo.classList.add('logo');\r\n    logo.insertAdjacentHTML('afterbegin',`<img src=\"${_img_logo_jpg__WEBPACK_IMPORTED_MODULE_4__}\">`);\r\n    logo.onclick = homePage;\r\n    menu.appendChild(logo);\r\n    const navRow = document.createElement('ul');\r\n    navRow.classList.add('nav-flex-row');\r\n    const activeItem = createMenuItem('Home',homePage);\r\n    activeItem.classList.add('nav-item-active');\r\n    navRow.appendChild(activeItem);\r\n    navRow.appendChild(createMenuItem('Menu',menuPage)); \r\n    navRow.appendChild(createMenuItem('Contact',contactPage));\r\n    menu.appendChild(navRow);\r\n    header.appendChild(menu);\r\n    return header\r\n}\r\n\r\nfunction createMenuItem(text,func) {\r\n    const navItem = document.createElement('li');\r\n    navItem.classList.add('nav-item');\r\n    const navItemA = document.createElement('a');\r\n    navItemA.textContent = text;\r\n    navItemA.onclick = func;\r\n    navItem.appendChild(navItemA);\r\n    return navItem\r\n\r\n}\r\n\r\nfunction createMain(){\r\n    const main = document.createElement('section');\r\n    main.id = \"main\";\r\n    return main\r\n}\r\n\r\nfunction createMFooter() {\r\n    const footer = document.createElement('section');\r\n    footer.id = \"footer\";\r\n    footer.insertAdjacentHTML('afterbegin',`\r\n    <div class=\"container\">\r\n        <div class=\"row-flex\">\r\n            <div class=\"flex-column-form\">\r\n                <h3 class=\"row-flex-title\">Make a booking</h3>\r\n                <form class=\"media-centered\">\r\n                    <div class=\"form-group\">\r\n                        <p>\r\n                            Please leave your number we will\r\n                            call to make a reservation\r\n                        </p>\r\n                        <input type=\"name\" class=\"form-control\"id=\"exampleInputName1\" aria-describedby=\"nameHelp\" placeholder=\"Enter your name\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"number\" class=\"form-control\"\r\n                            id=\"exampleInputphoneNumber1\"\r\n                            placeholder=\"Enter your phone number\">\r\n                    </div>\r\n                    <button type=\"submit\" class=\"btn btn-primary\">\r\n                        Submit\r\n                    </button>\r\n                </form>\r\n            </div>\r\n            <div class=\"opening-time\">\r\n                <h3 class=\"row-flex-title\">Opening times</h3>              \r\n                <p>\r\n                    <span>Monday—Thursday: 08:00 — 22:00</span>\r\n                    <span>Friday—Saturday: 09:00 — 23:00 </span>\r\n                    <span>Sunday: 10:00 — 17:00</span>\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>`)\r\n    return footer\r\n}\r\n\r\nfunction showActivePage(element) {\r\n    const navItems = document.getElementsByClassName('nav-item');\r\n    for(let i = 0; i < navItems.length; i++){\r\n        if(i === element) {\r\n            navItems[i].classList.add('nav-item-active')\r\n        }\r\n        else navItems[i].classList.remove('nav-item-active');\r\n    };\r\n\r\n}\r\n\r\nfunction homePage() {\r\n    showActivePage(0);\r\n    const main = document.getElementById('main');\r\n    main.innerHTML = \" \";\r\n    main.appendChild((0,_pages_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n}\r\n\r\nfunction menuPage() {\r\n    showActivePage(1);\r\n    const main = document.getElementById('main');\r\n    main.innerHTML = \" \";\r\n    main.appendChild((0,_pages_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n}\r\n\r\nfunction contactPage() {\r\n    showActivePage(2);\r\n    const main = document.getElementById('main');\r\n    main.innerHTML = \" \";\r\n    main.appendChild((0,_pages_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\r\n}\r\n\r\nfunction init() {\r\n    content.appendChild(createheader());\r\n    content.appendChild(createMain());\r\n    content.appendChild(createMFooter());\r\n    const main = document.getElementById('main');\r\n    main.appendChild((0,_pages_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n}\r\n\r\ninit()\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getContactHTML)\n/* harmony export */ });\nfunction getContactHTML() {\r\n    return createContactHtml()\r\n}\r\n\r\nfunction createContactHtml(){\r\n    const contactContent = document.createElement('div');\r\n    contactContent.classList.add('contact');\r\n    contactContent.insertAdjacentHTML('beforeend', `\r\n    <div class=\"container\">\r\n        <header class=\"section-title\">\r\n            <h1>Contact us</h1>\r\n        </header>\r\n        <div class=\"contact-wrap\">\r\n            <div class=\"map\">\r\n            <iframe class=\"contact-frame\" src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d883.4988206311642!2d-75.17283107973782!3d39.94581608717842!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c639542012af%3A0xb01d50935f96e7cf!2zMTgxMyBMb21iYXJkIFN0LCBQaGlsYWRlbHBoaWEsIFBBIDE5MTQ2LCDQodCo0JA!5e0!3m2!1sru!2sua!4v1647851754855!5m2!1sru!2sua\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" language=en></iframe>\r\n            </div>\r\n            <div class=\"contact-info\">\r\n                <div class=\"contact-address\">\r\n                    <h3 class=\"row-flex-title\">Details</h3>                     \r\n                    <p>\r\n                        <span>123-456-7890</span>\r\n                        <span>1813 Lombard</span>\r\n                        <span>St, Philadelphia, PA</span>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>`)\r\n\r\n    return contactContent\r\n}\n\n//# sourceURL=webpack:///./pages/contact.js?");

/***/ }),

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getHomeHTML)\n/* harmony export */ });\n/* harmony import */ var _img_rest_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/rest.png */ \"./img/rest.png\");\n\r\n\r\nfunction getHomeHTML() {\r\n    return createHomeHTML()\r\n}\r\n\r\nfunction createHomeHTML() {\r\n    const homeContent = document.createElement('div');\r\n    homeContent.classList.add('home');\r\n\r\n    const homeBlock = document.createElement('div');\r\n    homeBlock.classList.add('home-block');\r\n\r\n    const homeTitle = document.createElement('h1');\r\n    homeTitle.textContent = \"Welcome To Fooddddie's Kitchen\";\r\n    homeBlock.appendChild(homeTitle);\r\n\r\n    const homeImgBlock = document.createElement('div');\r\n    homeImgBlock.classList.add('home-img');\r\n    const homeImg = document.createElement('img');\r\n    homeImg.src = _img_rest_png__WEBPACK_IMPORTED_MODULE_0__;\r\n    homeImg.alt = \"cafe\";\r\n    homeImgBlock.appendChild(homeImg);\r\n    homeBlock.appendChild(homeImgBlock);\r\n    homeContent.appendChild(homeBlock);\r\n    \r\n    return homeContent\r\n}\n\n//# sourceURL=webpack:///./pages/home.js?");

/***/ }),

/***/ "./pages/menu.js":
/*!***********************!*\
  !*** ./pages/menu.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getMenuHTML)\n/* harmony export */ });\n/* harmony import */ var _img_dish1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/dish1.png */ \"./img/dish1.png\");\n/* harmony import */ var _img_dish2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/dish2.png */ \"./img/dish2.png\");\n/* harmony import */ var _img_dish3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/dish3.png */ \"./img/dish3.png\");\n/* harmony import */ var _img_dish4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/dish4.png */ \"./img/dish4.png\");\n/* harmony import */ var _img_dish5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/dish5.png */ \"./img/dish5.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction getMenuHTML() {\r\n    return createMenuHTML()\r\n}\r\n\r\nlet dishes = {}\r\n\r\ndishes.borsh = {\r\n    name: \"Borsh\",\r\n    price: \"50₴\",\r\n    src: \"../src/img/borsh.jpg\",\r\n    ingr: \"Beet, carrot, cabbage, potato tubers, pepper, tomato.\"\r\n}\r\ndishes.spaghetti = {\r\n    name: \"Spaghetti Carbonara\",\r\n    price: \"138₴\",\r\n    src: _img_dish2_png__WEBPACK_IMPORTED_MODULE_1__,\r\n    ingr: \"Pasta, bacon, prosciutto, cream, soy sauce, parmesan, vegetable broth, garlic, parsley, egg\"\r\n}\r\ndishes.pasta = {\r\n    name: \"Pasta with cheese sauce, bacon and chicken\",\r\n    price: \"150₴\",\r\n    src: _img_dish1_png__WEBPACK_IMPORTED_MODULE_0__,\r\n    ingr: \"Tortilloni pasta, chicken thigh, garlic, sweet and sour sauce, salt, pepper, Cheddar cheese, bacon, onion, Parmesan cheese, premium flour, sunflower oil, butter, Viola cheese, chicken broth, soy sauce.\"\r\n}\r\ndishes.pizza1 = {\r\n    name: \"Pizza Four meats\",\r\n    price: \"218₴\",\r\n    src: _img_dish3_png__WEBPACK_IMPORTED_MODULE_2__,\r\n    ingr: \"Dough, tomato sauce, mozzarella cheese, Milano salami, picante, prosciutto, bresaola, arugula, parmesan, basil\"\r\n}\r\ndishes.pizza2 = {\r\n    name: \"Pizza with pear and Gorgonzola cheese\",\r\n    price: \"208₴\",\r\n    src: _img_dish4_png__WEBPACK_IMPORTED_MODULE_3__,\r\n    ingr: \"Dough, cream, mozzarella cheese, gorgonzola, pear, honey, parmesan\"\r\n}\r\n\r\ndishes.rabbit = {\r\n    name: \"Rabbit with porcini mushrooms and vegetables\",\r\n    price: \"235₴\",\r\n    src: _img_dish5_png__WEBPACK_IMPORTED_MODULE_4__,\r\n    ingr: \"Rabbit, porcini mushrooms, Viola cheese, broccoli, cauliflower, carrots, butter, parsley, thyme, Parmesan cheese, sunflower oil, mustard, wine vinegar, honey, shallots, Provence herbs, salt and pepper.\"\r\n}\r\n\r\nfunction createMenuHTML() {\r\n    const menuContent = document.createElement('div');\r\n    menuContent.classList.add('menu');\r\n\r\n    const container = document.createElement('div');\r\n    container.classList.add('container');\r\n\r\n    const header = document.createElement('header');\r\n    header.classList.add('section-title');\r\n    const headerTitle = document.createElement('h1');\r\n    headerTitle.textContent = \"Menu\";\r\n    header.appendChild(headerTitle);\r\n    container.appendChild(header);\r\n\r\n    const menuWrap = document.createElement('div');\r\n    menuWrap.classList.add('menu-wrap');\r\n    for(let item in dishes){\r\n        menuWrap.appendChild(createMenuItem(dishes[item]));\r\n    }\r\n\r\n    \r\n    container.appendChild(menuWrap);\r\n    menuContent.appendChild(container);\r\n    return menuContent\r\n}\r\n\r\nfunction createMenuItem(item) {\r\n    const menuItem = document.createElement('div');\r\n    menuItem.classList.add('menu-item');\r\n    const menuImg = document.createElement('div');\r\n    menuImg.classList.add('menu-img');\r\n    const img = document.createElement('img');\r\n    img.src = item.src;\r\n    img.alt = \"dish\";\r\n    menuImg.appendChild(img);\r\n    menuItem.appendChild(menuImg);\r\n\r\n    const menuName = document.createElement('div');\r\n    menuName.classList.add('menu-name');\r\n    const menuTitle = document.createElement('h3');\r\n    menuTitle.textContent = item.name;\r\n    menuName.appendChild(menuTitle);\r\n    menuItem.appendChild(menuName);\r\n\r\n    const menuPrice = document.createElement('div');\r\n    menuPrice.classList.add('menu-price');\r\n    const menuSpan = document.createElement('span');\r\n    menuSpan.textContent = item.price;\r\n    menuPrice.appendChild(menuSpan);\r\n    menuItem.appendChild(menuPrice);\r\n\r\n    const menuLine = document.createElement('div');\r\n    menuLine.classList.add('menu-line');\r\n    menuItem.appendChild(menuLine);\r\n\r\n    const menuIngr = document.createElement('div');\r\n    menuIngr.classList.add('menu-ingredients');\r\n    const menuIngrText = document.createElement('p');\r\n    menuIngrText.textContent = item.ingr;\r\n    menuIngr.appendChild(menuIngrText);\r\n    menuItem.appendChild(menuIngr);\r\n    return menuItem\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./pages/menu.js?");

/***/ }),

/***/ "./img/dish1.png":
/*!***********************!*\
  !*** ./img/dish1.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f71f6accf6a6415f0438.png\";\n\n//# sourceURL=webpack:///./img/dish1.png?");

/***/ }),

/***/ "./img/dish2.png":
/*!***********************!*\
  !*** ./img/dish2.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"76a7e3522d63ebf9078a.png\";\n\n//# sourceURL=webpack:///./img/dish2.png?");

/***/ }),

/***/ "./img/dish3.png":
/*!***********************!*\
  !*** ./img/dish3.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"610172ea52ec7ad3e801.png\";\n\n//# sourceURL=webpack:///./img/dish3.png?");

/***/ }),

/***/ "./img/dish4.png":
/*!***********************!*\
  !*** ./img/dish4.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"05b14e9e84b01b8a2744.png\";\n\n//# sourceURL=webpack:///./img/dish4.png?");

/***/ }),

/***/ "./img/dish5.png":
/*!***********************!*\
  !*** ./img/dish5.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"512b190ffbb7f6136dc1.png\";\n\n//# sourceURL=webpack:///./img/dish5.png?");

/***/ }),

/***/ "./img/logo.jpg":
/*!**********************!*\
  !*** ./img/logo.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5986017d86f09cca8b21.jpg\";\n\n//# sourceURL=webpack:///./img/logo.jpg?");

/***/ }),

/***/ "./img/menu.jpg":
/*!**********************!*\
  !*** ./img/menu.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6c9952d50ea8025a3429.jpg\";\n\n//# sourceURL=webpack:///./img/menu.jpg?");

/***/ }),

/***/ "./img/rest.png":
/*!**********************!*\
  !*** ./img/rest.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"38649ce4fa47717a5758.png\";\n\n//# sourceURL=webpack:///./img/rest.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;