/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FT": () => (/* binding */ PriceType),
/* harmony export */   "Zi": () => (/* binding */ PriceResolver)
/* harmony export */ });
/* unused harmony export ItemPrice */
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(530);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}



var PriceType;(function (PriceType) {PriceType[PriceType["HISTORICAL"] = 0] = "HISTORICAL";PriceType[PriceType["MALL"] = 1] = "MALL";PriceType[PriceType["MALL_SALES"] = 2] = "MALL_SALES";})(PriceType || (PriceType = {}));





var ItemPrice = /*#__PURE__*/_createClass(





function ItemPrice(
item,
price,
accuracy,
daysOutdated)
{_classCallCheck(this, ItemPrice);_defineProperty(this, "item", void 0);_defineProperty(this, "price", void 0);_defineProperty(this, "accuracy", void 0);_defineProperty(this, "daysOutdated", void 0);
  this.item = item;
  this.price = price;
  this.accuracy = accuracy;
  this.daysOutdated = daysOutdated;
});


var PriceResolver = /*#__PURE__*/function () {




  function PriceResolver(settings) {_classCallCheck(this, PriceResolver);_defineProperty(this, "history", void 0);_defineProperty(this, "specialCase", new Map());_defineProperty(this, "settings", void 0);
    try {
      this.history = new (eval("require")(
      "scripts/utils/mallhistory.js").
      MallHistory)();
    } catch (e) {
      if (e != null && e.message != null && e.message.includes(" not found.")) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
        "A required library seems to be missing! This should've been installed automatically, try running in CLI:",
        "red");

        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.printHtml)(
        "<u color='gray'>svn checkout https://github.com/libraryaddict/KolMallHistory/branches/release/</u>");

        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("");
      }

      throw e;
    }

    this.settings = settings;
    this.fillSpecialCase();
  }_createClass(PriceResolver, [{ key: "fillSpecialCase", value:

    function fillSpecialCase() {
      this.specialCase.set(Item.get("Meat Paste"), 10);
      this.specialCase.set(Item.get("Meat Stack"), 100);
      this.specialCase.set(Item.get("Dense meat stack"), 1000);
    } }, { key: "itemPrice", value:

    function itemPrice(
    item,
    amount)


    {var ignoreFold = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;var forcePricing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      if (this.specialCase.has(item)) {
        return new ItemPrice(item, this.specialCase.get(item), PriceType.MALL, 0);
      }

      if (!item.tradeable) {
        return new ItemPrice(item, (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosellPrice)(item), PriceType.MALL, 0);
      }

      // If less than 2 weeks old, or less than 2m rough worth of them and less than 10k worth and less than 60 days old
      var histPrice = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.historicalPrice)(item);

      if (histPrice > 0) {
        var stackWorth = histPrice * amount;
        var maxHistAge =
        histPrice < this.settings.cheapItemsWorth ||
        stackWorth < this.settings.cheapTotalsLessThan ?
        this.settings.cheapHistoricalAge :
        this.settings.maxHistoricalAge;

        var atMallMin =
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosellPrice)(item) > 0 &&
        Math.max((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosellPrice)(item), 100) == histPrice;

        if (
        forcePricing == PriceType.HISTORICAL ||
        atMallMin ||
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.historicalAge)(item) < maxHistAge)
        {
          return new ItemPrice(
          item,
          histPrice,
          PriceType.HISTORICAL,
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.historicalAge)(item));

        }
      }

      if (forcePricing != PriceType.MALL) {
        var records = this.history.getMallRecords(
        item,
        this.settings.maxMallSalesAge);


        var soldRecently = records.getAmountSold(this.settings.maxMallSalesAge);

        if (soldRecently >= 1) {
          return new ItemPrice(
          item,
          this.history.getPriceSold(item, 14),
          PriceType.MALL_SALES,
          (Date.now() / 1000 - records.lastUpdated) / (60 * 60 * 24));

        }
      }

      var lowestMall = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.mallPrice)(item);

      if (ignoreFold) {
        return new ItemPrice(item, lowestMall, PriceType.MALL, 0);
      }

      for (var _i = 0, _Object$keys = Object.keys((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getRelated)(item, "fold")); _i < _Object$keys.length; _i++) {var foldable = _Object$keys[_i];
        var folded = Item.get(foldable);
        var p = this.itemPrice(folded, amount, true, PriceType.MALL).price;

        if (p <= 0) {
          continue;
        }

        lowestMall = Math.min(p, lowestMall);
      }

      return new ItemPrice(item, lowestMall, PriceType.MALL, 0);
    } }]);return PriceResolver;}();

/***/ }),

/***/ 530:
/***/ ((module) => {

module.exports = require("kolmafia");

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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ValItem": () => (/* binding */ ValItem),
  "main": () => (/* binding */ main)
});

// EXTERNAL MODULE: external "kolmafia"
var external_kolmafia_ = __webpack_require__(530);
;// CONCATENATED MODULE: ./src/ItemResolver.ts
function _createForOfIteratorHelper(o, allowArrayLike) {var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];if (!it) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = it.call(o);}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
var

AccValStuff = /*#__PURE__*/_createClass(function AccValStuff() {_classCallCheck(this, AccValStuff);_defineProperty(this, "itemType", void 0);_defineProperty(this, "tradeableItem", void 0);_defineProperty(this, "data1", void 0);_defineProperty(this, "data2", void 0);});var






ItemType;(function (ItemType) {ItemType[ItemType["UNTRADEABLE_ITEM"] = 0] = "UNTRADEABLE_ITEM";ItemType[ItemType["BOOK"] = 1] = "BOOK";ItemType[ItemType["PROPERTY"] = 2] = "PROPERTY";ItemType[ItemType["EUDORA"] = 3] = "EUDORA";ItemType[ItemType["VISIT_URL_CHECK"] = 4] = "VISIT_URL_CHECK";})(ItemType || (ItemType = {}));











var ItemResolver = /*#__PURE__*/function () {



  function ItemResolver() {_classCallCheck(this, ItemResolver);_defineProperty(this, "visitCache", new Map());_defineProperty(this, "accValStuff", void 0);
    this.accValStuff = this.loadAccountValStuff();
  }_createClass(ItemResolver, [{ key: "isWorkshedAndTradeable", value:

    function isWorkshedAndTradeable(item) {
      var foundShed = false;
      var foundNontradeable = false;var _iterator = _createForOfIteratorHelper(

      this.accValStuff),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var s = _step.value;
          if (s.tradeableItem != item) {
            continue;
          }

          if (
          s.itemType == ItemType.VISIT_URL_CHECK &&
          s.data1.includes("workshed"))
          {
            foundShed = true;
          } else if (s.itemType == ItemType.UNTRADEABLE_ITEM) {
            foundNontradeable = true;
          }
        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}

      return foundShed && !foundNontradeable;
    }

    /**
     * Get the items from stuff like url visits
     */ }, { key: "getUrledItems", value:
    function getUrledItems() {var workshedOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var items = [];var _iterator2 = _createForOfIteratorHelper(

      this.accValStuff),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var s = _step2.value;
          if (workshedOnly && !s.data1.includes("campground.php?action=workshed")) {
            continue;
          }

          if (s.itemType == ItemType.BOOK) {
            if (this.visitCheck("campground.php?action=bookshelf", s.data1)) {
              items.push(s.tradeableItem);
            }
          } else if (s.itemType == ItemType.EUDORA) {
            if (this.visitCheck("account.php?tab=correspondence", s.data1)) {
              items.push(s.tradeableItem);
            }
          } else if (s.itemType == ItemType.PROPERTY) {
            if ((0,external_kolmafia_.getProperty)(s.data1) == "true") {
              items.push(s.tradeableItem);
            }
          } else if (s.itemType == ItemType.VISIT_URL_CHECK) {
            if (this.visitCheck(s.data1, s.data2)) {
              items.push(s.tradeableItem);
            }
          }
        }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}

      return items;
    } }, { key: "addItem", value:

    function addItem(
    ownedItems,
    item,
    name,
    bound)

    {var count = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      var v = new ValItem(item, name, bound);

      ownedItems.set(v, (ownedItems.get(v) | 0) + count);
    } }, { key: "resolveBoundToTradeables", value:

    function resolveBoundToTradeables(
    copy,
    ownedItems)
    {var _iterator3 = _createForOfIteratorHelper(
      this.accValStuff),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var s = _step3.value;
          if (s.itemType != ItemType.UNTRADEABLE_ITEM) {
            continue;
          }

          try {
            var item = Item.get(s.data1);

            var count = void 0;var _iterator4 = _createForOfIteratorHelper(

            copy.keys()),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var k = _step4.value;
                if (k.tradeableItem != item) {
                  continue;
                }

                count = copy.get(k);
                break;
              }} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}

            if (count == null) {
              continue;
            }

            this.addItem(ownedItems, s.tradeableItem, item.name, "Bound", count);
          } catch (e) {
            (0,external_kolmafia_.print)("You probably need to update mafia! Got an error! " + e, "red");
          }
        }} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}
    } }, { key: "resolveFamiliars", value:

    function resolveFamiliars(ownedItems) {var _iterator5 = _createForOfIteratorHelper(
      Familiar.all()),_step5;try {for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {var fam = _step5.value;
          if (!(0,external_kolmafia_.haveFamiliar)(fam) || !fam.hatchling.tradeable) {
            continue;
          }

          this.addItem(ownedItems, fam.hatchling, fam + "", "Familiar");
        }} catch (err) {_iterator5.e(err);} finally {_iterator5.f();}
    } }, { key: "visitCheck", value:

    function visitCheck(url, find) {
      var page = this.visitCache.get(url);

      if (page == null) {
        page = (0,external_kolmafia_.visitUrl)(url);
        this.visitCache.set(url, page);
      }

      return page.includes(find);
    } }, { key: "loadAccountValStuff", value:

    function loadAccountValStuff() {
      var buffer = (0,external_kolmafia_.fileToBuffer)("accountval_binds.txt");
      var values = [];
      var version = 0;
      var expectedVersion = 1;var _iterator6 = _createForOfIteratorHelper(

      buffer.split("\n")),_step6;try {for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {var line = _step6.value;
          var spl = line.split("\t");

          if (spl.length < 2 || spl[0].startsWith("#")) {
            continue;
          }

          var e = void 0;

          switch (spl[0]) {
            case "i":
              e = ItemType.UNTRADEABLE_ITEM;
              break;
            case "b":
              e = ItemType.BOOK;
              break;
            case "p":
              e = ItemType.PROPERTY;
              break;
            case "e":
              e = ItemType.EUDORA;
              break;
            case "v":
              e = ItemType.VISIT_URL_CHECK;
              break;
            case "version":
              version = (0,external_kolmafia_.toInt)(spl[1]);
              continue;}


          try {
            var v = new AccValStuff();

            v.itemType = e;
            v.tradeableItem = Item.get(spl[1]);
            v.data1 = spl[2];
            v.data2 = spl[3];

            values.push(v);

            if (!v.tradeableItem.tradeable) {
              (0,external_kolmafia_.print)(
              "Uh, looks like a typo was made. " +
              v.tradeableItem +
              " is not a tradeable item..",
              "red");

            }
          } catch (e) {
            (0,external_kolmafia_.print)("You probably need to update mafia! Got an error! " + e, "red");
          }
        }} catch (err) {_iterator6.e(err);} finally {_iterator6.f();}

      if (version == null || version < expectedVersion) {
        (0,external_kolmafia_.print)(
        "Your accountval_binds.txt is out of date! Try reinstalling AccountVal. Expected version " +
        expectedVersion +
        ", but got version " +
        version,
        "red");

        (0,external_kolmafia_.wait)(3);
      }

      return values;
    } }]);return ItemResolver;}();
// EXTERNAL MODULE: ./src/PriceResolver.ts
var PriceResolver = __webpack_require__(238);
;// CONCATENATED MODULE: ./src/AccountValSettings.ts
function AccountValSettings_createForOfIteratorHelper(o, allowArrayLike) {var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];if (!it) {if (Array.isArray(o) || (it = AccountValSettings_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = it.call(o);}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function AccountValSettings_unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return AccountValSettings_arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return AccountValSettings_arrayLikeToArray(o, minLen);}function AccountValSettings_arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function AccountValSettings_defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function AccountValSettings_createClass(Constructor, protoProps, staticProps) {if (protoProps) AccountValSettings_defineProperties(Constructor.prototype, protoProps);if (staticProps) AccountValSettings_defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}function AccountValSettings_classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function AccountValSettings_defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var ValSetting = /*#__PURE__*/AccountValSettings_createClass(function ValSetting() {AccountValSettings_classCallCheck(this, ValSetting);AccountValSettings_defineProperty(this, "field", void 0);AccountValSettings_defineProperty(this, "names", void 0);AccountValSettings_defineProperty(this, "desc", void 0);});





var AccountValSettings = /*#__PURE__*/function () {function AccountValSettings() {AccountValSettings_classCallCheck(this, AccountValSettings);AccountValSettings_defineProperty(this, "fetchCloset", void 0);AccountValSettings_defineProperty(this, "fetchStorage", void 0);AccountValSettings_defineProperty(this, "fetchInventory", void 0);AccountValSettings_defineProperty(this, "fetchShop", void 0);AccountValSettings_defineProperty(this, "fetchDisplaycase", void 0);AccountValSettings_defineProperty(this, "fetchEverywhere",





    true);AccountValSettings_defineProperty(this, "doSuperFast",
    false);AccountValSettings_defineProperty(this, "doTradeables", void 0);AccountValSettings_defineProperty(this, "doNontradeables", void 0);AccountValSettings_defineProperty(this, "doBound", void 0);AccountValSettings_defineProperty(this, "doFamiliars", void 0);AccountValSettings_defineProperty(this, "playerId", void 0);AccountValSettings_defineProperty(this, "displayLimit",





    100);AccountValSettings_defineProperty(this, "minimumMeat",
    0);}AccountValSettings_createClass(AccountValSettings, [{ key: "doSettings", value:








































































































    function doSettings(args) {var _this = this;
      var unknown = [];
      var incompatible = [
      [
      "fetchCloset",
      "fetchStorage",
      "fetchShop",
      "fetchInventory",
      "fetchDisplaycase"],

      ["doTradeables", "doNontradeables", "doBound", "doFamiliars"]];

      var settings = AccountValSettings.getSettings();var _iterator = AccountValSettings_createForOfIteratorHelper(

      args),_step;try {var _loop = function _loop() {var arg = _step.value;
          if (arg.length == 0) {
            return "continue";
          }

          var field = null;
          var name = arg.
          split("=")[0].
          toLowerCase().
          replace("-", "").
          replace("+", "").
          replace("!", "");

          settings.forEach((setting) => {
            if (!setting.names.includes(name)) {
              return;
            }

            field = setting.field;
          });

          if (field == null) {
            unknown.push(arg);
            return "continue";
          }

          var isTrue = !arg.startsWith("-") && !arg.startsWith("!");

          if (arg.startsWith("-") || arg.startsWith("+") || arg.startsWith("!")) {
            arg = arg.substring(1);
          } else if (arg.includes("=") && !field.startsWith("=")) {
            isTrue = (0,external_kolmafia_.toBoolean)(arg.split("=")[1]);
          }

          if (field.startsWith("=")) {
            if (!arg.includes("=")) {
              unknown.push(arg);
              return "continue";
            }

            var v = arg.substring(arg.indexOf("=") + 1);

            if (v.length == 0) {
              unknown.push(arg);
              return "continue";
            }

            if (field == "=playerId") {
              if (!v.match(/[0-9]+/)) {
                v = (0,external_kolmafia_.getPlayerId)(v);
              }
            }

            if (!v.match(/[0-9]+/)) {
              unknown.push(arg);
              return "continue";
            }

            _this[field.substring(1)] = (0,external_kolmafia_.toInt)(v);
          } else {
            _this[field] = isTrue;
          }};for (_iterator.s(); !(_step = _iterator.n()).done;) {var _ret = _loop();if (_ret === "continue") continue;
        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}

      var wasSet = Object.keys(this).filter((k) => this[k] == true);
      this.fetchEverywhere =
      incompatible[0].find((v) => wasSet.includes(v)) == null;

      if (!this.fetchEverywhere) {
        if (this.doBound == null) {
          this.doBound = false;
        }

        if (this.doFamiliars == null) {
          this.doFamiliars = false;
        }
      }var _iterator2 = AccountValSettings_createForOfIteratorHelper(

      settings.map((s) => s.field)),_step2;try {var _loop2 = function _loop2() {var f = _step2.value;
          if (_this[f] != null) {
            return "continue";
          }

          var incomp = incompatible.filter((v) => v.includes(f))[0];

          if (incomp == null) {
            return "continue";
          }

          _this[f] = incomp.find((i) => wasSet.includes(i)) == null;};for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var _ret2 = _loop2();if (_ret2 === "continue") continue;
        }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}

      return unknown;
    } }, { key: "isArg", value:

    function isArg(arg, args) {
      arg = arg.toLowerCase().split("=")[0];var _iterator3 = AccountValSettings_createForOfIteratorHelper(

      args),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var a = _step3.value;
          if (arg != a) {
            continue;
          }

          return true;
        }} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}

      return false;
    } }], [{ key: "getSettings", value: function getSettings() {var settings = [];function makeSetting(name, aliases, desc) {var setting = new ValSetting();setting.field = name;setting.names = aliases;setting.desc = desc;settings.push(setting);}makeSetting("fetchCloset", ["closet", "clos"], "Should it fetch from the closet");makeSetting("fetchStorage", ["storage", "stor", "hagnk", "hagnks"], "Should it fetch from storage");makeSetting("fetchShop", ["store", "mall", "shop"], "Should it fetch from the shop");makeSetting("fetchInventory", ["inventory", "inv"], "Should it fetch from your inventory");makeSetting("fetchDisplaycase", ["displaycase", "display", "dc"], "Should it fetch from the displaycase");makeSetting("doTradeables", ["tradeable", "tradeables", "trade", "tradable", "true"], "Should it do tradeables");makeSetting("doNontradeables", ["notrade", "nontrade", "notradeable", "notradable", "nontradeable", "notradeables", "nontradeables", "untrade", "untradeable", "untradeables"], "Should it do non-tradeables (Resolves to tradeables if it can)");makeSetting("doFamiliars", ["familiar", "familiars", "fam", "fams", "hatchling", "hatchlings"], "Should it do familiars (Resolves to their item)");makeSetting("doBound", ["bound", "bind", "bounded", "binds", "binded"], "Should it do items that are bound to your account (Generally only iotms)");makeSetting("=minimumMeat", ["minmeat", "minimummeat", "meat", "minmeat", "min-meat"], "Each item total worth, at least this amount. (meat=4000)");makeSetting("=displayLimit", ["limit", "displaylimit", "maxdisplay"], "Limit results to display this amount (limit=100)");makeSetting("=playerId", ["player", "playerid", "playername", "user", "who", "target", "name", "username"], "Target another player's DC and Shop. Can provide the dc/shop param");makeSetting("doSuperFast", ["fast", "superfast", "speed", "quick", "rough"], "Try resolve everything with historical price, no matter how outdated");return settings;} }]);return AccountValSettings;}();


var PricingSettings = /*#__PURE__*/function () {function PricingSettings() {AccountValSettings_classCallCheck(this, PricingSettings);AccountValSettings_defineProperty(this, "cheapHistoricalAge",
    300);AccountValSettings_defineProperty(this, "cheapItemsWorth",
    1000);AccountValSettings_defineProperty(this, "cheapTotalsLessThan",
    2000000);AccountValSettings_defineProperty(this, "maxHistoricalAge",


    14);AccountValSettings_defineProperty(this, "maxMallSalesAge",


    14);}AccountValSettings_createClass(PricingSettings, [{ key: "doSettings", value:

    function doSettings(args) {
      var unknown = [];var _iterator4 = AccountValSettings_createForOfIteratorHelper(

      args),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var arg = _step4.value;
          if (arg.length == 0) {
            continue;
          }

          if (this.isArg(arg, ["max-age", "age"])) {
            var amount = arg.split("=")[1];

            if (amount != null && amount.match(/[0-9]+/)) {
              this.maxHistoricalAge = (0,external_kolmafia_.toInt)(amount);
              this.maxMallSalesAge = (0,external_kolmafia_.toInt)(amount);
              continue;
            }
          }

          unknown.push(arg);
        }} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}

      return unknown;
    } }, { key: "isArg", value:

    function isArg(arg, args) {
      arg = arg.toLowerCase().split("=")[0];var _iterator5 = AccountValSettings_createForOfIteratorHelper(

      args),_step5;try {for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {var a = _step5.value;
          if (arg != a) {
            continue;
          }

          return true;
        }} catch (err) {_iterator5.e(err);} finally {_iterator5.f();}

      return false;
    } }]);return PricingSettings;}();
;// CONCATENATED MODULE: ./src/PageResolver.ts
function PageResolver_createForOfIteratorHelper(o, allowArrayLike) {var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];if (!it) {if (Array.isArray(o) || (it = PageResolver_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = it.call(o);}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function PageResolver_unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return PageResolver_arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return PageResolver_arrayLikeToArray(o, minLen);}function PageResolver_arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function PageResolver_defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function PageResolver_createClass(Constructor, protoProps, staticProps) {if (protoProps) PageResolver_defineProperties(Constructor.prototype, protoProps);if (staticProps) PageResolver_defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}function PageResolver_classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function PageResolver_defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var StoreItem = /*#__PURE__*/PageResolver_createClass(function StoreItem() {PageResolver_classCallCheck(this, StoreItem);PageResolver_defineProperty(this, "item", void 0);PageResolver_defineProperty(this, "amount", void 0);PageResolver_defineProperty(this, "limit", void 0);PageResolver_defineProperty(this, "price", void 0);});






var FetchFromPage = /*#__PURE__*/function () {function FetchFromPage() {PageResolver_classCallCheck(this, FetchFromPage);}PageResolver_createClass(FetchFromPage, [{ key: "getStore", value:
    function getStore(userId) {
      var items = [];

      var page = (0,external_kolmafia_.visitUrl)("mallstore.php?whichstore=" + userId);var _iterator = PageResolver_createForOfIteratorHelper(

      page.split("<tr>")),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var s = _step.value;
          var match = s.match(
          /selecteditem=(\d+).+?<b>.+?<\/b> \((\d+)\) +(?:\(Limit (\d+) \/ day\))?<\/td><td>((?:\d|,)+) Meat<\/td>/);


          if (match == null) {
            continue;
          }

          var item = new StoreItem();
          item.item = (0,external_kolmafia_.toItem)(match[1].substring(0, match[1].length - 9));
          item.amount = (0,external_kolmafia_.toInt)(match[2]);
          item.limit = match[3] == null ? 0 : (0,external_kolmafia_.toInt)(match[3]);
          item.price = (0,external_kolmafia_.toInt)(match[4]);

          items.push(item);
        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}

      return items;
    } }, { key: "getDisplaycase", value:

    function getDisplaycase(userId) {
      var map = new Map();

      var page = (0,external_kolmafia_.visitUrl)("displaycollection.php?who=" + userId);var _iterator2 = PageResolver_createForOfIteratorHelper(

      page.split("<tr>")),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var s = _step2.value;
          var match = s.match(
          /<td width=30 height=30><img src=".+?" class=hand onClick='descitem\((\d+),(\d+)\)'><\/td><td valign=center><b>.+?<\/b>(?: \(((?:\d|,)+)\))?<\/td><\/tr>/);


          if (match == null) {
            continue;
          }

          var item = null;var _iterator3 = PageResolver_createForOfIteratorHelper(

          Item.all()),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var i = _step3.value;
              if (i.descid != match[1]) {
                continue;
              }

              item = i;
              break;
            }} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}

          if (item == null) {
            (0,external_kolmafia_.print)("Unknown item description: " + match[1] + ", update mafia?");
            continue;
          }

          map.set(item, match[3] == null ? 1 : (0,external_kolmafia_.toInt)(match[3]));
        }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}

      return map;
    } }]);return FetchFromPage;}();
;// CONCATENATED MODULE: ./src/AccountVal.ts
function AccountVal_createForOfIteratorHelper(o, allowArrayLike) {var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];if (!it) {if (Array.isArray(o) || (it = AccountVal_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = it.call(o);}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function AccountVal_unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return AccountVal_arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return AccountVal_arrayLikeToArray(o, minLen);}function AccountVal_arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function AccountVal_defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function AccountVal_createClass(Constructor, protoProps, staticProps) {if (protoProps) AccountVal_defineProperties(Constructor.prototype, protoProps);if (staticProps) AccountVal_defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}function AccountVal_classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function AccountVal_defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}





var ValItem = /*#__PURE__*/AccountVal_createClass(




function ValItem(item) {var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : item.name;var bound = arguments.length > 2 ? arguments[2] : undefined;AccountVal_classCallCheck(this, ValItem);AccountVal_defineProperty(this, "name", void 0);AccountVal_defineProperty(this, "tradeableItem", void 0);AccountVal_defineProperty(this, "bound", void 0);
  this.name = name;
  this.tradeableItem = item;
  this.bound = bound;
});var


AccountVal = /*#__PURE__*/function () {






  function AccountVal(settings, priceSettings) {AccountVal_classCallCheck(this, AccountVal);AccountVal_defineProperty(this, "ownedItems", new Map());AccountVal_defineProperty(this, "resolver", new ItemResolver());AccountVal_defineProperty(this, "priceResolver", void 0);AccountVal_defineProperty(this, "prices", []);AccountVal_defineProperty(this, "settings", void 0);
    this.settings = settings;
    this.priceResolver = new PriceResolver/* PriceResolver */.Zi(priceSettings);
  }AccountVal_createClass(AccountVal, [{ key: "loadPageItems", value:

    function loadPageItems() {
      var pager = new FetchFromPage();

      if (this.settings.fetchShop) {
        var items = pager.getStore(this.settings.playerId);

        items.forEach((i) => {
          this.addItem(new ValItem(i.item), i.amount);
        });
      }

      if (this.settings.fetchDisplaycase) {
        var _items = pager.getDisplaycase(this.settings.playerId);

        _items.forEach((v, k) => {
          this.addItem(new ValItem(k), v);
        });
      }

      this.resolveNoTrades();
    } }, { key: "loadItems", value:

    function loadItems() {
      if (this.settings.playerId > 0) {
        this.loadPageItems();
        return;
      }var _iterator = AccountVal_createForOfIteratorHelper(

      Item.all()),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var _item2 = _step.value;
          var amount = 0;

          if (this.settings.fetchCloset) {
            amount += (0,external_kolmafia_.closetAmount)(_item2);
          }

          if (this.settings.fetchInventory) {
            amount += (0,external_kolmafia_.equippedAmount)(_item2) + (0,external_kolmafia_.itemAmount)(_item2);
          }

          if (this.settings.fetchShop) {
            amount += (0,external_kolmafia_.shopAmount)(_item2);
          }

          if (this.settings.fetchStorage) {
            amount += (0,external_kolmafia_.storageAmount)(_item2);
          }

          if (this.settings.fetchDisplaycase) {
            amount += (0,external_kolmafia_.displayAmount)(_item2);
          }

          if (amount == 0) {
            continue;
          }

          this.ownedItems.set(new ValItem(_item2), amount);
        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}

      this.resolveNoTrades();

      if (this.settings.doFamiliars) {
        this.resolver.resolveFamiliars(this.ownedItems);
      }

      if (this.settings.fetchEverywhere) {
        // Now we add items that are bound. But wait! Some of these are still tradeables!
        var _iterator2 = AccountVal_createForOfIteratorHelper(this.resolver.getUrledItems(!this.settings.doBound)),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var _item = _step2.value;
            var valItem = void 0;

            // If we're skipping bound items, or we're skipping untradeables
            if (!this.settings.doBound || !this.settings.doTradeables) {
              var tradeableWorkshed = this.resolver.isWorkshedAndTradeable(_item);

              if (
              tradeableWorkshed ?
              !this.settings.doTradeables :
              !this.settings.doBound)
              {
                continue;
              }

              if (tradeableWorkshed) {
                valItem = new ValItem(_item, _item.name, "In Use");
              }
            }

            if (valItem == null) {
              valItem = new ValItem(_item, _item.name, "Bound");
            }

            this.addItem(valItem);
          }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}
      }
    } }, { key: "resolveNoTrades", value:

    function resolveNoTrades() {
      var copy = new Map();

      this.ownedItems.forEach((v, k) => {
        copy.set(k, v);
      });var _iterator3 = AccountVal_createForOfIteratorHelper(

      this.ownedItems.keys()),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var _item3 = _step3.value;
          if (_item3.tradeableItem.tradeable) {
            if (this.settings.doTradeables) {
              continue;
            }
          } else {
            if (
            this.settings.doNontradeables &&
            (0,external_kolmafia_.autosellPrice)(_item3.tradeableItem) > 0)
            {
              continue;
            }
          }

          this.ownedItems.delete(_item3);
        }} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}

      if (this.settings.doBound) {
        this.resolver.resolveBoundToTradeables(copy, this.ownedItems);
      }
    } }, { key: "doPricing", value:

    function doPricing() {
      var checked = 0;
      var lastPrinted = Date.now();var _iterator4 = AccountVal_createForOfIteratorHelper(

      this.ownedItems.keys()),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var i = _step4.value;
          if (++checked % 20 == 0 && lastPrinted + 1000 < Date.now()) {
            lastPrinted = Date.now();
            (0,external_kolmafia_.print)(
            "Checking value of " +
            i +
            " (" +
            checked +
            " / " +
            this.ownedItems.size +
            ")",
            "blue");

          }

          var price = this.priceResolver.itemPrice(
          i.tradeableItem,
          this.ownedItems.get(i),
          false,
          this.settings.doSuperFast ? PriceResolver/* PriceType.HISTORICAL */.FT.HISTORICAL : null);


          if (price.price == 0) {
            price = this.priceResolver.itemPrice(
            i.tradeableItem,
            this.ownedItems.get(i),
            false,
            PriceResolver/* PriceType.MALL_SALES */.FT.MALL_SALES);

          }

          this.prices.push([i, price]);
        }} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}

      this.prices.sort(
      (v1, v2) =>
      (v1[1].price <= 0 ? 999999999 : v1[1].price) *
      this.ownedItems.get(v1[0]) -
      (v2[1].price <= 0 ? 999999999 : v2[1].price) *
      this.ownedItems.get(v2[0]));

    } }, { key: "doCheck", value:

    function doCheck() {
      var netvalue = 0;
      this.doPricing();

      var aWorth = this.priceResolver.itemPrice(
      Item.get("Mr. Accessory"),
      1).
      price;

      var lines = [];
      var mallExtinct = [];var _iterator5 = AccountVal_createForOfIteratorHelper(

      this.prices),_step5;try {for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {var _i = _step5.value;
          var _item4 = _i[0];
          var price = _i[1];
          var count = this.ownedItems.get(_item4);
          var totalWorth = price.price * count;
          netvalue += totalWorth;

          var name = this.escapeHTML(_item4.name);

          if (_item4.bound != null) {
            name = "".concat(name, " (<font color='#db2525'>").concat(this.escapeHTML(
            _item4.bound), "</font>)");

          }

          if (totalWorth <= 0) {
            if (count > 1) {
              mallExtinct.push(count + " @ " + name);
            } else {
              mallExtinct.push(name);
            }

            continue;
          }

          var text =
          this.getNumber(count) +
          " " +
          name +
          " worth a total of " +
          this.getNumber(totalWorth);

          var titleName = _item4.name;

          if (_item4.bound != null) {
            titleName = _item4.name + " (" + _item4.tradeableItem.name + ")";
          }

          var title =
          titleName +
          " @ " +
          this.getNumber(price.price) +
          " meat each. Price valid as of " +
          this.getNumber(price.daysOutdated, 1) +
          " days ago";

          lines.push(
          "<font title='" + this.escapeHTML(title) + "'>" + text + "</font>");

        }} catch (err) {_iterator5.e(err);} finally {_iterator5.f();}

      var skipping = Math.max(0, lines.length - this.settings.displayLimit);

      if (skipping > 0) {
        (0,external_kolmafia_.printHtml)(
        "<font color='gray'>Skipping " +
        this.getNumber(skipping) +
        " lines and displaying the last " +
        this.getNumber(this.settings.displayLimit) +
        " lines..</font>");

      }

      for (var i = skipping; i < lines.length; i++) {
        (0,external_kolmafia_.printHtml)(lines[i]);
      }

      if (mallExtinct.length > 0) {
        var colors = ["#4f5893", "#934f4f"];

        mallExtinct = mallExtinct.map(
        (s, i) => "<font color='" + colors[i % 2] + "'>" + s + "</font>");


        (0,external_kolmafia_.printHtml)(
        "There were " +
        mallExtinct.length +
        " mall extinct items! Items: " +
        mallExtinct.join(", "));

      }

      (0,external_kolmafia_.print)(
      (this.settings.playerId == null ? "You" : "They") +
      " are worth " +
      this.getNumber(netvalue) +
      " meat!",
      "blue");


      var mrAWorth = (0.0 + netvalue) / aWorth;

      (0,external_kolmafia_.print)(
      "Going by the value of a Mr. Accessory, that's $" +
      this.getNumber(mrAWorth * 10));


      var meat = 0;

      if (this.settings.fetchInventory) {
        meat += (0,external_kolmafia_.myMeat)();
      }

      if (this.settings.fetchCloset) {
        meat += (0,external_kolmafia_.myClosetMeat)();
      }

      if (this.settings.fetchStorage) {
        meat += (0,external_kolmafia_.myStorageMeat)();
      }

      if (meat > 0 && this.settings.playerId == null) {
        (0,external_kolmafia_.print)("This doesn't include your " + this.getNumber(meat) + " meat!");
      }
    } }, { key: "escapeHTML", value:

    function escapeHTML(str) {
      return str.
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/"/g, "&quot;").
      replace(/'/g, "&#039;");
    } }, { key: "addItem", value:

    function addItem(item) {var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      this.ownedItems.set(item, (this.ownedItems.get(item) | 0) + count);
    } }, { key: "getNumber", value:

    function getNumber(number) {var trimAt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      var str = number.toString().split(".");

      if (str.length > 1 && str[1].length > trimAt) {
        str[1] = str[1].substring(0, trimAt);
      }

      str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return str.join(".");
    } }, { key: "doHelp", value:

    function doHelp() {
      (0,external_kolmafia_.print)(
      "AccountVal is a script to check what your account is worth, and find the good stuff fast.",
      "blue");

      (0,external_kolmafia_.print)(
      "You can provide these as a parameter to accountval to do other stuff than the base script. Hover over them to see aliases.",
      "blue");

      (0,external_kolmafia_.printHtml)(
      "<font color='blue'>Use ! or - to negate a boolean option, as well as =. Eg:</font><font color='gray'> -bound !bound bound=false</font>");var _iterator6 = AccountVal_createForOfIteratorHelper(


      AccountValSettings.getSettings()),_step6;try {for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {var setting = _step6.value;
          (0,external_kolmafia_.printHtml)(
          "<font color='gray' title='Aliases: " +
          setting.names.join(", ") +
          "'>" +
          setting.names[0] +
          " - " +
          setting.desc +
          "</font>");

        }
        // show - How many to show, defaults to 100
        // count - How many we must have of this item
        // sortby - Indiv Price, Total Price, Amount
        // trade
        // accountval price>3000 iprice>3000 show
      } catch (err) {_iterator6.e(err);} finally {_iterator6.f();}} }]);return AccountVal;}();


function main(command) {
  var settings = new AccountValSettings();
  var priceSettings = new PricingSettings();
  var acc = new AccountVal(settings, priceSettings);

  try {
    if (command == null) {
      (0,external_kolmafia_.print)(
      "To fine tune what we check, including to tradeables only.. Provide the parameter 'help'",
      "blue");

      command = "";
    } else if (command.toLowerCase() == "help") {
      acc.doHelp();
      return;
    }

    var unknown = settings.doSettings(command.split(" "));

    unknown = priceSettings.doSettings(unknown);

    if (unknown.length > 0) {
      (0,external_kolmafia_.print)("Unrecognized params! " + unknown.join(", "), "red");
      return;
    }

    acc.loadItems();
    acc.doCheck();
  } finally {
    var revision = (0,external_kolmafia_.getRevision)();

    if (revision != null && revision > 0 && revision < 26000) {
      (0,external_kolmafia_.printHtml)(
      "<font color='red'>Warning! You are using an outdated version of KoLmafia! You're likely missing some items, and may not have the ability to render the 'title' attribute! You could even be missing wrapped text!</font>");

      (0,external_kolmafia_.printHtml)(
      "Downloads: <a color='blue' href='https://github.com/kolmafia/kolmafia/releases'>[Github]</a> or <a color='blue' href='https://ci.kolmafia.us/'>[Jenkins]</a> <a color='gray' href='https://ci.kolmafia.us/job/Kolmafia/lastSuccessfulBuild/artifact/dist/'>[Link to Jar]</a>");

    }
  }
}
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;