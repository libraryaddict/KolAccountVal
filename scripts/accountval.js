/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Og: () => (/* binding */ getAccountvalColors),
/* harmony export */   WY: () => (/* binding */ showAccountvalColors),
/* harmony export */   Zp: () => (/* binding */ AccountValColors),
/* harmony export */   qH: () => (/* binding */ loadAccountvalColors)
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(530);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];return arr2;}













var AccountValColors;

var map = new Map();

map.set("default", {
  attentionGrabbingWarning: "red",
  failedToParseSettings: "purple",
  minorNote: "gray",
  helpfulStateInfo: "blue",
  mallExtinctColor1: "#4f5893",
  mallExtinctColor2: "#934f4f",
  shopPricedOk: "#196f3d",
  shopPricesOverpriced: "#db2525",
  noteUntradeable: "red"
});

map.set("dark", {
  attentionGrabbingWarning: "red",
  failedToParseSettings: "purple",
  minorNote: "gray",
  helpfulStateInfo: "#3ccabb",
  mallExtinctColor1: "#6b7ade",
  mallExtinctColor2: "#d76d6d",
  shopPricedOk: "#269f59",
  shopPricesOverpriced: "#dd4040",
  noteUntradeable: "red"
});

function loadAccountvalColors(name) {
  if (!map.has(name)) {
    return false;
  }

  AccountValColors = map.get(name);

  return true;
}

function getAccountvalColors() {
  return _toConsumableArray(map.keys());
}

function showAccountvalColors(name) {
  if (!map.has(name)) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Can't find any colors by that name", "red");

    return;
  }

  var colors = map.get(name);

  for (var _i = 0, _Object$entries = Object.entries(colors); _i < _Object$entries.length; _i++) {var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),k = _Object$entries$_i[0],v = _Object$entries$_i[1];
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.printHtml)("<font color='".concat(v, "'>").concat(k, "</font>"));
  }
}

var def = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.isDarkMode)() ? "dark" : "default";

loadAccountvalColors(
  map.has((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)("accountvalColorScheme")) ?
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)("accountvalColorScheme") :
  def
);

/***/ }),

/***/ 689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mc: () => (/* binding */ AccountValLogic),
/* harmony export */   Ms: () => (/* binding */ ItemStatus),
/* harmony export */   oD: () => (/* binding */ ValItem)
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(530);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ItemResolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(226);
/* harmony import */ var _PriceResolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(238);
/* harmony import */ var _AccountValSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(280);
/* harmony import */ var _PageResolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var _AccountValColors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(767);
function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _createForOfIteratorHelper(o, allowArrayLike) {var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];if (!it) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = it.call(o);}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];return arr2;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}function _defineProperty(obj, key, value) {key = _toPropertyKey(key);if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toPropertyKey(arg) {var key = _toPrimitive(arg, "string");return typeof key === "symbol" ? key : String(key);}function _toPrimitive(input, hint) {if (typeof input !== "object" || input === null) return input;var prim = input[Symbol.toPrimitive];if (prim !== undefined) {var res = prim.call(input, hint || "default");if (typeof res !== "object") return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return (hint === "string" ? String : Number)(input);}






var ItemStatus = /*#__PURE__*/function (ItemStatus) {ItemStatus[ItemStatus["BOUND"] = 0] = "BOUND";ItemStatus[ItemStatus["NO_TRADE"] = 1] = "NO_TRADE";ItemStatus[ItemStatus["FAMILIAR"] = 2] = "FAMILIAR";ItemStatus[ItemStatus["IN_USE"] = 3] = "IN_USE";ItemStatus[ItemStatus["SHOP_WORTH"] = 4] = "SHOP_WORTH";return ItemStatus;}({});











var ValItem = /*#__PURE__*/function () {








  function ValItem(
  item)




  {var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : item.name;var pluralName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : item.plural;var bound = arguments.length > 3 ? arguments[3] : undefined;var snapshotSource = arguments.length > 4 ? arguments[4] : undefined;_classCallCheck(this, ValItem);_defineProperty(this, "name", void 0);_defineProperty(this, "pluralName", void 0);_defineProperty(this, "tradeableItem", void 0);_defineProperty(this, "bound", void 0);_defineProperty(this, "shopWorth", void 0);_defineProperty(this, "worthMultiplier", 1);_defineProperty(this, "snapshotSource", void 0);
    this.name = name;
    this.pluralName = pluralName;
    this.tradeableItem = item;
    this.bound = bound;
    this.snapshotSource = snapshotSource;

    if (this.bound == null && !item.tradeable) {
      this.bound = ItemStatus.NO_TRADE;
    }
  }_createClass(ValItem, [{ key: "getBound", value:

    function getBound() {
      if (this.bound == ItemStatus.BOUND) {
        return "Bound";
      } else if (this.bound == ItemStatus.FAMILIAR) {
        return "Familiar";
      } else if (this.bound == ItemStatus.IN_USE) {
        return "In Use";
      } else if (this.bound == ItemStatus.NO_TRADE) {
        return "Untradeable";
      }

      return null;
    } }, { key: "isBound", value:

    function isBound() {
      return this.bound == ItemStatus.BOUND || this.bound == ItemStatus.FAMILIAR;
    } }, { key: "isTradeable", value:

    function isTradeable() {
      return (
        this.bound == null ||
        this.bound == ItemStatus.IN_USE ||
        this.bound == ItemStatus.SHOP_WORTH);

    } }]);return ValItem;}();


var AccountValLogic = /*#__PURE__*/function () {







  function AccountValLogic(settings, priceSettings) {_classCallCheck(this, AccountValLogic);_defineProperty(this, "ownedItems", new Map());_defineProperty(this, "resolver", void 0);_defineProperty(this, "priceResolver", void 0);_defineProperty(this, "prices", []);_defineProperty(this, "settings", void 0);_defineProperty(this, "jsFilter", void 0);
    this.settings = settings;
    this.resolver = new _ItemResolver__WEBPACK_IMPORTED_MODULE_1__/* .ItemResolver */ .I();
    this.priceResolver = new _PriceResolver__WEBPACK_IMPORTED_MODULE_2__/* .PriceResolver */ .Zi(priceSettings);
  }_createClass(AccountValLogic, [{ key: "addItem", value:

    function addItem(item) {var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      this.ownedItems.set(item, (this.ownedItems.get(item) | 0) + count);
    } }, { key: "bindsIntoAccountFlag", value:

    function bindsIntoAccountFlag(itemType) {
      return (
        itemType != _ItemResolver__WEBPACK_IMPORTED_MODULE_1__/* .ItemType */ .q.CURRENCY && itemType != _ItemResolver__WEBPACK_IMPORTED_MODULE_1__/* .ItemType */ .q.UNTRADEABLE_ITEM);

    } }, { key: "loadPageItems", value:

    function loadPageItems() {
      var pager = new _PageResolver__WEBPACK_IMPORTED_MODULE_4__/* .FetchFromPage */ .l();

      if (this.settings.fetchShop) {
        var items = pager.getStore(this.settings.playerId);

        items.forEach((i) => {
          var item = new ValItem(i.item);

          if (this.settings.shopWorth) {
            item.bound = ItemStatus.SHOP_WORTH;
            item.shopWorth = i.price;
          }

          this.addItem(item, i.amount);
        });
      }

      if (this.settings.fetchDisplaycase) {
        var _items = pager.getDisplaycase(this.settings.playerId);

        _items.forEach((v, k) => {
          this.addItem(new ValItem(k), v);
        });
      }

      var resolvedFamiliars = false;

      if (this.settings.fetchFamiliars != false) {
        var familiars = pager.getFamiliars(this.settings.playerId);

        resolvedFamiliars = familiars.length > 0;

        this.resolver.resolveFamiliars(familiars, this.ownedItems);
      }

      if (this.settings.fetchSnapshot == true) {
        var snapshot = pager.getSnapshot((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getPlayerName)(this.settings.playerId));
        var _familiars = [];
        var skills = [];
        var _items2 = new Map();var _iterator = _createForOfIteratorHelper(

            snapshot),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var _item2 = _step.value;
            if (_item2 instanceof kolmafia__WEBPACK_IMPORTED_MODULE_0__.Familiar) {
              _familiars.push(_item2);
            } else if (_item2 instanceof kolmafia__WEBPACK_IMPORTED_MODULE_0__.Skill) {
              skills.push(_item2);
            } else if (_item2 instanceof kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item) {
              _items2.set(_item2, 1);
            } else {
              _items2.set(_item2[0], _item2[1]);
            }
          }} catch (err) {_iterator.e(err);} finally {_iterator.f();}

        if (!resolvedFamiliars && this.settings.fetchFamiliars) {
          this.resolver.resolveFamiliars(_familiars, this.ownedItems);
        }

        if (this.settings.doBound) {var _iterator2 = _createForOfIteratorHelper(
              this.resolver.accValStuff.filter(
                (s) => s.itemType == _ItemResolver__WEBPACK_IMPORTED_MODULE_1__/* .ItemType */ .q.SKILL && skills.includes(s.skill)
              )),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var _item = _step2.value;
              this.addItem(
                new ValItem(
                  _item.actualItem,
                  _item.actualItem.name,
                  _item.actualItem.plural,
                  ItemStatus.BOUND
                )
              );
            }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}
        }

        var owned = new Map(
          _toConsumableArray(this.ownedItems).map((_ref) => {var _ref2 = _slicedToArray(_ref, 2),k = _ref2[0],v = _ref2[1];return [k.tradeableItem, [k, v]];})
        );

        _items2.forEach((v, k) => {
          var boundItem = this.resolver.accValStuff.find(
            (i) => i.actualItem == k
          );

          if (boundItem == null) {
            v -= owned.has(k) ? owned.get(k)[1] : 0;

            if (v <= 0) {
              return;
            }

            this.addItem(new ValItem(k), v);

            return;
          } else if (owned.has(k) && owned.get(k)[0].isBound()) {
            return;
          } else if (
          boundItem.untradeableItem != null &&
          owned.has(boundItem.untradeableItem))
          {
            return;
          }

          var name = k.name;
          var plural = k.plural;

          if (boundItem.itemType == _ItemResolver__WEBPACK_IMPORTED_MODULE_1__/* .ItemType */ .q.UNTRADEABLE_ITEM) {
            var untradeable = boundItem.untradeableItem;

            v -= owned.has(k) ? owned.get(k)[1] : 0;

            if (v <= 0) {
              return;
            }

            name = untradeable.name;
            plural = untradeable.plural;
          }

          this.addItem(
            new ValItem(k, name, plural, ItemStatus.BOUND, "av-snapshot"),
            v
          );
        });
      }

      this.resolveNoTrades();
    } }, { key: "loadJsFilter", value:

    function loadJsFilter() {
      if (this.settings.javascriptFilter == "") {
        return;
      }

      while (this.settings.javascriptFilter.includes("$kol")) {
        this.settings.javascriptFilter = this.settings.javascriptFilter.replace(
          "$kol",
          'require("kolmafia")'
        );
      }

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
        "JS Filter has been set to: " + this.settings.javascriptFilter,
        _AccountValColors__WEBPACK_IMPORTED_MODULE_5__/* .AccountValColors */ .Zp.minorNote
      );

      try {
        this.jsFilter = eval(
          "with (require(\"kolmafia\")) " + this.settings.javascriptFilter
        );
      } catch (e) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
          "Invalid jsfilter provided! Error as follows:",
          _AccountValColors__WEBPACK_IMPORTED_MODULE_5__/* .AccountValColors */ .Zp.attentionGrabbingWarning
        );
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)();
        throw e;
      }
    } }, { key: "loadItems", value:

    function loadItems() {
      this.loadJsFilter();

      if (this.settings.playerId > 0) {
        this.loadPageItems();

        return;
      }

      var famItems = this.resolver.resolveFamiliarItems();
      var sessionItems = this.resolver.resolveSessionItems();
      var mega = this.settings.fetchInventory ?
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getInventory)() :
      {};

      var add = (stuff) => {
        Object.keys(stuff).forEach((k) => {var _mega$k;
          mega[k] = ((_mega$k = mega[k]) !== null && _mega$k !== void 0 ? _mega$k : 0) + stuff[k];
        });
      };

      if (this.settings.fetchCloset) {
        add((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getCloset)());
      }

      if (this.settings.fetchStorage) {
        add((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getStorage)());
      }

      if (this.settings.fetchClan) {
        add((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getStash)());
      }

      if (this.settings.fetchDisplaycase) {
        add((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getDisplay)());
      }

      if (this.settings.fetchShop && !this.settings.shopWorth) {
        add((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getShop)());
      }var _iterator3 = _createForOfIteratorHelper(

          kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.all()),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var _mega$_item4$name;var _item4 = _step3.value;
          var _amount = (_mega$_item4$name = mega[_item4.name]) !== null && _mega$_item4$name !== void 0 ? _mega$_item4$name : 0;

          if (this.settings.fetchSession) {var _sessionItems$get;
            _amount += (_sessionItems$get = sessionItems.get(_item4)) !== null && _sessionItems$get !== void 0 ? _sessionItems$get : 0;
          }

          if (this.settings.fetchInventory) {var _famItems$get;
            _amount += (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedAmount)(_item4) + ((_famItems$get = famItems.get(_item4)) !== null && _famItems$get !== void 0 ? _famItems$get : 0);
          }

          if (
          this.settings.fetchShop &&
          this.settings.shopWorth &&
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.shopAmount)(_item4) > 0)
          {
            var _i = new ValItem(_item4);
            _i.bound = ItemStatus.SHOP_WORTH;
            _i.shopWorth = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.shopPrice)(_item4);

            this.ownedItems.set(_i, (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.shopAmount)(_item4));
            continue;
          }

          if (_amount == 0) {
            continue;
          }

          this.ownedItems.set(new ValItem(_item4), _amount);
        }} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}

      if (this.settings.fetchFamiliars != false) {
        this.resolver.resolveFamiliars(
          kolmafia__WEBPACK_IMPORTED_MODULE_0__.Familiar.all().filter((f) => (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveFamiliar)(f)),
          this.ownedItems
        );
      }

      // Check our current workshed
      if (this.settings.fetchingEverywhereish) {
        if (this.settings.doBound || this.settings.doTradeables) {
          var i = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getWorkshed)();

          if (i != null && i != kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.none) {
            if (
            i.tradeable ? this.settings.doTradeables : this.settings.doBound)
            {
              this.addItem(new ValItem(i, i.name, i.plural, ItemStatus.IN_USE));
            }
          }
        }
      }

      if (this.settings.doBound) {var _iterator4 = _createForOfIteratorHelper(
            this.resolver.getUrledItems()),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var _item3 = _step4.value;
            if (
            _item3[0].tradeable && (
            _item3[1] == ItemStatus.FAMILIAR || _item3[1] != ItemStatus.BOUND) ?
            !this.settings.doTradeables :
            !this.settings.doBound)
            {
              continue;
            }

            this.addItem(
              new ValItem(_item3[0], _item3[0].name, _item3[0].plural, _item3[1])
            );
          }} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}
      }

      this.resolveNoTrades();
    } }, { key: "resolveNoTrades", value:

    function resolveNoTrades() {
      var copy = {};

      this.ownedItems.forEach((v, k) => {
        copy[k.tradeableItem.name] = [k, v];
      });

      if (this.settings.doBound || this.settings.doNontradeables) {
        this.resolver.resolveBoundToTradeables(copy, this.ownedItems, [
        this.settings.doBound ? _ItemResolver__WEBPACK_IMPORTED_MODULE_1__/* .ItemType */ .q.UNTRADEABLE_ITEM : null,
        this.settings.doNontradeables ? _ItemResolver__WEBPACK_IMPORTED_MODULE_1__/* .ItemType */ .q.CURRENCY : null]
        );
      }var _iterator5 = _createForOfIteratorHelper(

          this.ownedItems.keys()),_step5;try {for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {var _item5 = _step5.value;
          if (
          this.jsFilter != null &&
          !this.jsFilter(_item5.tradeableItem, this.ownedItems.get(_item5)))
          {
            this.ownedItems.delete(_item5);
            continue;
          }

          // If item can't be resolved to a price at all
          if (
          !_item5.isBound() && (
          !_item5.tradeableItem.tradeable || _item5.tradeableItem.gift) &&
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosellPrice)(_item5.tradeableItem) == 0)
          {
            this.ownedItems.delete(_item5);
            continue;
          }

          if (this.ownedItems.get(_item5) < this.settings.minimumAmount) {
            this.ownedItems.delete(_item5);
            continue;
          }

          // If we're not doing bound items, and this is a bound item..
          if (
          !this.settings.doBound &&
          _item5.isBound() &&
          _item5.bound != ItemStatus.FAMILIAR)
          {
            this.ownedItems.delete(_item5);
            continue;
          }

          // If we're not doing familiars and this is a familiar
          if (
          _item5.bound == ItemStatus.FAMILIAR && (
          this.settings.fetchFamiliars == false ||
          this.settings.fetchFamiliars == null && !this.settings.doBound))
          {
            this.ownedItems.delete(_item5);
            continue;
          }

          // If we're not doing tradeables, and this isn't a bound item, and is tradeable
          if (
          !this.settings.doTradeables &&
          _item5.tradeableItem.tradeable &&
          _item5.isTradeable())
          {
            this.ownedItems.delete(_item5);
            continue;
          }

          // If we're not doing non-tradeables, and this is a non-tradeable that isn't bound. Also is worth something..
          if (
          !this.settings.doNontradeables &&
          !_item5.tradeableItem.tradeable &&
          !_item5.isBound())
          {
            this.ownedItems.delete(_item5);
            continue;
          }
        }} catch (err) {_iterator5.e(err);} finally {_iterator5.f();}
    } }, { key: "doPricing", value:

    function doPricing() {
      var lastPrinted = 0;
      var toCheck = [];
      var settings = this.settings;
      var prices = this.prices;
      var ownedItems = this.ownedItems;

      var addPrice = function addPrice(item, price) {
        if (
        settings.minimumMeat > 0 &&
        price.price * item.worthMultiplier < settings.minimumMeat)
        {
          ownedItems.delete(item);

          return;
        }

        if (settings.sales > 0 && price.volume < settings.sales) {
          ownedItems.delete(item);

          return;
        }

        prices.push([item, price]);
      };var _iterator6 = _createForOfIteratorHelper(

          this.ownedItems.keys()),_step6;try {for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {var _i3 = _step6.value;
          var _price = this.priceResolver.itemPrice(
            _i3.tradeableItem,
            this.ownedItems.get(_i3),
            false,
            this.settings.doSuperFast ?
            _PriceResolver__WEBPACK_IMPORTED_MODULE_2__/* .PriceType */ .FT.HISTORICAL :
            this.settings.useLastSold ?
            _PriceResolver__WEBPACK_IMPORTED_MODULE_2__/* .PriceType */ .FT.MALL_SALES :
            null,
            this.settings.doSuperFast,
            true
          );

          if (_price.price > 0 || _price.accuracy == _PriceResolver__WEBPACK_IMPORTED_MODULE_2__/* .PriceType */ .FT.NEW_PRICES) {
            addPrice(_i3, _price);
          } else {
            toCheck.push([_i3, _price]);
          }
        }

        // TODO Sort tocheck
      } catch (err) {_iterator6.e(err);} finally {_iterator6.f();}
      var checked = -1;

      if (toCheck.length > 200) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
          "Think this will take too long? Use the parameter 'fast', it's less accurate!",
          _AccountValColors__WEBPACK_IMPORTED_MODULE_5__/* .AccountValColors */ .Zp.helpfulStateInfo
        );
      }

      for (var _i2 = 0, _toCheck = toCheck; _i2 < _toCheck.length; _i2++) {var check = _toCheck[_i2];
        var i = check[0];

        if (++checked % 20 == 0 && lastPrinted + 1000 < Date.now()) {
          lastPrinted = Date.now();
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
            "Checking value of " +
            i.name +
            " (" +
            checked +
            " / " +
            toCheck.length +
            ")",
            _AccountValColors__WEBPACK_IMPORTED_MODULE_5__/* .AccountValColors */ .Zp.helpfulStateInfo
          );
        }

        var price = this.priceResolver.itemPrice(
          i.tradeableItem,
          this.ownedItems.get(i),
          false,
          check[1].accuracy
        );

        addPrice(i, price);
      }

      this.doSort();
    } }, { key: "doSort", value:

    function doSort() {
      if (this.settings.sortBy == _AccountValSettings__WEBPACK_IMPORTED_MODULE_3__/* .SortBy */ .hn.TOTAL_PRICE) {
        this.prices.sort(
          (v1, v2) =>
          (v1[1].price <= 0 ?
          999999999 :
          1 / v1[0].worthMultiplier * v1[1].price) *
          this.ownedItems.get(v1[0]) -
          (v2[1].price <= 0 ?
          999999999 :
          1 / v2[0].worthMultiplier * v2[1].price) *
          this.ownedItems.get(v2[0])
        );
      } else if (this.settings.sortBy == _AccountValSettings__WEBPACK_IMPORTED_MODULE_3__/* .SortBy */ .hn.PRICE) {
        this.prices.sort(
          (v1, v2) =>
          (v1[1].price <= 0 ?
          999999999 :
          1 / v1[0].worthMultiplier * v1[1].price) - (
          v2[1].price <= 0 ?
          999999999 :
          1 / v2[0].worthMultiplier * v2[1].price)
        );
      } else if (this.settings.sortBy == _AccountValSettings__WEBPACK_IMPORTED_MODULE_3__/* .SortBy */ .hn.QUANTITY) {
        this.prices.sort(
          (v1, v2) => this.ownedItems.get(v1[0]) - this.ownedItems.get(v2[0])
        );
      } else if (this.settings.sortBy == _AccountValSettings__WEBPACK_IMPORTED_MODULE_3__/* .SortBy */ .hn.NAME) {
        this.prices.sort((v1, v2) => v1[0].name.localeCompare(v2[0].name));
      } else if (this.settings.sortBy == _AccountValSettings__WEBPACK_IMPORTED_MODULE_3__/* .SortBy */ .hn.ITEM_ID) {
        this.prices.sort(
          (v1, v2) => (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(v1[0].tradeableItem) - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(v2[0].tradeableItem)
        );
      } else if (this.settings.sortBy == _AccountValSettings__WEBPACK_IMPORTED_MODULE_3__/* .SortBy */ .hn.SALES_VOLUME) {
        this.prices.sort((v1, v2) => v1[1].volume - v2[1].volume);
      } else {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.abort)("Unknown sort option " + this.settings.sortBy);
      }

      if (this.settings.reverseSort) {
        this.prices.reverse();
      }
    } }]);return AccountValLogic;}();

/***/ }),

/***/ 280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Iz: () => (/* binding */ PricingSettings),
/* harmony export */   fS: () => (/* binding */ FieldType),
/* harmony export */   hn: () => (/* binding */ SortBy),
/* harmony export */   iX: () => (/* binding */ AccountValSettings)
/* harmony export */ });
/* unused harmony export ValSetting */
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(530);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AccountValColors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(767);
function _createForOfIteratorHelper(o, allowArrayLike) {var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];if (!it) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = it.call(o);}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];return arr2;}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperty(obj, key, value) {key = _toPropertyKey(key);if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toPropertyKey(arg) {var key = _toPrimitive(arg, "string");return typeof key === "symbol" ? key : String(key);}function _toPrimitive(input, hint) {if (typeof input !== "object" || input === null) return input;var prim = input[Symbol.toPrimitive];if (prim !== undefined) {var res = prim.call(input, hint || "default");if (typeof res !== "object") return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return (hint === "string" ? String : Number)(input);}


var FieldType = /*#__PURE__*/function (FieldType) {FieldType[FieldType["NUMBER"] = 0] = "NUMBER";FieldType[FieldType["SORTBY"] = 1] = "SORTBY";FieldType[FieldType["COLOR_SCHEME"] = 2] = "COLOR_SCHEME";FieldType[FieldType["BOOLEAN"] = 3] = "BOOLEAN";FieldType[FieldType["NAME"] = 4] = "NAME";FieldType[FieldType["STRING"] = 5] = "STRING";return FieldType;}({});








var ValSetting = /*#__PURE__*/_createClass(function ValSetting() {_classCallCheck(this, ValSetting);_defineProperty(this, "type", void 0);_defineProperty(this, "field", void 0);_defineProperty(this, "names", void 0);_defineProperty(this, "desc", void 0);});






var SortBy = /*#__PURE__*/function (SortBy) {SortBy[SortBy["NAME"] = 0] = "NAME";SortBy[SortBy["QUANTITY"] = 1] = "QUANTITY";SortBy[SortBy["PRICE"] = 2] = "PRICE";SortBy[SortBy["TOTAL_PRICE"] = 3] = "TOTAL_PRICE";SortBy[SortBy["SALES_VOLUME"] = 4] = "SALES_VOLUME";SortBy[SortBy["ITEM_ID"] = 5] = "ITEM_ID";return SortBy;}({});








var sortByAliases = new Map([
["count", SortBy.QUANTITY],
["amount", SortBy.QUANTITY],
["meat", SortBy.PRICE],
["totalmeat", SortBy.TOTAL_PRICE],
["totalprice", SortBy.TOTAL_PRICE],
["id", SortBy.ITEM_ID],
["sales", SortBy.SALES_VOLUME],
["sold", SortBy.SALES_VOLUME]]
);

var AccountValSettings = /*#__PURE__*/function () {function AccountValSettings() {_classCallCheck(this, AccountValSettings);_defineProperty(this, "fetchCloset", void 0);_defineProperty(this, "fetchStorage", void 0);_defineProperty(this, "fetchInventory", void 0);_defineProperty(this, "fetchShop", void 0);_defineProperty(this, "fetchDisplaycase", void 0);_defineProperty(this, "fetchSession",





    false);_defineProperty(this, "fetchClan",
    false);_defineProperty(this, "fetchingEverywhereish",
    true); // If we're fetching from everywhere but maybe some areas
    _defineProperty(this, "doSuperFast", false);_defineProperty(this, "doTradeables", void 0);_defineProperty(this, "doNontradeables", void 0);_defineProperty(this, "doBound", void 0);_defineProperty(this, "fetchFamiliars", void 0);_defineProperty(this, "fetchSnapshot", void 0);_defineProperty(this, "playerId",





    0);_defineProperty(this, "displayLimit",
    100);_defineProperty(this, "minimumMeat",
    0);_defineProperty(this, "minimumAmount",
    1);_defineProperty(this, "maxAge",
    999999);_defineProperty(this, "sales",
    0);_defineProperty(this, "sortBy",
    SortBy.TOTAL_PRICE);_defineProperty(this, "reverseSort",
    false);_defineProperty(this, "shopWorth",
    false);_defineProperty(this, "javascriptFilter",
    "");_defineProperty(this, "useLastSold",
    false);_defineProperty(this, "settingsDebug",
    false);_defineProperty(this, "brief",
    false);_defineProperty(this, "oldPricing",
    false);_defineProperty(this, "colorScheme",
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.isDarkMode)() ? "dark" : "default");}_createClass(AccountValSettings, [{ key: "getSetting", value:





































































































































































































































    function getSetting(alias) {
      alias = alias.toLowerCase();var _iterator = _createForOfIteratorHelper(

          AccountValSettings.getSettings()),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var setting = _step.value;
          if (!setting.names.includes(alias)) {
            continue;
          }

          return setting;
        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}

      return null;
    } }, { key: "doSettings", value:

    function doSettings(args) {var _this = this;
      var errors = [];
      var defaultValues = [];
      var wasSet = [];

      var settings = AccountValSettings.getSettings();var _iterator2 = _createForOfIteratorHelper(

          settings),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var _setting = _step2.value;
          defaultValues[_setting.field] = this[_setting.field];
        }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}

      var addUnknown = (arg) => {
        errors.push("Failed to handle parameter: <font color='".concat(
          _AccountValColors__WEBPACK_IMPORTED_MODULE_1__/* .AccountValColors */ .Zp.failedToParseSettings, "'>").concat(arg, "</font>")
        );
      };var _iterator3 = _createForOfIteratorHelper(

          args),_step3;try {var _loop = function _loop() {var arg = _step3.value;
            if (arg.length == 0) {return 0; // continue

            }

            if (arg == "debug") {
              _this.settingsDebug = true;return 0; // continue

            }

            var setting;
            var name = arg.
            split("=")[0].
            toLowerCase().
            replace("-", "").
            replace("+", "").
            replace("!", "");

            settings.forEach((s) => {
              if (!s.names.includes(name)) {
                return;
              }

              setting = s;
            });

            if (setting == null) {
              addUnknown(arg);return 0; // continue

            }

            var isTrue = !arg.startsWith("-") && !arg.startsWith("!");

            if (arg.startsWith("-") || arg.startsWith("+") || arg.startsWith("!")) {
              arg = arg.substring(1);
            } else if (arg.includes("=") && setting.type == FieldType.BOOLEAN) {
              var v = arg.substring(arg.indexOf("=") + 1);

              if (!v.toLowerCase().match("^(0|1|(true)|(false)|(yes)|(no))$")) {
                addUnknown(arg);return 0; // continue

              }

              isTrue = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toBoolean)(v);
            }

            if (setting.type == FieldType.SORTBY) {
              if (!arg.includes("=")) {
                addUnknown(arg);return 0; // continue

              }

              var _v = arg.substring(arg.indexOf("=") + 1);

              if (_v.length == 0) {
                addUnknown(arg);return 0; // continue

              }

              var sortBy =
              SortBy[
              Object.keys(SortBy).find((k) => k.toLowerCase() == _v.toLowerCase())];


              if (sortBy == null) {
                sortBy = sortByAliases.get(_v.toLowerCase());
              }

              if (sortBy == null) {
                addUnknown(arg);return 0; // continue

              }

              _this.sortBy = sortBy;
              _this.reverseSort = !isTrue;
            } else if (setting.type == FieldType.COLOR_SCHEME) {
              if (!arg.includes("=")) {
                addUnknown(arg);return 0; // continue

              }

              var _v2 = arg.substring(arg.indexOf("=") + 1);

              if (_v2.length == 0) {
                addUnknown(arg);return 0; // continue

              }

              if (!(0,_AccountValColors__WEBPACK_IMPORTED_MODULE_1__/* .getAccountvalColors */ .Og)().includes(_v2)) {
                addUnknown(arg);return 0; // continue

              }

              _this.colorScheme = _v2;
              (0,_AccountValColors__WEBPACK_IMPORTED_MODULE_1__/* .loadAccountvalColors */ .qH)(_v2);
            } else if (
            setting.type == FieldType.NUMBER ||
            setting.type == FieldType.NAME)
            {
              if (!arg.includes("=")) {
                addUnknown(arg);return 0; // continue

              }

              var _v3 = arg.substring(arg.indexOf("=") + 1);

              if (_v3.length == 0) {
                addUnknown(arg);return 0; // continue

              }

              if (setting.type == FieldType.NAME) {
                if (!_v3.match(/^[0-9]+$/)) {
                  _v3 = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getPlayerId)(_v3);

                  if (!_v3.match(/^[0-9]+$/)) {
                    errors.push("Failed to convert <font color='".concat(
                      _AccountValColors__WEBPACK_IMPORTED_MODULE_1__/* .AccountValColors */ .Zp.failedToParseSettings, "'>").concat(_v3, "</font> into a player ID")
                    );return 0; // continue

                  }
                }
              }

              var num = _this.toNumber(_v3);

              if (_v3 == null) {
                addUnknown(arg);return 0; // continue

              }

              _this[setting.field] = num;
            } else if (setting.type == FieldType.STRING) {
              if (!arg.includes("=")) {
                addUnknown(arg);return 0; // continue

              }

              var _v4 = arg.substring(arg.indexOf("=") + 1);

              if (_v4.length == 0) {
                addUnknown(arg);return 0; // continue

              }

              _this[setting.field] = _v4;
            } else {
              _this[setting.field] = isTrue;
              wasSet.push(setting.field);
            }
          },_ret;for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {_ret = _loop();if (_ret === 0) continue;}} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}

      var fetchSources = [
      "fetchCloset",
      "fetchStorage",
      "fetchShop",
      "fetchInventory",
      "fetchDisplaycase",
      "fetchClan",
      "fetchSession",
      "fetchFamiliars",
      "fetchSnapshot"];


      // We can do fams if bound isn't false
      // We can do bound if nontrade isn't false
      // We can do notrade if tradeables isn't true
      // We can do tradeables if non-trade isn't true

      this.fetchingEverywhereish =
      !this.fetchSession &&
      !this.fetchClan &&
      fetchSources.find((v) => wasSet.includes(v) && this[v]) == null;

      if (!wasSet.includes("doTradeables")) {
        this.doTradeables = this.doBound ?
        false :
        wasSet.includes("doNontradeables") ?
        !this.doNontradeables :
        true;
      }

      if (!wasSet.includes("doNontradeables")) {
        this.doNontradeables = this.doBound ?
        false :
        wasSet.includes("doTradeables") ?
        !this.doTradeables :
        true;
      }

      if (!wasSet.includes("doBound")) {
        this.doBound =
        (this.doTradeables || this.fetchingEverywhereish) &&
        this.doNontradeables;
      }

      if (!wasSet.includes("fetchFamiliars")) {
        this.fetchFamiliars = this.doBound;
      }

      for (var _i = 0, _fetchSources = fetchSources; _i < _fetchSources.length; _i++) {var fetchSource = _fetchSources[_i];
        if (this[fetchSource] != null) {
          continue;
        }

        this[fetchSource] = this.fetchingEverywhereish;
      }

      if (this.settingsDebug) {
        for (var _i2 = 0, _Object$keys = Object.keys(this); _i2 < _Object$keys.length; _i2++) {var setting = _Object$keys[_i2];
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(setting + " = " + this[setting]);
        }
      }

      return errors;
    } }, { key: "isArg", value:

    function isArg(arg, args) {
      arg = arg.toLowerCase().split("=")[0];var _iterator4 = _createForOfIteratorHelper(

          args),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var a = _step4.value;
          if (arg != a) {
            continue;
          }

          return true;
        }} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}

      return false;
    } }, { key: "toNumber", value:

    function toNumber(arg) {
      while (arg.includes(",")) {
        arg = arg.replace(",", "");
      }

      var match = arg.match(/^((?:\d+)|(?:\d*\.\d+))([mkb]?)$/);

      if (match == null) {
        return null;
      }

      var num = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toFloat)(match[1]);

      if (match[2] == "b") {
        num *= 1000000000;
      } else if (match[2] == "m") {
        num *= 1000000;
      } else if (match[2] == "k") {
        num *= 1000;
      }

      return num;
    } }], [{ key: "getSettings", value: function getSettings() {var settings = [];function makeSetting(type, name, aliases, desc) {var setting = new ValSetting();setting.type = type;setting.field = name;setting.names = aliases.map((s) => s.toLowerCase());setting.desc = desc;settings.push(setting);}makeSetting(FieldType.BOOLEAN, "fetchCloset", ["closet", "clos"], "Should it fetch from the closet");makeSetting(FieldType.BOOLEAN, "fetchStorage", ["storage", "stor", "hagnk", "hagnks"], "Should it fetch from storage");makeSetting(FieldType.BOOLEAN, "fetchShop", ["store", "mall", "shop"], "Should it fetch from the shop");makeSetting(FieldType.BOOLEAN, "fetchInventory", ["inventory", "inv"], "Should it fetch from your inventory");makeSetting(FieldType.BOOLEAN, "fetchDisplaycase", ["displaycase", "display", "dc"], "Should it fetch from the displaycase");makeSetting(FieldType.BOOLEAN, "fetchClan", ["clan", "stash"], "Should it check clan's stash? False by default");makeSetting(FieldType.BOOLEAN, "fetchSession", ["session"], "Should it fetch using your current session of items acquired? False by default");makeSetting(FieldType.BOOLEAN, "doTradeables", ["tradeable", "tradeables", "trade", "tradable"], "Should it do tradeables");makeSetting(FieldType.BOOLEAN, "doNontradeables", ["notrade", "nontrade", "notradeable", "notradable", "nontradeable", "notradeables", "nontradeables", "untrade", "untradeable", "untradeables"], "Should it do non-tradeables (Resolves to tradeables if it can)");makeSetting(FieldType.BOOLEAN, "fetchFamiliars", ["familiar", "familiars", "fam", "fams", "hatchling", "hatchlings"], "Should it do familiars (Resolves to their item). Bound being true also means this is true if not set");makeSetting(FieldType.BOOLEAN, "fetchSnapshot", ["snapshot"], "Should it attempt to use av-snapshot?");makeSetting(FieldType.BOOLEAN, "doBound", ["bound", "bind", "bounded", "binds", "binded"], "Should it do items that are bound to your account (Generally only iotms)");makeSetting(FieldType.NUMBER, "minimumMeat", ["meat", "minmeat", "minimummeat", "minmeat", "min-meat", "minprice", "price"], "Each item total worth, at least this amount.");makeSetting(FieldType.NUMBER, "minimumAmount", ["amount", "count", "minimumamount", "minamount"], "At least this many items");makeSetting(FieldType.NUMBER, "displayLimit", ["limit", "displaylimit", "maxdisplay", "lines"], "Limit results to display this amount");makeSetting(FieldType.NAME, "playerId", ["player", "playerid", "playername", "user", "who", "target", "name", "username"], 'Target another player\'s DC and Shop. Can provide the dc/shop param. Can do player="John Smith" for spaces');makeSetting(FieldType.BOOLEAN, "doSuperFast", ["fast", "superfast", "speed", "quick", "rough"], "Try resolve everything with historical price, no matter how outdated");makeSetting(FieldType.NUMBER, "maxAge", ["age", "maxage", "days"], "The max days a price is allowed to be outdated, useful if you're trying to force things to be more up to date");makeSetting(FieldType.SORTBY, "sortBy", ["sort", "sortby", "sorted"], "What we should sort the results by, prefix with ! or - to reverse sort. Supports: " + Object.keys(SortBy).filter((s) => s.length > 2).join(", "));makeSetting(FieldType.BOOLEAN, "shopWorth", ["worth", "shopworth", "pricing", "prices"], "Seperates items in shop from the other items, and shows how under/overpriced they are. This can be inaccurate");makeSetting(FieldType.STRING, "javascriptFilter", ["jsfilter", "javascriptfilter", "javascript", "js"], 'Filters if an item can be shown, provides an item & amount and expects a boolean. Any double quotes in your code must not have an empty space to the right. Example: jsfilter="(item, amount) => item.name.includes("beer") && toSlot(item) != Slot.none"');makeSetting(FieldType.NUMBER, "sales", ["sales"], "Hides items that have less than this amount of sales");makeSetting(FieldType.BOOLEAN, "useLastSold", ["useLastSold", "lastsold", "soldprice"], "Resolve prices by their last sold, initial runs with this parameter can be quite slow");makeSetting(FieldType.BOOLEAN, "brief", ["brief"], "Prints out a single line as the final result, the total meat.");makeSetting(FieldType.BOOLEAN, "oldPricing", ["oldpricing"], "Has accountval calculate prices from the old slower and more inaccurate method");makeSetting(FieldType.BOOLEAN, "oldPricing", ["oldpricing"], "Has accountval calculate prices from the old slower and more inaccurate method");makeSetting(FieldType.COLOR_SCHEME, "colorScheme", ["color", "colors", "colorscheme", "scheme"], "What color schemes to use, set `accountvalColorScheme` pref to change the default. Supports: " + (0,_AccountValColors__WEBPACK_IMPORTED_MODULE_1__/* .getAccountvalColors */ .Og)().join(", "));return settings;} }]);return AccountValSettings;}();


var PricingSettings = /*#__PURE__*/function () {function PricingSettings() {_classCallCheck(this, PricingSettings);_defineProperty(this, "expensivePricesAt",
    40000000);_defineProperty(this, "cheapTotalsLessThan",
    20000000);_defineProperty(this, "cheapPricesLessThan",
    2000000);_defineProperty(this, "maxPriceAge", void 0);_defineProperty(this, "oldPricing", void 0);}_createClass(PricingSettings, [{ key: "getMaxPriceAge", value:



    /**
     * A scaler on where we want stuff that's lower priced, to be updated less often. Returns day count.
     */
    function getMaxPriceAge(price, amount) {
      return Math.min(this.maxPriceAge, this.internalMaxPriceAge(price, amount));
    } }, { key: "internalMaxPriceAge", value:

    function internalMaxPriceAge(price, amount) {
      if (price > this.expensivePricesAt) {
        return 30;
      }

      var total = price * amount;

      if (total > this.cheapTotalsLessThan) {
        return amount > 10 ? 90 : 180;
      }

      if (price > this.cheapPricesLessThan) {
        return Math.max(90, 180 - amount * 5);
      }

      if (price > 1000) {
        return 365;
      }

      return 900;
    } }]);return PricingSettings;}();

/***/ }),

/***/ 226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ ItemResolver),
/* harmony export */   q: () => (/* binding */ ItemType)
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(530);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var _AccountValColors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(767);
function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _createForOfIteratorHelper(o, allowArrayLike) {var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];if (!it) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = it.call(o);}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];return arr2;}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperty(obj, key, value) {key = _toPropertyKey(key);if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toPropertyKey(arg) {var key = _toPrimitive(arg, "string");return typeof key === "symbol" ? key : String(key);}function _toPrimitive(input, hint) {if (typeof input !== "object" || input === null) return input;var prim = input[Symbol.toPrimitive];if (prim !== undefined) {var res = prim.call(input, hint || "default");if (typeof res !== "object") return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return (hint === "string" ? String : Number)(input);}

var

AccValStuff = /*#__PURE__*/_createClass(function AccValStuff() {_classCallCheck(this, AccValStuff);_defineProperty(this, "itemType", void 0);_defineProperty(this, "actualItem", void 0);_defineProperty(this, "skill", void 0);_defineProperty(this, "untradeableItem", void 0);_defineProperty(this, "garden", void 0);_defineProperty(this, "script", void 0);_defineProperty(this, "userSetting", void 0);_defineProperty(this, "visitUrlLink", void 0);_defineProperty(this, "visitUrlIncludes", void 0);_defineProperty(this, "correspondence", void 0);_defineProperty(this, "currencyAmount", void 0);});













var ItemType = /*#__PURE__*/function (ItemType) {ItemType[ItemType["UNTRADEABLE_ITEM"] = 0] = "UNTRADEABLE_ITEM";ItemType[ItemType["BOOK"] = 1] = "BOOK";ItemType[ItemType["PROPERTY"] = 2] = "PROPERTY";ItemType[ItemType["EUDORA"] = 3] = "EUDORA";ItemType[ItemType["GARDEN"] = 4] = "GARDEN";ItemType[ItemType["VISIT_URL_CHECK"] = 5] = "VISIT_URL_CHECK";ItemType[ItemType["SKILL"] = 6] = "SKILL";ItemType[ItemType["CURRENCY"] = 7] = "CURRENCY";ItemType[ItemType["CAMPGROUND"] = 8] = "CAMPGROUND";ItemType[ItemType["SCRIPT"] = 9] = "SCRIPT";return ItemType;}({});





















var ItemResolver = /*#__PURE__*/function () {





  function ItemResolver() {_classCallCheck(this, ItemResolver);_defineProperty(this, "visitCache", new Map());_defineProperty(this, "accValStuff", void 0);_defineProperty(this, "accountValCache", new Map());_defineProperty(this, "accountValVisitCachePropName", "_accountValVisitCache");
    this.accValStuff = this.loadAccountValStuff();
  }_createClass(ItemResolver, [{ key: "loadCache", value:

    function loadCache() {
      var prop = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)(this.accountValVisitCachePropName).split(
        ","
      );var _iterator = _createForOfIteratorHelper(

          prop),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var p = _step.value;
          if (!p.includes(":")) {
            continue;
          }

          var spl = p.split(":");

          this.accountValCache.set((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toItem)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(spl[0])), spl[1].startsWith("t"));
        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}
    } }, { key: "saveCache", value:

    function saveCache() {
      var values = [];

      this.accountValCache.forEach((val, key) => {
        values.push((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(key) + ":" + (val ? "t" : "f"));
      });

      values.sort((v1, v2) => v1.localeCompare(v2));

      var val = values.join(",");

      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)(this.accountValVisitCachePropName) == val) {
        return;
      }

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)(this.accountValVisitCachePropName, values.join(","));
    }

    /**
     * Get the items from stuff like url visits
     */ }, { key: "getUrledItems", value:
    function getUrledItems() {
      var items = [];
      var origSize = this.accountValCache.size;var _iterator2 = _createForOfIteratorHelper(

          this.accValStuff),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var s = _step2.value;
          // Skills that are marked as no-perm but are permed, basically librams
          if (s.itemType == ItemType.BOOK) {
            if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveSkill)(s.skill)) {
              items.push([s.actualItem, _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus */ .Ms.BOUND]);
            }
          } else if (s.itemType == ItemType.EUDORA) {
            if (
            this.visitCheck(
              s.actualItem,
              "account.php?tab=correspondence",
              s.correspondence
            ))
            {
              items.push([s.actualItem, _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus */ .Ms.BOUND]);
            }
          } else if (s.itemType == ItemType.PROPERTY) {
            if (this.testProperty(s.userSetting)) {
              items.push([s.actualItem, _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus */ .Ms.BOUND]);
            }
          } else if (s.itemType == ItemType.VISIT_URL_CHECK) {
            if (this.visitCheck(s.actualItem, s.visitUrlLink, s.visitUrlIncludes)) {
              items.push([s.actualItem, _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus */ .Ms.BOUND]);
            }
          } else if (s.itemType == ItemType.GARDEN) {
            if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myGardenType)() == s.garden) {
              items.push([s.actualItem, _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus */ .Ms.IN_USE]);
            }
          } else if (s.itemType == ItemType.SKILL) {
            if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getPermedSkills)()[s.skill.name]) {
              items.push([s.actualItem, _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus */ .Ms.BOUND]);
            }
          } else if (s.itemType == ItemType.CAMPGROUND) {
            if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getCampground)()[s.actualItem.name] != null) {
              items.push([s.actualItem, _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus */ .Ms.BOUND]);
            }
          } else if (s.itemType == ItemType.SCRIPT) {
            if (eval(s.script)) {
              items.push([s.actualItem, _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus */ .Ms.BOUND]);
            }
          }
        }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}

      if (origSize != this.accountValCache.size) {
        this.saveCache();
      }

      return items;
    }

    /**
     * This way we can check if they have "always airport" and don't have "_airport today"
     */ }, { key: "testProperty", value:
    function testProperty(property) {
      var result = true;var _iterator3 = _createForOfIteratorHelper(

          property.split("&")),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var prop = _step3.value;
          var isTrue = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toBoolean)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)(prop.replace("!", "")));
          var isNotNegated = !prop.includes("!");
          result = result && isTrue == isNotNegated;
        }} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}

      return result;
    } }, { key: "addItem", value:

    function addItem(
    ownedItems,
    item,
    name,
    plural,
    bound)


    {var count = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;var worthMultiplier = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;
      var v = new _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ValItem */ .oD(item, name, plural, bound);
      v.worthMultiplier = worthMultiplier;

      ownedItems.set(v, (ownedItems.get(v) | 0) + count);
    } }, { key: "resolveBoundToTradeables", value:

    function resolveBoundToTradeables(
    copy,
    ownedItems,
    resolve)
    {var _iterator4 = _createForOfIteratorHelper(
          this.accValStuff),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var s = _step4.value;
          if (!resolve.includes(s.itemType)) {
            continue;
          }

          try {var _s$currencyAmount;
            var _item = s.untradeableItem;
            var pair = copy[_item.name];

            if (pair == null) {
              continue;
            }

            var v = pair[0];

            this.addItem(
              ownedItems,
              s.actualItem,
              _item.name,
              _item.plural,
              v.bound == null || v.bound == _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus */ .Ms.NO_TRADE ?
              s.itemType == ItemType.UNTRADEABLE_ITEM ?
              _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus */ .Ms.BOUND :
              _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus */ .Ms.NO_TRADE :
              v.bound,
              pair[1], (_s$currencyAmount =
              s.currencyAmount) !== null && _s$currencyAmount !== void 0 ? _s$currencyAmount : 1
            );
          } catch (e) {
            (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
              "You probably need to update mafia! Got an error! " + e,
              _AccountValColors__WEBPACK_IMPORTED_MODULE_2__/* .AccountValColors */ .Zp.attentionGrabbingWarning
            );
          }
        }} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}
    } }, { key: "resolveFamiliars", value:

    function resolveFamiliars(familiars, ownedItems) {var _iterator5 = _createForOfIteratorHelper(
          familiars),_step5;try {for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {var fam = _step5.value;
          if (!fam.hatchling.tradeable) {
            continue;
          }

          this.addItem(
            ownedItems,
            fam.hatchling,
            fam + "",
            fam + "",
            _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus */ .Ms.FAMILIAR
          );
        }} catch (err) {_iterator5.e(err);} finally {_iterator5.f();}
    }

    /**
     * Items that are equipped on an unused fam doesn't show otherwise
     */ }, { key: "resolveFamiliarItems", value:
    function resolveFamiliarItems() {
      var famEquipped = new Map();var _iterator6 = _createForOfIteratorHelper(

          kolmafia__WEBPACK_IMPORTED_MODULE_0__.Familiar.all()),_step6;try {for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {var fam = _step6.value;
          if (!(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveFamiliar)(fam) || (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myFamiliar)() == fam) {
            continue;
          }

          var _item2 = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.familiarEquippedEquipment)(fam);

          if (_item2 == null || _item2 == kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.none) {
            continue;
          }

          famEquipped.set(_item2, (famEquipped.get(_item2) | 0) + 1);
        }} catch (err) {_iterator6.e(err);} finally {_iterator6.f();}

      return famEquipped;
    } }, { key: "resolveSessionItems", value:

    function resolveSessionItems() {
      var map = new Map();

      Object.entries((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.mySessionItems)()).forEach((value) => {
        map.set(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.get(value[0]), value[1]);
      });

      return map;
    } }, { key: "visitCheck", value:

    function visitCheck(item, url, find) {
      if (this.accountValCache.has(item)) {
        return this.accountValCache.get(item);
      }

      var page = this.visitCache.get(url);

      if (page == null) {
        page = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)(url);
        this.visitCache.set(url, page);
      }

      var result = page.includes(find);

      this.accountValCache.set(item, result);

      return result;
    } }, { key: "loadAccountValStuff", value:

    function loadAccountValStuff() {
      var buffer = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.fileToBuffer)("accountval_binds.txt");
      var values = [];var _iterator7 = _createForOfIteratorHelper(

          buffer.split(/(\n|\r)+/)),_step7;try {for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {var line = _step7.value;
          if (line.startsWith("#") || line.length == 0) {
            continue;
          }

          var spl = line.split("\t");

          if (spl.length < 2) {
            continue;
          }

          var _v = new AccValStuff();

          try {
            _v.actualItem = kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.get(spl[1]);
          } catch (e) {
            (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
              "You probably need to update mafia! Got an error! " + e,
              _AccountValColors__WEBPACK_IMPORTED_MODULE_2__/* .AccountValColors */ .Zp.attentionGrabbingWarning
            );
            continue;
          }

          var e = void 0;

          switch (spl[0]) {
            case "i":
              e = ItemType.UNTRADEABLE_ITEM;
              _v.untradeableItem = kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.get(spl[2]);
              break;
            case "b":
              e = ItemType.BOOK;
              _v.skill = kolmafia__WEBPACK_IMPORTED_MODULE_0__.Skill.get(spl[2]);
              break;
            case "p":
              e = ItemType.PROPERTY;
              _v.userSetting = spl[2];
              break;
            case "e":
              e = ItemType.EUDORA;
              _v.correspondence = spl[2];
              break;
            case "v":
              e = ItemType.VISIT_URL_CHECK;
              _v.visitUrlLink = spl[2];
              _v.visitUrlIncludes = spl[3];
              break;
            case "g":
              e = ItemType.GARDEN;
              _v.garden = spl[2];
              break;
            case "t":
              e = ItemType.CURRENCY;
              _v.untradeableItem = kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.get(spl[2]);
              _v.currencyAmount = parseInt(spl[3]);
              break;
            case "c":
              e = ItemType.CAMPGROUND;
              break;
            case "s":
              e = ItemType.SCRIPT;
              _v.script = spl[2];
              break;
            default:
              (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
                "Found line '" + line + "' which I can't handle!",
                _AccountValColors__WEBPACK_IMPORTED_MODULE_2__/* .AccountValColors */ .Zp.attentionGrabbingWarning
              );
              continue;
          }

          _v.itemType = e;
          values.push(_v);
        }} catch (err) {_iterator7.e(err);} finally {_iterator7.f();}

      this.loadSkills(values);

      loop: for (var _i = 0, _values = values; _i < _values.length; _i++) {var v = _values[_i];
        if (v.actualItem.tradeable) {
          continue;
        }var _iterator8 = _createForOfIteratorHelper(

            values),_step8;try {for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {var v1 = _step8.value;
            if (
            v1.itemType != ItemType.UNTRADEABLE_ITEM &&
            v1.itemType != ItemType.CURRENCY)
            {
              continue;
            }

            if (v1.untradeableItem != v.actualItem) {
              continue;
            }

            continue loop;
          }} catch (err) {_iterator8.e(err);} finally {_iterator8.f();}

        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
          "Missing a tradeable item for " + v.actualItem,
          _AccountValColors__WEBPACK_IMPORTED_MODULE_2__/* .AccountValColors */ .Zp.attentionGrabbingWarning
        );
      }

      this.loadCache();

      return values;
    } }, { key: "loadSkills", value:

    function loadSkills(values) {
      // Skip items that don't last across ascensions or can't be valued
      var itemsSkills = new Map(
        kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.all().
        map((i) => [i, (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.skillModifier)(i, "Skill")]).
        filter(
          (_ref) => {var _ref2 = _slicedToArray(_ref, 2),i = _ref2[0],skill = _ref2[1];return (
              !i.reusable && !i.quest && !i.gift && skill != kolmafia__WEBPACK_IMPORTED_MODULE_0__.Skill.none);}
        )
      );

      var alreadyNoted = values.map((v) => v.actualItem);

      // Now we load the skills we have
      var _iterator9 = _createForOfIteratorHelper(itemsSkills),_step9;try {for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {var _step9$value = _slicedToArray(_step9.value, 2),i = _step9$value[0],skill = _step9$value[1];
          // Skip items that are not tradeable skills, because you either have a skill linked to an untradeable item, or a tradeable item.
          // If its linked to an untradeable, then we can check the untradeable item itself. Not bother with the skill.
          if (!i.tradeable) {
            continue;
          }

          // Skip items we already have stored
          if (alreadyNoted.includes(i)) {
            continue;
          }

          var v = new AccValStuff();

          v.itemType = ItemType.SKILL;
          v.actualItem = i;
          v.skill = skill;

          values.push(v);
        }} catch (err) {_iterator9.e(err);} finally {_iterator9.f();}
    } }]);return ItemResolver;}();

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ FetchFromPage)
/* harmony export */ });
/* unused harmony export StoreItem */
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(530);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AccountValColors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(767);
function _createForOfIteratorHelper(o, allowArrayLike) {var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];if (!it) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = it.call(o);}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];return arr2;}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperty(obj, key, value) {key = _toPropertyKey(key);if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toPropertyKey(arg) {var key = _toPrimitive(arg, "string");return typeof key === "symbol" ? key : String(key);}function _toPrimitive(input, hint) {if (typeof input !== "object" || input === null) return input;var prim = input[Symbol.toPrimitive];if (prim !== undefined) {var res = prim.call(input, hint || "default");if (typeof res !== "object") return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return (hint === "string" ? String : Number)(input);}


var StoreItem = /*#__PURE__*/_createClass(function StoreItem() {_classCallCheck(this, StoreItem);_defineProperty(this, "item", void 0);_defineProperty(this, "amount", void 0);_defineProperty(this, "limit", void 0);_defineProperty(this, "price", void 0);});






var FetchFromPage = /*#__PURE__*/function () {function FetchFromPage() {_classCallCheck(this, FetchFromPage);}_createClass(FetchFromPage, [{ key: "getSnapshot", value:
    function getSnapshot(username) {
      var items = new Map(
        kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.all().map((i) => {
          var name = i.name;

          while (name.match(/<\/?i>/)) {
            name = name.replace(/<\/?i>/, "");
          }

          return [(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.entityDecode)(name).toLowerCase(), i];
        })
      );
      var skills = new Map(
        kolmafia__WEBPACK_IMPORTED_MODULE_0__.Skill.all().map((s) => [(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.entityDecode)(s.name).toLowerCase(), s])
      );
      var fams = new Map(
        kolmafia__WEBPACK_IMPORTED_MODULE_0__.Familiar.all().map((f) => [f.toString().toLowerCase(), f])
      );
      // The hatching item is also listed alongside the familiar, so delete any items.
      var ignore = _toConsumableArray(fams.values()).map((f) =>
      f.hatchling.toString().toLowerCase()
      );

      var page = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)(
        "https://api.aventuristo.net/av-snapshot?u=" + username
      );

      if (!page.includes("<p>Snapshot for <b>")) {
        return [];
      }

      page = page.substring(0, page.indexOf("id='a7'>Discoveries</h1>"));

      var tdRegex = /<td(.*?)<\/td>/m;
      var linkRegex =
      /class='(perm|hcperm|fam_run_90|fam_have|fam_run_100)'.*<a href="[^"]+">(?:.*?>)?([^>]*?)<\/a>/;
      var match;
      var has = [];

      while ((match = page.match(tdRegex)) != null) {
        page = page.substring(page.indexOf(match[0]) + match[0].length);

        var link = match[1].match(linkRegex);

        if (link == null) {
          continue;
        }

        var name = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.entityDecode)(link[2]).toLowerCase();

        if (ignore.includes(name)) {
          continue;
        }

        var type = link[1];
        var isFam = !type.includes("perm");

        if (isFam) {
          if (fams.has(name)) {
            has.push(fams.get(name));
          } else {
            (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
              "Unable to resolve the familiar '" + name + "' from av-snapshot",
              _AccountValColors__WEBPACK_IMPORTED_MODULE_1__/* .AccountValColors */ .Zp.attentionGrabbingWarning
            );
          }

          continue;
        }

        if (name.match(/: level \d+$/)) {
          name = name.substring(0, name.lastIndexOf(":"));
        } else if (name.match(/ \(\d+\/\d+\)$/)) {
          name = name.substring(0, name.lastIndexOf(" "));
        } else if (name.match(/ \d+\/\d+$/)) {
          continue;
        }

        if (skills.has(name)) {
          has.push(skills.get(name));
          continue;
        }

        if (items.has(name)) {
          has.push(items.get(name));
          continue;
        }

        var count = 1;

        if (name.match(/ x\d+$/)) {
          count = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(name.substring(name.lastIndexOf("x") + 1));
          name = name.substring(0, name.lastIndexOf(" "));
        }

        if (!items.has(name)) {
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
            "Unable to resolve the item '" + name + "' from av-snapshot",
            _AccountValColors__WEBPACK_IMPORTED_MODULE_1__/* .AccountValColors */ .Zp.attentionGrabbingWarning
          );
          continue;
        }

        has.push([items.get(name), count]);
      }

      return has;
    } }, { key: "getFamiliars", value:

    function getFamiliars(userId) {
      var page = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("showfamiliars.php?who=" + userId);
      var regex = /onClick='fam\((\d+)\)'/;
      var match;
      var familiars = [];

      while ((match = page.match(regex)) != null) {
        page = page.replace(match[0], "");

        familiars.push((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toFamiliar)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(match[1])));
      }

      return familiars;
    } }, { key: "getStore", value:

    function getStore(userId) {
      var items = [];

      var page = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("mallstore.php?whichstore=" + userId);var _iterator = _createForOfIteratorHelper(

          page.split("<tr>")),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var s = _step.value;
          var match = s.match(
            /selecteditem=(\d+).+?<b>.+?<\/b> \(([\d,]+)\) +(?:\(Limit ([\d,]+) \/ day\))?<\/td><td>((?:\d|,)+) Meat<\/td>/
          );

          if (match == null) {
            continue;
          }

          var item = new StoreItem();
          item.item = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toItem)(match[1].substring(0, match[1].length - 9));
          item.amount = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(match[2]);
          item.limit = match[3] == null ? 0 : (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(match[3]);
          item.price = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(match[4]);

          items.push(item);
        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}

      return items;
    } }, { key: "getDisplaycase", value:

    function getDisplaycase(userId) {
      var map = new Map();
      var descs = new Map(
        kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.all().map((i) => [i.descid, i])
      );

      var page = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("displaycollection.php?who=" + userId);var _iterator2 = _createForOfIteratorHelper(

          page.split("<tr>")),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var s = _step2.value;
          var match = s.match(
            /<td width=30 height=30><img src=".+?" class=hand onClick='descitem\((\d+),(\d+)\)'><\/td><td valign=center><b>.+?<\/b>(?: \(((?:\d|,)+)\))?<\/td><\/tr>/
          );

          if (match == null) {
            continue;
          }

          var item = descs.get(match[1]);

          if (item == null) {
            (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
              "Unknown item description: " + match[1] + ", update mafia?",
              _AccountValColors__WEBPACK_IMPORTED_MODULE_1__/* .AccountValColors */ .Zp.attentionGrabbingWarning
            );
            continue;
          }

          map.set(item, match[3] == null ? 1 : (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(match[3]));
        }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}

      return map;
    } }]);return FetchFromPage;}();

/***/ }),

/***/ 238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FT: () => (/* binding */ PriceType),
/* harmony export */   Zi: () => (/* binding */ PriceResolver)
/* harmony export */ });
/* unused harmony export ItemPrice */
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(530);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(o, allowArrayLike) {var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];if (!it) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = it.call(o);}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];return arr2;}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperty(obj, key, value) {key = _toPropertyKey(key);if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toPropertyKey(arg) {var key = _toPrimitive(arg, "string");return typeof key === "symbol" ? key : String(key);}function _toPrimitive(input, hint) {if (typeof input !== "object" || input === null) return input;var prim = input[Symbol.toPrimitive];if (prim !== undefined) {var res = prim.call(input, hint || "default");if (typeof res !== "object") return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return (hint === "string" ? String : Number)(input);}



var PriceType = /*#__PURE__*/function (PriceType) {PriceType[PriceType["NEW_PRICES"] = 0] = "NEW_PRICES";PriceType[PriceType["HISTORICAL"] = 1] = "HISTORICAL";PriceType[PriceType["MALL"] = 2] = "MALL";PriceType[PriceType["MALL_SALES"] = 3] = "MALL_SALES";PriceType[PriceType["AUTOSELL"] = 4] = "AUTOSELL";return PriceType;}({});







var ItemPrice = /*#__PURE__*/_createClass(






  function ItemPrice(
  item,
  price,
  accuracy,
  daysOutdated)

  {var volume = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;_classCallCheck(this, ItemPrice);_defineProperty(this, "item", void 0);_defineProperty(this, "price", void 0);_defineProperty(this, "accuracy", void 0);_defineProperty(this, "daysOutdated", void 0);_defineProperty(this, "volume", void 0);
    this.item = item;
    this.price = price;
    this.accuracy = accuracy;
    this.daysOutdated = daysOutdated;
    this.volume = volume;
  });var








NewPrices = /*#__PURE__*/function () {function NewPrices() {_classCallCheck(this, NewPrices);_defineProperty(this, "prices", void 0);_defineProperty(this, "lastUpdated", void 0);}_createClass(NewPrices, [{ key: "isValid", value:



    function isValid() {
      if (this.lastUpdated == null || this.prices == null) {
        return false;
      }

      // If it hasn't been updated in a week, then Irrat is ded
      if (this.lastUpdated + 7 * 24 * 60 * 60 < Date.now() / 1000) {
        return false;
      }

      return true;
    } }, { key: "load", value:

    function load() {
      var buffer = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.fileToBuffer)("irrats_item_prices.txt");

      if (buffer.length <= 10) {
        return;
      }

      this.prices = [];var _iterator = _createForOfIteratorHelper(

          buffer.split(/[\n\r]+/)),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var spl = _step.value;
          if (spl.startsWith("#")) {
            continue;
          }

          var spl2 = spl.split("\t");

          if (spl2.length == 2 && spl2[0] == "Last Updated:") {
            this.lastUpdated = parseInt(spl2[1]);
            continue;
          }

          if (spl2.length < 3) {
            continue;
          }

          var itemId = parseInt(spl2[0]);
          var age = parseInt(spl2[1]);
          var price = parseInt(spl2[2]);
          var volume = parseInt(spl2[3]);

          this.prices[itemId] = { price: price, updated: age, volume: volume };
        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}
    } }]);return NewPrices;}();


var PriceResolver = /*#__PURE__*/function () {





  function PriceResolver(settings) {_classCallCheck(this, PriceResolver);_defineProperty(this, "history", void 0);_defineProperty(this, "specialCase", new Map());_defineProperty(this, "settings", void 0);_defineProperty(this, "newPrices", void 0);
    this.settings = settings;
    this.newPrices = new NewPrices();

    if (!settings.oldPricing) {
      this.newPrices.load();
    }

    if (!this.newPrices.isValid()) {
      this.loadMallHistory();
    }

    this.fillSpecialCase();
  }_createClass(PriceResolver, [{ key: "loadMallHistory", value:

    function loadMallHistory() {
      try {
        this.history = new (eval("require")(
          "scripts/utils/mallhistory.js"
        ).MallHistory)();
      } catch (e) {
        if (e != null && e.message != null && e.message.includes(" not found.")) {
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
            "A required library seems to be missing! This should've been installed automatically, try running in CLI:",
            "red"
          );
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.printHtml)(
            "<u color='gray'>git checkout libraryaddict/KolMallHistory release</u>"
          );
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("");
        }

        throw e;
      }
    } }, { key: "fillSpecialCase", value:

    function fillSpecialCase() {
      this.specialCase.set(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.get("Meat Paste"), 10);
      this.specialCase.set(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.get("Meat Stack"), 100);
      this.specialCase.set(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.get("Dense meat stack"), 1000);
    } }, { key: "itemPrice", value:

    function itemPrice(
    item,
    amount)




    {var ignoreFold = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;var forcePricing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;var doSuperFast = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;var doEstimates = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      if (this.specialCase.has(item)) {
        return new ItemPrice(item, this.specialCase.get(item), PriceType.MALL, 0);
      }

      if (!item.tradeable) {
        return new ItemPrice(item, (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosellPrice)(item), PriceType.AUTOSELL, 0);
      }

      if (this.newPrices.isValid()) {
        var _price = this.newPrices.prices[(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(item)];

        if (_price != null) {
          var daysAge = Math.round(
            (Date.now() / 1000 - _price.updated) / (60 * 60 * 24)
          );

          return new ItemPrice(
            item,
            _price.price,
            PriceType.NEW_PRICES,
            daysAge,
            _price.volume
          );
        }
      }

      if (this.history == null) {
        this.loadMallHistory();
      }

      var salesPricing = new MallHistoryPricing(
        this.settings,
        this.history,
        item,
        amount
      );
      var historyPricing = new HistoricalPricing(this.settings, item, amount);
      var mallPricing = new MallSalesPricing(this.settings, item, amount);
      var resolver;

      if (forcePricing == PriceType.HISTORICAL) {
        resolver = historyPricing;
      } else if (forcePricing == PriceType.MALL) {
        resolver = mallPricing;
      } else if (forcePricing == PriceType.MALL_SALES) {
        resolver = salesPricing;
      } else {
        var viablePrices = [
        salesPricing,
        historyPricing,
        mallPricing].
        filter((p) => p.isViable() && !p.isOutdated());

        viablePrices.sort((v1, v2) => {
          var p1 = v1.getPrice(true);
          var p2 = v2.getPrice(true);

          if (p1 == null || p2 == null || p1.price == p2.price) {
            return v1.getAge() - v2.getAge();
          }

          return p1.price - p2.price;
        });

        resolver = viablePrices.length > 0 ? viablePrices[0] : salesPricing;

        // If we're not doing sales, and the price is apparently worth more than 50m
        if (
        !doSuperFast &&
        resolver != salesPricing &&
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.historicalPrice)(item) > 50000000)
        {
          // If we have no sale history on record, or the price diff is more than 50m
          if (
          salesPricing.getAge() == -1 ||
          Math.abs(salesPricing.getPrice(true).price - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.historicalPrice)(item)) >
          50000000)
          {
            resolver = salesPricing;
          }
        }
      }

      if (
      doEstimates &&
      historyPricing != resolver &&
      resolver.isOutdated() &&
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.historicalAge)(item) < 365 &&
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.historicalPrice)(item) <= Math.max((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosellPrice)(item) * 3, 500))
      {
        return new ItemPrice(
          item,
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.historicalPrice)(item),
          PriceType.HISTORICAL,
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.historicalAge)(item)
        );
      }

      if (
      doEstimates && (
      doSuperFast ? !resolver.isViable() : resolver.isOutdated()))
      {
        return new ItemPrice(item, -1, resolver.getPriceType(), 0);
      }

      var price = resolver.getPrice();

      if (price == null) {
        price = mallPricing.getPrice();
      }

      return price;

      /*if (ignoreFold) {
        return new ItemPrice(item, lowestMall, PriceType.MALL, 0);
      }
       for (let foldable of Object.keys(getRelated(item, "fold"))) {
        let folded = Item.get(foldable);
         let p = this.itemPrice(folded, amount, true, PriceType.MALL).price;
         if (p <= 0) {
          continue;
        }
         lowestMall = Math.min(p, lowestMall);
      }
       return new ItemPrice(item, lowestMall, PriceType.MALL, 0);*/





    } }]);return PriceResolver;}();var




















MallHistoryPricing = /*#__PURE__*/function () {






  function MallHistoryPricing(
  settings,
  history,
  item,
  amount)
  {_classCallCheck(this, MallHistoryPricing);_defineProperty(this, "item", void 0);_defineProperty(this, "amount", void 0);_defineProperty(this, "records", void 0);_defineProperty(this, "settings", void 0);_defineProperty(this, "history", void 0);
    this.settings = settings;
    this.history = history;
    this.item = item;
    this.amount = amount;
    this.records = history.getMallRecords(this.item, 900, false);
  }_createClass(MallHistoryPricing, [{ key: "isViable", value:

    function isViable() {
      // If we have no records, or if we have records or last records check attempt was less than 30 days ago
      return this.records == null || this.records.records.length > 0;
    } }, { key: "isOutdated", value:

    function isOutdated() {
      if (this.records == null) {
        return true;
      }

      var lastUpdated =
      (Date.now() / 1000 - this.records.lastUpdated) / (24 * 60 * 60);

      if (this.records.records.length == 0) {
        return lastUpdated > 30;
      }

      var last = this.records.records[this.records.records.length - 1];
      var histAge = Math.min(
        (Date.now() / 1000 - last.date) / (24 * 60 * 60),
        lastUpdated
      );

      var histPrice = last.meat;

      var days = this.settings.getMaxPriceAge(histPrice, this.amount);

      return histAge > days;
    } }, { key: "getAge", value:

    function getAge() {
      if (this.records == null) {
        return -1;
      }

      var last = this.records.records[this.records.records.length - 1];

      if (last == null) {
        return -1;
      }

      var dateNow = Date.now() / 1000;

      return (dateNow - last.date) / (24 * 60 * 60);
    } }, { key: "getPrice", value:

    function getPrice() {var ignoreOutdated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!ignoreOutdated && this.isOutdated()) {
        this.records = this.history.getMallRecords(this.item, 0.1, true);
      }

      var last = this.records.records[this.records.records.length - 1];

      if (last == null) {
        return null;
      }

      return new ItemPrice(
        this.item,
        last.meat,
        PriceType.MALL_SALES,
        this.getAge()
      );
    } }, { key: "getPriceType", value:

    function getPriceType() {
      return PriceType.MALL_SALES;
    } }]);return MallHistoryPricing;}();var


MallSalesPricing = /*#__PURE__*/function () {




  function MallSalesPricing(settings, item, amount) {_classCallCheck(this, MallSalesPricing);_defineProperty(this, "item", void 0);_defineProperty(this, "amount", void 0);_defineProperty(this, "settings", void 0);
    this.settings = settings;
    this.item = item;
    this.amount = amount;
  }_createClass(MallSalesPricing, [{ key: "isViable", value:

    function isViable() {
      return true;
    } }, { key: "isOutdated", value:

    function isOutdated() {
      return true;
    } }, { key: "getAge", value:

    function getAge() {
      return 0;
    } }, { key: "getPrice", value:

    function getPrice() {
      return new ItemPrice(this.item, (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.mallPrice)(this.item), PriceType.MALL, 0);
    } }, { key: "getPriceType", value:

    function getPriceType() {
      return PriceType.MALL;
    } }]);return MallSalesPricing;}();var


HistoricalPricing = /*#__PURE__*/function () {




  function HistoricalPricing(settings, item, amount) {_classCallCheck(this, HistoricalPricing);_defineProperty(this, "item", void 0);_defineProperty(this, "amount", void 0);_defineProperty(this, "settings", void 0);
    this.settings = settings;
    this.item = item;
    this.amount = amount;
  }_createClass(HistoricalPricing, [{ key: "isViable", value:

    function isViable() {
      return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.historicalPrice)(this.item) > 0;
    } }, { key: "isOutdated", value:

    function isOutdated() {
      var histPrice = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.historicalPrice)(this.item);
      var histAge = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.historicalAge)(this.item);

      var days = this.settings.getMaxPriceAge(histPrice, this.amount);

      return histAge > days;
    } }, { key: "getAge", value:

    function getAge() {
      return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.historicalAge)(this.item);
    } }, { key: "getPrice", value:

    function getPrice() {
      var histPrice = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.historicalPrice)(this.item);

      if (histPrice <= 0) {
        return new MallSalesPricing(
          this.settings,
          this.item,
          this.amount
        ).getPrice();
      }

      return new ItemPrice(
        this.item,
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.historicalPrice)(this.item),
        PriceType.HISTORICAL,
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.historicalAge)(this.item)
      );
    } }, { key: "getPriceType", value:

    function getPriceType() {
      return PriceType.HISTORICAL;
    } }]);return HistoricalPricing;}();

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
  main: () => (/* binding */ main)
});

// EXTERNAL MODULE: external "kolmafia"
var external_kolmafia_ = __webpack_require__(530);
// EXTERNAL MODULE: ./src/AccountValLogic.ts
var AccountValLogic = __webpack_require__(689);
// EXTERNAL MODULE: ./src/AccountValSettings.ts
var AccountValSettings = __webpack_require__(280);
// EXTERNAL MODULE: ./src/AccountValColors.ts
var AccountValColors = __webpack_require__(767);
;// CONCATENATED MODULE: ./src/AccountValUtils.ts
function _createForOfIteratorHelper(o, allowArrayLike) {var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];if (!it) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = it.call(o);}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];return arr2;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}function _toPropertyKey(arg) {var key = _toPrimitive(arg, "string");return typeof key === "symbol" ? key : String(key);}function _toPrimitive(input, hint) {if (typeof input !== "object" || input === null) return input;var prim = input[Symbol.toPrimitive];if (prim !== undefined) {var res = prim.call(input, hint || "default");if (typeof res !== "object") return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return (hint === "string" ? String : Number)(input);}



var AccountValUtils = /*#__PURE__*/function () {function AccountValUtils() {_classCallCheck(this, AccountValUtils);}_createClass(AccountValUtils, null, [{ key: "splitArguments", value:
    function splitArguments(
    settings,
    command)

    {var debugMessages = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var debug = function debug(message) {
        if (!debugMessages) {
          return;
        }

        (0,external_kolmafia_.print)("DEBUG: " + message, AccountValColors/* AccountValColors */.Zp.minorNote);
      };

      var tCommand = command;
      var match;

      while ((match = tCommand.match(/(^| )([a-zA-Z]+ )([^ ]+)/)) != null) {
        tCommand = tCommand.replace(match[2], "");

        var setting = settings.getSetting(match[2].trim());

        var v2 = (match[3] || "").replace("!", "").split("=")[0].trim();
        var setting2 = settings.getSetting(
          v2.toLowerCase() == "true" ? "" : v2
        );

        if (
        setting == null ||
        setting.type == AccountValSettings/* FieldType */.fS.BOOLEAN && setting2 != null)
        {
          debug("'".concat(match[2], "' is not a key parameter"));
          continue;
        }

        command = command.replace(match[2], match[2].trim() + "=");
        tCommand = tCommand.replace(match[3], "");
        debug("Replacing '".concat(
          match[2], "' as a key parameter, matched using '").concat(match[0], "'")
        );
      }

      tCommand = command;
      var spl = [];

      // Splitting so we can do name="Tom the Hunk"
      while (
      (match = tCommand.match(/(?:^| )([^ =]+=("|').+?"|')(?=(?:$| ))/)) != null)
      {
        var v = match[1];
        var val = "";

        if (v.indexOf("=") > 0) {
          val = v.substring(0, v.indexOf("=") + 1);
          v = v.substring(val.length);
        }

        if (
        v.startsWith('"') && v.endsWith('"') ||
        v.startsWith("'") && v.endsWith("'"))
        {
          v = v.substring(1, v.length - 1);
        }

        v = val + v;

        spl.push(v);
        tCommand = tCommand.replace(match[1], "").trim().replace(/ +/, " ");
        debug("'".concat(v, " defined as a key=\"value\", matched '").concat(match[0], "'"));
      }

      if (tCommand.length > 0) {var _iterator = _createForOfIteratorHelper(
            tCommand.split(" ")),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var arg = _step.value;
            debug("Found leftover parameter '".concat(arg));
            spl.push(arg);
          }} catch (err) {_iterator.e(err);} finally {_iterator.f();}
      }

      debug("Final parameters are: " + spl.map((s) => "{".concat(s, "}")).join(" "));

      return spl;
    } }, { key: "getNumber", value:

    function getNumber(number) {var trimAt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      var str = number.toString().split(".");

      if (str.length > 1 && str[1].length > trimAt) {
        str[1] = str[1].substring(0, trimAt);
      }

      str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      return str.join(".");
    } }, { key: "getNumberOrClamp", value:

    function getNumberOrClamp(
    number,
    min,
    max,
    minStr,
    maxStr)
    {
      if (number > max) {
        return maxStr;
      }

      if (number < min) {
        return minStr;
      }

      return this.getNumber(number);
    } }]);return AccountValUtils;}();
// EXTERNAL MODULE: ./src/PriceResolver.ts
var PriceResolver = __webpack_require__(238);
;// CONCATENATED MODULE: ./src/AccountVal.ts
function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || AccountVal_unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function AccountVal_createForOfIteratorHelper(o, allowArrayLike) {var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];if (!it) {if (Array.isArray(o) || (it = AccountVal_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = it.call(o);}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function AccountVal_unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return AccountVal_arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return AccountVal_arrayLikeToArray(o, minLen);}function AccountVal_arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];return arr2;}function AccountVal_classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function AccountVal_defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, AccountVal_toPropertyKey(descriptor.key), descriptor);}}function AccountVal_createClass(Constructor, protoProps, staticProps) {if (protoProps) AccountVal_defineProperties(Constructor.prototype, protoProps);if (staticProps) AccountVal_defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}function _defineProperty(obj, key, value) {key = AccountVal_toPropertyKey(key);if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function AccountVal_toPropertyKey(arg) {var key = AccountVal_toPrimitive(arg, "string");return typeof key === "symbol" ? key : String(key);}function AccountVal_toPrimitive(input, hint) {if (typeof input !== "object" || input === null) return input;var prim = input[Symbol.toPrimitive];if (prim !== undefined) {var res = prim.call(input, hint || "default");if (typeof res !== "object") return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return (hint === "string" ? String : Number)(input);}




var

AccountVal = /*#__PURE__*/function () {function AccountVal() {AccountVal_classCallCheck(this, AccountVal);_defineProperty(this, "logic", void 0);_defineProperty(this, "settings", void 0);}AccountVal_createClass(AccountVal, [{ key: "doCheck", value:



    function doCheck() {
      var pronoun = this.settings.fetchClan ?
      "The clan stash is" :
      !this.settings.playerId || this.settings.playerId == (0,external_kolmafia_.toInt)((0,external_kolmafia_.myId)()) ?
      "You are" :
      (0,external_kolmafia_.getPlayerName)(this.settings.playerId) + " is";
      var netvalue = 0;
      this.logic.doPricing();

      var aWorth = this.logic.priceResolver.itemPrice(
        external_kolmafia_.Item.get("Mr. Accessory"),
        1
      ).price;

      var lines = [];
      var mallExtinct = [];
      var shopNetValue = 0;
      var shopPricedAt = 0;

      for (var no = this.logic.prices.length - 1; no >= 0; no--) {
        var item = this.logic.prices[no][0];
        var price = this.logic.prices[no][1];

        // Mall extinct items should be 1b
        var worthEach =
        price.price <= 0 && item.worthMultiplier == 1 ?
        -1 :
        price.price * (1 / item.worthMultiplier);

        var count = this.logic.ownedItems.get(item);
        var totalWorth = Math.round(worthEach * count);
        netvalue += totalWorth;

        if (lines.length >= this.settings.displayLimit) {
          continue;
        }

        var titleName = item.tradeableItem.name;
        var priceType =
        price.accuracy == PriceResolver/* PriceType */.FT.NEW_PRICES ?
        "last recorded" :
        price.accuracy == PriceResolver/* PriceType */.FT.MALL_SALES ?
        "last sold" :
        price.accuracy == PriceResolver/* PriceType */.FT.AUTOSELL ?
        "autosell" :
        "last malled";
        var validAsOf =
        "Price valid as of " +
        AccountValUtils.getNumber(price.daysOutdated, 1) +
        " day" + (
        price.daysOutdated != 1 ? "s" : "") +
        " ago";
        var tradeableWorth =
        AccountValUtils.getNumber(price.price) + " meat each.";

        if (price.price < 0) {
          tradeableWorth = "as mall extinct.";
        }

        var title =
        titleName + " @ " + priceType + " " + tradeableWorth + " " + validAsOf;

        if (item.name != item.tradeableItem.name && item.worthMultiplier != 1) {
          titleName = "1 ".concat(item.tradeableItem.name, " / ").concat(item.worthMultiplier, " ").concat(
            item.pluralName, " = ").concat(
            AccountValUtils.getNumber(worthEach), " each.");

          title =
          titleName +
          " " +
          item.tradeableItem.name +
          " " +
          priceType +
          " " +
          tradeableWorth +
          " " +
          validAsOf;
        }

        if (price.volume >= 0) {
          title += ". ".concat(AccountValUtils.getNumber(
            price.volume
          ), " sold in the last week.");
        }

        if (item.shopWorth > 0) {
          title +=
          ". Shop selling at: " + AccountValUtils.getNumber(item.shopWorth);
        }

        if (item.snapshotSource != null) {
          title = "Owns in ".concat(item.snapshotSource, ". ").concat(title);
        }

        var name = this.escapeHTML(item.name);

        if (item.bound != null) {
          var boundInfo = void 0;
          var color = AccountValColors/* AccountValColors */.Zp.shopPricesOverpriced;

          if (item.bound == AccountValLogic/* ItemStatus */.Ms.SHOP_WORTH) {
            var overpricedPerc = item.shopWorth / worthEach;

            if (item.shopWorth < 999999000) {
              shopPricedAt += item.shopWorth * count;
              shopNetValue += totalWorth;
            }

            if (overpricedPerc <= 1.05) {
              color = AccountValColors/* AccountValColors */.Zp.shopPricedOk;
            }

            boundInfo = AccountValUtils.getNumberOrClamp(
              Math.round(overpricedPerc * 100),
              -999,
              999,
              "Very underpriced",
              "Very overpriced"
            );

            if (boundInfo.match(/\d$/)) {
              boundInfo = "Price: ".concat(boundInfo, "%");
            }
          } else {
            boundInfo = item.getBound();
          }

          name = "".concat(name, " (<font color='").concat(color, "' title='").concat(this.escapeHTML(
            title
          ), "'>").concat(this.escapeHTML(boundInfo), "</font>)");
        }

        if (worthEach <= 0 || worthEach > 999999999) {
          if (count > 1) {
            mallExtinct.push([count + " @ " + name, title]);
          } else {
            mallExtinct.push([name, title]);
          }

          continue;
        }

        var text = "".concat(AccountValUtils.getNumber(
          count
        ), " ").concat(name, " worth a total of ").concat(AccountValUtils.getNumber(totalWorth));

        lines.push(
          "<font title='" + this.escapeHTML(title) + "'>" + text + "</font>"
        );
      }

      if (!this.settings.brief) {
        lines = lines.reverse();
        var skipping = Math.max(
          0,
          this.logic.prices.length - this.settings.displayLimit
        );

        if (skipping > 0) {
          (0,external_kolmafia_.printHtml)("\n          <font color='".concat(

            AccountValColors/* AccountValColors */.Zp.minorNote, "'>Skipping ").concat(
            AccountValUtils.getNumber(
              skipping
            ), " lines and displaying the last ").concat(AccountValUtils.getNumber(
            this.settings.displayLimit
          ), " lines..</font>"));
        }var _iterator = AccountVal_createForOfIteratorHelper(

            lines),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var line = _step.value;
            (0,external_kolmafia_.printHtml)(line);
          }} catch (err) {_iterator.e(err);} finally {_iterator.f();}

        if (mallExtinct.length > 0) {
          var colors = [
          AccountValColors/* AccountValColors */.Zp.mallExtinctColor1,
          AccountValColors/* AccountValColors */.Zp.mallExtinctColor2];


          var extinct = mallExtinct.map(
            (_ref, i) => {var _ref2 = _slicedToArray(_ref, 2),name = _ref2[0],title = _ref2[1];return (
                "<font color='" +
                colors[i % 2] +
                "' title='" +
                this.escapeHTML(title) +
                "'>" +
                name +
                "</font>");}
          );

          (0,external_kolmafia_.printHtml)(
            "There were " +
            extinct.length +
            " mall extinct items! Items: " +
            extinct.join(", ")
          );
        }
      }

      (0,external_kolmafia_.print)(
        pronoun + " worth " + AccountValUtils.getNumber(netvalue) + " meat!",
        AccountValColors/* AccountValColors */.Zp.helpfulStateInfo
      );

      if (this.settings.brief) {
        return;
      }

      var mrAWorth = (0.0 + netvalue) / aWorth;

      (0,external_kolmafia_.printHtml)("<font title='With Mr. Accessory worth being ".concat(
        AccountValUtils.getNumber(
          aWorth
        ), " meat'>Going by the value of a Mr. Accessory, that's $").concat(AccountValUtils.getNumber(
        mrAWorth * 10
      ), "</font>")
      );

      if (
      shopPricedAt > 0 &&
      this.logic.prices.filter((v) => v[0].bound == AccountValLogic/* ItemStatus */.Ms.SHOP_WORTH).
      length == this.logic.prices.length)
      {
        shopPricedAt /= shopNetValue;
        var perc = AccountValUtils.getNumberOrClamp(
          Math.round(shopPricedAt * 100),
          -999,
          999,
          "Very underpriced",
          "Very overpriced"
        );

        if (perc.match(/\d$/)) {
          perc += "%";
        }

        (0,external_kolmafia_.print)("Overall, the shop is ".concat(perc, " of mall"));
        (0,external_kolmafia_.print)(
          "Disclaimer: Cheapest price being 100% can mean we're comparing prices against.. this shop.",
          AccountValColors/* AccountValColors */.Zp.minorNote
        );
      }

      this.printMeat();
    } }, { key: "printMeat", value:

    function printMeat() {
      if (!this.settings.doTradeables) {
        return;
      }

      var meat = 0;
      var meatSources = [];

      if (this.settings.fetchInventory && (0,external_kolmafia_.myMeat)() != 0) {
        meat += (0,external_kolmafia_.myMeat)();
        meatSources.push(
          AccountValUtils.getNumber((0,external_kolmafia_.myMeat)()) + " meat in inventory"
        );
      }

      if (this.settings.fetchCloset && (0,external_kolmafia_.myClosetMeat)() != 0) {
        meat += (0,external_kolmafia_.myClosetMeat)();
        meatSources.push(
          AccountValUtils.getNumber((0,external_kolmafia_.myClosetMeat)()) + " meat in closet"
        );
      }

      if (this.settings.fetchStorage && (0,external_kolmafia_.myStorageMeat)() != 0) {
        meat += (0,external_kolmafia_.myStorageMeat)();
        meatSources.push(
          AccountValUtils.getNumber((0,external_kolmafia_.myStorageMeat)()) + " meat in storage"
        );
      }

      if (meat > 0 && this.settings.playerId == 0) {
        (0,external_kolmafia_.printHtml)(
          "<font title='" +
          meatSources.join(", ") +
          "'>This doesn't include your " +
          AccountValUtils.getNumber(meat) +
          " meat!</font>"
        );
      }
    } }, { key: "escapeHTML", value:

    function escapeHTML(str) {
      return (0,external_kolmafia_.entityDecode)(str).
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/"/g, "&quot;").
      replace(/'/g, "&#039;");
    } }, { key: "doHelp", value:

    function doHelp() {
      (0,external_kolmafia_.print)(
        "AccountVal is a script to check what your account is worth, and find the good stuff fast.",
        AccountValColors/* AccountValColors */.Zp.helpfulStateInfo
      );
      (0,external_kolmafia_.print)(
        "You can provide these as a parameter to accountval to do other stuff than the base script. Hover over them to see aliases.",
        AccountValColors/* AccountValColors */.Zp.helpfulStateInfo
      );
      (0,external_kolmafia_.printHtml)("<font color='".concat(
        AccountValColors/* AccountValColors */.Zp.helpfulStateInfo, "'>Use ! or - to negate a boolean option, as well as =. Eg:</font><font color='gray'> -bound !bound bound=false</font>")
      );

      var even = true;var _iterator2 = AccountVal_createForOfIteratorHelper(

          AccountValSettings/* AccountValSettings */.iX.getSettings()),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var setting = _step2.value;
          var defaultOf = ".</font> <font>Default is: ";

          if (this.settings[setting.field] != null) {
            var val = this.settings[setting.field];

            if (setting.type == AccountValSettings/* FieldType */.fS.NUMBER) {
              val = setting.names[0] + "=" + val;
            } else if (setting.type == AccountValSettings/* FieldType */.fS.SORTBY) {
              val = setting.names[0] + "=" + AccountValSettings/* SortBy */.hn[val];
            }

            if (val == "" && typeof val != "boolean") {
              val = "null";
            }

            defaultOf += val;
          } else {
            defaultOf += "null";
          }

          (0,external_kolmafia_.printHtml)("<font color='".concat(

            AccountValColors/* AccountValColors */.Zp.minorNote, "' title='Aliases: ").concat(
            setting.names.join(", "), "'><b>").concat(
            setting.names[0], "</b> - ").concat(
            setting.desc).concat(defaultOf, "</font>")
          );

          even = !even;
        }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}

      (0,external_kolmafia_.printHtml)("<font color='".concat(
        AccountValColors/* AccountValColors */.Zp.minorNote, "'>Disclaimer: The prices shown are not absolute, and can overstate what it really is worth.</font>")
      );
      // show - How many to show, defaults to 100
      // count - How many we must have of this item
      // sortby - Indiv Price, Total Price, Amount
      // trade
      // accountval price>3000 iprice>3000 show
    } }, { key: "start", value:

    function start(command) {
      this.settings = new AccountValSettings/* AccountValSettings */.iX();

      try {
        if (command == null) {
          (0,external_kolmafia_.print)(
            "To fine tune what we check, including to tradeables only.. Provide the parameter 'help' for more info",
            AccountValColors/* AccountValColors */.Zp.helpfulStateInfo
          );
          command = "";
        } else if (command.toLowerCase().match(/([^a-z]|^)help([^a-z]|$)/)) {
          this.settings.doSettings([]);
          this.doHelp();

          return;
        } else if (command.toLowerCase().match(/^debugcolors=[^ ]+$/)) {
          var scheme = command.split("=")[1];
          (0,AccountValColors/* showAccountvalColors */.WY)(scheme);

          return;
        }

        var spl = AccountValUtils.splitArguments(
          this.settings,
          command
        );

        var unknown = this.settings.doSettings(spl);

        if (unknown.length > 0) {
          unknown.forEach((s) =>
          (0,external_kolmafia_.printHtml)("<font color='".concat(
            AccountValColors/* AccountValColors */.Zp.attentionGrabbingWarning, "'>").concat(s, "</font>")
          )
          );

          return;
        }

        var priceSettings = new AccountValSettings/* PricingSettings */.Iz();
        priceSettings.maxPriceAge = this.settings.maxAge;
        priceSettings.oldPricing = this.settings.oldPricing;
        this.logic = new AccountValLogic/* AccountValLogic */.Mc(this.settings, priceSettings);

        this.logic.loadItems();
        this.doCheck();
      } finally {
        var revision = (0,external_kolmafia_.getRevision)();

        if (revision != null && revision > 0 && revision < 26000) {
          (0,external_kolmafia_.printHtml)(
            "<font color='red'>Warning! You are using an outdated version of KoLmafia! You're likely missing some items, and may not have the ability to render the 'title' attribute! You could even be missing wrapped text!</font>"
          );
          (0,external_kolmafia_.printHtml)(
            "Downloads: <a color='blue' href='https://github.com/kolmafia/kolmafia/releases'>[Github]</a> or <a color='blue' href='https://ci.kolmafia.us/'>[Jenkins]</a> <a color='gray' href='https://ci.kolmafia.us/job/Kolmafia/lastSuccessfulBuild/artifact/dist/'>[Link to Jar]</a>"
          );
        }
      }
    } }]);return AccountVal;}();


function main(command) {
  new AccountVal().start(command);
}
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;