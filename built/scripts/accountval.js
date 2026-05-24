/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 12
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BG: () => (/* binding */ initAccountValColors),
/* harmony export */   HK: () => (/* binding */ AccountValColors),
/* harmony export */   Xf: () => (/* binding */ getAccountvalColors),
/* harmony export */   mh: () => (/* binding */ showAccountvalColors),
/* harmony export */   x5: () => (/* binding */ loadAccountvalColors)
/* harmony export */ });
/* harmony import */ var _api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(511);
function _slicedToArray(r, e) {return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function _arrayWithHoles(r) {if (Array.isArray(r)) return r;}function _toConsumableArray(r) {return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _iterableToArray(r) {if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);}function _arrayWithoutHoles(r) {if (Array.isArray(r)) return _arrayLikeToArray(r);}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}













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
    _api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.print("Can't find any colors by that name", "red");

    return;
  }

  var colors = map.get(name);

  for (var _i = 0, _Object$entries = Object.entries(colors); _i < _Object$entries.length; _i++) {var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),k = _Object$entries$_i[0],v = _Object$entries$_i[1];
    _api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.printHtml("<font color='".concat(v, "'>").concat(k, "</font>"));
  }
}

function initAccountValColors() {
  var def = _api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.isDarkMode() ? "dark" : "default";
  loadAccountvalColors(
    _api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.getProperty("accountvalColorScheme") ?
    _api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.getProperty("accountvalColorScheme") :
    def
  );
}

/***/ },

/***/ 131
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SR: () => (/* binding */ KoLFamiliar),
/* harmony export */   U8: () => (/* binding */ KoLItem),
/* harmony export */   cw: () => (/* binding */ KoLSkill),
/* harmony export */   hG: () => (/* binding */ KoLSlot)
/* harmony export */ });
/* harmony import */ var _apiSupplier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(511);
function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}





















var KoLItem = /*#__PURE__*/function () {function KoLItem() {_classCallCheck(this, KoLItem);}return _createClass(KoLItem, null, [{ key: "get", value:
    function get(key) {
      return _apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.getItem(key);
    } }, { key: "none", get:

    function get() {
      return _apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.noItem();
    } }, { key: "all", value:

    function all() {
      return _apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.allItems();
    } }]);}();







var KoLFamiliar = /*#__PURE__*/function () {function KoLFamiliar() {_classCallCheck(this, KoLFamiliar);}return _createClass(KoLFamiliar, null, [{ key: "all", value:
    function all() {
      return _apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.allFamiliars();
    } }]);}();




var KoLSlot = /*#__PURE__*/function () {function KoLSlot() {_classCallCheck(this, KoLSlot);}return _createClass(KoLSlot, null, [{ key: "none", get:
    function get() {
      return _apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.noSlot();
    } }]);}();





var KoLSkill = /*#__PURE__*/function () {function KoLSkill() {_classCallCheck(this, KoLSkill);}return _createClass(KoLSkill, null, [{ key: "all", value:
    function all() {
      return _apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.allSkills();
    } }, { key: "none", get:

    function get() {
      return _apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.noSkill();
    } }, { key: "get", value:

    function get(key) {
      return _apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.getSkill(key);
    } }]);}();

/***/ },

/***/ 313
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ CoinmasterResolver)
/* harmony export */ });
/* harmony import */ var _api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(511);
/* harmony import */ var _api_supplierTypings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(131);
function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t.return || t.return();} finally {if (u) throw o;}} };}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}












var CoinmasterResolver = /*#__PURE__*/function () {



  function CoinmasterResolver(prices) {_classCallCheck(this, CoinmasterResolver);_defineProperty(this, "items", []);_defineProperty(this, "prices", void 0);
    this.prices = prices;
  }return _createClass(CoinmasterResolver, [{ key: "load", value:

    function load() {var _iterator = _createForOfIteratorHelper(
          _api_supplierTypings__WEBPACK_IMPORTED_MODULE_1__/* .KoLItem */ .U8.all()),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var item = _step.value;
          if (!item.tradeable || item.gift || item.quest || item.seller == null) {
            continue;
          }

          var token = item.seller.item;

          if (token == _api_supplierTypings__WEBPACK_IMPORTED_MODULE_1__/* .KoLItem */ .U8.none) {
            continue;
          }

          var price = _api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.sellPrice(item.seller, item);

          if (price <= 0) {
            continue;
          }

          this.items.push({
            item: item,
            coinmaster: item.seller,
            currencyCost: price,
            currency: token
          });
        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}

      this.prices.bulkLoad(this.items.map((i) => i.item));
    } }, { key: "getHighestCoinmaster", value:

    function getHighestCoinmaster(currency) {
      var highest = null;var _iterator2 = _createForOfIteratorHelper(

          this.items),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var item = _step2.value;
          if (item.currency != currency) {
            continue;
          }

          if (item.price == null) {
            var itemPrice = this.prices.itemPrice(item.item);

            if (itemPrice == null) {
              return null;
            }

            item.price = itemPrice.price;
            item.priceEach = item.price / item.currencyCost;
          }

          if (highest != null && highest.priceEach > item.priceEach) {
            continue;
          }

          highest = item;
        }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}

      return highest;
    } }]);}();

/***/ },

/***/ 376
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ ItemResolver)
/* harmony export */ });
/* harmony import */ var _api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(511);
/* harmony import */ var _api_supplierTypings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(131);
/* harmony import */ var _models_typings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(963);
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _coinmaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(313);
/* harmony import */ var _data_accountval_binds_txt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(854);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(483);
function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _slicedToArray(r, e) {return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function _arrayWithHoles(r) {if (Array.isArray(r)) return r;}function _createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t.return || t.return();} finally {if (u) throw o;}} };}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}






var

AccValStuff = /*#__PURE__*/_createClass(function AccValStuff() {_classCallCheck(this, AccValStuff);_defineProperty(this, "itemType", void 0);_defineProperty(this, "actualItem", void 0);_defineProperty(this, "skill", void 0);_defineProperty(this, "untradeableItem", void 0);_defineProperty(this, "garden", void 0);_defineProperty(this, "script", void 0);_defineProperty(this, "userSetting", void 0);_defineProperty(this, "visitUrlLink", void 0);_defineProperty(this, "visitUrlIncludes", void 0);_defineProperty(this, "correspondence", void 0);_defineProperty(this, "currencyAmount", void 0);});













var ItemResolver = /*#__PURE__*/function () {






  function ItemResolver(prices) {_classCallCheck(this, ItemResolver);_defineProperty(this, "visitCache", new Map());_defineProperty(this, "accValStuff", void 0);_defineProperty(this, "accountValCache", new Map());_defineProperty(this, "accountValVisitCachePropName", "_accountValVisitCache");_defineProperty(this, "prices", void 0);
    this.prices = prices;
    this.accValStuff = this.loadAccountValStuff();
  }return _createClass(ItemResolver, [{ key: "loadCache", value:

    function loadCache() {
      var prop = _api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.
      getProperty(this.accountValVisitCachePropName).
      split(",");var _iterator = _createForOfIteratorHelper(

          prop),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var p = _step.value;
          if (!p.includes(":")) {
            continue;
          }

          var spl = p.split(":");
          this.accountValCache.set(
            _api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.toItem(_utils_utils__WEBPACK_IMPORTED_MODULE_6__/* .AccountValUtils */ .E.toInt(spl[0])),
            spl[1].startsWith("t")
          );
        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}
    } }, { key: "saveCache", value:

    function saveCache() {
      var values = [];
      this.accountValCache.forEach((val, key) =>
      values.push(_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.toInt(key) + ":" + (val ? "t" : "f"))
      );
      values.sort((v1, v2) => v1.localeCompare(v2));

      var val = values.join(",");

      if (_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.getProperty(this.accountValVisitCachePropName) == val) {
        return;
      }

      _api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.setProperty(this.accountValVisitCachePropName, values.join(","));
    } }, { key: "getUrledItems", value:

    function getUrledItems() {
      var items = [];
      var origSize = this.accountValCache.size;var _iterator2 = _createForOfIteratorHelper(

          this.accValStuff),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var s = _step2.value;
          if (s.itemType == _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemType */ .SP.BOOK) {
            if (_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.haveSkill(s.skill)) {
              items.push([s.actualItem, _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemStatus */ .Kw.BOUND]);
            }
          } else if (s.itemType == _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemType */ .SP.EUDORA) {
            if (
            this.visitCheck(
              s.actualItem,
              "account.php?tab=correspondence",
              s.correspondence
            ))
            {
              items.push([s.actualItem, _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemStatus */ .Kw.BOUND]);
            }
          } else if (s.itemType == _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemType */ .SP.PROPERTY) {
            if (this.testProperty(s.userSetting)) {
              items.push([s.actualItem, _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemStatus */ .Kw.BOUND]);
            }
          } else if (s.itemType == _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemType */ .SP.VISIT_URL_CHECK) {
            if (this.visitCheck(s.actualItem, s.visitUrlLink, s.visitUrlIncludes)) {
              items.push([s.actualItem, _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemStatus */ .Kw.BOUND]);
            }
          } else if (s.itemType == _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemType */ .SP.GARDEN) {
            if (_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.myGardenType() == s.garden) {
              items.push([s.actualItem, _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemStatus */ .Kw.IN_USE]);
            }
          } else if (s.itemType == _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemType */ .SP.SKILL) {
            if (_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.getPermedSkills()[s.skill.name]) {
              items.push([s.actualItem, _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemStatus */ .Kw.BOUND]);
            }
          } else if (s.itemType == _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemType */ .SP.CAMPGROUND) {
            if (_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.getCampground()[s.actualItem.name] != null) {
              items.push([s.actualItem, _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemStatus */ .Kw.BOUND]);
            }
          } else if (s.itemType == _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemType */ .SP.SCRIPT) {
            if (eval(s.script)) {
              items.push([s.actualItem, _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemStatus */ .Kw.BOUND]);
            }
          }
        }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}

      if (origSize != this.accountValCache.size) {
        this.saveCache();
      }

      return items;
    } }, { key: "testProperty", value:

    function testProperty(property) {
      var result = true;var _iterator3 = _createForOfIteratorHelper(

          property.split("&")),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var prop = _step3.value;
          var isTrue = _utils_utils__WEBPACK_IMPORTED_MODULE_6__/* .AccountValUtils */ .E.toBoolean(
            _api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.getProperty(prop.replace("!", ""))
          );
          var isNotNegated = !prop.includes("!");
          result = result && isTrue == isNotNegated;
        }} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}

      return result;
    } }, { key: "addItem", value:

    function addItem(
    ownedItems,
    actualItem,
    item,
    name,
    plural,
    bound)


    {var count = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;var worthMultiplier = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
      var v = new _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ValItem */ .Fx(actualItem, item, name, plural, bound);
      v.worthMultiplier = worthMultiplier;
      ownedItems.set(v, (ownedItems.get(v) | 0) + count);
    } }, { key: "resolveBoundToTradeables", value:

    function resolveBoundToTradeables(
    copy,
    ownedItems,
    resolve)
    {
      var coinmaster;var _iterator4 = _createForOfIteratorHelper(

          this.accValStuff),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var s = _step4.value;
          if (!resolve.includes(s.itemType)) {
            continue;
          }

          try {var _s$currencyAmount;
            if (s.itemType == _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemType */ .SP.CURRENCY && s.untradeableItem == null) {
              if (coinmaster == null) {
                coinmaster = new _coinmaster__WEBPACK_IMPORTED_MODULE_4__/* .CoinmasterResolver */ .w(this.prices);
                coinmaster.load();
              }

              var _item = coinmaster.getHighestCoinmaster(s.actualItem);

              if (_item == null) {
                continue;
              }

              s.currencyAmount = _item.currencyCost;
              s.untradeableItem = _item.currency;
              s.actualItem = _item.item;
            }

            var item = s.untradeableItem;
            var pair = copy[item.name];

            if (pair == null) {
              continue;
            }

            var v = pair[0];
            this.addItem(
              ownedItems,
              item,
              s.actualItem,
              item.name,
              item.plural,
              v.bound == null || v.bound == _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemStatus */ .Kw.NO_TRADE ?
              s.itemType == _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemType */ .SP.UNTRADEABLE_ITEM ?
              _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemStatus */ .Kw.BOUND :
              _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemStatus */ .Kw.NO_TRADE :
              v.bound,
              pair[1], (_s$currencyAmount =
              s.currencyAmount) !== null && _s$currencyAmount !== void 0 ? _s$currencyAmount : 1
            );
          } catch (e) {
            _api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.print(
              "You probably need to update mafia! Got an error! " + e,
              _utils_colors__WEBPACK_IMPORTED_MODULE_3__/* .AccountValColors */ .HK.attentionGrabbingWarning
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
            fam.hatchling,
            fam.toString(),
            fam.toString(),
            _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemStatus */ .Kw.FAMILIAR
          );
        }} catch (err) {_iterator5.e(err);} finally {_iterator5.f();}
    } }, { key: "resolveFamiliarItems", value:

    function resolveFamiliarItems() {
      var famEquipped = new Map();var _iterator6 = _createForOfIteratorHelper(

          _api_supplierTypings__WEBPACK_IMPORTED_MODULE_1__/* .KoLFamiliar */ .SR.all()),_step6;try {for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {var fam = _step6.value;
          if (!_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.haveFamiliar(fam) || _api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.myFamiliar() == fam) {
            continue;
          }

          var item = _api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.familiarEquippedEquipment(fam);

          if (item == null || item == _api_supplierTypings__WEBPACK_IMPORTED_MODULE_1__/* .KoLItem */ .U8.none) {
            continue;
          }

          famEquipped.set(item, (famEquipped.get(item) | 0) + 1);
        }} catch (err) {_iterator6.e(err);} finally {_iterator6.f();}

      return famEquipped;
    } }, { key: "resolveSessionItems", value:

    function resolveSessionItems() {
      var map = new Map();
      Object.entries(_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.mySessionItems()).forEach((value) =>
      map.set(_api_supplierTypings__WEBPACK_IMPORTED_MODULE_1__/* .KoLItem */ .U8.get(value[0]), value[1])
      );

      return map;
    } }, { key: "visitCheck", value:

    function visitCheck(item, url, find) {
      if (this.accountValCache.has(item)) {
        return this.accountValCache.get(item);
      }

      var page = this.visitCache.get(url);

      if (page == null) {
        page = _api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.visitUrl(url);
        this.visitCache.set(url, page);
      }

      var result = page.includes(find);
      this.accountValCache.set(item, result);

      return result;
    } }, { key: "loadAccountValStuff", value:

    function loadAccountValStuff() {
      var buffer = _data_accountval_binds_txt__WEBPACK_IMPORTED_MODULE_5__;
      var values = [];var _iterator7 = _createForOfIteratorHelper(

          buffer.split(/(\n|\r)+/)),_step7;try {loop: for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {var line = _step7.value;
          if (line.startsWith("#") || line.length == 0) {
            continue;
          }

          var spl = line.split("\t");

          if (spl.length < 2) {
            continue;
          }

          var _v = new AccValStuff();

          try {
            _v.actualItem = _api_supplierTypings__WEBPACK_IMPORTED_MODULE_1__/* .KoLItem */ .U8.get(spl[1]);
          } catch (e) {
            _api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.print(
              "Error! Update mafia? " + e,
              _utils_colors__WEBPACK_IMPORTED_MODULE_3__/* .AccountValColors */ .HK.attentionGrabbingWarning
            );
            continue;
          }

          switch (spl[0]) {
            case "i":
              _v.itemType = _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemType */ .SP.UNTRADEABLE_ITEM;
              _v.untradeableItem = _api_supplierTypings__WEBPACK_IMPORTED_MODULE_1__/* .KoLItem */ .U8.get(spl[2]);
              break;
            case "b":
              _v.itemType = _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemType */ .SP.BOOK;
              _v.skill = _api_supplierTypings__WEBPACK_IMPORTED_MODULE_1__/* .KoLSkill */ .cw.get(spl[2]);
              break;
            case "p":
              _v.itemType = _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemType */ .SP.PROPERTY;
              _v.userSetting = spl[2];
              break;
            case "e":
              _v.itemType = _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemType */ .SP.EUDORA;
              _v.correspondence = spl[2];
              break;
            case "v":
              _v.itemType = _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemType */ .SP.VISIT_URL_CHECK;
              _v.visitUrlLink = spl[2];
              _v.visitUrlIncludes = spl[3];
              break;
            case "g":
              _v.itemType = _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemType */ .SP.GARDEN;
              _v.garden = spl[2];
              break;
            case "t":
              _v.itemType = _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemType */ .SP.CURRENCY;

              if (spl.length > 2) {
                _v.untradeableItem = _api_supplierTypings__WEBPACK_IMPORTED_MODULE_1__/* .KoLItem */ .U8.get(spl[2]);
                _v.currencyAmount = parseInt(spl[3]);
              }

              break;
            case "c":
              _v.itemType = _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemType */ .SP.CAMPGROUND;
              break;
            case "s":
              _v.itemType = _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemType */ .SP.SCRIPT;
              _v.script = spl[2];
              break;
            case "h":
              this.prices.addSpecialCase(_v.actualItem, parseInt(spl[2]));
              continue loop;
              break;
            default:
              _api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.print(
                "Found line '" + line + "' which I can't handle!",
                _utils_colors__WEBPACK_IMPORTED_MODULE_3__/* .AccountValColors */ .HK.attentionGrabbingWarning
              );
              continue;
          }

          values.push(_v);
        }} catch (err) {_iterator7.e(err);} finally {_iterator7.f();}

      this.loadSkills(values);

      loop: for (var _i = 0, _values = values; _i < _values.length; _i++) {var v = _values[_i];
        if (
        v.actualItem.tradeable ||
        v.itemType == _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemType */ .SP.CURRENCY && v.untradeableItem == null)
        {
          continue;
        }var _iterator8 = _createForOfIteratorHelper(

            values),_step8;try {for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {var v1 = _step8.value;
            if (
            v1.itemType != _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemType */ .SP.UNTRADEABLE_ITEM &&
            v1.itemType != _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemType */ .SP.CURRENCY)
            {
              continue;
            }

            if (v1.untradeableItem != v.actualItem) {
              continue;
            }

            continue loop;
          }} catch (err) {_iterator8.e(err);} finally {_iterator8.f();}

        _api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.print(
          "Missing a tradeable item for " + v.actualItem,
          _utils_colors__WEBPACK_IMPORTED_MODULE_3__/* .AccountValColors */ .HK.attentionGrabbingWarning
        );
      }

      this.loadCache();

      return values;
    } }, { key: "loadSkills", value:

    function loadSkills(values) {
      var itemsSkills = new Map(
        _api_supplierTypings__WEBPACK_IMPORTED_MODULE_1__/* .KoLItem */ .U8.all().
        map((i) => [i, _api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.skillModifier(i, "Skill")]).
        filter(
          (_ref) => {var _ref2 = _slicedToArray(_ref, 2),i = _ref2[0],skill = _ref2[1];return (
              !i.reusable && !i.quest && !i.gift && skill != _api_supplierTypings__WEBPACK_IMPORTED_MODULE_1__/* .KoLSkill */ .cw.none);}
        )
      );
      var alreadyNoted = values.map((v) => v.actualItem);var _iterator9 = _createForOfIteratorHelper(

          itemsSkills),_step9;try {for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {var _step9$value = _slicedToArray(_step9.value, 2),i = _step9$value[0],skill = _step9$value[1];
          if (!i.tradeable || alreadyNoted.includes(i)) {
            continue;
          }

          var v = new AccValStuff();
          v.itemType = _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemType */ .SP.SKILL;
          v.actualItem = i;
          v.skill = skill;
          values.push(v);
        }} catch (err) {_iterator9.e(err);} finally {_iterator9.f();}
    } }]);}();

/***/ },

/***/ 483
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ AccountValUtils)
/* harmony export */ });
/* harmony import */ var _api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(511);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _models_typings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(963);
function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t.return || t.return();} finally {if (u) throw o;}} };}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}




var AccountValUtils = /*#__PURE__*/function () {function AccountValUtils() {_classCallCheck(this, AccountValUtils);}return _createClass(AccountValUtils, null, [{ key: "splitArguments", value:
    function splitArguments(
    settings,
    command)

    {var debugMessages = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var debug = function debug(message) {
        if (!debugMessages) {
          return;
        }

        _api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .kol */ .x.print("DEBUG: " + message, _colors__WEBPACK_IMPORTED_MODULE_1__/* .AccountValColors */ .HK.minorNote);
      };

      var tCommand = command;
      var match;

      while (
      (match = tCommand.match(/(^| )([a-zA-Z]+ )([a-zA-Z\d"]+)/)) != null)
      {
        tCommand = tCommand.replace(match[2], "");
        var setting = settings.getSetting(match[2].trim());
        var v2 = (match[3] || "").replace("!", "").split("=")[0].trim();
        var setting2 = settings.getSetting(
          v2.toLowerCase() == "true" ? "" : v2
        );

        if (
        setting == null ||
        setting.type == _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .FieldType */ .PU.BOOLEAN && setting2 != null)
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
    } }, { key: "toBoolean", value:

    function toBoolean(string) {
      return ["true", "yes", "1"].includes(string.toLowerCase());
    } }, { key: "toFloat", value:

    function toFloat(string) {
      return parseFloat(string.replaceAll(",", ""));
    } }, { key: "toInt", value:

    function toInt(string) {
      return parseInt(string.replaceAll(",", ""));
    } }]);}();

/***/ },

/***/ 511
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ setProvider),
/* harmony export */   x: () => (/* binding */ kol)
/* harmony export */ });


var kol;

function setProvider(provider) {
  kol = provider;
}

/***/ },

/***/ 854
(module) {

module.exports = "# Original data taken from https://github.com/soolar/accountval.ash\n# Item Containers! Start with i\ni\tpacket of mayfly bait\tmayfly bait necklace\ni\tClan VIP Lounge invitation\tClan VIP Lounge key\ni\tMake-Your-Own-Vampire-Fangs kit\tplastic vampire fangs\ni\tFolder Holder\tover-the-shoulder Folder Holder\ni\tcan of Rain-Doh\tempty Rain-Doh can\ni\tDiscontent&trade; Winter Garden Catalog\tpacket of winter seeds\ni\tEd the Undying exhibit crate\tThe Crown of Ed the Undying\ni\tPack of Every Card\tDeck of Every Card\ni\tDIY protonic accelerator kit\tprotonic accelerator pack\ni\tDear Past Self Package\tTime-Spinner\ni\tGranny Tood's Thanksgarden Catalog\tpacket of thanksgarden seeds\ni\tsuspicious package\tKremlin's Greatest Briefcase\ni\tLI-11 Motor Pool voucher\tAsdon Martin keyfob (on ring)\ni\tGrumpy Bumpkin's Pumpkin Seed Catalog\tpacket of pumpkin seeds\ni\tMint Salton Pepper's Peppermint Seed Catalog\tPeppermint Pip Packet\ni\tPete & Jackie's Dragon Tooth Emporium Catalog\tpacket of dragon's teeth\ni\tPocket Meteor Guide\tPocket Meteor Guide (well-thumbed)\ni\tcorked genie bottle\tgenie bottle\ni\tpantogram\tportable pantogram\ni\tlocked mumming trunk\tmumming trunk\ni\tJanuary's Garbage Tote (unopened)\tJanuary's Garbage Tote\ni\tPok&eacute;fam Guide to Capturing All of Them\tpacket of tall grass seeds\ni\tSongBoom&trade; BoomBox Box\tSongBoom&trade; BoomBox\ni\tBastille Battalion control rig crate\tBastille Battalion control rig\ni\tlatte lovers club card\tlatte lovers member's mug\ni\tKramco Industries packing carton\tKramco Sausage-o-Matic&trade;\ni\tmint condition Lil' Doctor&trade; bag\tLil' Doctor&trade; bag\ni\tvampyric cloake pattern\tvampyric cloake\ni\tFourth of May Cosplay Saber kit\tFourth of May Cosplay Saber\ni\trune-strewn spoon cocoon\thewn moon-rune spoon\ni\tBeach Comb Box\tBeach Comb\ni\tUnopened Eight Days a Week Pill Keeper\tEight Days a Week Pill Keeper\ni\tunopened diabolic pizza cube box\tdiabolic pizza cube\ni\tunopened Bird-a-Day calendar\tBird-a-Day calendar\ni\tmint-in-box Powerful Glove\tPowerful Glove\ni\tBetter Shrooms and Gardens catalog\tpacket of mushroom spores\ni\tGuzzlr application\tGuzzlr tablet\ni\tbag of Iunion stones\tIunion Crown\ni\tpackaged SpinMaster&trade; lathe\tSpinMaster&trade; lathe\ni\tBagged Cargo Cultist Shorts\tCargo Cultist Shorts\ni\tComprehensive Cartographic Compendium\tComprehensive Cartographic Compendium (well-read)\ni\tpackaged knock-off retro superhero cape\tunwrapped knock-off retro superhero cape\ni\tpackaged miniature crystal ball\tminiature crystal ball\ni\temotion chip\tspinal-fluid-covered emotion chip\ni\tpower seed\tpotted power plant\ni\tpackaged backup camera\tbackup camera\ni\tpackaged familiar scrapbook\tfamiliar scrapbook\ni\tpackaged industrial fire extinguisher\tindustrial fire extinguisher\ni\tPackaged Daylight Shavings Helmet\tDaylight Shavings Helmet\ni\tPackaged cold medicine cabinet\tCold medicine cabinet\ni\tbox o' ghosts\tgregarious ghostling\ni\tGordon Beer's Beer Garden Catalog\tPacket of beer seeds\ni\tMint condition magnifying glass\tcursed magnifying glass\ni\tAntique pair of blue jeans\tEllsbury's journal (used)\ni\twarehouse key\tmime army insignia (cryonics)\ni\twarehouse key\tmime army insignia (morale)\ni\twarehouse key\tmime army insignia (psychological warfare)\ni\twarehouse key\tmime army insignia (pyrotechnics)\ni\twarehouse key\tmime army insignia (sanitation)\ni\twarehouse key\tmime army insignia (espionage)\ni\twarehouse key\tmime army insignia (infantry)\ni\twarehouse key\tmime army insignia (intelligence)\ni\twarehouse key\tmime army infiltration glove\ni\twarehouse key\tmime army challenge coin\ni\twarehouse key\tmime army shotglass\ni\twarehouse key\tmiming corduroys\ni\twarehouse key\tmiming beret\ni\twarehouse key\tmiming gloves\ni\twarehouse key\tmiming boots\ni\twarehouse key\tmiming shirt\ni\tcombat lover's locket lockbox\tcombat lover's locket\ni\tundamaged Unbreakable Umbrella\tUnbreakable umbrella\ni\tpackaged June cleaver\tJune cleaver\ni\tdesigner sweatpants (new old stock)\tDesigner sweatpants\ni\tunopened tiny stillsuit\ttiny stillsuit\ni\tpackaged Jurassic Parka\tJurassic Parka\ni\tpackaged model train set\tmodel train set\ni\tChibiBuddy™ (off)\tChibiBuddy™ (on)\ni\tRock Garden Guide\tpacket of rock seeds\ni\tS.I.T. Course Voucher\tS.I.T. Course Completion Certificate\ni\tClosed-circuit phone system\tClosed-circuit pay phone\ni\tCursed monkey glove\tcursed monkey's paw\ni\tshrink-wrapped Cincho de Mayo\tCincho de Mayo\ni\tshrink-wrapped 2002 Mr. Store Catalog\t2002 Mr. Store Catalog\ni\tboxed august scepter\taugust scepter\ni\tbook of facts\tbook of facts (dog-eared)\ni\tcrated wardrobe-o-matic\twardrobe-o-matic\ni\twrapped candy cane sword cane\tcandy cane sword cane\ni\tin-the-box spring shoes\tspring shoes\ni\tpackaged Everfull Dart Holster\tEverfull Dart Holster\ni\tBoxed Apriling band helmet\tApriling band helmet\ni\tboxed Mayam Calendar\tMayam Calendar\ni\tpackaged Roman Candelabra\tRoman Candelabra\ni\tuntorn tearaway pants package\ttearaway pants\ni\tBoxed Sept-Ember Censer\tSept-Ember Censer\ni\tboxed bat wings\tbat wings\ni\tSealed TakerSpace letter of Marque\tTakerSpace letter of Marque\ni\tMcHugeLarge deluxe ski set\tMcHugeLarge duffel bag\ni\tCyberRealm keycode\tserver room key\ni\teldritch tincture\teldritch tincture (depleted)\ni\tnew-in-box toy Cupid bow\ttoy Cupid bow\ni\tassemble-it-yourself Leprecondo\tLeprecondo\ni\tPackaged April Shower Thoughts Calendar\tApril Shower Thoughts shield\ni\tUnpeeled Peridot of Peril\tPeridot of Peril\ni\tpackaged prismatic beret\tprismatic beret\ni\tMöbius ring box\tMöbius ring\ni\tpackaged Monodent of the Sea\tMonodent of the Sea\ni\tLab-grown blood cubic zirconia\tblood cubic zirconia\ni\tshrunken head in a duffel bag\tshrunken head\ni\tseal-clubbing club loot box\tlegendary seal-clubbing club\ni\tdiscreetly-wrapped Eternity Codpiece\tThe Eternity Codpiece\ni\tboxed Heartstone\tHeartstone\ni\tBoxed Archaeologist's Spade\tArchaeologist's Spade\ni\twrapped Baseball Diamond\tBaseball Diamond\ni\tPasta wand loot box\tlegendary pasta wand\n\n\n\n\n# Bookshelf stuff! Start with b\nb\tTome of Snowcone Summoning\tSummon Snowcones\nb\tScratch 'n' Sniff Sticker Tome\tSummon Stickers\nb\tTome of Sugar Shummoning\tSummon Sugar Sheets\nb\tTome of Clip Art\tSummon Clip Art\nb\tTome of Rad Libs\tSummon Rad Libs\nb\tThe Smith's Tome\tSummon Smithsness\nb\tMcPhee's Grimoire of Hilarious Object Summoning\tSummon Hilarious Objects\nb\tSp'n-Zor's Grimoire of &quot;Tasteful&quot; Gifts\tSummon Tasteful Items\nb\tSorcerers of the Shore Grimoire\tSummon Alice's Army Cards\nb\tThinknerd's Grimoire of Geeky Gifts\t Summon Geeky Gifts\nb\tLibram of Candy Heart Summoning\tSummon Candy Heart\nb\tLibram of Divine Favors\tSummon Party Favor\nb\tLibram of Love Songs\tSummon Love Song\nb\tLibram of BRICKOs\tSummon BRICKOs\nb\tGygaxian Libram\tSummon Dice\nb\tLibram of Resolutions\tSummon Resolutions\nb\tLibram of Pulled Taffy\tSummon Taffy\nb\tThe Confiscator's Grimoire\tSummon Confiscated Things\n\n\n\n# Property based detection! Start with p\np\tairplane charter: Spring Break Beach\tsleazeAirportAlways&!_sleazeAirportToday\np\tairplane charter: Conspiracy Island\tspookyAirportAlways&!_spookyAirportToday\np\tairplane charter: Dinseylandfill\tstenchAirportAlways&!_stenchAirportToday\np\tairplane charter: That 70s Volcano\thotAirportAlways&!_hotAirportToday\np\tairplane charter: The Glaciest\tcoldAirportAlways&!_coldAirportToday\np\tChateau Mantegna room key\tchateauAvailable\np\tbottle of lovebug pheromones\tlovebugsUnlocked\np\tshrine to the Barrel god\tbarrelShrineUnlocked\np\tX-32-F snowman crate\tsnojoAvailable\np\tLT&T telegraph office deed\ttelegraphOfficeAvailable\np\tdetective school application\thasDetectiveSchool\np\tBuild-a-City Gingerbread kit\tgingerbreadCityAvailable&!_gingerbreadCityToday\np\theart-shaped crate\tloveTunnelAvailable&!_loveTunnelUsed\np\tSpacegate access badge\tspacegateAlways&!_spacegateToday\np\tFantasyRealm membership packet\tfrAlways&!_frToday\np\tHorsery contract\thorseryAvailable\np\tNeverending Party invitation envelope\tneverendingPartyAlways&!_neverendingPartyToday\np\tvoter registration form\tvoteAlways&!_voteToday\np\tBoxing Day care package\tdaycareOpen&!_daycareToday\np\tPirateRealm membership packet\tprAlways&!_prToday\np\tDistant Woods Getaway Brochure\tgetawayCampsiteUnlocked\np\tUndrilled cosmic bowling ball\thasCosmicBowlingBall\np\tMayDay™ contract\thasMaydayContract\np\tboxed autumn-aton\thasAutumnaton\np\tdeed to Oliver's Place\townsSpeakeasy\n\n\n\n# Eudoras! Start with e\ne\tMy Own Pen Pal kit\tPen Pal\ne\tGameInformPowerDailyPro subscription card\tGameInformPowerDailyPro Magazine\ne\tXi Receiver Unit\tXi Receiver Unit\ne\tNew-You Club Membership Form\tNew-You Club\ne\tOur Daily Candles™ order form\tOur Daily Candles\ne\tBlack and White Apron Enrollment Form\tBlack & White Apron\n\n\n\n# visit_url contains... Start with v\n\n\n\n# eval(function) => boolean! Starts with s for script\ns\tOrder of the Green Thumb Order Form\trequire(\"kolmafia\").floristAvailable()\n\n\n\n# campground items! Starts with c\nc\tHaunted Doghouse\nc\tWitchess Set\nc\tSource terminal\nc\tpotted tea tree\nc\tA Guide to Burning Leaves\n\n\n\n# Gardens\ng\tpacket of pumpkin seeds\tpumpkin\t\ng\tPeppermint Pip Packet\tpeppermint\ng\tpacket of dragon's teeth\tskeleton\ng\tPacket of beer seeds\tbeer\ng\tpacket of winter seeds\twinter\ng\tpacket of thanksgarden seeds\tthanksgarden\ng\tpacket of tall grass seeds\tgrass\ng\tpacket of mushroom spores\tmushroom\ng\tpacket of rock seeds\trock\n\n\n# Items that are dependent on the value of another as they're no-trade\n# Item | Check Against | X of our item = 1 of that item\nt\tChibiBuddy™ (on)\tChibiBuddy™ (off)\t1\nt\tdistilled resin\tinflammable leaf\t50\nt\tRethinking Candy\tKnucklebone\t2750\n\n\n# Items that are a coinmaster currency, and is dynamically priced because there's no solid metric\n# The price is resolved at runtime\nt\tfat loot token\nt\tCop dollar\nt\tDriplet\nt\tChroner\nt\tFreddy Kruegerand\nt\tGuzzlrbuck\nt\tBeach Buck\nt\tVolcoino\nt\tFunFunds™\nt\tCoinspiracy\nt\tWal-Mart gift certificate\nt\tRubee™\nt\tbuffalo dime\nt\tSpacegate Research\n\n# Items that are best valued at a hardcoded value, although you may not get that value...\nh\tmeat paste\t10\nh\tmeat stack\t100\nh\tnest egg\t150\nh\tDungeon dragon chest\t500\nh\tMeat globe\t700\nh\tdense meat stack\t1000\nh\tLoose Meats\t2300\nh\tchest of the Bonerdagon\t3000\nh\tDuct tape wallet\t3050\nh\tStock Certificate\t5000\nh\tEnvelope full of Meat\t30000\nh\tDiscount Telescope Warehouse gift certificate\t100000";

/***/ },

/***/ 963
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $y: () => (/* binding */ ItemPrice),
/* harmony export */   Fx: () => (/* binding */ ValItem),
/* harmony export */   Kw: () => (/* binding */ ItemStatus),
/* harmony export */   PU: () => (/* binding */ FieldType),
/* harmony export */   SJ: () => (/* binding */ PriceType),
/* harmony export */   SP: () => (/* binding */ ItemType),
/* harmony export */   gx: () => (/* binding */ SortBy)
/* harmony export */ });
function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}


var ItemStatus = /*#__PURE__*/function (ItemStatus) {ItemStatus[ItemStatus["BOUND"] = 0] = "BOUND";ItemStatus[ItemStatus["NO_TRADE"] = 1] = "NO_TRADE";ItemStatus[ItemStatus["FAMILIAR"] = 2] = "FAMILIAR";ItemStatus[ItemStatus["IN_USE"] = 3] = "IN_USE";ItemStatus[ItemStatus["SHOP_WORTH"] = 4] = "SHOP_WORTH";return ItemStatus;}({});







var ItemType = /*#__PURE__*/function (ItemType) {ItemType[ItemType["UNTRADEABLE_ITEM"] = 0] = "UNTRADEABLE_ITEM";ItemType[ItemType["BOOK"] = 1] = "BOOK";ItemType[ItemType["PROPERTY"] = 2] = "PROPERTY";ItemType[ItemType["EUDORA"] = 3] = "EUDORA";ItemType[ItemType["GARDEN"] = 4] = "GARDEN";ItemType[ItemType["VISIT_URL_CHECK"] = 5] = "VISIT_URL_CHECK";ItemType[ItemType["SKILL"] = 6] = "SKILL";ItemType[ItemType["CURRENCY"] = 7] = "CURRENCY";ItemType[ItemType["CAMPGROUND"] = 8] = "CAMPGROUND";ItemType[ItemType["SCRIPT"] = 9] = "SCRIPT";return ItemType;}({});












var PriceType = /*#__PURE__*/function (PriceType) {PriceType[PriceType["NEW_PRICES"] = 0] = "NEW_PRICES";PriceType[PriceType["HISTORICAL"] = 1] = "HISTORICAL";PriceType[PriceType["MALL"] = 2] = "MALL";PriceType[PriceType["MALL_SALES"] = 3] = "MALL_SALES";PriceType[PriceType["AUTOSELL"] = 4] = "AUTOSELL";return PriceType;}({});







var FieldType = /*#__PURE__*/function (FieldType) {FieldType[FieldType["NUMBER"] = 0] = "NUMBER";FieldType[FieldType["SORTBY"] = 1] = "SORTBY";FieldType[FieldType["COLOR_SCHEME"] = 2] = "COLOR_SCHEME";FieldType[FieldType["BOOLEAN"] = 3] = "BOOLEAN";FieldType[FieldType["NAME"] = 4] = "NAME";FieldType[FieldType["STRING"] = 5] = "STRING";FieldType[FieldType["TEXT_TYPE"] = 6] = "TEXT_TYPE";return FieldType;}({});









var SortBy = /*#__PURE__*/function (SortBy) {SortBy[SortBy["NAME"] = 0] = "NAME";SortBy[SortBy["QUANTITY"] = 1] = "QUANTITY";SortBy[SortBy["PRICE"] = 2] = "PRICE";SortBy[SortBy["TOTAL_PRICE"] = 3] = "TOTAL_PRICE";SortBy[SortBy["SALES_VOLUME"] = 4] = "SALES_VOLUME";SortBy[SortBy["ITEM_ID"] = 5] = "ITEM_ID";return SortBy;}({});






















var ValItem = /*#__PURE__*/function () {










  function ValItem(
  actualItem)





  {var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : actualItem;var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : item.name;var pluralName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : item.plural;var bound = arguments.length > 4 ? arguments[4] : undefined;var snapshotSource = arguments.length > 5 ? arguments[5] : undefined;_classCallCheck(this, ValItem);_defineProperty(this, "name", void 0);_defineProperty(this, "pluralName", void 0);_defineProperty(this, "category", void 0);_defineProperty(this, "actualItem", void 0);_defineProperty(this, "tradeableItem", void 0);_defineProperty(this, "bound", void 0);_defineProperty(this, "shopWorth", void 0);_defineProperty(this, "worthMultiplier", 1);_defineProperty(this, "snapshotSource", void 0);
    this.actualItem = actualItem;
    this.name = name;
    this.pluralName = pluralName;
    this.tradeableItem = item;
    this.bound = bound;
    this.snapshotSource = snapshotSource;

    if (this.bound == null && !item.tradeable) {
      this.bound = ItemStatus.NO_TRADE;
    }
  }return _createClass(ValItem, [{ key: "withCategory", value:

    function withCategory(category) {
      this.category = category;

      return this;
    } }, { key: "getBound", value:

    function getBound() {
      if (this.bound == ItemStatus.BOUND) {
        return "Bound";
      }

      if (this.bound == ItemStatus.FAMILIAR) {
        return "Familiar";
      }

      if (this.bound == ItemStatus.IN_USE) {
        return "In Use";
      }

      if (this.bound == ItemStatus.NO_TRADE) {
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

    } }]);}();


var ItemPrice = /*#__PURE__*/_createClass(







  function ItemPrice(
  item,
  price,
  accuracy,
  daysOutdated)


  {var volume = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;var price2 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : -1;_classCallCheck(this, ItemPrice);_defineProperty(this, "item", void 0);_defineProperty(this, "price", void 0);_defineProperty(this, "price2", void 0);_defineProperty(this, "accuracy", void 0);_defineProperty(this, "daysOutdated", void 0);_defineProperty(this, "volume", void 0);
    this.item = item;
    this.price = price;
    this.accuracy = accuracy;
    this.daysOutdated = daysOutdated;
    this.volume = volume;
    this.price2 = price2;
  });

/***/ }

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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  main: () => (/* binding */ main)
});

// EXTERNAL MODULE: ./src/api/apiSupplier.ts
var apiSupplier = __webpack_require__(511);
;// external "kolmafia"
const external_kolmafia_namespaceObject = require("kolmafia");
;// ./src/api/provider/kolmafiaProvider.ts
function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}


var requiredRevision = 28933;

var KolmafiaProvider = /*#__PURE__*/function () {function KolmafiaProvider() {_classCallCheck(this, KolmafiaProvider);}return _createClass(KolmafiaProvider, [{ key: "print", value:
    function print(message, color) {
      (0,external_kolmafia_namespaceObject.print)(message, color);
    } }, { key: "printHtml", value:

    function printHtml(message) {
      (0,external_kolmafia_namespaceObject.printHtml)(message);
    } }, { key: "abort", value:

    function abort(message) {
      (0,external_kolmafia_namespaceObject.abort)(message);
    } }, { key: "getProperty", value:

    function getProperty(name) {
      return (0,external_kolmafia_namespaceObject.getProperty)(name);
    } }, { key: "visitUrl", value:

    function visitUrl(url) {
      return (0,external_kolmafia_namespaceObject.visitUrl)(url);
    } }, { key: "checkOutdated", value:

    function checkOutdated() {
      if ((0,external_kolmafia_namespaceObject.getRevision)() >= requiredRevision) {
        return;
      }

      this.printHtml("<font color='red'>You need to update KoLMafia to the latest version. This script will not work properly on versions older than ".concat(
        requiredRevision, ".</font>")
      );
    } }, { key: "myId", value:

    function myId() {
      return (0,external_kolmafia_namespaceObject.myId)();
    } }, { key: "getPlayerId", value:

    function getPlayerId(name) {
      return (0,external_kolmafia_namespaceObject.getPlayerId)(name);
    } }, { key: "getPlayerName", value:

    function getPlayerName(id) {
      return (0,external_kolmafia_namespaceObject.getPlayerName)(id);
    } }, { key: "myMeat", value:

    function myMeat() {
      return (0,external_kolmafia_namespaceObject.myMeat)();
    } }, { key: "myClosetMeat", value:

    function myClosetMeat() {
      return (0,external_kolmafia_namespaceObject.myClosetMeat)();
    } }, { key: "myStorageMeat", value:

    function myStorageMeat() {
      return (0,external_kolmafia_namespaceObject.myStorageMeat)();
    } }, { key: "mySessionMeat", value:

    function mySessionMeat() {
      return (0,external_kolmafia_namespaceObject.mySessionMeat)();
    } }, { key: "myFullness", value:

    function myFullness() {
      return (0,external_kolmafia_namespaceObject.myFullness)();
    } }, { key: "fullnessLimit", value:

    function fullnessLimit() {
      return (0,external_kolmafia_namespaceObject.fullnessLimit)();
    } }, { key: "myInebriety", value:

    function myInebriety() {
      return (0,external_kolmafia_namespaceObject.myInebriety)();
    } }, { key: "inebrietyLimit", value:

    function inebrietyLimit() {
      return (0,external_kolmafia_namespaceObject.inebrietyLimit)();
    } }, { key: "mySpleenUse", value:

    function mySpleenUse() {
      return (0,external_kolmafia_namespaceObject.mySpleenUse)();
    } }, { key: "spleenLimit", value:

    function spleenLimit() {
      return (0,external_kolmafia_namespaceObject.spleenLimit)();
    } }, { key: "myLevel", value:

    function myLevel() {
      return (0,external_kolmafia_namespaceObject.myLevel)();
    } }, { key: "isDarkMode", value:

    function isDarkMode() {
      return (0,external_kolmafia_namespaceObject.isDarkMode)();
    } }, { key: "toInt", value:

    function toInt(val) {
      return (0,external_kolmafia_namespaceObject.toInt)(val);
    } }, { key: "toItem", value:

    function toItem(val) {
      if (typeof val == "string") {
        return external_kolmafia_namespaceObject.Item.get(val);
      }

      return (0,external_kolmafia_namespaceObject.toItem)(val);
    } }, { key: "toFamiliar", value:

    function toFamiliar(val) {
      if (typeof val == "string") {
        return external_kolmafia_namespaceObject.Familiar.get(val);
      }

      return (0,external_kolmafia_namespaceObject.toFamiliar)(val);
    } }, { key: "entityEncode", value:

    function entityEncode(val) {
      return (0,external_kolmafia_namespaceObject.entityEncode)(val);
    } }, { key: "entityDecode", value:

    function entityDecode(val) {
      return (0,external_kolmafia_namespaceObject.entityDecode)(val);
    } }, { key: "storeCache", value:

    function storeCache(key, value, largeData) {
      if (largeData) {
        (0,external_kolmafia_namespaceObject.bufferToFile)(key, value);
      } else {
        external_kolmafia_namespaceObject.sessionStorage.setItem(key, value);
      }
    } }, { key: "retrieveCache", value:

    function retrieveCache(key, largeData) {var _sessionStorage$getIt;
      if (largeData) {
        return (0,external_kolmafia_namespaceObject.fileToBuffer)(key);
      }

      return (_sessionStorage$getIt = external_kolmafia_namespaceObject.sessionStorage.getItem(key)) !== null && _sessionStorage$getIt !== void 0 ? _sessionStorage$getIt : "";
    } }, { key: "autosellPrice", value:

    function autosellPrice(item) {
      return (0,external_kolmafia_namespaceObject.autosellPrice)(item);
    } }, { key: "shopAmount", value:

    function shopAmount(item) {
      return (0,external_kolmafia_namespaceObject.shopAmount)(item);
    } }, { key: "shopPrice", value:

    function shopPrice(item) {
      return (0,external_kolmafia_namespaceObject.shopPrice)(item);
    } }, { key: "sellPrice", value:

    function sellPrice(coinmaster, item) {
      return (0,external_kolmafia_namespaceObject.sellPrice)(coinmaster, item);
    } }, { key: "historicalPrice", value:

    function historicalPrice(item) {
      return (0,external_kolmafia_namespaceObject.historicalPrice)(item);
    } }, { key: "historicalAge", value:

    function historicalAge(item) {
      return (0,external_kolmafia_namespaceObject.historicalAge)(item);
    } }, { key: "equippedAmount", value:

    function equippedAmount(item) {
      return (0,external_kolmafia_namespaceObject.equippedAmount)(item);
    } }, { key: "familiarEquippedEquipment", value:

    function familiarEquippedEquipment(fam) {
      return (0,external_kolmafia_namespaceObject.familiarEquippedEquipment)(fam);
    } }, { key: "getInventory", value:

    function getInventory() {
      return (0,external_kolmafia_namespaceObject.getInventory)();
    } }, { key: "getCloset", value:

    function getCloset() {
      return (0,external_kolmafia_namespaceObject.getCloset)();
    } }, { key: "getStorage", value:

    function getStorage() {
      return (0,external_kolmafia_namespaceObject.getStorage)();
    } }, { key: "getFreePulls", value:

    function getFreePulls() {
      return (0,external_kolmafia_namespaceObject.getFreePulls)();
    } }, { key: "getNoPulls", value:

    function getNoPulls() {
      return (0,external_kolmafia_namespaceObject.getNoPulls)();
    } }, { key: "getStash", value:

    function getStash() {
      return (0,external_kolmafia_namespaceObject.getStash)();
    } }, { key: "getDisplay", value:

    function getDisplay() {
      return (0,external_kolmafia_namespaceObject.getDisplay)();
    } }, { key: "getShop", value:

    function getShop() {
      return (0,external_kolmafia_namespaceObject.getShop)();
    } }, { key: "mySessionItems", value:

    function mySessionItems() {
      return (0,external_kolmafia_namespaceObject.mySessionItems)();
    } }, { key: "getCampground", value:

    function getCampground() {
      return (0,external_kolmafia_namespaceObject.getCampground)();
    } }, { key: "myFamiliar", value:

    function myFamiliar() {
      return (0,external_kolmafia_namespaceObject.myFamiliar)();
    } }, { key: "haveFamiliar", value:

    function haveFamiliar(fam) {
      return (0,external_kolmafia_namespaceObject.haveFamiliar)(fam);
    } }, { key: "haveSkill", value:

    function haveSkill(skill) {
      return (0,external_kolmafia_namespaceObject.haveSkill)(skill);
    } }, { key: "getPermedSkills", value:

    function getPermedSkills() {
      return (0,external_kolmafia_namespaceObject.getPermedSkills)();
    } }, { key: "skillModifier", value:

    function skillModifier(item, mod) {
      return (0,external_kolmafia_namespaceObject.skillModifier)(item, mod);
    } }, { key: "myGardenType", value:

    function myGardenType() {
      return (0,external_kolmafia_namespaceObject.myGardenType)();
    } }, { key: "getWorkshed", value:

    function getWorkshed() {
      return (0,external_kolmafia_namespaceObject.getWorkshed)();
    } }, { key: "getRelated", value:

    function getRelated(item, type) {
      return (0,external_kolmafia_namespaceObject.getRelated)(item, type);
    } }, { key: "allNormalOutfits", value:

    function allNormalOutfits() {
      return (0,external_kolmafia_namespaceObject.allNormalOutfits)();
    } }, { key: "itemType", value:

    function itemType(item) {
      return (0,external_kolmafia_namespaceObject.itemType)(item);
    } }, { key: "isDiscardable", value:

    function isDiscardable(item) {
      return (0,external_kolmafia_namespaceObject.isDiscardable)(item);
    } }, { key: "getItem", value:

    function getItem(name) {
      return external_kolmafia_namespaceObject.Item.get(name);
    } }, { key: "allItems", value:

    function allItems() {
      return external_kolmafia_namespaceObject.Item.all();
    } }, { key: "noItem", value:

    function noItem() {
      return external_kolmafia_namespaceObject.Item.none;
    } }, { key: "allFamiliars", value:

    function allFamiliars() {
      return external_kolmafia_namespaceObject.Familiar.all();
    } }, { key: "getSkill", value:

    function getSkill(name) {
      return external_kolmafia_namespaceObject.Skill.get(name);
    } }, { key: "allSkills", value:

    function allSkills() {
      return external_kolmafia_namespaceObject.Skill.all();
    } }, { key: "noSkill", value:

    function noSkill() {
      return external_kolmafia_namespaceObject.Skill.none;
    } }, { key: "noSlot", value:

    function noSlot() {
      return external_kolmafia_namespaceObject.Slot.none;
    } }, { key: "toSlot", value:

    function toSlot(item) {
      return (0,external_kolmafia_namespaceObject.toSlot)(item);
    } }, { key: "evalJsFilter", value:

    function evalJsFilter(js) {
      return new Function("with (this) { return (".concat(js, "); }")).call("require(\"kolmafia\")"

      );
    } }]);}();
// EXTERNAL MODULE: ./src/api/supplierTypings.ts
var supplierTypings = __webpack_require__(131);
// EXTERNAL MODULE: ./src/resolvers/items.ts
var items = __webpack_require__(376);
// EXTERNAL MODULE: ./src/utils/colors.ts
var utils_colors = __webpack_require__(12);
;// ./src/resolvers/pages.ts
function pages_typeof(o) {"@babel/helpers - typeof";return pages_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, pages_typeof(o);}function _createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t.return || t.return();} finally {if (u) throw o;}} };}function _toConsumableArray(r) {return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _iterableToArray(r) {if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);}function _arrayWithoutHoles(r) {if (Array.isArray(r)) return _arrayLikeToArray(r);}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function pages_defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, pages_toPropertyKey(o.key), o);}}function pages_createClass(e, r, t) {return r && pages_defineProperties(e.prototype, r), t && pages_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function pages_classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperty(e, r, t) {return (r = pages_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function pages_toPropertyKey(t) {var i = pages_toPrimitive(t, "string");return "symbol" == pages_typeof(i) ? i : i + "";}function pages_toPrimitive(t, r) {if ("object" != pages_typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != pages_typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}



var StoreItem = /*#__PURE__*/pages_createClass(function StoreItem() {pages_classCallCheck(this, StoreItem);_defineProperty(this, "item", void 0);_defineProperty(this, "amount", void 0);_defineProperty(this, "limit", void 0);_defineProperty(this, "price", void 0);});











var PageResolver = /*#__PURE__*/function () {function PageResolver() {pages_classCallCheck(this, PageResolver);}return pages_createClass(PageResolver, [{ key: "getSnapshot", value:
    function getSnapshot(
    username)
    {
      var items = new Map(
        supplierTypings/* KoLItem */.U8.all().map((i) => {
          var name = i.name;

          while (name.match(/<\/?i>/)) {
            name = name.replace(/<\/?i>/, "");
          }

          return [apiSupplier/* kol */.x.entityDecode(name).toLowerCase(), i];
        })
      );
      var skills = new Map(
        supplierTypings/* KoLSkill */.cw.all().map((s) => [apiSupplier/* kol */.x.entityDecode(s.name).toLowerCase(), s])
      );
      var fams = new Map(
        supplierTypings/* KoLFamiliar */.SR.all().map((f) => [f.toString().toLowerCase(), f])
      );
      var ignore = _toConsumableArray(fams.values()).map((f) =>
      f.hatchling.toString().toLowerCase()
      );
      ignore.push.apply(ignore, _toConsumableArray(
        Object.values(apiSupplier/* kol */.x.allNormalOutfits()).map((s) => s.toLowerCase()))
      );
      ignore.push("miming regalia");

      var page = apiSupplier/* kol */.x.visitUrl(
        "https://api.aventuristo.net/av-snapshot?u=" + username
      );

      if (!page.includes("<p>Snapshot for <b>")) {
        return [];
      }

      page = page.substring(0, page.indexOf("id='a7'>Discoveries</h1>"));

      var tdRegex = /<td(.*?)<\/td>/m;
      var linkRegex =
      /class='(perm|hcperm|fam_run_90|fam_have|fam_run_100)'.*?<a href="[^"]+" rel="noreferrer">(?:.*?>)?([^>]*?)<\/a>/;
      var match;
      var has = [];

      while ((match = page.match(tdRegex)) != null) {
        page = page.substring(page.indexOf(match[0]) + match[0].length);
        var link = match[1].match(linkRegex);

        if (link == null) {
          continue;
        }

        var name = apiSupplier/* kol */.x.entityDecode(link[2]).toLowerCase();

        if (ignore.includes(name)) {
          continue;
        }

        var type = link[1];
        var isFam = !type.includes("perm");

        if (isFam) {
          if (fams.has(name)) {
            has.push(fams.get(name));
          } else {
            apiSupplier/* kol */.x.print(
              "Unable to resolve the familiar '" + name + "' from av-snapshot",
              utils_colors/* AccountValColors */.HK.attentionGrabbingWarning
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
          count = apiSupplier/* kol */.x.toInt(name.substring(name.lastIndexOf("x") + 1));
          name = name.substring(0, name.lastIndexOf(" "));
        }

        if (!items.has(name)) {
          apiSupplier/* kol */.x.print(
            "Unable to resolve the item '" + name + "' from av-snapshot",
            utils_colors/* AccountValColors */.HK.attentionGrabbingWarning
          );
          continue;
        }

        has.push([items.get(name), count]);
      }

      return has;
    } }, { key: "getFamiliars", value:

    function getFamiliars(userId) {
      var page = apiSupplier/* kol */.x.visitUrl("showfamiliars.php?who=" + userId);
      var regex = /onClick='fam\((\d+)\)'/;
      var match;
      var familiars = [];

      while ((match = page.match(regex)) != null) {
        page = page.replace(match[0], "");
        familiars.push(apiSupplier/* kol */.x.toFamiliar(apiSupplier/* kol */.x.toInt(match[1])));
      }

      return familiars;
    } }, { key: "getStore", value:

    function getStore(userId) {
      var items = [];
      var page = apiSupplier/* kol */.x.visitUrl("mallstore.php?whichstore=" + userId);var _iterator = _createForOfIteratorHelper(

          page.split("<tr>")),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var s = _step.value;
          var match = s.match(
            /selecteditem=(\d+).+?<b>.+?<\/b> \(([\d,]+)\) +(?:\(Limit ([\d,]+) \/ day\))?<\/td><td>((?:\d|,)+) Meat<\/td>/
          );

          if (match == null) {
            continue;
          }

          var item = new StoreItem();
          item.item = apiSupplier/* kol */.x.toItem(match[1]);
          item.amount = apiSupplier/* kol */.x.toInt(match[2]);
          item.limit = match[3] == null ? 0 : apiSupplier/* kol */.x.toInt(match[3]);
          item.price = apiSupplier/* kol */.x.toInt(match[4]);
          items.push(item);
        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}

      return items;
    } }, { key: "getDisplaycase", value:

    function getDisplaycase(userId) {
      var map = new Map();
      var descs = new Map(
        supplierTypings/* KoLItem */.U8.all().map((i) => [i.descid, i])
      );
      var page = apiSupplier/* kol */.x.visitUrl("displaycollection.php?who=" + userId);
      var lastShelf;
      var itemRegex =
      /<td width=30 height=30><img src=".+?" class=hand onClick='descitem\((\d+),(\d+)\)'><\/td><td valign=center><b>.+?<\/b>(?: \(((?:\d|,)+)\))?<\/td><\/tr>/;
      var shelfRegex = /<font color=white>([^<]+)<\/font>/;var _iterator2 = _createForOfIteratorHelper(

          page.split("<tr>")),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var s = _step2.value;
          var shelfMatch = s.match(shelfRegex);

          if (shelfMatch != null) {
            lastShelf = apiSupplier/* kol */.x.entityDecode(shelfMatch[1]);
          }

          var match = s.match(itemRegex);

          if (match == null) {
            continue;
          }

          var item = descs.get(match[1]);

          if (item == null) {
            apiSupplier/* kol */.x.print(
              "Unknown item description: " + match[1] + ", update mafia?",
              utils_colors/* AccountValColors */.HK.attentionGrabbingWarning
            );
            continue;
          }

          map.set(
            { item: item, shelf: lastShelf },
            match[3] == null ? 1 : apiSupplier/* kol */.x.toInt(match[3])
          );
        }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}

      return map;
    } }]);}();
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(483);
;// ./src/settings/presets.ts











var presets = null;

function getPresets() {
  if (presets != null) {
    return presets;
  }

  presets = [];

  presets.push({
    name: function name() {
      return ["consumables", "consumable", "diet", "consume", "consumeable"];
    },
    isProcessed: function isProcessed(item, worth) {
      return ["food", "booze", "spleen item"].includes(apiSupplier/* kol */.x.itemType(item));
    },
    desc: function desc() {
      return "Show only consumables";
    }
  });var _loop = function _loop()

  {var type = _arr[_i];
    presets.push({
      name: function name() {
        return [type];
      },
      isProcessed: function isProcessed(item) {
        return apiSupplier/* kol */.x.itemType(item).replace(" item", "") == type;
      },
      desc: function desc() {
        return "Show only " + type;
      }
    });
  };for (var _i = 0, _arr = ["food", "booze", "spleen"]; _i < _arr.length; _i++) {_loop();}

  presets.push({
    name: function name() {
      return ["beverage"];
    },
    isProcessed: function isProcessed(item, worth) {
      return item.notes.includes("BEVERAGE");
    },
    desc: function desc() {
      return "Show only beverage";
    }
  });

  presets.push({
    name: function name() {
      return ["hungry"];
    },
    isProcessed: function isProcessed(item, worth) {
      if (
      apiSupplier/* kol */.x.myFullness() + item.fullness >= apiSupplier/* kol */.x.fullnessLimit() ||
      item.levelreq < apiSupplier/* kol */.x.myLevel())
      {
        return false;
      }

      return apiSupplier/* kol */.x.itemType(item) == "food";
    },
    desc: function desc() {
      return "Show only food you can fit in stomach";
    }
  });

  presets.push({
    name: function name() {
      return ["thirsty"];
    },
    isProcessed: function isProcessed(item, worth) {
      if (
      apiSupplier/* kol */.x.myInebriety() + item.inebriety >= apiSupplier/* kol */.x.inebrietyLimit() ||
      item.levelreq < apiSupplier/* kol */.x.myLevel())
      {
        return false;
      }

      return apiSupplier/* kol */.x.itemType(item) == "booze";
    },
    desc: function desc() {
      return "Show only booze you can fit in liver";
    }
  });

  presets.push({
    name: function name() {
      return ["munchy"];
    },
    isProcessed: function isProcessed(item, worth) {
      if (
      apiSupplier/* kol */.x.mySpleenUse() + item.spleen >= apiSupplier/* kol */.x.spleenLimit() ||
      item.levelreq < apiSupplier/* kol */.x.myLevel())
      {
        return false;
      }

      return apiSupplier/* kol */.x.itemType(item) == "spleen item";
    },
    desc: function desc() {
      return "Show only spleen items you can fit in spleen";
    }
  });

  presets.push({
    name: function name() {
      return ["equip", "equips", "equipment", "gear"];
    },
    isProcessed: function isProcessed(item) {
      return apiSupplier/* kol */.x.toSlot(item) != supplierTypings/* KoLSlot */.hG.none;
    },
    desc: function desc() {
      return "Show only items that can be equipped";
    }
  });

  presets.push({
    name: function name() {
      return ["pvpable", "pvp", "stealable"];
    },
    isShown: function isShown(item, worth) {
      return item.isTradeable() && apiSupplier/* kol */.x.isDiscardable(item.actualItem);
    },
    desc: function desc() {
      return "Show only items that can be stolen";
    }
  });

  presets.push({
    name: function name() {
      return ["hatchling", "hatchlings", "larva"];
    },
    isProcessed: function isProcessed(item, worth) {
      return apiSupplier/* kol */.x.itemType(item) == "familiar larva";
    },
    desc: function desc() {
      return "Show only items that can turn into familiars";
    }
  });

  presets.push({
    name: function name() {
      return ["autosell", "junk"];
    },
    isShown: function isShown(item, worth) {
      if (item.isBound() || !apiSupplier/* kol */.x.isDiscardable(item.actualItem)) {
        return false;
      }

      return apiSupplier/* kol */.x.autosellPrice(item.actualItem) * 2 >= worth;
    },
    desc: function desc() {
      return "Show only items that sell at mall min";
    }
  });

  var autoselluseItems = [
  "Bag of park garbage",
  "ancient vinyl coin purse",
  "Black pension check",
  "Briefcase",
  "Collection of tiny spooky objects",
  "CSA discount card",
  "Duct tape wallet",
  "Fat Wallet",
  "Gathered Meat-Clip",
  "LOLmec statuette",
  "Orcish meat locker",
  "Old coin purse",
  "Old leather wallet",
  "Penultimate Fantasy chest",
  "Roll of meat",
  "Shiny stones",
  "SMOOCH bottlecap",
  "Solid gold jewel",
  "Stolen meatpouch",
  "Warm Subject gift certificate",
  "Envelope full of Meat",
  "chest of the Bonerdagon",
  "cursed piece of thirteen",
  "Discount Telescope Warehouse gift certificate",
  "dungeon dragon chest",
  "fat stack of cash",
  "flytrap pellet",
  "Gratitude chocolate (Meat-filled)",
  "handful of tips",
  "kobold treasure hoard",
  "loose Meats",
  "meat globe",
  "Mr. Big's Wallet",
  "pixel coin",
  "pixellated moneybag",
  "smut orc keepsake box",
  "Stock Certificate"].
  map((s) => supplierTypings/* KoLItem */.U8.get(s));

  presets.push({
    name: function name() {
      return ["autouse"];
    },
    isProcessed: function isProcessed(item) {
      return autoselluseItems.includes(item);
    },
    desc: function desc() {
      return "Show only (some) usable items that could make you some meat";
    }
  });

  presets.forEach((preset) => {
    if (preset.isProcessed == null && preset.isShown == null) {
      throw (
        "The preset " +
        preset.name()[0] +
        " must have one of isProcessed or isShown defined!");

    }

    if (preset.isProcessed != null && preset.isShown != null) {
      throw (
        "The preset " +
        preset.name()[0] +
        " can only have one of isProcessed and isShown defined!");

    }
  });

  return presets;
}

function getPreset(name) {
  return getPresets().find((p) => p.name().includes(name.toLowerCase()));
}
// EXTERNAL MODULE: ./src/models/typings.ts
var typings = __webpack_require__(963);
;// ./src/settings/settings.ts
function settings_typeof(o) {"@babel/helpers - typeof";return settings_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, settings_typeof(o);}function settings_createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = settings_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t.return || t.return();} finally {if (u) throw o;}} };}function settings_unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return settings_arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? settings_arrayLikeToArray(r, a) : void 0;}}function settings_arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function settings_classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function settings_defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, settings_toPropertyKey(o.key), o);}}function settings_createClass(e, r, t) {return r && settings_defineProperties(e.prototype, r), t && settings_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function settings_defineProperty(e, r, t) {return (r = settings_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function settings_toPropertyKey(t) {var i = settings_toPrimitive(t, "string");return "symbol" == settings_typeof(i) ? i : i + "";}function settings_toPrimitive(t, r) {if ("object" != settings_typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != settings_typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}





var sortByAliases = new Map([
["count", typings/* SortBy */.gx.QUANTITY],
["amount", typings/* SortBy */.gx.QUANTITY],
["meat", typings/* SortBy */.gx.PRICE],
["price", typings/* SortBy */.gx.PRICE],
["totalmeat", typings/* SortBy */.gx.TOTAL_PRICE],
["totalprice", typings/* SortBy */.gx.TOTAL_PRICE],
["id", typings/* SortBy */.gx.ITEM_ID],
["sales", typings/* SortBy */.gx.SALES_VOLUME],
["sold", typings/* SortBy */.gx.SALES_VOLUME]]
);

var AccountValSettings = /*#__PURE__*/function () {














































  function AccountValSettings() {settings_classCallCheck(this, AccountValSettings);settings_defineProperty(this, "fetchCloset", void 0);settings_defineProperty(this, "fetchStorage", void 0);settings_defineProperty(this, "fetchInventory", void 0);settings_defineProperty(this, "fetchShop", void 0);settings_defineProperty(this, "fetchDisplaycase", void 0);settings_defineProperty(this, "fetchSession", false);settings_defineProperty(this, "fetchClan", false);settings_defineProperty(this, "fetchingEverywhereish", true);settings_defineProperty(this, "fetchingNonItems", true);settings_defineProperty(this, "doSuperFast", false);settings_defineProperty(this, "doTradeables", void 0);settings_defineProperty(this, "doNontradeables", void 0);settings_defineProperty(this, "doBound", void 0);settings_defineProperty(this, "fetchFamiliars", void 0);settings_defineProperty(this, "fetchSnapshot", void 0);settings_defineProperty(this, "playerId", 0);settings_defineProperty(this, "displayLimit", 100);settings_defineProperty(this, "minimumMeat", 0);settings_defineProperty(this, "minimumAmount", 1);settings_defineProperty(this, "maxAge", 999999);settings_defineProperty(this, "sales", 0);settings_defineProperty(this, "sortBy", typings/* SortBy */.gx.TOTAL_PRICE);settings_defineProperty(this, "reverseSort", false);settings_defineProperty(this, "shopWorth", false);settings_defineProperty(this, "javascriptFilter", "");settings_defineProperty(this, "useLastSold", false);settings_defineProperty(this, "settingsDebug", false);settings_defineProperty(this, "brief", false);settings_defineProperty(this, "oldPricing", false);settings_defineProperty(this, "colorScheme", void 0);settings_defineProperty(this, "presets", []);settings_defineProperty(this, "doCategories", false);settings_defineProperty(this, "maxNaturalPrice", AccountValSettings.defaultMaxNaturalPrice);settings_defineProperty(this, "showSingleItemWorth", false);settings_defineProperty(this, "dateToFetch", void 0);settings_defineProperty(this, "logOutputAs", "fancy");settings_defineProperty(this, "logOutputTo", void 0);settings_defineProperty(this, "pricegun", false);
    this.colorScheme = "default";
  }return settings_createClass(AccountValSettings, [{ key: "getSetting", value:

















































































































































































































































































    function getSetting(alias) {
      alias = alias.toLowerCase();

      return (
        AccountValSettings.getSettings().find((s) => s.names.includes(alias)) ||
        null);

    } }, { key: "doSettings", value:

    function doSettings(args) {var _this = this;
      var errors = [];

      this.colorScheme = apiSupplier/* kol */.x.isDarkMode() ? "dark" : "default";

      if (apiSupplier/* kol */.x.getProperty("accountval_maxNaturalPrice").length > 0) {
        this.maxNaturalPrice = this.toNumber(
          apiSupplier/* kol */.x.getProperty("accountval_maxNaturalPrice")
        );
      }

      if (apiSupplier/* kol */.x.getProperty("accountval_text").length > 0) {
        var str = apiSupplier/* kol */.x.getProperty("accountval_text");

        if (str == "plain" || str == "fancy") {
          this.logOutputAs = str;
        } else {
          errors.push("The property 'accountval_text' has been set to '".concat(
            str, "' which is invalid.")
          );
        }
      }

      var wasSet = [];
      var settings = AccountValSettings.getSettings();

      var addUnknown = (arg) => {
        errors.push("Failed to handle parameter: <font color='".concat(
          utils_colors/* AccountValColors */.HK.failedToParseSettings, "'>").concat(arg, "</font>")
        );
      };var _iterator = settings_createForOfIteratorHelper(

          args),_step;try {var _loop = function _loop() {var arg = _step.value;
            if (arg.length == 0) {return 0; // continue

            }

            if (arg == "debug") {
              _this.settingsDebug = true;
              AccountValSettings.timingsDebug = true;return 0; // continue

            }

            if (arg == "timings") {
              AccountValSettings.timingsDebug = true;return 0; // continue

            } else if (arg == "settings") {
              _this.settingsDebug = true;return 0; // continue

            }

            var name = arg.split("=")[0].toLowerCase().replace(/[-+!]/g, "");
            var setting = settings.find((s) => s.names.includes(name));

            if (setting == null) {
              addUnknown(arg);return 0; // continue

            }

            var isTrue = !arg.startsWith("-") && !arg.startsWith("!");

            if (arg.startsWith("-") || arg.startsWith("+") || arg.startsWith("!")) {
              arg = arg.substring(1);
            } else if (arg.includes("=") && setting.type == typings/* FieldType */.PU.BOOLEAN) {
              var v = arg.substring(arg.indexOf("=") + 1);

              if (!v.toLowerCase().match("^(0|1|(true)|(false)|(yes)|(no))$")) {
                addUnknown(arg);return 0; // continue

              }

              isTrue = utils/* AccountValUtils */.E.toBoolean(v);
            }

            switch (setting.type) {
              case typings/* FieldType */.PU.SORTBY:
                _this.parseSortBy(arg, isTrue, addUnknown);
                break;
              case typings/* FieldType */.PU.COLOR_SCHEME:
                _this.parseColorScheme(arg, addUnknown);
                break;
              case typings/* FieldType */.PU.TEXT_TYPE:
                _this.parseTextType(arg, addUnknown);
                break;
              case typings/* FieldType */.PU.NUMBER:
              case typings/* FieldType */.PU.NAME:
                _this.parseNumberOrName(setting, arg, addUnknown, errors);
                break;
              case typings/* FieldType */.PU.STRING:
                _this.parseString(setting, arg, addUnknown);
                break;
              default: // BOOLEAN
                if (setting.preset != null) {
                  _this.presets.push({ preset: setting.preset, negated: !isTrue });
                } else {
                  _this[setting.field] = isTrue;
                }

                wasSet.push(setting.field);
                break;
            }
          },_ret;for (_iterator.s(); !(_step = _iterator.n()).done;) {_ret = _loop();if (_ret === 0) continue;}} catch (err) {_iterator.e(err);} finally {_iterator.f();}

      this.resolveFetchSources(wasSet);

      if (this.settingsDebug) {
        for (var _i = 0, _Object$keys = Object.keys(this); _i < _Object$keys.length; _i++) {var setting = _Object$keys[_i];
          apiSupplier/* kol */.x.print(setting + " = " + this[setting]);
        }
      }

      return errors;
    } }, { key: "parseSortBy", value:

    function parseSortBy(
    arg,
    isTrue,
    addUnknown)
    {
      if (!arg.includes("=")) {
        return addUnknown(arg);
      }

      var v = arg.substring(arg.indexOf("=") + 1);

      if (v.length == 0) {
        return addUnknown(arg);
      }

      var sortBy =
      typings/* SortBy */.gx[
      Object.keys(typings/* SortBy */.gx).find((k) => k.toLowerCase() == v.toLowerCase())];


      if (sortBy == null) {
        sortBy = sortByAliases.get(v.toLowerCase());
      }

      if (sortBy == null) {
        return addUnknown(arg);
      }

      this.sortBy = sortBy;
      this.reverseSort = !isTrue;
    } }, { key: "parseColorScheme", value:

    function parseColorScheme(arg, addUnknown) {
      if (!arg.includes("=")) {
        return addUnknown(arg);
      }

      var v = arg.substring(arg.indexOf("=") + 1);

      if (v.length == 0 || !(0,utils_colors/* getAccountvalColors */.Xf)().includes(v)) {
        return addUnknown(arg);
      }

      this.colorScheme = v;
      (0,utils_colors/* loadAccountvalColors */.x5)(v);
    } }, { key: "parseTextType", value:

    function parseTextType(arg, addUnknown) {
      if (!arg.includes("=")) {
        return addUnknown(arg);
      }

      var v = arg.substring(arg.indexOf("=") + 1).toLowerCase();

      if (v.length == 0 || v != "plain" && v != "fancy") {
        return addUnknown(arg);
      }

      this.logOutputAs = v;
    } }, { key: "parseNumberOrName", value:

    function parseNumberOrName(
    setting,
    arg,
    addUnknown,
    errors)
    {
      if (!arg.includes("=")) {
        return addUnknown(arg);
      }

      var v = arg.substring(arg.indexOf("=") + 1);

      if (v.length == 0) {
        return addUnknown(arg);
      }

      if (setting.type == typings/* FieldType */.PU.NAME) {
        if (!v.match(/^[0-9]+$/)) {
          v = apiSupplier/* kol */.x.getPlayerId(v);

          if (!v.match(/^[0-9]+$/)) {
            errors.push("Failed to convert <font color='".concat(
              utils_colors/* AccountValColors */.HK.failedToParseSettings, "'>").concat(v, "</font> into a player ID")
            );

            return;
          }
        }
      }

      var num = this.toNumber(v);

      if (num == null) {
        return addUnknown(arg);
      }

      this[setting.field] = num;
    } }, { key: "parseString", value:

    function parseString(
    setting,
    arg,
    addUnknown)
    {
      if (!arg.includes("=")) {
        return addUnknown(arg);
      }

      var v = arg.substring(arg.indexOf("=") + 1);

      if (v.length == 0) {
        return addUnknown(arg);
      }

      this[setting.field] = v;
    } }, { key: "resolveFetchSources", value:

    function resolveFetchSources(wasSet) {
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

      if (!wasSet.includes("fetchFamiliars") && wasSet.includes("hatchling")) {
        this.fetchFamiliars = false;
      } else if (
      !wasSet.includes("fetchFamiliars") &&
      this.fetchingEverywhereish)
      {
        this.fetchFamiliars = this.doBound;
      }

      for (var _i2 = 0, _fetchSources = fetchSources; _i2 < _fetchSources.length; _i2++) {var fetchSource = _fetchSources[_i2];
        if (this[fetchSource] != null) {
          continue;
        }

        this[fetchSource] = this.fetchingEverywhereish;
      }

      this.fetchingNonItems = this.fetchingEverywhereish;
    } }, { key: "doesJSFilterUsePriceOrSales", value:

    function doesJSFilterUsePriceOrSales() {
      return (
        this.javascriptFilter != null &&
        this.javascriptFilter.split("=>")[0].split(",").length >= 3);

    } }, { key: "isShown", value:

    function isShown(item, worth) {
      return this.presets.every(
        (pre) =>
        (pre.preset.isShown != null ?
        pre.preset.isShown(item, worth) :
        pre.preset.isProcessed(item.actualItem, worth)) != pre.negated
      );
    } }, { key: "isArg", value:

    function isArg(arg, args) {
      arg = arg.toLowerCase().split("=")[0];

      return args.some((a) => arg === a);
    } }, { key: "toNumber", value:

    function toNumber(arg) {
      while (arg.includes(",") || arg.includes("_")) {
        arg = arg.replace(",", "").replace("_", "");
      }

      var match = arg.match(/^((?:\d+)|(?:\d*\.\d+))([mkbt]?)$/);

      if (match == null) {
        return null;
      }

      var num = utils/* AccountValUtils */.E.toFloat(match[1]);

      if (match[2] == "t") {
        num *= 1000000000000;
      } else if (match[2] == "b") {
        num *= 1000000000;
      } else if (match[2] == "m") {
        num *= 1000000;
      } else if (match[2] == "k") {
        num *= 1000;
      }

      return num;
    } }], [{ key: "getSettings", value: function getSettings() {if (this.settingsCache) {return this.settingsCache;}var settings = [];function makeSetting(type, name, aliases, desc, groupUnder, preset) {var setting = { groupUnder: groupUnder, type: type, field: name, names: aliases.map((s) => s.toLowerCase()), desc: desc, preset: preset };settings.push(setting);return setting;}makeSetting(typings/* FieldType */.PU.BOOLEAN, "fetchCloset", ["closet", "clos"], "Should it fetch from the closet");makeSetting(typings/* FieldType */.PU.BOOLEAN, "fetchStorage", ["storage", "stor", "hagnk", "hagnks"], "Should it fetch from storage");makeSetting(typings/* FieldType */.PU.BOOLEAN, "fetchShop", ["store", "mall", "shop"], "Should it fetch from the shop");makeSetting(typings/* FieldType */.PU.BOOLEAN, "fetchInventory", ["inventory", "inv"], "Should it fetch from your inventory");makeSetting(typings/* FieldType */.PU.BOOLEAN, "fetchDisplaycase", ["displaycase", "display", "dc"], "Should it fetch from the displaycase");makeSetting(typings/* FieldType */.PU.BOOLEAN, "fetchClan", ["clan", "stash"], "Should it check clan's stash? False by default");makeSetting(typings/* FieldType */.PU.BOOLEAN, "fetchSession", ["session"], "Should it fetch using your current session of items acquired? False by default");makeSetting(typings/* FieldType */.PU.BOOLEAN, "doTradeables", ["tradeable", "tradeables", "trade", "tradable"], "Should it do tradeables");makeSetting(typings/* FieldType */.PU.BOOLEAN, "doNontradeables", ["notrade", "nontrade", "notradeable", "notradable", "nontradeable", "notradeables", "nontradeables", "untrade", "untradeable", "untradeables"], "Should it do non-tradeables");makeSetting(typings/* FieldType */.PU.BOOLEAN, "fetchFamiliars", ["familiar", "familiars", "fam", "fams"], "Should it do familiars. Bound being true also means this is true if not set");makeSetting(typings/* FieldType */.PU.BOOLEAN, "fetchSnapshot", ["snapshot"], "Should it attempt to use av-snapshot?");makeSetting(typings/* FieldType */.PU.BOOLEAN, "doBound", ["bound", "bind", "bounded", "binds", "binded"], "Should it do items that are bound to your account");makeSetting(typings/* FieldType */.PU.NUMBER, "minimumMeat", ["meat", "minmeat", "minimummeat", "minmeat", "min-meat", "minprice", "price"], "Each item total worth, at least this amount.");makeSetting(typings/* FieldType */.PU.NUMBER, "minimumAmount", ["amount", "count", "minimumamount", "minamount"], "At least this many items");makeSetting(typings/* FieldType */.PU.NUMBER, "displayLimit", ["limit", "displaylimit", "maxdisplay", "lines"], "Limit results to display this amount");makeSetting(typings/* FieldType */.PU.NAME, "playerId", ["player", "playerid", "playername", "user", "who", "target", "name", "username"], "Target another player's DC and Shop.");makeSetting(typings/* FieldType */.PU.BOOLEAN, "doSuperFast", ["fast", "superfast", "speed", "quick", "rough"], "Try resolve everything with historical price");makeSetting(typings/* FieldType */.PU.NUMBER, "maxAge", ["age", "maxage", "days"], "The max days a price is allowed to be outdated");makeSetting(typings/* FieldType */.PU.SORTBY, "sortBy", ["sort", "sortby", "sorted"], "What we should sort the results by");makeSetting(typings/* FieldType */.PU.BOOLEAN, "shopWorth", ["worth", "shopworth", "pricing", "prices"], "Seperates items in shop from the other items");makeSetting(typings/* FieldType */.PU.STRING, "javascriptFilter", ["jsfilter", "javascriptfilter", "javascript", "js"], "Filters if an item can be shown");makeSetting(typings/* FieldType */.PU.NUMBER, "sales", ["sales", "sold"], "Hides items that have less than this amount of sales");makeSetting(typings/* FieldType */.PU.BOOLEAN, "useLastSold", ["useLastSold", "lastsold", "soldprice"], "Resolve prices by their last sold");makeSetting(typings/* FieldType */.PU.BOOLEAN, "brief", ["brief"], "Prints out a single line as the final result, the total meat.");makeSetting(typings/* FieldType */.PU.BOOLEAN, "oldPricing", ["oldpricing"], "Has accountval calculate prices from the old slower method");makeSetting(typings/* FieldType */.PU.COLOR_SCHEME, "colorScheme", ["color", "colors", "colorscheme", "scheme"], "What color schemes to use");makeSetting(typings/* FieldType */.PU.NUMBER, "maxNaturalPrice", ["max", "mallmax"], "The max natural price an item will reach before it's capped");makeSetting(typings/* FieldType */.PU.BOOLEAN, "doCategories", ["category", "categories", "shelf", "shelves"], "Seperates the items into categories");makeSetting(typings/* FieldType */.PU.BOOLEAN, "showSingleItemWorth", ["each"], "Displays the individual price of each item");makeSetting(typings/* FieldType */.PU.STRING, "dateToFetch", ["date", "fetchdate", "historical", "time", "when", "at"], "View everything with the prices of the past");makeSetting(typings/* FieldType */.PU.TEXT_TYPE, "logOutputAs", ["text", "logtype", "formatting"], "If accountval should log everything with plain or fancy text");makeSetting(typings/* FieldType */.PU.STRING, "logOutputTo", ["output"], "Send the output of accountval to a file instead of printing into cli");makeSetting(typings/* FieldType */.PU.BOOLEAN, "pricegun", ["pricegun"], "Resolve prices using pricegun. This will be slow.");var _iterator2 = settings_createForOfIteratorHelper(getPresets()),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var preset = _step2.value;makeSetting(typings/* FieldType */.PU.BOOLEAN, preset.name()[0], preset.name(), preset.desc(), "Preset Filters", preset);}} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}this.settingsCache = settings;return settings;} }]);}();settings_defineProperty(AccountValSettings, "timingsDebug", false);settings_defineProperty(AccountValSettings, "defaultMaxNaturalPrice", (new Date().getFullYear() - 2021) * 2000000000);settings_defineProperty(AccountValSettings, "settingsCache", null);


var PricingSettings = /*#__PURE__*/function () {function PricingSettings() {settings_classCallCheck(this, PricingSettings);settings_defineProperty(this, "expensivePricesAt",
    40000000);settings_defineProperty(this, "cheapTotalsLessThan",
    20000000);settings_defineProperty(this, "cheapPricesLessThan",
    2000000);settings_defineProperty(this, "maxPriceAge", void 0);settings_defineProperty(this, "oldPricing", void 0);settings_defineProperty(this, "dateToFetch", void 0);settings_defineProperty(this, "globalSettings", void 0);}return settings_createClass(PricingSettings, [{ key: "getMaxPriceAge", value:





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
    } }]);}();
;// ./src/utils/timings.ts
var _AccValTiming;function timings_typeof(o) {"@babel/helpers - typeof";return timings_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, timings_typeof(o);}function timings_createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = timings_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t.return || t.return();} finally {if (u) throw o;}} };}function timings_toConsumableArray(r) {return timings_arrayWithoutHoles(r) || timings_iterableToArray(r) || timings_unsupportedIterableToArray(r) || timings_nonIterableSpread();}function timings_nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function timings_iterableToArray(r) {if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);}function timings_arrayWithoutHoles(r) {if (Array.isArray(r)) return timings_arrayLikeToArray(r);}function _slicedToArray(r, e) {return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || timings_unsupportedIterableToArray(r, e) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function timings_unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return timings_arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? timings_arrayLikeToArray(r, a) : void 0;}}function timings_arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function _iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function _arrayWithHoles(r) {if (Array.isArray(r)) return r;}function timings_classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function timings_defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, timings_toPropertyKey(o.key), o);}}function timings_createClass(e, r, t) {return r && timings_defineProperties(e.prototype, r), t && timings_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function timings_defineProperty(e, r, t) {return (r = timings_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function timings_toPropertyKey(t) {var i = timings_toPrimitive(t, "string");return "symbol" == timings_typeof(i) ? i : i + "";}function timings_toPrimitive(t, r) {if ("object" != timings_typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != timings_typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}



var AccValTiming = /*#__PURE__*/function () {










  function AccValTiming(name) {var isSteps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;timings_classCallCheck(this, AccValTiming);timings_defineProperty(this, "name", void 0);timings_defineProperty(this, "started", Date.now());timings_defineProperty(this, "stopped", void 0);timings_defineProperty(this, "depth", 0);timings_defineProperty(this, "stepStarted", void 0);timings_defineProperty(this, "totalTimeTaken", null);
    this.name = name;

    if (isSteps) {
      this.totalTimeTaken = 0;
      this.start();
    }
  }return timings_createClass(AccValTiming, [{ key: "start", value:

    function start() {
      if (this.totalTimeTaken == null) {
        throw this.getName() + " was not configured as a total time timings";
      }

      if (this.stepStarted != null) {
        throw this.getName() + " was not stopped properly";
      }

      this.stepStarted = Date.now();
    } }, { key: "getName", value:

    function getName() {
      return this.name;
    } }, { key: "stop", value:

    function stop() {var print = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (this.stopped != null && this.stepStarted == null) {
        throw "The timing for " + this.getName() + " was already stopped";
      }

      this.stopped = Date.now();

      if (print) {
        apiSupplier/* kol */.x.printHtml("<font color='blue'>".concat(
          this.getName(), "<font color='green'> time taken: </font>").concat(this.getTimeStr(), "</font>")
        );
      }

      if (this.totalTimeTaken != null) {
        this.totalTimeTaken += Date.now() - this.stepStarted;
        this.stepStarted = null;
      }

      return this;
    } }, { key: "getTime", value:

    function getTime() {var _this$totalTimeTaken, _this$stopped;
      return (_this$totalTimeTaken = this.totalTimeTaken) !== null && _this$totalTimeTaken !== void 0 ? _this$totalTimeTaken : ((_this$stopped = this.stopped) !== null && _this$stopped !== void 0 ? _this$stopped : Date.now()) - this.started;
    } }, { key: "getTimeStr", value:

    function getTimeStr() {
      return (
        utils/* AccountValUtils */.E.getNumber(this.getTime()) +
        "ms" + (
        this.stopped == null ? " (never stopped)" : "") + (
        this.stepStarted != null ? " (step never stopped)" : ""));

    } }], [{ key: "start", value:

    function start(name) {var withSteps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!AccountValSettings.timingsDebug) {
        return null;
      }

      var started = Date.now();
      var existing = this.tracking.find((_ref) => {var _ref2 = _slicedToArray(_ref, 2),t = _ref2[1];return t.getName() == name;});

      if (
      existing != null && (
      existing[1].totalTimeTaken == null || existing[1].stepStarted != null))
      {
        throw "The timing for " + name + " was already started";
      }

      if (existing == null) {
        this.tracking.push(
          existing = ["STARTED", new AccValTiming(name, withSteps)]
        );
        existing[1].depth =
        this.tracking.filter((_ref3) => {var _ref4 = _slicedToArray(_ref3, 2),state = _ref4[0],t = _ref4[1];return t.stopped == null;}).length - 1;
      } else {
        existing[1].start();
      }

      this.timingsSlowdown += Date.now() - started;

      return existing[1];
    } }, { key: "stop", value:

    function stop(name) {var print = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!AccountValSettings.timingsDebug) {
        return null;
      }

      var started = Date.now();
      var existing = this.tracking.find((_ref5) => {var _ref6 = _slicedToArray(_ref5, 2),t = _ref6[1];return t.getName() == name;});

      if (existing == null) {
        throw "There was no time tracking created for " + name;
      }

      this.tracking = this.tracking.filter(
        (_ref7) => {var _ref8 = _slicedToArray(_ref7, 2),s = _ref8[0],t = _ref8[1];return s != "STOPPED" || t != existing[1];}
      );
      this.tracking.push(["STOPPED", existing[1]]);

      existing[1].stop(print);
      this.timingsSlowdown += Date.now() - started;

      return existing[1];
    } }, { key: "printTracked", value:

    function printTracked(
    method)
    {
      var sortedTimes = timings_toConsumableArray(
        this.tracking);


      this.tracking.forEach((_ref9) => {var _ref0 = _slicedToArray(_ref9, 2),state = _ref0[0],t = _ref0[1];
        if (t.stopped == null) {
          sortedTimes.push(["STOPPED", t]);
        }
      });var _iterator = timings_createForOfIteratorHelper(

          sortedTimes),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var _step$value = _slicedToArray(_step.value, 2),state = _step$value[0],timing = _step$value[1];
          var depthStr = "<font color='gray'>".concat(">&nbsp;".repeat(timing.depth), "</font>");

          if (method == "PRINT_JUST_ONCE") {
            if (state != "STARTED") {
              continue;
            }

            apiSupplier/* kol */.x.printHtml("".concat(
              depthStr, "<font color='blue'>").concat(timing.getName(), " <font color='green'>time taken:</font> ").concat(timing.getTimeStr(), "</font>")
            );
          } else if (method == "PRINT_START_AND_END") {
            if (state == "STARTED") {
              apiSupplier/* kol */.x.printHtml("".concat(
                depthStr, "<font color='blue'>").concat(timing.getName(), "</font> <font color='green'>started</font>")
              );
            } else {
              apiSupplier/* kol */.x.printHtml("".concat(
                depthStr, "<font color='blue'>").concat(timing.getName(), "<font color='green'> stopped, time taken: </font>").concat(timing.getTimeStr(), "</font>")
              );
            }
          } else if (method == "PRINT_JUST_END") {
            if (state == "STARTED") {
              continue;
            }

            apiSupplier/* kol */.x.printHtml("".concat(
              depthStr, "<font color='blue'>").concat(timing.getName(), "<font color='green'> time taken: </font>").concat(timing.getTimeStr(), "</font>")
            );
          }
        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}

      apiSupplier/* kol */.x.printHtml("<font color='green'>The usage of timings took an extra: </font><font color='blue'>".concat(
        utils/* AccountValUtils */.E.getNumber(this.timingsSlowdown), "ms</font>")
      );
    } }]);}();_AccValTiming = AccValTiming;timings_defineProperty(AccValTiming, "tracking", []);timings_defineProperty(AccValTiming, "timingsSlowdown", 0);
;// ./src/pricing/variants/kolmafia.ts
function kolmafia_typeof(o) {"@babel/helpers - typeof";return kolmafia_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, kolmafia_typeof(o);}function kolmafia_classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function kolmafia_defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, kolmafia_toPropertyKey(o.key), o);}}function kolmafia_createClass(e, r, t) {return r && kolmafia_defineProperties(e.prototype, r), t && kolmafia_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function kolmafia_defineProperty(e, r, t) {return (r = kolmafia_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function kolmafia_toPropertyKey(t) {var i = kolmafia_toPrimitive(t, "string");return "symbol" == kolmafia_typeof(i) ? i : i + "";}function kolmafia_toPrimitive(t, r) {if ("object" != kolmafia_typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != kolmafia_typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}




var MallPricing = /*#__PURE__*/function () {function MallPricing() {kolmafia_classCallCheck(this, MallPricing);kolmafia_defineProperty(this, "historical",
    new HistoricalPricing());}return kolmafia_createClass(MallPricing, [{ key: "isViable", value:

    function isViable() {
      return true;
    } }, { key: "bulkResolve", value:

    function bulkResolve(item) {
      return item.map((i) => this.resolve(i));
    } }, { key: "resolve", value:

    function resolve(item) {
      return this.historical.resolve(item);
    } }]);}();


var HistoricalPricing = /*#__PURE__*/function () {function HistoricalPricing() {kolmafia_classCallCheck(this, HistoricalPricing);}return kolmafia_createClass(HistoricalPricing, [{ key: "isViable", value:
    function isViable() {
      return true;
    } }, { key: "bulkResolve", value:

    function bulkResolve(item) {
      return item.map((i) => this.resolve(i));
    } }, { key: "resolve", value:

    function resolve(item) {
      return new typings/* ItemPrice */.$y(
        item,
        apiSupplier/* kol */.x.historicalPrice(item),
        typings/* PriceType */.SJ.HISTORICAL,
        apiSupplier/* kol */.x.historicalAge(item)
      );
    } }]);}();
;// ./src/pricing/variants/flatfile.ts
function flatfile_typeof(o) {"@babel/helpers - typeof";return flatfile_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, flatfile_typeof(o);}function flatfile_createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = flatfile_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t.return || t.return();} finally {if (u) throw o;}} };}function flatfile_unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return flatfile_arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? flatfile_arrayLikeToArray(r, a) : void 0;}}function flatfile_arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function flatfile_classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function flatfile_defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, flatfile_toPropertyKey(o.key), o);}}function flatfile_createClass(e, r, t) {return r && flatfile_defineProperties(e.prototype, r), t && flatfile_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function flatfile_defineProperty(e, r, t) {return (r = flatfile_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function flatfile_toPropertyKey(t) {var i = flatfile_toPrimitive(t, "string");return "symbol" == flatfile_typeof(i) ? i : i + "";}function flatfile_toPrimitive(t, r) {if ("object" != flatfile_typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != flatfile_typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}












var FlatfilePrices = /*#__PURE__*/function () {




  function FlatfilePrices(settings) {flatfile_classCallCheck(this, FlatfilePrices);flatfile_defineProperty(this, "prices", void 0);flatfile_defineProperty(this, "lastUpdated", void 0);flatfile_defineProperty(this, "settings", void 0);
    this.settings = settings;
  }return flatfile_createClass(FlatfilePrices, [{ key: "bulkResolve", value:

    function bulkResolve(items) {
      return items.map((i) => this.resolve(i));
    } }, { key: "resolve", value:

    function resolve(item) {
      var price = this.prices[apiSupplier/* kol */.x.toInt(item)];

      if (price == null) {
        return null;
      }

      return new typings/* ItemPrice */.$y(
        item,
        price.price,
        typings/* PriceType */.SJ.NEW_PRICES,
        Math.round((Date.now() / 1000 - price.updated) / (60 * 60 * 24)),
        price.volume
      );
    } }, { key: "load", value:





    function load() {
      var buffer = this.loadDataFile();

      if (buffer.length <= 10) {
        return;
      }

      this.prices = [];var _iterator = flatfile_createForOfIteratorHelper(

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

          var result = this.loadDataItem(spl2);

          if (result == null) {
            continue;
          }

          this.prices[result[0]] = result[1];
        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}
    } }]);}();
;// ./src/pricing/variants/irratprices.ts
function irratprices_typeof(o) {"@babel/helpers - typeof";return irratprices_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, irratprices_typeof(o);}function irratprices_slicedToArray(r, e) {return irratprices_arrayWithHoles(r) || irratprices_iterableToArrayLimit(r, e) || irratprices_unsupportedIterableToArray(r, e) || irratprices_nonIterableRest();}function irratprices_nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function irratprices_unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return irratprices_arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? irratprices_arrayLikeToArray(r, a) : void 0;}}function irratprices_arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function irratprices_iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function irratprices_arrayWithHoles(r) {if (Array.isArray(r)) return r;}function irratprices_classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function irratprices_defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, irratprices_toPropertyKey(o.key), o);}}function irratprices_createClass(e, r, t) {return r && irratprices_defineProperties(e.prototype, r), t && irratprices_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _callSuper(t, o, e) {return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));}function _possibleConstructorReturn(t, e) {if (e && ("object" == irratprices_typeof(e) || "function" == typeof e)) return e;if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e) {if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct() {try {var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));} catch (t) {}return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {return !!t;})();}function _getPrototypeOf(t) {return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {return t.__proto__ || Object.getPrototypeOf(t);}, _getPrototypeOf(t);}function _inherits(t, e) {if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);}function _setPrototypeOf(t, e) {return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {return t.__proto__ = e, t;}, _setPrototypeOf(t, e);}function irratprices_defineProperty(e, r, t) {return (r = irratprices_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function irratprices_toPropertyKey(t) {var i = irratprices_toPrimitive(t, "string");return "symbol" == irratprices_typeof(i) ? i : i + "";}function irratprices_toPrimitive(t, r) {if ("object" != irratprices_typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != irratprices_typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}


var IrratPrices = /*#__PURE__*/function (_FlatfilePrices) {function IrratPrices() {var _this;irratprices_classCallCheck(this, IrratPrices);for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}_this = _callSuper(this, IrratPrices, [].concat(args));irratprices_defineProperty(_this, "ofThePast",
    false);return _this;}_inherits(IrratPrices, _FlatfilePrices);return irratprices_createClass(IrratPrices, [{ key: "doWarning", value:

    function doWarning() {
      if (this.prices == null || this.ofThePast || this.lastUpdated == null) {
        return false;
      }

      var aWeekIsThisManyMillis = 7 * 24 * 60 * 60 * 1000;

      if (this.lastUpdated + aWeekIsThisManyMillis < Date.now()) {
        return false;
      }

      return true;
    } }, { key: "isViable", value:

    function isViable() {
      if (this.prices == null) {
        return false;
      }

      if (this.ofThePast) {
        return true;
      }

      if (this.lastUpdated == null) {
        return false;
      }

      var irratDedAtWeek = 3;
      var aWeekIsThisManyMillis = 7 * 24 * 60 * 60 * 1000;

      if (
      this.lastUpdated + irratDedAtWeek * aWeekIsThisManyMillis <
      Date.now())
      {
        return false;
      }

      return true;
    } }, { key: "loadDataFile", value:

    function loadDataFile() {
      var toFetch = this.settings.dateToFetch;

      if (toFetch == null) {
        return apiSupplier/* kol */.x.retrieveCache("irrats_item_prices.txt", true);
      }

      var finalDateString;
      var minDate = new Date(2023, 7, 23);
      minDate.setHours(0, 0, 0, 0);

      var absoluteDateRegex = /^\d{1,2}[-/]\d{1,2}[-/]\d{4}$/;

      if (absoluteDateRegex.test(toFetch)) {
        var _toFetch$split$map = toFetch.split(/[-/]/).map(Number),_toFetch$split$map2 = irratprices_slicedToArray(_toFetch$split$map, 3),day = _toFetch$split$map2[0],month = _toFetch$split$map2[1],year = _toFetch$split$map2[2];
        var parsedDate = new Date(year, month - 1, day);
        parsedDate.setHours(0, 0, 0, 0);

        if (
        parsedDate.getFullYear() !== year ||
        parsedDate.getMonth() !== month - 1 ||
        parsedDate.getDate() !== day)
        {
          throw new Error("Invalid date provided: ".concat(
            toFetch, " resolved to ").concat(parsedDate.getDate(), "-").concat(parsedDate.getMonth() + 1, "-").concat(parsedDate.getFullYear(), ".")
          );
        }

        if (parsedDate < minDate) {
          throw new Error("Date ".concat(toFetch, " cannot be older than 23-08-2023."));
        }

        finalDateString = toFetch;
      } else {var _dMatch$0$length, _mMatch$0$length, _yMatch$0$length;
        var dMatch = toFetch.match(/(\d+)d(?:ays?)?/);
        var mMatch = toFetch.match(/(\d+)m(?:onths?)?/);
        var yMatch = toFetch.match(/(\d+)y(?:ears?)?/);

        var days = dMatch ? parseInt(dMatch[1], 10) : 0;
        var months = mMatch ? parseInt(mMatch[1], 10) : 0;
        var years = yMatch ? parseInt(yMatch[1], 10) : 0;

        var consumedLength =
        ((_dMatch$0$length = dMatch === null || dMatch === void 0 ? void 0 : dMatch[0].length) !== null && _dMatch$0$length !== void 0 ? _dMatch$0$length : 0) + ((_mMatch$0$length =
        mMatch === null || mMatch === void 0 ? void 0 : mMatch[0].length) !== null && _mMatch$0$length !== void 0 ? _mMatch$0$length : 0) + ((_yMatch$0$length =
        yMatch === null || yMatch === void 0 ? void 0 : yMatch[0].length) !== null && _yMatch$0$length !== void 0 ? _yMatch$0$length : 0);

        if (consumedLength !== toFetch.length || consumedLength === 0) {
          throw new Error("Invalid date format for 'dateToFetch': \"".concat(
            toFetch, "\". Please use 'DD-MM-YYYY' or a relative format like '1d2m3y'.")
          );
        }

        var targetDate = new Date();
        targetDate.setDate(targetDate.getDate() - days);
        targetDate.setMonth(targetDate.getMonth() - months);
        targetDate.setFullYear(targetDate.getFullYear() - years);

        if (targetDate < minDate) {
          targetDate = minDate;
        }

        var finalDay = String(targetDate.getDate()).padStart(2, "0");
        var finalMonth = String(targetDate.getMonth() + 1).padStart(2, "0");
        var finalYear = targetDate.getFullYear();
        finalDateString = "".concat(finalDay, "-").concat(finalMonth, "-").concat(finalYear);
      }

      var responseText = apiSupplier/* kol */.x.visitUrl("https://kolprices.lib.co.nz/file/".concat(
        finalDateString)
      );

      if (!responseText.startsWith("Last Updated:")) {
        if (responseText.length > 200) {
          throw new Error("Received an unexpected response from the server.");
        } else {
          throw new Error(responseText);
        }
      }

      apiSupplier/* kol */.x.print("Now resolving prices with date: ".concat(finalDateString), "blue");
      this.ofThePast = true;

      return responseText;
    } }, { key: "loadDataItem", value:

    function loadDataItem(spl2) {
      var itemId = parseInt(spl2[0]);
      var age = parseInt(spl2[1]);
      var price = parseInt(spl2[2]);
      var volume = spl2[3] ? parseInt(spl2[3]) : -1;
      var lastSoldAt = spl2[4] ? parseInt(spl2[4]) : -1;

      return [
      itemId,
      { price: price, updated: age, volume: volume, lastSoldAt: lastSoldAt }];

    } }]);}(FlatfilePrices);
;// ./src/pricing/variants/pricegun.ts
function pricegun_typeof(o) {"@babel/helpers - typeof";return pricegun_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, pricegun_typeof(o);}function pricegun_toConsumableArray(r) {return pricegun_arrayWithoutHoles(r) || pricegun_iterableToArray(r) || pricegun_unsupportedIterableToArray(r) || pricegun_nonIterableSpread();}function pricegun_nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function pricegun_iterableToArray(r) {if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);}function pricegun_arrayWithoutHoles(r) {if (Array.isArray(r)) return pricegun_arrayLikeToArray(r);}function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {pricegun_defineProperty(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}function pricegun_createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = pricegun_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t.return || t.return();} finally {if (u) throw o;}} };}function pricegun_unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return pricegun_arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? pricegun_arrayLikeToArray(r, a) : void 0;}}function pricegun_arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function pricegun_classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function pricegun_defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, pricegun_toPropertyKey(o.key), o);}}function pricegun_createClass(e, r, t) {return r && pricegun_defineProperties(e.prototype, r), t && pricegun_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function pricegun_defineProperty(e, r, t) {return (r = pricegun_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function pricegun_toPropertyKey(t) {var i = pricegun_toPrimitive(t, "string");return "symbol" == pricegun_typeof(i) ? i : i + "";}function pricegun_toPrimitive(t, r) {if ("object" != pricegun_typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != pricegun_typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}













var PricegunResolver = /*#__PURE__*/function () {function PricegunResolver() {pricegun_classCallCheck(this, PricegunResolver);pricegun_defineProperty(this, "items",
    new Map());}return pricegun_createClass(PricegunResolver, [{ key: "load", value:

    function load() {
      this.items.clear();
      var buffer = apiSupplier/* kol */.x.retrieveCache("pricegun_prices.txt", true);

      if (!buffer) {
        return;
      }

      var cutoff = Math.floor(Date.now() / 1000) - 24 * 60 * 60;

      try {var _iterator = pricegun_createForOfIteratorHelper(
            JSON.parse(buffer)),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var _item$value$__decimal, _item$value;var item = _step.value;
            var value =
            typeof item.value === "number" ?
            item.value :
            parseFloat((_item$value$__decimal = (_item$value = item.value) === null || _item$value === void 0 ? void 0 : _item$value.__decimal__) !== null && _item$value$__decimal !== void 0 ? _item$value$__decimal : "0");

            if (item.retrieved >= cutoff) {
              this.items.set(item.itemId, _objectSpread(_objectSpread({}, item), {}, { value: value }));
            }
          }} catch (err) {_iterator.e(err);} finally {_iterator.f();}
      } catch (_unused) {}
    } }, { key: "stop", value:

    function stop() {
      var cutoff = Math.floor(Date.now() / 1000) - 23 * 60 * 60;
      apiSupplier/* kol */.x.storeCache(
        "pricegun_prices.txt",
        JSON.stringify(
          pricegun_toConsumableArray(this.items.values()).filter((i) => i.retrieved > cutoff)
        ),
        true
      );
    } }, { key: "parseValue", value:

    function parseValue(item) {var _item$value$__decimal2, _item$value2;
      return typeof item.value === "number" ?
      item.value :
      parseFloat((_item$value$__decimal2 = (_item$value2 = item.value) === null || _item$value2 === void 0 ? void 0 : _item$value2.__decimal__) !== null && _item$value$__decimal2 !== void 0 ? _item$value$__decimal2 : "0");
    } }, { key: "loadItemFromApi", value:

    function loadItemFromApi(item) {var _item$dateTime;
      this.items.set(item.itemId, {
        itemId: item.itemId,
        value: this.parseValue(item),
        volume: item.volume,
        dateTime: (_item$dateTime = item.dateTime) !== null && _item$dateTime !== void 0 ? _item$dateTime : 0,
        retrieved: Math.floor(Date.now() / 1000)
      });
    } }, { key: "bulkResolve", value:

    function bulkResolve(items) {
      var missing = items.filter((i) => !this.items.has(apiSupplier/* kol */.x.toInt(i)));

      if (missing.length) {
        this.fetch(missing);
      }

      var now = Math.floor(Date.now() / 1000);

      return items.
      map((i) => {
        var price = this.items.get(apiSupplier/* kol */.x.toInt(i));

        if (!price || price.volume < 0) {
          return null;
        }

        return new typings/* ItemPrice */.$y(
          i,
          Math.round(price.value),
          typings/* PriceType */.SJ.NEW_PRICES,
          now - price.dateTime,
          price.volume
        );
      }).
      filter((p) => p !== null);
    } }, { key: "fetch", value:

    function fetch(items) {
      var MAX_AMOUNT = 500;
      var now = Math.floor(Date.now() / 1000);

      // Ensure at least one result
      if (
      items.length + 3 < MAX_AMOUNT &&
      !items.find((i) => apiSupplier/* kol */.x.toInt(i) === 1))
      {
        items.push(external_kolmafia_namespaceObject.Item.get(1));
      }

      var totalLength = items.length;

      for (var start = 0; start < items.length; start += MAX_AMOUNT) {
        var batch = items.slice(start, start + MAX_AMOUNT);

        try {
          var url = "https://pricegun.loathers.net/api/".concat(batch.map((i) => apiSupplier/* kol */.x.toInt(i)).join(","));
          var response = JSON.parse(apiSupplier/* kol */.x.visitUrl(url));
          var parsed = batch.length === 1 ? [response] : response;var _iterator2 = pricegun_createForOfIteratorHelper(

              parsed),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var item = _step2.value;
              if (item.itemId !== 1) {
                this.loadItemFromApi(item);
              }
            }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}var _iterator3 = pricegun_createForOfIteratorHelper(

              batch),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var i = _step3.value;
              var id = apiSupplier/* kol */.x.toInt(i);

              if (!this.items.has(id)) {
                this.items.set(id, {
                  itemId: id,
                  value: 0,
                  volume: -1,
                  dateTime: 0,
                  retrieved: now
                });
              }
            }} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}
        } catch (_unused2) {var _iterator4 = pricegun_createForOfIteratorHelper(
              batch),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var _i = _step4.value;
              var _id = apiSupplier/* kol */.x.toInt(_i);
              this.items.set(_id, {
                itemId: _id,
                value: 0,
                volume: -1,
                dateTime: 0,
                retrieved: now
              });
            }} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}
        }

        apiSupplier/* kol */.x.print("Pricegun progress: ".concat(
          totalLength - items.length, " / ").concat(totalLength, " (+").concat(batch.length, ")")
        );
      }
    } }, { key: "resolve", value:

    function resolve(item) {
      return this.bulkResolve([item])[0];
    } }, { key: "isViable", value:

    function isViable() {
      return true;
    } }]);}();
;// ./src/pricing/priceResolver.ts
function priceResolver_typeof(o) {"@babel/helpers - typeof";return priceResolver_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, priceResolver_typeof(o);}function priceResolver_toConsumableArray(r) {return priceResolver_arrayWithoutHoles(r) || priceResolver_iterableToArray(r) || priceResolver_unsupportedIterableToArray(r) || priceResolver_nonIterableSpread();}function priceResolver_nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function priceResolver_iterableToArray(r) {if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);}function priceResolver_arrayWithoutHoles(r) {if (Array.isArray(r)) return priceResolver_arrayLikeToArray(r);}function priceResolver_createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = priceResolver_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t.return || t.return();} finally {if (u) throw o;}} };}function priceResolver_unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return priceResolver_arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? priceResolver_arrayLikeToArray(r, a) : void 0;}}function priceResolver_arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function priceResolver_classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function priceResolver_defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, priceResolver_toPropertyKey(o.key), o);}}function priceResolver_createClass(e, r, t) {return r && priceResolver_defineProperties(e.prototype, r), t && priceResolver_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function priceResolver_defineProperty(e, r, t) {return (r = priceResolver_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function priceResolver_toPropertyKey(t) {var i = priceResolver_toPrimitive(t, "string");return "symbol" == priceResolver_typeof(i) ? i : i + "";}function priceResolver_toPrimitive(t, r) {if ("object" != priceResolver_typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != priceResolver_typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}










var PriceResolver = /*#__PURE__*/function () {




  function PriceResolver(settings) {priceResolver_classCallCheck(this, PriceResolver);priceResolver_defineProperty(this, "specialCase", new Map());priceResolver_defineProperty(this, "settings", void 0);priceResolver_defineProperty(this, "resolvers", []);
    this.settings = settings;

    var specialResolver;

    if (settings.globalSettings.pricegun) {
      specialResolver = new PricegunResolver();
    } else {
      specialResolver = new IrratPrices(settings);
    }

    if (specialResolver && specialResolver.load) {
      specialResolver.load();
    }

    this.resolvers.push(specialResolver);
    this.resolvers.push(new HistoricalPricing());
    this.resolvers.push(new MallPricing());

    this.fillSpecialCase();
  }return priceResolver_createClass(PriceResolver, [{ key: "addSpecialCase", value:

    function addSpecialCase(item, meat) {
      this.specialCase.set(item, meat);
    } }, { key: "fillSpecialCase", value:

    function fillSpecialCase() {
      this.specialCase.set(external_kolmafia_namespaceObject.Item.get("Meat Paste"), 10);
      this.specialCase.set(external_kolmafia_namespaceObject.Item.get("Meat Stack"), 100);
      this.specialCase.set(external_kolmafia_namespaceObject.Item.get("Dense meat stack"), 1000);
    } }, { key: "doWarning", value:

    function doWarning() {
      if (this.resolvers[0] instanceof IrratPrices) {
        return this.resolvers[0].doWarning();
      }

      return false;
    } }, { key: "stop", value:

    function stop() {
      this.resolvers.forEach((r) => r.stop && r.stop());
    } }, { key: "bulkLoad", value:

    function bulkLoad(items) {
      var toCheck = items.filter((i, ind) => items.lastIndexOf(i) == ind);
      var checked = [];var _iterator = priceResolver_createForOfIteratorHelper(

          items),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var item = _step.value;
          if (checked.includes(item)) {
            continue;
          }

          var foldables = Object.keys(apiSupplier/* kol */.x.getRelated(item, "fold"));

          if (foldables == null || foldables.length <= 1) {
            continue;
          }

          var itemsRelated = foldables.
          map((s) => supplierTypings/* KoLItem */.U8.get(s)).
          filter((i) => !checked.includes(i));
          checked.push.apply(checked, priceResolver_toConsumableArray(itemsRelated));
          itemsRelated.
          filter((i) => !toCheck.includes(i)).
          forEach((i) => toCheck.push(i));
        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}

      this.resolvers[0].bulkResolve(toCheck);
    } }, { key: "itemPrice", value:

    function itemPrice(
    item)




    {var ignoreFold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var forcePricing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;var doSuperFast = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;var doEstimates = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      if (this.settings.globalSettings.pricegun) {
        ignoreFold = true;
      }

      if (!ignoreFold) {
        AccValTiming.start("Check Foldable", true);

        try {
          var foldables = Object.keys(apiSupplier/* kol */.x.getRelated(item, "fold"));

          if (foldables != null && foldables.length > 1) {
            AccValTiming.start("Deeper Foldable Check", true);

            try {
              var foldPrices = foldables.
              map((f) =>
              this.itemPrice(
                supplierTypings/* KoLItem */.U8.get(f),
                true,
                forcePricing,
                doSuperFast,
                doEstimates
              )
              ).
              filter((p) => p != null);

              foldPrices.sort((f1, f2) =>
              f1.item.tradeable != f2.item.tradeable ?
              f1.item.tradeable ?
              -1 :
              1 :
              f1.price - f2.price
              );
              var compare = foldPrices.find((f) => f.item == item);var _iterator2 = priceResolver_createForOfIteratorHelper(

                  foldPrices),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var f = _step2.value;
                  if (f.daysOutdated > compare.daysOutdated * 3) {
                    continue;
                  }

                  return f;
                }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}

              return foldPrices[0];
            } finally {
              AccValTiming.stop("Deeper Foldable Check");
            }
          }
        } finally {
          AccValTiming.stop("Check Foldable");
        }
      }

      AccValTiming.start("Check Pricing Misc", true);

      try {
        if (this.specialCase.has(item)) {
          return new typings/* ItemPrice */.$y(
            item,
            this.specialCase.get(item),
            typings/* PriceType */.SJ.MALL,
            0
          );
        }

        if (!item.tradeable) {
          return new typings/* ItemPrice */.$y(
            item,
            apiSupplier/* kol */.x.autosellPrice(item),
            typings/* PriceType */.SJ.AUTOSELL,
            0
          );
        }
      } finally {
        AccValTiming.stop("Check Pricing Misc");
      }

      AccValTiming.start("Run Final Pricing Check", true);var _iterator3 = priceResolver_createForOfIteratorHelper(

          this.resolvers),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var resolver = _step3.value;
          var price = resolver.resolve(item);

          if (price == null && this.settings.dateToFetch == null) {
            continue;
          }

          return price;
        }} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}

      throw "Failed to resolve price for " + item;
    } }]);}();
;// ./src/core/logic.ts
function logic_typeof(o) {"@babel/helpers - typeof";return logic_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, logic_typeof(o);}function logic_slicedToArray(r, e) {return logic_arrayWithHoles(r) || logic_iterableToArrayLimit(r, e) || logic_unsupportedIterableToArray(r, e) || logic_nonIterableRest();}function logic_nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function logic_iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function logic_arrayWithHoles(r) {if (Array.isArray(r)) return r;}function logic_toConsumableArray(r) {return logic_arrayWithoutHoles(r) || logic_iterableToArray(r) || logic_unsupportedIterableToArray(r) || logic_nonIterableSpread();}function logic_nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function logic_iterableToArray(r) {if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);}function logic_arrayWithoutHoles(r) {if (Array.isArray(r)) return logic_arrayLikeToArray(r);}function logic_createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = logic_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t.return || t.return();} finally {if (u) throw o;}} };}function logic_unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return logic_arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? logic_arrayLikeToArray(r, a) : void 0;}}function logic_arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function logic_classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function logic_defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, logic_toPropertyKey(o.key), o);}}function logic_createClass(e, r, t) {return r && logic_defineProperties(e.prototype, r), t && logic_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function logic_defineProperty(e, r, t) {return (r = logic_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function logic_toPropertyKey(t) {var i = logic_toPrimitive(t, "string");return "symbol" == logic_typeof(i) ? i : i + "";}function logic_toPrimitive(t, r) {if ("object" != logic_typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != logic_typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}










var AccountValLogic = /*#__PURE__*/function () {













  function AccountValLogic(settings, priceSettings) {logic_classCallCheck(this, AccountValLogic);logic_defineProperty(this, "ownedItems", new Map());logic_defineProperty(this, "resolver", void 0);logic_defineProperty(this, "priceResolver", void 0);logic_defineProperty(this, "prices", []);logic_defineProperty(this, "categoryOrder", []);logic_defineProperty(this, "settings", void 0);logic_defineProperty(this, "jsFilter", void 0);
    this.settings = settings;
    this.priceResolver = new PriceResolver(priceSettings);
    this.resolver = new items/* ItemResolver */.O(this.priceResolver);
  }return logic_createClass(AccountValLogic, [{ key: "addItem", value:

    function addItem(item) {var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      this.ownedItems.set(item, (this.ownedItems.get(item) | 0) + count);
    } }, { key: "loadItems", value:

    function loadItems() {
      AccValTiming.start("Load JS Filter");
      this.loadJsFilter();
      AccValTiming.stop("Load JS Filter");

      if (this.settings.playerId > 0) {
        AccValTiming.start("Load Page Items");
        this.loadPageItems();
        AccValTiming.stop("Load Page Items");

        return;
      }

      this.loadSelfItems();
    } }, { key: "loadJsFilter", value:

    function loadJsFilter() {
      if (this.settings.javascriptFilter == "") {
        return;
      }

      apiSupplier/* kol */.x.print(
        "JS Filter has been set to: " + this.settings.javascriptFilter,
        utils_colors/* AccountValColors */.HK.minorNote
      );

      try {
        this.jsFilter = apiSupplier/* kol */.x.evalJsFilter(this.settings.javascriptFilter);
      } catch (e) {
        apiSupplier/* kol */.x.print(
          "Invalid jsfilter provided! Error as follows:",
          utils_colors/* AccountValColors */.HK.attentionGrabbingWarning
        );
        apiSupplier/* kol */.x.print("");
        throw e;
      }
    } }, { key: "loadPageItems", value:

    function loadPageItems() {
      var pager = new PageResolver();

      if (this.settings.fetchShop) {
        var items = pager.getStore(this.settings.playerId);
        items.forEach((i) => {
          var item = new typings/* ValItem */.Fx(i.item);

          if (this.settings.shopWorth) {
            item.bound = typings/* ItemStatus */.Kw.SHOP_WORTH;
            item.shopWorth = i.price;
          }

          this.addItem(item, i.amount);
        });
      }

      if (this.settings.fetchDisplaycase) {
        var _items = pager.getDisplaycase(this.settings.playerId);
        _items.forEach((v, k) => {
          if (!this.categoryOrder.includes(k.shelf)) {
            this.categoryOrder.push(k.shelf);
          }

          this.addItem(new typings/* ValItem */.Fx(k.item).withCategory(k.shelf), v);
        });
      }

      var resolvedFamiliars = false;

      if (this.settings.fetchFamiliars != false) {
        var familiars = pager.getFamiliars(this.settings.playerId);
        resolvedFamiliars = familiars.length > 0;
        this.resolver.resolveFamiliars(familiars, this.ownedItems);
      }

      if (this.settings.fetchSnapshot == true) {
        var snapshot = pager.getSnapshot(
          apiSupplier/* kol */.x.getPlayerName(this.settings.playerId)
        );
        var _familiars = [];
        var skills = [];
        var _items2 = new Map();var _iterator = logic_createForOfIteratorHelper(

            snapshot),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var _item = _step.value;
            if ("hatchling" in _item) {
              _familiars.push(_item);
            } else if ("name" in _item && !("tradeable" in _item)) {
              skills.push(_item);
            } else if ("tradeable" in _item) {
              _items2.set(_item, 1);
            } else {
              _items2.set(
                _item[0],
                _item[1]
              );
            }
          }} catch (err) {_iterator.e(err);} finally {_iterator.f();}

        if (!resolvedFamiliars && this.settings.fetchFamiliars) {
          this.resolver.resolveFamiliars(_familiars, this.ownedItems);
        }

        if (this.settings.doBound && this.settings.fetchingNonItems) {var _iterator2 = logic_createForOfIteratorHelper(
              this.resolver.accValStuff.filter(
                (s) => s.itemType == typings/* ItemType */.SP.SKILL && skills.includes(s.skill)
              )),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var item = _step2.value;
              this.addItem(
                new typings/* ValItem */.Fx(
                  item.actualItem,
                  item.actualItem,
                  item.actualItem.name,
                  item.actualItem.plural,
                  typings/* ItemStatus */.Kw.BOUND
                )
              );
            }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}
        }

        var owned = new Map(
          logic_toConsumableArray(this.ownedItems).map((_ref) => {var _ref2 = logic_slicedToArray(_ref, 2),k = _ref2[0],v = _ref2[1];return [k.tradeableItem, [k, v]];})
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

            this.addItem(new typings/* ValItem */.Fx(k), v);

            return;
          } else if (owned.has(k) && owned.get(k)[0].isBound()) {
            return;
          } else if (
          boundItem.untradeableItem != null &&
          owned.has(boundItem.untradeableItem))
          {
            return;
          }

          var actualItem = k;
          var name = k.name;
          var plural = k.plural;

          if (boundItem.itemType == typings/* ItemType */.SP.UNTRADEABLE_ITEM) {
            var untradeable = boundItem.untradeableItem;
            v -= owned.has(k) ? owned.get(k)[1] : 0;

            if (v <= 0) {
              return;
            }

            actualItem = untradeable;
            name = untradeable.name;
            plural = untradeable.plural;
          }

          this.addItem(
            new typings/* ValItem */.Fx(
              actualItem,
              k,
              name,
              plural,
              typings/* ItemStatus */.Kw.BOUND,
              "av-snapshot"
            ),
            v
          );
        });
      }

      this.resolveNoTrades();
    } }, { key: "loadSelfItems", value:

    function loadSelfItems() {
      AccValTiming.start("Resolve Familiar Items");
      var famItems = this.resolver.resolveFamiliarItems();
      AccValTiming.stop("Resolve Familiar Items");

      AccValTiming.start("Resolve Session");
      var sessionItems = this.resolver.resolveSessionItems();
      AccValTiming.stop("Resolve Session");

      AccValTiming.start("Resolve Inventory");
      var mega = this.settings.fetchInventory ? apiSupplier/* kol */.x.getInventory() : {};
      AccValTiming.stop("Resolve Inventory");

      var megaExtra = new Map();

      var add = (stuff) => {
        Object.entries(stuff).forEach((_ref3) => {var _mega$k;var _ref4 = logic_slicedToArray(_ref3, 2),k = _ref4[0],v = _ref4[1];
          mega[k] = ((_mega$k = mega[k]) !== null && _mega$k !== void 0 ? _mega$k : 0) + v;
        });
      };

      if (this.settings.fetchCloset) {
        AccValTiming.start("Resolve and Add Closet");
        add(apiSupplier/* kol */.x.getCloset());
        AccValTiming.stop("Resolve and Add Closet");
      }

      if (this.settings.fetchStorage) {
        AccValTiming.start("Resolve and Add Storage");
        add(apiSupplier/* kol */.x.getStorage());
        add(apiSupplier/* kol */.x.getFreePulls());
        add(apiSupplier/* kol */.x.getNoPulls());
        AccValTiming.stop("Resolve and Add Storage");
      }

      if (this.settings.fetchClan) {
        AccValTiming.start("Resolve and Add Clan Stash");
        add(apiSupplier/* kol */.x.getStash());
        AccValTiming.stop("Resolve and Add Clan Stash");
      }

      if (this.settings.fetchDisplaycase) {
        if (this.settings.doCategories) {
          AccValTiming.start("Resolve and Add Display Case with Shelves");
          var pager = new PageResolver();
          var items = pager.getDisplaycase(utils/* AccountValUtils */.E.toInt(apiSupplier/* kol */.x.myId()));
          items.forEach((v, k) => {
            if (!this.categoryOrder.includes(k.shelf)) {
              this.categoryOrder.push(k.shelf);
            }

            megaExtra.set(k.item, { shelf: k.shelf, count: v });
          });
          AccValTiming.stop("Resolve and Add Display Case with Shelves");
        } else {
          AccValTiming.start("Resolve and Add Display Case");
          add(apiSupplier/* kol */.x.getDisplay());
          AccValTiming.stop("Resolve and Add Display Case");
        }
      }

      if (this.settings.fetchShop && !this.settings.shopWorth) {
        AccValTiming.start("Resolve and Add Shop");
        add(apiSupplier/* kol */.x.getShop());
        AccValTiming.stop("Resolve and Add Shop");
      }

      AccValTiming.start("Process All Items");var _iterator3 = logic_createForOfIteratorHelper(

          supplierTypings/* KoLItem */.U8.all()),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var _mega$_item2$name;var _item2 = _step3.value;
          var amount = (_mega$_item2$name = mega[_item2.name]) !== null && _mega$_item2$name !== void 0 ? _mega$_item2$name : 0;

          if (this.settings.fetchSession) {var _sessionItems$get;
            amount += (_sessionItems$get = sessionItems.get(_item2)) !== null && _sessionItems$get !== void 0 ? _sessionItems$get : 0;
          }

          if (this.settings.fetchInventory) {var _famItems$get;
            amount += apiSupplier/* kol */.x.equippedAmount(_item2) + ((_famItems$get = famItems.get(_item2)) !== null && _famItems$get !== void 0 ? _famItems$get : 0);
          }

          var category = void 0;

          if (megaExtra.has(_item2)) {
            amount += megaExtra.get(_item2).count;
            category = megaExtra.get(_item2).shelf;
          }

          if (
          this.settings.fetchShop &&
          this.settings.shopWorth &&
          apiSupplier/* kol */.x.shopAmount(_item2) > 0)
          {
            var _i = new typings/* ValItem */.Fx(_item2).withCategory(category);
            _i.bound = typings/* ItemStatus */.Kw.SHOP_WORTH;
            _i.shopWorth = apiSupplier/* kol */.x.shopPrice(_item2);
            this.ownedItems.set(_i, apiSupplier/* kol */.x.shopAmount(_item2));
            continue;
          }

          if (amount == 0) {
            continue;
          }

          this.ownedItems.set(new typings/* ValItem */.Fx(_item2).withCategory(category), amount);
        }} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}

      AccValTiming.stop("Process All Items");

      if (this.settings.fetchFamiliars != false) {
        AccValTiming.start("Resolve Familiars");
        this.resolver.resolveFamiliars(
          supplierTypings/* KoLFamiliar */.SR.all().filter((f) => apiSupplier/* kol */.x.haveFamiliar(f)),
          this.ownedItems
        );
        AccValTiming.stop("Resolve Familiars");
      }

      if (this.settings.fetchingEverywhereish && this.settings.fetchingNonItems) {
        AccValTiming.start("Resolve Workshed");

        if (this.settings.doBound || this.settings.doTradeables) {
          var i = apiSupplier/* kol */.x.getWorkshed();

          if (
          i != null &&
          i != supplierTypings/* KoLItem */.U8.none && (
          i.tradeable ? this.settings.doTradeables : this.settings.doBound))
          {
            this.addItem(new typings/* ValItem */.Fx(i, i, i.name, i.plural, typings/* ItemStatus */.Kw.IN_USE));
          }
        }

        AccValTiming.stop("Resolve Workshed");
      }

      if (this.settings.doBound && this.settings.fetchingNonItems) {
        AccValTiming.start("Resolve Urled Items");var _iterator4 = logic_createForOfIteratorHelper(

            this.resolver.getUrledItems()),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var _step4$value = logic_slicedToArray(_step4.value, 2),item = _step4$value[0],status = _step4$value[1];
            if (
            item.tradeable && (
            status == typings/* ItemStatus */.Kw.FAMILIAR || status != typings/* ItemStatus */.Kw.BOUND) ?
            !this.settings.doTradeables :
            !this.settings.doBound)
            {
              continue;
            }

            this.addItem(new typings/* ValItem */.Fx(item, item, item.name, item.plural, status));
          }} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}

        AccValTiming.stop("Resolve Urled Items");
      }

      AccValTiming.start("Resolve No-Trades");
      this.resolveNoTrades();
      AccValTiming.stop("Resolve No-Trades");
    } }, { key: "resolveNoTrades", value:

    function resolveNoTrades() {
      var copy = {};
      this.ownedItems.forEach((v, k) => {
        copy[k.tradeableItem.name] = [k, v];
      });

      if (this.settings.doBound || this.settings.doNontradeables) {
        this.resolver.resolveBoundToTradeables(copy, this.ownedItems, [
        this.settings.doBound ? typings/* ItemType */.SP.UNTRADEABLE_ITEM : null,
        this.settings.doNontradeables ? typings/* ItemType */.SP.CURRENCY : null]
        );
      }

      var skipJsFilter = this.settings.doesJSFilterUsePriceOrSales();var _iterator5 = logic_createForOfIteratorHelper(

          this.ownedItems.keys()),_step5;try {for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {var item = _step5.value;
          if (
          !skipJsFilter &&
          this.jsFilter != null &&
          !this.jsFilter(item.tradeableItem, this.ownedItems.get(item)))
          {
            this.ownedItems.delete(item);
            continue;
          }

          if (
          !item.isBound() && (
          !item.tradeableItem.tradeable || item.tradeableItem.gift) &&
          apiSupplier/* kol */.x.autosellPrice(item.tradeableItem) == 0)
          {
            this.ownedItems.delete(item);
            continue;
          }

          if (this.ownedItems.get(item) < this.settings.minimumAmount) {
            this.ownedItems.delete(item);
            continue;
          }

          if (
          !this.settings.doBound &&
          item.isBound() &&
          item.bound != typings/* ItemStatus */.Kw.FAMILIAR)
          {
            this.ownedItems.delete(item);
            continue;
          }

          if (
          item.bound == typings/* ItemStatus */.Kw.FAMILIAR && (
          this.settings.fetchFamiliars == false ||
          this.settings.fetchFamiliars == null && !this.settings.doBound))
          {
            this.ownedItems.delete(item);
            continue;
          }

          if (
          !this.settings.doTradeables &&
          item.tradeableItem.tradeable &&
          item.isTradeable())
          {
            this.ownedItems.delete(item);
            continue;
          }

          if (
          !this.settings.doNontradeables &&
          !item.tradeableItem.tradeable &&
          !item.isBound())
          {
            this.ownedItems.delete(item);
            continue;
          }

          if (item.isBound() && this.ownedItems.get(item) > 1) {
            this.ownedItems.set(item, 1);
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

        if (!settings.isShown(item, price.price)) {
          ownedItems.delete(item);

          return;
        }

        if (
        settings.presets.some(
          (p) => !p.negated && p.preset.name().includes("autosell")
        ))
        {
          price.price = apiSupplier/* kol */.x.autosellPrice(item.actualItem);
        }

        prices.push([item, price]);
      };

      AccValTiming.start("Add Logic Prices");
      this.priceResolver.bulkLoad(
        logic_toConsumableArray(this.ownedItems.keys()).map((i) => i.tradeableItem)
      );var _iterator6 = logic_createForOfIteratorHelper(

          this.ownedItems.keys()),_step6;try {for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {var _i2 = _step6.value;
          AccValTiming.start("Price Item", true);
          var _price = this.priceResolver.itemPrice(
            _i2.tradeableItem,
            false,
            this.settings.doSuperFast ?
            typings/* PriceType */.SJ.HISTORICAL :
            this.settings.useLastSold ?
            typings/* PriceType */.SJ.MALL_SALES :
            null,
            this.settings.doSuperFast,
            true
          );
          AccValTiming.stop("Price Item");

          if (_price == null) {
            continue;
          } else if (_price.price > 0 || _price.accuracy == typings/* PriceType */.SJ.NEW_PRICES) {
            AccValTiming.start("Add Item Price", true);
            addPrice(_i2, _price);
            AccValTiming.stop("Add Item Price");
          } else {
            toCheck.push([_i2, _price]);
          }
        }} catch (err) {_iterator6.e(err);} finally {_iterator6.f();}

      AccValTiming.stop("Add Logic Prices");

      var checked = -1;

      if (toCheck.length > 200) {
        apiSupplier/* kol */.x.print(
          "Think this will take too long? Use the parameter 'fast', it's less accurate!",
          utils_colors/* AccountValColors */.HK.helpfulStateInfo
        );
      }

      if (toCheck.length > 0) {
        AccValTiming.start("Check Remaining Logic Item Prices");
        this.priceResolver.bulkLoad(toCheck.map((i) => i[0].tradeableItem));var _iterator7 = logic_createForOfIteratorHelper(

            toCheck),_step7;try {for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {var check = _step7.value;
            var i = check[0];

            if (++checked % 20 == 0 && lastPrinted + 1000 < Date.now()) {
              lastPrinted = Date.now();
              apiSupplier/* kol */.x.print(
                "Checking value of " +
                i.name +
                " (" +
                checked +
                " / " +
                toCheck.length +
                ")",
                utils_colors/* AccountValColors */.HK.helpfulStateInfo
              );
            }

            var price = this.priceResolver.itemPrice(
              i.tradeableItem,
              false,
              check[1].accuracy
            );

            if (price == null) {
              continue;
            }

            addPrice(i, price);
          }} catch (err) {_iterator7.e(err);} finally {_iterator7.f();}

        AccValTiming.stop("Check Remaining Logic Item Prices");
      }

      AccValTiming.start("Sort Price List");
      this.doSort();
      AccValTiming.stop("Sort Price List");
    } }, { key: "doSort", value:

    function doSort() {
      var sorter = (v1, v2) => 0;

      if (this.settings.sortBy == typings/* SortBy */.gx.TOTAL_PRICE) {
        sorter = (v1, v2) =>
        (v1[1].price <= 0 ?
        this.settings.maxNaturalPrice :
        1 / v1[0].worthMultiplier * v1[1].price) *
        this.ownedItems.get(v1[0]) -
        (v2[1].price <= 0 ?
        this.settings.maxNaturalPrice :
        1 / v2[0].worthMultiplier * v2[1].price) *
        this.ownedItems.get(v2[0]);
      } else if (this.settings.sortBy == typings/* SortBy */.gx.PRICE) {
        sorter = (v1, v2) =>
        (v1[1].price <= 0 ?
        this.settings.maxNaturalPrice :
        1 / v1[0].worthMultiplier * v1[1].price) - (
        v2[1].price <= 0 ?
        this.settings.maxNaturalPrice :
        1 / v2[0].worthMultiplier * v2[1].price);
      } else if (this.settings.sortBy == typings/* SortBy */.gx.QUANTITY) {
        sorter = (v1, v2) =>
        this.ownedItems.get(v1[0]) - this.ownedItems.get(v2[0]);
      } else if (this.settings.sortBy == typings/* SortBy */.gx.NAME) {
        sorter = (v1, v2) => v1[0].name.localeCompare(v2[0].name);
      } else if (this.settings.sortBy == typings/* SortBy */.gx.ITEM_ID) {
        sorter = (v1, v2) =>
        apiSupplier/* kol */.x.toInt(v1[0].tradeableItem) - apiSupplier/* kol */.x.toInt(v2[0].tradeableItem);
      } else if (this.settings.sortBy == typings/* SortBy */.gx.SALES_VOLUME) {
        sorter = (v1, v2) => v1[1].volume - v2[1].volume;
      } else {
        apiSupplier/* kol */.x.abort("Unknown sort option " + this.settings.sortBy);
      }

      if (this.settings.doCategories && this.categoryOrder != null) {
        this.prices.sort((v1, v2) => {var _v1$0$category, _v2$0$category;
          var c1 = (_v1$0$category = v1[0].category) !== null && _v1$0$category !== void 0 ? _v1$0$category : "";
          var c2 = (_v2$0$category = v2[0].category) !== null && _v2$0$category !== void 0 ? _v2$0$category : "";

          if (c1 == c2) {
            return sorter(v1, v2);
          }

          var i1 = this.categoryOrder.indexOf(c1);
          var i2 = this.categoryOrder.indexOf(c2);

          if (i1 == i2) {
            return sorter(v1, v2);
          }

          return i1 - i2;
        });
      } else {
        this.prices.sort(sorter);
      }

      if (this.settings.reverseSort) {
        this.prices.reverse();
      }
    } }]);}();
;// ./src/ui/output.ts
function output_typeof(o) {"@babel/helpers - typeof";return output_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, output_typeof(o);}function output_classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function output_defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, output_toPropertyKey(o.key), o);}}function output_createClass(e, r, t) {return r && output_defineProperties(e.prototype, r), t && output_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function output_defineProperty(e, r, t) {return (r = output_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function output_toPropertyKey(t) {var i = output_toPrimitive(t, "string");return "symbol" == output_typeof(i) ? i : i + "";}function output_toPrimitive(t, r) {if ("object" != output_typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != output_typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}


var ReportOutput = /*#__PURE__*/function () {



  function ReportOutput(settings) {output_classCallCheck(this, ReportOutput);output_defineProperty(this, "output", void 0);output_defineProperty(this, "settings", void 0);
    this.settings = settings;
  }return output_createClass(ReportOutput, [{ key: "printLine", value:

    function printLine(line, textType, color) {
      if (this.settings.logOutputAs == "plain" && textType == "html") {
        line = line.replace(/<[^>]*>/g, "");
        textType = "plain";
      }

      if (this.settings.logOutputTo) {
        if (this.output == null) {
          if (line != null) {
            line = line.trim();
          }

          if (line == null || line == "") {
            return;
          }

          this.output = [];
        }

        if (textType == "plain" && this.settings.logOutputTo.endsWith(".html")) {
          line = apiSupplier/* kol */.x.entityEncode(line);
        }

        this.output.push(line);
      } else if (textType == "html") {
        apiSupplier/* kol */.x.printHtml(line);
      } else if (color != null) {
        apiSupplier/* kol */.x.print(line, color);
      } else {
        apiSupplier/* kol */.x.print(line);
      }
    } }, { key: "escapeHTML", value:

    function escapeHTML(str) {
      return apiSupplier/* kol */.x.
      entityDecode(str).
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/"/g, "&quot;").
      replace(/'/g, "&#039;");
    } }, { key: "stop", value:

    function stop() {
      if (this.output == null || this.output.length == 0) {
        return;
      }

      apiSupplier/* kol */.x.bufferToFile(this.output.join("\n"), this.settings.logOutputTo);
      apiSupplier/* kol */.x.print("accounval results printed to 'data/".concat(
        this.settings.logOutputTo, "'")
      );
    } }]);}();
;// ./src/ui/valuation.ts
function valuation_typeof(o) {"@babel/helpers - typeof";return valuation_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, valuation_typeof(o);}function valuation_slicedToArray(r, e) {return valuation_arrayWithHoles(r) || valuation_iterableToArrayLimit(r, e) || valuation_unsupportedIterableToArray(r, e) || valuation_nonIterableRest();}function valuation_nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function valuation_iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function valuation_arrayWithHoles(r) {if (Array.isArray(r)) return r;}function valuation_toConsumableArray(r) {return valuation_arrayWithoutHoles(r) || valuation_iterableToArray(r) || valuation_unsupportedIterableToArray(r) || valuation_nonIterableSpread();}function valuation_nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function valuation_iterableToArray(r) {if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);}function valuation_arrayWithoutHoles(r) {if (Array.isArray(r)) return valuation_arrayLikeToArray(r);}function valuation_createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = valuation_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t.return || t.return();} finally {if (u) throw o;}} };}function valuation_unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return valuation_arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? valuation_arrayLikeToArray(r, a) : void 0;}}function valuation_arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function valuation_classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function valuation_defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, valuation_toPropertyKey(o.key), o);}}function valuation_createClass(e, r, t) {return r && valuation_defineProperties(e.prototype, r), t && valuation_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function valuation_defineProperty(e, r, t) {return (r = valuation_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function valuation_toPropertyKey(t) {var i = valuation_toPrimitive(t, "string");return "symbol" == valuation_typeof(i) ? i : i + "";}function valuation_toPrimitive(t, r) {if ("object" != valuation_typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != valuation_typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}















var ValuationReport = /*#__PURE__*/function () {














  function ValuationReport(
  logic,
  settings,
  out)
  {valuation_classCallCheck(this, ValuationReport);valuation_defineProperty(this, "netvalue", 0);valuation_defineProperty(this, "aWorth", void 0);valuation_defineProperty(this, "lines", []);valuation_defineProperty(this, "mallExtinct", []);valuation_defineProperty(this, "shopNetValue", 0);valuation_defineProperty(this, "shopPricedAt", 0);valuation_defineProperty(this, "lastCategory", null);valuation_defineProperty(this, "shelfValue", 0);valuation_defineProperty(this, "exceededMax", false);valuation_defineProperty(this, "pronoun", void 0);valuation_defineProperty(this, "logic", void 0);valuation_defineProperty(this, "settings", void 0);valuation_defineProperty(this, "out", void 0);
    this.logic = logic;
    this.settings = settings;
    this.out = out;
    this.aWorth = this.logic.priceResolver.itemPrice(
      supplierTypings/* KoLItem */.U8.get("Mr. Accessory")
    ).price;
    this.pronoun = this.settings.fetchClan ?
    "The clan stash is" :
    !this.settings.playerId ||
    this.settings.playerId == apiSupplier/* kol */.x.toInt(apiSupplier/* kol */.x.myId()) ?
    this.settings.fetchSession ?
    "Your session is" :
    "You are" :
    apiSupplier/* kol */.x.getPlayerName(this.settings.playerId) + " is";
  }return valuation_createClass(ValuationReport, [{ key: "run", value:

    function run() {
      var resolved = this.filterAndResolveItems();var _iterator = valuation_createForOfIteratorHelper(

          resolved),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var res = _step.value;
          this.formatResolvedItem(res);
        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}

      this.onShelfName(null, 0); // close shelf
      this.printLinesAndExtinct(resolved.length);
      this.printSummary();
    } }, { key: "filterAndResolveItems", value:

    function filterAndResolveItems() {
      var useJsFilter =
      this.logic.jsFilter != null &&
      this.settings.doesJSFilterUsePriceOrSales();
      var resolved = [];

      for (var no = this.logic.prices.length - 1; no >= 0; no--) {
        var item = this.logic.prices[no][0];
        var price = this.logic.prices[no][1];
        var worthEach = Math.min(
          this.settings.maxNaturalPrice + 1,
          price.price <= 0 && item.worthMultiplier == 1 ?
          -1 :
          price.price * (1 / item.worthMultiplier)
        );
        var count = this.logic.ownedItems.get(item);

        if (isNaN(count)) {
          this.out.printLine(
            "Unable to handle the item '" + item.name + "', skipping..",
            "plain",
            utils_colors/* AccountValColors */.HK.attentionGrabbingWarning
          );
          continue;
        }

        if (
        useJsFilter &&
        !this.logic.jsFilter(item.actualItem, count, worthEach, price.volume))
        {
          continue;
        }

        resolved.push({ item: item, price: price, worthEach: worthEach, count: count });
      }

      return resolved;
    } }, { key: "onShelfName", value:

    function onShelfName(name, worth) {
      if (!this.settings.doCategories || name == this.lastCategory) {
        this.shelfValue += worth;

        return;
      }

      if (this.lastCategory != null) {
        this.lines.push("<u><b>DC Shelf:</b> ".concat(
          this.out.escapeHTML(this.lastCategory), "<font color='").concat(utils_colors/* AccountValColors */.HK.minorNote, "'>, worth ").concat(utils/* AccountValUtils */.E.getNumber(this.shelfValue), " meat</font></u>")
        );
        this.lines.push("");
      }

      this.lastCategory = name;
      this.shelfValue = worth;
    } }, { key: "formatResolvedItem", value:

    function formatResolvedItem(_ref) {var item = _ref.item,price = _ref.price,worthEach = _ref.worthEach,count = _ref.count;
      this.exceededMax =
      this.exceededMax ||
      this.settings.maxNaturalPrice + 1 <
      price.price * (1 / item.worthMultiplier);
      var totalWorth = Math.round(worthEach * count);
      this.netvalue += totalWorth;

      if (this.lines.length >= this.settings.displayLimit) {
        return;
      }

      var title = [];

      if (item.name != item.tradeableItem.name && item.worthMultiplier != 1) {
        title.push("=== ".concat(this.out.escapeHTML(item.name), " ==="));
        title.push("");
        title.push("".concat(
          this.out.escapeHTML(item.tradeableItem.name), " / ").concat(this.out.escapeHTML(item.pluralName), " (").concat(item.worthMultiplier, ") = ").concat(item.pluralName, " are worth ").concat(utils/* AccountValUtils */.E.getNumber(Math.round(worthEach)), " meat each.")
        );
      } else {
        title.push("=== ".concat(this.out.escapeHTML(item.tradeableItem.name), " ==="));
        title.push("");
      }

      var tradeableWorth = " @ ".concat(utils/* AccountValUtils */.E.getNumber(price.price), " meat.");

      if (price.price < 0) {
        tradeableWorth = " as mall extinct.";
      }

      var accName =
      price.accuracy == typings/* PriceType */.SJ.NEW_PRICES ?
      "Last malled" :
      price.accuracy == typings/* PriceType */.SJ.MALL_SALES ?
      "Last sold" :
      price.accuracy == typings/* PriceType */.SJ.AUTOSELL ?
      "Autosell" :
      "Last mafia malled";
      title.push(accName + tradeableWorth);

      if (price.price2 > 0 && price.accuracy == typings/* PriceType */.SJ.NEW_PRICES) {
        title.push("Last sold @ ".concat(
          utils/* AccountValUtils */.E.getNumber(price.price2), " meat.")
        );
      }

      if (item.shopWorth > 0) {
        title.push("".concat(
          this.pronoun, " selling @ ").concat(utils/* AccountValUtils */.E.getNumber(item.shopWorth), " meat.")
        );
      }

      if (count > 1 && this.settings.showSingleItemWorth) {
        title.push("Worth a total of ".concat(utils/* AccountValUtils */.E.getNumber(totalWorth)));
      }

      if (price.accuracy != typings/* PriceType */.SJ.AUTOSELL) {
        title.push("");
        title.push("Price valid as of ".concat(
          utils/* AccountValUtils */.E.getNumber(price.daysOutdated, 1), " day").concat(price.daysOutdated != 1 ? "s" : "", " ago.")
        );
      }

      if (price.volume >= 0) {
        title.push("");
        title.push("".concat(
          utils/* AccountValUtils */.E.getNumber(price.volume), " sold in the last week.")
        );
      }

      if (item.snapshotSource != null) {
        title = ["Owns in ".concat(item.snapshotSource, ".")].concat(valuation_toConsumableArray(title));
      }

      var name = this.out.escapeHTML(item.name);

      if (item.bound != null) {
        var boundInfo;
        var color = utils_colors/* AccountValColors */.HK.shopPricesOverpriced;

        if (item.bound == typings/* ItemStatus */.Kw.SHOP_WORTH) {
          var overpricedPerc = item.shopWorth / worthEach;

          if (item.shopWorth < 999999000) {
            this.shopPricedAt += item.shopWorth * count;
            this.shopNetValue += totalWorth;
          }

          if (overpricedPerc <= 1.05) {
            color = utils_colors/* AccountValColors */.HK.shopPricedOk;
          }

          boundInfo = utils/* AccountValUtils */.E.getNumberOrClamp(
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

        name = "".concat(name, " (<font color='").concat(color, "' title='").concat(title.join("&#010;"), "'>").concat(this.out.escapeHTML(boundInfo), "</font>)");
      }

      if (worthEach <= 0 || worthEach > this.settings.maxNaturalPrice) {
        if (count > 1) {
          this.mallExtinct.push([count + " @ " + name, title.join("&#010;")]);
        } else {
          this.mallExtinct.push([name, title.join("&#010;")]);
        }

        return;
      }

      this.onShelfName(item.category, totalWorth);

      var text = "".concat(utils/* AccountValUtils */.E.getNumber(count), " ").concat(name);

      if (this.settings.showSingleItemWorth) {
        text += " each worth ".concat(utils/* AccountValUtils */.E.getNumber(worthEach));
      } else {
        text += " worth a total of ".concat(utils/* AccountValUtils */.E.getNumber(totalWorth));
      }

      this.lines.push(
        "<font title='" +
        this.out.escapeHTML(title.join("&#010;")) +
        "'>" +
        text +
        "</font>"
      );
    } }, { key: "printLinesAndExtinct", value:

    function printLinesAndExtinct(totalResolved) {
      if (!this.settings.brief) {
        this.lines = this.lines.reverse();
        var skipping = Math.max(0, totalResolved - this.settings.displayLimit);

        if (skipping > 0) {
          this.out.printLine("", "plain");
          this.out.printLine("<font color='".concat(
            utils_colors/* AccountValColors */.HK.minorNote, "'>Skipping ").concat(utils/* AccountValUtils */.E.getNumber(skipping), " lines and displaying the last ").concat(utils/* AccountValUtils */.E.getNumber(this.settings.displayLimit), " lines..</font>"),
          "html"
          );
        }

        if (this.lines.length > 0) {
          this.lines.push("");
        }

        if (this.lines[0] == "") {
          this.lines.shift();
        }var _iterator2 = valuation_createForOfIteratorHelper(

            this.lines),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var line = _step2.value;
            this.out.printLine(line.replace(/\n/g, "&#010;"), "html");
          }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}

        if (this.mallExtinct.length > 0) {
          var colors = [
          utils_colors/* AccountValColors */.HK.mallExtinctColor1,
          utils_colors/* AccountValColors */.HK.mallExtinctColor2];

          var extinct = this.mallExtinct.map(
            (_ref2, i) => {var _ref3 = valuation_slicedToArray(_ref2, 2),name = _ref3[0],title = _ref3[1];return (
                "<font color='" +
                colors[i % 2] +
                "' title='" +
                title +
                "'>" +
                name +
                "</font>");}
          );
          this.out.printLine(
            "There were " +
            extinct.length +
            " mall extinct items! Items: " +
            extinct.join(", "),
            "html"
          );
        }
      }
    } }, { key: "printSummary", value:

    function printSummary() {
      var mrAMeat = this.netvalue;
      this.out.printLine(
        this.pronoun +
        " worth " +
        utils/* AccountValUtils */.E.getNumber(this.netvalue) +
        " meat!",
        "plain",
        utils_colors/* AccountValColors */.HK.helpfulStateInfo
      );

      if (this.settings.fetchSession && apiSupplier/* kol */.x.mySessionMeat() != 0) {
        mrAMeat = this.netvalue + apiSupplier/* kol */.x.mySessionMeat();
        this.out.printLine("Add meat from session, that's ".concat(
          utils/* AccountValUtils */.E.getNumber(mrAMeat), " meat!"),
        "plain",
        utils_colors/* AccountValColors */.HK.helpfulStateInfo
        );
      }

      if (this.settings.brief) {
        return;
      }

      var mrAWorth = (0.0 + mrAMeat) / this.aWorth;
      this.out.printLine("<font title='With Mr. Accessory worth being ".concat(
        utils/* AccountValUtils */.E.getNumber(this.aWorth), " meat'>Going by the value of a Mr. Accessory, that's $").concat(utils/* AccountValUtils */.E.getNumber(mrAWorth * 10), "</font>"),
      "html"
      );

      if (this.shopPricedAt > 0) {
        this.shopPricedAt /= this.shopNetValue;
        var perc = utils/* AccountValUtils */.E.getNumberOrClamp(
          Math.round(this.shopPricedAt * 100),
          -999,
          999,
          "Very underpriced",
          "Very overpriced"
        );

        if (perc.match(/\d$/)) {
          perc += "%";
        }

        this.out.printLine("Overall, the shop is ".concat(perc, " of mall"), "plain");
        this.out.printLine(
          "Disclaimer: Cheapest price being 100% can mean we're comparing prices against.. this shop.",
          "plain",
          utils_colors/* AccountValColors */.HK.minorNote
        );
      }

      this.printMeat();

      if (this.exceededMax) {
        this.out.printLine("<font color='".concat(
          utils_colors/* AccountValColors */.HK.minorNote, "' title=\"The max natural price is currently set to ").concat(utils/* AccountValUtils */.E.getNumber(this.settings.maxNaturalPrice), ". (").concat(this.settings.maxNaturalPrice == AccountValSettings.defaultMaxNaturalPrice ? "default" : "default is ".concat(utils/* AccountValUtils */.E.getNumber(AccountValSettings.defaultMaxNaturalPrice)), ")&#010;&#010;You can change this by using 'max=3b' as an arg.&#010;You can also set the property 'accountval_maxNaturalPrice' to a number (3b, 5,000,000, 3m1k, etc), this cap increases by 2b every year to account for meatflation\">Some items were expensive and were marked as mall extinct. Hover for details.</font>"),
        "html"
        );
      }

      if (this.logic.priceResolver.doWarning()) {
        this.out.printLine("<font color='".concat(
          utils_colors/* AccountValColors */.HK.attentionGrabbingWarning, "'>Unfortunately I'm having issues resolving mall prices, the old database has gone down and my PR for the other source is on hold and waiting for approval. <u><a href='https://github.com/loathers/pricegun/pull/8'>https://github.com/loathers/pricegun/pull/8</a></u></font>"),
        "html"
        );
        this.out.printLine("As such please bear with me that prices are effectively 'frozen'.",

        "plain",
        utils_colors/* AccountValColors */.HK.attentionGrabbingWarning
        );
      }
    } }, { key: "printMeat", value:

    function printMeat() {
      if (!this.settings.doTradeables) {
        return;
      }

      var meat = 0;
      var meatSources = [];

      if (this.settings.fetchInventory && apiSupplier/* kol */.x.myMeat() != 0) {
        meat += apiSupplier/* kol */.x.myMeat();
        meatSources.push(
          utils/* AccountValUtils */.E.getNumber(apiSupplier/* kol */.x.myMeat()) + " meat in inventory"
        );
      }

      if (this.settings.fetchCloset && apiSupplier/* kol */.x.myClosetMeat() != 0) {
        meat += apiSupplier/* kol */.x.myClosetMeat();
        meatSources.push(
          utils/* AccountValUtils */.E.getNumber(apiSupplier/* kol */.x.myClosetMeat()) + " meat in closet"
        );
      }

      if (this.settings.fetchStorage && apiSupplier/* kol */.x.myStorageMeat() != 0) {
        meat += apiSupplier/* kol */.x.myStorageMeat();
        meatSources.push(
          utils/* AccountValUtils */.E.getNumber(apiSupplier/* kol */.x.myStorageMeat()) + " meat in storage"
        );
      }

      if (meat > 0 && this.settings.playerId == 0) {
        this.out.printLine(
          "<font title='" +
          meatSources.join(", ") +
          "'>This doesn't include your " +
          utils/* AccountValUtils */.E.getNumber(meat) +
          " meat!</font>",
          "html"
        );
      }
    } }]);}();
;// ./src/accountval.ts
function accountval_typeof(o) {"@babel/helpers - typeof";return accountval_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, accountval_typeof(o);}function accountval_slicedToArray(r, e) {return accountval_arrayWithHoles(r) || accountval_iterableToArrayLimit(r, e) || accountval_unsupportedIterableToArray(r, e) || accountval_nonIterableRest();}function accountval_nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function accountval_iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function accountval_arrayWithHoles(r) {if (Array.isArray(r)) return r;}function accountval_createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = accountval_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t.return || t.return();} finally {if (u) throw o;}} };}function accountval_unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return accountval_arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? accountval_arrayLikeToArray(r, a) : void 0;}}function accountval_arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function accountval_classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function accountval_defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, accountval_toPropertyKey(o.key), o);}}function accountval_createClass(e, r, t) {return r && accountval_defineProperties(e.prototype, r), t && accountval_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function accountval_defineProperty(e, r, t) {return (r = accountval_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function accountval_toPropertyKey(t) {var i = accountval_toPrimitive(t, "string");return "symbol" == accountval_typeof(i) ? i : i + "";}function accountval_toPrimitive(t, r) {if ("object" != accountval_typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != accountval_typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}








var

AccountVal = /*#__PURE__*/function () {function AccountVal() {accountval_classCallCheck(this, AccountVal);accountval_defineProperty(this, "logic", void 0);accountval_defineProperty(this, "settings", void 0);accountval_defineProperty(this, "out", void 0);}return accountval_createClass(AccountVal, [{ key: "getSettings", value:




    function getSettings() {
      return this.settings;
    } }, { key: "doHelp", value:

    function doHelp() {var _this = this;
      this.out.printLine(
        "AccountVal is a script to check what your account is worth, and find the good stuff fast.",
        "plain",
        utils_colors/* AccountValColors */.HK.helpfulStateInfo
      );
      this.out.printLine(
        "You can provide these as a parameter to accountval to do other stuff than the base script. Hover over them to see aliases.",
        "plain",
        utils_colors/* AccountValColors */.HK.helpfulStateInfo
      );
      this.out.printLine("<font color='".concat(
        utils_colors/* AccountValColors */.HK.helpfulStateInfo, "'>Use ! or - to negate a boolean option, as well as =. Eg:</font><font color='gray'> -bound !bound bound=false</font>"),
      "html"
      );

      var groups = [];var _iterator = accountval_createForOfIteratorHelper(

          AccountValSettings.getSettings()),_step;try {var _loop = function _loop() {var setting = _step.value;
          var defaultOf = ".</font> <font>Default is: ";

          if (_this.settings[setting.field] != null) {
            var val = _this.settings[setting.field];

            if (setting.type == typings/* FieldType */.PU.NUMBER) {
              val = setting.names[0] + "=" + val;
            } else if (setting.type == typings/* FieldType */.PU.SORTBY) {
              val = setting.names[0] + "=" + typings/* SortBy */.gx[val];
            }

            if (val == "" && typeof val != "boolean") {
              val = "null";
            }

            defaultOf += val;
          } else {
            defaultOf += "null";
          }

          if (setting.groupUnder != null) {
            var group = groups.find((_ref) => {var _ref2 = accountval_slicedToArray(_ref, 1),l = _ref2[0];return l == setting.groupUnder;});

            if (group == null) {
              groups.push(group = [setting.groupUnder, []]);
            }

            group[1].push("<font title='".concat(
              setting.desc).concat(setting.names.length > 1 ? "&#010;&#010;Aliases: ".concat(setting.names.filter((s) => s != setting.names[0]).join(", ")) : "", "'><b>").concat(setting.names[0], "</b></font>")
            );
          } else {
            _this.out.printLine("<font color='".concat(
              utils_colors/* AccountValColors */.HK.minorNote, "' title='Aliases: ").concat(setting.names.join(", "), "'><b>").concat(setting.names[0], "</b> - ").concat(setting.desc).concat(defaultOf, "</font>"),
            "html"
            );
          }
        };for (_iterator.s(); !(_step = _iterator.n()).done;) {_loop();}} catch (err) {_iterator.e(err);} finally {_iterator.f();}

      for (var _i = 0, _groups = groups; _i < _groups.length; _i++) {var _groups$_i = accountval_slicedToArray(_groups[_i], 2),groupName = _groups$_i[0],grouped = _groups$_i[1];
        var toPrint = grouped.map(
          (s, i) => "<font color='".concat(
            i % 2 == 0 ? utils_colors/* AccountValColors */.HK.mallExtinctColor1 : utils_colors/* AccountValColors */.HK.mallExtinctColor2, "'>").concat(s, "</font>")
        );
        this.out.printLine("<font color='".concat(
          utils_colors/* AccountValColors */.HK.minorNote, "'><b>").concat(groupName, ":</b> ").concat(toPrint.join(", "), "</font>"),
        "html"
        );
      }

      this.out.printLine("<font color='".concat(
        utils_colors/* AccountValColors */.HK.minorNote, "'>Disclaimer: The prices shown are not absolute, and can overstate what it really is worth.</font>"),
      "html"
      );
    } }, { key: "load", value:

    function load(command) {
      this.settings = new AccountValSettings();
      this.out = new ReportOutput(this.settings);

      if (command == "test") {
        this.runTests();

        return false;
      }

      if (command == null) {
        this.out.printLine(
          "To fine tune what we check, including to tradeables only.. Provide the parameter 'help' for more info",
          "plain",
          utils_colors/* AccountValColors */.HK.helpfulStateInfo
        );
        command = "";
      } else if (command.toLowerCase().match(/([^a-z]|^)help([^a-z]|$)/)) {
        this.settings.doSettings([]);
        this.doHelp();

        return false;
      } else if (command.toLowerCase().match(/^debugcolors=[^ ]+$/)) {
        var scheme = command.split("=")[1];
        (0,utils_colors/* showAccountvalColors */.mh)(scheme);

        return false;
      }

      var spl = utils/* AccountValUtils */.E.splitArguments(
        this.settings,
        command
      );
      var unknown = this.settings.doSettings(spl);

      if (unknown.length > 0) {
        unknown.forEach((s) =>
        this.out.printLine("<font color='".concat(
          utils_colors/* AccountValColors */.HK.attentionGrabbingWarning, "'>").concat(s, "</font>"),
        "html"
        )
        );

        return false;
      }

      return true;
    } }, { key: "start", value:

    function start() {
      AccValTiming.start("Construct Logic");
      var priceSettings = new PricingSettings();
      priceSettings.maxPriceAge = this.settings.maxAge;
      priceSettings.oldPricing = this.settings.oldPricing;
      priceSettings.dateToFetch = this.settings.dateToFetch;
      priceSettings.globalSettings = this.settings;
      this.logic = new AccountValLogic(this.settings, priceSettings);
      AccValTiming.stop("Construct Logic");

      AccValTiming.start("Load Logic Items");
      this.logic.loadItems();
      AccValTiming.stop("Load Logic Items");

      AccValTiming.start("Load Logic Prices");
      this.logic.doPricing();
      AccValTiming.stop("Load Logic Prices");

      AccValTiming.start("Start Valuation");
      var report = new ValuationReport(this.logic, this.settings, this.out);
      report.run();
      AccValTiming.stop("Start Valuation");
    } }, { key: "stop", value:

    function stop() {
      this.logic.priceResolver.stop();
      this.out.stop();
    } }, { key: "runTests", value:

    function runTests() {
      this.runTest("", {
        doBound: true,
        sortBy: typings/* SortBy */.gx.TOTAL_PRICE,
        fetchInventory: true
      });
      this.runTest("sort meat!bound", { doBound: false, sortBy: typings/* SortBy */.gx.PRICE });
      this.out.printLine("Tests Finished", "plain", "green");
    } }, { key: "runTest", value:

    function runTest(args, verify) {
      this.load(args);

      for (var _i2 = 0, _Object$entries = Object.entries(verify); _i2 < _Object$entries.length; _i2++) {var _Object$entries$_i = accountval_slicedToArray(_Object$entries[_i2], 2),key = _Object$entries$_i[0],value = _Object$entries$_i[1];
        var setTo = this.settings[key];

        if (setTo == value) {
          continue;
        }

        this.out.printLine("On '".concat(
          args, "', ").concat(key, " was not set to ").concat(value, " but instead ").concat(setTo),
        "plain",
        "red"
        );
      }
    } }]);}();


function main(command) {
  (0,apiSupplier/* setProvider */.U)(new KolmafiaProvider());
  (0,utils_colors/* initAccountValColors */.BG)();

  var val = new AccountVal();

  if (val.load(command)) {
    AccValTiming.start("Run AccountVal");
    val.start();
    val.stop();
    AccValTiming.stop("Run AccountVal");
  }

  if (AccountValSettings.timingsDebug) {
    AccValTiming.printTracked("PRINT_JUST_ONCE");
  }
}
var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;