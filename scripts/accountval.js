/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 424
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ provider),
/* harmony export */   U: () => (/* binding */ setProvider)
/* harmony export */ });


var api;

function provider() {
  if (!api) {
    throw "Trying to access api provider before setting it";
  }

  return api;
}

function setProvider(provider) {
  api = provider;
}

/***/ },

/***/ 532
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SR: () => (/* binding */ KoLFamiliar),
/* harmony export */   U8: () => (/* binding */ KoLItem),
/* harmony export */   cw: () => (/* binding */ KoLSkill),
/* harmony export */   hG: () => (/* binding */ KoLSlot)
/* harmony export */ });
/* harmony import */ var _apiSupplier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(424);
function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}





// We've loaded it, any attempts to fetch mall prices anew is a mistake























var KoLItem = /*#__PURE__*/function () {function KoLItem() {_classCallCheck(this, KoLItem);}return _createClass(KoLItem, null, [{ key: "get", value:
    function get(key) {
      return (0,_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().getItem(key);
    } }, { key: "none", get:

    function get() {
      return (0,_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().noItem();
    } }, { key: "all", value:

    function all() {
      return (0,_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().allItems();
    } }]);}();







var KoLFamiliar = /*#__PURE__*/function () {function KoLFamiliar() {_classCallCheck(this, KoLFamiliar);}return _createClass(KoLFamiliar, null, [{ key: "all", value:
    function all() {
      return (0,_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().allFamiliars();
    } }]);}();




var KoLSlot = /*#__PURE__*/function () {function KoLSlot() {_classCallCheck(this, KoLSlot);}return _createClass(KoLSlot, null, [{ key: "none", get:
    function get() {
      return (0,_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().noSlot();
    } }]);}();





var KoLSkill = /*#__PURE__*/function () {function KoLSkill() {_classCallCheck(this, KoLSkill);}return _createClass(KoLSkill, null, [{ key: "all", value:
    function all() {
      return (0,_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().allSkills();
    } }, { key: "none", get:

    function get() {
      return (0,_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().noSkill();
    } }, { key: "get", value:

    function get(key) {
      return (0,_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().getSkill(key);
    } }]);}();

/***/ },

/***/ 198
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $y: () => (/* binding */ ItemPrice),
/* harmony export */   Fx: () => (/* binding */ ValItem),
/* harmony export */   Kw: () => (/* binding */ ItemStatus),
/* harmony export */   SJ: () => (/* binding */ PriceType),
/* harmony export */   SP: () => (/* binding */ ItemType)
/* harmony export */ });
/* unused harmony export FieldType */
function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}


var ItemStatus = /*#__PURE__*/function (ItemStatus) {ItemStatus[ItemStatus["BOUND"] = 0] = "BOUND";ItemStatus[ItemStatus["NO_TRADE"] = 1] = "NO_TRADE";ItemStatus[ItemStatus["FAMILIAR"] = 2] = "FAMILIAR";ItemStatus[ItemStatus["IN_USE"] = 3] = "IN_USE";ItemStatus[ItemStatus["SHOP_WORTH"] = 4] = "SHOP_WORTH";return ItemStatus;}({});







var ItemType = /*#__PURE__*/function (ItemType) {ItemType[ItemType["UNTRADEABLE_ITEM"] = 0] = "UNTRADEABLE_ITEM";ItemType[ItemType["BOOK"] = 1] = "BOOK";ItemType[ItemType["PROPERTY"] = 2] = "PROPERTY";ItemType[ItemType["EUDORA"] = 3] = "EUDORA";ItemType[ItemType["GARDEN"] = 4] = "GARDEN";ItemType[ItemType["VISIT_URL_CHECK"] = 5] = "VISIT_URL_CHECK";ItemType[ItemType["SKILL"] = 6] = "SKILL";ItemType[ItemType["CURRENCY"] = 7] = "CURRENCY";ItemType[ItemType["CAMPGROUND"] = 8] = "CAMPGROUND";ItemType[ItemType["SCRIPT"] = 9] = "SCRIPT";return ItemType;}({});












var PriceType = /*#__PURE__*/function (PriceType) {PriceType[PriceType["NEW_PRICES"] = 0] = "NEW_PRICES";PriceType[PriceType["HISTORICAL"] = 1] = "HISTORICAL";PriceType[PriceType["MALL"] = 2] = "MALL";PriceType[PriceType["MALL_SALES"] = 3] = "MALL_SALES";PriceType[PriceType["AUTOSELL"] = 4] = "AUTOSELL";return PriceType;}({});







var FieldType = /*#__PURE__*/(/* unused pure expression or super */ null && (function (FieldType) {FieldType[FieldType["NUMBER"] = 0] = "NUMBER";FieldType[FieldType["SORTBY"] = 1] = "SORTBY";FieldType[FieldType["COLOR_SCHEME"] = 2] = "COLOR_SCHEME";FieldType[FieldType["BOOLEAN"] = 3] = "BOOLEAN";FieldType[FieldType["NAME"] = 4] = "NAME";FieldType[FieldType["STRING"] = 5] = "STRING";FieldType[FieldType["TEXT_TYPE"] = 6] = "TEXT_TYPE";return FieldType;}({})));


































var ValItem = /*#__PURE__*/function () {











  function ValItem(
  actualItem)





  {var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : actualItem;var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : item.name;var pluralName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : item.plural;var bound = arguments.length > 4 ? arguments[4] : undefined;var snapshotSource = arguments.length > 5 ? arguments[5] : undefined;_classCallCheck(this, ValItem);_defineProperty(this, "name", void 0);_defineProperty(this, "pluralName", void 0);_defineProperty(this, "category", void 0);_defineProperty(this, "actualItem", void 0);_defineProperty(this, "tradeableItem", void 0);_defineProperty(this, "bound", void 0);_defineProperty(this, "shopWorth", void 0);_defineProperty(this, "worthMultiplier", 1);_defineProperty(this, "snapshotSource", void 0);_defineProperty(this, "sortValue", void 0);
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

/***/ },

/***/ 316
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ CoinmasterResolver)
/* harmony export */ });
/* harmony import */ var _api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(424);
/* harmony import */ var _api_supplierTypings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(532);
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

          var price = (0,_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().sellPrice(item.seller, item);

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

/***/ 427
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ ItemResolver)
/* harmony export */ });
/* harmony import */ var _api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(424);
/* harmony import */ var _api_supplierTypings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(532);
/* harmony import */ var _models_typings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(198);
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(169);
/* harmony import */ var _coinmaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(316);
/* harmony import */ var _data_accountval_binds_txt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(854);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(688);
function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _slicedToArray(r, e) {return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function _arrayWithHoles(r) {if (Array.isArray(r)) return r;}function _createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t.return || t.return();} finally {if (u) throw o;}} };}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}






var

AccValStuff = /*#__PURE__*/_createClass(function AccValStuff() {_classCallCheck(this, AccValStuff);_defineProperty(this, "itemType", void 0);_defineProperty(this, "actualItem", void 0);_defineProperty(this, "skill", void 0);_defineProperty(this, "untradeableItem", void 0);_defineProperty(this, "garden", void 0);_defineProperty(this, "script", void 0);_defineProperty(this, "userSetting", void 0);_defineProperty(this, "visitUrlLink", void 0);_defineProperty(this, "visitUrlIncludes", void 0);_defineProperty(this, "correspondence", void 0);_defineProperty(this, "currencyAmount", void 0);});













var ItemResolver = /*#__PURE__*/function () {






  function ItemResolver(prices) {_classCallCheck(this, ItemResolver);_defineProperty(this, "visitCache", new Map());_defineProperty(this, "accValStuff", void 0);_defineProperty(this, "accountValCache", new Map());_defineProperty(this, "accountValVisitCachePropName", "_accountValVisitCache");_defineProperty(this, "prices", void 0);
    this.prices = prices;
    this.accValStuff = this.loadAccountValStuff();
  }return _createClass(ItemResolver, [{ key: "loadCache", value:

    function loadCache() {
      var prop = (0,_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().
      retrieveCache(this.accountValVisitCachePropName, "transient").
      split(",");var _iterator = _createForOfIteratorHelper(

          prop),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var p = _step.value;
          if (!p.includes(":")) {
            continue;
          }

          var spl = p.split(":");
          this.accountValCache.set(
            _api_supplierTypings__WEBPACK_IMPORTED_MODULE_1__/* .KoLItem */ .U8.get(_utils_utils__WEBPACK_IMPORTED_MODULE_6__/* .AccountValUtils */ .E.toInt(spl[0])),
            spl[1].startsWith("t")
          );
        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}
    } }, { key: "saveCache", value:

    function saveCache() {
      var values = [];
      this.accountValCache.forEach((val, key) =>
      values.push(key.id + ":" + (val ? "t" : "f"))
      );
      values.sort((v1, v2) => v1.localeCompare(v2));

      var val = values.join(",");

      if (
      (0,_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().retrieveCache(
        this.accountValVisitCachePropName,
        "transient"
      ) == val)
      {
        return;
      }

      (0,_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().storeCache(
        this.accountValVisitCachePropName,
        values.join(","),
        "transient"
      );
    } }, { key: "getUrledItems", value:

    function getUrledItems() {
      var items = [];
      var origSize = this.accountValCache.size;var _iterator2 = _createForOfIteratorHelper(

          this.accValStuff),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var s = _step2.value;
          if (s.itemType == _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemType */ .SP.BOOK) {
            if ((0,_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().haveSkill(s.skill)) {
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
            if ((0,_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().myGardenType() == s.garden) {
              items.push([s.actualItem, _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemStatus */ .Kw.IN_USE]);
            }
          } else if (s.itemType == _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemType */ .SP.SKILL) {
            if ((0,_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().getPermedSkills()[s.skill.name]) {
              items.push([s.actualItem, _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemStatus */ .Kw.BOUND]);
            }
          } else if (s.itemType == _models_typings__WEBPACK_IMPORTED_MODULE_2__/* .ItemType */ .SP.CAMPGROUND) {
            if ((0,_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().getCampground()[s.actualItem.name] != null) {
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
            (0,_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().retrieveCache(prop.replace("!", ""), "small_persist")
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
            (0,_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().print(
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
          if (!(0,_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().haveFamiliar(fam) || (0,_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().myFamiliar() == fam) {
            continue;
          }

          var item = (0,_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().familiarEquippedEquipment(fam);

          if (item == null || item == _api_supplierTypings__WEBPACK_IMPORTED_MODULE_1__/* .KoLItem */ .U8.none) {
            continue;
          }

          famEquipped.set(item, (famEquipped.get(item) | 0) + 1);
        }} catch (err) {_iterator6.e(err);} finally {_iterator6.f();}

      return famEquipped;
    } }, { key: "visitCheck", value:

    function visitCheck(item, url, find) {
      if (this.accountValCache.has(item)) {
        return this.accountValCache.get(item);
      }

      var page = this.visitCache.get(url);

      if (page == null) {
        page = (0,_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().visitUrl(url);
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
            (0,_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().print(
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
              (0,_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().print(
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

        (0,_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().print(
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
        map((i) => [i, (0,_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().associatedSkill(i)]).
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

/***/ 169
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BG: () => (/* binding */ initAccountValColors),
/* harmony export */   HK: () => (/* binding */ AccountValColors),
/* harmony export */   Xf: () => (/* binding */ getAccountvalColors),
/* harmony export */   mh: () => (/* binding */ showAccountvalColors),
/* harmony export */   x5: () => (/* binding */ loadAccountvalColors)
/* harmony export */ });
/* harmony import */ var _api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(424);
function _slicedToArray(r, e) {return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function _arrayWithHoles(r) {if (Array.isArray(r)) return r;}function _toConsumableArray(r) {return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _iterableToArray(r) {if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);}function _arrayWithoutHoles(r) {if (Array.isArray(r)) return _arrayLikeToArray(r);}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}













var AccountValColors;

var map = new Map();

map.set("light", {
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
  if (name == "default") {
    name = (0,_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().isDarkMode() ? "dark" : "light";
  }

  if (!map.has(name)) {
    return false;
  }

  AccountValColors = map.get(name);

  return true;
}

function getAccountvalColors() {
  return ["default"].concat(_toConsumableArray(map.keys()));
}

function showAccountvalColors(name) {
  if (!map.has(name)) {
    (0,_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().print("Can't find any colors by that name", "red");

    return;
  }

  var colors = map.get(name);

  for (var _i = 0, _Object$entries = Object.entries(colors); _i < _Object$entries.length; _i++) {var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),k = _Object$entries$_i[0],v = _Object$entries$_i[1];
    (0,_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().printHtml("<font color='".concat(v, "'>").concat(k, "</font>"));
  }
}

function initAccountValColors() {
  var def = (0,_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().isDarkMode() ? "dark" : "default";
  loadAccountvalColors(
    (0,_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().retrieveCache("accountvalColorScheme", "small_persist") ?
    (0,_api_apiSupplier__WEBPACK_IMPORTED_MODULE_0__/* .provider */ .M)().retrieveCache("accountvalColorScheme", "small_persist") :
    def
  );
}

/***/ },

/***/ 688
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ AccountValUtils)
/* harmony export */ });
function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}var AccountValUtils = /*#__PURE__*/function () {function AccountValUtils() {_classCallCheck(this, AccountValUtils);}return _createClass(AccountValUtils, null, [{ key: "getNumber", value:
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

/***/ 854
(module) {

module.exports = "# Original data taken from https://github.com/soolar/accountval.ash\n# Item Containers! Start with i\ni\tpacket of mayfly bait\tmayfly bait necklace\ni\tClan VIP Lounge invitation\tClan VIP Lounge key\ni\tMake-Your-Own-Vampire-Fangs kit\tplastic vampire fangs\ni\tFolder Holder\tover-the-shoulder Folder Holder\ni\tcan of Rain-Doh\tempty Rain-Doh can\ni\tDiscontent&trade; Winter Garden Catalog\tpacket of winter seeds\ni\tEd the Undying exhibit crate\tThe Crown of Ed the Undying\ni\tPack of Every Card\tDeck of Every Card\ni\tDIY protonic accelerator kit\tprotonic accelerator pack\ni\tDear Past Self Package\tTime-Spinner\ni\tGranny Tood's Thanksgarden Catalog\tpacket of thanksgarden seeds\ni\tsuspicious package\tKremlin's Greatest Briefcase\ni\tLI-11 Motor Pool voucher\tAsdon Martin keyfob (on ring)\ni\tGrumpy Bumpkin's Pumpkin Seed Catalog\tpacket of pumpkin seeds\ni\tMint Salton Pepper's Peppermint Seed Catalog\tPeppermint Pip Packet\ni\tPete & Jackie's Dragon Tooth Emporium Catalog\tpacket of dragon's teeth\ni\tPocket Meteor Guide\tPocket Meteor Guide (well-thumbed)\ni\tcorked genie bottle\tgenie bottle\ni\tpantogram\tportable pantogram\ni\tlocked mumming trunk\tmumming trunk\ni\tJanuary's Garbage Tote (unopened)\tJanuary's Garbage Tote\ni\tPok&eacute;fam Guide to Capturing All of Them\tpacket of tall grass seeds\ni\tSongBoom&trade; BoomBox Box\tSongBoom&trade; BoomBox\ni\tBastille Battalion control rig crate\tBastille Battalion control rig\ni\tlatte lovers club card\tlatte lovers member's mug\ni\tKramco Industries packing carton\tKramco Sausage-o-Matic&trade;\ni\tmint condition Lil' Doctor&trade; bag\tLil' Doctor&trade; bag\ni\tvampyric cloake pattern\tvampyric cloake\ni\tFourth of May Cosplay Saber kit\tFourth of May Cosplay Saber\ni\trune-strewn spoon cocoon\thewn moon-rune spoon\ni\tBeach Comb Box\tBeach Comb\ni\tUnopened Eight Days a Week Pill Keeper\tEight Days a Week Pill Keeper\ni\tunopened diabolic pizza cube box\tdiabolic pizza cube\ni\tunopened Bird-a-Day calendar\tBird-a-Day calendar\ni\tmint-in-box Powerful Glove\tPowerful Glove\ni\tBetter Shrooms and Gardens catalog\tpacket of mushroom spores\ni\tGuzzlr application\tGuzzlr tablet\ni\tbag of Iunion stones\tIunion Crown\ni\tpackaged SpinMaster&trade; lathe\tSpinMaster&trade; lathe\ni\tBagged Cargo Cultist Shorts\tCargo Cultist Shorts\ni\tComprehensive Cartographic Compendium\tComprehensive Cartographic Compendium (well-read)\ni\tpackaged knock-off retro superhero cape\tunwrapped knock-off retro superhero cape\ni\tpackaged miniature crystal ball\tminiature crystal ball\ni\temotion chip\tspinal-fluid-covered emotion chip\ni\tpower seed\tpotted power plant\ni\tpackaged backup camera\tbackup camera\ni\tpackaged familiar scrapbook\tfamiliar scrapbook\ni\tpackaged industrial fire extinguisher\tindustrial fire extinguisher\ni\tPackaged Daylight Shavings Helmet\tDaylight Shavings Helmet\ni\tPackaged cold medicine cabinet\tCold medicine cabinet\ni\tbox o' ghosts\tgregarious ghostling\ni\tGordon Beer's Beer Garden Catalog\tPacket of beer seeds\ni\tMint condition magnifying glass\tcursed magnifying glass\ni\tAntique pair of blue jeans\tEllsbury's journal (used)\ni\twarehouse key\tmime army insignia (cryonics)\ni\twarehouse key\tmime army insignia (morale)\ni\twarehouse key\tmime army insignia (psychological warfare)\ni\twarehouse key\tmime army insignia (pyrotechnics)\ni\twarehouse key\tmime army insignia (sanitation)\ni\twarehouse key\tmime army insignia (espionage)\ni\twarehouse key\tmime army insignia (infantry)\ni\twarehouse key\tmime army insignia (intelligence)\ni\twarehouse key\tmime army infiltration glove\ni\twarehouse key\tmime army challenge coin\ni\twarehouse key\tmime army shotglass\ni\twarehouse key\tmiming corduroys\ni\twarehouse key\tmiming beret\ni\twarehouse key\tmiming gloves\ni\twarehouse key\tmiming boots\ni\twarehouse key\tmiming shirt\ni\tcombat lover's locket lockbox\tcombat lover's locket\ni\tundamaged Unbreakable Umbrella\tUnbreakable umbrella\ni\tpackaged June cleaver\tJune cleaver\ni\tdesigner sweatpants (new old stock)\tDesigner sweatpants\ni\tunopened tiny stillsuit\ttiny stillsuit\ni\tpackaged Jurassic Parka\tJurassic Parka\ni\tpackaged model train set\tmodel train set\ni\tChibiBuddy™ (off)\tChibiBuddy™ (on)\ni\tRock Garden Guide\tpacket of rock seeds\ni\tS.I.T. Course Voucher\tS.I.T. Course Completion Certificate\ni\tClosed-circuit phone system\tClosed-circuit pay phone\ni\tCursed monkey glove\tcursed monkey's paw\ni\tshrink-wrapped Cincho de Mayo\tCincho de Mayo\ni\tshrink-wrapped 2002 Mr. Store Catalog\t2002 Mr. Store Catalog\ni\tboxed august scepter\taugust scepter\ni\tbook of facts\tbook of facts (dog-eared)\ni\tcrated wardrobe-o-matic\twardrobe-o-matic\ni\twrapped candy cane sword cane\tcandy cane sword cane\ni\tin-the-box spring shoes\tspring shoes\ni\tpackaged Everfull Dart Holster\tEverfull Dart Holster\ni\tBoxed Apriling band helmet\tApriling band helmet\ni\tboxed Mayam Calendar\tMayam Calendar\ni\tpackaged Roman Candelabra\tRoman Candelabra\ni\tuntorn tearaway pants package\ttearaway pants\ni\tBoxed Sept-Ember Censer\tSept-Ember Censer\ni\tboxed bat wings\tbat wings\ni\tSealed TakerSpace letter of Marque\tTakerSpace letter of Marque\ni\tMcHugeLarge deluxe ski set\tMcHugeLarge duffel bag\ni\tCyberRealm keycode\tserver room key\ni\teldritch tincture\teldritch tincture (depleted)\ni\tnew-in-box toy Cupid bow\ttoy Cupid bow\ni\tassemble-it-yourself Leprecondo\tLeprecondo\ni\tPackaged April Shower Thoughts Calendar\tApril Shower Thoughts shield\ni\tUnpeeled Peridot of Peril\tPeridot of Peril\ni\tpackaged prismatic beret\tprismatic beret\ni\tMöbius ring box\tMöbius ring\ni\tpackaged Monodent of the Sea\tMonodent of the Sea\ni\tLab-grown blood cubic zirconia\tblood cubic zirconia\ni\tshrunken head in a duffel bag\tshrunken head\ni\tseal-clubbing club loot box\tlegendary seal-clubbing club\ni\tdiscreetly-wrapped Eternity Codpiece\tThe Eternity Codpiece\ni\tboxed Heartstone\tHeartstone\ni\tBoxed Archaeologist's Spade\tArchaeologist's Spade\ni\twrapped Baseball Diamond\tBaseball Diamond\ni\tPasta wand loot box\tlegendary pasta wand\n\n\n\n\n# Bookshelf stuff! Start with b\nb\tTome of Snowcone Summoning\tSummon Snowcones\nb\tScratch 'n' Sniff Sticker Tome\tSummon Stickers\nb\tTome of Sugar Shummoning\tSummon Sugar Sheets\nb\tTome of Clip Art\tSummon Clip Art\nb\tTome of Rad Libs\tSummon Rad Libs\nb\tThe Smith's Tome\tSummon Smithsness\nb\tMcPhee's Grimoire of Hilarious Object Summoning\tSummon Hilarious Objects\nb\tSp'n-Zor's Grimoire of &quot;Tasteful&quot; Gifts\tSummon Tasteful Items\nb\tSorcerers of the Shore Grimoire\tSummon Alice's Army Cards\nb\tThinknerd's Grimoire of Geeky Gifts\t Summon Geeky Gifts\nb\tLibram of Candy Heart Summoning\tSummon Candy Heart\nb\tLibram of Divine Favors\tSummon Party Favor\nb\tLibram of Love Songs\tSummon Love Song\nb\tLibram of BRICKOs\tSummon BRICKOs\nb\tGygaxian Libram\tSummon Dice\nb\tLibram of Resolutions\tSummon Resolutions\nb\tLibram of Pulled Taffy\tSummon Taffy\nb\tThe Confiscator's Grimoire\tSummon Confiscated Things\n\n\n\n# Property based detection! Start with p\np\tairplane charter: Spring Break Beach\tsleazeAirportAlways&!_sleazeAirportToday\np\tairplane charter: Conspiracy Island\tspookyAirportAlways&!_spookyAirportToday\np\tairplane charter: Dinseylandfill\tstenchAirportAlways&!_stenchAirportToday\np\tairplane charter: That 70s Volcano\thotAirportAlways&!_hotAirportToday\np\tairplane charter: The Glaciest\tcoldAirportAlways&!_coldAirportToday\np\tChateau Mantegna room key\tchateauAvailable\np\tbottle of lovebug pheromones\tlovebugsUnlocked\np\tshrine to the Barrel god\tbarrelShrineUnlocked\np\tX-32-F snowman crate\tsnojoAvailable\np\tLT&T telegraph office deed\ttelegraphOfficeAvailable\np\tdetective school application\thasDetectiveSchool\np\tBuild-a-City Gingerbread kit\tgingerbreadCityAvailable&!_gingerbreadCityToday\np\theart-shaped crate\tloveTunnelAvailable&!_loveTunnelUsed\np\tSpacegate access badge\tspacegateAlways&!_spacegateToday\np\tFantasyRealm membership packet\tfrAlways&!_frToday\np\tHorsery contract\thorseryAvailable\np\tNeverending Party invitation envelope\tneverendingPartyAlways&!_neverendingPartyToday\np\tvoter registration form\tvoteAlways&!_voteToday\np\tBoxing Day care package\tdaycareOpen&!_daycareToday\np\tPirateRealm membership packet\tprAlways&!_prToday\np\tDistant Woods Getaway Brochure\tgetawayCampsiteUnlocked\np\tUndrilled cosmic bowling ball\thasCosmicBowlingBall\np\tMayDay™ contract\thasMaydayContract\np\tboxed autumn-aton\thasAutumnaton\np\tdeed to Oliver's Place\townsSpeakeasy\n\n\n\n# Eudoras! Start with e\ne\tMy Own Pen Pal kit\tPen Pal\ne\tGameInformPowerDailyPro subscription card\tGameInformPowerDailyPro Magazine\ne\tXi Receiver Unit\tXi Receiver Unit\ne\tNew-You Club Membership Form\tNew-You Club\ne\tOur Daily Candles™ order form\tOur Daily Candles\ne\tBlack and White Apron Enrollment Form\tBlack & White Apron\n\n\n\n# visit_url contains... Start with v\n\n\n\n# eval(function) => boolean! Starts with s for script\ns\tOrder of the Green Thumb Order Form\trequire(\"kolmafia\").floristAvailable()\n\n\n\n# campground items! Starts with c\nc\tHaunted Doghouse\nc\tWitchess Set\nc\tSource terminal\nc\tpotted tea tree\nc\tA Guide to Burning Leaves\n\n\n\n# Gardens\ng\tpacket of pumpkin seeds\tpumpkin\t\ng\tPeppermint Pip Packet\tpeppermint\ng\tpacket of dragon's teeth\tskeleton\ng\tPacket of beer seeds\tbeer\ng\tpacket of winter seeds\twinter\ng\tpacket of thanksgarden seeds\tthanksgarden\ng\tpacket of tall grass seeds\tgrass\ng\tpacket of mushroom spores\tmushroom\ng\tpacket of rock seeds\trock\n\n\n# Items that are dependent on the value of another as they're no-trade\n# Item | Check Against | X of our item = 1 of that item\nt\tChibiBuddy™ (on)\tChibiBuddy™ (off)\t1\nt\tdistilled resin\tinflammable leaf\t50\nt\tRethinking Candy\tKnucklebone\t2750\n\n\n# Items that are a coinmaster currency, and is dynamically priced because there's no solid metric\n# The price is resolved at runtime\nt\tfat loot token\nt\tCop dollar\nt\tDriplet\nt\tChroner\nt\tFreddy Kruegerand\nt\tGuzzlrbuck\nt\tBeach Buck\nt\tVolcoino\nt\tFunFunds™\nt\tCoinspiracy\nt\tWal-Mart gift certificate\nt\tRubee™\nt\tbuffalo dime\nt\tSpacegate Research\n\n# Items that are best valued at a hardcoded value, although you may not get that value...\nh\tmeat paste\t10\nh\tmeat stack\t100\nh\tnest egg\t150\nh\tDungeon dragon chest\t500\nh\tMeat globe\t700\nh\tdense meat stack\t1000\nh\tLoose Meats\t2300\nh\tchest of the Bonerdagon\t3000\nh\tDuct tape wallet\t3050\nh\tStock Certificate\t5000\nh\tEnvelope full of Meat\t30000\nh\tDiscount Telescope Warehouse gift certificate\t100000";

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
var apiSupplier = __webpack_require__(424);
// EXTERNAL MODULE: ./src/api/supplierTypings.ts
var supplierTypings = __webpack_require__(532);
// EXTERNAL MODULE: ./src/resolvers/items.ts
var items = __webpack_require__(427);
// EXTERNAL MODULE: ./src/utils/colors.ts
var utils_colors = __webpack_require__(169);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(688);
;// ./src/resolvers/pages.ts
function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t.return || t.return();} finally {if (u) throw o;}} };}function _toConsumableArray(r) {return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _iterableToArray(r) {if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);}function _arrayWithoutHoles(r) {if (Array.isArray(r)) return _arrayLikeToArray(r);}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}




var StoreItem = /*#__PURE__*/_createClass(function StoreItem() {_classCallCheck(this, StoreItem);_defineProperty(this, "item", void 0);_defineProperty(this, "amount", void 0);_defineProperty(this, "limit", void 0);_defineProperty(this, "price", void 0);});











var PageResolver = /*#__PURE__*/function () {function PageResolver() {_classCallCheck(this, PageResolver);}return _createClass(PageResolver, [{ key: "getSnapshot", value:
    function getSnapshot(
    username)
    {
      var items = new Map(
        supplierTypings/* KoLItem */.U8.all().map((i) => {
          var name = i.name;

          while (name.match(/<\/?i>/)) {
            name = name.replace(/<\/?i>/, "");
          }

          return [(0,apiSupplier/* provider */.M)().entityDecode(name).toLowerCase(), i];
        })
      );
      var skills = new Map(
        supplierTypings/* KoLSkill */.cw.all().map((s) => [
        (0,apiSupplier/* provider */.M)().entityDecode(s.name).toLowerCase(),
        s]
        )
      );
      var fams = new Map(
        supplierTypings/* KoLFamiliar */.SR.all().map((f) => [f.toString().toLowerCase(), f])
      );
      var ignore = _toConsumableArray(fams.values()).map((f) =>
      f.hatchling.toString().toLowerCase()
      );
      ignore.push.apply(ignore, _toConsumableArray(
        Object.values((0,apiSupplier/* provider */.M)().allNormalOutfits()).map((s) =>
        s.toLowerCase()
        ))
      );
      ignore.push("miming regalia");

      var page = (0,apiSupplier/* provider */.M)().visitUrl(
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

        var name = (0,apiSupplier/* provider */.M)().entityDecode(link[2]).toLowerCase();

        if (ignore.includes(name)) {
          continue;
        }

        var type = link[1];
        var isFam = !type.includes("perm");

        if (isFam) {
          if (fams.has(name)) {
            has.push(fams.get(name));
          } else {
            (0,apiSupplier/* provider */.M)().print(
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
          count = utils/* AccountValUtils */.E.toInt(
            name.substring(name.lastIndexOf("x") + 1)
          );
          name = name.substring(0, name.lastIndexOf(" "));
        }

        if (!items.has(name)) {
          (0,apiSupplier/* provider */.M)().print(
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
      var page = (0,apiSupplier/* provider */.M)().visitUrl("showfamiliars.php?who=" + userId);
      var regex = /onClick='fam\((\d+)\)'/;
      var match;
      var familiars = [];

      while ((match = page.match(regex)) != null) {
        page = page.replace(match[0], "");
        familiars.push((0,apiSupplier/* provider */.M)().toFamiliar(utils/* AccountValUtils */.E.toInt(match[1])));
      }

      return familiars;
    } }, { key: "getStore", value:

    function getStore(userId) {
      var items = [];
      var page = (0,apiSupplier/* provider */.M)().visitUrl("mallstore.php?whichstore=" + userId);var _iterator = _createForOfIteratorHelper(

          page.split("<tr>")),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var s = _step.value;
          var match = s.match(
            /selecteditem=(\d+).+?<b>.+?<\/b> \(([\d,]+)\) +(?:\(Limit ([\d,]+) \/ day\))?<\/td><td>((?:\d|,)+) Meat<\/td>/
          );

          if (match == null) {
            continue;
          }

          var item = new StoreItem();
          item.item = supplierTypings/* KoLItem */.U8.get(utils/* AccountValUtils */.E.toInt(match[1]));
          item.amount = utils/* AccountValUtils */.E.toInt(match[2]);
          item.limit = match[3] == null ? 0 : utils/* AccountValUtils */.E.toInt(match[3]);
          item.price = utils/* AccountValUtils */.E.toInt(match[4]);
          items.push(item);
        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}

      return items;
    } }, { key: "getDisplaycase", value:

    function getDisplaycase(userId) {
      var map = new Map();
      var descs = new Map(
        supplierTypings/* KoLItem */.U8.all().map((i) => [i.descid, i])
      );
      var page = (0,apiSupplier/* provider */.M)().visitUrl("displaycollection.php?who=" + userId);
      var lastShelf;
      var itemRegex =
      /<td width=30 height=30><img src=".+?" class=hand onClick='descitem\((\d+),(\d+)\)'><\/td><td valign=center><b>.+?<\/b>(?: \(((?:\d|,)+)\))?<\/td><\/tr>/;
      var shelfRegex = /<font color=white>([^<]+)<\/font>/;var _iterator2 = _createForOfIteratorHelper(

          page.split("<tr>")),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var s = _step2.value;
          var shelfMatch = s.match(shelfRegex);

          if (shelfMatch != null) {
            lastShelf = (0,apiSupplier/* provider */.M)().entityDecode(shelfMatch[1]);
          }

          var match = s.match(itemRegex);

          if (match == null) {
            continue;
          }

          var item = descs.get(match[1]);

          if (item == null) {
            (0,apiSupplier/* provider */.M)().print(
              "Unknown item description: " + match[1] + ", update mafia?",
              utils_colors/* AccountValColors */.HK.attentionGrabbingWarning
            );
            continue;
          }

          map.set(
            { item: item, shelf: lastShelf },
            match[3] == null ? 1 : utils/* AccountValUtils */.E.toInt(match[3])
          );
        }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}

      return map;
    } }]);}();
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
      return ["food", "booze", "spleen item"].includes(
        (0,apiSupplier/* provider */.M)().itemType(item)
      );
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
        return (0,apiSupplier/* provider */.M)().itemType(item).replace(" item", "") == type;
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
      (0,apiSupplier/* provider */.M)().myFullness() + item.fullness >= (0,apiSupplier/* provider */.M)().fullnessLimit() ||
      item.levelreq < (0,apiSupplier/* provider */.M)().myLevel())
      {
        return false;
      }

      return (0,apiSupplier/* provider */.M)().itemType(item) == "food";
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
      (0,apiSupplier/* provider */.M)().myInebriety() + item.inebriety >=
      (0,apiSupplier/* provider */.M)().inebrietyLimit() ||
      item.levelreq < (0,apiSupplier/* provider */.M)().myLevel())
      {
        return false;
      }

      return (0,apiSupplier/* provider */.M)().itemType(item) == "booze";
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
      (0,apiSupplier/* provider */.M)().mySpleenUse() + item.spleen >= (0,apiSupplier/* provider */.M)().spleenLimit() ||
      item.levelreq < (0,apiSupplier/* provider */.M)().myLevel())
      {
        return false;
      }

      return (0,apiSupplier/* provider */.M)().itemType(item) == "spleen item";
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
      return (0,apiSupplier/* provider */.M)().toSlot(item) != supplierTypings/* KoLSlot */.hG.none;
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
      return item.isTradeable() && item.actualItem.discardable;
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
      return (0,apiSupplier/* provider */.M)().itemType(item) == "familiar larva";
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
      if (item.isBound() || !item.actualItem.discardable) {
        return false;
      }

      return (0,apiSupplier/* provider */.M)().autosellPrice(item.actualItem) * 2 >= worth;
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
;// ./src/settings/grimoireArgs.ts
function grimoireArgs_typeof(o) {"@babel/helpers - typeof";return grimoireArgs_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, grimoireArgs_typeof(o);}function grimoireArgs_toConsumableArray(r) {return grimoireArgs_arrayWithoutHoles(r) || grimoireArgs_iterableToArray(r) || grimoireArgs_unsupportedIterableToArray(r) || grimoireArgs_nonIterableSpread();}function grimoireArgs_nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function grimoireArgs_iterableToArray(r) {if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);}function grimoireArgs_arrayWithoutHoles(r) {if (Array.isArray(r)) return grimoireArgs_arrayLikeToArray(r);}function grimoireArgs_createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = grimoireArgs_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t.return || t.return();} finally {if (u) throw o;}} };}function grimoireArgs_unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return grimoireArgs_arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? grimoireArgs_arrayLikeToArray(r, a) : void 0;}}function grimoireArgs_arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {grimoireArgs_defineProperty(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}function grimoireArgs_defineProperty(e, r, t) {return (r = grimoireArgs_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function grimoireArgs_classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function grimoireArgs_defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, grimoireArgs_toPropertyKey(o.key), o);}}function grimoireArgs_createClass(e, r, t) {return r && grimoireArgs_defineProperties(e.prototype, r), t && grimoireArgs_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function grimoireArgs_toPropertyKey(t) {var i = grimoireArgs_toPrimitive(t, "string");return "symbol" == grimoireArgs_typeof(i) ? i : i + "";}function grimoireArgs_toPrimitive(t, r) {if ("object" != grimoireArgs_typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != grimoireArgs_typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);} /**
 * This file is a variation of this PR, adapted for this project. One of the notable changes being allowing negation of flags
 * https://github.com/loathers/grimoire/pull/137
 */



/**
 * Specification for an argument that takes values in T.
 * @member key The key to use when parsing this argument.
 * @member aliases Optional aliases for this argument.
 * @member help Description for the help text.
 * @member options An array of allowable values for this argument.
 *    Each entry has an optional description for the help text as well.
 * @member setting A setting to use for this argument. If not given,
 *    ${script name}_${argument name} is used; set to "" for no setting.
 *    A value in this setting is used as the new default for this argument,
 *    and can be overridden by a command line argument.
 * @member hidden If true, do not display this option in the help text.
 * @member default A default value to use if no value is provided.
 *    Note that 'default' is effectively optional, as all methods that take
 *    an ArgSpec allow for 'default' to be omitted. But it is typed as
 *    non-optional here to enable cool type inference voodoo.
 */









/**
 * Allow the default argument to be optional, in a way that allows for cool type inference.
 */


/**
 * Specification for an argument that takes values in T[].
 *
 * Entries are parsed by splitting on the separator and trimming.
 *
 * @member separator String to use as the separator between entries. If not
 *    given, defaults to ",".
 * @member noTrim If true, do not perform trimming on each entry.
 * @member default A default value to use if no value is provided.
 *    Note that 'default' is effectively optional, as all methods that take
 *    an ArraySpec allow for 'default' to be omitted. But it is typed as
 *    non-optional here to enable cool type inference voodoo.
 */













var Args = /*#__PURE__*/function () {function Args() {grimoireArgs_classCallCheck(this, Args);}return grimoireArgs_createClass(Args, null, [{ key: "custom", value:



















    function custom(
    spec,
    parser,
    valueHelpName)
    {var _spec$options, _spec$options2;
      var raw_options = (_spec$options = spec.options) === null || _spec$options === void 0 ? void 0 : _spec$options.map((option) => option[0]);

      // Check that the default value actually appears in the options.
      if ("default" in spec && raw_options) {
        if (!raw_options.includes(spec.default)) {
          throw "Invalid default value ".concat(spec.default);
        }
      }

      return _objectSpread(_objectSpread({},
      spec), {}, {
        valueHelpName: valueHelpName,
        parser: function (_parser) {function parser(_x) {return _parser.apply(this, arguments);}parser.toString = function () {return _parser.toString();};return parser;}((value) => {
          var parsed_value = parser(value);

          if (parsed_value === undefined || parsed_value instanceof ParseError) {
            return parsed_value;
          }

          if (raw_options) {
            if (!raw_options.includes(parsed_value)) {
              return new ParseError("received ".concat(
                value, " which was not in the allowed options")
              );
            }
          }

          return parsed_value;
        }),
        options: (_spec$options2 = spec.options) === null || _spec$options2 === void 0 ? void 0 : _spec$options2.map((a) => ["".concat(a[0]), a[1]]) });

    }

    /**
     * Create an array argument for a given type.
     * @param spec Specification for this argument.
     * @param argFromSpec A function to create a non-array version of this arg.
     * @returns An argument.
     */ }, { key: "arrayFromArg", value:










    function arrayFromArg(
    spec,
    argFromSpec)
    {var _spec$options3, _spec$separator, _spec$options4;
      // First, construct a non-array version of this argument.
      // We do this by calling argFromSpec in order to extract the parser and
      // valueHelpName (to make it easier to define the functions below).
      //
      // The default argument of an ArraySpec is of type T[], which causes
      // problems, so we must remove it.
      var spec_without_default = _objectSpread({}, spec); // Avoid "the operand of a 'delete' operator must be optional"

      if ("default" in spec_without_default) {
        delete spec_without_default["default"];
      }

      var arg = argFromSpec.call(this, spec_without_default);

      // Next, check that all default values actually appear in the options.
      var raw_options = (_spec$options3 = spec.options) === null || _spec$options3 === void 0 ? void 0 : _spec$options3.map((option) => option[0]);

      if ("default" in spec && raw_options) {var _iterator = grimoireArgs_createForOfIteratorHelper(
            spec.default),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var default_entry = _step.value;
            if (!raw_options.includes(default_entry)) {
              throw "Invalid default value ".concat(spec.default);
            }
          }} catch (err) {_iterator.e(err);} finally {_iterator.f();}
      }

      var separator = (_spec$separator = spec.separator) !== null && _spec$separator !== void 0 ? _spec$separator : ",";

      var arrayParser = (value) => {
        // Split the array
        var values = value.split(separator);

        if (!spec.noTrim) {
          values = values.map((v) => v.trim());
        }

        // Parse all values, return the first error found if any
        var result = values.map((v) => arg.parser(v));
        var error = result.find((v) => v instanceof ParseError);

        if (error) {
          return error;
        }

        var failure_index = result.indexOf(undefined);

        if (failure_index !== -1) {
          return new ParseError("components expected ".concat(
            arg.valueHelpName, " but could not parse ").concat(values[failure_index])
          );
        }

        // Otherwise, all values are good
        return result;
      };

      return _objectSpread(_objectSpread({},
      spec), {}, {
        valueHelpName: "".concat(arg.valueHelpName).concat(separator, " ").concat(arg.valueHelpName).concat(separator, " ..."),
        parser: arrayParser,
        options: (_spec$options4 = spec.options) === null || _spec$options4 === void 0 ? void 0 : _spec$options4.map((a) => ["".concat(a[0]), a[1]]) });

    }

    /**
     * Create a string argument.
     * @param spec Specification for this argument. See {@link ArgSpec} for details.
     */ }, { key: "string", value:


    function string(spec) {
      return this.custom(spec, (value) => value, "TEXT");
    }

    /**
     * Create a string[] argument.
     * @param spec Specification for this argument. See {@link ArraySpec} for details.
     */ }, { key: "strings", value:


    function strings(spec) {
      return this.arrayFromArg(spec, this.string);
    }

    /**
     * Create a number argument.
     * @param spec Specification for this argument. See {@link ArgSpec} for details.
     */ }, { key: "number", value:


    function number(spec) {
      return this.custom(
        spec,
        (value) => isNaN(Number(value)) ? undefined : Number(value),
        "NUMBER"
      );
    }

    /**
     * Create a number[] argument.
     * @param spec Specification for this argument. See {@link ArraySpec} for details.
     */ }, { key: "numbers", value:


    function numbers(spec) {
      return this.arrayFromArg(spec, this.number);
    }

    /**
     * Create a boolean argument.
     * @param spec Specification for this argument. See {@link ArgSpec} for details.
     */ }, { key: "boolean", value:


    function boolean(spec) {
      return this.custom(
        spec,
        (value) => {
          if (value.toLowerCase() === "true") {
            return true;
          }

          if (value.toLowerCase() === "false") {
            return false;
          }

          return undefined;
        },
        "BOOLEAN"
      );
    }

    /**
     * Create a boolean[] argument.
     * @param spec Specification for this argument. See {@link ArraySpec} for details.
     */ }, { key: "booleans", value:


    function booleans(spec) {
      return this.arrayFromArg(spec, this.boolean);
    }

    /**
     * Create a flag.
     * @param spec Specification for this argument. See {@link ArgSpec} for details.
     */ }, { key: "flag", value:


    function flag(spec) {
      return this.custom(
        spec,
        (value) => {
          if (value.toLowerCase() === "true") {
            return true;
          }

          if (value.toLowerCase() === "false") {
            return false;
          }

          return undefined;
        },
        "FLAG"
      );
    }

    /**
     * Create a group of arguments that will be printed separately in the help.
     *
     * Note that keys in the group must still be globally distinct.
     *
     * @param groupName The display name for the group in help.
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     */ }, { key: "group", value:
    function group(
    groupName,
    args,
    hidden)
    {
      return {
        name: groupName,
        args: args,
        hidden: hidden
      };
    }

    /**
     * Create a set of input arguments for a script.
     * @param scriptName Prefix for property names; often the name of the script.
     * @param scriptHelp Brief description of this script, for the help message.
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     * @param options Config options for the args and arg parser.
     * @returns An object which can hold parsed argument values. The keys of this
     *    object are identical to the keys in 'args'.
     */ }, { key: "create", value:
    function create(
    scriptName,
    scriptHelp,
    args,
    options)
    {
      _traverse(args, (keySpec, key) => {
        if (key === "help" || keySpec.key === "help") {
          throw "help is a reserved argument name";
        }
      });

      var argsWithHelp = _objectSpread(_objectSpread({},
      args), {}, {
        help: this.flag({ help: "Show this message and exit.", setting: "" }) });


      // Create an object to hold argument results, with a default value for
      // each argument.
      var res = _objectSpread(_objectSpread({},
      _loadDefaultValues(argsWithHelp)), {}, grimoireArgs_defineProperty(grimoireArgs_defineProperty(grimoireArgs_defineProperty(grimoireArgs_defineProperty({},
      specSymbol, argsWithHelp),
      scriptSymbol, scriptName),
      scriptHelpSymbol, scriptHelp),
      optionsSymbol, options !== null && options !== void 0 ? options : {}));


      if (options !== null && options !== void 0 && options.positionalArgs) {
        var keys = [];
        var metadata = Args.getMetadata(res);
        metadata.traverse((keySpec, key) => {var _keySpec$key;
          keys.push((_keySpec$key = keySpec.key) !== null && _keySpec$key !== void 0 ? _keySpec$key : key);
        });var _iterator2 = grimoireArgs_createForOfIteratorHelper(

            options.positionalArgs),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var arg = _step2.value;
            if (!keys.includes(arg)) {
              throw "Unknown key for positional arg: ".concat(arg);
            }
          }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}
      }

      return res;
    }

    /**
     * Parse the command line input into the provided script arguments.
     * @param args An object to hold the parsed argument values, from Args.create(*).
     * @param command The command line input.
     * @param includeSettings If true, parse values from settings as well.
     */ }, { key: "fill", value:
    function fill(
    args,
    command)

    {var _metadata$options$pos, _metadata$options$cas;var includeSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var metadata = Args.getMetadata(args);

      // Load the list of keys and flags from the arg spec
      // Map lowercase names for case-insensitive and alias matching
      var keys = new Map();
      var flags = new Map();
      var aliased = new Map();
      metadata.traverse((keySpec, key) => {var _keySpec$key2, _keySpec$aliases;
        var name = (_keySpec$key2 = keySpec.key) !== null && _keySpec$key2 !== void 0 ? _keySpec$key2 : key;
        var namesToMap = [name].concat(grimoireArgs_toConsumableArray((_keySpec$aliases = keySpec.aliases) !== null && _keySpec$aliases !== void 0 ? _keySpec$aliases : []));var _iterator3 = grimoireArgs_createForOfIteratorHelper(

            namesToMap),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var _metadata$options;var n = _step3.value;
            var lower = (_metadata$options = metadata.options) !== null && _metadata$options !== void 0 && _metadata$options.caseSensitive ? n : n.toLowerCase();

            if (flags.has(lower) || keys.has(lower)) {
              // Duplicate arg key 'X' is not allowed
              // Duplicate arg key 'X' is already aliased to 'Y'
              // Duplicate arg key 'X' (alias for 'Y') is not allowed
              // Duplicate arg key 'X' (alias for 'Y') is already aliased to 'Y'
              throw "Duplicate arg key '".concat(n, "' ").concat(n !== name ? "(alias for '".concat(name, "') ") : "", "is ").concat(aliased.has(lower) ? "already aliased to '".concat(aliased.get(lower), "'") : "not allowed");
            }

            if (n !== name) {
              aliased.set(lower, name);
            }

            if (
            keySpec.valueHelpName === "FLAG" ||
            keySpec.valueHelpName === "BOOLEAN")
            {
              flags.set(lower, name);
            } else {
              keys.set(lower, name);
            }
          }} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}
      });

      // Parse values from settings.
      if (includeSettings) {
        metadata.traverseAndMaybeSet(args, (keySpec, key) => {var _keySpec$setting, _keySpec$key3;
          var setting = (_keySpec$setting =
          keySpec.setting) !== null && _keySpec$setting !== void 0 ? _keySpec$setting : "".concat(metadata.scriptName, "_").concat((_keySpec$key3 = keySpec.key) !== null && _keySpec$key3 !== void 0 ? _keySpec$key3 : key);

          if (setting === "") {
            return undefined;
          } // no setting

          var value_str = (0,apiSupplier/* provider */.M)().retrieveCache(setting, "small_persist");

          if (value_str === "") {
            return undefined;
          } // no setting

          return parseAndValidate(keySpec, "Setting ".concat(setting), value_str);
        });
      }

      // Parse new argments from the command line
      if (command === undefined || command === "") {
        return;
      }

      var parsed = new CommandParser(
        command,
        keys,
        flags, (_metadata$options$pos =
        metadata.options.positionalArgs) !== null && _metadata$options$pos !== void 0 ? _metadata$options$pos : [], (_metadata$options$cas =
        metadata.options.caseSensitive) !== null && _metadata$options$cas !== void 0 ? _metadata$options$cas : false
      ).parse();
      metadata.traverseAndMaybeSet(args, (keySpec, key) => {var _keySpec$key4;
        var argKey = (_keySpec$key4 = keySpec.key) !== null && _keySpec$key4 !== void 0 ? _keySpec$key4 : key;
        var value_str = parsed.get(argKey);

        if (value_str === undefined) {
          return undefined;
        } // no setting

        return parseAndValidate(keySpec, "Argument ".concat(argKey), value_str);
      });
    }

    /**
     * Parse command line input into a new set of script arguments.
     * @param scriptName Prefix to use in property names; typically the name of the script.
     * @param scriptHelp Brief description of this script, for the help message.
     * @param spec An object specifying the script arguments.
     * @param command The command line input.
     * @param options Config options for the args and arg parser.
     */ }, { key: "parse", value:
    function parse(
    scriptName,
    scriptHelp,
    spec,
    command,
    options)
    {
      var args = this.create(scriptName, scriptHelp, spec, options);
      this.fill(args, command);

      return args;
    }

    /**
     * Print a description of the script arguments to the CLI.
     *
     * First, all top-level argument descriptions are printed in the order they
     * were defined. Afterwards, descriptions for groups of arguments are printed
     * in the order they were defined.
     *
     * @param args An object of parsed arguments, from Args.create(*).
     * @param maxOptionsToDisplay If given, do not list more than this many options for each arg.
     */ }, { key: "showHelp", value:
    function showHelp(
    args,
    maxOptionsToDisplay)
    {var _metadata$options$def;
      var metadata = Args.getMetadata(args);

      (0,apiSupplier/* provider */.M)().printHtml("".concat(metadata.scriptHelp));
      (0,apiSupplier/* provider */.M)().printHtml("");
      (0,apiSupplier/* provider */.M)().printHtml("<b>".concat((_metadata$options$def =
      metadata.options.defaultGroupName) !== null && _metadata$options$def !== void 0 ? _metadata$options$def : "Options", ":</b>")
      );
      metadata.traverse(
        (arg, key) => {
          if (arg.hidden) {
            return;
          }

          this.showArgHelp(metadata, arg, key, maxOptionsToDisplay);
        },
        (group, key) => {
          if (group.hidden) {
            return;
          }

          this.showGroupHelp(metadata, group, key);
        }
      );
    } }, { key: "showGroupHelp", value:

    function showGroupHelp(
    metadata,
    group,
    key)
    {
      (0,apiSupplier/* provider */.M)().printHtml("");
      (0,apiSupplier/* provider */.M)().printHtml("<b>".concat(group.name, ":</b>"));
    } }, { key: "showArgHelp", value:

    function showArgHelp(
    metadata,
    arg,
    key,
    maxOptionsToDisplay)
    {var _arg$key, _arg$help, _arg$setting, _arg$key2, _arg$options;
      var nameText = "<font color='".concat((0,apiSupplier/* provider */.M)().isDarkMode() ? "yellow" : "blue", "'>").concat((_arg$key =
      arg.key) !== null && _arg$key !== void 0 ? _arg$key : key, "</font>");

      var valueText =
      arg.valueHelpName === "FLAG" ?
      "" : "<font color='purple'>".concat(
        arg.valueHelpName, "</font>");
      var helpText = (_arg$help = arg.help) !== null && _arg$help !== void 0 ? _arg$help : "";
      var defaultText =
      "default" in arg ? "<font color='#888888'>[default: ".concat(
        arg.default, "]</font>") :
      "";
      var settingText =
      arg.setting === "" ?
      "" : "<font color='#888888'>[setting: ".concat((_arg$setting =

      arg.setting) !== null && _arg$setting !== void 0 ? _arg$setting : "".concat(metadata.scriptName, "_").concat((_arg$key2 = arg.key) !== null && _arg$key2 !== void 0 ? _arg$key2 : key), "]</font>");

      var aliasesText =
      arg.aliases && arg.aliases.length > 0 ? "<font color='#888888'>[aliases: ".concat(
        arg.aliases.join(", "), "]</font>") :
      "";

      (0,apiSupplier/* provider */.M)().printHtml("&nbsp;&nbsp;".concat(
        [nameText, valueText, "-", helpText, defaultText, settingText, aliasesText].filter(Boolean).join(" "))
      );
      var valueOptions = (_arg$options = arg.options) !== null && _arg$options !== void 0 ? _arg$options : [];

      if (valueOptions.length < (maxOptionsToDisplay !== null && maxOptionsToDisplay !== void 0 ? maxOptionsToDisplay : Number.MAX_VALUE)) {var _iterator4 = grimoireArgs_createForOfIteratorHelper(
            valueOptions),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var option = _step4.value;
            if (option.length === 1 || option[1] === undefined) {
              (0,apiSupplier/* provider */.M)().printHtml("&nbsp;&nbsp;&nbsp;&nbsp;<font color='blue'>".concat(
                nameText, "</font> ").concat(option[0])
              );
            } else {
              (0,apiSupplier/* provider */.M)().printHtml("&nbsp;&nbsp;&nbsp;&nbsp;<font color='blue'>".concat(
                nameText, "</font> ").concat(option[0], " - ").concat(option[1])
              );
            }
          }} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}
      }
    }

    /**
     * Load the metadata information for a set of arguments. Only for advanced usage.
     *
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     * @returns A class containing metadata information.
     */ }, { key: "getMetadata", value:
    function getMetadata(
    args)
    {
      return new WrappedArgMetadata(args);
    } }]);}();


/**
 * A group of arguments.
 */






var ParseError = /*#__PURE__*/grimoireArgs_createClass(


  function ParseError(message) {grimoireArgs_classCallCheck(this, ParseError);grimoireArgs_defineProperty(this, "message", void 0);
    this.message = message;
  });


/**
 * A parser that can transform a string value into the desired type.
 * It may return undefined if given an invalid value.
 */


/**
 * An argument that takes values in T.
 * @member parser The parser to use to built T values.
 * @member valueHelpName The string name of T, e.g. NUMBER.
 */





/**
 * Allow the default argument to be optional, in a way that allows for cool type inference.
 */


/**
 * Metadata for the parsed arguments.
 *
 * This information is hidden within the parsed argument object so that it
 * is invisible to the user but available to fill(*) and showHelp(*).
 */
var specSymbol = Symbol("spec");
var scriptSymbol = Symbol("script");
var scriptHelpSymbol = Symbol("scriptHelp");
var optionsSymbol = Symbol("options");







/**
 * Construct the object type for the parsed arguments with typescript voodoo.
 *
 * The keys for the parsed argument object match the keys from the argument
 * specifications. That is, for each (key: spec) pair in the argument spec
 * object, there is a (key: value) in the parsed argument object.
 *
 * If spec has type Arg<T> (i.e., has a default), then value has type T.
 * If spec has type ArgNoDefault<T>, the value has type T | undefined.
 *
 * Finally, there are hidden keys in ArgMetadata for fill(*) and showHelp(*).
 */














/**
 * Parse a string into a value for a given argument, throwing if the parsing fails.
 * @param arg An argument that takes values in T.
 * @param source A description of where this value came from, for the error message.
 * @param value The value to parse.
 * @returns the parsed value.
 */
function parseAndValidate(
arg,
source,
value)
{
  var parsed_value;

  try {
    parsed_value = arg.parser(value);
  } catch (_unused) {
    parsed_value = undefined;
  }

  if (parsed_value === undefined) {
    throw "".concat(source, " expected ").concat(arg.valueHelpName, " but could not parse ").concat(value);
  }

  if (parsed_value instanceof ParseError) {
    throw "".concat(source, " ").concat(parsed_value.message);
  }

  return parsed_value;
}

/**
 * A class that reveals the hidden metadata and specs for arguments.
 *
 * Only for advanced usage.
 */var
WrappedArgMetadata = /*#__PURE__*/function () {





  function WrappedArgMetadata(args) {grimoireArgs_classCallCheck(this, WrappedArgMetadata);grimoireArgs_defineProperty(this, "spec", void 0);grimoireArgs_defineProperty(this, "scriptName", void 0);grimoireArgs_defineProperty(this, "scriptHelp", void 0);grimoireArgs_defineProperty(this, "options", void 0);
    this.spec = args[specSymbol];
    this.scriptName = args[scriptSymbol];
    this.scriptHelp = args[scriptHelpSymbol];
    this.options = args[optionsSymbol];
  }

  /**
   * Create a parsed args object from this spec using all default values.
   */return grimoireArgs_createClass(WrappedArgMetadata, [{ key: "loadDefaultValues", value:
    function loadDefaultValues() {
      return _loadDefaultValues(this.spec);
    }

    /**
     * Traverse the spec and possibly generate a value for each argument.
     *
     * @param result The object to hold the resulting argument values, typically
     *    the result of loadDefaultValues().
     * @param setTo A function to generate an argument value from each arg spec.
     *    If this function returns undefined, then the argument value is unchanged.
     */ }, { key: "traverseAndMaybeSet", value:
    function traverseAndMaybeSet(
    result,
    setTo)
    {
      return _traverseAndMaybeSet(this.spec, result, setTo);
    }

    /**
     * Traverse the spec and call a method for each argument.
     *
     * @param process A function to call at each arg spec.
     */ }, { key: "traverse", value:
    function traverse(
    process,
    onGroup)
    {
      return _traverse(this.spec, process, onGroup);
    } }]);}();


/**
 * Create a parsed args object from a spec using all default values.
 *
 * @param spec The spec for all arguments.
 */
function _loadDefaultValues(spec) {
  var result = {};

  for (var _k in spec) {
    var argSpec = spec[_k];

    if ("args" in argSpec) {
      result[_k] = _loadDefaultValues(argSpec.args);
    } else {
      if ("default" in argSpec) {
        result[_k] = argSpec.default;
      } else {
        result[_k] = undefined;
      }
    }
  }

  return result;
}

/**
 * Traverse the spec and possibly generate a value for each argument.
 *
 * @param spec The spec for all arguments.
 * @param result The object to hold the resulting argument values.
 * @param setTo A function to generate an argument value from each arg spec.
 *    If this function returns undefined, then the argument value is unchanged.
 */
function _traverseAndMaybeSet(
spec,
result,
setTo)
{
  var groups = [];

  for (var _k2 in spec) {
    var argSpec = spec[_k2];

    if ("args" in argSpec) {
      groups.push([argSpec, _k2]);
    } else {
      var _value = setTo(argSpec, _k2);

      if (_value === undefined) {
        continue;
      }

      result[_k2] = _value;
    }
  }

  for (var _i = 0, _groups = groups; _i < _groups.length; _i++) {var group_and_key = _groups[_i];
    _traverseAndMaybeSet(
      group_and_key[0].args,
      result[group_and_key[1]],
      setTo
    );
  }
}

/**
 * Traverse the spec and possibly generate a value for each argument.
 *
 * @param spec The spec for all arguments.
 * @param process A function to call at each arg spec.
 */
function _traverse(
spec,
process,
onGroup)
{
  var groups = [];

  for (var _k3 in spec) {
    var argSpec = spec[_k3];

    if ("args" in argSpec) {
      groups.push([argSpec, _k3]);
    } else {
      process(argSpec, _k3);
    }
  }

  for (var _i2 = 0, _groups2 = groups; _i2 < _groups2.length; _i2++) {var group_and_key = _groups2[_i2];
    onGroup === null || onGroup === void 0 || onGroup(group_and_key[0], group_and_key[1]);
    _traverse(group_and_key[0].args, process, onGroup);
  }
}

/**
 * A parser to extract key/value pairs from a command line input.
 * @member command The command line input.
 * @member keys The set of valid keys that can appear.
 * @member flags The set of valid flags that can appear.
 * @member index An internal marker for the progress of the parser over the input.
 */
/**
 * A parser to extract key/value pairs from a command line input.
 * @member command The command line input.
 * @member keys The set of valid keys that can appear.
 * @member flags The set of valid flags that can appear.
 * @member index An internal marker for the progress of the parser over the input.
 */var
CommandParser = /*#__PURE__*/function () {











  function CommandParser(
  command,
  keys,
  flags,
  positionalArgs,
  caseSensitive)
  {grimoireArgs_classCallCheck(this, CommandParser);grimoireArgs_defineProperty(this, "command", void 0);grimoireArgs_defineProperty(this, "keys", void 0);grimoireArgs_defineProperty(this, "flags", void 0);grimoireArgs_defineProperty(this, "positionalArgs", void 0);grimoireArgs_defineProperty(this, "positionalArgsParsed", void 0);grimoireArgs_defineProperty(this, "index", void 0);grimoireArgs_defineProperty(this, "prevUnquotedKey", void 0);grimoireArgs_defineProperty(this, "caseSensitive", void 0);
    this.command = command;
    this.index = 0;
    this.keys = keys;
    this.flags = flags;
    this.positionalArgs = positionalArgs;
    this.positionalArgsParsed = 0;
    this.caseSensitive = caseSensitive;
  }

  /**
   * Perform the parsing of (key, value) pairs.
   * @returns The set of extracted (key, value) pairs.
   */return grimoireArgs_createClass(CommandParser, [{ key: "parse", value:
    function parse() {
      this.index = 0; // reset the parser
      var result = new Map();

      while (!this.finished()) {var _ref, _this$flags$get;
        // A flag F may appear as !F to be parsed as false.
        var parsing_negative_flag = false;
        var flag_char = "";

        if (this.peek() === "!" || this.peek() === "-") {
          parsing_negative_flag = true;
          flag_char = this.peek();
          this.consume([flag_char]);
        }

        var startIndex = this.index;
        var _key = this.parseKey();
        var lowerKey = this.caseSensitive ? _key : _key.toLowerCase();

        var resolvedKey = (_ref = (_this$flags$get =
        this.flags.get(lowerKey)) !== null && _this$flags$get !== void 0 ? _this$flags$get : this.keys.get(lowerKey)) !== null && _ref !== void 0 ? _ref : lowerKey;

        if (result.has(resolvedKey)) {var _result$get;
          throw "Duplicate key ".concat(_key, " (first set to ").concat((_result$get = result.get(resolvedKey)) !== null && _result$get !== void 0 ? _result$get : "", ")");
        }

        if (this.flags.has(lowerKey)) {
          // The key corresponds to a flag.
          if (this.peek() === "=") {var _this$prev;
            this.consume(["="]);
            var _value2 = this.parseValue();

            if (["'", '"'].includes((_this$prev = this.prev()) !== null && _this$prev !== void 0 ? _this$prev : "")) {
              this.prevUnquotedKey = undefined;
            } else {
              this.prevUnquotedKey = resolvedKey;
            }

            if (!this.finished()) {
              this.consume([" "]);
            }

            result.set(
              resolvedKey,
              parsing_negative_flag ? flag_char + _value2 : _value2
            );
          } else {
            // Parse [key] as true and ![key] as false.
            result.set(resolvedKey, parsing_negative_flag ? "false" : "true");

            if (!this.finished()) {
              this.consume([" "]);
            }

            this.prevUnquotedKey = undefined;
          }
        } else if (this.keys.has(lowerKey)) {var _this$prev2;
          // Parse [key]=[value] or [key] [value]
          this.consume(["=", " "]);
          var _value3 = this.parseValue();

          if (["'", '"'].includes((_this$prev2 = this.prev()) !== null && _this$prev2 !== void 0 ? _this$prev2 : "")) {
            this.prevUnquotedKey = undefined;
          } else {
            this.prevUnquotedKey = resolvedKey;
          }

          if (!this.finished()) {
            this.consume([" "]);
          }

          result.set(
            resolvedKey,
            parsing_negative_flag ? flag_char + _value3 : _value3
          );
        } else if (
        this.positionalArgsParsed < this.positionalArgs.length &&
        this.peek() !== "=")
        {var _this$prev3;
          // Parse [value] as the next positional arg
          var positionalKey = this.positionalArgs[this.positionalArgsParsed];
          this.positionalArgsParsed++;

          this.index = startIndex; // back up to reparse the key as a value
          var _value4 = this.parseValue();

          if (["'", '"'].includes((_this$prev3 = this.prev()) !== null && _this$prev3 !== void 0 ? _this$prev3 : "")) {
            this.prevUnquotedKey = undefined;
          } else {
            this.prevUnquotedKey = _key;
          }

          if (!this.finished()) {
            this.consume([" "]);
          }

          if (result.has(positionalKey)) {var _result$get2;
            throw "Cannot assign ".concat(_value4, " to ").concat(positionalKey, " (positionally) since ").concat(positionalKey, " was already set to ").concat((_result$get2 =
            result.get(positionalKey)) !== null && _result$get2 !== void 0 ? _result$get2 : "");

          }

          result.set(
            positionalKey,
            parsing_negative_flag ? flag_char + _value4 : _value4
          );
        } else {
          // Key not found; include a better error message if it is possible for quotes to have been missed
          if (this.prevUnquotedKey && this.peek() !== "=") {
            throw "Unknown argument: ".concat(_key, " (if this should have been parsed as part of ").concat(this.prevUnquotedKey, ", you should surround the entire value in quotes)");
          } else {
            throw "Unknown argument: ".concat(_key);
          }
        }
      }

      return result;
    }

    /**
     * @returns True if the entire command has been parsed.
     */ }, { key: "finished", value:
    function finished() {
      return this.index >= this.command.length;
    }

    /**
     * @returns The next character to parse, if it exists.
     */ }, { key: "peek", value:
    function peek() {
      if (this.index >= this.command.length) {
        return undefined;
      }

      return this.command.charAt(this.index);
    }

    /**
     * @returns The character just parsed, if it exists.
     */ }, { key: "prev", value:
    function prev() {
      if (this.index <= 0) {
        return undefined;
      }

      if (this.index >= this.command.length + 1) {
        return undefined;
      }

      return this.command.charAt(this.index - 1);
    }

    /**
     * Advance the internal marker over the next expected character.
     * Throws an error on unexpected characters.
     *
     * @param allowed Characters that are expected.
     */ }, { key: "consume", value:
    function consume(allowed) {var _this$peek;
      if (this.finished()) {
        throw "Expected ".concat(allowed);
      }

      if (allowed.includes((_this$peek = this.peek()) !== null && _this$peek !== void 0 ? _this$peek : "")) {
        this.index += 1;
      }
    }

    /**
     * Find the next occurance of one of the provided characters, or the end of
     * the string if the characters never appear again.
     *
     * @param searchValue The characters to locate.
     */ }, { key: "findNext", value:
    function findNext(searchValue) {
      var result = this.command.length;var _iterator5 = grimoireArgs_createForOfIteratorHelper(

          searchValue),_step5;try {for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {var _value5 = _step5.value;
          var index = this.command.indexOf(_value5, this.index);

          if (index !== -1 && index < result) {
            result = index;
          }
        }} catch (err) {_iterator5.e(err);} finally {_iterator5.f();}

      return result;
    }

    /**
     * Starting from the internal marker, parse a single key.
     * This also advances the internal marker.
     *
     * @returns The next key.
     */ }, { key: "parseKey", value:
    function parseKey() {
      var keyEnd = this.findNext(["=", " "]);
      var key = this.command.substring(this.index, keyEnd);
      this.index = keyEnd;

      return key;
    }

    /**
     * Starting from the internal marker, parse a single value.
     * This also advances the internal marker.
     *
     * Values are a single word or enclosed in matching quotes, i.e. one of:
     *    "[^"]*"
     *    '[^']*"
     *    [^'"][^ ]*
     *
     * Quotes only define a quoted value if it appears at the start.
     * A closing quote is valid only when followed by space or nothing.
     * Backslashes in a quote, escapes the next character
     *
     * @returns The next value.
     */ }, { key: "parseValue", value:
    function parseValue() {
      var ch = this.peek();

      if (ch === '"' || ch === "'") {
        return this.parseQuotedValue(ch);
      }

      var first = this.index;
      this.index = this.findNext([" "]);

      return this.command.substring(first, this.index);
    } }, { key: "parseQuotedValue", value:

    function parseQuotedValue(quote) {
      this.index++; // consume opening quote

      var out = "";

      while (!this.finished()) {
        var ch = this.peek();

        // Backslash always consumes itself and directly writes the next char
        if (ch === "\\") {
          this.index++;

          if (this.finished()) {
            out += "\\";
            break;
          }

          out += this.peek();
          this.index++;
          continue;
        } else if (ch === quote) {
          var next = this.command.charAt(this.index + 1);

          // Closing quote only matters before space/EOL
          if (next === "" || next === " ") {
            this.index++;

            return out;
          }
        }

        out += ch;
        this.index++;
      }

      throw "No closing ".concat(quote, " found for ").concat(quote).concat(out);
    } }]);}();
;// external "kolmafia"
const external_kolmafia_namespaceObject = require("kolmafia");
;// ./src/settings/settings.ts
function settings_typeof(o) {"@babel/helpers - typeof";return settings_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, settings_typeof(o);}function _slicedToArray(r, e) {return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || settings_unsupportedIterableToArray(r, e) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function _arrayWithHoles(r) {if (Array.isArray(r)) return r;}function settings_classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function settings_defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, settings_toPropertyKey(o.key), o);}}function settings_createClass(e, r, t) {return r && settings_defineProperties(e.prototype, r), t && settings_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function settings_toConsumableArray(r) {return settings_arrayWithoutHoles(r) || settings_iterableToArray(r) || settings_unsupportedIterableToArray(r) || settings_nonIterableSpread();}function settings_nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function settings_iterableToArray(r) {if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);}function settings_arrayWithoutHoles(r) {if (Array.isArray(r)) return settings_arrayLikeToArray(r);}function settings_ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function settings_objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? settings_ownKeys(Object(t), !0).forEach(function (r) {settings_defineProperty(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : settings_ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}function settings_defineProperty(e, r, t) {return (r = settings_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function settings_toPropertyKey(t) {var i = settings_toPrimitive(t, "string");return "symbol" == settings_typeof(i) ? i : i + "";}function settings_toPrimitive(t, r) {if ("object" != settings_typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != settings_typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}function settings_createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = settings_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t.return || t.return();} finally {if (u) throw o;}} };}function settings_unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return settings_arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? settings_arrayLikeToArray(r, a) : void 0;}}function settings_arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}






var sortBys = [
{
  name: "TOTAL_PRICE",
  aliases: ["TOTAL_MEAT"],
  assignValue: function assignValue(item, price, owned, maxPrice) {
    item.sortValue =
    price.price <= 0 ?
    maxPrice :
    1 / item.worthMultiplier * price.price * owned.get(item);
  }
},
{
  name: "PRICE",
  aliases: ["MEAT"],
  assignValue: function assignValue(item, price, owned, maxPrice) {
    item.sortValue =
    price.price <= 0 ? maxPrice : 1 / item.worthMultiplier * price.price;
  }
},
{
  name: "QUANTITY",
  aliases: ["COUNT", "AMOUNT"],
  assignValue: function assignValue(item, price, owned, maxPrice) {
    item.sortValue = owned.get(item);
  }
},
{
  name: "NAME",
  aliases: [],
  assignValue: undefined,
  fallback: (v1, v2) => v1.name.localeCompare(v2.name)
},
{
  name: "ITEM_ID",
  aliases: ["ID"],
  assignValue: function assignValue(item, price, owned, maxPrice) {
    item.sortValue = item.tradeableItem.id;
  }
},
{
  name: "SALES_VOLUME",
  aliases: ["SALES", "SOLD"],
  assignValue: function assignValue(item, price, owned, maxPrice) {
    item.sortValue = price.volume;
  }
}];


function numberParser(arg) {var _match$;
  var cleaned = arg;

  while (cleaned.includes(",") || cleaned.includes("_")) {
    cleaned = cleaned.replace(/[,_]/g, "");
  }

  var match = cleaned.match(/^((?:\d+)|(?:\d*\.\d+))([mkbt]?)$/i);

  if (match == null) {
    return new ParseError("Invalid number format");
  }

  var num = parseFloat(match[1]);
  var mod = (_match$ = match[2]) === null || _match$ === void 0 ? void 0 : _match$.toLowerCase();

  if (mod == "t") {
    num *= 1000000000000;
  } else if (mod == "b") {
    num *= 1000000000;
  } else if (mod == "m") {
    num *= 1000000;
  } else if (mod == "k") {
    num *= 1000;
  }

  return num;
}

function playerParser(arg) {
  var v = arg;

  if (!v.match(/^[0-9]+$/)) {
    v = (0,apiSupplier/* provider */.M)().getPlayerId(v);

    if (!v.match(/^[0-9]+$/)) {
      return new ParseError("Failed to convert ".concat(arg, " into a player ID"));
    }
  }

  return parseInt(v);
}

function sortByParser(arg) {
  var neg = /^[-!]/.test(arg);
  var v = arg.
  toLowerCase().
  replace("_", "").
  substring(neg ? 1 : 0);var _iterator = settings_createForOfIteratorHelper(

      sortBys),_step;try {var _loop = function _loop() {var sort = _step.value;
        if (
        sort.name.toLowerCase().replace("_", "") != v &&
        !sort.aliases.some((a) => a.toLowerCase().replace("_", "") == v))
        {return 0; // continue

        }

        // Negate the sort
        if (neg) {return { v: settings_objectSpread(settings_objectSpread({},

            sort), {}, {
              assignValue: sort.assignValue ?
              (item, price, owned, maxPrice) => {
                sort.assignValue(item, price, owned, maxPrice);
                item.sortValue = -item.sortValue;
              } :
              undefined,
              fallback: sort.fallback ?
              (item1, item2) => {
                return -sort.fallback(item1, item2);
              } :
              undefined }) };

        }return { v:

          sort };
      },_ret;for (_iterator.s(); !(_step = _iterator.n()).done;) {_ret = _loop();if (_ret === 0) continue;if (_ret) return _ret.v;}} catch (err) {_iterator.e(err);} finally {_iterator.f();}

  return new ParseError("Unknown sort option: ".concat(arg));
}

function colorSchemeParser(arg) {
  var v = arg.toLowerCase();

  if (!(0,utils_colors/* getAccountvalColors */.Xf)().includes(v)) {
    return new ParseError("Unknown color scheme: ".concat(arg));
  }

  return v;
}

function logTypeParser(arg) {
  var v = arg.toLowerCase();

  if (v !== "plain" && v !== "fancy") {
    return new ParseError("Unknown log type: ".concat(arg));
  }

  return v;
}

var defaultMaxNaturalPrice =
(new Date().getFullYear() - 2021) * 2000000000;

var staticAccountValSpec = {
  fetchCloset: Args.boolean({
    key: "closet",
    aliases: ["clos"],
    help: "Should it fetch from the closet"
  }),
  fetchStorage: Args.boolean({
    key: "storage",
    aliases: ["stor", "hagnk", "hagnks"],
    help: "Should it fetch from storage"
  }),
  fetchShop: Args.boolean({
    key: "store",
    aliases: ["mall", "shop"],
    help: "Should it fetch from the shop"
  }),
  fetchInventory: Args.boolean({
    key: "inventory",
    aliases: ["inv"],
    help: "Should it fetch from your inventory"
  }),
  fetchDisplaycase: Args.boolean({
    key: "displaycase",
    aliases: ["display", "dc"],
    help: "Should it fetch from the displaycase"
  }),
  fetchClan: Args.boolean({
    key: "clan",
    aliases: ["stash"],
    help: "Should it check clan's stash? False by default"
  }),
  fetchSession: Args.boolean({
    key: "session",
    help: "Should it fetch using your current session of items acquired? False by default"
  }),
  doTradeables: Args.boolean({
    key: "tradeable",
    aliases: ["tradeables", "trade", "tradable"],
    help: "Should it do tradeables"
  }),
  doNonTradeables: Args.boolean({
    key: "notrade",
    aliases: [
    "nontrade",
    "notradeable",
    "notradable",
    "nontradeable",
    "notradeables",
    "nontradeables",
    "untrade",
    "untradeable",
    "untradeables"],

    help: "Should it do non-tradeables"
  }),
  fetchFamiliars: Args.boolean({
    key: "familiar",
    aliases: ["familiars", "fam", "fams"],
    help: "Should it do familiars. Bound being true also means this is true if not set"
  }),
  fetchSnapshot: Args.boolean({
    key: "snapshot",
    help: "Should it attempt to use av-snapshot?"
  }),
  doBound: Args.boolean({
    key: "bound",
    aliases: ["bind", "bounded", "binds", "binded"],
    help: "Should it do items that are bound to your account"
  }),
  minimumMeat: Args.custom(
    {
      key: "meat",
      aliases: ["minmeat", "minimummeat", "min-meat", "minprice", "price"],
      help: "Each item total worth, at least this amount.",
      default: 0
    },
    numberParser,
    "NUMBER"
  ),
  minimumAmount: Args.custom(
    {
      key: "amount",
      aliases: ["count", "minimumamount", "minamount"],
      help: "At least this many items",
      default: 1
    },
    numberParser,
    "NUMBER"
  ),
  displayLimit: Args.number({
    key: "limit",
    aliases: ["displaylimit", "maxdisplay", "lines"],
    help: "Limit results to display this amount",
    default: 100
  }),
  playerId: Args.custom(
    {
      key: "player",
      aliases: [
      "playerid",
      "playername",
      "user",
      "who",
      "target",
      "name",
      "username"],

      help: "Target another player's DC, shop, av-snapshot (if exists). Can do player=\"John Smith\" for spaces",
      default: 0
    },
    playerParser,
    "PLAYER_ID"
  ),
  doSuperFast: Args.boolean({
    key: "fast",
    aliases: ["superfast", "speed", "quick", "rough"],
    help: "Try resolve everything with historical price",
    default: false
  }),
  maxAge: Args.number({
    key: "age",
    aliases: ["maxage", "days"],
    help: "The max days a price is allowed to be outdated",
    default: 999999
  }),
  sortBy: Args.custom(
    {
      key: "sort",
      aliases: ["sortby", "sorted"],
      help: "What we should sort the results by, prefix with ! or - to reverse sort. Supports: ".concat(sortBys.
      map((s) => "".concat(s.name, " (").concat(s.aliases.join(", "), ")")).
      join(", ").
      toUpperCase()),
      default: sortByParser("TOTAL_PRICE")
    },
    sortByParser,
    "SORT_BY"
  ),
  reverseSort: Args.boolean({
    key: "reverse",
    aliases: ["desc", "descending"],
    help: "Reverse the sort order",
    default: false
  }),
  shopWorth: Args.boolean({
    key: "worth",
    aliases: ["shopworth", "pricing", "prices"],
    help: "Seperates items in shop from the other items, and shows how under/overpriced they are. This can be inaccurate"
  }),
  javascriptFilter: Args.string({
    key: "jsfilter",
    aliases: ["javascriptfilter", "javascript", "js"],
    help: ["Filters if an item can be shown, provides an item & amount and expects a boolean.", "\"quotes\" must be escaped if the next character is a space.", "Example: jsfilter=\"(item, amount, worth, sales) => itemType(item) == \"booze\\\" && item.name.includes(\"beer\")"].



    join(" "),
    default: ""
  }),
  sales: Args.number({
    key: "sales",
    aliases: ["sold"],
    help: "Hides items that have less than this amount of sales",
    default: 0
  }),
  useLastSold: Args.boolean({
    key: "useLastSold",
    aliases: ["lastSold", "soldprice"],
    help: "Resolve prices by their last sold",
    default: false
  }),
  brief: Args.boolean({
    key: "brief",
    help: "Prints out a single line as the final result, the total meat.",
    default: false
  }),
  colorScheme: Args.custom(
    {
      key: "color",
      aliases: ["colors", "colorscheme", "scheme"],
      help:
      "What color schemes to use, set `accountvalColorScheme` pref to change the default. Supports: " +
      (0,utils_colors/* getAccountvalColors */.Xf)().join(", "),
      default: "default",
      options: ["default"].concat(settings_toConsumableArray((0,utils_colors/* getAccountvalColors */.Xf)())).map((s) => [s])
    },
    colorSchemeParser,
    "COLOR_SCHEME"
  ),
  maxNaturalPrice: Args.custom(
    {
      key: "max",
      aliases: ["mallmax"],
      help: "The max natural price an item will reach before it's capped and called mall extinct. Default increases by 2b every year.",
      default: defaultMaxNaturalPrice,
      setting: "accountval_maxNaturalPrice"
    },
    numberParser,
    "NUMBER"
  ),
  doCategories: Args.boolean({
    key: "category",
    aliases: ["categories", "shelf", "shelves"],
    help: "Used only for Display Cases at this point, seperates the items into categories"
  }),
  showSingleItemWorth: Args.boolean({
    key: "each",
    help: "Displays the individual price of each item instead of the total, works best with `sort=meat`"
  }),
  dateToFetch: Args.string({
    key: "date",
    aliases: ["fetchdate", "historical", "time", "when", "at"],
    help: ["View everything with the prices of the past, either provide a '1d2m3y' which will automatically be converted and capped,", "or a specified date 'DD-MM-YYYY' which cannot be older than 22-08-2023.", "This obviously won't work for items that didn't exist then, and will make a backend call to 'kolprices.lib.co.nz/files/:date'"].



    join(" ")
  }),
  logOutputAs: Args.custom(
    {
      key: "text",
      aliases: ["logtype", "formatting"],
      help: ["If accountval should log everything with \"fancy\" text, which means html, or \"plain\" which means the output is also logged to your session log,", "but will have no hover text or colors.", "Try looking into kolmafia 'mirror' if you want the output as html. Example usage: \"text=plain\". Change the default by using \"set accountval_text=plain\""].



      join(" "),
      default: "fancy",
      setting: "accountval_text",
      options: [["plain"], ["fancy"]]
    },
    logTypeParser,
    "TEXT_TYPE"
  ),
  logOutputTo: Args.string({
    key: "output",
    help: ["Send the output of accountval to a file instead of printing into cli, eg 'output=accountval.html' would send it into the 'data/accountval.html'.", "If the file ends with .html, it will entity encode all non-html lines."].


    join(" "),
    default: ""
  }),
  pricegun: Args.boolean({
    key: "pricegun",
    help: "Resolve prices using pricegun. This will be slower.",
    default: false
  }),
  mallPrice: Args.boolean({
    key: "mallPrice",
    help: ["Has accountval calculate prices from mallprice, it will load (and cache) ".concat(
      Math.ceil(external_kolmafia_namespaceObject.Item.all().filter((i) => i.tradeable).length / 30), " pages of items if needed."), "Beware that although this is cached, you should avoid using this setting if you're going to be running accountval a dozen times, restarting after each or something,", "as that many mall searches can't be differnated from mall abuse by TPTB"].


    join(" "),
    default: false
  }),
  showPresetFilters: Args.boolean({
    key: "presets",
    help: "Show the preset filters",
    setting: ""
  }),

  debug: Args.boolean({ hidden: true, default: false }),
  settings: Args.boolean({ hidden: true, default: false }),
  timings: Args.boolean({ hidden: true, default: false })
};





var AccountValSettings = /*#__PURE__*/function () {function AccountValSettings() {settings_classCallCheck(this, AccountValSettings);



    // These are not exposed
    settings_defineProperty(this, "fetchingEverywhereish", true);settings_defineProperty(this, "fetchingNonItems",
    true);settings_defineProperty(this, "presets",
    []);settings_defineProperty(this, "settingsDebug",
    false);}return settings_createClass(AccountValSettings, [{ key: "doSettings", value:

    function doSettings(command) {var _AccountValColors$hel, _AccountValColors$min;
      var errors = [];

      var presetSpec = {};var _iterator2 = settings_createForOfIteratorHelper(

          getPresets()),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var preset = _step2.value;
          var names = preset.name();
          presetSpec["preset_".concat(names[0])] = Args.boolean({
            key: names[0],
            aliases: names.slice(1),
            help: preset.desc(),
            setting: "accountval_preset_".concat(names[0]),
            hidden: true
          });
        }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}

      var fullSpec = settings_objectSpread(settings_objectSpread({},
      staticAccountValSpec), {}, {
        presetFilters: Args.group("Preset Filters", presetSpec, true) });


      var scriptHelp = ["<font color=".concat(
        utils_colors/* AccountValColors */.HK.helpfulStateInfo, ">AccountVal is a script to check what your account is worth, and find the good stuff fast.</font>"), "<font color=".concat(
        utils_colors/* AccountValColors */.HK.helpfulStateInfo, ">You can provide these as a parameter to accountval to do other stuff than the base script.</font>"), "<font color='".concat((_AccountValColors$hel =
      utils_colors/* AccountValColors */.HK === null || utils_colors/* AccountValColors */.HK === void 0 ? void 0 : utils_colors/* AccountValColors */.HK.helpfulStateInfo) !== null && _AccountValColors$hel !== void 0 ? _AccountValColors$hel : "blue", "'>Use ! or - to negate a boolean, or use '='. Eg:</font><font color='gray'> -bound !bound bound=false</font>"), "<font color='".concat((_AccountValColors$min =
      utils_colors/* AccountValColors */.HK === null || utils_colors/* AccountValColors */.HK === void 0 ? void 0 : utils_colors/* AccountValColors */.HK.minorNote) !== null && _AccountValColors$min !== void 0 ? _AccountValColors$min : "gray", "'>Disclaimer: The prices shown are not absolute, and can over/understate what it really is worth.</font>")];


      try {
        Object.assign(
          this,
          Args.parse("accountval", scriptHelp.join("\n"), fullSpec, command)
        );
      } catch (e) {
        errors.push(e.message || e.toString());

        return errors;
      }

      (0,utils_colors/* loadAccountvalColors */.x5)(this.colorScheme);

      // Resolve Presets dynamically
      var _iterator3 = settings_createForOfIteratorHelper(getPresets()),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var _presetFilters;var _preset = _step3.value;
          var _names = _preset.name();
          var presetVal = (_presetFilters = this.presetFilters) === null || _presetFilters === void 0 ? void 0 : _presetFilters["preset_".concat(_names[0])];

          if (presetVal !== undefined) {
            this.presets.push({ preset: _preset, negated: !presetVal });
          }
        }} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}

      this.resolveFetchSources();

      if (this.debug || this.settings) {
        this.settingsDebug = true;
      }

      if (this.debug || this.timings) {
        AccountValSettings.timingsDebug = true;
      }

      if (this.settingsDebug) {
        for (var _i = 0, _Object$keys = Object.keys(this); _i < _Object$keys.length; _i++) {var setting = _Object$keys[_i];
          (0,apiSupplier/* provider */.M)().print("".concat(setting, " = ").concat(this[setting]));
        }
      }

      return errors;
    } }, { key: "resolveFetchSources", value:

    function resolveFetchSources() {var _this$fetchClan, _this$fetchSession;
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

      var wasSet = Object.entries(this).
      filter((_ref) => {var _ref2 = _slicedToArray(_ref, 2),k = _ref2[0],v = _ref2[1];return v !== undefined;}).
      map((_ref3) => {var _ref4 = _slicedToArray(_ref3, 1),k = _ref4[0];return k;});

      // Unsupplied properties are undefined
      this.fetchingEverywhereish =
      !this.fetchSession &&
      !this.fetchClan &&
      fetchSources.find((v) => wasSet.includes(v) && this[v]) == null;

      this.fetchClan = (_this$fetchClan = this.fetchClan) !== null && _this$fetchClan !== void 0 ? _this$fetchClan : false;
      this.fetchSession = (_this$fetchSession = this.fetchSession) !== null && _this$fetchSession !== void 0 ? _this$fetchSession : false;

      if (!wasSet.includes("doTradeables")) {
        this.doTradeables = this.doBound ?
        false :
        wasSet.includes("doNonTradeables") ?
        !this.doNonTradeables :
        true;
      }

      if (!wasSet.includes("doNonTradeables")) {
        this.doNonTradeables = this.doBound ?
        false :
        wasSet.includes("doTradeables") ?
        !this.doTradeables :
        true;
      }

      if (!wasSet.includes("doBound")) {
        this.doBound =
        (this.doTradeables || this.fetchingEverywhereish) &&
        this.doNonTradeables;
      }

      if (
      wasSet.includes("fetchFamiliars") &&
      this.presets.find((p) => p.preset.name().includes("hatchling")))
      {
        this.fetchFamiliars = false;
      } else if (
      !wasSet.includes("fetchFamiliars") &&
      this.fetchingEverywhereish)
      {
        this.fetchFamiliars = this.doBound;
      }

      for (var _i2 = 0, _fetchSources = fetchSources; _i2 < _fetchSources.length; _i2++) {var fetchSource = _fetchSources[_i2];
        if (this[fetchSource] !== undefined) {
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
    } }]);}();settings_defineProperty(AccountValSettings, "timingsDebug", false);settings_defineProperty(AccountValSettings, "defaultMaxNaturalPrice", defaultMaxNaturalPrice);


var PricingSettings = /*#__PURE__*/function () {function PricingSettings() {settings_classCallCheck(this, PricingSettings);settings_defineProperty(this, "expensivePricesAt",
    40000000);settings_defineProperty(this, "cheapTotalsLessThan",
    20000000);settings_defineProperty(this, "cheapPricesLessThan",
    2000000);settings_defineProperty(this, "maxPriceAge", void 0);settings_defineProperty(this, "mallPrice", void 0);settings_defineProperty(this, "dateToFetch", void 0);settings_defineProperty(this, "globalSettings", void 0);}return settings_createClass(PricingSettings, [{ key: "getMaxPriceAge", value:





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
var _AccValTiming;function timings_typeof(o) {"@babel/helpers - typeof";return timings_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, timings_typeof(o);}function timings_createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = timings_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t.return || t.return();} finally {if (u) throw o;}} };}function timings_toConsumableArray(r) {return timings_arrayWithoutHoles(r) || timings_iterableToArray(r) || timings_unsupportedIterableToArray(r) || timings_nonIterableSpread();}function timings_nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function timings_iterableToArray(r) {if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);}function timings_arrayWithoutHoles(r) {if (Array.isArray(r)) return timings_arrayLikeToArray(r);}function timings_slicedToArray(r, e) {return timings_arrayWithHoles(r) || timings_iterableToArrayLimit(r, e) || timings_unsupportedIterableToArray(r, e) || timings_nonIterableRest();}function timings_nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function timings_unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return timings_arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? timings_arrayLikeToArray(r, a) : void 0;}}function timings_arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function timings_iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function timings_arrayWithHoles(r) {if (Array.isArray(r)) return r;}function timings_classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function timings_defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, timings_toPropertyKey(o.key), o);}}function timings_createClass(e, r, t) {return r && timings_defineProperties(e.prototype, r), t && timings_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function timings_defineProperty(e, r, t) {return (r = timings_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function timings_toPropertyKey(t) {var i = timings_toPrimitive(t, "string");return "symbol" == timings_typeof(i) ? i : i + "";}function timings_toPrimitive(t, r) {if ("object" != timings_typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != timings_typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}




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
        AccValTiming.printHtml("<font color='blue'>".concat(
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

    } }], [{ key: "printHtml", value: function printHtml(line) {if (apiSupplier/* provider */.M == null) {(0,external_kolmafia_namespaceObject.printHtml)(line);} else {(0,apiSupplier/* provider */.M)().printHtml(line);}} }, { key: "start", value:

    function start(name) {var withSteps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!AccountValSettings.timingsDebug) {
        return null;
      }

      var started = Date.now();
      var existing = this.trackingMap.get(name);

      if (
      existing != null && (
      existing.totalTimeTaken == null || existing.stepStarted != null))
      {
        throw "The timing for " + name + " was already started";
      }

      if (existing == null) {
        existing = new AccValTiming(name, withSteps);
        this.trackingMap.set(name, existing);
        this.tracking.push(["STARTED", existing]);
        existing.depth =
        this.tracking.filter(
          (_ref) => {var _ref2 = timings_slicedToArray(_ref, 2),state = _ref2[0],t = _ref2[1];return t.stopped == null && state == "STARTED";}
        ).length - 1;
      } else {
        existing.start();
      }

      this.timingsSlowdown += Date.now() - started;

      return existing;
    } }, { key: "stop", value:

    function stop(name) {var print = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!AccountValSettings.timingsDebug) {
        return null;
      }

      var started = Date.now();
      var existing = this.trackingMap.get(name);

      if (existing == null) {
        throw "There was no time tracking created for " + name;
      }

      var lastStopIndex = -1;

      for (var i = this.tracking.length - 1; i >= 0; i--) {
        if (
        this.tracking[i][0] === "STOPPED" &&
        this.tracking[i][1] === existing)
        {
          lastStopIndex = i;
          break;
        }
      }

      if (lastStopIndex !== -1) {
        this.tracking.splice(lastStopIndex, 1);
      }

      this.tracking.push(["STOPPED", existing]);

      existing.stop(print);
      this.timingsSlowdown += Date.now() - started;

      return existing;
    } }, { key: "printTracked", value:

    function printTracked(
    method)
    {
      var sortedTimes = timings_toConsumableArray(
        this.tracking);


      this.tracking.forEach((_ref3) => {var _ref4 = timings_slicedToArray(_ref3, 2),state = _ref4[0],t = _ref4[1];
        if (t.stopped == null) {
          sortedTimes.push(["STOPPED", t]);
        }
      });var _iterator = timings_createForOfIteratorHelper(

          sortedTimes),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var _step$value = timings_slicedToArray(_step.value, 2),state = _step$value[0],timing = _step$value[1];
          var depthStr = "<font color='gray'>".concat(">&nbsp;".repeat(timing.depth), "</font>");

          if (method == "PRINT_JUST_ONCE") {
            if (state != "STARTED") {
              continue;
            }

            this.printHtml("".concat(
              depthStr, "<font color='blue'>").concat(timing.getName(), " <font color='green'>time taken:</font> ").concat(timing.getTimeStr(), "</font>")
            );
          } else if (method == "PRINT_START_AND_END") {
            if (state == "STARTED") {
              this.printHtml("".concat(
                depthStr, "<font color='blue'>").concat(timing.getName(), "</font> <font color='green'>started</font>")
              );
            } else {
              this.printHtml("".concat(
                depthStr, "<font color='blue'>").concat(timing.getName(), "<font color='green'> stopped, time taken: </font>").concat(timing.getTimeStr(), "</font>")
              );
            }
          } else if (method == "PRINT_JUST_END") {
            if (state == "STARTED") {
              continue;
            }

            this.printHtml("".concat(
              depthStr, "<font color='blue'>").concat(timing.getName(), "<font color='green'> time taken: </font>").concat(timing.getTimeStr(), "</font>")
            );
          }
        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}

      this.printHtml("<font color='green'>The usage of timings took an extra: </font><font color='blue'>".concat(
        utils/* AccountValUtils */.E.getNumber(this.timingsSlowdown), "ms</font>")
      );
    } }]);}();_AccValTiming = AccValTiming;timings_defineProperty(AccValTiming, "tracking", []);timings_defineProperty(AccValTiming, "trackingMap", new Map());timings_defineProperty(AccValTiming, "timingsSlowdown", 0);
// EXTERNAL MODULE: ./src/models/typings.ts
var typings = __webpack_require__(198);
;// ./src/pricing/variants/kolmafia.ts
function kolmafia_typeof(o) {"@babel/helpers - typeof";return kolmafia_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, kolmafia_typeof(o);}function kolmafia_classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function kolmafia_defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, kolmafia_toPropertyKey(o.key), o);}}function kolmafia_createClass(e, r, t) {return r && kolmafia_defineProperties(e.prototype, r), t && kolmafia_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function kolmafia_defineProperty(e, r, t) {return (r = kolmafia_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function kolmafia_toPropertyKey(t) {var i = kolmafia_toPrimitive(t, "string");return "symbol" == kolmafia_typeof(i) ? i : i + "";}function kolmafia_toPrimitive(t, r) {if ("object" != kolmafia_typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != kolmafia_typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}





var MallPricing = /*#__PURE__*/function () {




  function MallPricing() {kolmafia_classCallCheck(this, MallPricing);kolmafia_defineProperty(this, "sessionKey", "accountval_loadedAllMallItems");kolmafia_defineProperty(this, "ignoreKey", "_accountval_force_mallprices");kolmafia_defineProperty(this, "loadedAllMallItems", "not_loaded");
    this.loadLastState();

    // If prices have not been loaded yet
    if (this.loadedAllMallItems == "not_loaded") {
      this.loadMallPrices();
    }
  }return kolmafia_createClass(MallPricing, [{ key: "loadLastState", value:

    function loadLastState() {
      var prop = (0,apiSupplier/* provider */.M)().retrieveCache(this.sessionKey, "transient");

      if (!prop) {
        return;
      }

      this.loadedAllMallItems = prop;
    } }, { key: "resetStateMaybe", value:

    function resetStateMaybe() {
      if ((0,external_kolmafia_namespaceObject.getProperty)(this.ignoreKey) != "true") {
        return;
      }

      // If it used mallcheck.js
      if (this.loadedAllMallItems == "not_loaded") {
        // Force it to resolve prices ourselves
        this.loadedAllMallItems = "unsure";
      }
    } }, { key: "loadMallPrices", value:

    function loadMallPrices() {
      if (this.loadedAllMallItems == "loaded") {
        throw "Mall prices failed to load, check that loathers/mall-check (mallcheck.js) is installed and working, set '".concat(this.ignoreKey, "=true' to ignore this error");
      } else if (this.loadedAllMallItems == "unsure") {
        (0,apiSupplier/* provider */.M)().print("Mall prices didn't resolve properly, please make sure that mallcheck.js from loathers/mall-check is installed, now falling back to manually searching.",

        "red"
        );
      }

      this.loadedAllMallItems = (0,apiSupplier/* provider */.M)().resolveAllMallPrices(
        this.loadedAllMallItems
      );

      (0,apiSupplier/* provider */.M)().storeCache(
        this.sessionKey,
        this.loadedAllMallItems,
        "transient"
      );
    } }, { key: "isViable", value:

    function isViable() {
      return true;
    } }, { key: "resolve", value:

    function resolve(item) {
      var prevAge = (0,apiSupplier/* provider */.M)().historicalAge(item);
      var price = (0,apiSupplier/* provider */.M)().mallPrice(item);

      // The age should only go up, if it went down, there was a mall search
      if (
      (0,apiSupplier/* provider */.M)().historicalAge(item) < prevAge &&
      // If the new malled price is not valid, then it was an item that can't be found in mall, which explains why the cached mall prices didn't work
      price >= 100 &&
      price < 999999999999)
      {
        this.resetStateMaybe();
        this.loadMallPrices();
      }

      return new typings/* ItemPrice */.$y(
        item,
        price,
        typings/* PriceType */.SJ.MALL,
        (0,apiSupplier/* provider */.M)().historicalAge(item)
      );
    } }]);}();


var HistoricalPricing = /*#__PURE__*/function () {function HistoricalPricing() {kolmafia_classCallCheck(this, HistoricalPricing);}return kolmafia_createClass(HistoricalPricing, [{ key: "isViable", value:
    function isViable() {
      return true;
    } }, { key: "resolve", value:

    function resolve(item) {
      return new typings/* ItemPrice */.$y(
        item,
        (0,apiSupplier/* provider */.M)().historicalPrice(item),
        typings/* PriceType */.SJ.HISTORICAL,
        (0,apiSupplier/* provider */.M)().historicalAge(item)
      );
    } }]);}();
;// ./src/pricing/variants/flatfile.ts
function flatfile_typeof(o) {"@babel/helpers - typeof";return flatfile_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, flatfile_typeof(o);}function flatfile_createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = flatfile_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t.return || t.return();} finally {if (u) throw o;}} };}function flatfile_unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return flatfile_arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? flatfile_arrayLikeToArray(r, a) : void 0;}}function flatfile_arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function flatfile_classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function flatfile_defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, flatfile_toPropertyKey(o.key), o);}}function flatfile_createClass(e, r, t) {return r && flatfile_defineProperties(e.prototype, r), t && flatfile_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function flatfile_defineProperty(e, r, t) {return (r = flatfile_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function flatfile_toPropertyKey(t) {var i = flatfile_toPrimitive(t, "string");return "symbol" == flatfile_typeof(i) ? i : i + "";}function flatfile_toPrimitive(t, r) {if ("object" != flatfile_typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != flatfile_typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}











var FlatfilePrices = /*#__PURE__*/function () {




  function FlatfilePrices(settings) {flatfile_classCallCheck(this, FlatfilePrices);flatfile_defineProperty(this, "prices", void 0);flatfile_defineProperty(this, "lastUpdated", void 0);flatfile_defineProperty(this, "settings", void 0);
    this.settings = settings;
  }return flatfile_createClass(FlatfilePrices, [{ key: "resolve", value:

    function resolve(item) {
      var price = this.prices[item.id];

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
    } }, { key: "loadLastState", value:





    function loadLastState() {
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
        return (0,apiSupplier/* provider */.M)().retrieveCache(
          "irrats_item_prices.txt",
          "large_persist"
        );
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

      var responseText = (0,apiSupplier/* provider */.M)().visitUrl("https://kolprices.lib.co.nz/file/".concat(
        finalDateString)
      );

      if (!responseText.startsWith("Last Updated:")) {
        if (responseText.length > 200) {
          throw new Error("Received an unexpected response from the server.");
        } else {
          throw new Error(responseText);
        }
      }

      (0,apiSupplier/* provider */.M)().print("Now resolving prices with date: ".concat(
        finalDateString),
      "blue"
      );
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
function pricegun_typeof(o) {"@babel/helpers - typeof";return pricegun_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, pricegun_typeof(o);}function pricegun_toConsumableArray(r) {return pricegun_arrayWithoutHoles(r) || pricegun_iterableToArray(r) || pricegun_unsupportedIterableToArray(r) || pricegun_nonIterableSpread();}function pricegun_nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function pricegun_iterableToArray(r) {if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);}function pricegun_arrayWithoutHoles(r) {if (Array.isArray(r)) return pricegun_arrayLikeToArray(r);}function pricegun_ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function pricegun_objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? pricegun_ownKeys(Object(t), !0).forEach(function (r) {pricegun_defineProperty(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : pricegun_ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}function pricegun_createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = pricegun_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t.return || t.return();} finally {if (u) throw o;}} };}function pricegun_unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return pricegun_arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? pricegun_arrayLikeToArray(r, a) : void 0;}}function pricegun_arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function pricegun_classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function pricegun_defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, pricegun_toPropertyKey(o.key), o);}}function pricegun_createClass(e, r, t) {return r && pricegun_defineProperties(e.prototype, r), t && pricegun_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function pricegun_defineProperty(e, r, t) {return (r = pricegun_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function pricegun_toPropertyKey(t) {var i = pricegun_toPrimitive(t, "string");return "symbol" == pricegun_typeof(i) ? i : i + "";}function pricegun_toPrimitive(t, r) {if ("object" != pricegun_typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != pricegun_typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}












var PricegunResolver = /*#__PURE__*/function () {function PricegunResolver() {pricegun_classCallCheck(this, PricegunResolver);pricegun_defineProperty(this, "items",
    new Map());}return pricegun_createClass(PricegunResolver, [{ key: "loadLastState", value:

    function loadLastState() {
      this.items.clear();
      var buffer = (0,apiSupplier/* provider */.M)().retrieveCache(
        "pricegun_prices.txt",
        "large_persist"
      );

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
              this.items.set(item.itemId, pricegun_objectSpread(pricegun_objectSpread({}, item), {}, { value: value }));
            }
          }} catch (err) {_iterator.e(err);} finally {_iterator.f();}
      } catch (_unused) {}
    } }, { key: "stop", value:

    function stop() {
      var cutoff = Math.floor(Date.now() / 1000) - 23 * 60 * 60;
      (0,apiSupplier/* provider */.M)().storeCache(
        "pricegun_prices.txt",
        JSON.stringify(
          pricegun_toConsumableArray(this.items.values()).filter((i) => i.retrieved > cutoff)
        ),
        "large_persist"
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
      var missing = items.filter((i) => !this.items.has(i.id));

      if (missing.length) {
        this.fetch(missing);
      }

      var now = Math.floor(Date.now() / 1000);

      return items.map((i) => {
        var price = this.items.get(i.id);

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
      });
    } }, { key: "fetch", value:

    function fetch(items) {
      var MAX_AMOUNT = 500;
      var now = Math.floor(Date.now() / 1000);

      // Ensure at least one result
      if (items.length + 3 < MAX_AMOUNT && !items.find((i) => i.id === 1)) {
        items.push(supplierTypings/* KoLItem */.U8.get(1));
      }

      var totalLength = items.length;

      for (var start = 0; start < items.length; start += MAX_AMOUNT) {
        var batch = items.slice(start, start + MAX_AMOUNT);

        try {
          var url = "https://pricegun.loathers.net/api/".concat(batch.map((i) => i.id).join(","));
          var response = JSON.parse((0,apiSupplier/* provider */.M)().visitUrl(url));
          var parsed = batch.length === 1 ? [response] : response;var _iterator2 = pricegun_createForOfIteratorHelper(

              parsed),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var item = _step2.value;
              if (item.itemId !== 1) {
                this.loadItemFromApi(item);
              }
            }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}var _iterator3 = pricegun_createForOfIteratorHelper(

              batch),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var i = _step3.value;
              var id = i.id;

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
              var _id = _i.id;
              this.items.set(_id, {
                itemId: _id,
                value: 0,
                volume: -1,
                dateTime: 0,
                retrieved: now
              });
            }} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}
        }

        (0,apiSupplier/* provider */.M)().print("Pricegun progress: ".concat(
          totalLength - items.length, " / ").concat(totalLength, " (+").concat(batch.length, ")")
        );
      }
    } }, { key: "resolve", value:

    function resolve(item) {
      return this.bulkResolve([item])[1];
    } }, { key: "isViable", value:

    function isViable() {
      return true;
    } }]);}();
;// ./src/pricing/priceResolver.ts
function priceResolver_typeof(o) {"@babel/helpers - typeof";return priceResolver_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, priceResolver_typeof(o);}function priceResolver_createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = priceResolver_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t.return || t.return();} finally {if (u) throw o;}} };}function priceResolver_unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return priceResolver_arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? priceResolver_arrayLikeToArray(r, a) : void 0;}}function priceResolver_arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function priceResolver_classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function priceResolver_defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, priceResolver_toPropertyKey(o.key), o);}}function priceResolver_createClass(e, r, t) {return r && priceResolver_defineProperties(e.prototype, r), t && priceResolver_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function priceResolver_defineProperty(e, r, t) {return (r = priceResolver_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function priceResolver_toPropertyKey(t) {var i = priceResolver_toPrimitive(t, "string");return "symbol" == priceResolver_typeof(i) ? i : i + "";}function priceResolver_toPrimitive(t, r) {if ("object" != priceResolver_typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != priceResolver_typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}









var PriceResolver = /*#__PURE__*/function () {




  function PriceResolver(settings) {priceResolver_classCallCheck(this, PriceResolver);priceResolver_defineProperty(this, "specialCase", new Map());priceResolver_defineProperty(this, "settings", void 0);priceResolver_defineProperty(this, "resolvers", []);
    this.settings = settings;

    var specialResolver;

    if (settings.globalSettings.pricegun) {
      specialResolver = new PricegunResolver();
    } else if (settings.globalSettings.mallPrice) {
      specialResolver = new MallPricing();
    } else {
      specialResolver = new IrratPrices(settings);
    }

    if (specialResolver && specialResolver.loadLastState) {
      specialResolver.loadLastState();
    }

    this.resolvers.push(specialResolver);
    this.resolvers.push(new HistoricalPricing());

    this.fillSpecialCase();
  }return priceResolver_createClass(PriceResolver, [{ key: "addSpecialCase", value:

    function addSpecialCase(item, meat) {
      this.specialCase.set(item, meat);
    } }, { key: "fillSpecialCase", value:

    function fillSpecialCase() {
      this.specialCase.set(supplierTypings/* KoLItem */.U8.get("Meat Paste"), 10);
      this.specialCase.set(supplierTypings/* KoLItem */.U8.get("Meat Stack"), 100);
      this.specialCase.set(supplierTypings/* KoLItem */.U8.get("Dense meat stack"), 1000);
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
      if (!this.resolvers[0].bulkResolve) {
        return;
      }

      var toCheck = new Set(items);
      var checked = new Set();var _iterator = priceResolver_createForOfIteratorHelper(

          toCheck),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var item = _step.value;
          if (checked.has(item)) {
            continue;
          }

          var folds = (0,apiSupplier/* provider */.M)().getFoldables(item, "fold");

          if (!folds.length) {
            continue;
          }var _iterator2 = priceResolver_createForOfIteratorHelper(

              folds),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var i = _step2.value;
              checked.add(i);
              toCheck.add(i);
            }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}
        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}

      this.resolvers[0].bulkResolve(Array.from(toCheck));
    } }, { key: "itemPrice", value:

    function itemPrice(
    item)





    {var ignoreFold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var forcePricing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;var doSuperFast = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;var doEstimates = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;var timingsKey = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
      if (this.settings.globalSettings.pricegun) {
        ignoreFold = true;
      }

      if (!ignoreFold) {
        AccValTiming.start(timingsKey + "Check Foldable", true);

        try {
          var foldables = (0,apiSupplier/* provider */.M)().getFoldables(item, "fold");

          if (foldables.length) {
            AccValTiming.start(timingsKey + "Deeper Foldable Check", true);

            try {
              var foldPrices = foldables.
              map((f) =>
              this.itemPrice(f, true, forcePricing, doSuperFast, doEstimates)
              ).
              filter((p) => p != null);

              foldPrices.sort((f1, f2) =>
              f1.item.tradeable != f2.item.tradeable ?
              f1.item.tradeable ?
              -1 :
              1 :
              f1.price - f2.price
              );
              var compare = foldPrices.find((f) => f.item == item);var _iterator3 = priceResolver_createForOfIteratorHelper(

                  foldPrices),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var f = _step3.value;
                  if (f.daysOutdated > compare.daysOutdated * 3) {
                    continue;
                  }

                  return f;
                }} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}

              return foldPrices[0];
            } finally {
              AccValTiming.stop(timingsKey + "Deeper Foldable Check");
            }
          }
        } finally {
          AccValTiming.stop(timingsKey + "Check Foldable");
        }
      }

      AccValTiming.start(timingsKey + "Check Pricing Misc", true);

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
            (0,apiSupplier/* provider */.M)().autosellPrice(item),
            typings/* PriceType */.SJ.AUTOSELL,
            0
          );
        }
      } finally {
        AccValTiming.stop(timingsKey + "Check Pricing Misc");
      }

      AccValTiming.start(timingsKey + "Final Pricing Check", true);

      try {var _iterator4 = priceResolver_createForOfIteratorHelper(
            this.resolvers),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var resolver = _step4.value;
            var price = resolver.resolve(item);

            if (price == null && this.settings.dateToFetch == null) {
              continue;
            }

            return price;
          }} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}
      } finally {
        AccValTiming.stop(timingsKey + "Final Pricing Check");
      }

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

      (0,apiSupplier/* provider */.M)().print(
        "JS Filter has been set to: " + this.settings.javascriptFilter,
        utils_colors/* AccountValColors */.HK.minorNote
      );

      try {
        this.jsFilter = (0,apiSupplier/* provider */.M)().evalJsFilter(this.settings.javascriptFilter);
      } catch (e) {
        (0,apiSupplier/* provider */.M)().print(
          "Invalid jsfilter provided! Error as follows:",
          utils_colors/* AccountValColors */.HK.attentionGrabbingWarning
        );
        (0,apiSupplier/* provider */.M)().print("");
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
          (0,apiSupplier/* provider */.M)().getPlayerName(this.settings.playerId)
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
      var sessionItems = (0,apiSupplier/* provider */.M)().mySessionItems();
      AccValTiming.stop("Resolve Session");

      var mega = new Map();

      var megaExtra = new Map();

      var add = (stuff) => {var _iterator3 = logic_createForOfIteratorHelper(
            stuff),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var _mega$get;var _step3$value = logic_slicedToArray(_step3.value, 2),item = _step3$value[0],amount = _step3$value[1];
            mega.set(item, ((_mega$get = mega.get(item)) !== null && _mega$get !== void 0 ? _mega$get : 0) + amount);
          }} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}
      };

      if (this.settings.fetchInventory) {
        AccValTiming.start("Resolve and Add Inventory");
        add((0,apiSupplier/* provider */.M)().getInventory());
        AccValTiming.stop("Resolve and Add Inventory");
      }

      if (this.settings.fetchCloset) {
        AccValTiming.start("Resolve and Add Closet");
        add((0,apiSupplier/* provider */.M)().getCloset());
        AccValTiming.stop("Resolve and Add Closet");
      }

      if (this.settings.fetchStorage) {
        AccValTiming.start("Resolve and Add Storage");
        add((0,apiSupplier/* provider */.M)().getStorage());
        AccValTiming.stop("Resolve and Add Storage");
      }

      if (this.settings.fetchClan) {
        AccValTiming.start("Resolve and Add Clan Stash");
        add((0,apiSupplier/* provider */.M)().getStash());
        AccValTiming.stop("Resolve and Add Clan Stash");
      }

      if (this.settings.fetchDisplaycase) {
        if (this.settings.doCategories) {
          AccValTiming.start("Resolve and Add Display Case with Shelves");
          var pager = new PageResolver();
          var items = pager.getDisplaycase(
            utils/* AccountValUtils */.E.toInt((0,apiSupplier/* provider */.M)().myId())
          );
          items.forEach((v, k) => {
            if (!this.categoryOrder.includes(k.shelf)) {
              this.categoryOrder.push(k.shelf);
            }

            megaExtra.set(k.item, { shelf: k.shelf, count: v });
          });
          AccValTiming.stop("Resolve and Add Display Case with Shelves");
        } else {
          AccValTiming.start("Resolve and Add Display Case");
          add((0,apiSupplier/* provider */.M)().getDisplay());
          AccValTiming.stop("Resolve and Add Display Case");
        }
      }

      AccValTiming.start("Resolve Shop");
      var shop = this.settings.fetchShop ? (0,apiSupplier/* provider */.M)().getShop() : null;
      AccValTiming.stop("Resolve Shop");

      if (this.settings.fetchShop && !this.settings.shopWorth) {
        AccValTiming.start("Add Shop");
        add(shop);
        AccValTiming.stop("Add Shop");
      }

      AccValTiming.start("Process All Items");var _iterator4 = logic_createForOfIteratorHelper(

          supplierTypings/* KoLItem */.U8.all()),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var _mega$get2, _shop$get;var _item2 = _step4.value;
          var amount = (_mega$get2 = mega.get(_item2)) !== null && _mega$get2 !== void 0 ? _mega$get2 : 0;

          if (this.settings.fetchSession) {var _sessionItems$get;
            amount += (_sessionItems$get = sessionItems.get(_item2)) !== null && _sessionItems$get !== void 0 ? _sessionItems$get : 0;
          }

          if (this.settings.fetchInventory) {var _famItems$get;
            amount += (0,apiSupplier/* provider */.M)().equippedAmount(_item2) + ((_famItems$get = famItems.get(_item2)) !== null && _famItems$get !== void 0 ? _famItems$get : 0);
          }

          var category = void 0;

          if (megaExtra.has(_item2)) {
            amount += megaExtra.get(_item2).count;
            category = megaExtra.get(_item2).shelf;
          }

          if (this.settings.shopWorth && ((_shop$get = shop.get(_item2)) !== null && _shop$get !== void 0 ? _shop$get : 0) > 0) {
            var _i = new typings/* ValItem */.Fx(_item2).withCategory(category);
            _i.bound = typings/* ItemStatus */.Kw.SHOP_WORTH;
            _i.shopWorth = (0,apiSupplier/* provider */.M)().shopPrice(_item2);
            this.ownedItems.set(_i, shop.get(_item2));
            continue;
          }

          if (amount == 0) {
            continue;
          }

          this.ownedItems.set(new typings/* ValItem */.Fx(_item2).withCategory(category), amount);
        }} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}

      AccValTiming.stop("Process All Items");

      if (this.settings.fetchFamiliars != false) {
        AccValTiming.start("Resolve Familiars");
        this.resolver.resolveFamiliars(
          supplierTypings/* KoLFamiliar */.SR.all().filter((f) => (0,apiSupplier/* provider */.M)().haveFamiliar(f)),
          this.ownedItems
        );
        AccValTiming.stop("Resolve Familiars");
      }

      if (this.settings.fetchingEverywhereish && this.settings.fetchingNonItems) {
        AccValTiming.start("Resolve Workshed");

        if (this.settings.doBound || this.settings.doTradeables) {
          var i = (0,apiSupplier/* provider */.M)().getWorkshed();

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
        AccValTiming.start("Resolve Urled Items");var _iterator5 = logic_createForOfIteratorHelper(

            this.resolver.getUrledItems()),_step5;try {for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {var _step5$value = logic_slicedToArray(_step5.value, 2),item = _step5$value[0],status = _step5$value[1];
            if (
            item.tradeable && (
            status == typings/* ItemStatus */.Kw.FAMILIAR || status != typings/* ItemStatus */.Kw.BOUND) ?
            !this.settings.doTradeables :
            !this.settings.doBound)
            {
              continue;
            }

            this.addItem(new typings/* ValItem */.Fx(item, item, item.name, item.plural, status));
          }} catch (err) {_iterator5.e(err);} finally {_iterator5.f();}

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

      if (this.settings.doBound || this.settings.doNonTradeables) {
        this.resolver.resolveBoundToTradeables(copy, this.ownedItems, [
        this.settings.doBound ? typings/* ItemType */.SP.UNTRADEABLE_ITEM : null,
        this.settings.doNonTradeables ? typings/* ItemType */.SP.CURRENCY : null]
        );
      }

      var skipJsFilter = this.settings.doesJSFilterUsePriceOrSales();var _iterator6 = logic_createForOfIteratorHelper(

          this.ownedItems.keys()),_step6;try {for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {var item = _step6.value;
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
          (0,apiSupplier/* provider */.M)().autosellPrice(item.tradeableItem) == 0)
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
          !this.settings.doNonTradeables &&
          !item.tradeableItem.tradeable &&
          !item.isBound())
          {
            this.ownedItems.delete(item);
            continue;
          }

          if (item.isBound() && this.ownedItems.get(item) > 1) {
            this.ownedItems.set(item, 1);
          }
        }} catch (err) {_iterator6.e(err);} finally {_iterator6.f();}
    } }, { key: "doPricing", value:

    function doPricing() {
      var lastPrinted = 0;
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
          price.price = (0,apiSupplier/* provider */.M)().autosellPrice(item.actualItem);
        }

        prices.push([item, price]);
      };

      AccValTiming.start("Add Logic Prices");
      var toCheck = [];
      this.priceResolver.bulkLoad(
        logic_toConsumableArray(this.ownedItems.keys()).map((i) => i.tradeableItem)
      );var _iterator7 = logic_createForOfIteratorHelper(

          this.ownedItems.keys()),_step7;try {for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {var item = _step7.value;
          AccValTiming.start("Price Item", true);
          var _price = this.priceResolver.itemPrice(
            item.tradeableItem,
            false,
            this.settings.doSuperFast ?
            typings/* PriceType */.SJ.HISTORICAL :
            this.settings.useLastSold ?
            typings/* PriceType */.SJ.MALL_SALES :
            null,
            this.settings.doSuperFast,
            true,
            "Logic Item Prices - "
          );
          AccValTiming.stop("Price Item");

          if (_price == null) {
            continue;
          } else if (_price.price > 0 || _price.accuracy == typings/* PriceType */.SJ.NEW_PRICES) {
            AccValTiming.start("Add Item Price", true);
            addPrice(item, _price);
            AccValTiming.stop("Add Item Price");
          } else {
            toCheck.push([item, _price]);
          }
        }} catch (err) {_iterator7.e(err);} finally {_iterator7.f();}

      AccValTiming.stop("Add Logic Prices");

      var checked = -1;

      if (toCheck.length > 200) {
        (0,apiSupplier/* provider */.M)().print(
          "Think this will take too long? Use the parameter 'fast', it's less accurate!",
          utils_colors/* AccountValColors */.HK.helpfulStateInfo
        );
      }

      if (toCheck.length > 0) {
        AccValTiming.start("Check Remaining Logic Item Prices");var _iterator8 = logic_createForOfIteratorHelper(

            toCheck),_step8;try {for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {var check = _step8.value;
            var i = check[0];

            if (++checked % 20 == 0 && lastPrinted + 1000 < Date.now()) {
              lastPrinted = Date.now();
              (0,apiSupplier/* provider */.M)().print(
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
              check[1].accuracy,
              undefined,
              undefined,
              "Remaining Logic Item Prices - "
            );

            if (price == null) {
              continue;
            }

            addPrice(i, price);
          }} catch (err) {_iterator8.e(err);} finally {_iterator8.f();}

        AccValTiming.stop("Check Remaining Logic Item Prices");
      }

      AccValTiming.start("Sort Price List");
      this.doSort();
      AccValTiming.stop("Sort Price List");
    } }, { key: "doSort", value:

    function doSort() {
      if (!this.settings.sortBy.fallback) {var _iterator9 = logic_createForOfIteratorHelper(
            this.prices),_step9;try {for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {var _step9$value = logic_slicedToArray(_step9.value, 2),v = _step9$value[0],p = _step9$value[1];
            this.settings.sortBy.assignValue(
              v,
              p,
              this.ownedItems,
              this.settings.maxNaturalPrice
            );
          }} catch (err) {_iterator9.e(err);} finally {_iterator9.f();}
      }

      var sorter = (v1, v2) =>
      this.settings.sortBy.fallback ?
      this.settings.sortBy.fallback(v1[0], v2[0]) :
      v1[0].sortValue - v2[0].sortValue;

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
          line = (0,apiSupplier/* provider */.M)().entityEncode(line);
        }

        this.output.push(line);
      } else if (textType == "html") {
        (0,apiSupplier/* provider */.M)().printHtml(line);
      } else if (color != null) {
        (0,apiSupplier/* provider */.M)().print(line, color);
      } else {
        (0,apiSupplier/* provider */.M)().print(line);
      }
    } }, { key: "escapeHTML", value:

    function escapeHTML(str) {
      return (0,apiSupplier/* provider */.M)().
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

      (0,apiSupplier/* provider */.M)().storeCache(
        this.settings.logOutputTo,
        this.output.join("\n"),
        "large_persist"
      );
      (0,apiSupplier/* provider */.M)().print("accounval results printed to 'data/".concat(
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
    this.settings.playerId == utils/* AccountValUtils */.E.toInt((0,apiSupplier/* provider */.M)().myId()) ?
    this.settings.fetchSession ?
    "Your session is" :
    "You are" :
    (0,apiSupplier/* provider */.M)().getPlayerName(this.settings.playerId) + " is";
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

      if (this.settings.fetchSession && (0,apiSupplier/* provider */.M)().mySessionMeat() != 0) {
        mrAMeat = this.netvalue + (0,apiSupplier/* provider */.M)().mySessionMeat();
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

      if (this.settings.fetchInventory && (0,apiSupplier/* provider */.M)().myMeat() != 0) {
        meat += (0,apiSupplier/* provider */.M)().myMeat();
        meatSources.push(
          utils/* AccountValUtils */.E.getNumber((0,apiSupplier/* provider */.M)().myMeat()) + " meat in inventory"
        );
      }

      if (this.settings.fetchCloset && (0,apiSupplier/* provider */.M)().myClosetMeat() != 0) {
        meat += (0,apiSupplier/* provider */.M)().myClosetMeat();
        meatSources.push(
          utils/* AccountValUtils */.E.getNumber((0,apiSupplier/* provider */.M)().myClosetMeat()) +
          " meat in closet"
        );
      }

      if (this.settings.fetchStorage && (0,apiSupplier/* provider */.M)().myStorageMeat() != 0) {
        meat += (0,apiSupplier/* provider */.M)().myStorageMeat();
        meatSources.push(
          utils/* AccountValUtils */.E.getNumber((0,apiSupplier/* provider */.M)().myStorageMeat()) +
          " meat in storage"
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
function accountval_typeof(o) {"@babel/helpers - typeof";return accountval_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, accountval_typeof(o);}function accountval_slicedToArray(r, e) {return accountval_arrayWithHoles(r) || accountval_iterableToArrayLimit(r, e) || accountval_unsupportedIterableToArray(r, e) || accountval_nonIterableRest();}function accountval_nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function accountval_unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return accountval_arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? accountval_arrayLikeToArray(r, a) : void 0;}}function accountval_arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function accountval_iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function accountval_arrayWithHoles(r) {if (Array.isArray(r)) return r;}function accountval_classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function accountval_defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, accountval_toPropertyKey(o.key), o);}}function accountval_createClass(e, r, t) {return r && accountval_defineProperties(e.prototype, r), t && accountval_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function accountval_defineProperty(e, r, t) {return (r = accountval_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function accountval_toPropertyKey(t) {var i = accountval_toPrimitive(t, "string");return "symbol" == accountval_typeof(i) ? i : i + "";}function accountval_toPrimitive(t, r) {if ("object" != accountval_typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != accountval_typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}





var

AccountVal = /*#__PURE__*/function () {function AccountVal() {accountval_classCallCheck(this, AccountVal);accountval_defineProperty(this, "logic", void 0);accountval_defineProperty(this, "settings", void 0);accountval_defineProperty(this, "out", void 0);}return accountval_createClass(AccountVal, [{ key: "getSettings", value:




    function getSettings() {
      return this.settings;
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
      } else if (command.toLowerCase().match(/^debugcolors=[^ ]+$/)) {
        var scheme = command.split("=")[1];
        (0,utils_colors/* showAccountvalColors */.mh)(scheme);

        return false;
      }

      var unknown = this.settings.doSettings(command);

      if (this.settings.help) {
        Args.showHelp(this.settings, 0);
      }

      if (this.settings.showPresetFilters) {
        var meta = Args.getMetadata(this.settings);
        meta.traverse(
          (v, k) => {var _v$setting;
            if (((_v$setting = v.setting) !== null && _v$setting !== void 0 ? _v$setting : "").startsWith("accountval_preset_")) {
              Args.showArgHelp(meta, v, k);
            }
          },
          (g, k) => {
            if (k != "presetFilters") {
              return;
            }

            Args.showGroupHelp(meta, g, k);
          }
        );
      }

      if (this.settings.help || this.settings.showPresetFilters) {
        return;
      }

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
      priceSettings.mallPrice = this.settings.mallPrice;
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
      /*this.runTest("", {
        doBound: true,
        sortBy: SortBy.TOTAL_PRICE,
        fetchInventory: true,
      });
      this.runTest("sort=meat !bound", { doBound: false, sortBy: SortBy.PRICE });*/
      this.out.printLine("Tests Finished", "plain", "green");
    } }, { key: "runTest", value:

    function runTest(args, verify) {
      this.load(args);

      for (var _i = 0, _Object$entries = Object.entries(verify); _i < _Object$entries.length; _i++) {var _Object$entries$_i = accountval_slicedToArray(_Object$entries[_i], 2),key = _Object$entries$_i[0],value = _Object$entries$_i[1];
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


function run(command) {
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
;// ./src/kolmafia/kolmafiaProvider.ts
function kolmafiaProvider_typeof(o) {"@babel/helpers - typeof";return kolmafiaProvider_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, kolmafiaProvider_typeof(o);}function kolmafiaProvider_createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = kolmafiaProvider_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t.return || t.return();} finally {if (u) throw o;}} };}function kolmafiaProvider_slicedToArray(r, e) {return kolmafiaProvider_arrayWithHoles(r) || kolmafiaProvider_iterableToArrayLimit(r, e) || kolmafiaProvider_unsupportedIterableToArray(r, e) || kolmafiaProvider_nonIterableRest();}function kolmafiaProvider_nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function kolmafiaProvider_unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return kolmafiaProvider_arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? kolmafiaProvider_arrayLikeToArray(r, a) : void 0;}}function kolmafiaProvider_arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function kolmafiaProvider_iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function kolmafiaProvider_arrayWithHoles(r) {if (Array.isArray(r)) return r;}function kolmafiaProvider_classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function kolmafiaProvider_defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, kolmafiaProvider_toPropertyKey(o.key), o);}}function kolmafiaProvider_createClass(e, r, t) {return r && kolmafiaProvider_defineProperties(e.prototype, r), t && kolmafiaProvider_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function kolmafiaProvider_toPropertyKey(t) {var i = kolmafiaProvider_toPrimitive(t, "string");return "symbol" == kolmafiaProvider_typeof(i) ? i : i + "";}function kolmafiaProvider_toPrimitive(t, r) {if ("object" != kolmafiaProvider_typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != kolmafiaProvider_typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}



var requiredRevision = 28933;

var KolmafiaProvider = /*#__PURE__*/function () {function KolmafiaProvider() {kolmafiaProvider_classCallCheck(this, KolmafiaProvider);}return kolmafiaProvider_createClass(KolmafiaProvider, [{ key: "mallPrice", value:
    function mallPrice(item) {
      return (0,external_kolmafia_namespaceObject.mallPrice)(item);
    } }, { key: "resolveAllMallPrices", value:

    function resolveAllMallPrices(previous) {
      if (previous != "not_loaded" && previous != "unsure") {
        throw "Illegal mall loaded state: ".concat(previous);
      }

      if (previous == "not_loaded" && (0,external_kolmafia_namespaceObject.gitExists)("loathers-mall-check")) {
        (0,external_kolmafia_namespaceObject.cliExecute)("mallcheck");

        // It's possible mallcheck was aborted, or didn't run!
        return "unsure";
      }

      (0,external_kolmafia_namespaceObject.mallPrices)("allitems");

      return "loaded";
    } }, { key: "print", value:

    function print(message, color) {
      (0,external_kolmafia_namespaceObject.print)(message, color);
    } }, { key: "printHtml", value:

    function printHtml(message) {
      (0,external_kolmafia_namespaceObject.printHtml)(message);
    } }, { key: "abort", value:

    function abort(message) {
      (0,external_kolmafia_namespaceObject.abort)(message);
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

    function storeCache(key, value, dataType) {
      if (dataType == "large_persist") {
        (0,external_kolmafia_namespaceObject.bufferToFile)(key, value);
      } else if (dataType == "small_persist") {
        (0,external_kolmafia_namespaceObject.setProperty)(key, value);
      } else {
        external_kolmafia_namespaceObject.sessionStorage.setItem(key, value);
      }
    } }, { key: "retrieveCache", value:

    function retrieveCache(key, dataType) {var _sessionStorage$getIt;
      if (dataType == "large_persist") {
        return (0,external_kolmafia_namespaceObject.fileToBuffer)(key);
      } else if (dataType == "small_persist") {
        return (0,external_kolmafia_namespaceObject.getProperty)(dataType);
      }

      return (_sessionStorage$getIt = external_kolmafia_namespaceObject.sessionStorage.getItem(key)) !== null && _sessionStorage$getIt !== void 0 ? _sessionStorage$getIt : "";
    } }, { key: "autosellPrice", value:

    function autosellPrice(item) {
      return (0,external_kolmafia_namespaceObject.autosellPrice)(item);
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
    } }, { key: "itemsToMap", value:

    function itemsToMap(items) {
      var map = new Map();

      for (var _i = 0, _Object$entries = Object.entries(items); _i < _Object$entries.length; _i++) {var _Object$entries$_i = kolmafiaProvider_slicedToArray(_Object$entries[_i], 2),key = _Object$entries$_i[0],value = _Object$entries$_i[1];
        map.set(external_kolmafia_namespaceObject.Item.get(key), value);
      }

      return map;
    } }, { key: "getInventory", value:

    function getInventory() {
      return this.itemsToMap((0,external_kolmafia_namespaceObject.getInventory)());
    } }, { key: "getCloset", value:

    function getCloset() {
      return this.itemsToMap((0,external_kolmafia_namespaceObject.getCloset)());
    } }, { key: "getStorage", value:

    function getStorage() {
      var map = this.itemsToMap((0,external_kolmafia_namespaceObject.getStorage)());

      for (var _i2 = 0, _arr = [(0,external_kolmafia_namespaceObject.getFreePulls)(), (0,external_kolmafia_namespaceObject.getNoPulls)()]; _i2 < _arr.length; _i2++) {var items = _arr[_i2];
        var m = this.itemsToMap(items);var _iterator = kolmafiaProvider_createForOfIteratorHelper(

            m),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var _map$get;var _step$value = kolmafiaProvider_slicedToArray(_step.value, 2),item = _step$value[0],amount = _step$value[1];
            map.set(item, ((_map$get = map.get(item)) !== null && _map$get !== void 0 ? _map$get : 0) + amount);
          }} catch (err) {_iterator.e(err);} finally {_iterator.f();}
      }

      return map;
    } }, { key: "getStash", value:

    function getStash() {
      return this.itemsToMap((0,external_kolmafia_namespaceObject.getStash)());
    } }, { key: "getDisplay", value:

    function getDisplay() {
      return this.itemsToMap((0,external_kolmafia_namespaceObject.getDisplay)());
    } }, { key: "getShop", value:

    function getShop() {
      return this.itemsToMap((0,external_kolmafia_namespaceObject.getShop)());
    } }, { key: "mySessionItems", value:

    function mySessionItems() {
      return this.itemsToMap((0,external_kolmafia_namespaceObject.mySessionItems)());
    } }, { key: "getCampground", value:

    function getCampground() {
      return this.itemsToMap((0,external_kolmafia_namespaceObject.getCampground)());
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
    } }, { key: "associatedSkill", value:

    function associatedSkill(item) {
      return (0,external_kolmafia_namespaceObject.skillModifier)(item, "Skill");
    } }, { key: "myGardenType", value:

    function myGardenType() {
      return (0,external_kolmafia_namespaceObject.myGardenType)();
    } }, { key: "getWorkshed", value:

    function getWorkshed() {
      return (0,external_kolmafia_namespaceObject.getWorkshed)();
    } }, { key: "getFoldables", value:

    function getFoldables(item, type) {
      var keys = Object.keys((0,external_kolmafia_namespaceObject.getRelated)(item, type));

      if (keys.length <= 1) {
        return [];
      }

      return keys.map((s) => external_kolmafia_namespaceObject.Item.get(s));
    } }, { key: "allNormalOutfits", value:

    function allNormalOutfits() {
      return (0,external_kolmafia_namespaceObject.allNormalOutfits)();
    } }, { key: "itemType", value:

    function itemType(item) {
      return (0,external_kolmafia_namespaceObject.itemType)(item);
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
      return new Function("kolmafia", "with (kolmafia) { return (".concat(js, ")}"))(
        external_kolmafia_namespaceObject
      );
    } }]);}();
;// ./src/kolmafia/index.ts




(0,apiSupplier/* setProvider */.U)(new KolmafiaProvider());

function main(command) {
  run(command);
}
var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;