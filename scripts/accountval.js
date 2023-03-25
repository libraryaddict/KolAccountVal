/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mc": () => (/* binding */ AccountValLogic),
/* harmony export */   "Ms": () => (/* binding */ ItemStatus),
/* harmony export */   "oD": () => (/* binding */ ValItem)
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(530);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ItemResolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(226);
/* harmony import */ var _PriceResolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(238);
/* harmony import */ var _AccountValSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(280);
/* harmony import */ var _PageResolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var _AccountValUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];if (null != _i) {var _s,_e,_x,_r,_arr = [],_n = !0,_d = !1;try {if (_x = (_i = _i.call(arr)).next, 0 === i) {if (Object(_i) !== _i) return;_n = !1;} else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);} catch (err) {_d = !0, _e = err;} finally {try {if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;} finally {if (_d) throw _e;}}return _arr;}}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _createForOfIteratorHelper(o, allowArrayLike) {var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];if (!it) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e2) {throw _e2;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = it.call(o);}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e3) {didErr = true;err = _e3;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];return arr2;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}function _defineProperty(obj, key, value) {key = _toPropertyKey(key);if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toPropertyKey(arg) {var key = _toPrimitive(arg, "string");return typeof key === "symbol" ? key : String(key);}function _toPrimitive(input, hint) {if (typeof input !== "object" || input === null) return input;var prim = input[Symbol.toPrimitive];if (prim !== undefined) {var res = prim.call(input, hint || "default");if (typeof res !== "object") return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return (hint === "string" ? String : Number)(input);}






var ItemStatus = /*#__PURE__*/function (ItemStatus) {ItemStatus[ItemStatus["BOUND"] = 0] = "BOUND";ItemStatus[ItemStatus["NO_TRADE"] = 1] = "NO_TRADE";ItemStatus[ItemStatus["FAMILIAR"] = 2] = "FAMILIAR";ItemStatus[ItemStatus["IN_USE"] = 3] = "IN_USE";ItemStatus[ItemStatus["SHOP_WORTH"] = 4] = "SHOP_WORTH";return ItemStatus;}({});











var ValItem = /*#__PURE__*/function () {






  function ValItem(item) {var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : item.name;var bound = arguments.length > 2 ? arguments[2] : undefined;_classCallCheck(this, ValItem);_defineProperty(this, "name", void 0);_defineProperty(this, "tradeableItem", void 0);_defineProperty(this, "bound", void 0);_defineProperty(this, "shopWorth", void 0);_defineProperty(this, "worthMultiplier", 1);
    this.name = name;
    this.tradeableItem = item;
    this.bound = bound;

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
    } }]);return ValItem;}();


var AccountValLogic = /*#__PURE__*/function () {







  function AccountValLogic(settings, priceSettings) {_classCallCheck(this, AccountValLogic);_defineProperty(this, "ownedItems", new Map());_defineProperty(this, "resolver", void 0);_defineProperty(this, "priceResolver", void 0);_defineProperty(this, "prices", []);_defineProperty(this, "settings", void 0);_defineProperty(this, "jsFilter", void 0);
    this.settings = settings;
    this.resolver = new _ItemResolver__WEBPACK_IMPORTED_MODULE_1__/* .ItemResolver */ .I();
    this.priceResolver = new _PriceResolver__WEBPACK_IMPORTED_MODULE_2__/* .PriceResolver */ .Zi(priceSettings);
  }_createClass(AccountValLogic, [{ key: "addItem", value:

    function addItem(item) {var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      this.ownedItems.set(item, (this.ownedItems.get(item) | 0) + count);
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
            (s) => s.itemType == _ItemResolver__WEBPACK_IMPORTED_MODULE_1__/* .ItemType.SKILL */ .q.SKILL)),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;)
            {var _item = _step2.value;
              if (!skills.includes(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Skill.get(_item.data1))) {
                continue;
              }

              this.addItem(
              new ValItem(_item.actualItem, _item.actualItem.name, ItemStatus.BOUND));

            }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}
        }

        var owned = new Map(
        _toConsumableArray(this.ownedItems).map((_ref) => {var _ref2 = _slicedToArray(_ref, 2),k = _ref2[0],v = _ref2[1];return [k.tradeableItem, v];}));


        _items2.forEach((v, k) => {
          var boundItem = this.resolver.accValStuff.find(
          (i) => i.actualItem == k);


          if (boundItem == null) {var _owned$get;
            v -= (_owned$get = owned.get(k)) !== null && _owned$get !== void 0 ? _owned$get : 0;

            if (v <= 0) {
              return;
            }

            this.addItem(new ValItem(k), v);

            return;
          }

          var name = k.name;

          if (boundItem.itemType == _ItemResolver__WEBPACK_IMPORTED_MODULE_1__/* .ItemType.UNTRADEABLE_ITEM */ .q.UNTRADEABLE_ITEM) {var _owned$get2;
            var untradeable = kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.get(boundItem.data1);

            v -= (_owned$get2 = owned.get(k)) !== null && _owned$get2 !== void 0 ? _owned$get2 : 0;

            if (v <= 0) {
              return;
            }

            name = untradeable.name;
          }

          this.addItem(new ValItem(k, name, ItemStatus.BOUND), v);
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
        'require("kolmafia")');

      }

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
      "JS Filter has been set to: " + this.settings.javascriptFilter,
      "gray");


      try {
        this.jsFilter = eval(this.settings.javascriptFilter);
      } catch (e) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Invalid jsfilter provided! Error as follows:", "red");
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
      var sessionItems = this.resolver.resolveSessionItems();var _iterator3 = _createForOfIteratorHelper(

        kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.all()),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var _item4 = _step3.value;
          var _amount = 0;

          if (this.settings.fetchSession && sessionItems.has(_item4)) {
            _amount += sessionItems.get(_item4);
          }

          if (this.settings.fetchCloset) {
            _amount += (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.closetAmount)(_item4);
          }

          if (this.settings.fetchInventory) {
            _amount += (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.equippedAmount)(_item4) + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.itemAmount)(_item4);

            if (famItems.has(_item4)) {
              _amount += famItems.get(_item4);
            }
          }

          if (this.settings.fetchStorage) {
            _amount += (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.storageAmount)(_item4);
          }

          if (this.settings.fetchDisplaycase) {
            _amount += (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.displayAmount)(_item4);
          }

          if (this.settings.fetchClan) {
            _amount += (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.stashAmount)(_item4);
          }

          if (this.settings.fetchShop) {
            if (this.settings.shopWorth && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.shopAmount)(_item4) > 0) {
              var _i2 = new ValItem(_item4);
              _i2.bound = ItemStatus.SHOP_WORTH;
              _i2.shopWorth = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.shopPrice)(_item4);

              this.ownedItems.set(_i2, (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.shopAmount)(_item4));
              continue;
            } else {
              _amount += (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.shopAmount)(_item4);
            }
          }

          if (_amount == 0) {
            continue;
          }

          this.ownedItems.set(new ValItem(_item4), _amount);
        }} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}

      if (this.settings.fetchFamiliars != false) {
        this.resolver.resolveFamiliars(
        kolmafia__WEBPACK_IMPORTED_MODULE_0__.Familiar.all().filter((f) => (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveFamiliar)(f)),
        this.ownedItems);

      }

      // Check our current workshed
      if (this.settings.fetchingEverywhereish) {
        if (this.settings.doBound || this.settings.doTradeables) {
          var i = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getWorkshed)();

          if (i != null && i != kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.none) {
            if (
            i.tradeable ? this.settings.doTradeables : this.settings.doBound)
            {
              this.addItem(new ValItem(i, i.name, ItemStatus.IN_USE));
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

            this.addItem(new ValItem(_item3[0], _item3[0].name, _item3[1]));
          }} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}
      }

      this.resolveNoTrades();
    } }, { key: "resolveNoTrades", value:

    function resolveNoTrades() {
      var copy = new Map();

      this.ownedItems.forEach((v, k) => {
        copy.set(k, v);
      });

      if (this.settings.doBound || this.settings.doNontradeables) {
        this.resolver.resolveBoundToTradeables(copy, this.ownedItems, [
        this.settings.doBound ? _ItemResolver__WEBPACK_IMPORTED_MODULE_1__/* .ItemType.UNTRADEABLE_ITEM */ .q.UNTRADEABLE_ITEM : null,
        this.settings.doNontradeables ? _ItemResolver__WEBPACK_IMPORTED_MODULE_1__/* .ItemType.CURRENCY */ .q.CURRENCY : null]);

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
          !_item5.isBound())
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

        prices.push([item, price]);
      };var _iterator6 = _createForOfIteratorHelper(

        this.ownedItems.keys()),_step6;try {for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {var _i4 = _step6.value;
          var _price = this.priceResolver.itemPrice(
          _i4.tradeableItem,
          this.ownedItems.get(_i4),
          false,
          this.settings.doSuperFast ?
          _PriceResolver__WEBPACK_IMPORTED_MODULE_2__/* .PriceType.HISTORICAL */ .FT.HISTORICAL :
          this.settings.useLastSold ?
          _PriceResolver__WEBPACK_IMPORTED_MODULE_2__/* .PriceType.MALL_SALES */ .FT.MALL_SALES :
          null,
          this.settings.doSuperFast,
          true);


          if (_price.price > 0) {
            addPrice(_i4, _price);
          } else {
            toCheck.push([_i4, _price]);
          }
        }

        // TODO Sort tocheck
      } catch (err) {_iterator6.e(err);} finally {_iterator6.f();}
      var checked = -1;

      if (toCheck.length > 200) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
        "Think this will take too long? Use the parameter 'fast', it's less accurate!",
        "blue");

      }

      for (var _i3 = 0, _toCheck = toCheck; _i3 < _toCheck.length; _i3++) {var check = _toCheck[_i3];
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
          "blue");

        }

        var price = this.priceResolver.itemPrice(
        i.tradeableItem,
        this.ownedItems.get(i),
        false,
        check[1].accuracy);


        addPrice(i, price);
      }

      this.doSort();
    } }, { key: "doSort", value:

    function doSort() {
      if (this.settings.sortBy == _AccountValSettings__WEBPACK_IMPORTED_MODULE_3__/* .SortBy.TOTAL_PRICE */ .hn.TOTAL_PRICE) {
        this.prices.sort(
        (v1, v2) =>
        (v1[1].price <= 0 ?
        999999999 :
        1 / v1[0].worthMultiplier * v1[1].price) *
        this.ownedItems.get(v1[0]) -
        (v2[1].price <= 0 ?
        999999999 :
        1 / v2[0].worthMultiplier * v2[1].price) *
        this.ownedItems.get(v2[0]));

      } else if (this.settings.sortBy == _AccountValSettings__WEBPACK_IMPORTED_MODULE_3__/* .SortBy.PRICE */ .hn.PRICE) {
        this.prices.sort(
        (v1, v2) =>
        (v1[1].price <= 0 ?
        999999999 :
        1 / v1[0].worthMultiplier * v1[1].price) - (
        v2[1].price <= 0 ?
        999999999 :
        1 / v2[0].worthMultiplier * v2[1].price));

      } else if (this.settings.sortBy == _AccountValSettings__WEBPACK_IMPORTED_MODULE_3__/* .SortBy.QUANTITY */ .hn.QUANTITY) {
        this.prices.sort(
        (v1, v2) => this.ownedItems.get(v1[0]) - this.ownedItems.get(v2[0]));

      } else if (this.settings.sortBy == _AccountValSettings__WEBPACK_IMPORTED_MODULE_3__/* .SortBy.NAME */ .hn.NAME) {
        this.prices.sort((v1, v2) => v1[0].name.localeCompare(v2[0].name));
      } else if (this.settings.sortBy == _AccountValSettings__WEBPACK_IMPORTED_MODULE_3__/* .SortBy.ITEM_ID */ .hn.ITEM_ID) {
        this.prices.sort(
        (v1, v2) => (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(v1[0].tradeableItem) - (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(v2[0].tradeableItem));

      } else if (this.settings.sortBy == "SortBy.SALES_VOLUME") {
        // Removed for now cos it does too many hits
        var toUpdate = [];var _iterator7 = _createForOfIteratorHelper(

          this.prices),_step7;try {for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {var _i6 = _step7.value;
            var _item6 = _i6[1].item;

            if (!_item6.tradeable || _item6.gift) {
              continue;
            }

            // If its an item we buy from NPCs
            if (
            (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosellPrice)(_item6) > 0 &&
            _i6[1].price < 1000 &&
            (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.isCoinmasterItem)(_item6))
            {
              continue;
            }

            var v = this.priceResolver.history.getMallRecords(_item6, 7, false);

            if (v == null) {
              toUpdate.push(_item6);
              continue;
            }

            var priceTotal = _i6[1].price * this.ownedItems.get(_i6[0]);
            // If our expected price is different from mall price by a bigger margin than expected.. Aka 50% more expensive/cheap
            var priceDiff =
            _i6[1].price > v.getPriceSold(30) ?
            v.getPriceSold(30) / _i6[1].price :
            _i6[1].price / v.getPriceSold(30);

            var days = priceDiff < 0.5 ? 7 : priceTotal > 5000000 ? 30 : 100;
            var daysOld = (Date.now() / 1000 - v.lastUpdated) / (24 * 60 * 60);

            if (daysOld < days) {
              continue;
            }

            toUpdate.push(_item6);
          }} catch (err) {_iterator7.e(err);} finally {_iterator7.f();}

        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
        "Need to update " +
        _AccountValUtils__WEBPACK_IMPORTED_MODULE_5__/* .AccountValUtils.getNumber */ .Q.getNumber(toUpdate.length) +
        " items mall histories",
        "blue");


        var last = Date.now();
        var progress = 0;

        for (var _i5 = 0, _toUpdate = toUpdate; _i5 < _toUpdate.length; _i5++) {var i = _toUpdate[_i5];
          if (last + 5000 < Date.now()) {
            last = Date.now();

            (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
            "Checking sales volume of " +
            i.name +
            " (" +
            progress +
            " / " +
            toUpdate.length +
            ")",
            "blue");

          }

          progress++;
          this.priceResolver.history.getAmountSold(i, 30);
        }

        this.prices.sort((v1, v2) => {
          var s1 = this.priceResolver.history.getMallRecords(
          v1[1].item,
          1,
          false);

          var s2 = this.priceResolver.history.getMallRecords(
          v2[1].item,
          1,
          false);


          return (
            (s1 == null ? 0 : s1.getAmountSold(30)) - (
            s2 == null ? 0 : s2.getAmountSold(30)));

        });
      } else {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.abort)("Unknown sort option " + this.settings.sortBy);
      }

      if (this.settings.reverseSort) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Reverse");
        this.prices.reverse();
      }
    } }]);return AccountValLogic;}();

/***/ }),

/***/ 280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Iz": () => (/* binding */ PricingSettings),
/* harmony export */   "fS": () => (/* binding */ FieldType),
/* harmony export */   "hn": () => (/* binding */ SortBy),
/* harmony export */   "iX": () => (/* binding */ AccountValSettings)
/* harmony export */ });
/* unused harmony export ValSetting */
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(530);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(o, allowArrayLike) {var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];if (!it) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = it.call(o);}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];return arr2;}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperty(obj, key, value) {key = _toPropertyKey(key);if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toPropertyKey(arg) {var key = _toPrimitive(arg, "string");return typeof key === "symbol" ? key : String(key);}function _toPrimitive(input, hint) {if (typeof input !== "object" || input === null) return input;var prim = input[Symbol.toPrimitive];if (prim !== undefined) {var res = prim.call(input, hint || "default");if (typeof res !== "object") return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return (hint === "string" ? String : Number)(input);}

var FieldType = /*#__PURE__*/function (FieldType) {FieldType[FieldType["NUMBER"] = 0] = "NUMBER";FieldType[FieldType["SORTBY"] = 1] = "SORTBY";FieldType[FieldType["BOOLEAN"] = 2] = "BOOLEAN";FieldType[FieldType["NAME"] = 3] = "NAME";FieldType[FieldType["STRING"] = 4] = "STRING";return FieldType;}({});







var ValSetting = /*#__PURE__*/_createClass(function ValSetting() {_classCallCheck(this, ValSetting);_defineProperty(this, "type", void 0);_defineProperty(this, "field", void 0);_defineProperty(this, "names", void 0);_defineProperty(this, "desc", void 0);});






var SortBy = /*#__PURE__*/function (SortBy) {SortBy[SortBy["NAME"] = 0] = "NAME";SortBy[SortBy["QUANTITY"] = 1] = "QUANTITY";SortBy[SortBy["PRICE"] = 2] = "PRICE";SortBy[SortBy["TOTAL_PRICE"] = 3] = "TOTAL_PRICE";SortBy[SortBy["ITEM_ID"] = 4] = "ITEM_ID";return SortBy;}({});











var sortByAliases = new Map([
["count", SortBy.QUANTITY],
["amount", SortBy.QUANTITY],
["meat", SortBy.PRICE],
["totalmeat", SortBy.TOTAL_PRICE],
["totalprice", SortBy.TOTAL_PRICE],
["id", SortBy.ITEM_ID]]);


var AccountValSettings = /*#__PURE__*/function () {function AccountValSettings() {_classCallCheck(this, AccountValSettings);_defineProperty(this, "fetchCloset", void 0);_defineProperty(this, "fetchStorage", void 0);_defineProperty(this, "fetchInventory", void 0);_defineProperty(this, "fetchShop", void 0);_defineProperty(this, "fetchDisplaycase", void 0);_defineProperty(this, "fetchSession",





    false);_defineProperty(this, "fetchClan",
    false);_defineProperty(this, "fetchingEverywhereish",
    true); // If we're fetching from everywhere but maybe some areas
    _defineProperty(this, "doSuperFast", false);_defineProperty(this, "doTradeables", void 0);_defineProperty(this, "doNontradeables", void 0);_defineProperty(this, "doBound", void 0);_defineProperty(this, "fetchFamiliars", void 0);_defineProperty(this, "fetchSnapshot",




    true);_defineProperty(this, "playerId",
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
    false);}_createClass(AccountValSettings, [{ key: "getSetting", value:















































































































































































































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
      var unknown = [];
      var defaultValues = [];
      var wasSet = [];

      var settings = AccountValSettings.getSettings();var _iterator2 = _createForOfIteratorHelper(

        settings),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var _setting = _step2.value;
          defaultValues[_setting.field] = this[_setting.field];
        }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}var _iterator3 = _createForOfIteratorHelper(

        args),_step3;try {var _loop = function _loop() {var arg = _step3.value;
          if (arg.length == 0) {return "continue";

          }

          if (arg == "debug") {
            _this.settingsDebug = true;return "continue";

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
            unknown.push(arg);return "continue";

          }

          var isTrue = !arg.startsWith("-") && !arg.startsWith("!");

          if (arg.startsWith("-") || arg.startsWith("+") || arg.startsWith("!")) {
            arg = arg.substring(1);
          } else if (arg.includes("=") && setting.type == FieldType.BOOLEAN) {
            var v = arg.substring(arg.indexOf("=") + 1);

            if (!v.toLowerCase().match("^(0|1|(true)|(false)|(yes)|(no))$")) {
              unknown.push(arg);return "continue";

            }

            isTrue = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toBoolean)(v);
          }

          if (setting.type == FieldType.SORTBY) {
            if (!arg.includes("=")) {
              unknown.push(arg);return "continue";

            }

            var _v = arg.substring(arg.indexOf("=") + 1);

            if (_v.length == 0) {
              unknown.push(arg);return "continue";

            }

            var sortBy =
            SortBy[
            Object.keys(SortBy).find((k) => k.toLowerCase() == _v.toLowerCase())];


            if (sortBy == null) {
              sortBy = sortByAliases.get(_v.toLowerCase());
            }

            if (sortBy == null) {
              unknown.push(arg);return "continue";

            }

            _this.sortBy = sortBy;
            _this.reverseSort = !isTrue;
          } else if (
          setting.type == FieldType.NUMBER ||
          setting.type == FieldType.NAME)
          {
            if (!arg.includes("=")) {
              unknown.push(arg);return "continue";

            }

            var _v2 = arg.substring(arg.indexOf("=") + 1);

            if (_v2.length == 0) {
              unknown.push(arg);return "continue";

            }

            if (setting.type == FieldType.NAME) {
              if (!_v2.match(/^[0-9]+$/)) {
                _v2 = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getPlayerId)(_v2);
              }
            }

            if (!_v2.match(/^[0-9,]+(\.\d+)?$/)) {
              unknown.push(arg);return "continue";

            }

            _this[setting.field] = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toFloat)(_v2);
          } else if (setting.type == FieldType.STRING) {
            if (!arg.includes("=")) {
              unknown.push(arg);return "continue";

            }

            var _v3 = arg.substring(arg.indexOf("=") + 1);

            if (_v3.length == 0) {
              unknown.push(arg);return "continue";

            }

            _this[setting.field] = _v3;
          } else {
            _this[setting.field] = isTrue;
            wasSet.push(setting.field);
          }
        };for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var _ret = _loop();if (_ret === "continue") continue;}} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}

      var fetchSources = [
      "fetchCloset",
      "fetchStorage",
      "fetchShop",
      "fetchInventory",
      "fetchDisplaycase",
      "fetchClan",
      "fetchSession",
      "fetchFamiliars"];


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
        this.doBound = this.fetchingEverywhereish && this.doNontradeables;
      }

      for (var _i = 0, _fetchSources = fetchSources; _i < _fetchSources.length; _i++) {var fetchSource = _fetchSources[_i];
        if (this[fetchSource] != null || fetchSource == "fetchFamiliars") {
          continue;
        }

        this[fetchSource] = this.fetchingEverywhereish;
      }

      if (this.settingsDebug) {
        for (var _i2 = 0, _Object$keys = Object.keys(this); _i2 < _Object$keys.length; _i2++) {var setting = _Object$keys[_i2];
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(setting + " = " + this[setting]);
        }
      }

      return unknown;
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
    } }], [{ key: "getSettings", value: function getSettings() {var settings = [];function makeSetting(type, name, aliases, desc) {var setting = new ValSetting();setting.type = type;setting.field = name;setting.names = aliases;setting.desc = desc;settings.push(setting);}makeSetting(FieldType.BOOLEAN, "fetchCloset", ["closet", "clos"], "Should it fetch from the closet");makeSetting(FieldType.BOOLEAN, "fetchStorage", ["storage", "stor", "hagnk", "hagnks"], "Should it fetch from storage");makeSetting(FieldType.BOOLEAN, "fetchShop", ["store", "mall", "shop"], "Should it fetch from the shop");makeSetting(FieldType.BOOLEAN, "fetchInventory", ["inventory", "inv"], "Should it fetch from your inventory");makeSetting(FieldType.BOOLEAN, "fetchDisplaycase", ["displaycase", "display", "dc"], "Should it fetch from the displaycase");makeSetting(FieldType.BOOLEAN, "fetchClan", ["clan", "stash"], "Should it check clan's stash? False by default");makeSetting(FieldType.BOOLEAN, "fetchSession", ["session"], "Should it fetch using your current session of items acquired? False by default");makeSetting(FieldType.BOOLEAN, "doTradeables", ["tradeable", "tradeables", "trade", "tradable"], "Should it do tradeables");makeSetting(FieldType.BOOLEAN, "doNontradeables", ["notrade", "nontrade", "notradeable", "notradable", "nontradeable", "notradeables", "nontradeables", "untrade", "untradeable", "untradeables"], "Should it do non-tradeables (Resolves to tradeables if it can)");makeSetting(FieldType.BOOLEAN, "fetchFamiliars", ["familiar", "familiars", "fam", "fams", "hatchling", "hatchlings"], "Should it do familiars (Resolves to their item). Bound being true also means this is true if not set");makeSetting(FieldType.BOOLEAN, "fetchSnapshot", ["snapshot"], "Should it attempt to use av-snapshot?");makeSetting(FieldType.BOOLEAN, "doBound", ["bound", "bind", "bounded", "binds", "binded"], "Should it do items that are bound to your account (Generally only iotms)");makeSetting(FieldType.NUMBER, "minimumMeat", ["meat", "minmeat", "minimummeat", "minmeat", "min-meat", "minprice", "price"], "Each item total worth, at least this amount.");makeSetting(FieldType.NUMBER, "minimumAmount", ["amount", "count", "minimumamount", "minamount"], "At least this many items");makeSetting(FieldType.NUMBER, "displayLimit", ["limit", "displaylimit", "maxdisplay", "lines"], "Limit results to display this amount");makeSetting(FieldType.NAME, "playerId", ["player", "playerid", "playername", "user", "who", "target", "name", "username"], 'Target another player\'s DC and Shop. Can provide the dc/shop param. Can do player="John Smith" for spaces');makeSetting(FieldType.BOOLEAN, "doSuperFast", ["fast", "superfast", "speed", "quick", "rough"], "Try resolve everything with historical price, no matter how outdated");makeSetting(FieldType.NUMBER, "maxAge", ["age", "maxage", "days"], "The max days a price is allowed to be outdated, useful if you're trying to force things to be more up to date");makeSetting(FieldType.SORTBY, "sortBy", ["sort", "sortby", "sorted"], "What we should sort the results by, prefix with ! or - to reverse sort. Supports: " + Object.keys(SortBy).filter((s) => s.length > 2).join(", "));makeSetting(FieldType.BOOLEAN, "shopWorth", ["worth", "shopworth", "pricing", "prices"], "Seperates items in shop from the other items, and shows how under/overpriced they are. This can be inaccurate");makeSetting(FieldType.STRING, "javascriptFilter", ["jsfilter", "javascriptfilter", "javascript", "js"], 'Filters if an item can be shown, provides an item & amount and expects a boolean. Any double quotes in your code must not have an empty space to the right. Example: jsfilter="(item, amount) => item.name.includes("beer") && require("kolmafia").toSlot(item) != Slot.none". To shorthand the "require(kol)" just do $kol');makeSetting(FieldType.NUMBER, "sales", ["sales"], "Hides items that have less than this amount of sales. As this would be incredibly slow otherwise, it will only take effect on what would be the last X items showed");makeSetting(FieldType.BOOLEAN, "useLastSold", ["useLastSold", "lastsold", "soldprice"], "Resolve prices by their last sold, initial runs with this parameter can be quite slow");makeSetting(FieldType.BOOLEAN, "brief", ["brief"], "Prints out a single line as the final result, the total meat.");return settings;} }]);return AccountValSettings;}();


var PricingSettings = /*#__PURE__*/function () {function PricingSettings() {_classCallCheck(this, PricingSettings);_defineProperty(this, "expensivePricesAt",
    40000000);_defineProperty(this, "cheapTotalsLessThan",
    20000000);_defineProperty(this, "cheapPricesLessThan",
    2000000);_defineProperty(this, "maxPriceAge", void 0);}_createClass(PricingSettings, [{ key: "getMaxPriceAge", value:


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

/***/ 25:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ AccountValUtils)
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(530);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AccountValSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(280);
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

        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("DEBUG: " + message, "gray");
      };

      var tCommand = command;
      var match;

      while ((match = tCommand.match(/(^| )([a-zA-Z]+ )([^ ]+)/)) != null) {
        tCommand = tCommand.replace(match[2], "");

        var setting = settings.getSetting(match[2].trim());

        var v2 = (match[3] || "").replace("!", "").split("=")[0].trim();
        var setting2 = settings.getSetting(
        v2.toLowerCase() == "true" ? "" : v2);


        if (
        setting == null ||
        setting.type == _AccountValSettings__WEBPACK_IMPORTED_MODULE_1__/* .FieldType.BOOLEAN */ .fS.BOOLEAN && setting2 != null)
        {
          debug("'".concat(match[2], "' is not a key parameter"));
          continue;
        }

        command = command.replace(match[2], match[2].trim() + "=");
        tCommand = tCommand.replace(match[3], "");
        debug("Replacing '".concat(
        match[2], "' as a key parameter, matched using '").concat(match[0], "'"));

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
    } }]);return AccountValUtils;}();

/***/ }),

/***/ 226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ ItemResolver),
/* harmony export */   "q": () => (/* binding */ ItemType)
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(530);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];if (null != _i) {var _s,_e,_x,_r,_arr = [],_n = !0,_d = !1;try {if (_x = (_i = _i.call(arr)).next, 0 === i) {if (Object(_i) !== _i) return;_n = !1;} else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);} catch (err) {_d = !0, _e = err;} finally {try {if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;} finally {if (_d) throw _e;}}return _arr;}}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _createForOfIteratorHelper(o, allowArrayLike) {var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];if (!it) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e2) {throw _e2;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = it.call(o);}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e3) {didErr = true;err = _e3;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];return arr2;}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperty(obj, key, value) {key = _toPropertyKey(key);if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toPropertyKey(arg) {var key = _toPrimitive(arg, "string");return typeof key === "symbol" ? key : String(key);}function _toPrimitive(input, hint) {if (typeof input !== "object" || input === null) return input;var prim = input[Symbol.toPrimitive];if (prim !== undefined) {var res = prim.call(input, hint || "default");if (typeof res !== "object") return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return (hint === "string" ? String : Number)(input);}
var

AccValStuff = /*#__PURE__*/_createClass(function AccValStuff() {_classCallCheck(this, AccValStuff);_defineProperty(this, "itemType", void 0);_defineProperty(this, "actualItem", void 0);_defineProperty(this, "data1", void 0);_defineProperty(this, "data2", void 0);});






var ItemType = /*#__PURE__*/function (ItemType) {ItemType[ItemType["UNTRADEABLE_ITEM"] = 0] = "UNTRADEABLE_ITEM";ItemType[ItemType["BOOK"] = 1] = "BOOK";ItemType[ItemType["PROPERTY"] = 2] = "PROPERTY";ItemType[ItemType["EUDORA"] = 3] = "EUDORA";ItemType[ItemType["GARDEN"] = 4] = "GARDEN";ItemType[ItemType["VISIT_URL_CHECK"] = 5] = "VISIT_URL_CHECK";ItemType[ItemType["SKILL"] = 6] = "SKILL";ItemType[ItemType["CURRENCY"] = 7] = "CURRENCY";ItemType[ItemType["CAMPGROUND"] = 8] = "CAMPGROUND";ItemType[ItemType["SCRIPT"] = 9] = "SCRIPT";return ItemType;}({});





















var ItemResolver = /*#__PURE__*/function () {





  function ItemResolver() {_classCallCheck(this, ItemResolver);_defineProperty(this, "visitCache", new Map());_defineProperty(this, "accValStuff", void 0);_defineProperty(this, "accountValCache", new Map());_defineProperty(this, "accountValVisitCachePropName", "_accountValVisitCache");
    this.accValStuff = this.loadAccountValStuff();
  }_createClass(ItemResolver, [{ key: "loadCache", value:

    function loadCache() {
      var prop = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)(this.accountValVisitCachePropName).split(
      ",");var _iterator = _createForOfIteratorHelper(


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
            if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveSkill)(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Skill.get(s.data1))) {
              items.push([s.actualItem, _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus.BOUND */ .Ms.BOUND]);
            }
          } else if (s.itemType == ItemType.EUDORA) {
            if (
            this.visitCheck(
            s.actualItem,
            "account.php?tab=correspondence",
            s.data1))

            {
              items.push([s.actualItem, _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus.BOUND */ .Ms.BOUND]);
            }
          } else if (s.itemType == ItemType.PROPERTY) {
            if (this.testProperty(s.data1)) {
              items.push([s.actualItem, _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus.BOUND */ .Ms.BOUND]);
            }
          } else if (s.itemType == ItemType.VISIT_URL_CHECK) {
            if (this.visitCheck(s.actualItem, s.data1, s.data2)) {
              items.push([s.actualItem, _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus.BOUND */ .Ms.BOUND]);
            }
          } else if (s.itemType == ItemType.GARDEN) {
            if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myGardenType)() == s.data1) {
              items.push([s.actualItem, _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus.IN_USE */ .Ms.IN_USE]);
            }
          } else if (s.itemType == ItemType.SKILL) {
            if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getPermedSkills)()[kolmafia__WEBPACK_IMPORTED_MODULE_0__.Skill.get(s.data1).name]) {
              items.push([s.actualItem, _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus.BOUND */ .Ms.BOUND]);
            }
          } else if (s.itemType == ItemType.CAMPGROUND) {
            if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getCampground)()[s.actualItem.name] != null) {
              items.push([s.actualItem, _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus.BOUND */ .Ms.BOUND]);
            }
          } else if (s.itemType == ItemType.SCRIPT) {
            if (eval(s.data1)) {
              items.push([s.actualItem, _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus.BOUND */ .Ms.BOUND]);
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
          result =
          result &&
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)(prop.replace("!", "")) == "true" == !prop.includes("!");
        }} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}

      return result;
    } }, { key: "addItem", value:

    function addItem(
    ownedItems,
    item,
    name,
    bound)


    {var count = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;var worthMultiplier = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
      var v = new _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ValItem */ .oD(item, name, bound);
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

          try {
            var item = kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.get(s.data1);
            var v = void 0;var _iterator5 = _createForOfIteratorHelper(

              copy.keys()),_step5;try {for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {var k = _step5.value;
                if (k.tradeableItem != item) {
                  continue;
                }

                v = k;
                break;
              }} catch (err) {_iterator5.e(err);} finally {_iterator5.f();}

            if (v == null) {
              continue;
            }

            this.addItem(
            ownedItems,
            s.actualItem,
            item.name,
            v.bound == null || v.bound == _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus.NO_TRADE */ .Ms.NO_TRADE ?
            s.itemType == ItemType.UNTRADEABLE_ITEM ?
            _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus.BOUND */ .Ms.BOUND :
            _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus.NO_TRADE */ .Ms.NO_TRADE :
            v.bound,
            copy.get(v),
            /\d+/.test(s.data2) ? (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(s.data2) : 1);

          } catch (e) {
            (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("You probably need to update mafia! Got an error! " + e, "red");
          }
        }} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}
    } }, { key: "resolveFamiliars", value:

    function resolveFamiliars(familiars, ownedItems) {var _iterator6 = _createForOfIteratorHelper(
        familiars),_step6;try {for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {var fam = _step6.value;
          if (!fam.hatchling.tradeable) {
            continue;
          }

          this.addItem(ownedItems, fam.hatchling, fam + "", _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus.FAMILIAR */ .Ms.FAMILIAR);
        }} catch (err) {_iterator6.e(err);} finally {_iterator6.f();}
    }

    /**
     * Items that are equipped on an unused fam doesn't show otherwise
     */ }, { key: "resolveFamiliarItems", value:
    function resolveFamiliarItems() {
      var famEquipped = new Map();var _iterator7 = _createForOfIteratorHelper(

        kolmafia__WEBPACK_IMPORTED_MODULE_0__.Familiar.all()),_step7;try {for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {var fam = _step7.value;
          if (!(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.haveFamiliar)(fam) || (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myFamiliar)() == fam) {
            continue;
          }

          var item = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.familiarEquippedEquipment)(fam);

          if (item == null || item == kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.none) {
            continue;
          }

          famEquipped.set(item, (famEquipped.get(item) | 0) + 1);
        }} catch (err) {_iterator7.e(err);} finally {_iterator7.f();}

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
      var values = [];var _iterator8 = _createForOfIteratorHelper(

        buffer.split("\n")),_step8;try {for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {var line = _step8.value;
          if (line.startsWith("#") || line.length == 0) {
            continue;
          }

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
              break;
            case "g":
              e = ItemType.GARDEN;
              break;
            case "t":
              e = ItemType.CURRENCY;
              break;
            case "c":
              e = ItemType.CAMPGROUND;
              break;
            case "s":
              e = ItemType.SCRIPT;
              break;
            default:
              (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Found line '" + line + "' which I can't handle!");}


          try {
            var _v = new AccValStuff();

            _v.itemType = e;
            _v.actualItem = kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.get(spl[1]);
            _v.data1 = spl[2];
            _v.data2 = spl[3];

            values.push(_v);
          } catch (e) {
            (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("You probably need to update mafia! Got an error! " + e, "red");
          }
        }} catch (err) {_iterator8.e(err);} finally {_iterator8.f();}

      this.loadSkills(values);

      loop: for (var _i = 0, _values = values; _i < _values.length; _i++) {var v = _values[_i];
        if (v.actualItem.tradeable) {
          continue;
        }var _iterator9 = _createForOfIteratorHelper(

          values),_step9;try {for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {var v1 = _step9.value;
            if (
            v1.itemType != ItemType.UNTRADEABLE_ITEM &&
            v1.itemType != ItemType.CURRENCY)
            {
              continue;
            }

            if (kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.get(v1.data1) != v.actualItem) {
              continue;
            }

            continue loop;
          }} catch (err) {_iterator9.e(err);} finally {_iterator9.f();}

        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Missing a tradeable item for " + v.actualItem, "red");
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
          !i.reusable && !i.quest && !i.gift && skill != kolmafia__WEBPACK_IMPORTED_MODULE_0__.Skill.none);}));



      // Now we load the skills we have
      var _iterator10 = _createForOfIteratorHelper(itemsSkills),_step10;try {for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {var _step10$value = _slicedToArray(_step10.value, 2),i = _step10$value[0],skill = _step10$value[1];
          // Skip items that are not tradeable skills, because you either have a skill linked to an untradeable item, or a tradeable item.
          // If its linked to an untradeable, then we can check the untradeable item itself. Not bother with the skill.
          if (!i.tradeable) {
            continue;
          }

          var v = new AccValStuff();

          v.itemType = ItemType.SKILL;
          v.actualItem = i;
          v.data1 = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(skill).toString();

          values.push(v);
        }} catch (err) {_iterator10.e(err);} finally {_iterator10.f();}
    } }]);return ItemResolver;}();

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ FetchFromPage)
/* harmony export */ });
/* unused harmony export StoreItem */
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(530);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
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
      }));

      var skills = new Map(
      kolmafia__WEBPACK_IMPORTED_MODULE_0__.Skill.all().map((s) => [(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.entityDecode)(s.name).toLowerCase(), s]));

      var fams = new Map(
      kolmafia__WEBPACK_IMPORTED_MODULE_0__.Familiar.all().map((f) => [f.toString().toLowerCase(), f]));

      // The hatching item is also listed alongside the familiar, so delete any items.
      var ignore = _toConsumableArray(fams.values()).map((f) =>
      f.hatchling.toString().toLowerCase());


      var page = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)(
      "https://api.aventuristo.net/av-snapshot?u=" + username);


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
            "red");

          }

          continue;
        }

        if (name.match(/: level \d$/)) {
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
          "red");

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
          /selecteditem=(\d+).+?<b>.+?<\/b> \(([\d,]+)\) +(?:\(Limit ([\d,]+) \/ day\))?<\/td><td>((?:\d|,)+) Meat<\/td>/);


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
      kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.all().map((i) => [i.descid, i]));


      var page = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("displaycollection.php?who=" + userId);var _iterator2 = _createForOfIteratorHelper(

        page.split("<tr>")),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var s = _step2.value;
          var match = s.match(
          /<td width=30 height=30><img src=".+?" class=hand onClick='descitem\((\d+),(\d+)\)'><\/td><td valign=center><b>.+?<\/b>(?: \(((?:\d|,)+)\))?<\/td><\/tr>/);


          if (match == null) {
            continue;
          }

          var item = descs.get(match[1]);

          if (item == null) {
            (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Unknown item description: " + match[1] + ", update mafia?");
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
/* harmony export */   "FT": () => (/* binding */ PriceType),
/* harmony export */   "Zi": () => (/* binding */ PriceResolver)
/* harmony export */ });
/* unused harmony export ItemPrice */
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(530);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperty(obj, key, value) {key = _toPropertyKey(key);if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toPropertyKey(arg) {var key = _toPrimitive(arg, "string");return typeof key === "symbol" ? key : String(key);}function _toPrimitive(input, hint) {if (typeof input !== "object" || input === null) return input;var prim = input[Symbol.toPrimitive];if (prim !== undefined) {var res = prim.call(input, hint || "default");if (typeof res !== "object") return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return (hint === "string" ? String : Number)(input);}



var PriceType = /*#__PURE__*/function (PriceType) {PriceType[PriceType["HISTORICAL"] = 0] = "HISTORICAL";PriceType[PriceType["MALL"] = 1] = "MALL";PriceType[PriceType["MALL_SALES"] = 2] = "MALL_SALES";return PriceType;}({});





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
        return new ItemPrice(item, (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.autosellPrice)(item), PriceType.MALL, 0);
      }

      var salesPricing = new MallHistoryPricing(
      this.settings,
      this.history,
      item,
      amount);

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
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.historicalAge)(item));

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
      lastUpdated);


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
      this.getAge());

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
        this.amount).
        getPrice();
      }

      return new ItemPrice(
      this.item,
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.historicalPrice)(this.item),
      PriceType.HISTORICAL,
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.historicalAge)(this.item));

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
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "main": () => (/* binding */ main)
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(530);
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var _AccountValSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(280);
/* harmony import */ var _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
/* harmony import */ var _PriceResolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(238);
function _createForOfIteratorHelper(o, allowArrayLike) {var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];if (!it) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = it.call(o);}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];return arr2;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}function _defineProperty(obj, key, value) {key = _toPropertyKey(key);if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toPropertyKey(arg) {var key = _toPrimitive(arg, "string");return typeof key === "symbol" ? key : String(key);}function _toPrimitive(input, hint) {if (typeof input !== "object" || input === null) return input;var prim = input[Symbol.toPrimitive];if (prim !== undefined) {var res = prim.call(input, hint || "default");if (typeof res !== "object") return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return (hint === "string" ? String : Number)(input);}



var

AccountVal = /*#__PURE__*/function () {function AccountVal() {_classCallCheck(this, AccountVal);_defineProperty(this, "logic", void 0);_defineProperty(this, "settings", void 0);}_createClass(AccountVal, [{ key: "doCheck", value:



    function doCheck() {
      var pronoun = this.settings.fetchClan ?
      "The clan stash is" :
      !this.settings.playerId || this.settings.playerId == (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myId)()) ?
      "You are" :
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getPlayerName)(this.settings.playerId) + " is";
      var netvalue = 0;
      this.logic.doPricing();

      var aWorth = this.logic.priceResolver.itemPrice(
      kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.get("Mr. Accessory"),
      1).
      price;

      var lines = [];
      var mallExtinct = [];
      var shopNetValue = 0;
      var shopPricedAt = 0;

      for (var no = this.logic.prices.length - 1; no >= 0; no--) {
        var item = this.logic.prices[no][0];
        var price = this.logic.prices[no][1];

        if (
        this.settings.sales > 0 &&
        this.logic.priceResolver.history.getAmountSold(item.tradeableItem, 14) <
        this.settings.sales)
        {
          continue;
        }

        // Mall extinct items should be 1b
        var worthEach =
        price.price <= 0 && item.worthMultiplier == 1 ?
        999999999 :
        price.price * (1 / item.worthMultiplier);

        var count = this.logic.ownedItems.get(item);
        var totalWorth = Math.round(worthEach * count);
        netvalue += totalWorth;

        if (lines.length >= this.settings.displayLimit) {
          continue;
        }

        var titleName = item.name;

        if (item.name != item.tradeableItem.name) {
          titleName =
          item.name + (
          item.worthMultiplier > 1 ? " x " + item.worthMultiplier : "") +
          " (" +
          item.tradeableItem.name +
          ")";
        }

        var title =
        titleName +
        " @ " + (
        price.accuracy == _PriceResolver__WEBPACK_IMPORTED_MODULE_4__/* .PriceType.MALL_SALES */ .FT.MALL_SALES ?
        "last sold " :
        "last malled ") +
        _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils.getNumber */ .Q.getNumber(price.price) +
        " meat each. Price valid as of " +
        _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils.getNumber */ .Q.getNumber(price.daysOutdated, 1) +
        " days ago";

        if (item.shopWorth > 0) {
          title +=
          ". Shop selling at: " + _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils.getNumber */ .Q.getNumber(item.shopWorth);
        }

        var name = this.escapeHTML(item.name);

        if (item.bound != null) {
          var boundInfo = void 0;
          var color = "#db2525";

          if (item.bound == _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus.SHOP_WORTH */ .Ms.SHOP_WORTH) {
            var overpricedPerc = item.shopWorth / worthEach;

            if (item.shopWorth < 999999000) {
              shopPricedAt += item.shopWorth * count;
              shopNetValue += totalWorth;
            }

            if (overpricedPerc <= 1.05) {
              color = "#196f3d";
            }

            boundInfo = "Price: ".concat(_AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils.getNumber */ .Q.getNumber(
            Math.round(overpricedPerc * 100)), "%");

          } else {
            boundInfo = item.getBound();
          }

          name = "".concat(name, " (<font color='").concat(color, "' title='").concat(this.escapeHTML(
          title), "'>").concat(
          this.escapeHTML(boundInfo), "</font>)");
        }

        if (worthEach <= 0 || worthEach >= 999999999) {
          if (count > 1) {
            mallExtinct.push(count + " @ " + name);
          } else {
            mallExtinct.push(name);
          }

          continue;
        }

        var text = "".concat(_AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils.getNumber */ .Q.getNumber(
        count), " ").concat(
        name, " worth a total of ").concat(_AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils.getNumber */ .Q.getNumber(totalWorth));

        lines.push(
        "<font title='" + this.escapeHTML(title) + "'>" + text + "</font>");

      }

      if (!this.settings.brief) {
        lines = lines.reverse();
        var skipping = Math.max(
        0,
        this.logic.prices.length - this.settings.displayLimit);


        if (skipping > 0) {
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.printHtml)(
          "<font color='gray'>Skipping " +
          _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils.getNumber */ .Q.getNumber(skipping) +
          " lines and displaying the last " +
          _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils.getNumber */ .Q.getNumber(this.settings.displayLimit) +
          " lines..</font>");

        }var _iterator = _createForOfIteratorHelper(

          lines),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var line = _step.value;
            (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.printHtml)(line);
          }} catch (err) {_iterator.e(err);} finally {_iterator.f();}

        if (mallExtinct.length > 0) {
          var colors = ["#4f5893", "#934f4f"];

          mallExtinct = mallExtinct.map(
          (s, i) => "<font color='" + colors[i % 2] + "'>" + s + "</font>");


          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.printHtml)(
          "There were " +
          mallExtinct.length +
          " mall extinct items! Items: " +
          mallExtinct.join(", "));

        }
      }

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
      pronoun + " worth " + _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils.getNumber */ .Q.getNumber(netvalue) + " meat!",
      "blue");


      if (this.settings.brief) {
        return;
      }

      var mrAWorth = (0.0 + netvalue) / aWorth;

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.printHtml)("<font title='With Mr. Accessory worth being ".concat(
      _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils.getNumber */ .Q.getNumber(
      aWorth), " meat'>Going by the value of a Mr. Accessory, that's $").concat(
      _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils.getNumber */ .Q.getNumber(
      mrAWorth * 10), "</font>"));



      if (
      shopPricedAt > 0 &&
      this.logic.prices.filter((v) => v[0].bound == _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .ItemStatus.SHOP_WORTH */ .Ms.SHOP_WORTH).
      length == this.logic.prices.length)
      {
        shopPricedAt /= shopNetValue;
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Overall, the shop is ".concat(
        _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils.getNumber */ .Q.getNumber(
        Math.round(shopPricedAt * 100)), "% of mall"));


        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
        "Disclaimer: Cheapest price being 100% can mean we're comparing prices against.. this shop.",
        "gray");

      }

      this.printMeat();
    } }, { key: "printMeat", value:

    function printMeat() {
      if (!this.settings.doTradeables) {
        return;
      }

      var meat = 0;
      var meatSources = [];

      if (this.settings.fetchInventory && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMeat)() != 0) {
        meat += (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMeat)();
        meatSources.push(_AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils.getNumber */ .Q.getNumber((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myMeat)()) + " in inventory");
      }

      if (this.settings.fetchCloset && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myClosetMeat)() != 0) {
        meat += (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myClosetMeat)();
        meatSources.push(
        _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils.getNumber */ .Q.getNumber((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myClosetMeat)()) + " in closet");

      }

      if (this.settings.fetchStorage && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myStorageMeat)() != 0) {
        meat += (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myStorageMeat)();
        meatSources.push(
        _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils.getNumber */ .Q.getNumber((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.myStorageMeat)()) + " in storage");

      }

      if (meat > 0 && this.settings.playerId == 0) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.printHtml)(
        "<font title='" +
        meatSources.join(", ") +
        "'>This doesn't include your " +
        _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils.getNumber */ .Q.getNumber(meat) +
        " meat!</font>");

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

    function doHelp() {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
      "AccountVal is a script to check what your account is worth, and find the good stuff fast.",
      "blue");

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
      "You can provide these as a parameter to accountval to do other stuff than the base script. Hover over them to see aliases.",
      "blue");

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.printHtml)(
      "<font color='blue'>Use ! or - to negate a boolean option, as well as =. Eg:</font><font color='gray'> -bound !bound bound=false</font>");


      var even = true;var _iterator2 = _createForOfIteratorHelper(

        _AccountValSettings__WEBPACK_IMPORTED_MODULE_2__/* .AccountValSettings.getSettings */ .iX.getSettings()),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var setting = _step2.value;
          var defaultOf = ".</font> <font>Default is: ";

          if (this.settings[setting.field] != null) {
            var val = this.settings[setting.field];

            if (setting.type == _AccountValSettings__WEBPACK_IMPORTED_MODULE_2__/* .FieldType.NUMBER */ .fS.NUMBER) {
              val = setting.names[0] + "=" + val;
            } else if (setting.type == _AccountValSettings__WEBPACK_IMPORTED_MODULE_2__/* .FieldType.SORTBY */ .fS.SORTBY) {
              val = setting.names[0] + "=" + _AccountValSettings__WEBPACK_IMPORTED_MODULE_2__/* .SortBy */ .hn[val];
            }

            if (val == "" && typeof val != "boolean") {
              val = "null";
            }

            defaultOf += val;
          } else {
            defaultOf += "null";
          }

          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.printHtml)("<font color='gray' title='Aliases: ".concat(
          setting.names.join(", "), "'><b>").concat(
          setting.names[0], "</b> - ").concat(
          setting.desc).concat(defaultOf, "</font>"));


          even = !even;
        }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.printHtml)(
      "<font color='gray'>Disclaimer: The prices shown are not absolute, and normally overstate what it really is worth.</font>");

      // show - How many to show, defaults to 100
      // count - How many we must have of this item
      // sortby - Indiv Price, Total Price, Amount
      // trade
      // accountval price>3000 iprice>3000 show
    } }, { key: "start", value:

    function start(command) {
      this.settings = new _AccountValSettings__WEBPACK_IMPORTED_MODULE_2__/* .AccountValSettings */ .iX();

      try {
        if (command == null) {
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
          "To fine tune what we check, including to tradeables only.. Provide the parameter 'help' for more info",
          "blue");

          command = "";
        } else if (command.toLowerCase().match(/([^a-z]|^)help([^a-z]|$)/)) {
          this.settings.doSettings([]);
          this.doHelp();
          return;
        }

        var spl = _AccountValUtils__WEBPACK_IMPORTED_MODULE_3__/* .AccountValUtils.splitArguments */ .Q.splitArguments(
        this.settings,
        command);


        var unknown = this.settings.doSettings(spl);

        if (unknown.length > 0) {
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Unrecognized params! " + unknown.join(", "), "red");
          return;
        }

        var priceSettings = new _AccountValSettings__WEBPACK_IMPORTED_MODULE_2__/* .PricingSettings */ .Iz();
        priceSettings.maxPriceAge = this.settings.maxAge;
        this.logic = new _AccountValLogic__WEBPACK_IMPORTED_MODULE_1__/* .AccountValLogic */ .Mc(this.settings, priceSettings);

        this.logic.loadItems();
        this.doCheck();
      } finally {
        var revision = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getRevision)();

        if (revision != null && revision > 0 && revision < 26000) {
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.printHtml)(
          "<font color='red'>Warning! You are using an outdated version of KoLmafia! You're likely missing some items, and may not have the ability to render the 'title' attribute! You could even be missing wrapped text!</font>");

          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.printHtml)(
          "Downloads: <a color='blue' href='https://github.com/kolmafia/kolmafia/releases'>[Github]</a> or <a color='blue' href='https://ci.kolmafia.us/'>[Jenkins]</a> <a color='gray' href='https://ci.kolmafia.us/job/Kolmafia/lastSuccessfulBuild/artifact/dist/'>[Link to Jar]</a>");

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