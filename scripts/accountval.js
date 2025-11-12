/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 66:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ CoinmasterResolver)
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t.return || t.return();} finally {if (u) throw o;}} };}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}











var CoinmasterResolver = /*#__PURE__*/function () {



  function CoinmasterResolver(prices) {_classCallCheck(this, CoinmasterResolver);_defineProperty(this, "items", []);_defineProperty(this, "prices", void 0);
    this.prices = prices;
  }return _createClass(CoinmasterResolver, [{ key: "load", value:

    function load() {var _iterator = _createForOfIteratorHelper(
          kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.all()),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var item = _step.value;
          if (!item.tradeable || item.gift || item.quest || item.seller == null) {
            continue;
          }

          var token = item.seller.item;

          if (token == kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.none) {
            continue;
          }

          var price = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sellPrice)(item.seller, item);

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
    } }, { key: "getHighestCoinmaster", value:

    function getHighestCoinmaster(currency) {
      var highest = null;var _iterator2 = _createForOfIteratorHelper(

          this.items),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var item = _step2.value;
          if (item.currency != currency) {
            continue;
          }

          if (item.price == null) {
            var itemPrice = this.prices.itemPrice(item.item, 1);

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

/***/ }),

/***/ 128:
/***/ ((module) => {

module.exports = require("kolmafia");

/***/ }),

/***/ 351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AO: () => (/* binding */ AccountValSettings),
  PU: () => (/* binding */ FieldType),
  M3: () => (/* binding */ PricingSettings),
  gx: () => (/* binding */ SortBy)
});

// EXTERNAL MODULE: external "kolmafia"
var external_kolmafia_ = __webpack_require__(128);
// EXTERNAL MODULE: ./src/AccountValColors.ts
var AccountValColors = __webpack_require__(477);
;// ./src/AccountValPresets.ts













var presets = [];

presets.push({
  name: function name() {
    return ["consumables", "consumable", "diet", "consume", "consumeable"];
  },

  isProcessed: function isProcessed(item, worth) {
    return ["food", "booze", "spleen item"].includes((0,external_kolmafia_.itemType)(item));
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
      return (0,external_kolmafia_.itemType)(item).replace(" item", "") == type;
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
    (0,external_kolmafia_.myFullness)() + item.fullness >= (0,external_kolmafia_.fullnessLimit)() ||
    item.levelreq < (0,external_kolmafia_.myLevel)())
    {
      return false;
    }

    return (0,external_kolmafia_.itemType)(item) == "food";
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
    (0,external_kolmafia_.myInebriety)() + item.inebriety >= (0,external_kolmafia_.inebrietyLimit)() ||
    item.levelreq < (0,external_kolmafia_.myLevel)())
    {
      return false;
    }

    return (0,external_kolmafia_.itemType)(item) == "booze";
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
    (0,external_kolmafia_.mySpleenUse)() + item.spleen >= (0,external_kolmafia_.spleenLimit)() ||
    item.levelreq < (0,external_kolmafia_.myLevel)())
    {
      return false;
    }

    return (0,external_kolmafia_.itemType)(item) == "spleen item";
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
    return (0,external_kolmafia_.toSlot)(item) != external_kolmafia_.Slot.none;
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
    return item.isTradeable() && (0,external_kolmafia_.isDiscardable)(item.actualItem);
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
    return (0,external_kolmafia_.itemType)(item) == "familiar larva";
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
    if (item.isBound() || !(0,external_kolmafia_.isDiscardable)(item.actualItem)) {
      return false;
    }

    var price = (0,external_kolmafia_.autosellPrice)(item.actualItem) * 2;

    return price >= worth;
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
"Envelope full of Meat"].
map((s) => external_kolmafia_.Item.get(s));

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

function getPreset(name) {
  return presets.find((p) => {
    return p.name().includes(name.toLowerCase());
  });
}

function getPresets() {
  return presets;
}
;// ./src/AccountValSettings.ts
function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t.return || t.return();} finally {if (u) throw o;}} };}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}




var FieldType = /*#__PURE__*/function (FieldType) {FieldType[FieldType["NUMBER"] = 0] = "NUMBER";FieldType[FieldType["SORTBY"] = 1] = "SORTBY";FieldType[FieldType["COLOR_SCHEME"] = 2] = "COLOR_SCHEME";FieldType[FieldType["BOOLEAN"] = 3] = "BOOLEAN";FieldType[FieldType["NAME"] = 4] = "NAME";FieldType[FieldType["STRING"] = 5] = "STRING";FieldType[FieldType["TEXT_TYPE"] = 6] = "TEXT_TYPE";return FieldType;}({});


















var SortBy = /*#__PURE__*/function (SortBy) {SortBy[SortBy["NAME"] = 0] = "NAME";SortBy[SortBy["QUANTITY"] = 1] = "QUANTITY";SortBy[SortBy["PRICE"] = 2] = "PRICE";SortBy[SortBy["TOTAL_PRICE"] = 3] = "TOTAL_PRICE";SortBy[SortBy["SALES_VOLUME"] = 4] = "SALES_VOLUME";SortBy[SortBy["ITEM_ID"] = 5] = "ITEM_ID";return SortBy;}({});








var sortByAliases = new Map([
["count", SortBy.QUANTITY],
["amount", SortBy.QUANTITY],
["meat", SortBy.PRICE],
["price", SortBy.PRICE],
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
    _defineProperty(this, "fetchingNonItems", true);_defineProperty(this, "doSuperFast",
    false);_defineProperty(this, "doTradeables", void 0);_defineProperty(this, "doNontradeables", void 0);_defineProperty(this, "doBound", void 0);_defineProperty(this, "fetchFamiliars", void 0);_defineProperty(this, "fetchSnapshot", void 0);_defineProperty(this, "playerId",





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
    (0,external_kolmafia_.isDarkMode)() ? "dark" : "default");_defineProperty(this, "presets",
    []);_defineProperty(this, "doCategories",
    false);_defineProperty(this, "maxNaturalPrice",

    AccountValSettings.defaultMaxNaturalPrice);_defineProperty(this, "showSingleItemWorth",
    false);_defineProperty(this, "dateToFetch", void 0);_defineProperty(this, "logOutputAs",

    "fancy");}return _createClass(AccountValSettings, [{ key: "getSetting", value:















































































































































































































































































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

      if ((0,external_kolmafia_.getProperty)("accountval_maxNaturalPrice").length > 0) {
        this.maxNaturalPrice = this.toNumber(
          (0,external_kolmafia_.getProperty)("accountval_maxNaturalPrice")
        );
      }

      if ((0,external_kolmafia_.getProperty)("accountval_text").length > 0) {
        var str = (0,external_kolmafia_.getProperty)("accountval_text");

        if (str == "plain" || str == "fancy") {
          this.logOutputAs = str;
        } else {
          errors.push("The property 'accountval_text' has been set to '".concat(
            str, "' which is invalid.")
          );
        }
      }

      var defaultValues = [];
      var wasSet = [];

      var settings = AccountValSettings.getSettings();var _iterator2 = _createForOfIteratorHelper(

          settings),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var _setting = _step2.value;
          if (_setting.preset != null) {
            continue;
          }

          defaultValues[_setting.field] = this[_setting.field];
        }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}

      var addUnknown = (arg) => {
        errors.push("Failed to handle parameter: <font color='".concat(
          AccountValColors/* AccountValColors */.HK.failedToParseSettings, "'>").concat(arg, "</font>")
        );
      };var _iterator3 = _createForOfIteratorHelper(

          args),_step3;try {var _loop = function _loop() {var arg = _step3.value;
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

              isTrue = (0,external_kolmafia_.toBoolean)(v);
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

              if (!(0,AccountValColors/* getAccountvalColors */.Xf)().includes(_v2)) {
                addUnknown(arg);return 0; // continue

              }

              _this.colorScheme = _v2;
              (0,AccountValColors/* loadAccountvalColors */.x5)(_v2);
            } else if (setting.type == FieldType.TEXT_TYPE) {
              if (!arg.includes("=")) {
                addUnknown(arg);return 0; // continue

              }

              var _v3 = arg.substring(arg.indexOf("=") + 1).toLowerCase();

              if (_v3.length == 0) {
                addUnknown(arg);return 0; // continue

              }

              if (_v3 != "plain" && _v3 != "fancy") {
                addUnknown(arg);return 0; // continue

              }

              _this.logOutputAs = _v3;
            } else if (
            setting.type == FieldType.NUMBER ||
            setting.type == FieldType.NAME)
            {
              if (!arg.includes("=")) {
                addUnknown(arg);return 0; // continue

              }

              var _v4 = arg.substring(arg.indexOf("=") + 1);

              if (_v4.length == 0) {
                addUnknown(arg);return 0; // continue

              }

              if (setting.type == FieldType.NAME) {
                if (!_v4.match(/^[0-9]+$/)) {
                  _v4 = (0,external_kolmafia_.getPlayerId)(_v4);

                  if (!_v4.match(/^[0-9]+$/)) {
                    errors.push("Failed to convert <font color='".concat(
                      AccountValColors/* AccountValColors */.HK.failedToParseSettings, "'>").concat(_v4, "</font> into a player ID")
                    );return 0; // continue

                  }
                }
              }

              var num = _this.toNumber(_v4);

              if (_v4 == null) {
                addUnknown(arg);return 0; // continue

              }

              _this[setting.field] = num;
            } else if (setting.type == FieldType.STRING) {
              if (!arg.includes("=")) {
                addUnknown(arg);return 0; // continue

              }

              var _v5 = arg.substring(arg.indexOf("=") + 1);

              if (_v5.length == 0) {
                addUnknown(arg);return 0; // continue

              }

              _this[setting.field] = _v5;
            } else {
              if (setting.preset != null) {
                _this.presets.push({
                  preset: setting.preset,
                  negated: !isTrue
                });
              } else {
                _this[setting.field] = isTrue;
              }

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

      if (!wasSet.includes("fetchFamiliars") && wasSet.includes("hatchling")) {
        this.fetchFamiliars = false;
      } else if (
      !wasSet.includes("fetchFamiliars") &&
      this.fetchingEverywhereish)
      {
        this.fetchFamiliars = this.doBound;
      }

      for (var _i = 0, _fetchSources = fetchSources; _i < _fetchSources.length; _i++) {var fetchSource = _fetchSources[_i];
        if (this[fetchSource] != null) {
          continue;
        }

        this[fetchSource] = this.fetchingEverywhereish;
      }

      this.fetchingNonItems = this.fetchingEverywhereish;

      if (this.settingsDebug) {
        for (var _i2 = 0, _Object$keys = Object.keys(this); _i2 < _Object$keys.length; _i2++) {var setting = _Object$keys[_i2];
          (0,external_kolmafia_.print)(setting + " = " + this[setting]);
        }
      }

      return errors;
    } }, { key: "doesJSFilterUsePriceOrSales", value:

    function doesJSFilterUsePriceOrSales() {
      // We simply check for 3 args
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
      while (arg.includes(",") || arg.includes("_")) {
        arg = arg.replace(",", "").replace("_", "");
      }

      var match = arg.match(/^((?:\d+)|(?:\d*\.\d+))([mkbt]?)$/);

      if (match == null) {
        return null;
      }

      var num = (0,external_kolmafia_.toFloat)(match[1]);

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
    } }], [{ key: "getSettings", value: function getSettings() {var settings = [];function makeSetting(type, name, aliases, desc, groupUnder, preset) {var setting = { groupUnder: groupUnder, type: type, field: name, names: aliases.map((s) => s.toLowerCase()), desc: desc, preset: preset };settings.push(setting);return setting;}makeSetting(FieldType.BOOLEAN, "fetchCloset", ["closet", "clos"], "Should it fetch from the closet");makeSetting(FieldType.BOOLEAN, "fetchStorage", ["storage", "stor", "hagnk", "hagnks"], "Should it fetch from storage");makeSetting(FieldType.BOOLEAN, "fetchShop", ["store", "mall", "shop"], "Should it fetch from the shop");makeSetting(FieldType.BOOLEAN, "fetchInventory", ["inventory", "inv"], "Should it fetch from your inventory");makeSetting(FieldType.BOOLEAN, "fetchDisplaycase", ["displaycase", "display", "dc"], "Should it fetch from the displaycase");makeSetting(FieldType.BOOLEAN, "fetchClan", ["clan", "stash"], "Should it check clan's stash? False by default");makeSetting(FieldType.BOOLEAN, "fetchSession", ["session"], "Should it fetch using your current session of items acquired? False by default");makeSetting(FieldType.BOOLEAN, "doTradeables", ["tradeable", "tradeables", "trade", "tradable"], "Should it do tradeables");makeSetting(FieldType.BOOLEAN, "doNontradeables", ["notrade", "nontrade", "notradeable", "notradable", "nontradeable", "notradeables", "nontradeables", "untrade", "untradeable", "untradeables"], "Should it do non-tradeables (Resolves to tradeables if it can)");makeSetting(FieldType.BOOLEAN, "fetchFamiliars", ["familiar", "familiars", "fam", "fams"], "Should it do familiars (Resolves to their item). Bound being true also means this is true if not set");makeSetting(FieldType.BOOLEAN, "fetchSnapshot", ["snapshot"], "Should it attempt to use av-snapshot?");makeSetting(FieldType.BOOLEAN, "doBound", ["bound", "bind", "bounded", "binds", "binded"], "Should it do items that are bound to your account (Generally only iotms)");makeSetting(FieldType.NUMBER, "minimumMeat", ["meat", "minmeat", "minimummeat", "minmeat", "min-meat", "minprice", "price"], "Each item total worth, at least this amount.");makeSetting(FieldType.NUMBER, "minimumAmount", ["amount", "count", "minimumamount", "minamount"], "At least this many items");makeSetting(FieldType.NUMBER, "displayLimit", ["limit", "displaylimit", "maxdisplay", "lines"], "Limit results to display this amount");makeSetting(FieldType.NAME, "playerId", ["player", "playerid", "playername", "user", "who", "target", "name", "username"], 'Target another player\'s DC and Shop. Can provide the dc/shop param. Can do player="John Smith" for spaces');makeSetting(FieldType.BOOLEAN, "doSuperFast", ["fast", "superfast", "speed", "quick", "rough"], "Try resolve everything with historical price, no matter how outdated");makeSetting(FieldType.NUMBER, "maxAge", ["age", "maxage", "days"], "The max days a price is allowed to be outdated, useful if you're trying to force things to be more up to date");makeSetting(FieldType.SORTBY, "sortBy", ["sort", "sortby", "sorted"], "What we should sort the results by, prefix with ! or - to reverse sort. Supports: " + Object.keys(SortBy).filter((s) => s.length > 2).join(", "));makeSetting(FieldType.BOOLEAN, "shopWorth", ["worth", "shopworth", "pricing", "prices"], "Seperates items in shop from the other items, and shows how under/overpriced they are. This can be inaccurate");makeSetting(FieldType.STRING, "javascriptFilter", ["jsfilter", "javascriptfilter", "javascript", "js"], 'Filters if an item can be shown, provides an item & amount and expects a boolean. Any double quotes in your code must not have an empty space to the right. Example: jsfilter="(item, amount, worth, sales) => item.name.includes("beer") && toSlot(item) != Slot.none"');makeSetting(FieldType.NUMBER, "sales", ["sales", "sold"], "Hides items that have less than this amount of sales");makeSetting(FieldType.BOOLEAN, "useLastSold", ["useLastSold", "lastsold", "soldprice"], "Resolve prices by their last sold, initial runs with this parameter can be quite slow");makeSetting(FieldType.BOOLEAN, "brief", ["brief"], "Prints out a single line as the final result, the total meat.");makeSetting(FieldType.BOOLEAN, "oldPricing", ["oldpricing"], "Has accountval calculate prices from the old slower and more inaccurate method");makeSetting(FieldType.COLOR_SCHEME, "colorScheme", ["color", "colors", "colorscheme", "scheme"], "What color schemes to use, set `accountvalColorScheme` pref to change the default. Supports: " + (0,AccountValColors/* getAccountvalColors */.Xf)().join(", "));makeSetting(FieldType.NUMBER, "maxNaturalPrice", ["max", "mallmax"], "The max natural price an item will reach before it's capped and called mall extinct");makeSetting(FieldType.BOOLEAN, "doCategories", ["category", "categories", "shelf", "shelves"], "Used only for Display Cases at this point, seperates the items into categories");makeSetting(FieldType.BOOLEAN, "showSingleItemWorth", ["each"], "Displays the individual price of each item instead of the total, works best with `sort=meat`");makeSetting(FieldType.STRING, "dateToFetch", ["date", "fetchdate", "historical", "time", "when", "at"], "View everything with the prices of the past, either provide a `1d2m3y` which will automatically convert that into 1 day, 2 months and 3 years ago (capped automatically), or a specified date `DD-MM-YYYY` which cannot be older than 22-08-2023. This obviously won't work for newer items, and will make a backend call to `kolprices.lib.co.nz/files/:date`");makeSetting(FieldType.TEXT_TYPE, "logOutputAs", ["text", "logtype", "formatting"], "If accountval should log everything with \"fancy\" text, which means html, or \"plain\" which means the output is also logged to your session log, but will have no hover text or colors. Try looking into kolmafia 'mirror' if you want the output as html. Example usage: \"text=plain\". Change the default by using \"set accountval_text=plain\"");var _iterator5 = _createForOfIteratorHelper(getPresets()),_step5;try {for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {var preset = _step5.value;makeSetting(FieldType.BOOLEAN, preset.name()[0], preset.name(), preset.desc(), "Preset Filters", preset);}} catch (err) {_iterator5.e(err);} finally {_iterator5.f();}return settings;} }]);}();_defineProperty(AccountValSettings, "timingsDebug", false);_defineProperty(AccountValSettings, "defaultMaxNaturalPrice", 3000000000);


var PricingSettings = /*#__PURE__*/function () {function PricingSettings() {_classCallCheck(this, PricingSettings);_defineProperty(this, "expensivePricesAt",
    40000000);_defineProperty(this, "cheapTotalsLessThan",
    20000000);_defineProperty(this, "cheapPricesLessThan",
    2000000);_defineProperty(this, "maxPriceAge", void 0);_defineProperty(this, "oldPricing", void 0);_defineProperty(this, "dateToFetch", void 0);}return _createClass(PricingSettings, [{ key: "getMaxPriceAge", value:




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
    } }]);}();

/***/ }),

/***/ 477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HK: () => (/* binding */ AccountValColors),
/* harmony export */   Xf: () => (/* binding */ getAccountvalColors),
/* harmony export */   mh: () => (/* binding */ showAccountvalColors),
/* harmony export */   x5: () => (/* binding */ loadAccountvalColors)
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
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

/***/ 519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fx: () => (/* binding */ ValItem),
/* harmony export */   Kw: () => (/* binding */ ItemStatus),
/* harmony export */   ND: () => (/* binding */ AccountValLogic)
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ItemResolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(578);
/* harmony import */ var _PriceResolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(616);
/* harmony import */ var _AccountValSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(351);
/* harmony import */ var _PageResolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(746);
/* harmony import */ var _AccountValColors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(477);
/* harmony import */ var _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(866);
function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _slicedToArray(r, e) {return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function _arrayWithHoles(r) {if (Array.isArray(r)) return r;}function _toConsumableArray(r) {return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArray(r) {if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);}function _arrayWithoutHoles(r) {if (Array.isArray(r)) return _arrayLikeToArray(r);}function _createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t.return || t.return();} finally {if (u) throw o;}} };}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}







var ItemStatus = /*#__PURE__*/function (ItemStatus) {ItemStatus[ItemStatus["BOUND"] = 0] = "BOUND";ItemStatus[ItemStatus["NO_TRADE"] = 1] = "NO_TRADE";ItemStatus[ItemStatus["FAMILIAR"] = 2] = "FAMILIAR";ItemStatus[ItemStatus["IN_USE"] = 3] = "IN_USE";ItemStatus[ItemStatus["SHOP_WORTH"] = 4] = "SHOP_WORTH";return ItemStatus;}({});











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

    } }]);}();


var AccountValLogic = /*#__PURE__*/function () {













  function AccountValLogic(settings, priceSettings) {_classCallCheck(this, AccountValLogic);_defineProperty(this, "ownedItems", new Map());_defineProperty(this, "resolver", void 0);_defineProperty(this, "priceResolver", void 0);_defineProperty(this, "prices", []);_defineProperty(this, "categoryOrder", []);_defineProperty(this, "settings", void 0);_defineProperty(this, "jsFilter", void 0);
    this.settings = settings;
    this.priceResolver = new _PriceResolver__WEBPACK_IMPORTED_MODULE_2__/* .PriceResolver */ .cb(priceSettings);
    this.resolver = new _ItemResolver__WEBPACK_IMPORTED_MODULE_1__/* .ItemResolver */ .O(this.priceResolver);
  }return _createClass(AccountValLogic, [{ key: "addItem", value:

    function addItem(item) {var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      this.ownedItems.set(item, (this.ownedItems.get(item) | 0) + count);
    } }, { key: "bindsIntoAccountFlag", value:

    function bindsIntoAccountFlag(itemType) {
      return (
        itemType != _ItemResolver__WEBPACK_IMPORTED_MODULE_1__/* .ItemType */ .S.CURRENCY && itemType != _ItemResolver__WEBPACK_IMPORTED_MODULE_1__/* .ItemType */ .S.UNTRADEABLE_ITEM);

    } }, { key: "loadPageItems", value:

    function loadPageItems() {
      var pager = new _PageResolver__WEBPACK_IMPORTED_MODULE_4__/* .FetchFromPage */ .S();

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
          if (!this.categoryOrder.includes(k.shelf)) {
            this.categoryOrder.push(k.shelf);
          }

          this.addItem(new ValItem(k.item).withCategory(k.shelf), v);
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

            snapshot),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var _item = _step.value;
            if (_item instanceof kolmafia__WEBPACK_IMPORTED_MODULE_0__.Familiar) {
              _familiars.push(_item);
            } else if (_item instanceof kolmafia__WEBPACK_IMPORTED_MODULE_0__.Skill) {
              skills.push(_item);
            } else if (_item instanceof kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item) {
              _items2.set(_item, 1);
            } else {
              _items2.set(_item[0], _item[1]);
            }
          }} catch (err) {_iterator.e(err);} finally {_iterator.f();}

        if (!resolvedFamiliars && this.settings.fetchFamiliars) {
          this.resolver.resolveFamiliars(_familiars, this.ownedItems);
        }

        if (this.settings.doBound && this.settings.fetchingNonItems) {var _iterator2 = _createForOfIteratorHelper(
              this.resolver.accValStuff.filter(
                (s) => s.itemType == _ItemResolver__WEBPACK_IMPORTED_MODULE_1__/* .ItemType */ .S.SKILL && skills.includes(s.skill)
              )),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var item = _step2.value;
              this.addItem(
                new ValItem(
                  item.actualItem,
                  item.actualItem,
                  item.actualItem.name,
                  item.actualItem.plural,
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

          var actualItem = k;
          var name = k.name;
          var plural = k.plural;

          if (boundItem.itemType == _ItemResolver__WEBPACK_IMPORTED_MODULE_1__/* .ItemType */ .S.UNTRADEABLE_ITEM) {
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
            new ValItem(
              actualItem,
              k,
              name,
              plural,
              ItemStatus.BOUND,
              "av-snapshot"
            ),
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
        _AccountValColors__WEBPACK_IMPORTED_MODULE_5__/* .AccountValColors */ .HK.minorNote
      );

      try {
        this.jsFilter = eval(
          "with (require(\"kolmafia\")) " + this.settings.javascriptFilter
        );
      } catch (e) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
          "Invalid jsfilter provided! Error as follows:",
          _AccountValColors__WEBPACK_IMPORTED_MODULE_5__/* .AccountValColors */ .HK.attentionGrabbingWarning
        );
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)();
        throw e;
      }
    } }, { key: "loadItems", value:

    function loadItems() {
      _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.start("Load JS Filter");
      this.loadJsFilter();
      _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.stop("Load JS Filter");

      if (this.settings.playerId > 0) {
        _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.start("Load Page Items");
        this.loadPageItems();
        _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.stop("Load Page Items");

        return;
      }

      _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.start("Resolve Familiar Items");
      var famItems = this.resolver.resolveFamiliarItems();
      _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.stop("Resolve Familiar Items");

      _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.start("Resolve Session");
      var sessionItems = this.resolver.resolveSessionItems();
      _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.stop("Resolve Session");

      _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.start("Resolve Inventory");
      var mega = this.settings.fetchInventory ?
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getInventory)() :
      {};
      _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.stop("Resolve Inventory");

      var megaExtra = new Map();

      var add = (stuff) => {
        Object.entries(stuff).forEach((_ref3) => {var _mega$k;var _ref4 = _slicedToArray(_ref3, 2),k = _ref4[0],v = _ref4[1];
          mega[k] = ((_mega$k = mega[k]) !== null && _mega$k !== void 0 ? _mega$k : 0) + v;
        });
      };

      if (this.settings.fetchCloset) {
        _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.start("Resolve and Add Closet");
        add((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getCloset)());
        _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.stop("Resolve and Add Closet");
      }

      if (this.settings.fetchStorage) {
        _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.start("Resolve and Add Storage");
        add((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getStorage)());
        _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.stop("Resolve and Add Storage");
      }

      if (this.settings.fetchClan) {
        _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.start("Resolve and Add Clan Stash");
        add((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getStash)());
        _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.stop("Resolve and Add Clan Stash");
      }

      if (this.settings.fetchDisplaycase) {
        if (this.settings.doCategories) {
          _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.start("Resolve and Add Display Case with Shelves");
          var pager = new _PageResolver__WEBPACK_IMPORTED_MODULE_4__/* .FetchFromPage */ .S();
          var items = pager.getDisplaycase((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myId)()));

          items.forEach((v, k) => {
            if (!this.categoryOrder.includes(k.shelf)) {
              this.categoryOrder.push(k.shelf);
            }

            megaExtra.set(k.item, {
              shelf: k.shelf,
              count: v
            });
          });
          _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.stop("Resolve and Add Display Case with Shelves");
        } else {
          _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.start("Resolve and Add Display Case");
          add((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getDisplay)());
          _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.stop("Resolve and Add Display Case");
        }
      }

      if (this.settings.fetchShop && !this.settings.shopWorth) {
        _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.start("Resolve and Add Shop");
        add((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getShop)());
        _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.stop("Resolve and Add Shop");
      }

      _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.start("Process All Items");var _iterator3 = _createForOfIteratorHelper(

          kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.all()),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var _mega$_item2$name;var _item2 = _step3.value;
          var amount = (_mega$_item2$name = mega[_item2.name]) !== null && _mega$_item2$name !== void 0 ? _mega$_item2$name : 0;

          if (this.settings.fetchSession) {var _sessionItems$get;
            amount += (_sessionItems$get = sessionItems.get(_item2)) !== null && _sessionItems$get !== void 0 ? _sessionItems$get : 0;
          }

          if (this.settings.fetchInventory) {var _famItems$get;
            amount += (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedAmount)(_item2) + ((_famItems$get = famItems.get(_item2)) !== null && _famItems$get !== void 0 ? _famItems$get : 0);
          }

          var category = void 0;

          if (megaExtra.has(_item2)) {
            amount += megaExtra.get(_item2).count;
            category = megaExtra.get(_item2).shelf;
          }

          if (
          this.settings.fetchShop &&
          this.settings.shopWorth &&
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.shopAmount)(_item2) > 0)
          {
            var _i = new ValItem(_item2).withCategory(category);
            _i.bound = ItemStatus.SHOP_WORTH;
            _i.shopWorth = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.shopPrice)(_item2);

            this.ownedItems.set(_i, (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.shopAmount)(_item2));
            continue;
          }

          if (amount == 0) {
            continue;
          }

          this.ownedItems.set(new ValItem(_item2).withCategory(category), amount);
        }} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}

      _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.stop("Process All Items");

      if (this.settings.fetchFamiliars != false) {
        _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.start("Resolve Familiars");
        this.resolver.resolveFamiliars(
          kolmafia__WEBPACK_IMPORTED_MODULE_0__.Familiar.all().filter((f) => (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveFamiliar)(f)),
          this.ownedItems
        );
        _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.stop("Resolve Familiars");
      }

      // Check our current workshed
      if (this.settings.fetchingEverywhereish && this.settings.fetchingNonItems) {
        _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.start("Resolve Workshed");

        if (this.settings.doBound || this.settings.doTradeables) {
          var i = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getWorkshed)();

          if (i != null && i != kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.none) {
            if (
            i.tradeable ? this.settings.doTradeables : this.settings.doBound)
            {
              this.addItem(
                new ValItem(i, i, i.name, i.plural, ItemStatus.IN_USE)
              );
            }
          }
        }

        _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.stop("Resolve Workshed");
      }

      if (this.settings.doBound && this.settings.fetchingNonItems) {
        _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.start("Resolve Urled Items");var _iterator4 = _createForOfIteratorHelper(

            this.resolver.getUrledItems()),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var _step4$value = _slicedToArray(_step4.value, 2),item = _step4$value[0],status = _step4$value[1];
            if (
            item.tradeable && (
            status == ItemStatus.FAMILIAR || status != ItemStatus.BOUND) ?
            !this.settings.doTradeables :
            !this.settings.doBound)
            {
              continue;
            }

            this.addItem(new ValItem(item, item, item.name, item.plural, status));
          }} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}

        _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.stop("Resolve Urled Items");
      }

      _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.start("Resolve No-Trades");
      this.resolveNoTrades();
      _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.stop("Resolve No-Trades");
    } }, { key: "resolveNoTrades", value:

    function resolveNoTrades() {
      var copy = {};

      this.ownedItems.forEach((v, k) => {
        copy[k.tradeableItem.name] = [k, v];
      });

      if (this.settings.doBound || this.settings.doNontradeables) {
        this.resolver.resolveBoundToTradeables(copy, this.ownedItems, [
        this.settings.doBound ? _ItemResolver__WEBPACK_IMPORTED_MODULE_1__/* .ItemType */ .S.UNTRADEABLE_ITEM : null,
        this.settings.doNontradeables ? _ItemResolver__WEBPACK_IMPORTED_MODULE_1__/* .ItemType */ .S.CURRENCY : null]
        );
      }

      var skipJsFilter = this.settings.doesJSFilterUsePriceOrSales();var _iterator5 = _createForOfIteratorHelper(

          this.ownedItems.keys()),_step5;try {for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {var item = _step5.value;
          if (
          !skipJsFilter &&
          this.jsFilter != null &&
          !this.jsFilter(item.tradeableItem, this.ownedItems.get(item)))
          {
            this.ownedItems.delete(item);
            continue;
          }

          // If item can't be resolved to a price at all
          if (
          !item.isBound() && (
          !item.tradeableItem.tradeable || item.tradeableItem.gift) &&
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosellPrice)(item.tradeableItem) == 0)
          {
            this.ownedItems.delete(item);
            continue;
          }

          if (this.ownedItems.get(item) < this.settings.minimumAmount) {
            this.ownedItems.delete(item);
            continue;
          }

          // If we're not doing bound items, and this is a bound item..
          if (
          !this.settings.doBound &&
          item.isBound() &&
          item.bound != ItemStatus.FAMILIAR)
          {
            this.ownedItems.delete(item);
            continue;
          }

          // If we're not doing familiars and this is a familiar
          if (
          item.bound == ItemStatus.FAMILIAR && (
          this.settings.fetchFamiliars == false ||
          this.settings.fetchFamiliars == null && !this.settings.doBound))
          {
            this.ownedItems.delete(item);
            continue;
          }

          // If we're not doing tradeables, and this isn't a bound item, and is tradeable
          if (
          !this.settings.doTradeables &&
          item.tradeableItem.tradeable &&
          item.isTradeable())
          {
            this.ownedItems.delete(item);
            continue;
          }

          // If we're not doing non-tradeables, and this is a non-tradeable that isn't bound. Also is worth something..
          if (
          !this.settings.doNontradeables &&
          !item.tradeableItem.tradeable &&
          !item.isBound())
          {
            this.ownedItems.delete(item);
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

        if (!settings.isShown(item, price.price)) {
          ownedItems.delete(item);

          return;
        }

        if (
        settings.presets.some(
          (p) => !p.negated && p.preset.name().includes("autosell")
        ))
        {
          price.price = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosellPrice)(item.actualItem);
        }

        prices.push([item, price]);
      };

      _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.start("Add Logic Prices");var _iterator6 = _createForOfIteratorHelper(

          this.ownedItems.keys()),_step6;try {for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {var _i2 = _step6.value;
          _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.start("Price Item", true);
          var _price = this.priceResolver.itemPrice(
            _i2.tradeableItem,
            this.ownedItems.get(_i2),
            false,
            this.settings.doSuperFast ?
            _PriceResolver__WEBPACK_IMPORTED_MODULE_2__/* .PriceType */ .SJ.HISTORICAL :
            this.settings.useLastSold ?
            _PriceResolver__WEBPACK_IMPORTED_MODULE_2__/* .PriceType */ .SJ.MALL_SALES :
            null,
            this.settings.doSuperFast,
            true
          );
          _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.stop("Price Item");

          if (_price == null) {
            continue;
          } else if (_price.price > 0 || _price.accuracy == _PriceResolver__WEBPACK_IMPORTED_MODULE_2__/* .PriceType */ .SJ.NEW_PRICES) {
            _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.start("Add Item Price", true);
            addPrice(_i2, _price);
            _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.stop("Add Item Price");
          } else {
            toCheck.push([_i2, _price]);
          }
        }} catch (err) {_iterator6.e(err);} finally {_iterator6.f();}

      _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.stop("Add Logic Prices");

      // TODO Sort tocheck

      var checked = -1;

      if (toCheck.length > 200) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
          "Think this will take too long? Use the parameter 'fast', it's less accurate!",
          _AccountValColors__WEBPACK_IMPORTED_MODULE_5__/* .AccountValColors */ .HK.helpfulStateInfo
        );
      }

      if (toCheck.length > 0) {
        _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.start("Check Remaining Logic Item Prices");var _iterator7 = _createForOfIteratorHelper(

            toCheck),_step7;try {for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {var check = _step7.value;
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
                _AccountValColors__WEBPACK_IMPORTED_MODULE_5__/* .AccountValColors */ .HK.helpfulStateInfo
              );
            }

            var price = this.priceResolver.itemPrice(
              i.tradeableItem,
              this.ownedItems.get(i),
              false,
              check[1].accuracy
            );

            if (price == null) {
              continue;
            }

            addPrice(i, price);
          }} catch (err) {_iterator7.e(err);} finally {_iterator7.f();}

        _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.stop("Check Remaining Logic Item Prices");
      }

      _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.start("Sort Price List");
      this.doSort();
      _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.stop("Sort Price List");
    } }, { key: "doSort", value:

    function doSort() {
      var sorter = (v1, v2) => 0;

      if (this.settings.sortBy == _AccountValSettings__WEBPACK_IMPORTED_MODULE_3__/* .SortBy */ .gx.TOTAL_PRICE) {
        sorter = (v1, v2) =>
        (v1[1].price <= 0 ?
        this.settings.maxNaturalPrice :
        1 / v1[0].worthMultiplier * v1[1].price) *
        this.ownedItems.get(v1[0]) -
        (v2[1].price <= 0 ?
        this.settings.maxNaturalPrice :
        1 / v2[0].worthMultiplier * v2[1].price) *
        this.ownedItems.get(v2[0]);
      } else if (this.settings.sortBy == _AccountValSettings__WEBPACK_IMPORTED_MODULE_3__/* .SortBy */ .gx.PRICE) {
        sorter = (v1, v2) =>
        (v1[1].price <= 0 ?
        this.settings.maxNaturalPrice :
        1 / v1[0].worthMultiplier * v1[1].price) - (
        v2[1].price <= 0 ?
        this.settings.maxNaturalPrice :
        1 / v2[0].worthMultiplier * v2[1].price);
      } else if (this.settings.sortBy == _AccountValSettings__WEBPACK_IMPORTED_MODULE_3__/* .SortBy */ .gx.QUANTITY) {
        sorter = (v1, v2) =>
        this.ownedItems.get(v1[0]) - this.ownedItems.get(v2[0]);
      } else if (this.settings.sortBy == _AccountValSettings__WEBPACK_IMPORTED_MODULE_3__/* .SortBy */ .gx.NAME) {
        sorter = (v1, v2) => v1[0].name.localeCompare(v2[0].name);
      } else if (this.settings.sortBy == _AccountValSettings__WEBPACK_IMPORTED_MODULE_3__/* .SortBy */ .gx.ITEM_ID) {
        sorter = (v1, v2) =>
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(v1[0].tradeableItem) - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(v2[0].tradeableItem);
      } else if (this.settings.sortBy == _AccountValSettings__WEBPACK_IMPORTED_MODULE_3__/* .SortBy */ .gx.SALES_VOLUME) {
        sorter = (v1, v2) => v1[1].volume - v2[1].volume;
      } else {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.abort)("Unknown sort option " + this.settings.sortBy);
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

/***/ }),

/***/ 578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ ItemResolver),
/* harmony export */   S: () => (/* binding */ ItemType)
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(519);
/* harmony import */ var _AccountValColors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(477);
/* harmony import */ var _CoinmasterResolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66);
/* harmony import */ var _data_accountval_binds_txt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(854);
function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _slicedToArray(r, e) {return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function _arrayWithHoles(r) {if (Array.isArray(r)) return r;}function _createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t.return || t.return();} finally {if (u) throw o;}} };}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}




var

AccValStuff = /*#__PURE__*/_createClass(function AccValStuff() {_classCallCheck(this, AccValStuff);_defineProperty(this, "itemType", void 0);_defineProperty(this, "actualItem", void 0);_defineProperty(this, "skill", void 0);_defineProperty(this, "untradeableItem", void 0);_defineProperty(this, "garden", void 0);_defineProperty(this, "script", void 0);_defineProperty(this, "userSetting", void 0);_defineProperty(this, "visitUrlLink", void 0);_defineProperty(this, "visitUrlIncludes", void 0);_defineProperty(this, "correspondence", void 0);_defineProperty(this, "currencyAmount", void 0);});













var ItemType = /*#__PURE__*/function (ItemType) {ItemType[ItemType["UNTRADEABLE_ITEM"] = 0] = "UNTRADEABLE_ITEM";ItemType[ItemType["BOOK"] = 1] = "BOOK";ItemType[ItemType["PROPERTY"] = 2] = "PROPERTY";ItemType[ItemType["EUDORA"] = 3] = "EUDORA";ItemType[ItemType["GARDEN"] = 4] = "GARDEN";ItemType[ItemType["VISIT_URL_CHECK"] = 5] = "VISIT_URL_CHECK";ItemType[ItemType["SKILL"] = 6] = "SKILL";ItemType[ItemType["CURRENCY"] = 7] = "CURRENCY";ItemType[ItemType["CAMPGROUND"] = 8] = "CAMPGROUND";ItemType[ItemType["SCRIPT"] = 9] = "SCRIPT";return ItemType;}({});





















var ItemResolver = /*#__PURE__*/function () {






  function ItemResolver(prices) {_classCallCheck(this, ItemResolver);_defineProperty(this, "visitCache", new Map());_defineProperty(this, "accValStuff", void 0);_defineProperty(this, "accountValCache", new Map());_defineProperty(this, "accountValVisitCachePropName", "_accountValVisitCache");_defineProperty(this, "prices", void 0);
    this.accValStuff = this.loadAccountValStuff();
    this.prices = prices;
  }return _createClass(ItemResolver, [{ key: "loadCache", value:

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
              items.push([s.actualItem, _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus */ .Kw.BOUND]);
            }
          } else if (s.itemType == ItemType.EUDORA) {
            if (
            this.visitCheck(
              s.actualItem,
              "account.php?tab=correspondence",
              s.correspondence
            ))
            {
              items.push([s.actualItem, _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus */ .Kw.BOUND]);
            }
          } else if (s.itemType == ItemType.PROPERTY) {
            if (this.testProperty(s.userSetting)) {
              items.push([s.actualItem, _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus */ .Kw.BOUND]);
            }
          } else if (s.itemType == ItemType.VISIT_URL_CHECK) {
            if (this.visitCheck(s.actualItem, s.visitUrlLink, s.visitUrlIncludes)) {
              items.push([s.actualItem, _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus */ .Kw.BOUND]);
            }
          } else if (s.itemType == ItemType.GARDEN) {
            if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myGardenType)() == s.garden) {
              items.push([s.actualItem, _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus */ .Kw.IN_USE]);
            }
          } else if (s.itemType == ItemType.SKILL) {
            if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getPermedSkills)()[s.skill.name]) {
              items.push([s.actualItem, _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus */ .Kw.BOUND]);
            }
          } else if (s.itemType == ItemType.CAMPGROUND) {
            if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getCampground)()[s.actualItem.name] != null) {
              items.push([s.actualItem, _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus */ .Kw.BOUND]);
            }
          } else if (s.itemType == ItemType.SCRIPT) {
            if (eval(s.script)) {
              items.push([s.actualItem, _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus */ .Kw.BOUND]);
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
    actualItem,
    item,
    name,
    plural,
    bound)


    {var count = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;var worthMultiplier = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 1;
      var v = new _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ValItem */ .Fx(actualItem, item, name, plural, bound);
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
            if (s.itemType == ItemType.CURRENCY && s.untradeableItem == null) {
              if (coinmaster == null) {
                coinmaster = new _CoinmasterResolver__WEBPACK_IMPORTED_MODULE_3__/* .CoinmasterResolver */ .w(this.prices);
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
              v.bound == null || v.bound == _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus */ .Kw.NO_TRADE ?
              s.itemType == ItemType.UNTRADEABLE_ITEM ?
              _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus */ .Kw.BOUND :
              _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus */ .Kw.NO_TRADE :
              v.bound,
              pair[1], (_s$currencyAmount =
              s.currencyAmount) !== null && _s$currencyAmount !== void 0 ? _s$currencyAmount : 1
            );
          } catch (e) {
            (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
              "You probably need to update mafia! Got an error! " + e,
              _AccountValColors__WEBPACK_IMPORTED_MODULE_2__/* .AccountValColors */ .HK.attentionGrabbingWarning
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
            fam + "",
            fam + "",
            _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus */ .Kw.FAMILIAR
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

          var item = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.familiarEquippedEquipment)(fam);

          if (item == null || item == kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.none) {
            continue;
          }

          famEquipped.set(item, (famEquipped.get(item) | 0) + 1);
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
      var buffer = _data_accountval_binds_txt__WEBPACK_IMPORTED_MODULE_4__;
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
              _AccountValColors__WEBPACK_IMPORTED_MODULE_2__/* .AccountValColors */ .HK.attentionGrabbingWarning
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

              // Some currencies are resolved later
              if (spl.length > 2) {
                _v.untradeableItem = kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.get(spl[2]);
                _v.currencyAmount = parseInt(spl[3]);
              }

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
                _AccountValColors__WEBPACK_IMPORTED_MODULE_2__/* .AccountValColors */ .HK.attentionGrabbingWarning
              );
              continue;
          }

          _v.itemType = e;
          values.push(_v);
        }} catch (err) {_iterator7.e(err);} finally {_iterator7.f();}

      this.loadSkills(values);

      loop: for (var _i = 0, _values = values; _i < _values.length; _i++) {var v = _values[_i];
        if (
        v.actualItem.tradeable ||
        v.itemType == ItemType.CURRENCY && v.untradeableItem == null)
        {
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
          _AccountValColors__WEBPACK_IMPORTED_MODULE_2__/* .AccountValColors */ .HK.attentionGrabbingWarning
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
    } }]);}();

/***/ }),

/***/ 616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SJ: () => (/* binding */ PriceType),
/* harmony export */   cb: () => (/* binding */ PriceResolver)
/* harmony export */ });
/* unused harmony export ItemPrice */
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AccountValTimings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(866);
function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t.return || t.return();} finally {if (u) throw o;}} };}function _slicedToArray(r, e) {return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function _iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function _arrayWithHoles(r) {if (Array.isArray(r)) return r;}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}




var PriceType = /*#__PURE__*/function (PriceType) {PriceType[PriceType["NEW_PRICES"] = 0] = "NEW_PRICES";PriceType[PriceType["HISTORICAL"] = 1] = "HISTORICAL";PriceType[PriceType["MALL"] = 2] = "MALL";PriceType[PriceType["MALL_SALES"] = 3] = "MALL_SALES";PriceType[PriceType["AUTOSELL"] = 4] = "AUTOSELL";return PriceType;}({});







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
  });var









NewPrices = /*#__PURE__*/function () {





  function NewPrices(settings) {_classCallCheck(this, NewPrices);_defineProperty(this, "prices", void 0);_defineProperty(this, "lastUpdated", void 0);_defineProperty(this, "ofThePast", false);_defineProperty(this, "settings", void 0);
    this.settings = settings;
  }return _createClass(NewPrices, [{ key: "isValid", value:

    function isValid() {
      if (this.prices == null) {
        return false;
      }

      if (this.ofThePast) {
        return true;
      }

      if (this.lastUpdated == null) {
        return false;
      }

      // If it hasn't been updated in a week, then Irrat is ded
      if (this.lastUpdated + 7 * 24 * 60 * 60 < Date.now() / 1000) {
        return false;
      }

      return true;
    } }, { key: "getData", value:

    function getData() {
      var toFetch = this.settings.dateToFetch;

      if (toFetch == null) {
        return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.fileToBuffer)("irrats_item_prices.txt");
      }

      var finalDateString;
      var minDate = new Date(2023, 7, 23); // August is month 7 (0-indexed)
      minDate.setHours(0, 0, 0, 0); // Normalize to midnight for accurate comparison

      var absoluteDateRegex = /^\d{1,2}[-/]\d{1,2}[-/]\d{4}$/;

      if (absoluteDateRegex.test(toFetch)) {
        var _toFetch$split$map = toFetch.split(/[-/]/).map(Number),_toFetch$split$map2 = _slicedToArray(_toFetch$split$map, 3),day = _toFetch$split$map2[0],month = _toFetch$split$map2[1],year = _toFetch$split$map2[2];
        var parsedDate = new Date(year, month - 1, day);
        parsedDate.setHours(0, 0, 0, 0);

        // Verify that the created date is valid
        if (
        parsedDate.getFullYear() !== year ||
        parsedDate.getMonth() !== month - 1 ||
        parsedDate.getDate() !== day)
        {
          throw new Error("Invalid date provided: ".concat(
            toFetch, " resolved to ").concat(parsedDate.getDate(), "-").concat(
            parsedDate.getMonth() + 1, "-").concat(
            parsedDate.getFullYear(), ".")
          );
        }

        if (parsedDate < minDate) {
          throw new Error("Date ".concat(toFetch, " cannot be older than 23-08-2023."));
        }

        finalDateString = toFetch;
      } else {var _dMatch$0$length, _mMatch$0$length, _yMatch$0$length;
        // Handle relative date format like '1d2m3y'
        var dMatch = toFetch.match(/(\d+)d(?:ays?)?/);
        var mMatch = toFetch.match(/(\d+)m(?:onths?)?/);
        var yMatch = toFetch.match(/(\d+)y(?:ears?)?/);

        var days = dMatch ? parseInt(dMatch[1], 10) : 0;
        var months = mMatch ? parseInt(mMatch[1], 10) : 0;
        var years = yMatch ? parseInt(yMatch[1], 10) : 0;

        // Validate that the entire string consists only of relative times
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

        // Cap the date if it's older than the allowed date
        if (targetDate < minDate) {
          targetDate = minDate;
        }

        // Format the calculated date into DD-MM-YYYY
        var finalDay = String(targetDate.getDate()).padStart(2, "0");
        var finalMonth = String(targetDate.getMonth() + 1).padStart(2, "0");
        var finalYear = targetDate.getFullYear();
        finalDateString = "".concat(finalDay, "-").concat(finalMonth, "-").concat(finalYear);
      }

      var responseText = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("https://kolprices.lib.co.nz/file/".concat(
        finalDateString)
      );

      if (!responseText.startsWith("Last Updated:")) {
        if (responseText.length > 200) {
          throw new Error("Received an unexpected response from the server.");
        } else {
          throw new Error(responseText);
        }
      }

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Now resolving prices with date: ".concat(finalDateString), "blue");
      this.ofThePast = true;

      return responseText;
    } }, { key: "load", value:

    function load() {
      var buffer = this.getData();

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
          var volume = spl2[3] ? parseInt(spl2[3]) : -1;
          var lastSoldAt = spl2[4] ? parseInt(spl2[4]) : -1;

          this.prices[itemId] = {
            price: price,
            updated: age,
            volume: volume,
            lastSoldAt: lastSoldAt
          };
        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}
    } }]);}();


var PriceResolver = /*#__PURE__*/function () {





  function PriceResolver(settings) {_classCallCheck(this, PriceResolver);_defineProperty(this, "history", void 0);_defineProperty(this, "specialCase", new Map());_defineProperty(this, "settings", void 0);_defineProperty(this, "newPrices", void 0);
    this.settings = settings;
    this.newPrices = new NewPrices(settings);

    if (!settings.oldPricing) {
      this.newPrices.load();
    }

    if (!this.newPrices.isValid()) {
      this.getMallHistory();
    }

    this.fillSpecialCase();
  }return _createClass(PriceResolver, [{ key: "getMallHistory", value:

    function getMallHistory() {
      if (this.history == null) {
        this.loadMallHistory();
      }

      return this.history;
    } }, { key: "loadMallHistory", value:

    function loadMallHistory() {
      // I want it in red so its obvious when its being used
      _AccountValTimings__WEBPACK_IMPORTED_MODULE_1__/* .AccValTiming */ .p.start("<font color=red>Load Mall History</font>");

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
      } finally {
        _AccountValTimings__WEBPACK_IMPORTED_MODULE_1__/* .AccValTiming */ .p.stop("<font color=red>Load Mall History</font>");
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
      if (!ignoreFold) {
        _AccountValTimings__WEBPACK_IMPORTED_MODULE_1__/* .AccValTiming */ .p.start("Check Foldable", true);

        try {
          var foldables = Object.keys((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getRelated)(item, "fold"));

          if (foldables != null && foldables.length > 1) {
            _AccountValTimings__WEBPACK_IMPORTED_MODULE_1__/* .AccValTiming */ .p.start("Deeper Foldable Check", true);

            try {
              var foldPrices = foldables.
              map((f) =>
              this.itemPrice(
                kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.get(f),
                amount,
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

              var compare = foldPrices.find((f) => f.item == item);var _iterator2 = _createForOfIteratorHelper(

                  foldPrices),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var f = _step2.value;
                  if (f.daysOutdated > compare.daysOutdated * 3) {
                    continue;
                  }

                  return f;
                }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}

              return foldPrices[0];
            } finally {
              _AccountValTimings__WEBPACK_IMPORTED_MODULE_1__/* .AccValTiming */ .p.stop("Deeper Foldable Check");
            }
          }
        } finally {
          _AccountValTimings__WEBPACK_IMPORTED_MODULE_1__/* .AccValTiming */ .p.stop("Check Foldable");
        }
      }

      _AccountValTimings__WEBPACK_IMPORTED_MODULE_1__/* .AccValTiming */ .p.start("Check Pricing Misc", true);

      try {
        if (this.specialCase.has(item)) {
          return new ItemPrice(
            item,
            this.specialCase.get(item),
            PriceType.MALL,
            0
          );
        }

        if (!item.tradeable) {
          return new ItemPrice(item, (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosellPrice)(item), PriceType.AUTOSELL, 0);
        }

        if (this.newPrices.isValid()) {
          var price = this.newPrices.prices[(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(item)];

          if (price != null) {
            var daysAge = Math.round(
              (Date.now() / 1000 - price.updated) / (60 * 60 * 24)
            );

            return new ItemPrice(
              item,
              price.price,
              PriceType.NEW_PRICES,
              daysAge,
              price.volume,
              price.lastSoldAt
            );
          } else if (this.newPrices.ofThePast) {
            return null;
          }
        }
      } finally {
        _AccountValTimings__WEBPACK_IMPORTED_MODULE_1__/* .AccValTiming */ .p.stop("Check Pricing Misc");
      }

      _AccountValTimings__WEBPACK_IMPORTED_MODULE_1__/* .AccValTiming */ .p.start("Create Price Resolver", true);
      var oldMallHistoryPricing = new MallHistoryPricing(
        this,
        this.settings,
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
        resolver = oldMallHistoryPricing;
      } else {
        var viablePrices = [
        oldMallHistoryPricing,
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

        resolver =
        viablePrices.length > 0 ? viablePrices[0] : oldMallHistoryPricing;

        // If we're not doing sales, and the price is apparently worth more than 50m
        if (
        !doSuperFast &&
        resolver != oldMallHistoryPricing &&
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.historicalPrice)(item) > 50000000)
        {
          // If we have no sale history on record, or the price diff is more than 50m
          if (
          oldMallHistoryPricing.getAge() == -1 ||
          Math.abs(
            oldMallHistoryPricing.getPrice(true).price - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.historicalPrice)(item)
          ) > 50000000)
          {
            resolver = oldMallHistoryPricing;
          }
        }
      }

      _AccountValTimings__WEBPACK_IMPORTED_MODULE_1__/* .AccValTiming */ .p.stop("Create Price Resolver");

      _AccountValTimings__WEBPACK_IMPORTED_MODULE_1__/* .AccValTiming */ .p.start("Run Pricing Checks", true);

      try {
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
      } finally {
        _AccountValTimings__WEBPACK_IMPORTED_MODULE_1__/* .AccValTiming */ .p.stop("Run Pricing Checks");
      }

      _AccountValTimings__WEBPACK_IMPORTED_MODULE_1__/* .AccValTiming */ .p.start("Run Final Pricing Check", true);

      try {
        if (
        doEstimates && (
        doSuperFast ? !resolver.isViable() : resolver.isOutdated()))
        {
          return new ItemPrice(item, -1, resolver.getPriceType(), 0);
        }

        var _price = resolver.getPrice();

        if (_price == null) {
          _price = mallPricing.getPrice();
        }

        return _price;
      } finally {
        _AccountValTimings__WEBPACK_IMPORTED_MODULE_1__/* .AccValTiming */ .p.stop("Run Final Pricing Check");
      }
    } }]);}();var




















MallHistoryPricing = /*#__PURE__*/function () {







  function MallHistoryPricing(
  newPrices,
  settings,
  item,
  amount)
  {_classCallCheck(this, MallHistoryPricing);_defineProperty(this, "item", void 0);_defineProperty(this, "amount", void 0);_defineProperty(this, "records", void 0);_defineProperty(this, "settings", void 0);_defineProperty(this, "newPrices", void 0);_defineProperty(this, "attemptedToLoadRecords", false);
    this.newPrices = newPrices;
    this.settings = settings;
    this.item = item;
    this.amount = amount;
  }return _createClass(MallHistoryPricing, [{ key: "getRecords", value:

    function getRecords() {
      if (this.item.tradeable && !this.attemptedToLoadRecords) {
        this.attemptedToLoadRecords = true;
        this.records = this.newPrices.
        getMallHistory().
        getMallRecords(this.item, 900, false);
      }

      return this.records;
    } }, { key: "isViable", value:

    function isViable() {
      // If we have no records, or if we have records or last records check attempt was less than 30 days ago
      return this.getRecords() == null || this.getRecords().records.length > 0;
    } }, { key: "isOutdated", value:

    function isOutdated() {
      if (this.getRecords() == null) {
        return true;
      }

      var lastUpdated =
      (Date.now() / 1000 - this.getRecords().lastUpdated) / (24 * 60 * 60);

      if (this.getRecords().records.length == 0) {
        return lastUpdated > 30;
      }

      var last =
      this.getRecords().records[this.getRecords().records.length - 1];
      var histAge = Math.min(
        (Date.now() / 1000 - last.date) / (24 * 60 * 60),
        lastUpdated
      );

      var histPrice = last.meat;

      var days = this.settings.getMaxPriceAge(histPrice, this.amount);

      return histAge > days;
    } }, { key: "getAge", value:

    function getAge() {
      if (this.getRecords() == null) {
        return -1;
      }

      var last =
      this.getRecords().records[this.getRecords().records.length - 1];

      if (last == null) {
        return -1;
      }

      var dateNow = Date.now() / 1000;

      return (dateNow - last.date) / (24 * 60 * 60);
    } }, { key: "getPrice", value:

    function getPrice() {var ignoreOutdated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!ignoreOutdated && this.item.tradeable && this.isOutdated()) {
        this.records = this.newPrices.
        getMallHistory().
        getMallRecords(this.item, 0.1, true);
      }

      var last =
      this.getRecords().records[this.getRecords().records.length - 1];

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
    } }]);}();var


MallSalesPricing = /*#__PURE__*/function () {




  function MallSalesPricing(settings, item, amount) {_classCallCheck(this, MallSalesPricing);_defineProperty(this, "item", void 0);_defineProperty(this, "amount", void 0);_defineProperty(this, "settings", void 0);
    this.settings = settings;
    this.item = item;
    this.amount = amount;
  }return _createClass(MallSalesPricing, [{ key: "isViable", value:

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
    } }]);}();var


HistoricalPricing = /*#__PURE__*/function () {




  function HistoricalPricing(settings, item, amount) {_classCallCheck(this, HistoricalPricing);_defineProperty(this, "item", void 0);_defineProperty(this, "amount", void 0);_defineProperty(this, "settings", void 0);
    this.settings = settings;
    this.item = item;
    this.amount = amount;
  }return _createClass(HistoricalPricing, [{ key: "isViable", value:

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
    } }]);}();

/***/ }),

/***/ 746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ FetchFromPage)
/* harmony export */ });
/* unused harmony export StoreItem */
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AccountValColors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(477);
function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t.return || t.return();} finally {if (u) throw o;}} };}function _toConsumableArray(r) {return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _iterableToArray(r) {if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);}function _arrayWithoutHoles(r) {if (Array.isArray(r)) return _arrayLikeToArray(r);}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}


var StoreItem = /*#__PURE__*/_createClass(function StoreItem() {_classCallCheck(this, StoreItem);_defineProperty(this, "item", void 0);_defineProperty(this, "amount", void 0);_defineProperty(this, "limit", void 0);_defineProperty(this, "price", void 0);});











var FetchFromPage = /*#__PURE__*/function () {function FetchFromPage() {_classCallCheck(this, FetchFromPage);}return _createClass(FetchFromPage, [{ key: "getSnapshot", value:
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
      ignore.push.apply(ignore, _toConsumableArray(
        Object.values((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.allNormalOutfits)()).map((s) => s.toLowerCase()))
      );
      ignore.push("miming regalia");

      var page = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)(
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
              _AccountValColors__WEBPACK_IMPORTED_MODULE_1__/* .AccountValColors */ .HK.attentionGrabbingWarning
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
            _AccountValColors__WEBPACK_IMPORTED_MODULE_1__/* .AccountValColors */ .HK.attentionGrabbingWarning
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
          item.item = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toItem)(match[1]);
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

      var page = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("displaycollection.php?who=" + userId);
      var lastShelf;
      var itemRegex =
      /<td width=30 height=30><img src=".+?" class=hand onClick='descitem\((\d+),(\d+)\)'><\/td><td valign=center><b>.+?<\/b>(?: \(((?:\d|,)+)\))?<\/td><\/tr>/;
      var shelfRegex = /<font color=white>([^<]+)<\/font>/;var _iterator2 = _createForOfIteratorHelper(

          page.split("<tr>")),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var s = _step2.value;
          var shelfMatch = s.match(shelfRegex);

          if (shelfMatch != null) {
            lastShelf = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.entityDecode)(shelfMatch[1]);
          }

          var match = s.match(itemRegex);

          if (match == null) {
            continue;
          }

          var item = descs.get(match[1]);

          if (item == null) {
            (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
              "Unknown item description: " + match[1] + ", update mafia?",
              _AccountValColors__WEBPACK_IMPORTED_MODULE_1__/* .AccountValColors */ .HK.attentionGrabbingWarning
            );
            continue;
          }

          map.set(
            {
              item: item,
              shelf: lastShelf
            },
            match[3] == null ? 1 : (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(match[3])
          );
        }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}

      return map;
    } }]);}();

/***/ }),

/***/ 854:
/***/ ((module) => {

module.exports = "# Original data stolen from https://github.com/soolar/accountval.ash (Mostly OC nowadays)\n# Item Containers! Start with i\ni\tpacket of mayfly bait\tmayfly bait necklace\ni\tClan VIP Lounge invitation\tClan VIP Lounge key\ni\tMake-Your-Own-Vampire-Fangs kit\tplastic vampire fangs\ni\tFolder Holder\tover-the-shoulder Folder Holder\ni\tcan of Rain-Doh\tempty Rain-Doh can\ni\tDiscontent&trade; Winter Garden Catalog\tpacket of winter seeds\ni\tEd the Undying exhibit crate\tThe Crown of Ed the Undying\ni\tPack of Every Card\tDeck of Every Card\ni\tDIY protonic accelerator kit\tprotonic accelerator pack\ni\tDear Past Self Package\tTime-Spinner\ni\tGranny Tood's Thanksgarden Catalog\tpacket of thanksgarden seeds\ni\tsuspicious package\tKremlin's Greatest Briefcase\ni\tLI-11 Motor Pool voucher\tAsdon Martin keyfob (on ring)\ni\tGrumpy Bumpkin's Pumpkin Seed Catalog\tpacket of pumpkin seeds\ni\tMint Salton Pepper's Peppermint Seed Catalog\tPeppermint Pip Packet\ni\tPete & Jackie's Dragon Tooth Emporium Catalog\tpacket of dragon's teeth\ni\tPocket Meteor Guide\tPocket Meteor Guide (well-thumbed)\ni\tcorked genie bottle\tgenie bottle\ni\tpantogram\tportable pantogram\ni\tlocked mumming trunk\tmumming trunk\ni\tJanuary's Garbage Tote (unopened)\tJanuary's Garbage Tote\ni\tPok&eacute;fam Guide to Capturing All of Them\tpacket of tall grass seeds\ni\tSongBoom&trade; BoomBox Box\tSongBoom&trade; BoomBox\ni\tBastille Battalion control rig crate\tBastille Battalion control rig\ni\tlatte lovers club card\tlatte lovers member's mug\ni\tKramco Industries packing carton\tKramco Sausage-o-Matic&trade;\ni\tmint condition Lil' Doctor&trade; bag\tLil' Doctor&trade; bag\ni\tvampyric cloake pattern\tvampyric cloake\ni\tFourth of May Cosplay Saber kit\tFourth of May Cosplay Saber\ni\trune-strewn spoon cocoon\thewn moon-rune spoon\ni\tBeach Comb Box\tBeach Comb\ni\tUnopened Eight Days a Week Pill Keeper\tEight Days a Week Pill Keeper\ni\tunopened diabolic pizza cube box\tdiabolic pizza cube\ni\tunopened Bird-a-Day calendar\tBird-a-Day calendar\ni\tmint-in-box Powerful Glove\tPowerful Glove\ni\tBetter Shrooms and Gardens catalog\tpacket of mushroom spores\ni\tGuzzlr application\tGuzzlr tablet\ni\tbag of Iunion stones\tIunion Crown\ni\tpackaged SpinMaster&trade; lathe\tSpinMaster&trade; lathe\ni\tBagged Cargo Cultist Shorts\tCargo Cultist Shorts\ni\tComprehensive Cartographic Compendium\tComprehensive Cartographic Compendium (well-read)\ni\tpackaged knock-off retro superhero cape\tunwrapped knock-off retro superhero cape\ni\tpackaged miniature crystal ball\tminiature crystal ball\ni\temotion chip\tspinal-fluid-covered emotion chip\ni\tpower seed\tpotted power plant\ni\tpackaged backup camera\tbackup camera\ni\tpackaged familiar scrapbook\tfamiliar scrapbook\ni\tpackaged industrial fire extinguisher\tindustrial fire extinguisher\ni\tPackaged Daylight Shavings Helmet\tDaylight Shavings Helmet\ni\tPackaged cold medicine cabinet\tCold medicine cabinet\ni\tbox o' ghosts\tgregarious ghostling\ni\tGordon Beer's Beer Garden Catalog\tPacket of beer seeds\ni\tMint condition magnifying glass\tcursed magnifying glass\ni\tAntique pair of blue jeans\tEllsbury's journal (used)\ni\twarehouse key\tmime army insignia (cryonics)\ni\twarehouse key\tmime army insignia (morale)\ni\twarehouse key\tmime army insignia (psychological warfare)\ni\twarehouse key\tmime army insignia (pyrotechnics)\ni\twarehouse key\tmime army insignia (sanitation)\ni\twarehouse key\tmime army insignia (espionage)\ni\twarehouse key\tmime army insignia (infantry)\ni\twarehouse key\tmime army insignia (intelligence)\ni\twarehouse key\tmime army infiltration glove\ni\twarehouse key\tmime army challenge coin\ni\twarehouse key\tmime army shotglass\ni\twarehouse key\tmiming corduroys\ni\twarehouse key\tmiming beret\ni\twarehouse key\tmiming gloves\ni\twarehouse key\tmiming boots\ni\twarehouse key\tmiming shirt\ni\tcombat lover's locket lockbox\tcombat lover's locket\ni\tundamaged Unbreakable Umbrella\tUnbreakable umbrella\ni\tpackaged June cleaver\tJune cleaver\ni\tdesigner sweatpants (new old stock)\tDesigner sweatpants\ni\tunopened tiny stillsuit\ttiny stillsuit\ni\tpackaged Jurassic Parka\tJurassic Parka\ni\tpackaged model train set\tmodel train set\ni\tChibiBuddy™ (off)\tChibiBuddy™ (on)\ni\tRock Garden Guide\tpacket of rock seeds\ni\tS.I.T. Course Voucher\tS.I.T. Course Completion Certificate\ni\tClosed-circuit phone system\tClosed-circuit pay phone\ni\tCursed monkey glove\tcursed monkey's paw\ni\tshrink-wrapped Cincho de Mayo\tCincho de Mayo\ni\tshrink-wrapped 2002 Mr. Store Catalog\t2002 Mr. Store Catalog\ni\tboxed august scepter\taugust scepter\ni\tbook of facts\tbook of facts (dog-eared)\ni\tcrated wardrobe-o-matic\twardrobe-o-matic\ni\twrapped candy cane sword cane\tcandy cane sword cane\ni\tin-the-box spring shoes\tspring shoes\ni\tpackaged Everfull Dart Holster\tEverfull Dart Holster\ni\tBoxed Apriling band helmet\tApriling band helmet\ni\tboxed Mayam Calendar\tMayam Calendar\ni\tpackaged Roman Candelabra\tRoman Candelabra\ni\tuntorn tearaway pants package\ttearaway pants\ni\tBoxed Sept-Ember Censer\tSept-Ember Censer\ni\tboxed bat wings\tbat wings\ni\tSealed TakerSpace letter of Marque\tTakerSpace letter of Marque\ni\tMcHugeLarge deluxe ski set\tMcHugeLarge duffel bag\ni\tCyberRealm keycode\tserver room key\ni\teldritch tincture\teldritch tincture (depleted)\ni\tnew-in-box toy Cupid bow\ttoy Cupid bow\ni\tassemble-it-yourself Leprecondo\tLeprecondo\ni\tPackaged April Shower Thoughts Calendar\tApril Shower Thoughts shield\ni\tUnpeeled Peridot of Peril\tPeridot of Peril\ni\tpackaged prismatic beret\tprismatic beret\ni\tMöbius ring box\tMöbius ring\ni\tpackaged Monodent of the Sea\tMonodent of the Sea\ni\tLab-grown blood cubic zirconia\tblood cubic zirconia\ni\tshrunken head in a duffel bag\tshrunken head\n\n\n\n\n# Bookshelf stuff! Start with b\nb\tTome of Snowcone Summoning\tSummon Snowcones\nb\tScratch 'n' Sniff Sticker Tome\tSummon Stickers\nb\tTome of Sugar Shummoning\tSummon Sugar Sheets\nb\tTome of Clip Art\tSummon Clip Art\nb\tTome of Rad Libs\tSummon Rad Libs\nb\tThe Smith's Tome\tSummon Smithsness\nb\tMcPhee's Grimoire of Hilarious Object Summoning\tSummon Hilarious Objects\nb\tSp'n-Zor's Grimoire of &quot;Tasteful&quot; Gifts\tSummon Tasteful Items\nb\tSorcerers of the Shore Grimoire\tSummon Alice's Army Cards\nb\tThinknerd's Grimoire of Geeky Gifts\t Summon Geeky Gifts\nb\tLibram of Candy Heart Summoning\tSummon Candy Heart\nb\tLibram of Divine Favors\tSummon Party Favor\nb\tLibram of Love Songs\tSummon Love Song\nb\tLibram of BRICKOs\tSummon BRICKOs\nb\tGygaxian Libram\tSummon Dice\nb\tLibram of Resolutions\tSummon Resolutions\nb\tLibram of Pulled Taffy\tSummon Taffy\nb\tThe Confiscator's Grimoire\tSummon Confiscated Things\n\n\n\n# Property based detection! Start with p\np\tairplane charter: Spring Break Beach\tsleazeAirportAlways&!_sleazeAirportToday\np\tairplane charter: Conspiracy Island\tspookyAirportAlways&!_spookyAirportToday\np\tairplane charter: Dinseylandfill\tstenchAirportAlways&!_stenchAirportToday\np\tairplane charter: That 70s Volcano\thotAirportAlways&!_hotAirportToday\np\tairplane charter: The Glaciest\tcoldAirportAlways&!_coldAirportToday\np\tChateau Mantegna room key\tchateauAvailable\np\tbottle of lovebug pheromones\tlovebugsUnlocked\np\tshrine to the Barrel god\tbarrelShrineUnlocked\np\tX-32-F snowman crate\tsnojoAvailable\np\tLT&T telegraph office deed\ttelegraphOfficeAvailable\np\tdetective school application\thasDetectiveSchool\np\tBuild-a-City Gingerbread kit\tgingerbreadCityAvailable&!_gingerbreadCityToday\np\theart-shaped crate\tloveTunnelAvailable&!_loveTunnelUsed\np\tSpacegate access badge\tspacegateAlways&!_spacegateToday\np\tFantasyRealm membership packet\tfrAlways&!_frToday\np\tHorsery contract\thorseryAvailable\np\tNeverending Party invitation envelope\tneverendingPartyAlways&!_neverendingPartyToday\np\tvoter registration form\tvoteAlways&!_voteToday\np\tBoxing Day care package\tdaycareOpen&!_daycareToday\np\tPirateRealm membership packet\tprAlways&!_prToday\np\tDistant Woods Getaway Brochure\tgetawayCampsiteUnlocked\np\tUndrilled cosmic bowling ball\thasCosmicBowlingBall\np\tMayDay™ contract\thasMaydayContract\np\tboxed autumn-aton\thasAutumnaton\np\tdeed to Oliver's Place\townsSpeakeasy\n\n\n\n# Eudoras! Start with e\ne\tMy Own Pen Pal kit\tPen Pal\ne\tGameInformPowerDailyPro subscription card\tGameInformPowerDailyPro Magazine\ne\tXi Receiver Unit\tXi Receiver Unit\ne\tNew-You Club Membership Form\tNew-You Club\ne\tOur Daily Candles™ order form\tOur Daily Candles\ne\tBlack and White Apron Enrollment Form\tBlack & White Apron\n\n\n\n# visit_url contains... Start with v\n\n\n\n# eval(function) => boolean! Starts with s for script\ns\tOrder of the Green Thumb Order Form\trequire(\"kolmafia\").floristAvailable()\n\n\n\n# campground items! Starts with c\nc\tHaunted Doghouse\nc\tWitchess Set\nc\tSource terminal\nc\tpotted tea tree\nc\tA Guide to Burning Leaves\n\n\n\n# Gardens\ng\tpacket of pumpkin seeds\tpumpkin\t\ng\tPeppermint Pip Packet\tpeppermint\ng\tpacket of dragon's teeth\tskeleton\ng\tPacket of beer seeds\tbeer\ng\tpacket of winter seeds\twinter\ng\tpacket of thanksgarden seeds\tthanksgarden\ng\tpacket of tall grass seeds\tgrass\ng\tpacket of mushroom spores\tmushroom\ng\tpacket of rock seeds\trock\n\n\n# Items that are dependent on the value of another as they're no-trade\n# Item | Check Against | X of our item = 1 of that item\nt\tChibiBuddy™ (on)\tChibiBuddy™ (off)\t1\nt\tdistilled resin\tinflammable leaf\t50\n\n\n# Items that are a coinmaster currency, and is dynamically priced because there's no solid metric\n# The price is resolved at runtime\nt\tfat loot token\nt\tCop dollar\nt\tDriplet\nt\tChroner\nt\tFreddy Kruegerand\nt\tGuzzlrbuck\nt\tBeach Buck\nt\tVolcoino\nt\tFunFunds™\nt\tCoinspiracy\nt\tWal-Mart gift certificate\nt\tRubee™\nt\tbuffalo dime\nt\tSpacegate Research\n";

/***/ }),

/***/ 866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ AccValTiming)
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AccountValUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(868);
/* harmony import */ var _AccountValSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(351);
var _AccValTiming;function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t.return || t.return();} finally {if (u) throw o;}} };}function _toConsumableArray(r) {return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArray(r) {if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);}function _arrayWithoutHoles(r) {if (Array.isArray(r)) return _arrayLikeToArray(r);}function _slicedToArray(r, e) {return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function _iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function _arrayWithHoles(r) {if (Array.isArray(r)) return r;}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}



var AccValTiming = /*#__PURE__*/function () {










  function AccValTiming(name) {var isSteps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;_classCallCheck(this, AccValTiming);_defineProperty(this, "name", void 0);_defineProperty(this, "started", Date.now());_defineProperty(this, "stopped", void 0);_defineProperty(this, "depth", 0);_defineProperty(this, "stepStarted", void 0);_defineProperty(this, "totalTimeTaken", null);
    this.name = name;

    if (isSteps) {
      this.totalTimeTaken = 0;
      this.start();
    }
  }return _createClass(AccValTiming, [{ key: "start", value:

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
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.printHtml)("<font color='blue'>".concat(
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
        _AccountValUtils__WEBPACK_IMPORTED_MODULE_1__/* .AccountValUtils */ .E.getNumber(this.getTime()) +
        "ms" + (
        this.stopped == null ? " (never stopped)" : "") + (
        this.stepStarted != null ? " (step never stopped)" : ""));

    } }], [{ key: "start", value:

    function start(name) {var withSteps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!_AccountValSettings__WEBPACK_IMPORTED_MODULE_2__/* .AccountValSettings */ .AO.timingsDebug) {
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
      if (!_AccountValSettings__WEBPACK_IMPORTED_MODULE_2__/* .AccountValSettings */ .AO.timingsDebug) {
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
      var sortedTimes = _toConsumableArray(
        this.tracking);


      this.tracking.forEach((_ref9) => {var _ref0 = _slicedToArray(_ref9, 2),state = _ref0[0],t = _ref0[1];
        if (t.stopped == null) {
          sortedTimes.push(["STOPPED", t]);
        }
      });var _iterator = _createForOfIteratorHelper(

          sortedTimes),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var _step$value = _slicedToArray(_step.value, 2),state = _step$value[0],timing = _step$value[1];
          var depthStr = "<font color='gray'>".concat(">&nbsp;".repeat(
            timing.depth
          ), "</font>");

          if (method == "PRINT_JUST_ONCE") {
            if (state != "STARTED") {
              continue;
            }

            (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.printHtml)("".concat(
              depthStr, "<font color='blue'>").concat(timing.getName(), " <font color='green'>time taken:</font> ").concat(timing.getTimeStr(), "</font>")
            );
          } else if (method == "PRINT_START_AND_END") {
            if (state == "STARTED") {
              (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.printHtml)("".concat(
                depthStr, "<font color='blue'>").concat(timing.getName(), "</font> <font color='green'>started</font>")
              );
            } else {
              (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.printHtml)("".concat(
                depthStr, "<font color='blue'>").concat(timing.getName(), "<font color='green'> stopped, time taken: </font>").concat(timing.getTimeStr(), "</font>")
              );
            }
          } else if (method == "PRINT_JUST_END") {
            if (state == "STARTED") {
              continue;
            }

            (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.printHtml)("".concat(
              depthStr, "<font color='blue'>").concat(timing.getName(), "<font color='green'> time taken: </font>").concat(timing.getTimeStr(), "</font>")
            );
          }
        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.printHtml)("<font color='green'>The usage of timings took an extra: </font><font color='blue'>".concat(
        _AccountValUtils__WEBPACK_IMPORTED_MODULE_1__/* .AccountValUtils */ .E.getNumber(
          this.timingsSlowdown
        ), "ms</font>")
      );
    } }]);}();_AccValTiming = AccValTiming;_defineProperty(AccValTiming, "tracking", []);_defineProperty(AccValTiming, "timingsSlowdown", 0);

/***/ }),

/***/ 868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ AccountValUtils)
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AccountValSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(351);
/* harmony import */ var _AccountValColors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(477);
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

        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("DEBUG: " + message, _AccountValColors__WEBPACK_IMPORTED_MODULE_2__/* .AccountValColors */ .HK.minorNote);
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
        setting.type == _AccountValSettings__WEBPACK_IMPORTED_MODULE_1__/* .FieldType */ .PU.BOOLEAN && setting2 != null)
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
    } }]);}();

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
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   main: () => (/* binding */ main)
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(519);
/* harmony import */ var _AccountValSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(351);
/* harmony import */ var _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(868);
/* harmony import */ var _PriceResolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(616);
/* harmony import */ var _AccountValColors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(477);
/* harmony import */ var _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(866);
function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _slicedToArray(r, e) {return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function _arrayWithHoles(r) {if (Array.isArray(r)) return r;}function _createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t.return || t.return();} finally {if (u) throw o;}} };}function _toConsumableArray(r) {return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _iterableToArray(r) {if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);}function _arrayWithoutHoles(r) {if (Array.isArray(r)) return _arrayLikeToArray(r);}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}





var

AccountVal = /*#__PURE__*/function () {function AccountVal() {_classCallCheck(this, AccountVal);_defineProperty(this, "logic", void 0);_defineProperty(this, "settings", void 0);}return _createClass(AccountVal, [{ key: "getSettings", value:



    function getSettings() {
      return this.settings;
    } }, { key: "runValuation", value:

    function runValuation() {
      var netvalue = 0;

      var aWorth = this.logic.priceResolver.itemPrice(
        kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.get("Mr. Accessory"),
        1
      ).price;

      var lines = [];
      var mallExtinct = [];
      var shopNetValue = 0;
      var shopPricedAt = 0;
      var lastCategory = null;
      var shelfValue = 0;

      var pronoun = this.settings.fetchClan ?
      "The clan stash is" :
      !this.settings.playerId || this.settings.playerId == (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myId)()) ?
      this.settings.fetchSession ?
      "Your session is" :
      "You are" :
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getPlayerName)(this.settings.playerId) + " is";

      var onShelfName = (name, worth) => {
        if (!this.settings.doCategories || name == lastCategory) {
          shelfValue += worth;

          return;
        }

        if (lastCategory != null) {
          lines.push("<u><b>DC Shelf:</b> ".concat(
            this.escapeHTML(lastCategory), "<font color='").concat(
            _AccountValColors__WEBPACK_IMPORTED_MODULE_5__/* .AccountValColors */ .HK.minorNote, "'>, worth ").concat(
            _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils */ .E.getNumber(shelfValue), " meat</font></u>")
          );
          lines.push("");
        }

        lastCategory = name;
        shelfValue = worth;
      };

      var exceededMax = false;
      var useJsFilter =
      this.logic.jsFilter != null &&
      this.settings.doesJSFilterUsePriceOrSales();








      var resolved = [];

      for (var no = this.logic.prices.length - 1; no >= 0; no--) {
        var item = this.logic.prices[no][0];
        var price = this.logic.prices[no][1];

        // Mall extinct items should be at max natural price
        var worthEach = Math.min(
          this.settings.maxNaturalPrice + 1,
          price.price <= 0 && item.worthMultiplier == 1 ?
          -1 :
          price.price * (1 / item.worthMultiplier)
        );

        var count = this.logic.ownedItems.get(item);

        if (isNaN(count)) {
          this.printLine(
            "Unable to handle the item '" + item.name + "', skipping..",
            "plain",
            _AccountValColors__WEBPACK_IMPORTED_MODULE_5__/* .AccountValColors */ .HK.attentionGrabbingWarning
          );
          continue;
        }

        if (useJsFilter) {
          if (
          !this.logic.jsFilter(item.actualItem, count, worthEach, price.volume))
          {
            continue;
          }
        }

        resolved.push({
          item: item,
          price: price,
          worthEach: worthEach,
          count: count
        });
      }

      for (var _i = 0, _resolved = resolved; _i < _resolved.length; _i++) {var _resolved$_i = _resolved[_i],_item = _resolved$_i.item,_price = _resolved$_i.price,_worthEach = _resolved$_i.worthEach,_count = _resolved$_i.count;
        exceededMax =
        exceededMax ||
        this.settings.maxNaturalPrice + 1 <
        _price.price * (1 / _item.worthMultiplier);

        var totalWorth = Math.round(_worthEach * _count);
        netvalue += totalWorth;

        if (lines.length >= this.settings.displayLimit) {
          continue;
        }

        var title = [];

        if (_item.name != _item.tradeableItem.name && _item.worthMultiplier != 1) {
          title.push("=== ".concat(this.escapeHTML(_item.name), " ==="));
          title.push("");
          title.push("".concat(
            this.escapeHTML(_item.tradeableItem.name), " / ").concat(this.escapeHTML(
            _item.pluralName
          ), " (").concat(_item.worthMultiplier, ") = ").concat(
            _item.pluralName, " are worth ").concat(
            _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils */ .E.getNumber(
              Math.round(_worthEach)
            ), " meat each.")
          );
        } else {
          title.push("=== ".concat(this.escapeHTML(_item.tradeableItem.name), " ==="));
          title.push("");
        }

        var tradeableWorth = " @ ".concat(_AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils */ .E.getNumber(_price.price), " meat.");

        if (_price.price < 0) {
          tradeableWorth = " as mall extinct.";
        }

        title.push(
          (_price.accuracy == _PriceResolver__WEBPACK_IMPORTED_MODULE_4__/* .PriceType */ .SJ.NEW_PRICES ?
          "Last malled" :
          _price.accuracy == _PriceResolver__WEBPACK_IMPORTED_MODULE_4__/* .PriceType */ .SJ.MALL_SALES ?
          "Last sold" :
          _price.accuracy == _PriceResolver__WEBPACK_IMPORTED_MODULE_4__/* .PriceType */ .SJ.AUTOSELL ?
          "Autosell" :
          "Last mafia malled") + tradeableWorth
        );

        if (_price.price2 > 0 && _price.accuracy == _PriceResolver__WEBPACK_IMPORTED_MODULE_4__/* .PriceType */ .SJ.NEW_PRICES) {
          title.push("Last sold @ ".concat(
            _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils */ .E.getNumber(_price.price2), " meat.")
          );
        }

        if (_item.shopWorth > 0) {
          title.push(
            pronoun +
            " selling @ " +
            _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils */ .E.getNumber(_item.shopWorth) +
            " meat."
          );
        }

        if (_count > 1 && this.settings.showSingleItemWorth) {
          title.push("Worth a total of ".concat(_AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils */ .E.getNumber(totalWorth)));
        }

        if (_price.accuracy != _PriceResolver__WEBPACK_IMPORTED_MODULE_4__/* .PriceType */ .SJ.AUTOSELL) {
          title.push("");
          title.push(
            "Price valid as of " +
            _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils */ .E.getNumber(_price.daysOutdated, 1) +
            " day" + (
            _price.daysOutdated != 1 ? "s" : "") +
            " ago."
          );
        }

        if (_price.volume >= 0) {
          title.push("");
          title.push("".concat(
            _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils */ .E.getNumber(_price.volume), " sold in the last week.")
          );
        }

        if (_item.snapshotSource != null) {
          title = ["Owns in ".concat(_item.snapshotSource, ".")].concat(_toConsumableArray(title));
        }

        var name = this.escapeHTML(_item.name);

        if (_item.bound != null) {
          var boundInfo = void 0;
          var color = _AccountValColors__WEBPACK_IMPORTED_MODULE_5__/* .AccountValColors */ .HK.shopPricesOverpriced;

          if (_item.bound == _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus */ .Kw.SHOP_WORTH) {
            var overpricedPerc = _item.shopWorth / _worthEach;

            if (_item.shopWorth < 999999000) {
              shopPricedAt += _item.shopWorth * _count;
              shopNetValue += totalWorth;
            }

            if (overpricedPerc <= 1.05) {
              color = _AccountValColors__WEBPACK_IMPORTED_MODULE_5__/* .AccountValColors */ .HK.shopPricedOk;
            }

            boundInfo = _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils */ .E.getNumberOrClamp(
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
            boundInfo = _item.getBound();
          }

          name = "".concat(name, " (<font color='").concat(color, "' title='").concat(title.join(
            "&#010;"
          ), "'>").concat(this.escapeHTML(boundInfo), "</font>)");
        }

        if (_worthEach <= 0 || _worthEach > this.settings.maxNaturalPrice) {
          if (_count > 1) {
            mallExtinct.push([_count + " @ " + name, title.join("&#010;")]);
          } else {
            mallExtinct.push([name, title.join("&#010;")]);
          }

          continue;
        }

        onShelfName(_item.category, totalWorth);

        var text = "".concat(_AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils */ .E.getNumber(_count), " ").concat(name);

        if (this.settings.showSingleItemWorth) {
          text += " each worth ".concat(_AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils */ .E.getNumber(_worthEach));
        } else {
          text += " worth a total of ".concat(_AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils */ .E.getNumber(totalWorth));
        }

        lines.push(
          "<font title='" +
          this.escapeHTML(title.join("&#010;")) +
          "'>" +
          text +
          "</font>"
        );
      }

      onShelfName(null, 0);

      if (!this.settings.brief) {
        lines = lines.reverse();
        var skipping = Math.max(
          0,
          resolved.length - this.settings.displayLimit
        );

        if (skipping > 0) {
          this.printLine("\n          <font color='".concat(


            _AccountValColors__WEBPACK_IMPORTED_MODULE_5__/* .AccountValColors */ .HK.minorNote, "'>Skipping ").concat(
            _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils */ .E.getNumber(
              skipping
            ), " lines and displaying the last ").concat(_AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils */ .E.getNumber(
            this.settings.displayLimit
          ), " lines..</font>"),
          "html"
          );
        }

        if (lines.length > 0) {
          lines.push("");
        }

        if (lines[0] == "") {
          lines.shift();
        }var _iterator = _createForOfIteratorHelper(

            lines),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var line = _step.value;
            this.printLine(line.replace(/\n/g, "&#010;"), "html");
          }} catch (err) {_iterator.e(err);} finally {_iterator.f();}

        if (mallExtinct.length > 0) {
          var colors = [
          _AccountValColors__WEBPACK_IMPORTED_MODULE_5__/* .AccountValColors */ .HK.mallExtinctColor1,
          _AccountValColors__WEBPACK_IMPORTED_MODULE_5__/* .AccountValColors */ .HK.mallExtinctColor2];


          var extinct = mallExtinct.map(
            (_ref, i) => {var _ref2 = _slicedToArray(_ref, 2),name = _ref2[0],title = _ref2[1];return (
                "<font color='" +
                colors[i % 2] +
                "' title='" +
                title +
                "'>" +
                name +
                "</font>");}
          );

          this.printLine(
            "There were " +
            extinct.length +
            " mall extinct items! Items: " +
            extinct.join(", "),
            "html"
          );
        }
      }

      var mrAMeat = netvalue;

      this.printLine(
        pronoun + " worth " + _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils */ .E.getNumber(netvalue) + " meat!",
        "plain",
        _AccountValColors__WEBPACK_IMPORTED_MODULE_5__/* .AccountValColors */ .HK.helpfulStateInfo
      );

      if (this.settings.fetchSession && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.mySessionMeat)() != 0) {
        mrAMeat = netvalue + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.mySessionMeat)();
        this.printLine("Add meat from session, that's ".concat(
          _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils */ .E.getNumber(
            mrAMeat
          ), " meat!"),
        "plain",
        _AccountValColors__WEBPACK_IMPORTED_MODULE_5__/* .AccountValColors */ .HK.helpfulStateInfo
        );
      }

      if (this.settings.brief) {
        return;
      }

      var mrAWorth = (0.0 + mrAMeat) / aWorth;

      this.printLine("<font title='With Mr. Accessory worth being ".concat(
        _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils */ .E.getNumber(
          aWorth
        ), " meat'>Going by the value of a Mr. Accessory, that's $").concat(_AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils */ .E.getNumber(
        mrAWorth * 10
      ), "</font>"),
      "html"
      );

      if (
      shopPricedAt > 0 &&
      resolved.filter((v) => v.item.bound == _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus */ .Kw.SHOP_WORTH).length ==
      resolved.length)
      {
        shopPricedAt /= shopNetValue;
        var perc = _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils */ .E.getNumberOrClamp(
          Math.round(shopPricedAt * 100),
          -999,
          999,
          "Very underpriced",
          "Very overpriced"
        );

        if (perc.match(/\d$/)) {
          perc += "%";
        }

        this.printLine("Overall, the shop is ".concat(perc, " of mall"), "plain");
        this.printLine(
          "Disclaimer: Cheapest price being 100% can mean we're comparing prices against.. this shop.",
          "plain",
          _AccountValColors__WEBPACK_IMPORTED_MODULE_5__/* .AccountValColors */ .HK.minorNote
        );
      }

      this.printMeat();

      if (exceededMax) {
        this.printLine("<font color='".concat(

          _AccountValColors__WEBPACK_IMPORTED_MODULE_5__/* .AccountValColors */ .HK.minorNote, "' title=\"The max natural price is currently set to ").concat(
          _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils */ .E.getNumber(
            this.settings.maxNaturalPrice
          ), ". (").concat(
          this.settings.maxNaturalPrice ==
          _AccountValSettings__WEBPACK_IMPORTED_MODULE_2__/* .AccountValSettings */ .AO.defaultMaxNaturalPrice ?
          "default" : "default is ".concat(
            _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils */ .E.getNumber(
              _AccountValSettings__WEBPACK_IMPORTED_MODULE_2__/* .AccountValSettings */ .AO.defaultMaxNaturalPrice
            )), ")&#010;&#010;You can change this by using 'max=3b' as an arg.&#010;You can also set the property 'accountval_maxNaturalPrice' to a number (3b, 5,000,000, 3m1k, etc)\">Some items were expensive and were marked as mall extinct. Hover for details.</font>"),

        "html"
        );
      }
    } }, { key: "printMeat", value:

    function printMeat() {
      if (!this.settings.doTradeables) {
        return;
      }

      var meat = 0;
      var meatSources = [];

      if (this.settings.fetchInventory && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMeat)() != 0) {
        meat += (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMeat)();
        meatSources.push(
          _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils */ .E.getNumber((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMeat)()) + " meat in inventory"
        );
      }

      if (this.settings.fetchCloset && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myClosetMeat)() != 0) {
        meat += (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myClosetMeat)();
        meatSources.push(
          _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils */ .E.getNumber((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myClosetMeat)()) + " meat in closet"
        );
      }

      if (this.settings.fetchStorage && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myStorageMeat)() != 0) {
        meat += (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myStorageMeat)();
        meatSources.push(
          _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils */ .E.getNumber((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myStorageMeat)()) + " meat in storage"
        );
      }

      if (meat > 0 && this.settings.playerId == 0) {
        this.printLine(
          "<font title='" +
          meatSources.join(", ") +
          "'>This doesn't include your " +
          _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils */ .E.getNumber(meat) +
          " meat!</font>",
          "html"
        );
      }
    } }, { key: "printLine", value:

    function printLine(line, textType, color) {
      if (this.settings.logOutputAs == "plain" && textType == "html") {
        line = line.replace(/<[^>]*>/g, "");
        textType = "plain";
      }

      if (textType == "html") {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.printHtml)(line);
      } else {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(line);
      }
    } }, { key: "escapeHTML", value:

    function escapeHTML(str) {
      return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.entityDecode)(str).
      replace(/&/g, "&amp;").
      replace(/</g, "&lt;").
      replace(/>/g, "&gt;").
      replace(/"/g, "&quot;").
      replace(/'/g, "&#039;");
    } }, { key: "doHelp", value:

    function doHelp() {var _this = this;
      this.printLine(
        "AccountVal is a script to check what your account is worth, and find the good stuff fast.",
        "plain",
        _AccountValColors__WEBPACK_IMPORTED_MODULE_5__/* .AccountValColors */ .HK.helpfulStateInfo
      );
      this.printLine(
        "You can provide these as a parameter to accountval to do other stuff than the base script. Hover over them to see aliases.",
        "plain",
        _AccountValColors__WEBPACK_IMPORTED_MODULE_5__/* .AccountValColors */ .HK.helpfulStateInfo
      );
      this.printLine("<font color='".concat(
        _AccountValColors__WEBPACK_IMPORTED_MODULE_5__/* .AccountValColors */ .HK.helpfulStateInfo, "'>Use ! or - to negate a boolean option, as well as =. Eg:</font><font color='gray'> -bound !bound bound=false</font>"),
      "html"
      );

      var groups = [];var _iterator2 = _createForOfIteratorHelper(

          _AccountValSettings__WEBPACK_IMPORTED_MODULE_2__/* .AccountValSettings */ .AO.getSettings()),_step2;try {var _loop = function _loop() {var setting = _step2.value;
          var defaultOf = ".</font> <font>Default is: ";

          if (_this.settings[setting.field] != null) {
            var val = _this.settings[setting.field];

            if (setting.type == _AccountValSettings__WEBPACK_IMPORTED_MODULE_2__/* .FieldType */ .PU.NUMBER) {
              val = setting.names[0] + "=" + val;
            } else if (setting.type == _AccountValSettings__WEBPACK_IMPORTED_MODULE_2__/* .FieldType */ .PU.SORTBY) {
              val = setting.names[0] + "=" + _AccountValSettings__WEBPACK_IMPORTED_MODULE_2__/* .SortBy */ .gx[val];
            }

            if (val == "" && typeof val != "boolean") {
              val = "null";
            }

            defaultOf += val;
          } else {
            defaultOf += "null";
          }

          if (setting.groupUnder != null) {
            var group = groups.find(
              (_ref3) => {var _ref4 = _slicedToArray(_ref3, 1),l = _ref4[0];return l == setting.groupUnder;}
            );

            if (group == null) {
              groups.push(group = [setting.groupUnder, []]);
            }

            group[1].push("<font title='".concat(
              setting.desc).concat(
              setting.names.length > 1 ? "&#010;&#010;Aliases: ".concat(
                setting.names.
                filter((s) => s != setting.names[0]).
                join(", ")) :
              "", "'><b>").concat(
              setting.names[0], "</b></font>")
            );
          } else {
            _this.printLine("<font color='".concat(

              _AccountValColors__WEBPACK_IMPORTED_MODULE_5__/* .AccountValColors */ .HK.minorNote, "' title='Aliases: ").concat(
              setting.names.join(", "), "'><b>").concat(
              setting.names[0], "</b> - ").concat(
              setting.desc).concat(defaultOf, "</font>"),
            "html"
            );
          }
        };for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {_loop();}} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}

      for (var _i2 = 0, _groups = groups; _i2 < _groups.length; _i2++) {var _groups$_i = _slicedToArray(_groups[_i2], 2),groupName = _groups$_i[0],grouped = _groups$_i[1];
        var toPrint = grouped.map((s, i) => {
          return "<font color='".concat(
            i % 2 == 0 ?
            _AccountValColors__WEBPACK_IMPORTED_MODULE_5__/* .AccountValColors */ .HK.mallExtinctColor1 :
            _AccountValColors__WEBPACK_IMPORTED_MODULE_5__/* .AccountValColors */ .HK.mallExtinctColor2, "'>").concat(
            s, "</font>");
        });
        this.printLine("<font color='".concat(

          _AccountValColors__WEBPACK_IMPORTED_MODULE_5__/* .AccountValColors */ .HK.minorNote, "'><b>").concat(
          groupName, ":</b> ").concat(toPrint.join(", "), "</font>"),
        "html"
        );
      }

      this.printLine("<font color='".concat(
        _AccountValColors__WEBPACK_IMPORTED_MODULE_5__/* .AccountValColors */ .HK.minorNote, "'>Disclaimer: The prices shown are not absolute, and can overstate what it really is worth.</font>"),
      "html"
      );
      // show - How many to show, defaults to 100
      // count - How many we must have of this item
      // sortby - Indiv Price, Total Price, Amount
      // trade
      // accountval price>3000 iprice>3000 show
    } }, { key: "load", value:

    function load(command) {
      this.settings = new _AccountValSettings__WEBPACK_IMPORTED_MODULE_2__/* .AccountValSettings */ .AO();

      if (command == "test") {
        this.runTests();

        return false;
      }

      if (command == null) {
        this.printLine(
          "To fine tune what we check, including to tradeables only.. Provide the parameter 'help' for more info",
          "plain",
          _AccountValColors__WEBPACK_IMPORTED_MODULE_5__/* .AccountValColors */ .HK.helpfulStateInfo
        );
        command = "";
      } else if (command.toLowerCase().match(/([^a-z]|^)help([^a-z]|$)/)) {
        this.settings.doSettings([]);
        this.doHelp();

        return false;
      } else if (command.toLowerCase().match(/^debugcolors=[^ ]+$/)) {
        var scheme = command.split("=")[1];
        (0,_AccountValColors__WEBPACK_IMPORTED_MODULE_5__/* .showAccountvalColors */ .mh)(scheme);

        return false;
      }

      var spl = _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils */ .E.splitArguments(
        this.settings,
        command
      );

      var unknown = this.settings.doSettings(spl);

      if (unknown.length > 0) {
        unknown.forEach((s) =>
        this.printLine("<font color='".concat(
          _AccountValColors__WEBPACK_IMPORTED_MODULE_5__/* .AccountValColors */ .HK.attentionGrabbingWarning, "'>").concat(s, "</font>"),
        "html"
        )
        );

        return false;
      }

      return true;
    } }, { key: "start", value:

    function start() {
      _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.start("Construct Logic");
      var priceSettings = new _AccountValSettings__WEBPACK_IMPORTED_MODULE_2__/* .PricingSettings */ .M3();
      priceSettings.maxPriceAge = this.settings.maxAge;
      priceSettings.oldPricing = this.settings.oldPricing;
      priceSettings.dateToFetch = this.settings.dateToFetch;
      this.logic = new _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .AccountValLogic */ .ND(this.settings, priceSettings);
      _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.stop("Construct Logic");

      _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.start("Load Logic Items");
      this.logic.loadItems();
      _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.stop("Load Logic Items");

      _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.start("Load Logic Prices");
      this.logic.doPricing();
      _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.stop("Load Logic Prices");

      _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.start("Start Valuation");
      this.runValuation();
      _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.stop("Start Valuation");
    } }, { key: "runTests", value:

    function runTests() {
      this.runTest("", {
        doBound: true,
        sortBy: _AccountValSettings__WEBPACK_IMPORTED_MODULE_2__/* .SortBy */ .gx.TOTAL_PRICE,
        fetchInventory: true
      });
      this.runTest("sort meat!bound", { doBound: false, sortBy: _AccountValSettings__WEBPACK_IMPORTED_MODULE_2__/* .SortBy */ .gx.PRICE });
      this.printLine("Tests Finished", "plain", "green");
    } }, { key: "runTest", value:

    function runTest(args, verify) {
      this.load(args);

      for (var _i3 = 0, _Object$entries = Object.entries(verify); _i3 < _Object$entries.length; _i3++) {var _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 2),key = _Object$entries$_i[0],value = _Object$entries$_i[1];
        var setTo = this.settings[key];

        if (setTo == value) {
          continue;
        }

        this.printLine("On '".concat(
          args, "', ").concat(key, " was not set to ").concat(value, " but instead ").concat(setTo),
        "plain",
        "red"
        );
      }
    } }]);}();


function main(command) {
  //   AccValTiming.start("Construct Class");
  var val = new AccountVal();
  //   AccValTiming.stop("Construct Class");

  //   AccValTiming.start("Load Command");

  if (val.load(command)) {
    //     AccValTiming.stop("Load Command");
    _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.start("Run AccountVal");
    val.start();
    _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.stop("Run AccountVal");
  }

  if (_AccountValSettings__WEBPACK_IMPORTED_MODULE_2__/* .AccountValSettings */ .AO.timingsDebug) {
    _AccountValTimings__WEBPACK_IMPORTED_MODULE_6__/* .AccValTiming */ .p.printTracked("PRINT_JUST_ONCE");
  }
}
var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;