/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "main": () => (/* binding */ main)
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(530);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(o, allowArrayLike) {var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];if (!it) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = it.call(o);}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var mallHistory = eval("require")("scripts/utils/mallhistory.js");var

ItemType;(function (ItemType) {ItemType[ItemType["UNTRADEABLE_ITEM"] = 0] = "UNTRADEABLE_ITEM";ItemType[ItemType["BOOK"] = 1] = "BOOK";ItemType[ItemType["PROPERTY"] = 2] = "PROPERTY";ItemType[ItemType["EUDORA"] = 3] = "EUDORA";ItemType[ItemType["VISIT_URL_CHECK"] = 4] = "VISIT_URL_CHECK";})(ItemType || (ItemType = {}));var











AccValStuff = function AccValStuff() {_classCallCheck(this, AccValStuff);_defineProperty(this, "itemType", void 0);_defineProperty(this, "tradeableItem", void 0);_defineProperty(this, "data1", void 0);_defineProperty(this, "data2", void 0);};var






AccountVal = /*#__PURE__*/function () {





  function AccountVal(tradeableOnly) {_classCallCheck(this, AccountVal);_defineProperty(this, "tradeableOnly", void 0);_defineProperty(this, "history", void 0);_defineProperty(this, "visitCache", new Map());_defineProperty(this, "ownedItems", new Map());
    this.tradeableOnly = tradeableOnly;
    this.history = new mallHistory.MallHistory();
    this.loadItems();
  }_createClass(AccountVal, [{ key: "loadItems", value:

    function loadItems() {var _iterator = _createForOfIteratorHelper(
      Item.all()),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var item = _step.value;
          var amount =
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.storageAmount)(item) +
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.closetAmount)(item) +
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.displayAmount)(item) +
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedAmount)(item) +
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.itemAmount)(item) +
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.shopAmount)(item);

          if (amount == 0) {
            continue;
          }

          this.ownedItems.set(item, amount);
        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}

      if (!this.tradeableOnly) {
        var stuff = this.loadAccountValStuff();var _iterator2 = _createForOfIteratorHelper(

        stuff),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var s = _step2.value;
            if (s.itemType == ItemType.UNTRADEABLE_ITEM) {
              var count = this.ownedItems.get(Item.get(s.data1));

              if (count == null) {
                continue;
              }

              this.ownedItems.delete(Item.get(s.data1));

              this.addItem(s.tradeableItem, count);
            } else if (s.itemType == ItemType.BOOK) {
              if (this.visitCheck("campground.php?action=bookshelf", s.data1)) {
                this.addItem(s.tradeableItem, 1);
              }
            } else if (s.itemType == ItemType.EUDORA) {
              if (this.visitCheck("account.php?tab=correspondence", s.data1)) {
                this.addItem(s.tradeableItem, 1);
              }
            } else if (s.itemType == ItemType.PROPERTY) {
              if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)(s.data1) == "true") {
                this.addItem(s.tradeableItem, 1);
              }
            } else if (s.itemType == ItemType.VISIT_URL_CHECK) {
              if (this.visitCheck(s.data1, s.data2)) {
                this.addItem(s.tradeableItem, 1);
              }
            }
          }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}var _iterator3 = _createForOfIteratorHelper(

        Familiar.all()),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var fam = _step3.value;
            if (!(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveFamiliar)(fam)) {
              continue;
            }

            this.addItem(fam.hatchling, 1);
          }} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}

        if (this.ownedItems.get(Item.get("gregarious ghostling")) > 0) {
          // I hate that this is hardcoded but that's the way it is for now
          this.addItem(Item.get("box o' ghosts"), 1);
        }
      }var _iterator4 = _createForOfIteratorHelper(

      Item.all()),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var _item = _step4.value;
          if (_item.tradeable || (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosellPrice)(_item) > 0) {
            continue;
          }

          this.ownedItems.delete(_item);
        }} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}
    } }, { key: "doCheck", value:

    function doCheck() {
      var checked = 0;
      var items = [];
      var lastPrinted = Date.now();var _iterator5 = _createForOfIteratorHelper(

      this.ownedItems.keys()),_step5;try {for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {var _i2 = _step5.value;
          if (++checked % 20 == 0 && lastPrinted + 1000 < Date.now()) {
            lastPrinted = Date.now();
            (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
            "Checking value of " +
            _i2 +
            " (" +
            checked +
            " / " +
            this.ownedItems.size +
            ")",
            "blue");

          }

          items.push([_i2, this.itemPrice(_i2)]);
        }} catch (err) {_iterator5.e(err);} finally {_iterator5.f();}

      var netvalue = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMeat)() + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myClosetMeat)() + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myStorageMeat)();

      items.sort(
      (v1, v2) =>
      (v1[1] <= 0 ? 999999999 : v1[1]) * this.ownedItems.get(v1[0]) -
      (v2[1] <= 0 ? 999999999 : v2[1]) * this.ownedItems.get(v2[0]));


      for (var _i = 0, _items = items; _i < _items.length; _i++) {var i = _items[_i];
        var totalWorth = i[1] * this.ownedItems.get(i[0]);
        netvalue += totalWorth;

        if (totalWorth <= 0) {
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
          this.ownedItems.get(i[0]) + " " + i[0] + " that is mall extinct!");

        } else {
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
          this.ownedItems.get(i[0]) +
          " " +
          i[0] +
          " worth a total of " +
          this.getNumber(totalWorth));

        }
      }

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("You are worth " + this.getNumber(netvalue) + " meat!");

      var mrAWorth = (0.0 + netvalue) / 40000000; //this.itemPrice(Item.get("Mr. Accessory"));

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
      "Going by the value of a Mr. Accessory, that's $" +
      this.getNumber(mrAWorth * 10));

    } }, { key: "addItem", value:

    function addItem(item, count) {
      if (this.ownedItems.has(item)) {
        count += this.ownedItems.get(item);
      }

      this.ownedItems.set(item, count);
    } }, { key: "visitCheck", value:

    function visitCheck(url, find) {
      var page = this.visitCache.get(url);

      if (page == null) {
        page = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)(url);
        this.visitCache.set(url, page);
      }

      return page.includes(find);
    } }, { key: "loadAccountValStuff", value:

    function loadAccountValStuff() {
      var buffer = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.fileToBuffer)("accountval_binds.txt");
      var values = [];var _iterator6 = _createForOfIteratorHelper(

      buffer.split("\n")),_step6;try {for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {var line = _step6.value;
          var spl = line.split("\t");

          if (spl.length < 2) {
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
              break;}


          var v = new AccValStuff();

          v.itemType = e;
          v.tradeableItem = Item.get(spl[1]);
          v.data1 = spl[2];
          v.data2 = spl[3];

          values.push(v);
        }} catch (err) {_iterator6.e(err);} finally {_iterator6.f();}

      return values;
    } }, { key: "itemPrice", value:

    function itemPrice(item) {var ignoreFold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!item.tradeable) {
        return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosellPrice)(item);
      }

      if (
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.historicalAge)(item) < 14 ||
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.historicalPrice)(item) > 0 && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.historicalPrice)(item) < 10000)
      {
        return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.historicalPrice)(item);
      }

      var soldRecently = this.history.getAmountSold(item, 14);

      if (soldRecently >= 1) {
        return this.history.getPriceSold(item, 14);
      }

      var lowestMall = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.mallPrice)(item);

      if (ignoreFold) {
        return lowestMall;
      }

      for (var _i3 = 0, _Object$keys = Object.keys((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getRelated)(item, "fold")); _i3 < _Object$keys.length; _i3++) {var foldable = _Object$keys[_i3];
        var folded = Item.get(foldable);

        lowestMall = Math.min(this.itemPrice(folded, true));
      }

      return lowestMall;
    } }, { key: "getNumber", value:

    function getNumber(number) {var trimAt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      var str = number.toString().split(".");

      if (str.length > 1 && str[1].length > trimAt) {
        str[1] = str[1].substring(0, trimAt);
      }

      str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return str.join(".");
    } }]);return AccountVal;}();


function main(tradeableOnly) {
  if (tradeableOnly == null) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
    "To check the value of only tradeable items, provide `true` as a parameter!",
    "blue");

  }

  new AccountVal(tradeableOnly).doCheck();
}
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;