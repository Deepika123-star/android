webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderSummary; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_checkout_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderSummary = /** @class */ (function () {
    function OrderSummary(nav, service, params, functions, values) {
        this.nav = nav;
        this.service = service;
        this.params = params;
        this.functions = functions;
        this.values = values;
        localStorage.setItem("pagename", "ordersummary");
        this.id = params.data;
    }
    OrderSummary.prototype.ionViewDidLoad = function () {
        var _this = this;
        localStorage.setItem("pagename", "ordersummary");
        this.service.getOrderSummary(this.id)
            .then(function (results) { return _this.orderSummary = results; });
    };
    OrderSummary.prototype.Continue = function () {
        this.values.count = 0;
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* Home */]);
    };
    OrderSummary = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\deshimall\src\pages\checkout\order-summary\order-summary.html"*/'<ion-header>\n    <ion-navbar color="header" hideBackButton> <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n        <ion-title>{{"Order Summary" | translate}} </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content text-wrap class="order-summary">\n    <ion-spinner *ngIf="!orderSummary" name="crescent"> </ion-spinner>\n    <div *ngIf="orderSummary" class="margin">\n        <ion-card>\n            <ion-card-header style="background-color: #f5f5f5">\n\n<img style="width: 100px;height: 100px;" src="assets/image/order.png">\n\n            </ion-card-header>\n\n            <ion-card-header style="background-color: #f5f5f5">\n                <h2>{{"Order Received" | translate}} </h2>\n                <h3>{{"Thank you. Your order has been received" | translate}} </h3>\n            </ion-card-header>\n            <div *ngIf="orderSummary" class="summary">\n                <ion-item no-lines>\n                    <h2>{{"Order Number" | translate}} : {{orderSummary.number}} </h2>\n                    <h2>{{"Order date" | translate}} : {{orderSummary.date_created | date:\'MMM d, y hh:mm a\'}} </h2>\n                    <h2>{{"Total" | translate}} : {{1*orderSummary.total | currency:values.settings.currency:true:\'1.2-2\'}} </h2>\n                    <h2>{{"Payment Method" | translate}} : {{orderSummary.payment_method_title}} </h2>\n                    <div *ngFor="let item of orderSummary.shipping_lines | keys">\n                        <h2>{{"Shipping" | translate}} : {{item.value.method_title}} </h2>\n                    </div>\n                </ion-item>\n            </div>\n        </ion-card>\n        <ion-card>\n            <ion-card-header style="background-color: #f5f5f5">\n                <ion-label class="side-header">{{"Order Details" | translate}} </ion-label>\n            </ion-card-header>\n            <div class="order-details">\n                <!--ion-item no-lines>\n          <ion-label class="side-header">{{"Order Details" | translate}}\n          </ion-label>\n        </ion-item-->\n                <div *ngFor="let item of orderSummary.line_items | keys">\n                    <ion-row>\n                        <ion-col col-8>\n                            <ion-label no-margin>{{item.value.name}} x {{item.value.quantity}} </ion-label>\n                        </ion-col>\n                        <ion-col col class="text-right">\n                            <ion-label no-margin>{{1*item.value.subtotal | currency:values.settings.currency:true:\'1.2-2\' }} </ion-label>\n                        </ion-col>\n                    </ion-row>\n                </div>\n              \n                <ion-row>\n                    <ion-col col-8>\n                        <ion-label no-margin>{{"Shipping Total" | translate}} </ion-label>\n                    </ion-col>\n                    <ion-col class="text-right">\n                        <ion-label no-margin>{{1*orderSummary.shipping_total | currency:values.settings.currency:true:\'1.2-2\' }} </ion-label>\n                    </ion-col>\n                </ion-row>\n                <ion-row *ngIf="!orderSummary.shipping_tax == 0">\n                    <ion-col col-8>\n                        <ion-label no-margin>{{"Shipping Tax" | translate}} </ion-label>\n                    </ion-col>\n                    <ion-col class="text-right">\n                        <ion-label no-margin>{{1*orderSummary.shipping_tax | currency:values.settings.currency:true:\'1.2-2\' }} </ion-label>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-8>\n                        <ion-label no-margin>{{"Total Tax" | translate}} </ion-label>\n                    </ion-col>\n                    <ion-col class="text-right">\n                        <ion-label no-margin>{{1*orderSummary.total_tax | currency:values.settings.currency:true:\'1.2-2\' }} </ion-label>\n                    </ion-col>\n                </ion-row>\n                <ion-row class="order-total">\n                    <ion-col col-8>\n                        <ion-label class="side-header"><b>{{"Total" |translate}}</b> </ion-label>\n                    </ion-col>\n                    <ion-col class="text-right">\n                        <ion-label> <b>{{1*orderSummary.total | currency:values.settings.currency:true:\'1.2-2\' }}\n              </b> </ion-label>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </ion-card>\n        <div class="continue-button"> <button ion-button full color="button-color" no-padding no-margin text-uppercase (click)="Continue()">\n          Home\n        </button> </div>\n    </div>\n</ion-content>'/*ion-inline-end:"D:\ionic\deshimall\src\pages\checkout\order-summary\order-summary.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_checkout_service__["a" /* CheckoutService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */]])
    ], OrderSummary);
    return OrderSummary;
}());

//# sourceMappingURL=order-summary.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_category_service__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_product__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__filter_filter__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_users_pages_users__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ProductsPage = /** @class */ (function () {
    function ProductsPage(nav, popoverCtrl, service, modalCtrl, params, values, functions) {
        var _this = this;
        this.nav = nav;
        this.popoverCtrl = popoverCtrl;
        this.service = service;
        this.modalCtrl = modalCtrl;
        this.values = values;
        this.functions = functions;
        this.has_more_items = true;
        this.listview = false;
        this.shouldShowCancel = true;
        this.showFilters = false;
        this.sort = 0;
        localStorage.setItem("pagename", "products");
        this.data = {};
        this.filter = {};
        this.q = "";
        if (params.data.id)
            this.filter.category = params.data.id;
        this.categoryName = params.data.name;
        this.filter.page = 1;
        this.count = 10;
        this.offset = 0;
        this.values.filter = {};
        this.options = [];
        this.subCategories = [];
        this.items = [];
        this.quantity = "1";
        this.subCategories = params.data.categories;
        this.service.load(this.filter)
            .then(function (results) { return _this.products = results; });
        this.service.getAttributes(this.filter.category)
            .then(function (results) { return _this.values.attributes = results; });
        this.setListView();
    }
    ProductsPage_1 = ProductsPage;
    ProductsPage.prototype.ionViewWillEnter = function () {
        localStorage.setItem("pagename", "products");
        //alert(localStorage.getItem("usermobile"));
    };
    ProductsPage.prototype.getCategory = function (id, slug, name) {
        this.items.id = id;
        this.items.slug = slug;
        this.items.name = name;
        this.items.categories = this.categories;
        this.nav.push(ProductsPage_1, this.items);
    };
    ProductsPage.prototype.parseText = function (id, count, offset, obj2) {
        var text = '{';
        text += '"category' + '":"' + id + '"}';
        var obj1 = JSON.parse(text);
        var obj3 = {};
        for (var attrname in obj1) {
            obj3[attrname] = obj1[attrname];
        }
        for (attrname in obj2) {
            obj3[attrname] = obj2[attrname];
        }
        return obj3;
    };
    ProductsPage.prototype.getProducts = function (item) {
        this.nav.push(ProductsPage_1, item);
    };
    ProductsPage.prototype.getProduct = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__product_product__["a" /* ProductPage */], id);
    };
    ProductsPage.prototype.getCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */]);
    };
    ProductsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.filter.page += 1;
        this.service.loadMore(this.filter).then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    ProductsPage.prototype.handleMore = function (results, infiniteScroll) {
        if (results != undefined) {
            for (var i = 0; i < results.length; i++) {
                this.products.push(results[i]);
            }
            ;
        }
        if (results.length == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    ProductsPage.prototype.setListView = function () {
        this.values.listview = true;
    };
    ProductsPage.prototype.setGridView = function () {
        this.values.listview = false;
    };
    ProductsPage.prototype.deleteFromCart = function (id) {
        var _this = this;
        this.service.deleteFromCart(id).then(function (results) { return _this.status = results; });
    };
    ProductsPage.prototype.updateToCart = function (id) {
        var _this = this;
        this.service.updateToCart(id).then(function (results) { return _this.status = results; });
    };
    ProductsPage.prototype.addToCart = function (id, type) {
        var _this = this;
        if (type == 'variable') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__product_product__["a" /* ProductPage */], id);
        }
        else {
            var text = '{';
            var i;
            for (i = 0; i < this.options.length; i++) {
                var res = this.options[i].split(":");
                text += '"' + res[0] + '":"' + res[1] + '",';
            }
            text += '"product_id":"' + id + '",';
            text += '"quantity":"' + this.quantity + '"}';
            var obj = JSON.parse(text);
            this.service.addToCart(obj).then(function (results) { return _this.updateCart(results); });
        }
    };
    ProductsPage.prototype.updateCart = function (a) { };
    ProductsPage.prototype.onInput = function ($event) {
        var _this = this;
        this.filter.search = $event.srcElement.value;
        console.log(this.filter['filter[q]']);
        this.service.search(this.filter).then(function (results) { return _this.products = results; });
    };
    ProductsPage.prototype.onCancel = function ($event) {
        console.log('cancelled');
    };
    /*getFilter() {
        this.showFilters = true;
        this.has_more_items = false;
    }*/
    ProductsPage.prototype.cancel = function () {
        this.showFilters = false;
        this.has_more_items = true;
    };
    ProductsPage.prototype.chnageFilter = function (sort) {
        var _this = this;
        this.showFilters = false;
        this.has_more_items = true;
        this.filter.page = 1;
        if (sort == 0) {
            this.filter['filter[order]'] = "ASC";
            this.filter['filter[orderby]'] = "date";
        }
        if (sort == 1) {
            this.filter['filter[order]'] = "ASC";
            this.filter['filter[orderby]'] = "name";
        }
        else if (sort == 2) {
            this.filter['filter[order]'] = "DESC";
            this.filter['filter[orderby]'] = "name";
        }
        else if (sort == 3) {
            this.filter['filter[order]'] = "ASC";
            this.filter['filter[orderby]'] = "meta_value_num";
            this.filter['filter[orderby_meta_key]'] = "_price";
        }
        else if (sort == 4) {
            this.filter['filter[order]'] = "DESC";
            this.filter['filter[orderby]'] = "meta_value_num";
            this.filter['filter[orderby_meta_key]'] = "_price";
        }
        this.service.load(this.filter).then(function (results) { return _this.products = results; });
    };
    ProductsPage.prototype.addToWishlist = function (id) {
        var _this = this;
        if (this.values.isLoggedIn) {
            this.values.wishlistId[id] = true;
            this.service.addToWishlist(id).then(function (results) { return _this.update(results, id); });
        }
        else {
            this.functions.showAlert("Warning", "You must login to add product to wishlist");
        }
    };
    ProductsPage.prototype.update = function (results, id) {
        if (results.success == "Success") {
            this.values.wishlistId[id] = true;
        }
        else { }
    };
    ProductsPage.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id).then(function (results) { return _this.updateWish(results, id); });
    };
    ProductsPage.prototype.updateWish = function (results, id) {
        if (results.status == "success") {
            this.values.wishlistId[id] = false;
        }
    };
    ProductsPage.prototype.getFilter = function () {
        var _this = this;
        this.values.filter = this.filter;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__filter_filter__["a" /* Filter */]);
        modal.onDidDismiss(function (data) {
            if (_this.values.applyFilter) {
                _this.filter = _this.values.filter;
                _this.has_more_items = true;
                _this.filter.page = 1;
                _this.filter.opts = undefined;
                _this.filter.component = undefined;
                _this.service.load(_this.filter).then(function (results) { return _this.handleFilterResults(results); });
            }
        });
        modal.present();
    };
    ProductsPage.prototype.handleFilterResults = function (results) {
        this.products = results;
    };
    ProductsPage.prototype.openpage = function (page) {
        if (page == "CategoryPage") {
            location.reload(true);
        }
        if (page == "Home") {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* Home */]);
        }
        if (page == "CartPage") {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */]);
        }
        if (page == "PagesUsersPage") {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_users_pages_users__["a" /* PagesUsers */]);
        }
        else {
            history.go(-1);
        }
    };
    ProductsPage = ProductsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-products',template:/*ion-inline-start:"D:\ionic\deshimall\src\pages\products\products.html"*/'<ion-header>\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title *ngIf="categoryName"><span [innerHTML]="categoryName"></span>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only light class="has-icon icon-only has-badge" (click)="getCart()">\n        <ion-icon color="icon-color" name="md-basket" class="item-icon">\n        </ion-icon>\n        <ion-badge class="badge badge-light"  *ngIf="values.count">{{values.count}}\n        </ion-badge>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="products">\n  <div *ngIf="showFilters" class="filter">\n    <ion-list radio-group [(ngModel)]="sort" (ngModelChange)="chnageFilter(sort)">\n      <ion-list-header>\n        <b>\n          {{"Sort" | translate}}\n        </b>\n      </ion-list-header>\n      <ion-item>\n        <ion-label text-wrap>{{"Default" | translate}}\n        </ion-label>\n        <ion-radio value="0">\n        </ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>{{"Name" | translate}} (A - Z)\n        </ion-label>\n        <ion-radio value="1">\n        </ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>{{"Name" | translate}} (Z - A)\n        </ion-label>\n        <ion-radio value="2">\n        </ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>{{"Price" | translate}} (Low - High)\n        </ion-label>\n        <ion-radio value="3">\n        </ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>{{"Price" | translate}} (High - Low)\n        </ion-label>\n        <ion-radio value="4">\n        </ion-radio>\n      </ion-item>\n    </ion-list>\n    <button ion-button block color="button-color" (click)="cancel()">\n      {{"CANCEL" | translate}}\n    </button> \n  </div>\n\n\n  <div *ngIf="!showFilters">\n    <ion-searchbar\n                   [(ngModel)]="q"\n                   [showCancelButton]="shouldShowCancel"\n                   (ionInput)="onInput($event)"\n                   (ionCancel)="onCancel($event)">\n    </ion-searchbar>\n    <div *ngIf="!this.filter[\'filter[q]\'] || this.filter[\'filter[q]\'] == \'\'">\n    <div *ngIf="subCategories" class="category">\n      <ion-item *ngIf="subCategories.length" no-lines class="category-name"> \n        <ion-label text-uppercase>{{"Categories" | translate}}\n        </ion-label>\n      </ion-item>\n      <div class="sub-category">\n        <ion-item *ngFor="let item of subCategories">\n          <ion-thumbnail item-left>\n            <a (click)="getCategory(item.id, item.slug)">\n              <img *ngIf="item.image?.src" src="{{item.image.src}}"/>\n            </a>\n          </ion-thumbnail>\n          <a (click)="getCategory(item.id, item.slug)">\n            <h2>\n              <span [innerHTML]="item.name"></span>\n            </h2>\n          </a>\n          <ion-icon item-right ios="ios-arrow-forward" md="md-arrow-forward" (click)="getCategory(item.id, item.slug, item.name)">\n          </ion-icon>\n        </ion-item>\n      </div>\n    </div>\n    </div>\n    \n    <ion-spinner *ngIf="!products" name="crescent">\n    </ion-spinner>\n    <div *ngIf="products">\n      <h2 *ngIf="!products.length" style="font-size: 15px;text-align: center;margin-top: 30px">No products found!.</h2>\n    </div>\n    <div *ngIf="products" class="products-listing">\n      <div *ngIf="products.length">\n        <div *ngIf="values.listview">\n          <ion-item no-lines class="item-name">\n            <button ion-button icon-only clear color="icon-color" (click)="getFilter()">\n              <ion-icon name="ios-funnel"></ion-icon>\n            </button>\n            <button ion-button icon-only item-right clear color="icon-color" (click)="setGridView()">\n              <ion-icon ios="ios-grid" md="md-grid">\n              </ion-icon>\n            </button>\n          </ion-item>\n          <ion-list>\n            <div class="item-list" *ngFor="let item of products">\n              <ion-item (click)="getProduct(item);" class="left-padding" no-lines>\n                  <ion-thumbnail item-left class="stock-list">\n                    <img [style.height.rem]="values.dimensions.imageListViewHeight" tappable (click)="getProduct(item)" src="{{item.images[0]?.src}}">\n                    <button class="out-of-stock-button" ion-button color="danger" *ngIf="item.stock_status == \'outofstock\'">{{"OUTOFSTOCK" | translate}}\n                    </button>             \n                  </ion-thumbnail> \n\n                <!--div tappable (click)="getProduct(item.id)"-->\n                  <div class="product-name-top">                  \n                  <ion-row>                 \n                  <ion-col width-80 class="product-label">\n                   <div tappable (click)="getProduct(item)">\n                    <h2 *ngIf="item.name">{{item.name}}\n                    </h2>\n                    </div>\n                  </ion-col>\n                  <ion-col width-20 class="wishlist-label">\n                  <ion-icon name="md-heart" color="icon-color" class="wishlist-button" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n                  <ion-icon name="md-heart-outline" color="icon-color" class="wishlist-button" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>\n                  </ion-col>\n                  </ion-row>\n                    <p tappable (click)="getProduct(item)" class="max-lines" [innerHTML]="item.description">\n                    </p>\n                  </div>\n\n\n                  <div class="price-bottom-list">\n                    <h3 class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.settings.currency:true:\'1.2-2\'}}\n                    </h3>\n                    <h3 class="price-special" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.settings.currency:true:\'1.2-2\'}}\n                    </h3>\n                    <h3 class="price-del" *ngIf="item.sale_price">\n                      <del style="color: red;">{{1*item.regular_price | currency:values.settings.currency:true:\'1.2-2\'}}\n                      </del>\n                    </h3>\n                  </div>\n                <!--/div-->\n\n                <div class="bottom-right-button">\n                  <button ion-button [disabled]="item.stock_status == \'outofstock\'" text-uppercase color="button-color"  item-right outline *ngIf="values.cart[item.id] == undefined || values.cart[item.id] == 0" (click)="addToCart(item.id, item.type);$event.stopPropagation()">\n                    {{"Add"  | translate}}\n                  </button>\n                  <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="deleteFromCart(item.id)">\n                    <ion-icon ios="ios-remove-circle-outline" md="ios-remove-circle-outline">\n                    </ion-icon>\n                  </button>\n                  <button ion-button item-right color="button-color" clear *ngIf="values.cart[item.id] >= 1">{{values.cart[item.id]}}\n                  </button>\n                  <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="updateToCart(item.id)">\n                    <ion-icon ios="ios-add-circle-outline" md="ios-add-circle-outline">\n                    </ion-icon>\n                  </button>\n                </div>\n              </ion-item>\n            </div>\n          </ion-list>\n        </div>\n        <div *ngIf="!values.listview">\n          <ion-item no-lines class="item-name">\n            <button ion-button icon-only clear color="icon-color" (click)="getFilter()">\n              <ion-icon name="ios-funnel"></ion-icon>\n            </button>\n            <button ion-button icon-only item-right clear color="icon-color" (click)="setListView()">\n              <ion-icon ios="ios-list-box" md="ios-list-box">\n              </ion-icon>\n            </button>\n          </ion-item>\n          <div class="card-background-page grid">\n            <ion-row class="row unlimited-items">\n              <ion-col class="col" *ngFor="let item of products">\n                <ion-card>\n                  <ion-card-content class="stock">\n\n                      <img [style.height.px]="values.dimensions.productsGridViewHeight" tappable src="{{item.images[0]?.src}}" (click)="getProduct(item)">\n                      <button ion-button color="danger" *ngIf="item.stock_status == \'outofstock\'">{{"OUTOFSTOCK" | translate}}\n                      </button>\n                  <ion-icon name="md-heart" color="icon-color" class="wishlist-button-grid" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n                  <ion-icon name="md-heart-outline" color="icon-color" class="wishlist-button-grid" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>                  \n                  </ion-card-content>\n                  <div tappable (click)="getProduct(item)" class="card-name">\n                  <ion-label *ngIf="item.name">{{item.name}}\n                  </ion-label>\n                  </div>\n                  <ion-item no-padding class="price-list">\n                    <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.settings.currency:true:\'1.2-2\'}}\n                    </span>\n                    <span class="price-special" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.settings.currency:true:\'1.2-2\'}}\n                    </span>\n                    <span class="price-delete" primary *ngIf="item.sale_price">\n                      <del style="color: red;">{{1*item.regular_price | currency:values.settings.currency:true:\'1.2-2\'}}\n                      </del>\n                    </span>\n                  </ion-item>\n                  <div>  \n                    <button ion-button [disabled]="item.stock_status == \'outofstock\'" text-uppercase color="button-color" item-right clear *ngIf="values.cart[item.id] == undefined || values.cart[item.id] == 0" (click)="addToCart(item.id, item.type)">\n                      {{"Add"  | translate}}\n                    </button>\n                    <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="deleteFromCart(item.id)">\n                      <ion-icon ios="ios-remove-circle-outline" md="ios-remove-circle-outline">\n                      </ion-icon>\n                    </button>\n                    <button ion-button item-right class="item-count-button" color="button-color" clear *ngIf="values.cart[item.id]>= 1">{{values.cart[item.id]}}\n                    </button>\n                    <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="updateToCart(item.id)">\n                      <ion-icon ios="ios-add-circle-outline" md="ios-add-circle-outline">\n                      </ion-icon>\n                    </button>\n                  </div>\n                </ion-card>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </div>\n      <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items">\n        <ion-infinite-scroll-content\n         loadingSpinner="crescent"\n         loadingText="{{\'Loading more items..\' | translate}}">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </div>\n  </div>\n</ion-content>\n\n\n<ion-footer>\n  \n  <ion-grid no-padding>\n     <ion-row align-items-center>\n         <ion-col (click)="openpage(\'Home\')" col-3 text-center>\n           \n              <ion-icon class="icons"  ios="ios-home" md="md-home"></ion-icon>\n           \n          \n         </ion-col>\n         <ion-col (click)="openpage(\'CategoryPage\')" col-3  text-center>\n            \n                 <ion-icon class="iconsactive" name="md-apps"></ion-icon>\n               \n          \n            \n         </ion-col>\n       \n         <ion-col col-3  (click)="openpage(\'PagesUsersPage\')"  text-center>\n          \n          <ion-icon class="icons" ios="ios-people" md="md-people"></ion-icon>\n\n\n         \n      </ion-col>\n\n\n       <ion-col (click)="openpage(\'CartPage\')" col-3 text-center>\n    \n           <ion-icon class="icons" ios="ios-cart" md="md-cart"></ion-icon>\n         \n    \n       \n    </ion-col>\n\n\n\n     </ion-row>\n <ion-row align-items-center>\n         <ion-col col-3 text-center>\n         <label class="iconlabel">Home</label>\n          \n         </ion-col>\n         <ion-col col-3  text-center>\n           <label class="iconlabel">Categories</label>\n            \n         </ion-col>\n     <ion-col col-3  text-center>\n            <label class="iconlabel">Account</label>\n             \n          </ion-col>\n         <ion-col col-3  text-center>\n           <label class="iconlabel">Cart</label>\n            \n         </ion-col>\n\n\n     </ion-row>\n\n\n\n\n </ion-grid>\n</ion-footer>'/*ion-inline-end:"D:\ionic\deshimall\src\pages\products\products.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */]])
    ], ProductsPage);
    return ProductsPage;
    var ProductsPage_1;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesUsers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__category_category__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_login_login__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__account_register_register__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__account_address_address__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__checkout_order_summary_order_summary__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__account_wishlist_wishlist__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__wallet_wallet__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the PagesUsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PagesUsers = /** @class */ (function () {
    function PagesUsers(values, navCtrl, navParams) {
        this.values = values;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isLoggedIn = false;
        localStorage.setItem("pagename", "account");
    }
    PagesUsers.prototype.ionViewDidLoad = function () {
        if (this.values.isLoggedIn) {
            this.isLoggedIn = true;
        }
        else {
            this.isLoggedIn = false;
        }
    };
    PagesUsers.prototype.openpage = function (page) {
        if (page == "wallet") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__wallet_wallet__["a" /* Wallet */]);
        }
        if (page == "CategoryPage") {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__category_category__["a" /* Category */]);
        }
        if (page == "quick") {
            window.open("https://www.homedelivery4u.com/quick-order", '_system', 'location=yes');
        }
        if (page == "Home") {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* Home */]);
        }
        if (page == "CartPage") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */]);
        }
        if (page == "PagesUsersPage") {
            location.reload(true);
        }
        if (page == "login") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__account_login_login__["a" /* AccountLogin */]);
        }
        if (page == "register") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__account_register_register__["a" /* AccountRegister */]);
        }
        if (page == "address") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__account_address_address__["a" /* Address */]);
        }
        if (page == "orders") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__checkout_order_summary_order_summary__["a" /* OrderSummary */]);
        }
        if (page == "wishlist") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__account_wishlist_wishlist__["a" /* WishlistPage */]);
        }
        else {
            history.go(-1);
        }
    };
    PagesUsers = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\deshimall\src\pages\pages-users\pages-users.html"*/'<ion-header class="home-header">\n  <ion-navbar color="header">\n     <button ion-button menuToggle>\n        <ion-icon name="menu">\n        </ion-icon>\n     </button>\n     <ion-title>Account\n     </ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list *ngIf="!isLoggedIn">\n    <ion-item (click)="openpage(\'login\')"  >\n      <ion-icon slot="start" style="background-color: #f25362" name="log-in" item-left>\n      </ion-icon>Login\n    </ion-item>\n    <ion-item (click)="openpage(\'register\')"  >\n      <ion-icon slot="start" style="background-color: #3aa756" item-left ios="ios-create" md="md-create">\n      </ion-icon>Register\n    </ion-item>\n\n  \n  </ion-list>\n\n  <ion-list *ngIf="isLoggedIn">\n    <ion-item (click)="openpage(\'address\')"  >\n      <ion-icon slot="start" style="color: #3aa756" item-left name="locate">\n      </ion-icon>Address\n    </ion-item>\n\n    <ion-item (click)="openpage(\'wishlist\')"  >\n      <ion-icon slot="start" style="color: #e8453c" name="heart" item-left>\n      </ion-icon>Wishlist\n    </ion-item>\n\n\n    <ion-item (click)="openpage(\'wallet\')"  >\n      <ion-icon   style="color: rgb(134, 67, 160);" name="albums" item-left></ion-icon>\n      My Wallet\n    </ion-item>\n\n\n\n    <ion-item >\n      <a href="tel:+917408764666">\n      <ion-icon   style="color:darkred" name="call" item-left></ion-icon>\n      </a>\n    <a href="tel:+917408764666"> Helpline </a>\n    </ion-item>\n\n\n\n\n  \n  </ion-list>\n\n\n\n</ion-content>\n<ion-footer>\n  \n  <ion-grid no-padding>\n     <ion-row align-items-center>\n         <ion-col (click)="openpage(\'Home\')"  text-center>\n           \n              <ion-icon class="icons"  ios="ios-home" md="md-home"></ion-icon>\n           \n          \n         </ion-col>\n         <ion-col (click)="openpage(\'CategoryPage\')"   text-center>\n            \n                 <ion-icon class="icons" name="md-apps"></ion-icon>\n               \n          \n            \n         </ion-col>\n\n\n\n\n         <ion-col   (click)="openpage(\'PagesUsers\')"  text-center>\n         \n           <ion-icon class="iconsactive" ios="ios-people" md="md-people"></ion-icon>\n\n\n          \n       </ion-col>\n\n\n      \n       <ion-col (click)="openpage(\'CartPage\')"  text-center>\n    \n           <ion-icon class="icons" ios="ios-cart" md="md-cart"></ion-icon>\n         \n    \n       \n    </ion-col>\n\n    \n\n\n\n     </ion-row>\n <ion-row align-items-center>\n         <ion-col text-center>\n         <label class="iconlabel">Home</label>\n          \n         </ion-col>\n         <ion-col text-center>\n           <label class="iconlabel">Categories</label>\n            \n         </ion-col>\n\n\n\n         <ion-col text-center>\n           <label class="iconlabel">Account</label>\n            \n         </ion-col>\n        \n\n         <ion-col    text-center>\n           <label class="iconlabel">Cart</label>\n            \n         </ion-col> \n         \n        \n\n\n\n\n\n     </ion-row>\n\n\n\n\n </ion-grid>\n</ion-footer>'/*ion-inline-end:"D:\ionic\deshimall\src\pages\pages-users\pages-users.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], PagesUsers);
    return PagesUsers;
}());

//# sourceMappingURL=pages-users.js.map

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Values; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Values = /** @class */ (function () {
    function Values() {
        this.count = 0;
        this.filter = {};
        this.attributes = [];
        this.isLoggedIn = false;
        this.applyFilter = false;
        this.customerName = "";
        this.customerId = null;
        this.listview = false;
        this.cart = [];
        this.filterUpdate = false;
        this.avatar = "assets/image/logo.png";
        this.currency = "USD";
        this.dir = 'left';
        this.wishlistId = [];
        this.colWidthLatest = 6;
        this.colWidthProducts = 6;
        this.colWidthSearch = 6;
        this.widthMultipy = 1;
        this.dimensions = {
            imageHeight: 100,
            productSliderWidth: 42,
            latestPerRow: 2,
            productsPerRow: 2,
            searchPerRow: 2,
            productBorderRadius: 0,
            productPadding: 0,
            suCatBorderRadius: 0
        };
        this.settings = { "max_price": 10000, "currency": "INR", "show_featured": 1, "show_onsale": 1, "show_latest": 1, "pull_to_refresh": 0, "onesignal_app_id": "", "google_project_id": "", "google_web_client_id": "", "rate_app_ios_id": "", "rate_app_android_id": "", "rate_app_windows_id": "", "share_app_android_link": "", "share_app_ios_link": "", "support_email": "", "enable_product_chat": 0, "enable_home_chat": 0, "whatsapp_number": "+917408764666", "app_dir": "left", "switchLocations": 0, "language": "english", "product_shadow": "shadow", "enable_sold_by": 0, "enable_sold_by_product": 0, "enable_vendor_chat": 0, "enable_vendor_map": 0, "enable_wallet": 1, "enable_refund": 0, "switchWpml": 0, "switchAddons": 0, "switchRewardPoints": 0 };
        this.logoutUrl = "";
    }
    Values.prototype.updateCart = function (crt) {
        this.cartItem = crt.cart_contents;
        this.cart = [];
        this.count = 0;
        for (var item in crt.cart_contents) {
            this.cart[crt.cart_contents[item].product_id] = parseInt(crt.cart_contents[item].quantity);
            this.count += parseInt(crt.cart_contents[item].quantity);
        }
        //alert(this.count);
    };
    Values.prototype.updateCartTwo = function (crt) {
        this.cart = [];
        this.count = 0;
        this.cartItem = crt;
        for (var item in crt) {
            this.cart[crt[item].product_id] = parseInt(crt[item].quantity);
            this.count += parseInt(crt[item].quantity);
        }
    };
    Values.prototype.calc = function (width) {
        this.width = width;
        if (width >= 1025) {
            this.colWidthLatest = 12 / 5;
            this.colWidthProducts = 12 / 5;
            this.colWidthSearch = 12 / 5;
            this.dimensions.homeGridViewHeight = this.dimensions.imageHeight / 100 * ((width - (this.dimensions.productPadding * 10)) / 5);
            this.dimensions.productsGridViewHeight = this.dimensions.imageHeight / 100 * ((width - (this.dimensions.productPadding * 10)) / 5);
            this.dimensions.searchGridViewHeight = this.dimensions.imageHeight / 100 * ((width - (this.dimensions.productPadding * 10)) / 5);
            this.dimensions.productSliderWidth = width * 0.20;
            this.dimensions.homeSliderWidth = width * 0.20;
            this.dimensions.homeSliderHeight = this.dimensions.homeSliderWidth * this.dimensions.imageHeight / 100;
            this.widthMultipy = 0.4;
        }
        else if (width >= 769) {
            this.colWidthLatest = 12 / 4;
            this.colWidthProducts = 12 / 4;
            this.colWidthSearch = 12 / 4;
            this.dimensions.homeGridViewHeight = this.dimensions.imageHeight / 100 * ((width - (this.dimensions.productPadding * 8)) / 4);
            this.dimensions.productsGridViewHeight = this.dimensions.imageHeight / 100 * ((width - (this.dimensions.productPadding * 8)) / 4);
            this.dimensions.searchGridViewHeight = this.dimensions.imageHeight / 100 * ((width - (this.dimensions.productPadding * 8)) / 4);
            this.dimensions.productSliderWidth = width * 0.25;
            this.dimensions.homeSliderWidth = width * 0.25;
            this.dimensions.homeSliderHeight = this.dimensions.homeSliderWidth * this.dimensions.imageHeight / 100;
            this.widthMultipy = 0.5;
        }
        else if (width >= 481) {
            this.colWidthLatest = 12 / 3;
            this.colWidthProducts = 12 / 3;
            this.colWidthSearch = 12 / 3;
            this.dimensions.homeGridViewHeight = this.dimensions.imageHeight / 100 * ((width - (this.dimensions.productPadding * 6)) / 3);
            this.dimensions.productsGridViewHeight = this.dimensions.imageHeight / 100 * ((width - (this.dimensions.productPadding * 6)) / 3);
            this.dimensions.searchGridViewHeight = this.dimensions.imageHeight / 100 * ((width - (this.dimensions.productPadding * 6)) / 3);
            this.dimensions.productSliderWidth = width * 0.35;
            this.dimensions.homeSliderWidth = width * 0.35;
            this.dimensions.homeSliderHeight = this.dimensions.homeSliderWidth * this.dimensions.imageHeight / 100;
            this.widthMultipy = 0.7;
        }
        else {
            this.colWidthLatest = 12 / this.dimensions.latestPerRow;
            this.colWidthProducts = 12 / this.dimensions.productsPerRow;
            this.colWidthSearch = 12 / this.dimensions.searchPerRow;
            this.dimensions.homeGridViewHeight = (this.dimensions.imageHeight / 100) * (width - (this.dimensions.latestPerRow * this.dimensions.productPadding * 2)) / this.dimensions.latestPerRow;
            this.dimensions.productsGridViewHeight = (this.dimensions.imageHeight / 100) * (width - (this.dimensions.productPadding * this.dimensions.latestPerRow * 2)) / this.dimensions.productsPerRow;
            this.dimensions.searchGridViewHeight = (this.dimensions.imageHeight / 100) * (width - (this.dimensions.productPadding * this.dimensions.latestPerRow * 2)) / this.dimensions.searchPerRow;
            this.dimensions.productSliderWidth = width * 0.40;
            this.dimensions.homeSliderWidth = width * 0.40;
            this.dimensions.homeSliderHeight = this.dimensions.homeSliderWidth * this.dimensions.imageHeight / 100;
            this.dimensions.homeGridViewWidth = width - (this.dimensions.latestPerRow * this.dimensions.productPadding * 2) / this.dimensions.latestPerRow;
        }
    };
    Values = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Values);
    return Values;
}());

//# sourceMappingURL=values.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CheckoutService = /** @class */ (function () {
    function CheckoutService(http, config) {
        this.http = http;
        this.config = config;
    }
    CheckoutService.prototype.updateOrderReview = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("security", form.nonce.update_order_review_nonce);
        params.append("payment_method", form.payment_method);
        params.append("address", form.billing_address_1);
        params.append("address_2", form.billing_address_2);
        params.append("city", form.billing_city);
        params.append("postcode", form.billing_postcode);
        params.append("country", form.billing_country);
        params.append("state", form.billing_state);
        params.append("s_address", form.billing_address_1);
        params.append("s_address_2", form.billing_address_2);
        params.append("s_city", form.billing_city);
        params.append("s_postcode", form.billing_postcode);
        params.append("s_country", form.billing_country);
        params.append("s_state", form.billing_state);
        form.shipping_method.forEach(function (method, index) {
            params.append("shipping_method[" + index + "]", method);
        });
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-update_order_review', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.checkout = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        alert(form.shipping_address_1);
        params.append("billing_first_name", form.billing_first_name);
        params.append("billing_last_name", form.billing_last_name);
        params.append("billing_company", form.billing_company);
        params.append("billing_email", form.billing_email);
        params.append("billing_phone", form.billing_phone);
        params.append("billing_address_1", form.billing_address_1);
        params.append("billing_address_2", form.billing_address_2);
        params.append("billing_city", form.billing_city);
        params.append("billing_postcode", form.billing_postcode);
        params.append("shipping_first_name", form.shipping_first_name);
        params.append("shipping_last_name", form.shipping_last_name);
        params.append("shipping_company", form.shipping_company);
        params.append("shipping_email", form.shipping_email);
        params.append("shipping_phone", form.shipping_phone);
        params.append("shipping_address_1", form.shipping_address_1);
        params.append("shipping_address_2", form.shipping_address_2);
        params.append("shipping_city", form.shipping_city);
        params.append("shipping_postcode", form.shipping_postcode);
        params.append("billing_country", form.billing_country);
        params.append("billing_state", form.billing_state);
        params.append("shipping_country", form.shipping_country);
        params.append("shipping_state", form.shipping_state);
        if (form.terms) {
            params.append("terms", 'on');
            params.append("terms-field", '1');
        }
        params.append("payment_method", form.payment_method);
        params.append("_wpnonce", form.checkout_nonce);
        params.append("_wp_http_referer", this.config.url + '/checkout?wc-ajax=update_order_review');
        if (form.password) {
            params.append("createaccount", form.register);
            params.append("account_password", form.password);
        }
        if (form.onesignal_user_id)
            params.append("onesignal_user_id", form.onesignal_user_id);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout?wc-ajax=checkout', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.checkouttest = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("billing_first_name", "Name hajsk");
        params.append("billing_last_name", "Name hajsk");
        params.append("billing_company", "Name hajsk");
        params.append("billing_email", "test@gmail.com");
        params.append("billing_phone", "237648372");
        params.append("billing_address_1", "form billing_address_1");
        params.append("billing_address_2", "dsjfh sdjfhsdkj");
        params.append("billing_city", "fsdfdjgif");
        params.append("billing_postcode", "560048");
        params.append("billing_country", "IN");
        params.append("billing_state", "KA");
        params.append("payment_method", form.payment_method);
        params.append("_wpnonce", form.checkout_nonce);
        params.append("_wp_http_referer", this.config.url + '/checkout?wc-ajax=update_order_review');
        if (form.password) {
            params.append("createaccount", form.register);
            params.append("account_password", form.password);
        }
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout?wc-ajax=checkout', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.saveBillingAddress = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("billing_first_name", form.billing_first_name);
        params.append("billing_last_name", form.billing_last_name);
        params.append("billing_company", form.billing_company);
        params.append("billing_email", form.billing_email);
        params.append("billing_phone", form.nonce.billing_phone);
        params.append("billing_address_1", form.billing_address_1);
        params.append("billing_address_2", form.billing_address_2);
        params.append("billing_city", form.billing_city);
        params.append("billing_postcode", form.billing_postcode);
        params.append("billing_country", form.billing_country);
        params.append("billing_state", form.billing_state);
        params.append("createaccount", form.billing_address_1);
        params.append("account_password", form.billing_address_2);
        params.append("payment_method", form.payment_method);
        params.append("_wpnonce", "544bcd0d1d");
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout?wc-ajax=checkout', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.saveShippingAddress = function (shipping) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("shipping[firstname]", shipping.firstname);
        params.append("shipping[lastname]", shipping.lastname);
        params.append("shipping[company]", shipping.company);
        params.append("shipping[street][0]", shipping.street1);
        params.append("shipping[street][1]", shipping.street2);
        params.append("shipping[city]", shipping.city);
        params.append("shipping[postcode]", shipping.postcode);
        params.append("shipping[country_id]", shipping.country_id);
        params.append("shipping[state_id]", shipping.state_id);
        if (shipping.entity_id) {
            params.append("shipping_address_id", shipping.entity_id);
        }
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_checkout_form', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getShippingPayment = function () {
        var _this = this;
        if (this.shippingMethods && this.paymentMethods) {
            return Promise.resolve(this.shippingMethods);
        }
        return new Promise(function (resolve) {
            __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].forkJoin(_this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-payment', _this.config.options).map(function (res) { return res.json(); })).subscribe(function (data) {
                _this.shippingMethods = data[0];
                _this.paymentMethods = data[1];
                resolve(_this.shippingMethods);
            });
        });
    };
    CheckoutService.prototype.saveMethods = function (shippingMethod, payment) {
        var _this = this;
        var shipping = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        shipping.append("shipping_method", shippingMethod);
        for (var param in payment) {
            params.set("payment[" + param + "]", payment[param]);
        }
        return new Promise(function (resolve) {
            __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].forkJoin(_this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-payment', params, _this.config.options).map(function (res) { return res.json(); })).subscribe(function (data) {
                _this.shippingStatus = data[0];
                _this.paymentStatus = data[1];
                resolve(_this.shippingStatus);
            });
        });
    };
    CheckoutService.prototype.getTime = function (date) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("action", "iconic_wds_get_slots_on_date");
        params.append("date", date);
        console.log(params);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                console.log(data);
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getDate = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("action", "iconic_wds_get_upcoming_bookable_dates");
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                console.log(data);
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.login = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("username", form.username);
        params.append("password", form.password);
        params.append("_wpnonce", form.checkout_login);
        params.append("login", "Login");
        params.append("_wp_http_referer", "/checkout/");
        params.append("redirect", this.config.url + "/wp-admin/admin-ajax.php?action=mstoreapp-userdata");
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout/', params, _this.config.options)
                .subscribe(function (data) {
                _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_checkout_form', _this.config.options).map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    _this.status = data;
                    resolve(_this.status);
                });
            });
        });
    };
    CheckoutService.prototype.submitCoupon = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("coupon_code", form.coupon_code);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-apply_coupon', params, _this.config.options)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getStripeToken = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("key", form.payment.stripe.publishable_key);
        params.append("payment_user_agent", 'stripe.js/6ea8d55');
        params.append("card[number]", form.stripe_number);
        params.append("card[cvc]", form.stripe_code);
        params.append("card[exp_month]", form.stripe_exp_month);
        params.append("card[exp_year]", form.stripe_exp_year);
        params.append("card[name]", form.billing_first_name + form.billing_last_name);
        params.append("card[address_line1]", form.billing_address_1);
        params.append("card[address_line2]", form.billing_address_2);
        params.append("card[address_state]", form.billing_state);
        params.append("card[address_city]", form.billing_city);
        params.append("card[address_zip]", form.billing_postcode);
        params.append("card[address_country]", form.billing_country);
        return new Promise(function (resolve) {
            _this.http.post('https://api.stripe.com/v1/tokens', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            }, function (err) { return resolve(err.json()); });
        });
    };
    CheckoutService.prototype.stripePlaceOrder = function (form, token) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("billing_first_name", form.billing_first_name);
        params.append("billing_last_name", form.billing_last_name);
        params.append("billing_company", form.billing_company);
        params.append("billing_email", form.billing_email);
        params.append("billing_phone", form.billing_phone);
        params.append("billing_address_1", form.billing_address_1);
        params.append("billing_address_2", form.billing_address_2);
        params.append("billing_city", form.billing_city);
        params.append("billing_postcode", form.billing_postcode);
        params.append("billing_country", form.billing_country);
        params.append("billing_state", form.billing_state);
        params.append("shipping_first_name", form.shipping_first_name);
        params.append("shipping_last_name", form.shipping_last_name);
        params.append("shipping_company", form.shipping_company);
        params.append("shipping_email", form.shipping_email);
        params.append("shipping_phone", form.shipping_phone);
        params.append("shipping_address_1", form.shipping_address_1);
        params.append("shipping_address_2", form.shipping_address_2);
        params.append("shipping_city", form.shipping_city);
        params.append("shipping_postcode", form.shipping_postcode);
        params.append("shipping_country", form.shipping_country);
        params.append("shipping_state", form.shipping_state);
        params.append("payment_method", form.payment_method);
        params.append("_wpnonce", form.checkout_nonce);
        if (form.terms) {
            params.append("terms", 'on');
            params.append("terms-field", '1');
        }
        if (form.onesignal_user_id)
            params.append("onesignal_user_id", form.onesignal_user_id);
        params.append("wc-stripe-payment-token", 'new');
        params.append("stripe_token", token.id);
        params.append("_wp_http_referer", this.config.url + '/checkout?wc-ajax=update_order_review');
        if (form.password) {
            params.append("createaccount", form.register);
            params.append("account_password", form.password);
        }
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/checkout?wc-ajax=checkout', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getOrderSummary = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/orders/' + id + '?', false), _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.orderSummary = data;
                resolve(_this.orderSummary);
            });
        });
    };
    CheckoutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */]])
    ], CheckoutService);
    return CheckoutService;
}());

//# sourceMappingURL=checkout-service.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductService = /** @class */ (function () {
    function ProductService(http, config, values, loadingController) {
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingController = loadingController;
    }
    ProductService.prototype.getProduct = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products/' + id + '?', false), _this.config.optionstwo).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.product = data;
                resolve(_this.product);
            });
        });
    };
    ProductService.prototype.getReviews = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/products/' + id + '/reviews/' + '?', false), _this.config.optionstwo).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.reviews = data;
                resolve(_this.reviews);
            });
        });
    };
    ProductService.prototype.getRelatedProducts = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products?', params), _this.config.optionstwo).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.related = data;
                resolve(_this.related);
            });
        });
    };
    ProductService.prototype.getUpsellProducts = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products?', params), _this.config.optionstwo).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.upsell = data;
                resolve(_this.upsell);
            });
        });
    };
    ProductService.prototype.getCrossSellProducts = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products?', params), _this.config.optionstwo).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.crossSell = data;
                resolve(_this.crossSell);
            });
        });
    };
    ProductService.prototype.addToCart = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (var param in params) {
                searchParams.set(param, params[param]);
            }
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', searchParams, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    ProductService.prototype.presentLoading = function (text) {
        this.loader = this.loadingController.create({
            content: text,
        });
        this.loader.present();
    };
    ProductService.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    ProductService.prototype.addToWishlist = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            params.append("product_id", id);
            params.append("customer_id", _this.values.customerId.toString());
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    ProductService.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("product_id", id);
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    ProductService.prototype.submitComment = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("rating", form.rating);
        params.append("comment", form.comment);
        if (!this.values.isLoggedIn) {
            params.append("author", form.author);
            params.append("email", form.email);
        }
        params.append("comment_post_ID", form.id);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-comments-post.php', params).subscribe(function (data) {
                resolve(true);
            });
        });
    };
    ProductService.prototype.getVariationProducts = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products/' + id + '/variations' + '?', false), _this.config.optionstwo).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_3__values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* LoadingController */]])
    ], ProductService);
    return ProductService;
}());

//# sourceMappingURL=product-service.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_users_pages_users__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Category = /** @class */ (function () {
    function Category(loadingController, nav, nativeStorage, navCtrl, navParams, service) {
        this.loadingController = loadingController;
        this.nav = nav;
        this.nativeStorage = nativeStorage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        localStorage.setItem("pagename", "category");
    }
    Category.prototype.bindcategories = function () {
        var _this = this;
        localStorage.setItem("pagename", "category");
        this.presentLoading("Please Wait");
        this.nativeStorage.getItem('blocks').then(function (data) {
            if (data) {
                _this.service.blocks = data.blocks;
                _this.service.categories = data.categories.filter(function (item) { return item.name !== 'Uncategorized'; });
                _this.service.mainCategories = _this.service.categories.filter(function (item) { return item.parent === 0; });
            }
        }, function (error) { return console.error(error); });
        this.dismissLoading();
    };
    Category.prototype.getCategory = function (id, slug, name) {
        this.items = [];
        this.items.id = id;
        this.items.slug = slug;
        this.items.name = name;
        this.items.categories = this.service.categories.filter(function (item) { return item.parent === parseInt(id); });
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], this.items);
    };
    Category.prototype.presentLoading = function (text) {
        this.loader = this.loadingController.create({
            content: text,
        });
        this.loader.present();
    };
    Category.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    Category.prototype.openpage = function (page) {
        if (page == "quick") {
            window.open("https://www.homedelivery4u.com/quick-order", '_system', 'location=yes');
        }
        if (page == "CategoryPage") {
            location.reload(true);
        }
        if (page == "Home") {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* Home */]);
        }
        if (page == "CartPage") {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */]);
        }
        if (page == "PagesUsers") {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_users_pages_users__["a" /* PagesUsers */]);
        }
        else {
            history.go(-1);
        }
    };
    Category = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\deshimall\src\pages\category\category.html"*/'<ion-header class="home-header">\n  <ion-navbar color="header">\n     <button ion-button menuToggle>\n        <ion-icon name="menu">\n        </ion-icon>\n     </button>\n     <ion-title>Categories\n     </ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div *ngIf="service.categories" class="category-name">\n    <ion-item tappable full menuClose *ngFor="let item of service.mainCategories" (click)="getCategory(item.id, item.slug, item.name)">\n     \n      <!-- <ion-icon slot="start" item-left >\n        <ion-avatar>\n      <img *ngIf="item.image?.src" src="{{item.image.src}}"/>\n      <img *ngIf="!item.image?.src" src="assets/image/logo.png"/>\n      </ion-avatar>\n    </ion-icon> -->\n      <ion-icon item-right class="ion-ios-arrow-forward item-icon">\n      </ion-icon>\n      <span [innerHTML]="item.name"></span>     \n    </ion-item>\n  </div>\n\n</ion-content>\n<ion-footer>\n  \n  <ion-grid no-padding>\n     <ion-row align-items-center>\n         <ion-col (click)="openpage(\'Home\')"  text-center>\n           \n              <ion-icon   class="icons"  ios="ios-home" md="md-home"></ion-icon>\n           \n          \n         </ion-col>\n         <ion-col (click)="openpage(\'CategoryPage\')"   text-center>\n            \n                 <ion-icon class="iconsactive" name="md-apps"></ion-icon>\n               \n          \n            \n         </ion-col>\n\n\n\n\n         <ion-col   (click)="openpage(\'PagesUsers\')"  text-center>\n         \n           <ion-icon class="icons" ios="ios-people" md="md-people"></ion-icon>\n\n\n          \n       </ion-col>\n\n\n      \n       <ion-col (click)="openpage(\'CartPage\')"  text-center>\n    \n           <ion-icon class="icons" ios="ios-cart" md="md-cart"></ion-icon>\n         \n    \n       \n    </ion-col>\n\n    \n\n\n\n     </ion-row>\n <ion-row align-items-center>\n         <ion-col text-center>\n         <label class="iconlabel">Home</label>\n          \n         </ion-col>\n         <ion-col text-center>\n           <label class="iconlabel">Categories</label>\n            \n         </ion-col>\n\n\n        \n\n         <ion-col text-center>\n           <label class="iconlabel">Account</label>\n            \n         </ion-col>\n        \n\n         <ion-col    text-center>\n           <label class="iconlabel">Cart</label>\n            \n         </ion-col> \n         \n        \n\n\n\n\n\n     </ion-row>\n\n\n\n\n </ion-grid>\n</ion-footer>'/*ion-inline-end:"D:\ionic\deshimall\src\pages\category\category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */]])
    ], Category);
    return Category;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountLogin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgotten_forgotten__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__ = __webpack_require__(376);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AccountLogin = /** @class */ (function () {
    function AccountLogin(events, nav, service, functions, values, platform, oneSignal, fb) {
        var _this = this;
        this.events = events;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.platform = platform;
        this.oneSignal = oneSignal;
        this.fb = fb;
        this.disableSubmit = false;
        localStorage.setItem("pagename", "login");
        this.loginData = {};
        this.registerData = {};
        this.buttonText = "Login";
        this.service.getNonce()
            .then(function (results) { return _this.nonce = results; });
    }
    AccountLogin.prototype.ionViewWillEnter = function () {
        localStorage.setItem("pagename", "login");
        //alert(localStorage.getItem("usermobile"));
    };
    AccountLogin.prototype.login = function () {
        var _this = this;
        if (this.validateForm()) {
            this.disableSubmit = true;
            this.buttonText = "Logging In...";
            this.service.login(this.loginData)
                .then(function (results) { return _this.handleResults(results); });
        }
    };
    AccountLogin.prototype.validateForm = function () {
        if (this.loginData.username == undefined || this.loginData.username == "") {
            return false;
        }
        if (this.loginData.password == undefined || this.loginData.password == "") {
            return false;
        }
        else {
            return true;
        }
    };
    AccountLogin.prototype.handleResults = function (results) {
        var _this = this;
        this.disableSubmit = false;
        this.buttonText = "Login";
        if (!results.errors) {
            if (this.platform.is('cordova'))
                this.oneSignal.getIds().then(function (data) {
                    _this.service.subscribeNotification(data);
                });
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* Home */]);
        }
        else if (results.errors) {
            this.errors = results.errors;
        }
    };
    AccountLogin.prototype.forgotten = function (loginData) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__forgotten_forgotten__["a" /* AccountForgotten */]);
    };
    AccountLogin.prototype.getUserDetail = function (userid) {
        var _this = this;
        this.fb.api("/" + userid + "/?fields=id,email,name,picture,gender", ["public_profile"])
            .then(function (res) {
            //console.log(res);
            _this.fbusers = res;
            _this.events.publish('user:created', _this.fbusers.email, Date.now());
            //localStorage.setItem("fbname",this.fbusers.name);
            //localStorage.setItem("fbemail",this.fbusers.email);
            //localStorage.setItem("fblogin","Y");
            var name = _this.fbusers.name.split(" ");
            _this.registerData.username = _this.fbusers.email;
            _this.registerData.email = _this.fbusers.email;
            _this.registerData.first_name = name[0];
            _this.registerData.last_name = name[1];
            _this.service.registerCustomer(_this.registerData)
                .then(function (results) { return _this.handleRegister(results); });
            window.localStorage.setItem('username', _this.fbusers.email);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* Home */]);
            //  this.checkexist(this.fbusers.email);
        })
            .catch(function (e) {
            // console.log(e);
        });
    };
    AccountLogin.prototype.fbloginfakelogin = function () {
        var _this = this;
        this.registerData.username = "ankitmishra333";
        this.registerData.email = "ankitmishra333@gmail.com";
        this.registerData.first_name = "Ankit";
        this.registerData.last_name = "Mishra";
        this.service.registerCustomer(this.registerData)
            .then(function (results) { return _this.handleRegister(results); });
    };
    AccountLogin.prototype.handleRegister = function (results) {
        var _this = this;
        //    console.log(JSON.stringify(results));
        this.disableSubmit = false;
        if (!results.errors) {
            this.service.login(this.registerData)
                .then(function (results) { return _this.loginStatus = results; });
            if (this.platform.is('cordova')) {
                this.oneSignal.getIds().then(function (data) {
                    _this.service.subscribeNotification(data);
                });
                this.oneSignal.sendTags({ email: this.registerData.email });
            }
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* Home */]);
        }
        else if (results.errors) {
            this.errors = results.errors;
        }
    };
    /*this.registerData.billing.email = this.registerData.email;
    this.registerData.billing.first_name = this.registerData.first_name;
    this.registerData.billing.last_name = this.registerData.last_name;*/
    AccountLogin.prototype.fblogin = function () {
        var _this = this;
        this.fb.login(['public_profile', 'email'])
            .then(function (res) {
            if (res.status === "connected") {
                // this.isfbLoggedIn = true;
                //  alert(JSON.stringify(res.authResponse));
                _this.getUserDetail(res.authResponse.userID);
                // this.spinnerDialog.hide();
            }
            else {
                // this.isfbLoggedIn = false;
                // this.spinnerDialog.hide();
            }
        })
            .catch(function (e) { return alert(JSON.stringify(e)); });
    };
    AccountLogin.prototype.loginphone = function () {
        var _this = this;
        window.AccountKitPlugin.loginWithPhoneNumber({
            useAccessToken: true,
            defaultCountryCode: "IN",
            facebookNotificationsEnabled: true,
        }, function (data) {
            window.AccountKitPlugin.getAccount(function (info) { return _this.userInfo = info; }, function (err) { return alert(JSON.stringify(err)); });
        });
    };
    AccountLogin = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\deshimall\src\pages\account\login\login.html"*/'<ion-header>\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title>{{"LogIn"| translate}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="account-login">\n  <div class="margin">\n    <div>\n      <img src="{{values.avatar}}">\n    </div>\n    <form #f="ngForm" class="login">\n      <ion-list>\n        <ion-item>\n          <!--ion-label floating>{{"username" | translate}}</ion-label-->\n          <ion-input required type="email" [(ngModel)]="loginData.username" name="firstname" placeholder="Email">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <!--ion-label floating>{{"password" | translate}}</ion-label-->\n          <ion-input required type="password" [(ngModel)]="loginData.password" name="password" placeholder="Password">\n          </ion-input>\n        </ion-item>\n      </ion-list>\n      <div class="error-message" *ngIf="errors">\n        <div *ngFor="let error of errors | keys">\n          <h2 [innerHTML]="error.value"></h2>\n        </div>\n      </div>\n      <div class="margin"> \n        <button ion-button block color="button-color" type="submit" class="button button-block button-default" text-uppercase [disabled]="disableSubmit" (click)="login(loginData)">{{"LogIn" | translate}}\n        </button>\n<div style="padding-top: 20px;" class="btn_container">\n\n  \n        <button style="display: none;" ion-button full (click)="fblogin()">\n          <!-- <ion-icon style="font-size: 34px;"  slot="start" ios="logo-facebook" md="logo-facebook"></ion-icon> -->\n     &nbsp;     Login with Facebook</button>\n\n\n    </div>\n\n        <br>\n        <button ion-button clear color="button-color" type="submit" class="button button-block button-clear" text-uppercase (click)="forgotten()">{{"Forgot Password" | translate}} ?\n        </button>\n      </div>\n    </form>\n    <br/>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\deshimall\src\pages\account\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__["a" /* Facebook */]])
    ], AccountLogin);
    return AccountLogin;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountRegister; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AccountRegister = /** @class */ (function () {
    function AccountRegister(nav, service, functions, oneSignal, values, platform) {
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.oneSignal = oneSignal;
        this.values = values;
        this.platform = platform;
        this.disableSubmit = false;
        localStorage.setItem("pagename", "register");
        this.Register = "Register";
        this.registerData = {};
        //this.countries = {};
        //this.registerData.billing = {};
        //this.registerData.shipping = {};
        //this.service.getNonce()
        //.then((results) => this.handleResults(results));
    }
    AccountRegister.prototype.ionViewWillEnter = function () {
        if (localStorage.getItem("fblogin") === "Y") {
            alert("FBLOGIN");
            this.registerData.first_name = localStorage.getItem("firstname");
            this.registerData.last_name = localStorage.getItem("lastname");
            this.registerData.email = localStorage.getItem("fbemail");
        }
    };
    /*handleResults(results) {
        this.countries = results;
    }
    getBillingRegion(countryId) {
        this.billing_states = this.countries.state[countryId];
    }
    getShippingRegion(countryId) {
        this.shipping_states = this.countries.state[countryId];
    }*/
    AccountRegister.prototype.validateForm = function () {
        if (this.registerData.first_name == undefined || this.registerData.firstname == "") {
            this.functions.showAlert("ERROR", "Please Enter First Name");
            return false;
        }
        if (this.registerData.last_name == undefined || this.registerData.lastname == "") {
            this.functions.showAlert("ERROR", "Please Enter Last Name ");
            return false;
        }
        if (this.registerData.email == undefined || this.registerData.email == "") {
            this.functions.showAlert("ERROR", "Please Enter Email ID");
            return false;
        }
        if (this.registerData.password == undefined || this.registerData.password == "") {
            this.functions.showAlert("ERROR", "Please Enter Password");
            return false;
        }
        this.registerData.username = this.registerData.email;
        /*this.registerData.billing.email = this.registerData.email;
        this.registerData.billing.first_name = this.registerData.first_name;
        this.registerData.billing.last_name = this.registerData.last_name;
        this.registerData.shipping.first_name = this.registerData.first_name;
        this.registerData.shipping.last_name = this.registerData.last_name;
        this.registerData.shipping.company = this.registerData.billing.company;
        this.registerData.shipping.address_1 = this.registerData.billing.address_1;
        this.registerData.shipping.address_2 = this.registerData.billing.address_2;
        this.registerData.shipping.city = this.registerData.billing.city;
        this.registerData.shipping.state = this.registerData.billing.state;
        this.registerData.shipping.postcode = this.registerData.billing.postcode;
        this.registerData.shipping.country = this.registerData.billing.country;*/
        return true;
    };
    AccountRegister.prototype.registerCustomer = function () {
        var _this = this;
        this.errors = "";
        if (this.validateForm()) {
            this.disableSubmit = true;
            this.service.registerCustomer(this.registerData)
                .then(function (results) { return _this.handleRegister(results); });
        }
    };
    AccountRegister.prototype.handleRegister = function (results) {
        var _this = this;
        this.disableSubmit = false;
        if (!results.errors) {
            this.service.login(this.registerData)
                .then(function (results) { return _this.loginStatus = results; });
            if (this.platform.is('cordova')) {
                this.oneSignal.getIds().then(function (data) {
                    _this.service.subscribeNotification(data);
                });
                this.oneSignal.sendTags({ email: this.registerData.email });
            }
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* Home */]);
        }
        else if (results.errors) {
            this.errors = results.errors;
        }
    };
    AccountRegister = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\deshimall\src\pages\account\register\register.html"*/'<ion-header>\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title>{{"Register" | translate}}\n    </ion-title> \n  </ion-navbar>\n</ion-header>\n<ion-content class="account-register">\n  <div>\n    <form #f="ngForm">\n      <ion-list>\n        <ion-list-header>\n          <b primary>{{"AccountInfo" | translate}}\n          </b>\n        </ion-list-header>\n        <ion-item>\n          <ion-label floating>{{"FirstName" | translate}}\n          </ion-label>\n          <ion-input type="text" [(ngModel)]="registerData.first_name" name="firstname">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{"LastName" | translate}}\n          </ion-label>\n          <ion-input type="text" [(ngModel)]="registerData.last_name" name="lastname">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{"Email" | translate}}\n          </ion-label>\n          <ion-input type="email" [(ngModel)]="registerData.email" name="Email">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{"Phone" | translate}}\n          </ion-label>\n          <ion-input required type="number" [(ngModel)]="registerData.phone" name="phone">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{"Password" | translate}}\n          </ion-label>\n          <ion-input type="password" [(ngModel)]="registerData.password" name="password">\n          </ion-input>\n        </ion-item>\n        <!--ion-item>\n          <ion-label floating>{{"Company" | translate}}\n          </ion-label>\n          <ion-input required type="text" [(ngModel)]="registerData.billing.company" name="billing_company">\n          </ion-input>\n        </ion-item-->\n        <!--ion-item>\n          <ion-label floating>{{"StreetAddress" | translate}} 1\n          </ion-label>\n          <ion-input required type="text" [(ngModel)]="registerData.billing.address_1" name="billing_1">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{"StreetAddress" | translate}} 2\n          </ion-label>\n          <ion-input required type="text" [(ngModel)]="registerData.billing.address_2" name="billing_2">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{"City" | translate}}\n          </ion-label>\n          <ion-input required type="text" [(ngModel)]="registerData.billing.city" name="billing_city">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{"Postcode" | translate}}\n          </ion-label>\n          <ion-input required type="text" [(ngModel)]="registerData.billing.postcode" name="postcode">\n          </ion-input>\n        </ion-item>\n        <ion-item *ngIf="countries.country">     \n          <ion-label>  \n            {{"Country" | translate}}\n          </ion-label>   \n          <ion-select [(ngModel)]="registerData.billing.country" (ngModelChange)="getBillingRegion(registerData.billing.country)" name="country">\n            <div *ngFor="let field of countries.country.countries | keys">\n              <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span></ion-option>\n            </div>\n          </ion-select>      \n        </ion-item>\n        <ion-item *ngIf="billing_states">  \n          <ion-label>  \n            {{"State" | translate}}\n          </ion-label>   \n          <ion-select [(ngModel)]="registerData.billing.state" name="state">\n            <div *ngFor="let field of billing_states | keys">\n              <ion-option value="{{field.key}}">{{field.value}}\n              </ion-option>\n            </div>\n          </ion-select>\n        </ion-item>\n        <ion-item *ngIf="!billing_states">\n          <ion-label floating>{{"State" | translate}}\n          </ion-label>\n          <ion-input required type="text" [(ngModel)]="registerData.billing.state" name="state">\n          </ion-input>\n        </ion-item-->\n      </ion-list>\n\n      <div class="error-message" *ngIf="errors">\n        <div *ngFor="let error of errors | keys">\n          <h2 [innerHTML]="error.value"></h2>\n        </div>\n      </div>\n\n      <div class="margin"> \n        <button ion-button block color="button-color" type="submit" class="button button-block button-default" text-uppercase [disabled]="disableSubmit" (click)="registerCustomer()">{{Register | translate}}\n        </button>\n      </div>\n    </form>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionic\deshimall\src\pages\account\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], AccountRegister);
    return AccountRegister;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Address; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_address_form_edit_address_form__ = __webpack_require__(377);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Address = /** @class */ (function () {
    function Address(nav, service, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        localStorage.setItem("pagename", "adress");
        this.service.getAddress()
            .then(function (results) {
            _this.addresses = results;
            console.log(_this.addresses);
        });
    }
    Address.prototype.editAddress = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__edit_address_form_edit_address_form__["a" /* EditAddressForm */], this.addresses);
    };
    Address = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\deshimall\src\pages\account\address\address.html"*/'<ion-header class="address-header">\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title>{{"Address" | translate}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n<div class="spinner"><ion-spinner *ngIf="!addresses" name="crescent"></ion-spinner></div>\n\n<ion-list *ngIf="addresses?.billing">\n  <ion-list-header>\n    {{"Billing Address" | translate}}\n  </ion-list-header>\n  <ion-item text-wrap no-lines>{{addresses.billing.first_name}} {{addresses.billing.last_name}} {{addresses.billing.first_name}} {{addresses.billing.last_name}} {{addresses.billing.address_1}} {{addresses.billing.address_2}} {{addresses.billing.city}} {{addresses.billing.state}} {{addresses.billing.phone}} {{addresses.billing.country}} {{addresses.billing.postcode}} {{addresses.billing.email}}</ion-item>\n\n  <ion-list-header>\n    {{"Shipping Address" | translate}}\n  </ion-list-header>\n  <ion-item text-wrap no-lines>{{addresses.shipping.first_name}} {{addresses.shipping.last_name}} {{addresses.shipping.address_1}} {{addresses.shipping.address_2}} {{addresses.shipping.city}} {{addresses.shipping.state}} {{addresses.shipping.country}} {{addresses.shipping.postcode}} {{addresses.shipping.phone}}</ion-item>\n\n  <button padding ion-button block color="button-color" type="submit" class="button button-block button-default" (click)="editAddress()">{{"Edit Address" | translate}}\n  </button>\n  \n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"D:\ionic\deshimall\src\pages\account\address\address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], Address);
    return Address;
}());

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_wishlist_service__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_product__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WishlistPage = /** @class */ (function () {
    function WishlistPage(nav, values, params, functions, service) {
        var _this = this;
        this.nav = nav;
        this.values = values;
        this.params = params;
        this.functions = functions;
        this.service = service;
        localStorage.setItem("pagename", "wishlist");
        this.service.loadWishlist()
            .then(function (results) { return _this.wishlist = results; });
    }
    WishlistPage.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.service.deleteItem(id)
            .then(function (results) { return _this.updateWish(results, id); });
    };
    WishlistPage.prototype.updateWish = function (results, id) {
        var _this = this;
        if (results.status == "success") {
            this.service.loadWishlist()
                .then(function (results) { return _this.wishlist = results; });
            this.values.wishlistId.splice(id, 0);
        }
    };
    WishlistPage.prototype.getCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */]);
    };
    WishlistPage.prototype.addToCart = function (id, type) {
        var _this = this;
        if (type == 'variable') {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__product_product__["a" /* ProductPage */], id);
        }
        else {
            this.service.addToCart(id)
                .then(function (results) { return _this.updateCart(results, id); });
        }
    };
    WishlistPage.prototype.updateCart = function (results, id) {
        var _this = this;
        if (results.error) {
            this.functions.showAlert("ERROR", "Unable to add to Wishlist");
        }
        else {
            this.service.deleteItem(id)
                .then(function (results) { return _this.updateWishlist(results); });
        }
    };
    WishlistPage.prototype.updateWishlist = function (results) {
        var _this = this;
        this.service.loadWishlist()
            .then(function (results) { return _this.wishlist = results; });
        this.functions.showAlert("SUCCESS", "Item has been added to cart");
    };
    WishlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\deshimall\src\pages\account\wishlist\wishlist.html"*/'<ion-header>\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title>{{"Wishlist"| translate}}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only light class="has-icon icon-only has-badge" (click)="getCart()">\n        <ion-icon class="ion-ios-cart item-icon">\n        </ion-icon>\n        <ion-badge class="badge badge-light" *ngIf="values.count">{{values.count}}\n        </ion-badge>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="wishlistPage">\n\n<div *ngIf="wishlist?.error" class="margin">\n    <h2>{{"Your wishlist is empty!" | translate}}\n    </h2>\n</div>\n\n    <div *ngIf="wishlist">\n    <div *ngIf="wishlist.length">\n    <div *ngFor="let item of wishlist | keys"  class="wish-list">\n\n    <ion-item no-lines>\n    <ion-thumbnail item-left>\n        <img src="{{item.value.image_thumb}}">\n    </ion-thumbnail>\n\n            <h2 wrap-text>{{item.value.name}}\n            </h2>\n            <h3 wrap-text > {{"Price" | translate}}: {{item.value.price | currency:values.settings.currency:true:\'1.2-2\'}}\n            </h3>\n\n            <ion-row class="add-remove-button">\n            <ion-col royal width-50>\n\n                <button ion-button full color="danger" clear text-uppercase no-padding  item-left no-margin (click)="removeFromWishlist(item.value.id)">\n                <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n                 REMOVE\n                </button>\n            </ion-col>\n            <ion-col royal width-50>\n                <button ion-button full no-padding no-margin clear text-uppercase item-right (click)="addToCart(item.value.id, item.value.type)">\n                <ion-icon ios="ios-cart" md="md-cart"></ion-icon>\n                  ADD TO CART\n                </button>\n                </ion-col>\n            </ion-row>\n\n    </ion-item>\n    </div>\n    </div>\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionic\deshimall\src\pages\account\wishlist\wishlist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_2__providers_service_wishlist_service__["a" /* WishlistService */]])
    ], WishlistPage);
    return WishlistPage;
}());

//# sourceMappingURL=wishlist.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wallet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_config__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Wallet = /** @class */ (function () {
    function Wallet(loadingController, config, iab, nav, appCtrl, service, navCtrl, navParams, http) {
        this.loadingController = loadingController;
        this.config = config;
        this.iab = iab;
        this.nav = nav;
        this.appCtrl = appCtrl;
        this.service = service;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.topupamount = "";
        this.topupvalue = "";
        this.woo_wallet_topup_token = "";
        localStorage.setItem("pagename", "wallet");
    }
    Wallet.prototype.ionViewDidLoad = function () {
        var _this = this;
        localStorage.setItem("pagename", "wallet");
        this.topupflag = false;
        this.service.getwallet()
            .then(function (results) {
            _this.walletdetails = results;
            console.log(_this.walletdetails);
            window.localStorage.setItem("wallettoken", _this.walletdetails.woo_wallet_topup);
        });
    };
    Wallet.prototype.presentLoading = function (text) {
        this.loader = this.loadingController.create({
            content: text,
        });
        this.loader.present();
    };
    Wallet.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    Wallet.prototype.addtopup = function () {
        window.open("https://www.homedelivery4u.com/my-account/woo-wallet/add/", '_system', 'location=yes');
    };
    Wallet.prototype.topup = function () {
        this.topupflag = true;
    };
    Wallet = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wallet',template:/*ion-inline-start:"D:\ionic\deshimall\src\pages\wallet\wallet.html"*/'<!--\n  Generated template for the WalletPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Wallet</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  \n\n\n  <button *ngIf="!topupflag" ion-button full (click)="addtopup()">\n    <ion-icon  slot="start" name="albums" item-left></ion-icon>\n&nbsp;  Recharge Wallet  \n  </button>\n\n  <button *ngIf="topupflag" ion-button full (click)="addtopup()">\n  Continue &nbsp; <ion-icon name="arrow-dropright"></ion-icon>\n\n  </button>\n\n\n  <div class="spinner"><ion-spinner *ngIf="!walletdetails" name="crescent"></ion-spinner></div>\n  \n  <ion-list *ngIf="walletdetails?.balance">\n    <ion-list-header>\n <b>Wallet Balance -:</b><span style="color:blue"> {{walletdetails.balance}}</span>\n    </ion-list-header>\n  \n    <ion-card  *ngFor="let item of walletdetails.transactions">\n       \n      <ion-card-content *ngIf="!topupflag" >\n     <p> <ion-label><b>Type:</b>{{item.type}}\n    </ion-label></p>\n    <p><b>Amount:</b> <ion-label>{{item.amount}}\n    </ion-label>\n</p>\n\n<p><ion-label><b>Balance:</b> {{item.balance}}\n</ion-label>\n</p>\n\n<p> <ion-label><b>Details:</b>{{item.details}}\n</ion-label>\n</p>\n\n<p> <ion-label><b>Date:</b>{{item.date}}\n</ion-label>\n</p>\n      </ion-card-content>\n    </ion-card>\n\n\n\n   \n\n\n      \n  </ion-list>\n  \n  </ion-content>'/*ion-inline-end:"D:\ionic\deshimall\src\pages\wallet\wallet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_service_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]])
    ], Wallet);
    return Wallet;
}());

//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Post = /** @class */ (function () {
    function Post(service, values, params) {
        var _this = this;
        this.service = service;
        this.values = values;
        localStorage.setItem("pagename", "post");
        this.id = params.data;
        this.service.getPage(this.id)
            .then(function (results) { return _this.post = results; });
    }
    Post = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\deshimall\src\pages\post\post.html"*/'<ion-header class="settings-header">\n    <ion-navbar color="header"> <button ion-button menuToggle>\n    <ion-icon name="menu"></ion-icon>\n     </button>\n        <ion-title text-wrap text-center *ngIf="post?.post_title">{{post.post_title}} </ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content class="post" padding>\n    <ion-spinner *ngIf="!post" name="crescent"> </ion-spinner>\n    <div *ngIf="post">\n        <div [innerHTML]="post.post_content"></div>\n    </div>\n</ion-content>'/*ion-inline-end:"D:\ionic\deshimall\src\pages\post\post.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], Post);
    return Post;
}());

//# sourceMappingURL=post.js.map

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 189;

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_http__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var Service = /** @class */ (function () {
    function Service(reqhttp, http, config, values, loadingCtrl, nativeStorage) {
        this.reqhttp = reqhttp;
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingCtrl = loadingCtrl;
        this.nativeStorage = nativeStorage;
        this.dir = 'left';
        this.filter = {};
        this.has_more_items = true;
        this.blocks = [];
        this.featuredProduct = [];
        this.onSale = [];
        this.mainCategories = [];
        this.filter.page = 1;
    }
    Service.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-keys', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.values.data = data;
                _this.blocks = data.blocks;
                _this.values.settings = data.settings;
                _this.categories = data.categories.filter(function (item) { return item.name !== 'Uncategorised'; });
                _this.mainCategories = _this.categories.filter(function (item) { return item.parent === 0; });
                _this.featuredProduct = data.featured;
                _this.onSale = data.on_sale;
                var _loop_1 = function (item) {
                    if (_this.blocks[item].block_type == 'flash_sale_block') {
                        _this.blocks[item].interval = setInterval(function () {
                            var countDownDate = new Date(_this.blocks[item].sale_ends).getTime();
                            var now = new Date().getTime();
                            var distance = countDownDate - now;
                            _this.blocks[item].days = Math.floor(distance / (1000 * 60 * 60 * 24));
                            _this.blocks[item].hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            _this.blocks[item].minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                            _this.blocks[item].seconds = Math.floor((distance % (1000 * 60)) / 1000);
                            if (distance < 0) {
                                clearInterval(_this.blocks[item].interval);
                                _this.blocks[item].hide = true;
                            }
                        }, 1000);
                    }
                };
                for (var item in _this.blocks) {
                    _loop_1(item);
                }
                _this.values.currency = data.currency;
                _this.login_nonce = data.login_nonce;
                if (data.user && data.user.data != undefined) {
                    _this.values.isLoggedIn = data.user.data.status;
                    _this.values.customerId = data.user.data.ID;
                    _this.values.customerName = data.user.data.display_name;
                    //this.values.avatar = data.user.data.avatar_url;
                    _this.nativeStorage.getItem('loginData').then(function (data) {
                        if (data.type == 'social') {
                            _this.values.customerName = data.displayName;
                            //this.values.avatar = data.avatar;
                        }
                    }, function (error) { return console.error(error); });
                }
                else {
                    _this.nativeStorage.getItem('loginData').then(function (data) {
                        if (data.type == 'woo') {
                            _this.login(data);
                        }
                        else if (data.type == 'social') {
                            _this.values.customerName = data.displayName;
                        }
                    }, function (error) { return console.error(error); });
                }
                _this.nativeStorage.setItem('blocks', data).then(function (data) { }, function (error) { return console.error(error); });
                _this.nativeStorage.getItem('loginData').then(function (data) { return _this.login(data); }, function (error) { return console.error(error); });
                _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.cart = data;
                    _this.values.cartNonce = data.cart_nonce;
                    _this.values.updateCart(_this.cart);
                });
                resolve(true);
            });
        });
    };
    Service.prototype.getNonce = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-nonce', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.login = function (loginData) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("username", loginData.username);
        params.append("password", loginData.password);
        //params.append("_wpnonce", this.login_nonce);
        params.append("login", 'Login');
        //params.append("redirect", this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-userdata');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-login', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                //   alert(data);
                if (!data.errors) {
                    _this.values.isLoggedIn = true;
                    _this.values.customerName = data.display_name;
                    _this.values.customerId = data.ID;
                    //  alert(this.values.customerId);
                    params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
                    params.append("customer_id", _this.values.customerId.toString());
                    _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                        for (var item in data) {
                            _this.values.wishlistId[data[item].id] = data[item].id;
                        }
                    });
                    window.localStorage.setItem("userid", data.ID);
                    window.localStorage.setItem('username', loginData.username);
                    _this.nativeStorage.setItem('loginData', {
                        username: loginData.username,
                        password: loginData.password
                    }).then(function (data) { }, function (error) { return console.error(error); });
                }
                resolve(data);
            }, function (err) {
                // alert(JSON.parse(err._body))
            });
        });
    };
    Service.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-logout', _this.config.options).subscribe(function (data) {
                _this.values.isLoggedIn = false;
                _this.values.customerName = "";
                _this.nativeStorage.setItem('loginData', {}).then(function (data) { }, function (error) { return console.error(error); });
                _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.cart = data;
                    _this.values.updateCart(_this.cart);
                });
                resolve(_this.cart);
            });
        });
    };
    Service.prototype.passwordreset = function (email, nonce, url) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("user_login", email);
        params.append("wc_reset_password", "true");
        params.append("_wpnonce", nonce);
        params.append("_wp_http_referer", '/my-account/lost-password/');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/my-account/lost-password/', params).subscribe(function (status) {
                resolve(status);
            });
        });
    };
    Service.prototype.passwordResetNonce = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-passwordreset', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.getAddress = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/customers/' + _this.values.customerId + '?', false), _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.address = data;
                resolve(_this.address);
            });
        });
    };
    Service.prototype.gettoken = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("username", "smartweb");
        params.append("password", "asdzxc@987");
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-json/jwt-auth/v1/token', params).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.token = data;
                resolve(_this.token);
            });
        });
    };
    Service.prototype.getslider = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/API/api.php?sliders=1').map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.getwallet = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-wallet', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.checkshippingzone = function (zipcode) {
        return this.http.get(this.config.url + '/API/api.php?shipzone=' + zipcode).map(function (res) { return res.json(); });
    };
    Service.prototype.getwalletbalance = function (userid) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/API/api.php?walletbalance=1&userid=' + userid).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.wallets = data;
                resolve(_this.wallets);
            });
        });
    };
    Service.prototype.saveAddress = function (address) {
        var _this = this;
        var params = {
            customer: address
        };
        this.reqhttp.setHeader(this.config.url, 'Content-Type', 'application/json; charset=UTF-8');
        this.reqhttp.setDataSerializer('json');
        this.reqhttp.clearCookies();
        return new Promise(function (resolve) {
            _this.reqhttp.put(_this.config.setUrl('PUT', '/wp-json/wc/v3/customers/' + _this.values.customerId + '?', false), params, {}).then(function (data) {
                resolve(JSON.parse(data.data));
            });
        });
    };
    Service.prototype.pushNotification = function (notification) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("device_id", notification.device_id);
        params.append("platform", notification.platform);
        params.append("email", notification.email);
        params.append("city", notification.city);
        params.append("state", notification.state);
        params.append("country", notification.country);
        params.append("pincode", notification.pincode);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-user-subcribe-notify', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    Service.prototype.pushNotify = function (deviceId, platform) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("device_id", deviceId);
        params.append("platform", platform);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-user-subcribe-notify', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    Service.prototype.getOrder = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/orders/' + id + '?', false), _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.order = data;
                resolve(_this.order);
            });
        });
    };
    Service.prototype.getCountry = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_country', _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.country = data;
                resolve(_this.country);
            });
        });
    };
    Service.prototype.registerCustomer = function (customer) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("first_name", customer.first_name);
        params.append("last_name", customer.last_name);
        params.append("username", customer.email);
        params.append("password", customer.password);
        params.append("email", customer.email);
        params.append("phone", customer.phone);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-create-user', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    Service.prototype.getOrders = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/orders?', filter), _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.orders = data;
                resolve(_this.orders);
            });
        });
    };
    Service.prototype.updateOrder = function (data, id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.put(_this.config.setUrl('PUT', '/wp-json/wc/v3/orders/' + id + '?', data), _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
        /*this.reqhttp.setHeader(this.config.url, 'Content-Type', 'application/json; charset=UTF-8');
        this.reqhttp.setDataSerializer('json');
        this.reqhttp.clearCookies();
        return new Promise(resolve => {
            this.reqhttp.put(this.config.setUrl('PUT', '/wp-json/wc/v3/orders/' + id + '?', false), data, {}).then(data => {
                this.status = JSON.parse(data.data);
                resolve(this.status);
            }, err => {
                console.log('Error in request')
            });
        });*/
    };
    Service.prototype.presentLoading = function (text) {
        this.loader = this.loadingCtrl.create({
            content: text,
        });
        this.loader.present();
    };
    Service.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    Service.prototype.getPage = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("page_id", id);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-page_content', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.getProducts = function () {
        var _this = this;
        this.http.get(this.config.setUrl('GET', '/wp-json/wc/v3/products?', false), this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.products = data;
        });
    };
    Service.prototype.loadMore = function () {
        var _this = this;
        this.filter.page += 1;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products?', _this.filter), _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.handleMore(data);
                resolve(true);
            });
        });
    };
    Service.prototype.handleMore = function (results) {
        if (results != undefined) {
            for (var i = 0; i < results.length; i++) {
                this.products.push(results[i]);
            }
            ;
        }
        if (results.length == 0) {
            this.has_more_items = false;
        }
    };
    Service.prototype.addToWishlist = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            params.append("product_id", id);
            params.append("customer_id", _this.values.customerId.toString());
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist', params, _this.config.options).subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    Service.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("product_id", id);
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.subscribeNotification = function (data) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("onesignal_user_id", data.userId);
        params.append("onesignal_push_token", data.pushToken);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-update_user_notification', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.addtopup = function (userid, wallettoken) {
    };
    Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_4__values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], Service);
    return Service;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 233;

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
var Config = /** @class */ (function () {
    function Config() {
        this.options = {};
        this.optionstwo = {};
        this.url = 'https://deshimall.in/'; // Replace URL_PLACEHOLDER with you site url (http://example.com)
        this.consumerKey = 'ck_9f83698ca7616c0a68c6e50b0e005caf5170b226'; //Replace CONSUMER_KEY_PLACEHOLDER with you site consumer_key
        this.consumerSecret = 'cs_5a4dbd856700af825bbb645515b8f6b007ed9e2d'; //Replace CONSUMER_KEY_PLACEHOLDER with you site consumer_secret
        this.options.withCredentials = true;
        this.options.headers = headers;
        this.optionstwo.withCredentials = false;
        this.optionstwo.headers = headers;
        this.oauth = oauthSignature;
        this.oauth_signature_method = 'HMAC-SHA1';
        this.searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        this.params = {};
        this.params.oauth_consumer_key = this.consumerKey;
        this.params.oauth_signature_method = 'HMAC-SHA1';
        this.params.oauth_version = '1.0';
    }
    Config.prototype.setOauthNonce = function (length, chars) {
        var result = '';
        for (var i = length; i > 0; --i)
            result += chars[Math.round(Math.random() * (chars.length - 1))];
        return result;
    };
    Config.prototype.setUrl = function (method, endpoint, filter) {
        var key;
        var unordered = {};
        var ordered = {};
        if (this.url.indexOf('https') >= 0) {
            unordered = {};
            if (filter) {
                for (key in filter) {
                    unordered[key] = filter[key];
                }
            }
            unordered['consumer_key'] = this.consumerKey;
            unordered['consumer_secret'] = this.consumerSecret;
            Object.keys(unordered).sort().forEach(function (key) {
                ordered[key] = unordered[key];
            });
            this.searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (key in ordered) {
                this.searchParams.set(key, ordered[key]);
            }
            return this.url + endpoint + this.searchParams.toString();
        }
        else {
            var url = this.url + endpoint;
            this.params['oauth_consumer_key'] = this.consumerKey;
            this.params['oauth_nonce'] = this.setOauthNonce(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
            this.params['oauth_timestamp'] = new Date().getTime() / 1000;
            for (key in this.params) {
                unordered[key] = this.params[key];
            }
            if (filter) {
                for (key in filter) {
                    unordered[key] = filter[key];
                }
            }
            Object.keys(unordered).sort().forEach(function (key) {
                ordered[key] = unordered[key];
            });
            this.searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (key in ordered) {
                this.searchParams.set(key, ordered[key]);
            }
            this.encodedSignature = this.oauth.generate(method, url, this.searchParams.toString(), this.consumerSecret);
            return this.url + endpoint + this.searchParams.toString() + '&oauth_signature=' + this.encodedSignature;
        }
    };
    Config = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Config);
    return Config;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CartService = /** @class */ (function () {
    function CartService(http, config, values, loadingController) {
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingController = loadingController;
    }
    CartService.prototype.loadCart = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart', _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.deleteItem = function (item_key) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_cart_item&item_key=' + item_key, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.checkout = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_checkout_form', _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.billing = data;
                resolve(_this.billing);
            });
        });
    };
    CartService.prototype.addToCart = function (id, key) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
            this.values.cartItem[key].quantity = 0;
        }
        else {
            this.values.cartItem[key].quantity += 1;
        }
        ;
        if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
            this.values.cart[id] = 0;
        }
        else {
            this.values.cart[id] += 1;
        }
        ;
        params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
        params.set('_wpnonce', this.values.cartNonce);
        params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.deleteFromCart = function (id, key) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
            this.values.cartItem[key].quantity = 0;
        }
        else {
            this.values.cartItem[key].quantity -= 1;
        }
        ;
        if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
            this.values.cart[id] = 0;
        }
        else {
            this.values.cart[id] -= 1;
        }
        ;
        params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
        params.set('_wpnonce', this.values.cartNonce);
        params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.submitCoupon = function (coupon) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("coupon_code", coupon);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-apply_coupon', params, _this.config.options)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CartService.prototype.removeCoupon = function (coupon) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("coupon", coupon);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_coupon', params, _this.config.options)
                .subscribe(function (data) {
                _this.status = data;
            });
        });
    };
    CartService.prototype.updateShipping = function (method) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("shipping_method[0]", method);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-update_shipping_method', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.presentLoading = function (text) {
        this.loader = this.loadingController.create({
            content: text,
        });
        this.loader.present();
    };
    CartService.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_4__values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */]])
    ], CartService);
    return CartService;
}());

//# sourceMappingURL=cart-service.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Functions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__values__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Functions = /** @class */ (function () {
    function Functions(alert, loadingController, values) {
        this.alert = alert;
        this.loadingController = loadingController;
        this.values = values;
    }
    Functions.prototype.showAlert = function (title, text) {
        var alert = this.alert.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    Functions.prototype.presentLoading = function () {
        this.loader = this.loadingController.create({
            content: this.values.lan.WaitTitle
        });
        this.loader.present();
    };
    Functions.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    Functions = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__values__["a" /* Values */]])
    ], Functions);
    return Functions;
}());

//# sourceMappingURL=functions.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingAddressForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_checkout_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__order_summary_order_summary__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__terms_condition_terms_condition__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_service_config__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_forkJoin__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_service_service__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var BillingAddressForm = /** @class */ (function () {
    function BillingAddressForm(alertCtrl, loadingController, http, config, iab, nav, oneSignal, platform, service, params, functions, values, zoneservice) {
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.http = http;
        this.config = config;
        this.iab = iab;
        this.nav = nav;
        this.oneSignal = oneSignal;
        this.platform = platform;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.zoneservice = zoneservice;
        this.showCreateAccont = false;
        this.buttonSubmit = false;
        this.buttonSubmitLogin = false;
        this.buttonSubmitCoupon = false;
        localStorage.setItem("pagename", "billingaddress");
        if (this.values.isLoggedIn) {
            this.loginstatus = true;
        }
        else {
            this.loginstatus = false;
        }
        this.buttonText = "Place order";
        this.buttonText1 = "Apply";
        this.buttonText2 = "Login";
        this.loginData = [];
        this.form = params.data;
        this.form.shipping_method = [];
        this.billing = {};
        this.billing.save_in_address_book = true;
        this.getRegion(this.form.billing_country);
        this.getRegion(this.form.shipping_country);
        this.form.shipping = true;
        this.shipping = {};
        this.shipping.save_in_address_book = true;
        // this.getRegion(this.form.billing_country);
    }
    BillingAddressForm.prototype.getRegion = function (countryId) {
        var _this = this;
        this.states = this.form.state[countryId];
        this.service.updateOrderReview(this.form)
            .then(function (results) { return _this.handleOrderReviews(results); });
    };
    BillingAddressForm.prototype.presentAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: message,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    BillingAddressForm.prototype.handleOrderReviews = function (results) {
        this.OrderReview = results;
        this.form.payment = this.OrderReview.payment;
        //this.chosen_shipping = this.OrderReview.chosen_shipping;
    };
    BillingAddressForm.prototype.checkout = function () {
        var _this = this;
        this.buttonSubmit = true;
        this.buttonText = "Placing order...";
        if (this.platform.is('cordova'))
            this.oneSignal.getIds().then(function (data) {
                _this.form.onesignal_user_id = data.userId;
            });
        if (this.form.shipping) {
            // this.zoneservice.checkshippingzone(this.form.billing_postcode).subscribe((result) => {
            //    this.postcode= JSON.stringify(result);
            //    let postcodecheck =JSON.parse(this.postcode);
            //    for (var i = 0; i < postcodecheck.length; i++) {
            //        if(postcodecheck[i]['locationcode']=="0")
            //        this.presentAlert("Sorry we are not serving in your area -" +this.form.billing_postcode);
            //        return ;
            //    }
            //   });
            if (localStorage.getItem("fblogin") === "Y") {
                //alert(localStorage.getItem("fbemail"));
                this.form.billing_email = localStorage.getItem("fbemail");
                var name = localStorage.getItem("fbname").split(" ");
                this.form.billing_first_name = name[0];
                this.form.billing_last_name = name[1];
            }
            //    this.form.order_verify = this.form.order_verify;
        }
        if (this.form.payment_method == 'bacs' || this.form.payment_method == 'cheque' || this.form.payment_method == 'cod' || this.form.payment_method == 'wallet') {
            this.service.checkout(this.form)
                .then(function (results) { return _this.handleBilling(results); });
        }
        else if (this.form.payment_method == 'payuindia') {
            this.service.checkout(this.form)
                .then(function (results) { return _this.handlePayUPayment(results); });
        }
        else if (this.form.payment_method == 'stripe') {
            this.service.getStripeToken(this.form)
                .then(function (results) { return _this.handleStripeToken(results); });
        }
        else {
            this.service.checkout(this.form)
                .then(function (results) { return _this.handlePayment(results); });
        }
    };
    BillingAddressForm.prototype.presentLoading = function (text) {
        this.loader = this.loadingController.create({
            content: text,
        });
        this.loader.present();
    };
    BillingAddressForm.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    BillingAddressForm.prototype.verifyphone = function () {
        var _this = this;
        if (this.form.shipping) {
            if (this.form.billing_phone.length > 0 && this.form.billing_phone.length == 10) {
                this.presentAlert("Check OTP Sent to your phone number");
                // this.presentLoading("Please Wait");
                var params = new __WEBPACK_IMPORTED_MODULE_12__angular_http__["d" /* URLSearchParams */]();
                params.append("user_email", this.form.billing_email);
                params.append("user_phone", this.form.billing_phone);
                return new Promise(function (resolve) {
                    _this.http.post(_this.config.url + '/?option=smsalert-woocommerce-checkout', params, _this.config.options).map(function (res) { return res.json(); }).subscribe(function (data) {
                        _this.dismissLoading();
                    }, function (err) {
                        // alert(JSON.parse(err._body))
                    });
                });
                //  this.dismissLoading();
            }
            else {
                this.presentAlert("Proper Mobile number is required");
            }
        }
    };
    BillingAddressForm.prototype.handlePayUPayment = function (results) {
        var _this = this;
        var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
        var browser = this.iab.create(results.redirect, '_blank', options);
        var str = results.redirect;
        var pos1 = str.lastIndexOf("/order-pay/");
        var pos2 = str.lastIndexOf("/?key=wc_order");
        var pos3 = pos2 - (pos1 + 11);
        this.orderId = str.substr(pos1 + 11, pos3);
        browser.on('loadstart').subscribe(function (data) {
            var browserActive = false;
            //  alert(data.url);
            if (data.url.indexOf('payumoney.com/transact') != -1 && !browserActive) {
                browserActive = true;
                browser.show();
            }
            else if (data.url.indexOf('/order-received/') != -1 && data.url.indexOf('/?key=wc_order_') != -1) {
                if (_this.orderId)
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_6__order_summary_order_summary__["a" /* OrderSummary */], _this.orderId);
                browser.hide();
            }
            else if (data.url.indexOf('cancel_order=true') != -1 || data.url.indexOf('cancelled=1') != -1 || data.url.indexOf('cancelled') != -1) {
                browser.close();
                _this.buttonSubmit = false;
            }
        });
        browser.on('exit').subscribe(function (data) {
            _this.buttonSubmit = false;
        });
    };
    BillingAddressForm.prototype.handlePayment = function (results) {
        var _this = this;
        if (results.result == 'success') {
            var options = "location=no,hidden=yes,toolbar=yes";
            var browser_1 = this.iab.create(results.redirect, '_blank', options);
            browser_1.show();
            browser_1.on('loadstart').subscribe(function (data) {
                if (data.url.indexOf('order-received') != -1 && data.url.indexOf('return=') == -1) {
                    _this.values.cart = [];
                    _this.values.count = 0;
                    var str = data.url;
                    var pos1 = str.lastIndexOf("/order-received/");
                    var pos2 = str.lastIndexOf("/?key=wc_order");
                    var pos3 = pos2 - (pos1 + 16);
                    var order_id = str.substr(pos1 + 16, pos3);
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_6__order_summary_order_summary__["a" /* OrderSummary */], order_id);
                    browser_1.hide();
                }
                else if (data.url.indexOf('cancel_order=true') != -1 || data.url.indexOf('cancelled=1') != -1 || data.url.indexOf('cancelled') != -1) {
                    browser_1.close();
                    _this.buttonSubmit = false;
                }
            });
            browser_1.on('exit').subscribe(function (data) {
                _this.buttonSubmit = false;
            });
        }
        else if (results.result == 'failure') {
            this.functions.showAlert("STATUS", results.messages);
            this.buttonSubmit = false;
        }
    };
    BillingAddressForm.prototype.checkoutStripe = function () {
        var _this = this;
        this.buttonSubmit = true;
        this.buttonText = "Placing Order...";
        this.service.getStripeToken(this.form)
            .then(function (results) { return _this.handleStripeToken(results); });
    };
    BillingAddressForm.prototype.handleStripeToken = function (results) {
        var _this = this;
        if (results.error) {
            this.buttonSubmit = false;
            this.buttonText = "Place Order";
            this.functions.showAlert("ERROR", results.error.message);
        }
        else {
            this.service.stripePlaceOrder(this.form, results)
                .then(function (results) { return _this.handleBilling(results); });
        }
    };
    BillingAddressForm.prototype.handleBilling = function (results) {
        if (results.result == "success") {
            var str = results.redirect;
            var pos1 = str.lastIndexOf("/order-received/");
            var pos2 = str.lastIndexOf("/?key=wc_order");
            var pos3 = pos2 - (pos1 + 16);
            var order_id = str.substr(pos1 + 16, pos3);
            this.values.cart = [];
            this.values.count = 0;
            this.nav.push(__WEBPACK_IMPORTED_MODULE_6__order_summary_order_summary__["a" /* OrderSummary */], order_id);
        }
        else if (results.result == "failure") {
            this.functions.showAlert("ERROR", results.messages);
        }
        this.buttonSubmit = false;
        this.buttonText = "Place Order";
    };
    BillingAddressForm.prototype.login = function () {
        var _this = this;
        if (this.validateForm()) {
            this.buttonSubmitLogin = true;
            this.buttonText2 = "Loading";
            this.service.login(this.form)
                .then(function (results) { return _this.handleResults(results); });
        }
    };
    BillingAddressForm.prototype.validateForm = function () {
        if (this.form.username == undefined || this.form.username == "") {
            return false;
        }
        if (this.form.password == undefined || this.form.password == "") {
            return false;
        }
        else {
            return true;
        }
    };
    BillingAddressForm.prototype.handleResults = function (a) {
        this.buttonSubmitLogin = false;
        this.buttonText2 = "Login";
        //this.form.shipping = true;
        if (a.user_logged) {
            this.form = a;
            this.states = this.form.state[this.form.billing_country];
            this.values.isLoggedIn = a.user_logged;
            this.values.customerName = a.billing_first_name;
            this.values.customerId = a.user_id;
            this.values.logoutUrl = a.logout_url;
        }
        else {
            this.functions.showAlert("Error", 'Login unsuccessful. try again');
        }
    };
    BillingAddressForm.prototype.submitCoupon = function () {
        var _this = this;
        this.buttonSubmitCoupon = true;
        this.buttonText1 = "Loading";
        this.service.submitCoupon(this.form)
            .then(function (results) { return _this.handleCoupon(results); });
    };
    BillingAddressForm.prototype.handleCoupon = function (results) {
        var _this = this;
        this.buttonSubmitCoupon = false;
        this.buttonText1 = "Apply";
        this.couponStatus = results._body;
        this.functions.showAlert("STATUS", results._body);
        this.service.updateOrderReview(this.form)
            .then(function (results) { return _this.OrderReview = results; });
    };
    BillingAddressForm.prototype.createAccount = function () {
        this.showCreateAccont = true;
    };
    BillingAddressForm.prototype.changePayment = function () {
        this.form.payment_instructions = this.form.payment[this.form.payment_method].description;
        this.buttonSubmit = false;
        this.buttonText = "Continue to " + this.form.payment[this.form.payment_method].method_title;
    };
    BillingAddressForm.prototype.terms = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__terms_condition_terms_condition__["a" /* TermsCondition */], this.form.terms_content);
    };
    BillingAddressForm.prototype.updateOrderReview = function () {
        var _this = this;
        this.OrderReview.shipping.forEach(function (item, index) {
            _this.form.shipping_method[index] = item.chosen_method;
        });
        this.service.updateOrderReview(this.form)
            .then(function (results) { return _this.handleOrderReviews(results); });
    };
    BillingAddressForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\deshimall\src\pages\checkout\billing-address-form\billing-address-form.html"*/'<ion-header>\n  <ion-navbar color="header"> \n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title text-wrap text-center>{{"Checkout" | translate}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content text-wrap class="billing-address-form">\n <div>\n    <ion-item *ngIf="!values.isLoggedIn" class="side-heading-background Returningcustomer" no-lines>\n      <ion-label color="side-heading-color">{{"Returningcustomer?Loginhere.." | translate}}\n        <ion-icon ios="ios-log-in" md="md-log-in">\n        </ion-icon>\n      </ion-label>\n      <ion-toggle color="button-color" checked="true" [(ngModel)]="form.islogin" name="subscribe">\n      </ion-toggle>\n    </ion-item>\n    <div *ngIf="form.islogin" class="login-form">\n      <form #f="ngForm">\n        <ion-list>\n          <ion-item>\n            <ion-label floating>{{"username" | translate}}\n            </ion-label>\n            <ion-input required type="email" [(ngModel)]="form.username" name="firstname">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"password" | translate}}\n            </ion-label>\n            <ion-input required type="password" [(ngModel)]="form.password" name="password">\n            </ion-input>\n          </ion-item>\n        </ion-list> \n        <div class="login-button">\n          <button ion-button block color="button-color" type="submit" text-uppercase [disabled]="buttonSubmitLogin" (click)="login(loginData)">{{buttonText2}}\n          </button> \n        </div>\n      </form>\n    </div>\n    <div *ngIf="form.iscoupon" class="coupon">\n      <form #f="ngForm">\n        <ion-item>\n          <ion-label floating>coupon\n          </ion-label>\n          <ion-input required type="text" [(ngModel)]="form.coupon_code" name="coupon">\n          </ion-input>\n        </ion-item> \n        <button ion-button color="button-color" block type="submit" [disabled]="buttonSubmitCoupon" (click)="submitCoupon()"> {{buttonText1}}\n        </button> \n      </form>\n    </div>\n    <div *ngIf="form">\n      <form #f="ngForm" class="form">\n        <ion-list no-margin>\n          <ion-item class="side-heading-background">\n            <ion-label class="col" color="side-heading-color">{{"BillingAddress" | translate}}\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"FirstName" | translate}}\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.billing_first_name" name="firstname">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"LastName"| translate}}\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.billing_last_name" name="lastname">\n            </ion-input>\n          </ion-item>\n          <ion-item style="display: none;" >\n            <ion-label floating>{{"Company" | translate}}\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.billing_company" name="company">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"Email" | translate}}\n            </ion-label>\n            <ion-input required type="email" [(ngModel)]="form.billing_email" name="email">\n            </ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>{{"Phone" | translate}}\n            </ion-label>\n            <ion-input required id="billing_phone" type="tel" maxlength="10" [(ngModel)]="form.billing_phone" name="telephone">\n            </ion-input>\n          </ion-item>\n\n\n          \n\n        \n\n\n          <ion-item>\n            <ion-label floating>{{"StreetAddress" | translate}} 1\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.billing_address_1" name="street1">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"StreetAddress" | translate}} 2\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.billing_address_2" name="street2">\n            </ion-input>\n          </ion-item>\n       \n          <ion-item>\n            <ion-label floating>{{"City" | translate}}\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.billing_city" name="city">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"Postcode" | translate}}\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.billing_postcode" name="postcode">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label> {{"Country" | translate}}\n            </ion-label>\n            <ion-select [(ngModel)]="form.billing_country" (ngModelChange)="getRegion(form.billing_country)" name="billing_country">\n              <div *ngFor="let field of form.country.countries | keys">\n                <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span>\n                </ion-option>\n              </div>\n            </ion-select>\n          </ion-item>\n          <ion-item *ngIf="states">\n            <ion-label> {{"State" | translate}} \n            </ion-label>\n            <ion-select [(ngModel)]="form.billing_state" name="billing_state">\n              <div *ngFor="let field of states | keys">\n                <ion-option value="{{field.key}}">{{field.value}}\n                </ion-option>\n              </div>\n            </ion-select>\n          </ion-item>\n          <ion-item *ngIf="!states">\n            <ion-label floating> {{"State" | translate}} \n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.billing_state" name="billing_state">\n            </ion-input>\n          </ion-item>\n\n        </ion-list>\n        <div style="display: none;" class="same-for-shipping">\n          <ion-item class="side-heading-background">\n            <ion-label color="side-heading-color">{{"SameForShipping" | translate}}\n            </ion-label>\n            <ion-toggle color="button-color" checked="true" [(ngModel)]="form.shipping" name="shipping">\n            </ion-toggle>\n          </ion-item>\n        </div>\n        <div *ngIf="!form.shipping" class="same-for-shipping-form">\n          <ion-list class="shipping-address-list">\n            <ion-item class="side-heading-background">\n              <ion-label color="side-heading-color">{{"ShippingAddress" | translate}}\n              </ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>{{"FirstName" | translate}}\n              </ion-label>\n              <ion-input required type="text" [(ngModel)]="form.shipping_first_name" name="first_name">\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>{{"LastName"| translate}}}\n              </ion-label>\n              <ion-input required type="text" [(ngModel)]="form.shipping_last_name" name="last_name">\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>{{"Company" | translate}}\n              </ion-label>\n              <ion-input required type="text" [(ngModel)]="form.shipping_company" name="shipping_company">\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>{{"StreetAddress" | translate}} 1\n              </ion-label>\n              <ion-input required type="text" [(ngModel)]="form.shipping_address_1" name="address_1">\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>{{"StreetAddress" | translate}} 2\n              </ion-label>\n              <ion-input required type="text" [(ngModel)]="form.shipping_address_2" name="address_2">\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>{{"City" | translate}}\n              </ion-label>\n              <ion-input required type="text" [(ngModel)]="form.shipping_city" name="shipping_city">\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label> {{"Country" | translate}}\n              </ion-label>\n              <ion-select [(ngModel)]="form.shipping_country" (ngModelChange)="getRegion(form.shipping_country)" name="shipping_country">\n                <div *ngFor="let field of form.country.countries | keys">\n                  <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span>\n                  </ion-option>\n                </div>\n              </ion-select>\n            </ion-item>\n            <ion-item *ngIf="states">\n              <ion-label> {{"State" | translate}} \n              </ion-label>\n              <ion-select [(ngModel)]="form.shipping_state" name="form.shipping_state">\n                <div *ngFor="let field of states | keys">\n                  <ion-option value="{{field.key}}">{{field.value}}\n                  </ion-option>\n                </div>\n              </ion-select>\n            </ion-item>\n            <ion-item *ngIf="!states">\n              <ion-label floating>{{form.checkout_fields?.shipping?.shipping_state?.label}}\n              </ion-label>\n              <ion-input required type="text" [(ngModel)]="form.shipping_state" name="form.shipping_state">\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>{{"Postcode" | translate}}\n              </ion-label>\n              <ion-input required type="text" [(ngModel)]="form.shipping_postcode" name="shipping_postcode">\n              </ion-input>\n            </ion-item>\n          </ion-list>\n        </div>\n      </form>\n    </div>\n    <ion-item *ngIf="!values.isLoggedIn" no-lines class="side-heading-background create-account">\n      <ion-label color="side-heading-color">{{"Create Account" | translate}}\n      </ion-label>\n      <ion-toggle color="button-color" checked="true" [(ngModel)]="form.register" name="subscribe">\n      </ion-toggle>\n    </ion-item>\n    <div *ngIf="form.register" class="create-account-form">\n      <form #f="ngForm">\n        <ion-list>\n          <ion-label class="create-account-label"> {{"Createanaccounttext" | translate}} \n          </ion-label>\n          <ion-item>\n            <ion-label floating>{{"password" | translate}}\n            </ion-label>\n            <ion-input required type="password" [(ngModel)]="form.password" name="password">\n            </ion-input>\n          </ion-item>\n        </ion-list>\n      </form>\n    </div>\n\n\n<div *ngIf="OrderReview?.shipping">\n<ion-list radio-group *ngFor="let package of OrderReview.shipping" [(ngModel)]="package.chosen_method" (ngModelChange)="updateOrderReview()">\n    <ion-item class="side-heading-background order-review-header" no-lines>\n        <ion-label color="side-heading-color"><span [innerHTML]="package.package_name"></span>\n        </ion-label>\n    </ion-item>\n    <ion-item *ngFor="let method of package.shipping | keys">\n      <ion-label><span [innerHTML]="method.value.label"></span> <b>-</b> <span>{{method.value.cost | currency:values.settings.currency:true:\'1.2-2\'}}</span></ion-label>\n      <ion-radio value="{{method.value.id}}"></ion-radio>\n    </ion-item>\n</ion-list>\n</div>\n\n\n<ion-list *ngIf="OrderReview?.cart">\n      <ion-item class="side-heading-background order-review-header" no-lines>\n        <ion-label color="side-heading-color">{{"Your Orders" | translate}}\n        </ion-label>\n      </ion-item>\n      <div *ngFor="let item of OrderReview.cart.cart_contents | keys">\n        <ion-row>\n          <ion-col width-75>\n            <ion-label no-margin>{{item.value.name}} - ({{item.value.quantity}})\n            </ion-label>\n          </ion-col>\n          <ion-col width-25 text-right>\n            <ion-label no-margin>{{1*item.value.line_subtotal | currency:values.settings.currency:true:\'1.2-2\'}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div *ngIf="OrderReview.totals.discount_total && OrderReview.totals.discount_total != 0">\n        <ion-row>\n          <ion-col width-75>\n            <ion-label no-margin>{{"Coupon" | translate}}\n            </ion-label>\n          </ion-col>\n          <ion-col width-25 text-right>\n            <ion-label no-margin> - {{1*OrderReview.totals.discount_total | currency:values.settings.currency:true:\'1.2-2\'}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n      </div>\n      <ion-row>\n        <ion-col width-75>\n          <ion-label no-margin>{{"SubTotal" | translate}}\n          </ion-label>\n        </ion-col>\n        <ion-col width-25 text-right>\n          <ion-label no-margin>{{1*OrderReview.totals.subtotal | currency:values.settings.currency:true:\'1.2-2\'}}\n          </ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="OrderReview.totals.shipping_total != 0">\n        <ion-col width-75>\n          <ion-label>{{"Shipping" | translate}}\n          </ion-label>\n        </ion-col>\n        <ion-col width-25 text-right>\n          <ion-label>{{1*OrderReview.totals.shipping_total | currency:values.settings.currency:true:\'1.2-2\'}}\n          </ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="OrderReview.totals.fee_total != 0">\n        <ion-col width-75>\n          <ion-label>{{"Fee" | translate}}\n          </ion-label>\n        </ion-col>\n        <ion-col width-25 text-right>\n          <ion-label>{{1*OrderReview.totals.fee_total | currency:values.settings.currency:true:\'1.2-2\'}}\n          </ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="OrderReview.totals.cart_contents_total != 0">\n        <ion-col width-75>\n          <ion-label>{{"Subtotal ex tax" | translate}}\n          </ion-label>\n        </ion-col>\n        <ion-col width-25 text-right>\n          <ion-label>{{1*OrderReview.totals.cart_contents_total | currency:values.settings.currency:true:\'1.2-2\'}}\n          </ion-label>\n        </ion-col>\n      </ion-row>  \n\n      <ion-row *ngIf="OrderReview.totals.total_tax != 0">\n        <ion-col width-75>\n          <ion-label>{{"Tax total" | translate}}\n          </ion-label>\n        </ion-col>\n        <ion-col width-25 text-right>\n          <ion-label>{{1*OrderReview.totals.total_tax | currency:values.settings.currency:true:\'1.2-2\'}}\n          </ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col width-75>\n          <ion-label no-margin>\n            <b>{{"Totals" | translate}}\n            </b>\n          </ion-label>\n        </ion-col>\n        <ion-col width-25 text-right>\n          <ion-label no-margin>\n            <b>{{1*OrderReview.totals.total | currency:values.settings.currency:true:\'1.2-2\'}}\n            </b>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n    <ion-item class="side-heading-background payment-method-header" no-lines>\n      <ion-label color="side-heading-color">{{"Select shipping method" | translate}}\n      </ion-label>\n    </ion-item>\n    <div *ngIf="form.payment">\n      <ion-list no-margin text-wrap radio-group [(ngModel)]="form.payment_method" (ngModelChange)="changePayment()">\n        <ion-item *ngFor="let method of form.payment | keys">\n          <ion-label class="payment-method-title">{{method.value.title}}\n          </ion-label>\n          <ion-radio value="{{method.value.id}}">\n          </ion-radio>\n        </ion-item>\n      </ion-list>\n      <div *ngIf="form.payment_method != \'stripe\'" class="side-heading-background">\n        <ion-label class="payment-instructions">{{form.payment_instructions}}\n        </ion-label> \n      <ion-item *ngIf="form.terms_content" no-lines class="side-heading-background">\n      <ion-label>{{"IAgree" | translate}} <a (click)="terms()">{{"TermsConditions" | translate}}</a>\n      </ion-label>\n      <ion-toggle color="button-color" checked="true" [(ngModel)]="form.terms" name="terms">\n      </ion-toggle>\n      </ion-item>\n      <div class="button-margin">\n        <button ion-button color="button-color" text-uppercase [disabled]="buttonSubmit" block secondary type="submit" class="button button-block button-default" (click)="checkout()">{{"PlaceOrder" | translate}}\n        </button> \n      </div>\n        \n      </div>\n    </div>\n    <div *ngIf="form.payment_method ==\'stripe\'" class="side-heading-background stripe-payment">\n      <ion-label [innerHTML]="form.payment.stripe.description">\n      </ion-label>\n      <form #f="ngForm">\n        <ion-list no-margin>\n          <ion-item class="side-heading-background">\n            <ion-label color="side-heading-color">Stripe Card Details\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"CardNumber" | translate}}\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.stripe_number" name="stripe_number">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"ExpiryMonth" | translate}} (MM)\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.stripe_exp_month" name="stripe_exp_year">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"ExpiryYear" |translate}} (YYYY)\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.stripe_exp_year" name="stripe_exp_year">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"CardCode" | translate}}\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.stripe_code" name="stripe_code">\n            </ion-input>\n          </ion-item>\n        </ion-list>\n      </form> \n     <ion-item class="side-heading-background" no-lines>\n      <ion-label>{{"IAgree" | translate}} <a (click)="terms()">{{"TermsConditions" | translate}}</a>\n      </ion-label>\n      <ion-toggle checked="true" [(ngModel)]="form.terms" name="terms">\n      </ion-toggle>\n    </ion-item>\n\n      <div class="button-margin">\n      <button ion-button color="button-color" text-uppercase *ngIf="form.payment_method ==\'stripe\'" [disabled]="buttonSubmit" (click)="checkout()" block secondary type="submit" class="button button-block button-default">{{"PlaceOrder" | translate}}\n      </button>\n      </div>\n    </div>\n    <br>\n    <br>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\deshimall\src\pages\checkout\billing-address-form\billing-address-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_9__providers_service_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_service_checkout_service__["a" /* CheckoutService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_5__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_13__providers_service_service__["a" /* Service */]])
    ], BillingAddressForm);
    return BillingAddressForm;
}());

//# sourceMappingURL=billing-address-form.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsCondition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsCondition = /** @class */ (function () {
    function TermsCondition(nav) {
        this.nav = nav;
        localStorage.setItem("pagename", "terms");
    }
    TermsCondition = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\deshimall\src\pages\checkout\terms-condition\terms-condition.html"*/'<ion-header>\n   <ion-navbar color="header">\n      <ion-title>{{"TermsConditions" | translate}}</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content padding class="terms-condition">\n   <div class="terms">\n   <p>Add terms and conditions here</p>\n   </div>\n</ion-content>'/*ion-inline-end:"D:\ionic\deshimall\src\pages\checkout\terms-condition\terms-condition.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], TermsCondition);
    return TermsCondition;
}());

//# sourceMappingURL=terms-condition.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CategoryService = /** @class */ (function () {
    function CategoryService(http, config, values, loadingController) {
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingController = loadingController;
    }
    CategoryService.prototype.load = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products?', params), _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    CategoryService.prototype.loadMore = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products?', filter), _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    CategoryService.prototype.addToCart = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (var param in params) {
                searchParams.set(param, params[param]);
            }
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', searchParams, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data.cart;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCartTwo(_this.status);
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.deleteFromCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count -= 1;
                if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity -= 1;
                }
                ;
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] -= 1;
                }
                ;
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        params.set('_wpnonce', this.values.cartNonce);
        params.set('update_cart', 'Update Cart');
        params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.updateToCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count += 1;
                if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity += 1;
                }
                ;
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] += 1;
                }
                ;
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        console.log(this.values.cartNonce);
        params.set('_wpnonce', this.values.cartNonce);
        params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.presentLoading = function (text) {
        this.loader = this.loadingController.create({
            content: text,
        });
        this.loader.present();
    };
    CategoryService.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    CategoryService.prototype.search = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products?', params), _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    CategoryService.prototype.addToWishlist = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            params.append("product_id", id);
            params.append("customer_id", _this.values.customerId.toString());
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("product_id", id);
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    CategoryService.prototype.getAttributes = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            params.append("category", id);
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-product-attributes', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_3__values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* LoadingController */]])
    ], CategoryService);
    return CategoryService;
}());

//# sourceMappingURL=category-service.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_product_service__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__md5__ = __webpack_require__(715);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReviewPage = /** @class */ (function () {
    function ReviewPage(nav, service, params, functions, values, toastCtrl) {
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.toastCtrl = toastCtrl;
        this.form = {};
        this.buttonSubmitLogin = false;
        this.showAddReview = false;
        this.count5 = 0;
        this.count4 = 0;
        this.count3 = 0;
        this.count2 = 0;
        this.count1 = 0;
        this.count5Percentage = '0' + '%';
        this.count4Percentage = '0' + '%';
        this.count3Percentage = '0' + '%';
        this.count2Percentage = '0' + '%';
        this.count1Percentage = '0' + '%';
        this.id = params.data.id;
        this.name = params.data.name;
        this.count = params.data.count;
        this.rating = params.data.rating;
        this.form.rating = 5;
        localStorage.setItem("pagename", "reviews");
        this.handleReview(params.data.reviews);
    }
    ReviewPage.prototype.handleReview = function (reviews) {
        var _this = this;
        this.reviews = reviews;
        console.log(this.reviews);
        this.reviews.forEach(function (review) {
            review.avatar = Object(__WEBPACK_IMPORTED_MODULE_5__md5__["a" /* md5 */])(review.email);
            if (review.rating == 5) {
                _this.count5 = _this.count5 + 1;
            }
            if (review.rating == 4) {
                _this.count4 = _this.count4 + 1;
            }
            if (review.rating == 3) {
                _this.count3 = _this.count3 + 1;
            }
            if (review.rating == 2) {
                _this.count2 = _this.count2 + 1;
            }
            if (review.rating == 1) {
                _this.count1 = _this.count1 + 1;
            }
        });
        // this.count5 = ((this.count5 / this.count)*100);
        this.count5Percentage = ((this.count5 / this.count) * 100) + '%';
        // this.count4 = ((this.count4 / this.count)*100);
        this.count4Percentage = ((this.count4 / this.count) * 100) + '%';
        // this.count3 = ((this.count3 / this.count)*100);
        this.count3Percentage = ((this.count3 / this.count) * 100) + '%';
        //  this.count2 = ((this.count2 / this.count)*100) + '%';
        this.count2Percentage = this.count2 + '%';
        // this.count1 = ((this.count1 / this.count)*100) + '%';
        this.count1Percentage = this.count1 + '%';
    };
    ReviewPage.prototype.dismiss = function () {
        this.nav.pop();
    };
    ReviewPage.prototype.yourRating = function (rating) {
        this.form.rating = rating;
    };
    ReviewPage.prototype.submitComment = function () {
        var _this = this;
        this.form.id = this.id;
        if (this.validate()) {
            this.buttonSubmitLogin = true;
            this.service.submitComment(this.form).then(function (results) {
                _this.status = results;
                _this.buttonSubmitLogin = false;
                _this.functions.showAlert("Success", "Thank you for your review! Your review is awaiting approval");
            });
        }
    };
    ReviewPage.prototype.validate = function () {
        if (!this.values.isLoggedIn) {
            if (this.form.author == undefined || this.form.author == "") {
                this.functions.showAlert("ERROR", "Please Enter Name");
                return false;
            }
            if (this.form.email == undefined || this.form.email == "") {
                this.functions.showAlert("ERROR", "Please Enter Email");
                return false;
            }
        }
        if (this.form.comment == undefined || this.form.comment == "") {
            this.functions.showAlert("ERROR", "Please Enter Comment");
            return false;
        }
        else
            return true;
    };
    ReviewPage.prototype.showSubmitReview = function () {
        if (this.showAddReview)
            this.showAddReview = false;
        else
            this.showAddReview = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ReviewPage.prototype, "content", void 0);
    ReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\deshimall\src\pages\reviews\reviews.html"*/'<ion-header>\n  <ion-navbar color="header">\n    <ion-title>{{"Rating & Feedback" | translate}}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="dismiss()">\n        <ion-icon name="md-close" style="color: #111; font-size: 20px; margin: 16px;"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar> \n</ion-header>\n\n<ion-content class="review-page">\n  <div class="spinner"><ion-spinner *ngIf="!reviews" name="ios-small"></ion-spinner></div>\n  \n  <div *ngIf="reviews">\n    <div class="review-info">\n      <ion-row>\n        <ion-col style="border-right: 1px solid #f1f1f1;max-width:36%">\n          <h2 *ngIf="rating">{{rating  | number : \'1.1-1\'}}<span style="font-size: 15px; color: #999">/5</span></h2>\n          <h2 *ngIf="!rating">0<span style="font-size: 15px; color: #999">/5</span></h2>\n          <h3 style="font-size:15px">\n            <span class="rating">\n              <span class="star-icon" [ngClass]="{full: rating >= 1, half: rating == 0.5}">&#x2605;</span>\n              <span class="star-icon" [ngClass]="{full: rating >= 2, half: rating == 1.5}">&#x2605;</span>\n              <span class="star-icon" [ngClass]="{full: rating >= 3, half: rating == 2.5}">&#x2605;</span>\n              <span class="star-icon" [ngClass]="{full: rating >= 4, half: rating == 3.5}">&#x2605;</span>\n              <span class="star-icon" [ngClass]="{full: rating >= 5, half: rating == 4.5}">&#x2605;</span>\n            </span>\n          </h3>\n          <h3 style="margin-top: 0px;">\n            <span style="font-size: 14px;">{{count}} {{"Ratings" | translate}}</span>\n          </h3>\n        </ion-col>\n\n        <ion-col class="review-star-group">\n          <ion-row>\n            <ion-col style="max-width:35%">\n              <h3 style="margin-top:6px;">\n                <span class="rating review-star">\n                  <span class="star-icon full">&#x2605;</span>\n                  <span class="star-icon full">&#x2605;</span>\n                  <span class="star-icon full">&#x2605;</span>\n                  <span class="star-icon full">&#x2605;</span>\n                  <span class="star-icon full">&#x2605;</span>\n                </span>\n              </h3>\n            </ion-col>\n            <ion-col style="max-width:45%">\n              <div class="progress-bar" item-right>\n                <span [style.width]="count5Percentage"></span>\n              </div>\n            </ion-col>\n            <ion-col style="max-width:20%">\n              <h4 item-right>\n                <span>{{count5 | number : \'1.0-0\'}}</span>\n              </h4>\n            </ion-col>\n          </ion-row>\n          \n          <ion-row>\n            <ion-col style="max-width:35%">\n              <h3 style="margin-top:6px;">\n                 <span class="rating review-star">\n                   <span class="star-icon full">&#x2605;</span>\n                   <span class="star-icon full">&#x2605;</span>\n                   <span class="star-icon full">&#x2605;</span>\n                   <span class="star-icon full">&#x2605;</span>\n                   <span class="star-icon">&#x2605;</span>\n                 </span>\n              </h3>\n            </ion-col>\n            <ion-col style="max-width:45%">\n              <div class="progress-bar" item-right>\n                <span [style.width]="count4Percentage"></span>\n              </div>\n            </ion-col>\n            <ion-col style="max-width:20%">\n              <h4 item-right>\n                <span>{{count4 | number : \'1.0-0\'}}</span>\n              </h4>\n            </ion-col>\n          </ion-row>\n        \n          <ion-row>\n            <ion-col style="max-width:35%">\n              <h3 style="margin-top:6px;">\n                <span class="rating review-star">\n                  <span class="star-icon full">&#x2605;</span>\n                  <span class="star-icon full">&#x2605;</span>\n                  <span class="star-icon full">&#x2605;</span>\n                  <span class="star-icon">&#x2605;</span>\n                  <span class="star-icon">&#x2605;</span>\n                 </span>\n              </h3>\n            </ion-col>\n            <ion-col style="max-width:45%">\n              <div class="progress-bar" item-right>\n                <span [style.width]="count3Percentage"></span>\n              </div>\n            </ion-col>\n            <ion-col style="max-width:20%">\n              <h4 item-right>\n                <span>{{count3 | number : \'1.0-0\'}}</span>\n              </h4>\n            </ion-col>\n          </ion-row>\n        \n          <ion-row>\n            <ion-col style="max-width:35%">\n              <h3 style="margin-top:6px;">\n               <span class="rating review-star">\n                 <span class="star-icon full">&#x2605;</span>\n                 <span class="star-icon full">&#x2605;</span>\n                 <span class="star-icon">&#x2605;</span>\n                 <span class="star-icon">&#x2605;</span>\n                 <span class="star-icon">&#x2605;</span>\n               </span>\n              </h3>\n            </ion-col>\n            <ion-col style="max-width:45%">\n              <div class="progress-bar" item-right>\n                <span [style.width]="count2Percentage"></span>\n              </div>\n            </ion-col>\n            <ion-col style="max-width:20%">\n              <h4 item-right>\n                <span>{{count2 | number : \'1.0-0\'}}</span>\n              </h4>\n            </ion-col>\n          </ion-row>\n        \n          <ion-row>\n            <ion-col style="max-width:35%">\n              <h3 style="margin-top:6px;">\n                <span class="rating review-star">\n                  <span class="star-icon full">&#x2605;</span>\n                  <span class="star-icon">&#x2605;</span>\n                  <span class="star-icon">&#x2605;</span>\n                  <span class="star-icon">&#x2605;</span>\n                  <span class="star-icon">&#x2605;</span>\n                </span>\n              </h3>\n            </ion-col>\n            <ion-col style="max-width:45%">\n              <div class="progress-bar" item-right>\n                <span [style.width]="count1Percentage"></span>\n              </div>\n            </ion-col>\n            <ion-col style="max-width:20%">\n              <h4 item-right>\n                <span>{{count1 | number : \'1.0-0\'}}</span>\n              </h4>\n            </ion-col>\n          </ion-row>\n\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <ion-card>\n      <div class="devider"></div>\n      <ion-card-header tappable>\n        {{"Add a review" | translate}}\n        <!--ion-icon *ngIf="!showAddReview" style="float: right" name="ios-arrow-down" item-right></ion-icon-->\n        <!--ion-icon *ngIf="showAddReview" style="float: right" name="ios-arrow-up" item-right></ion-icon-->\n      </ion-card-header>\n\n      <ion-card-content class="new-review">\n          <ion-label style="margin: 10px 0 6px 26px; font-size:13px">{{form.name}}\n            <span style="margin-right: 10px" text-uppercase>{{"Your Rating" | translate}}</span>\n            <span class="rating">\n              <span tappable (click)="yourRating(1)" class="star-icon" [ngClass]="{full: form.rating >= 1, half: form.rating == 0.5}">&#x2605;</span>\n              <span tappable (click)="yourRating(2)" class="star-icon" [ngClass]="{full: form.rating >= 2, half: form.rating == 1.5}">&#x2605;</span>\n              <span tappable (click)="yourRating(3)" class="star-icon" [ngClass]="{full: form.rating >= 3, half: form.rating == 2.5}">&#x2605;</span>\n              <span tappable (click)="yourRating(4)" class="star-icon" [ngClass]="{full: form.rating >= 4, half: form.rating == 3.5}">&#x2605;</span>\n              <span tappable (click)="yourRating(5)" class="star-icon" [ngClass]="{full: form.rating >= 5, half: form.rating == 4.5}">&#x2605;</span>\n            </span>\n          </ion-label>\n\n          <div class="comment-form">\n            <form #f="ngForm">\n              <ion-list>\n                <ion-item *ngIf="!values.isLoggedIn">\n                  <ion-input required type="text" [(ngModel)]="form.author" name="name" placeholder="{{\'Name\' | translate}}">\n                  </ion-input>\n                </ion-item>\n                <ion-item *ngIf="!values.isLoggedIn">\n                  <ion-input required type="email" [(ngModel)]="form.email" name="email" placeholder="{{\'Email\' | translate}}">\n                  </ion-input>\n                </ion-item>\n                <ion-item class="comment-area">\n                  <textarea rows="2" style="width: 100%; border: none;" required type="text" [(ngModel)]="form.comment" name="comment" placeholder="{{\'Comment\' | translate}}">\n                  </textarea>\n                </ion-item>\n              </ion-list> \n              <div class="login-button">\n                <button style="margin: 16px 16px 0 16px;width: calc(100% - 32px);" ion-button block color="button-color" type="submit" text-uppercase [disabled]="buttonSubmitLogin" (click)="submitComment()">{{"Submit" | translate}}\n                </button> \n              </div>\n            </form>\n          </div>\n\n      </ion-card-content>\n    </ion-card>\n\n\n    <ion-card *ngIf="reviews.length">\n      <div class="devider"></div>\n      <ion-card-header>\n        {{"Feedbacks" | translate}}\n      </ion-card-header>\n\n      <ion-card-content>\n        <div  *ngFor="let item of reviews" class="reviews">\n          <ion-item no-lines>\n            <ion-avatar item-start style="margin:8px">\n              <img src="https://www.gravatar.com/avatar/{{item.avatar}}">\n            </ion-avatar>\n            <h3 style="margin-bottom:6px;font-size:15px">{{item.name}}\n              <span class="rating review-star">\n                <span class="star-icon" [ngClass]="{full: item.rating >= 1, half: item.rating == 0.5}">&#x2605;</span>\n                <span class="star-icon" [ngClass]="{full: item.rating >= 2, half: item.rating == 1.5}">&#x2605;</span>\n                <span class="star-icon" [ngClass]="{full: item.rating >= 3, half: item.rating == 2.5}">&#x2605;</span>\n                <span class="star-icon" [ngClass]="{full: item.rating >= 4, half: item.rating == 3.5}">&#x2605;</span>\n                <span class="star-icon" [ngClass]="{full: item.rating >= 5, half: item.rating == 4.5}">&#x2605;</span>\n              </span>\n            </h3>\n      \n            <h3 style="color:#9e9898;margin-bottom:4px;font-size: 13px">{{item.date_created | date:\'MMM d, y hh:mm a\'}}\n            </h3>\n          </ion-item>\n          <p text-wrap>{{item.review}}</p>\n        </div>\n      </ion-card-content>\n    </ion-card>\n\n  </div> \n</ion-content>\n'/*ion-inline-end:"D:\ionic\deshimall\src\pages\reviews\reviews.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], ReviewPage);
    return ReviewPage;
}());

//# sourceMappingURL=reviews.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Filter = /** @class */ (function () {
    function Filter(nav, navParams, modalCtrl, values, service) {
        this.nav = nav;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.values = values;
        this.service = service;
        this.price = { lower: 0, upper: 1000 };
        localStorage.setItem("pagename", "filter");
    }
    Filter.prototype.ngOnInit = function () {
        if (this.values.filter.min_price) {
            this.price.lower = this.values.filter.min_price;
            this.price.upper = this.values.filter.max_price;
        }
        else
            this.price.upper = this.values.settings.max_price;
    };
    Filter.prototype.dismiss = function () {
        this.values.applyFilter = false;
        this.nav.pop();
    };
    Filter.prototype.applyFilter = function () {
        var _this = this;
        var i = 0;
        this.values.attributes.forEach(function (item, key) {
            if (_this.values.attributes[key].terms.length)
                _this.values.attributes[key].terms.forEach(function (term) {
                    if (term.selected && term.selected == true) {
                        _this.values.filter['attributes' + i] = _this.values.attributes[key].id;
                        _this.values.filter['attribute_term' + i] = term.term_id;
                    }
                    else {
                        _this.values.filter['attributes' + i] = undefined;
                        _this.values.filter['attribute_term' + i] = undefined;
                    }
                    i++;
                });
        });
        this.values.filter.min_price = this.price.lower;
        this.values.filter.max_price = this.price.upper;
        this.values.applyFilter = true;
        this.nav.pop();
    };
    Filter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\deshimall\src\pages\filter\filter.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{"Filter" | translate}}</ion-title>\n    <ion-buttons end>\n        <button ion-button (click)="dismiss()">\n            <ion-icon name="md-close" style="font-size: 20px; margin: 16px;"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-list-header>\n        <ion-label>{{"Price" | translate}}</ion-label>\n    </ion-list-header>\n    <ion-item no-lines>\n        <ion-range dualKnobs="true" pin="true" min="1" max="{{values.settings.max_price}}" [(ngModel)]="price" color="dark">\n            <ion-label range-left>1</ion-label>\n            <ion-label range-right>{{values.settings.max_price}}</ion-label>\n        </ion-range>\n    </ion-item>   \n    <div *ngFor="let attribute of values.attributes | keys">\n        <div *ngIf="attribute.value.terms.length">\n            <ion-list-header>\n                <ion-label>{{attribute.value.name}}</ion-label>\n            </ion-list-header>\n            <ion-list>\n              <ion-item *ngFor="let term of attribute.value.terms" lines="none">\n                <ion-label>{{term.name}} </ion-label>\n                <ion-checkbox [(ngModel)]="term.selected"> </ion-checkbox>\n              </ion-item>\n            </ion-list>  \n        </div>\n    </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar color="button-color" (click)="applyFilter()">\n    <ion-title text-center>{{"Apply" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"D:\ionic\deshimall\src\pages\filter\filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* Service */]])
    ], Filter);
    return Filter;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountForgotten; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountForgotten = /** @class */ (function () {
    function AccountForgotten(nav, service, functions, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.disableSubmit = false;
        localStorage.setItem("pagename", "forgot");
        this.reset = "reset";
        this.loadForgotten = null;
        this.forgottenData = [];
        this.service.passwordResetNonce()
            .then(function (results) { return _this.handleNonce(results); });
    }
    AccountForgotten.prototype.forgotten = function (email) {
        var _this = this;
        if (this.validateForm()) {
            this.reset = "resetting...";
            this.disableSubmit = true;
            this.service.passwordreset(email, this.nonce, this.url)
                .then(function (results) { return _this.handleResult(results, email); });
        }
    };
    AccountForgotten.prototype.validateForm = function () {
        if (this.forgottenData.email == undefined || this.forgottenData.email == "") {
            return false;
        }
        else {
            return true;
        }
    };
    AccountForgotten.prototype.handleNonce = function (results) {
        this.nonce = results.nonce;
        this.url = results.url;
    };
    AccountForgotten.prototype.handleResult = function (results, email) {
        this.reset = "reset";
        this.disableSubmit = false;
        this.functions.showAlert("SUCCESS", "An email with password reset link has been sent to your mail address " + email);
        this.nav.pop();
    };
    AccountForgotten = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\deshimall\src\pages\account\forgotten\forgotten.html"*/'<ion-header>\n  <ion-navbar color="header">\n    <ion-title>{{"ResetPassword" | translate}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="forgotten">\n  <div class="margin">\n    <form #f="ngForm">\n      <ion-item>\n        <ion-label floating>{{"Enteremailaddress"| translate}}\n        </ion-label>\n        <ion-input required type="email" [(ngModel)]="forgottenData.email" name="email">\n        </ion-input>\n      </ion-item>\n      <h2>{{"Forgot PasswordReset" | translate}}\n      </h2>\n      <button ion-button block color="button-color" class="button button-block button-default" [disabled]="disableSubmit" (click)="forgotten(forgottenData.email)">{{reset | translate}}\n      </button>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\deshimall\src\pages\account\forgotten\forgotten.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */]])
    ], AccountForgotten);
    return AccountForgotten;
}());

//# sourceMappingURL=forgotten.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAddressForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditAddressForm = /** @class */ (function () {
    function EditAddressForm(nav, service, params, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.regions = [];
        this.disableSubmit = false;
        localStorage.setItem("pagename", "editaddress");
        this.Save = "Save";
        this.editAddress = params.data;
        console.log(params.data);
        //this.editAddress.shipping = true;
        this.service.getCountry()
            .then(function (results) { return _this.handleContries(results); });
    }
    EditAddressForm.prototype.handleContries = function (results) {
        this.country = results;
        this.billing = this.country.state[this.editAddress.billing.country];
        this.shipping = this.country.state[this.editAddress.shipping.country];
    };
    EditAddressForm.prototype.getBillingRegion = function (countryId) {
        this.billing = this.country.state[countryId];
    };
    EditAddressForm.prototype.getShippingRegion = function (countryId) {
        this.shipping = this.country.state[countryId];
    };
    EditAddressForm.prototype.saveAddress = function () {
        var _this = this;
        this.Save = "Save";
        this.disableSubmit = true;
        if (this.editAddress.shipping) {
            this.editAddress.shipping.first_name = this.editAddress.billing.first_name;
            this.editAddress.shipping.last_name = this.editAddress.billing.last_name;
            this.editAddress.shipping.company = this.editAddress.billing.company;
            this.editAddress.shipping.address_1 = this.editAddress.billing.address_1;
            this.editAddress.shipping.address_2 = this.editAddress.billing.address_2;
            this.editAddress.shipping.city = this.editAddress.billing.city;
            this.editAddress.shipping.country = this.editAddress.billing.country;
            this.editAddress.shipping.state = this.editAddress.billing.state;
            this.editAddress.shipping.postcode = this.editAddress.billing.postcode;
        }
        this.service.saveAddress(this.editAddress)
            .then(function (results) { return _this.handleSaveAddress(results); });
    };
    EditAddressForm.prototype.handleSaveAddress = function (results) {
        this.disableSubmit = false;
        this.Save = "Saving...";
        this.nav.pop();
    };
    EditAddressForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\deshimall\src\pages\account\edit-address-form\edit-address-form.html"*/'<ion-header no-border>\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title>{{"Edit Address" | translate}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="edit-address-form">\n  <div>\n    <ion-list>\n      <ion-item class="side-heading-background">\n        <h2 class="heading-label">{{"Billing Address" | translate}}\n        </h2>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{"First Name" | translate}}\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.billing.first_name" name="first_name">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{"Last Name"| translate}}\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.billing.last_name" name="last_name">\n        </ion-input>\n      </ion-item>\n      <!--ion-item>\n        <ion-label floating>{{"Company" | translate}}\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.billing.company" name="company">\n        </ion-input>\n      </ion-item-->\n      <ion-item>\n        <ion-label floating>{{"Phone" | translate}}\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.billing.phone" name="phone">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{"Email" | translate}}\n        </ion-label>\n        <ion-input required type="email" [(ngModel)]="editAddress.billing.email" name="email">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{"Street Address" | translate}} 1\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.billing.address_1" name="address_1">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{"Street Address" | translate}} 2\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.billing.address_2" name="address_2">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{"City" | translate}}\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.billing.city" name="city">\n        </ion-input>\n      </ion-item>\n      <ion-item *ngIf="country">\n        <ion-label>  \n          {{"Country" | translate}}\n        </ion-label>   \n        <ion-select [(ngModel)]="editAddress.billing.country" (ngModelChange)="getBillingRegion(editAddress.billing.country)" name="country">\n          <div *ngFor="let field of country.country.countries | keys">\n            <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span>\n            </ion-option>\n          </div>\n        </ion-select>\n      </ion-item>\n      <ion-item *ngIf="billing_states">\n        <ion-label>  \n          {{"State" | translate}}\n        </ion-label>   \n        <ion-select [(ngModel)]="editAddress.billing.state" name="state">\n          <div *ngFor="let field of billing_states | keys">\n            <ion-option value="{{field.key}}">{{field.value}}\n            </ion-option>\n          </div>\n        </ion-select>      \n      </ion-item>\n      <ion-item *ngIf="!billing_states">\n        <ion-label floating>{{"Country" | translate}}\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.billing.state" name="state">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{"Postcode" | translate}}\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.billing.postcode" name="postcode">\n        </ion-input>\n      </ion-item>\n    </ion-list>\n  </div>\n  <ion-item class="side-heading-background">\n    <ion-label class="heading-label">{{"Same For Shipping" | translate}}\n    </ion-label>\n    <ion-toggle color="button-color" checked="true" [(ngModel)]="editAddress.shipping_true" name="subscribe">\n    </ion-toggle>\n  </ion-item>\n  <br>\n  <div *ngIf="!editAddress.shipping_true">\n    <ion-list>\n      <ion-item class="side-heading-background">\n        <h2 class="heading-label">{{"Shipping Address" | translate}}\n        </h2>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{"First Name" | translate}}\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping.first_name" name="firstname">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{"Last Name"| translate}}\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping.last_name" name="last_name">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{"Company" | translate}}\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping.company" name="company">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{"Street Address" | translate}} 1\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping.address_1" name="address_1">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{"Street Address" | translate}} 2\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping.address_2" name="address_2">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{"City" | translate}}\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping.city" name="city">\n        </ion-input>\n      </ion-item>\n      <ion-item *ngIf="country">\n        <ion-label>  \n          {{"Country" | translate}}\n        </ion-label>   \n        <ion-select [(ngModel)]="editAddress.shipping.country" (ngModelChange)="getShippingRegion(editAddress.shipping.country)" name="country">\n          <div *ngFor="let field of country.country.countries | keys">\n            <ion-option value="{{field.key}}">{{field.value}}\n            </ion-option>\n          </div>\n        </ion-select>\n      </ion-item>\n      <ion-item *ngIf="shipping_states">\n        <ion-label>  \n          {{"State" | translate}}\n        </ion-label>   \n        <ion-select [(ngModel)]="editAddress.shipping.state" name="state">\n          <div *ngFor="let field of shipping_states | keys">\n            <ion-option value="{{field.key}}">{{field.value}}\n            </ion-option>\n          </div>\n        </ion-select>      \n      </ion-item>\n      <ion-item *ngIf="!shipping_states">\n        <ion-label floating>{{"Country" | translate}}\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping.state" name="state">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{"Postcode" | translate}}\n        </ion-label>\n        <ion-input required type="text" [(ngModel)]="editAddress.shipping.postcode" name="postcode">\n        </ion-input>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div class="margin">\n    <button ion-button block color="button-color" type="submit" [disabled]="disableSubmit" class="button button-block button-default" text-uppercase (click)="saveAddress()">{{Save | translate}}\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\deshimall\src\pages\account\edit-address-form\edit-address-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], EditAddressForm);
    return EditAddressForm;
}());

//# sourceMappingURL=edit-address-form.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { LoadingController } from 'ionic-angular';




var WishlistService = /** @class */ (function () {
    function WishlistService(http, config, values) {
        this.http = http;
        this.config = config;
        this.values = values;
    }
    WishlistService.prototype.loadWishlist = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_wishlist', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.wishlist = data;
                resolve(_this.wishlist);
            });
        });
    };
    WishlistService.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("product_id", id);
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.wishlist = data;
                resolve(_this.wishlist);
            });
        });
    };
    WishlistService.prototype.addToCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("quantity", "1");
        params.append("product_id", id);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', params, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cartData = data;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCartTwo(data.cart);
                resolve(_this.cartData);
            });
        });
    };
    WishlistService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_3__values__["a" /* Values */]])
    ], WishlistService);
    return WishlistService;
}());

//# sourceMappingURL=wishlist-service.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_search_service__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchPage = /** @class */ (function () {
    function SearchPage(nav, service, values, params) {
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.has_more_items = true;
        this.page = 1;
        this.shouldShowCancel = true;
        this.showSearch = true;
        this.filter = {};
        this.count = 10;
        this.offset = 0;
        this.values.filter = {};
        this.options = [];
        this.quantity = "1";
        this.myInput = "";
        localStorage.setItem("pagename", "search");
    }
    SearchPage.prototype.ionViewWillLeave = function () {
        this.showSearch = false;
    };
    SearchPage.prototype.getCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
    };
    SearchPage.prototype.onInput = function ($event) {
        var _this = this;
        this.filter.search = $event.srcElement.value;
        this.values.filter = {};
        this.service.getSearch(this.filter)
            .then(function (results) { return _this.products = results; });
    };
    SearchPage.prototype.onCancel = function ($event) {
        console.log('cancelled');
    };
    SearchPage.prototype.getProduct = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__product_product__["a" /* ProductPage */], item);
    };
    SearchPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.page += 1;
        this.service.getSearch(this.filter)
            .then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    SearchPage.prototype.handleMore = function (results, infiniteScroll) {
        if (results != undefined) {
            for (var i = 0; i < results.length; i++) {
                this.products.push(results[i]);
            }
            ;
        }
        if (results.length == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    SearchPage.prototype.deleteFromCart = function (id) {
        var _this = this;
        this.service.deleteFromCart(id)
            .then(function (results) { return _this.status = results; });
    };
    SearchPage.prototype.addToCart = function (id) {
        var _this = this;
        var text = '{';
        var i;
        for (i = 0; i < this.options.length; i++) {
            var res = this.options[i].split(":");
            text += '"' + res[0] + '":"' + res[1] + '",';
        }
        text += '"product_id":"' + id + '",';
        text += '"quantity":"' + this.quantity + '"}';
        var obj = JSON.parse(text);
        this.service.addToCart(obj)
            .then(function (results) { return _this.updateCart(results); });
    };
    SearchPage.prototype.updateCart = function (a) {
    };
    SearchPage.prototype.setListView = function () {
        this.values.listview = true;
    };
    SearchPage.prototype.setGridView = function () {
        this.values.listview = false;
    };
    SearchPage.prototype.updateToCart = function (id) {
        var _this = this;
        this.service.updateToCart(id)
            .then(function (results) { return _this.status = results; });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\deshimall\src\pages\search\search.html"*/'<ion-header>\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-searchbar\n      *ngIf="showSearch"\n     [(ngModel)]="myInput"\n     [showCancelButton]="shouldShowCancel"\n     (ionInput)="onInput($event)"\n     (ionCancel)="onCancel($event)">\n    </ion-searchbar>\n  </ion-navbar>\n</ion-header>\n<ion-content class="search">\n\n  <div *ngIf="products" class="products-search">     \n      <h2 *ngIf="!products?.length" style="font-size: 15px;text-align: center;margin-top: 30px">No products found!.</h2>\n    <div *ngIf="products?.length">\n      <div *ngIf="values.listview">\n        <ion-item no-lines class="item-name">\n          <ion-label text-uppercase>{{"Products" | translate}}\n          </ion-label>\n          <button ion-button icon-only item-right clear color="button-color" (click)="setGridView()">\n            <ion-icon ios="ios-grid" md="md-grid">\n            </ion-icon>\n          </button>\n        </ion-item>\n        <ion-list *ngIf="products">\n          <div class="item-list" *ngFor="let item of products">\n            <ion-item no-lines class="price-list" >\n              <ion-thumbnail item-left class="stock-list">\n                <a (click)="getProduct(item)">\n                  <img src="{{item.images[0]?.src}}">\n                  <button ion-button color="danger" *ngIf="item.stock_status == \'outofstock\'">{{"OUTOFSTOCK" | translate}}\n                  </button>\n                </a>\n              </ion-thumbnail> \n              <a (click)="getProduct(item)">\n                <div class="product-name-top">\n                  <h2>{{item.name}}\n                  </h2>\n                  <p class="max-lines" [innerHTML]="item.description">\n                  </p>\n                </div>\n                <div class="bottom-left">\n                  <h3 class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.settings.currency:true:\'1.2-2\'}}\n                  </h3>\n                  <h3 class="price-special" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.settings.currency:true:\'1.2-2\'}}\n                  </h3>\n                  <h3 class="price-del" *ngIf="item.sale_price">\n                    <del style="color: red;">{{1*item.regular_price | currency:values.settings.currency:true:\'1.2-2\'}}\n                    </del>\n                  </h3>\n                </div>\n              </a>\n              <div class="bottom-right-button">\n                <button ion-button text-uppercase color="button-color" item-right outline *ngIf="item.stock_status != \'outofstock\' && values.cart[item.id] == undefined || values.cart[item.id] == 0" (click)="addToCart(item.id, item.type)">\n                  {{"Add" | translate}}\n                </button>\n                <button ion-button icon-only  item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="deleteFromCart(item.id)">\n                  <ion-icon ios="ios-remove-circle-outline" md="ios-remove-circle-outline">\n                  </ion-icon>\n                </button>\n                <button ion-button item-right color="button-color" clear *ngIf="values.cart[item.id] >= 1">{{values.cart[item.id]}}\n                </button>\n                <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="updateToCart(item.id)">\n                  <ion-icon ios="ios-add-circle-outline" md="ios-add-circle-outline">\n                  </ion-icon>\n                </button>\n                <button ion-button text-uppercase color="button-color" item-right [disabled]=\'disableSubmit\' clear *ngIf="!item.in_stock && values.cart[item.id] == undefined || values.cart[item.id] == 0" (click)="addToCart(item.id, item.type)">\n                  {{button}}\n                </button>\n              </div>\n            </ion-item>\n          </div>\n        </ion-list>\n      </div>\n      <div *ngIf="!values.listview">\n        <ion-item no-lines class="item-name">\n          <ion-label text-uppercase>{{"Products" | translate}}\n          </ion-label>\n          <button ion-button icon-only item-right clear color="button-color" (click)="setListView()">\n            <ion-icon ios="ios-list-box" md="ios-list-box">\n            </ion-icon>\n          </button>\n        </ion-item>\n        <div class="card-background-page grid" *ngIf="products">\n          <ion-row class="row unlimited-items">\n            <ion-col class="col" *ngFor="let item of products">\n              <ion-card>\n                <ion-card-content class="stock">\n                  <a (click)="getProduct(item)">\n                    <img [style.height.px]="values.dimensions.searchGridViewHeight" src="{{item.images[0]?.src}}">\n                    <button ion-button color="danger" *ngIf="item.stock_status == \'outofstock\'">{{"OUTOFSTOCK" | translate}}\n                    </button>\n                  </a>\n                </ion-card-content>\n                <ion-label class="product-label">{{item.name}}\n                </ion-label>\n                <ion-item no-padding class="price-list">\n                  <h3 class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.settings.currency:true:\'1.2-2\'}}\n                  </h3>\n                  <h3 class="price-special" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.settings.currency:true:\'1.2-2\'}}\n                  </h3>\n                  <h3 class="price-delete" *ngIf="item.sale_price">\n                    <del style="color: red;">{{1*item.regular_price | currency:values.settings.currency:true:\'1.2-2\'}}\n                    </del>\n                  </h3>\n                </ion-item>\n                <div>  \n                  <button ion-button text-uppercase color="button-color" item-right [disabled]=\'disableSubmit\' clear *ngIf="item.stock_status != \'outofstock\' && values.cart[item.id] == undefined || values.cart[item.id] == 0" (click)="addToCart(item.id, item.type)">\n                    {{button}}\n                  </button>\n                  <button ion-button text-uppercase color="button-color" item-right clear *ngIf="item.stock_status != \'outofstock\' && values.cart[item.id] == undefined || values.cart[item.id] == 0" (click)="addToCart(item.id, item.type)">\n                    {{"Add" | translate}}\n                  </button>\n                  <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="deleteFromCart(item.id)">\n                    <ion-icon ios="ios-remove-circle-outline" md="ios-remove-circle-outline">\n                    </ion-icon>\n                  </button>\n                  <button ion-button item-right color="button-color" clear *ngIf="values.cart[item.id] >= 1"  class="item-count-button">{{values.cart[item.id]}}\n                  </button>\n                  <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="updateToCart(item.id)">\n                    <ion-icon ios="ios-add-circle-outline" md="ios-add-circle-outline">\n                    </ion-icon>\n                  </button>\n                </div>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>    \n  </div>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items">\n    <ion-infinite-scroll-content\n       loadingSpinner="crescent"\n       loadingText="{{\'Loading more items..\' | translate}}">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\deshimall\src\pages\search\search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchService = /** @class */ (function () {
    function SearchService(http, config, values) {
        this.http = http;
        this.config = config;
        this.values = values;
    }
    SearchService.prototype.getSearch = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v3/products?', filter), _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    SearchService.prototype.addToCart = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (var param in params) {
                searchParams.set(param, params[param]);
            }
            _this.http.post(_this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', searchParams, _this.config.options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data.cart;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCartTwo(_this.status);
                resolve(_this.status);
            });
        });
    };
    SearchService.prototype.deleteFromCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count -= 1;
                if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity -= 1;
                }
                ;
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] -= 1;
                }
                ;
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        params.set('_wpnonce', this.values.cartNonce);
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    SearchService.prototype.updateToCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count += 1;
                if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity += 1;
                }
                ;
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] += 1;
                }
                ;
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        params.set('_wpnonce', this.values.cartNonce);
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + '/cart/', params)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_4__values__["a" /* Values */]])
    ], SearchService);
    return SearchService;
}());

//# sourceMappingURL=search-service.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Orders; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_details_order_details__ = __webpack_require__(383);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Orders = /** @class */ (function () {
    function Orders(nav, service, values, functions) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.functions = functions;
        this.has_more_items = true;
        this.page = 1;
        localStorage.setItem("pagename", "orders");
        this.filter = {};
        this.filter.page = 1;
        this.count = 10;
        this.offset = 0;
        this.quantity = "1";
        this.filter.customer = this.values.customerId.toString();
        this.service.getOrders(this.filter)
            .then(function (results) { return _this.orders = results; });
    }
    Orders.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.filter.page += 1;
        this.service.getOrders(this.filter)
            .then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    Orders.prototype.handleMore = function (results, infiniteScroll) {
        this.filter.page += 1;
        if (results != undefined) {
            for (var i = 0; i < results.length; i++) {
                this.orders.push(results[i]);
            }
            ;
        }
        if (results.length == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    Orders.prototype.getOrderDetails = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__order_details_order_details__["a" /* OrderDetails */], id);
    };
    Orders.prototype.cancelOrder = function (id) {
        var _this = this;
        this.service.updateOrder({ "status": "cancelled" }, id)
            .then(function (results) { return _this.handleCancelOrder(results); });
    };
    Orders.prototype.handleCancelOrder = function (results) {
        var _this = this;
        this.functions.showAlert("success", "order has been cancelled");
        this.service.getOrders(this.filter)
            .then(function (results) { return _this.orders = results; });
    };
    Orders.prototype.reOrder = function (id) {
        var _this = this;
        this.service.updateOrder({ "status": "pending" }, id)
            .then(function (results) { return _this.handleReOrder(results); });
    };
    Orders.prototype.handleReOrder = function (results) {
        var _this = this;
        this.functions.showAlert("success", "order has been placed successfully");
        this.service.getOrders(this.filter)
            .then(function (results) { return _this.orders = results; });
    };
    Orders = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\deshimall\src\pages\account\orders\orders.html"*/'<ion-header>\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title>{{"LastOrders" | translate}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content text-wrap class="account-order">\n  <ion-spinner *ngIf="!orders" name="crescent">\n  </ion-spinner>\n  <div *ngIf="orders">\n\n    <div class="no-orders">\n    <h4 *ngIf="orders.length == 0" text-center no-lines>\n      <button ion-button full clear text-uppercase color="header">{{"Therearenoorders." | translate}}\n      </button>\n    </h4>\n    </div>\n\n    <div *ngIf="orders.length">\n      <ion-item *ngFor="let item of orders">\n        <h2>\n          <b>{{"OrderNumber" | translate}} :\n          </b> {{item.id}}\n        </h2>\n        <h2>\n          <b>{{"Orderdate" | translate}} :\n          </b> {{item.date_created | date:\'medium\'}}\n        </h2>\n        <h2>\n          <b>{{"Shipto" | translate}} :\n          </b> {{item.shipping.first_name}} {{item.shipping.last_name}}, {{item.shipping.address_1}}, {{item.shipping.address_2}}, {{item.shipping.city}}, {{item.shipping.state}}, {{item.shipping.country}}, {{item.shipping.postcode}}\n        </h2>\n        <h2>\n          <b>{{"Status" | translate}} :\n          </b> {{item.status}}\n        </h2>\n        <!--h2>\n          <b>{{"Quantity" | translate}} :\n          </b> {{item.total_line_items_quantity}}\n        </h2>\n        <h2>\n          <b>{{"SubTotal" | translate}} :\n          </b> {{1*item.subtotal  }}\n        </h2-->\n        <h2>\n          <b>{{"Totals" | translate}} :\n          </b> {{1*item.total  }}\n        </h2>\n        <ion-row class="row-buttons">\n          <ion-col no-padding width-50>\n            <button ion-button icon-left clear no-margin color="button-color" small text-uppercase icon-only class="has-icon icon-only" (click)="getOrderDetails(item.id)">\n              <ion-icon name="ios-eye">\n              </ion-icon>\n              {{"ViewDetails" | translate}} \n            </button>\n          </ion-col>\n          <ion-col no-padding width-50>\n            <button *ngIf="item.status != \'cancelled\'" text-center ion-button icon-left clear no-margin color="button-color" icon-only class="has-icon icon-only" small text-uppercase (click)="cancelOrder(item.id)">		\n              <ion-icon ios="ios-close" md="md-close">\n              </ion-icon>  		\n              {{"Cancel" | translate}} \n            </button>\n            <button *ngIf="item.status == \'cancelled\'" text-center ion-button icon-left clear no-margin color="button-color" icon-only class="has-icon icon-only" small text-uppercase (click)="reOrder(item.id)">\n              <ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle">\n              </ion-icon>		  		\n              {{"Reorder" | translate}} \n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </div> \n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items">\n      <ion-infinite-scroll-content\n      loadingSpinner="crescent"\n      loadingText="{{\'Loading more items..\' | translate}}">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\deshimall\src\pages\account\orders\orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */]])
    ], Orders);
    return Orders;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderDetails = /** @class */ (function () {
    function OrderDetails(nav, service, params, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        localStorage.setItem("pagename", "orderdetails");
        this.id = params.data;
        this.service.getOrder(this.id)
            .then(function (results) { return _this.orderDetails = results; });
    }
    OrderDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\deshimall\src\pages\account\order-details\order-details.html"*/'<ion-header>\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title>{{"OrderInfo" | translate}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="order-details">\n  <ion-spinner *ngIf="!orderDetails" name="crescent">\n  </ion-spinner>\n  <div *ngIf="orderDetails">\n    <ion-item-group>\n      <ion-item-divider>{{"OrderNumber" | translate }}\n      </ion-item-divider>\n      <ion-item no-lines>{{orderDetails.id}}\n      </ion-item>\n      <ion-item-divider>{{"Date" | translate}}\n      </ion-item-divider>\n      <ion-item no-lines>{{orderDetails.date_created | date:\'medium\'}}\n      </ion-item>\n      <ion-item-divider>{{"PaymentMethod" | translate}}\n      </ion-item-divider>\n      <ion-item no-lines>{{orderDetails.payment_method_title}}\n      </ion-item>\n      <ion-item-divider>{{"BillingAddress" | translate}}\n      </ion-item-divider>\n      <ion-item>\n        {{orderDetails.billing.first_name}}\n        {{orderDetails.billing.last_name}},\n        <br>\n        {{orderDetails.billing.email}}\n        <br>\n        {{orderDetails.billing.phone}}\n        <br>\n        {{orderDetails.billing.address_1}},\n        <br>\n        {{orderDetails.billing.address_2}},\n        <br>\n        {{orderDetails.billing.city}}, \n        {{orderDetails.billing.state}}\n        <br>\n        {{orderDetails.billing.postcode}}\n      </ion-item>\n      <!--ion-item-divider>{{"ShippingMethod" | translate}}\n      </ion-item-divider>\n      <ion-item no-lines>{{orderDetails.shipping_methods}}\n      </ion-item-->\n      <ion-item-divider>{{"ShippingAddress" | translate}}\n      </ion-item-divider>\n      <ion-item>\n        {{orderDetails.shipping.first_name}}\n        {{orderDetails.shipping.last_name}},\n        <br>\n        {{orderDetails.shipping.company}}\n        <br>\n        {{orderDetails.shipping.address_1}},\n        <br>\n        {{orderDetails.shipping.address_2}},\n        <br>\n        {{orderDetails.shipping.city}}, \n        {{orderDetails.shipping.state}}\n        <br>\n        {{orderDetails.shipping.country}}\n        <br>\n        {{orderDetails.shipping.postcode}}\n      </ion-item>\n      <ion-item-divider>{{"ProductDetails" | translate}}\n      </ion-item-divider>\n      <ion-item *ngFor="let item of orderDetails.line_items">\n        <h2>{{"ProductName" | translate}} : {{item.name}}\n        </h2>\n        <h2>{{"Price" | translate}} : {{item.price}}\n        </h2>\n        <h2>{{"Quantity" | translate}} : {{item.quantity}}\n        </h2>     \n        <h2>{{"SubTotal" | translate}} : {{1*item.subtotal}}\n        </h2>\n      </ion-item>\n      <ion-item-divider>{{"Totals" | translate}}\n      </ion-item-divider>\n      <ion-item>\n        <ion-row>\n          <ion-col>{{"SubTotal" | translate}}\n          </ion-col>\n          <ion-col text-right>{{(1*orderDetails.total - 1*orderDetails.shipping_total - 1*orderDetails.total_tax) | currency:values.settings.currency:symbol:\'1.2-2\'}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col> {{"ShippingTotal" | translate}}\n          </ion-col>\n          <ion-col text-right>{{1*orderDetails.shipping_total | currency:values.settings.currency:symbol:\'1.2-2\'}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>{{"TaxTotal" | translate}}\n          </ion-col>\n          <ion-col text-right>{{1*orderDetails.total_tax | currency:values.settings.currency:symbol:\'1.2-2\'}}\n          </ion-col>\n        </ion-row>\n        <ion-row text-uppercase>\n          <ion-col>{{"GrandTotal" | translate}}\n          </ion-col>\n          <ion-col text-right>{{1*orderDetails.total | currency:values.settings.currency:symbol:\'1.2-2\'}}\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-item-group>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\ionic\deshimall\src\pages\account\order-details\order-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], OrderDetails);
    return OrderDetails;
}());

//# sourceMappingURL=order-details.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesFeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_config__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the PagesFeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PagesFeedbackPage = /** @class */ (function () {
    function PagesFeedbackPage(navCtrl, navParams, loadingController, alertCtrl, http, config) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.config = config;
        this.mobile = '';
        this.message = '';
        this.feedback = false;
    }
    PagesFeedbackPage.prototype.presentAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: message,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    PagesFeedbackPage.prototype.presentLoading = function (text) {
        this.loader = this.loadingController.create({
            content: text,
        });
        this.loader.present();
    };
    PagesFeedbackPage.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    PagesFeedbackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PagesFeedbackPage');
    };
    PagesFeedbackPage.prototype.send = function () {
        var _this = this;
        var validationmsg = '';
        if (this.mobile == '') {
            validationmsg = validationmsg + "Mobile number is required <br>";
        }
        if (this.message == '') {
            validationmsg = validationmsg + "Message is required <br>";
        }
        if (validationmsg != '') {
            this.presentAlert(validationmsg);
            return;
        }
        this.presentLoading("Please wait");
        var params = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* URLSearchParams */]();
        params.append("mobile", this.mobile);
        params.append("message", this.message);
        return new Promise(function (resolve) {
            _this.http.post(_this.config.url + 'feedback.php', params, _this.config.options).subscribe(function (data) {
                _this.feedback = true;
                _this.dismissLoading();
            }, function (err) {
                _this.feedback = true;
                _this.dismissLoading();
                // alert(JSON.parse(err._body))
            });
        });
    };
    PagesFeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pages-feedback',template:/*ion-inline-start:"D:\ionic\deshimall\src\pages\pages-feedback\pages-feedback.html"*/'<ion-header>\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title>Feedback\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="account-login margin">\n  \n    <div>\n      <img src="assets/image/logo.png">\n    </div>\n\n      <ion-list *ngIf="!feedback">\n        <ion-item>\n          <!--ion-label floating>{{"username" | translate}}</ion-label-->\n          <ion-input required type="tel" maxlength="10" [(ngModel)]="mobile" name="firstname" placeholder="Enter Mobile Number">\n          </ion-input>\n        </ion-item>\n        <ion-item style="padding-top: 10px;">\n        \n          <ion-textarea rows="6" [(ngModel)]="message"  cols="20" placeholder="Enter Feedback here..."></ion-textarea>\n\n\n        </ion-item>\n\n        <div class="margin"> \n          <button ion-button block color="button-color" type="submit" class="button button-block button-default" text-uppercase [disabled]="disableSubmit" (click)="send()">Send\n          </button>\n   \n        </div>\n  \n        \n     \n\n\n      </ion-list>\n  \n  \n      <ion-list *ngIf="feedback">\n        <ion-item>\n          <p style="text-align: center;">\n      Thanks for submitting your feedback ,we will reach you soon .\n    </p>\n        </ion-item>\n      </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\ionic\deshimall\src\pages\pages-feedback\pages-feedback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__providers_service_config__["a" /* Config */]])
    ], PagesFeedbackPage);
    return PagesFeedbackPage;
}());

//# sourceMappingURL=pages-feedback.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(392);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_products__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_product__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__post_post__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__category_category__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_users_pages_users__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var Home = /** @class */ (function () {
    function Home(loadingController, iab, toastCtrl, nav, service, values) {
        this.loadingController = loadingController;
        this.iab = iab;
        this.toastCtrl = toastCtrl;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.has_more_items = true;
        this.loading = true;
        this.mySlideOptions = {
            initialSlide: 1,
            loop: true,
            autoplay: 5800,
            pager: true
        };
        this.items = [];
        this.options = [];
        this.service.getProducts();
        localStorage.setItem("pagename", "home");
    }
    Home.prototype.ionViewWillEnter = function () {
        localStorage.setItem("pagename", "home");
        //alert(localStorage.getItem("usermobile"));
    };
    Home.prototype.presentLoading = function (text) {
        this.loader = this.loadingController.create({
            content: text,
        });
        this.loader.present();
    };
    Home.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    Home.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.service.load().then(function (results) {
            _this.handleService(results);
            refresher.complete();
        });
    };
    Home.prototype.handleService = function (results) {
        // 
    };
    Home.prototype.getCategory = function (id, slug, name) {
        this.items.id = id;
        this.items.slug = slug;
        this.items.name = name;
        this.items.categories = this.service.categories.filter(function (item) { return item.parent === parseInt(id); });
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__products_products__["a" /* ProductsPage */], this.items);
    };
    Home.prototype.presentToastLoginAlert = function () {
        var toast = this.toastCtrl.create({
            message: 'You must login to add item to wishlist',
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
    };
    Home.prototype.addToWishlist = function (id) {
        var _this = this;
        if (this.values.isLoggedIn) {
            this.values.wishlistId[id] = true;
            this.service.addToWishlist(id).then(function (results) { return _this.update(results, id); });
        }
        else {
            this.presentToastLoginAlert();
        }
    };
    Home.prototype.update = function (results, id) {
        if (results.success == "Success") {
            this.values.wishlistId[id] = true;
        }
        else { }
    };
    Home.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id).then(function (results) { return _this.updateWish(results, id); });
    };
    Home.prototype.updateWish = function (results, id) {
        if (results.status == "success") {
            this.values.wishlistId[id] = false;
        }
    };
    Home.prototype.getCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
    };
    Home.prototype.getSearch = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */]);
    };
    Home.prototype.getId = function () {
        var i;
        if (this.options.length >= 1)
            var resa = this.options[0].split(":");
        if (this.options.length >= 2)
            var resb = this.options[1].split(":");
        if (this.options.length >= 1)
            for (i = 0; i < this.product.product.variations.length; i++) {
                if (this.product.product.variations[i].attributes[0].option == resa[1]) {
                    if (this.options.length == 1) {
                        break;
                    }
                    else if (this.product.product.variations[i].attributes[1].option == resb[1]) {
                        break;
                    }
                }
            }
    };
    Home.prototype.goto = function (data) {
        var _this = this;
        if (data.description == "product") {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_7__product_product__["a" /* ProductPage */], data.url);
        }
        else if (data.description == "category") {
            this.items.id = data.url;
            this.items.name = data.title;
            this.items.categories = this.service.categories.filter(function (item) { return item.parent === parseInt(_this.items.id); });
            this.nav.push(__WEBPACK_IMPORTED_MODULE_5__products_products__["a" /* ProductsPage */], this.items);
        }
        else if (data.description == "post") {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_8__post_post__["a" /* Post */], data.url);
        }
    };
    Home.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.service.loadMore().then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    Home.prototype.handleMore = function (results, infiniteScroll) {
        if (!results) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    Home.prototype.getProduct = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__product_product__["a" /* ProductPage */], item);
    };
    Home.prototype.hideLoading = function () {
        this.loading = false;
    };
    Home.prototype.getSubCategories = function (id) {
        var results = this.service.categories.filter(function (item) { return item.parent === parseInt(id); });
        return results;
    };
    Home.prototype.openpage = function (page) {
        if (page == "Home") {
            location.reload(true);
        }
        if (page == "quick") {
            //var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
            //window.open("https://www.homedelivery4u.com/quick-order","_blank");
            window.open("https://www.homedelivery4u.com/quick-order", '_system', 'location=yes');
            // this.presentLoading("Please Wait");
            // const target = "_blank";
            // var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
            // let browser = this.iab.create("https://www.homedelivery4u.com/quick-order", target, options);
            // browser.on('loadstart').subscribe(data => {
            //     var browserActive = false;
            //   //  alert(data.url);
            //     if (data.url.indexOf('quick-order') != -1 && !browserActive) {
            //         browserActive = true;
            //         browser.show();
            //         this.dismissLoading();
            //     } 
            // });
            // browser.on('exit').subscribe(data => {
            //   //  this.presentLoading("Please Wait");
            //     this.ionViewWillEnter();
            //     this.dismissLoading();
            // });
            // this.dismissLoading();
        }
        if (page == "CartPage") {
            this.nav.push(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
        }
        if (page == "PagesUsers") {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_users_pages_users__["a" /* PagesUsers */]);
        }
        if (page == "CategoryPage") {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__category_category__["a" /* Category */]);
        }
    };
    Home = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\deshimall\src\pages\home\home.html"*/'\n<ion-header class="home-header">\n   <ion-navbar color="header">\n      <button ion-button menuToggle>\n         <ion-icon name="menu">\n         </ion-icon>\n      </button>\n      <ion-title><img src="{{values.avatar}}"> \n      </ion-title>\n      <ion-buttons end>\n         <button ion-button icon-only (click)="getSearch()">\n            <ion-icon color="icon-color" ios="ios-search" md="md-search">\n            </ion-icon>\n         </button>\n         <button ion-button icon-only class="has-icon icon-only has-badge" (click)="getCart()">\n            <ion-icon color="icon-color" name="md-basket">\n            </ion-icon>\n            <ion-badge class="badge badge-light" *ngIf="values.count != 0">{{values.count}}\n            </ion-badge>\n         </button>\n      </ion-buttons>\n   </ion-navbar>\n</ion-header>\n<ion-content class="home">\n   <ion-refresher *ngIf="values.settings.pull_to_refresh == \'1\'" (ionRefresh)="doRefresh($event)">\n   <ion-refresher-content></ion-refresher-content>\n   </ion-refresher>\n   <ion-fab bottom right *ngIf="values.settings.enable_home_chat == \'1\'">\n      <a href="https://wa.me/{{values.settings.whatsapp_number}}">\n         <button ion-fab color="secondary" mini>\n            <ion-icon name="chatbubbles"></ion-icon>\n         </button>\n      </a>\n   </ion-fab>\n   <div class="spinner center-spinner">\n      <ion-spinner *ngIf="loading" name="crescent"> </ion-spinner>\n   </div>\n   <div *ngFor="let children of service?.blocks" hideWhen="loading" class="blocks">\n   <div *ngIf="children.children?.length">  \n      <div *ngIf="children.block_type == \'banner_block\'" [style.background-color]="children.bg_color" [style.margin]="children.margin" class="banner_block">\n      <div class="{{children.header_align}}" [style.color]="children.title_color">{{children.title}}</div>\n      <!-- Banner Slider -->\n      <div *ngIf="children.children?.length && children.style == \'slider\'">\n         <ion-slides pager="true" loop="true" autoplay="5800">\n            <ion-slide *ngFor="let image of children.children"> \n               <img src="{{image.image}}" (click)="goto(image)" (load)="hideLoading()" [style.border-radius]="children.border_radius">\n            </ion-slide>\n         </ion-slides>\n      </div>\n      <!-- Banner Scroll -->\n      <div *ngIf="children.children?.length && children.style == \'scroll\'" [style.padding]="children.padding" [ngClass]="{\'floating-header\': children.header_align == \'left_floating\'}" class="floating-header banner-scroll">\n      <img class="banner" tappable *ngFor="let image of children.children" (load)="hideLoading()" src="{{image.image}}" (click)="goto(image)" [style.border-radius]="children.border_radius" [style.width.%]="children.child_width"> \n        </div>\n   <!-- Banner Grid -->\n   <div *ngIf="children.children?.length && children.style == \'grid\'" class="banner-grid" [style.padding]="children.padding">\n   <ion-row class="row unlimited-items">\n      <ion-col *ngFor="let image of children.children" (load)="hideLoading()" [style.width.%]="children.child_width">\n      <img src="{{image.image}}" (click)="goto(image)" [style.border-radius]="children.border_radius" class="{{children.card_style}}"> \n      </ion-col>\n   </ion-row>\n   </div>  \n   </div>\n   </div>\n   <div *ngIf="children.products?.length"> \n   <div *ngIf="children.block_type == \'product_block\'" [style.background-color]="children.bg_color" [style.margin]="children.margin" [style.padding]="children.padding" class="product-block">\n   <div *ngIf="children.products" class="{{children.header_align}}" [style.color]="children.title_color">{{children.title}}</div>\n   <!-- Products Scroll -->\n   <div *ngIf="children.products && children.style == \'scroll\'" class="product-scroll">\n      <div class="scroller" [ngClass]="{\'floating-header\': children.header_align == \'left_floating\'}">\n         <a *ngFor="let item of children.products" [style.width.%]="children.child_width">\n         <ion-card>\n            <ion-card-content (click)="getProduct(item)"> <img [style.border-radius]="children.border_radius" src="{{item.images[0]?.src}}" /> </ion-card-content>\n            <h5 *ngIf="item.title" style="color:#0062bd">{{item.title}} </h5>\n            <h5 *ngIf="item.name" style="color:#0062bd">{{item.name}} </h5>\n            <ion-label >\n               <span style="color: red;" class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.settings.currency:symbol:\'1.2-2\' }}\n               </span> <span style="color: red;" class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.settings.currency:symbol:\'1.2-2\' }}\n               </span> <span *ngIf="item.sale_price" style="color: red;">\n               <del style="color: red;">{{1*item.regular_price | currency:values.settings.currency:symbol:\'1.2-2\' }}\n               </del>\n               </span>\n            </ion-label>\n         </ion-card>\n         </a>\n      </div>\n   </div>\n   <!-- Products  Grid-->\n   <div class="product-grid" *ngIf="children.products && children.style == \'grid\'">\n      <ion-row class="row unlimited-items">\n         <ion-col class="col" *ngFor="let item of children.products" [style.padding]="children.padding">\n         <ion-card>\n            <ion-card-content>\n               <img tappable src="{{item.images[0].src}}" (click)="getProduct(item)"> \n               <button ion-button color="danger" class="stock" *ngIf="item.stock_status == \'outofstock\'">{{"No Stock" | translate}}\n               </button>\n               <ion-icon name="md-heart" class="wishlist-button-grid1" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n               <ion-icon name="md-heart-outline" class="wishlist-button-grid2" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>\n               <div *ngIf="item.stock_status == \'instock\'">\n                  <button ion-button class="offer" *ngIf="((item.regular_price - item.price) /item.regular_price*100) >= \'1\'">{{(item.regular_price - item.price) /item.regular_price*100 | number : \'1.0-0\'}}%</button>\n               </div>\n            </ion-card-content>\n            <div tappable (click)="getProduct(item)" class="card-name">\n               <ion-label *ngIf="item.title" style="color:#0062bd">{{item.title}} </ion-label>\n               <ion-label *ngIf="item.name" style="color:#0062bd">{{item.name}} </ion-label>\n            </div>\n            <ion-label> \n               <span class="price-regular" style="color: red;"   *ngIf="!item.sale_price">{{1*item.price | currency:values.settings.currency:symbol:\'1.2-2\'}}\n               </span> \n               <span class="price-regular" style="color: red;"  *ngIf="item.sale_price">{{1*item.sale_price | currency:values.settings.currency:symbol:\'1.2-2\'}}\n               </span>\n               <span class="price-delete" style="color: red;"  *ngIf="item.sale_price">\n               <del style="color: red;" >{{1*item.regular_price | currency:values.settings.currency:symbol:\'1.2-2\'}}\n               </del>\n               </span>  \n            </ion-label>\n         </ion-card>\n         </ion-col>\n      </ion-row>\n   </div>\n   </div>\n   <!--flash sale-->\n   <div *ngIf="children.block_type == \'flash_sale_block\' && !children.hide" [style.background-color]="children.bg_color" [style.margin]="children.margin" [style.padding]="children.padding" class="product-block flash_sale">\n   <div *ngIf="children.products" class="{{children.header_align}}" [style.color]="children.title_color">\n   <ion-item no-lines class="flash-item-name">\n      <h2 [style.color]="children.title_color">\n         <ion-icon name="md-flash" style="margin-right: 6px;font-size: 18px;"></ion-icon>\n         {{children.title}}\n      </h2>\n      <!--h4 [style.color]="children.title_color" style="filter: brightness(100%);">Ends in</h4-->\n      <div style="text-align: center;">\n         <h3 class=\'day\'><span>{{children.days}}</span></h3>\n         : \n         <h3 class=\'day\'><span>{{children.hours}}</span></h3>\n         : \n         <h3 class=\'day\'><span>{{children.minutes}}</span></h3>\n         : \n         <h3 class=\'day\'><span>{{children.seconds}}</span></h3>\n      </div>\n   </ion-item>\n   </div>\n   <!-- Products Scroll -->\n   <div *ngIf="children.products && children.style == \'scroll\'" class="product-scroll">\n      <div class="scroller" [ngClass]="{\'floating-header\': children.header_align == \'left_floating\'}">\n         <a *ngFor="let item of children.products" [style.width.%]="children.child_width">\n         <ion-card>\n            <ion-card-content (click)="getProduct(item)"> <img  [style.border-radius]="children.border_radius" src="{{item.images[0]?.src}}" /> </ion-card-content>\n            <h5 *ngIf="item.title" style="color:#0062bd">{{item.title}} </h5>\n            <h5 *ngIf="item.name" style="color:#0062bd">{{item.name}} </h5>\n            <ion-label>\n               <span class="price-regular" style="color: red;"  *ngIf="!item.sale_price">{{1*item.price | currency:values.settings.currency:symbol:\'1.2-2\' }}\n               </span> <span style="color: red;"  class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.settings.currency:symbol:\'1.2-2\' }}\n               </span> <span style="color: red;"  *ngIf="item.sale_price">\n               <del style="color: red;" >{{1*item.regular_price | currency:values.settings.currency:symbol:\'1.2-2\' }}\n               </del>\n               </span>\n            </ion-label>\n         </ion-card>\n         </a>\n      </div>\n   </div>\n   <!-- Products  Grid-->\n   <div class="product-grid" *ngIf="children.products && children.style == \'grid\'">\n      <ion-row class="row unlimited-items">\n         <ion-col class="col" *ngFor="let item of children.products" [style.padding]="children.padding">\n         <ion-card>\n            <ion-card-content>\n               <img tappable src="{{item.images[0].src}}" (click)="getProduct(item)"> \n               <button ion-button color="danger" class="stock" *ngIf="item.stock_status == \'outofstock\'">{{"No Stock" | translate}}\n               </button>\n               <ion-icon name="md-heart" class="wishlist-button-grid1" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n               <ion-icon name="md-heart-outline" class="wishlist-button-grid2" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>\n               <div *ngIf="item.stock_status == \'instock\'">\n                  <button ion-button class="offer" *ngIf="((item.regular_price - item.price) /item.regular_price*100) >= \'1\'">{{(item.regular_price - item.price) /item.regular_price*100 | number : \'1.0-0\'}}%</button>\n               </div>\n            </ion-card-content>\n            <div tappable (click)="getProduct(item)" class="card-name">\n               <ion-label *ngIf="item.title" style="color:#0062bd">{{item.title}} </ion-label>\n               <ion-label *ngIf="item.name" style="color:#0062bd">{{item.name}} </ion-label>\n            </div>\n            <ion-label> \n               <span class="price-regular" style="color: red;"  *ngIf="!item.sale_price">{{1*item.price | currency:values.settings.currency:symbol:\'1.2-2\'}}\n               </span> \n               <span class="price-regular" style="color: red;"  *ngIf="item.sale_price">{{1*item.sale_price | currency:values.settings.currency:symbol:\'1.2-2\'}}\n               </span>\n               <span class="price-delete" style="color: red;"  *ngIf="item.sale_price">\n               <del style="color: red;" >{{1*item.regular_price | currency:values.settings.currency:symbol:\'1.2-2\'}}\n               </del>\n               </span>  \n            </ion-label>\n         </ion-card>\n         </ion-col>\n      </ion-row>\n   </div>\n   </div>\n   </div>\n   <div *ngIf="children.block_type == \'category_block\' && this.service.categories" [style.background-color]="children.bg_color" [style.margin]="children.margin" [style.padding]="children.padding" class="category">\n   <div *ngIf="service?.categories" class="{{children.header_align}}" [style.color]="children.title_color">{{children.title}}</div>\n   <!-- Category Scroll -->\n   <div *ngIf="service?.categories && children.style == \'scroll\'" class="category-slider-scroll">\n      <div class="scrollmenu2" [ngClass]="{\'floating-header\': children.header_align == \'left_floating\'}">\n         <a *ngFor="let item of getSubCategories(children.link_id)" class="{{item.slug}}" [style.width.%]="children.child_width">\n         <img *ngIf="item.image?.src" (load)="hideLoading()" [style.border-radius]="children.border_radius" src="{{item.image.src}}" (click)="getCategory(item.id, item.slug, item.name, item.image)"/>\n         <h5 *ngIf="item.image?.src" (click)="getCategory(item.id, item.slug, item.name, item.image)" [innerHTML]="item.name" [style.color]="children.title_color"></h5>\n         <div *ngIf="!item.image?.src" class="no-image">\n            <h5 (click)="getCategory(item.id, item.slug, item.name, item.image)" [innerHTML]="item.name" [style.color]="children.title_color"></h5>\n         </div>\n         </a>\n      </div>\n   </div>\n   <!-- Category Grid -->\n   <div *ngIf="service?.categories && children.style == \'grid\'" class="category-slider-grid">\n      <ion-row class="row unlimited-items">\n         <ion-col class="col {{item.slug}}" *ngFor="let item of getSubCategories(children.link_id)" [style.width.%]="children.child_width">\n         <div (click)="getCategory(item.id, item.slug, item.name, item.image)">\n            <ion-card>\n               <ion-card-content> \n                  <img *ngIf="item.image?.src" (load)="hideLoading()" [style.border-radius]="children.border_radius" src="{{item.image.src}}"/> \n               </ion-card-content>\n               <div text-center>\n                  <ion-label text-uppercase [innerHTML]="item.name" [style.color]="children.title_color"></ion-label>\n               </div>\n            </ion-card>\n         </div>\n         </ion-col>\n      </ion-row>\n   </div>\n   </div>\n   </div>\n   <div *ngIf="service.featuredProduct?.length" class="Featured-products">\n      <div class="block-title" *ngIf="service.featuredProduct" no-lines class="featured-item-name"> {{"Featured Products" | translate}} <span class="view-all" item-right (click)="viewAllFeatured()">{{"View All" | translate}}</span> </div>\n      <div class="scroll-featured-products">\n         <a *ngFor="let item of service.featuredProduct">\n            <ion-card>\n               <ion-card-content (click)="getProduct(item)"> <img src="{{item.images[0].src}}" (load)="hideLoading()" /> </ion-card-content>\n               <h5 *ngIf="item.title" style="color:#0062bd">{{item.title}} </h5>\n               <h5 *ngIf="item.name" style="color:#0062bd">{{item.name}} </h5>\n               <ion-label> <span class="price-regular" style="color: red;"  *ngIf="!item.sale_price">{{1*item.price | currency:values.settings.currency:true:\'1.2-2\'}}\n                  </span> <span class="price-regular" style="color: red;"  *ngIf="item.sale_price">{{1*item.sale_price | currency:values.settings.currency:true:\'1.2-2\'}}\n                  </span> <span style="color: red;"  *ngIf="item.sale_price">\n                  <del style="color: red;" >{{1*item.regular_price | currency:values.settings.currency:true:\'1.2-2\'}}\n                  </del>\n                  </span> \n               </ion-label>\n            </ion-card>\n         </a>\n      </div>\n   </div>\n   <div *ngIf="service.onSale?.length" class="Featured-products">\n      <div class="block-title" *ngIf="service.onSale" no-lines class="featured-item-name"> {{"Best Offers" | translate}} <span class="view-all" item-right (click)="viewAllOffers()">{{"View All" | translate}}</span> </div>\n      <div class="scroll-featured-products">\n         <a *ngFor="let item of service.onSale">\n            <ion-card>\n               <ion-card-content (click)="getProduct(item)"> <img src="{{item.images[0].src}}" (load)="hideLoading()" /> </ion-card-content>\n               <h5 *ngIf="item.title" style="color:#0062bd">{{item.title}} </h5>\n               <h5 *ngIf="item.name" style="color:#0062bd">{{item.name}} </h5>\n               <ion-label> <span style="color: red;"  class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.settings.currency:true:\'1.2-2\'}}\n                  </span> <span style="color: red;"  class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.settings.currency:true:\'1.2-2\'}}\n                  </span> <span style="color: red;"  *ngIf="item.sale_price">\n                  <del style="color: red;" >{{1*item.regular_price | currency:values.settings.currency:true:\'1.2-2\'}}\n                  </del>\n                  </span> \n               </ion-label>\n            </ion-card>\n         </a>\n      </div>\n   </div>\n   <div class="spinner">\n      <ion-spinner *ngIf="!service.products && service?.banners" name="crescent"> </ion-spinner>\n   </div>\n   <div *ngIf="service.products" class="products-listing">\n      <!--ion-item no-lines class="item-name">\n         <ion-label>{{"Latest Products" | translate}} </ion-label>\n         </ion-item-->\n      <div class="grid">\n         <ion-row class="row unlimited-items">\n            <ion-col class="col" *ngFor="let item of service.products">\n               <ion-card>\n                  <ion-card-content>\n                     <img tappable src="{{item?.images[0]?.src}}" (load)="hideLoading()" (click)="getProduct(item)" [style.height.px]="values.dimensions.homeGridViewHeight">\n                     <button ion-button color="danger" class="stock" *ngIf="item.stock_status == \'outofstock\'">{{"No Stock" | translate}}\n                     </button>\n                     <ion-icon name="md-heart" class="wishlist-button-grid1" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n                     <ion-icon name="md-heart-outline" class="wishlist-button-grid2" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>\n                     <div *ngIf="item.stock_status == \'instock\'">\n                        <button ion-button class="offer"  *ngIf="((item.regular_price - item.price) /item.regular_price*100) >= \'1\'">{{(item.regular_price - item.price) /item.regular_price*100 | number : \'1.0-0\'}}%</button>\n                     </div>\n                  </ion-card-content>\n                  <div tappable (click)="getProduct(item)" class="card-name">\n                     <ion-label *ngIf="item.title" style="color:#0062bd">{{item.title}} </ion-label>\n                     <ion-label *ngIf="item.name" style="color:#0062bd">{{item.name}} </ion-label>\n                  </div>\n                  <ion-label> \n                     <span class="price-regular" style="color: red;"  *ngIf="!item.sale_price">{{1*item.price | currency:values.settings.currency:symbol:\'1.2-2\'}}\n                     </span> \n                     <span class="price-regular" style="color: red;"  *ngIf="item.sale_price">{{1*item.sale_price | currency:values.settings.currency:symbol:\'1.2-2\'}}\n                     </span>\n                     <span class="price-delete" style="color: red;"  *ngIf="item.sale_price">\n                     <del style="color: red;" >{{1*item.regular_price | currency:values.settings.currency:symbol:\'1.2-2\'}}\n                     </del>\n                     </span>  \n                  </ion-label>\n               </ion-card>\n            </ion-col>\n         </ion-row>\n      </div>\n      <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="service.has_more_items">\n      <ion-infinite-scroll-content loadingSpinner="crescent" loadingText="{{\'Loading More Items\' | translate}}"> </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n   </div>\n</ion-content>\n<ion-footer>\n  \n   <ion-grid no-padding>\n      <ion-row align-items-center>\n          <ion-col  text-center>\n            \n               <ion-icon class="iconsactive"  ios="ios-home" md="md-home"></ion-icon>\n            \n           \n          </ion-col>\n          <ion-col (click)="openpage(\'CategoryPage\')"   text-center>\n             \n                  <ion-icon class="icons" name="md-apps"></ion-icon>\n                \n           \n             \n          </ion-col>\n\n\n\n\n          <ion-col   (click)="openpage(\'PagesUsers\')"  text-center>\n          \n            <ion-icon class="icons" ios="ios-people" md="md-people"></ion-icon>\n\n\n           \n        </ion-col>\n\n\n       \n        <ion-col (click)="openpage(\'CartPage\')"  text-center>\n     \n            <ion-icon class="icons" ios="ios-cart" md="md-cart"></ion-icon>\n          \n     \n        \n     </ion-col>\n\n     \n\n\n\n      </ion-row>\n  <ion-row align-items-center>\n          <ion-col text-center>\n          <label class="iconlabel">Home</label>\n           \n          </ion-col>\n          <ion-col text-center>\n            <label class="iconlabel">Categories</label>\n             \n          </ion-col>\n\n\n          \n\n          <ion-col text-center>\n            <label class="iconlabel">Account</label>\n             \n          </ion-col>\n         \n\n          <ion-col    text-center>\n            <label class="iconlabel">Cart</label>\n             \n          </ion-col> \n          \n         \n\n\n\n\n\n      </ion-row>\n\n\n\n\n  </ion-grid>\n </ion-footer>'/*ion-inline-end:"D:\ionic\deshimall\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], Home);
    return Home;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_account_address_address__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_account_edit_address_form_edit_address_form__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_account_forgotten_forgotten__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_account_login_login__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_post_post__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_account_order_details_order_details__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_account_orders_orders__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_account_register_register__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_account_wishlist_wishlist__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_filter_filter__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_cart_cart__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_checkout_billing_address_form_billing_address_form__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_checkout_order_summary_order_summary__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_checkout_terms_condition_terms_condition__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_product_product__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_products_products__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_search_search__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_reviews_reviews__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_pages_users_pages_users__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_category_category__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_wallet_wallet__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_pages_feedback_pages_feedback__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_in_app_browser__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_native_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_service_cart_service__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_service_wishlist_service__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_service_category_service__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_service_checkout_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_service_config__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_service_functions__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_service_product_service__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_service_search_service__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_service_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_pipe_pipe__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_photo_viewer__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_call_number__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_email_composer__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_app_rate__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_social_sharing__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__angular_common_http__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ngx_translate_core__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ngx_translate_http_loader__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_onesignal__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ionic_native_http__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_facebook__ = __webpack_require__(376);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























/*------------------------Providers----------------------------------*/




























function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_50__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* Home */],
                __WEBPACK_IMPORTED_MODULE_4__pages_account_address_address__["a" /* Address */],
                __WEBPACK_IMPORTED_MODULE_5__pages_account_edit_address_form_edit_address_form__["a" /* EditAddressForm */],
                __WEBPACK_IMPORTED_MODULE_6__pages_account_forgotten_forgotten__["a" /* AccountForgotten */],
                __WEBPACK_IMPORTED_MODULE_7__pages_account_login_login__["a" /* AccountLogin */],
                __WEBPACK_IMPORTED_MODULE_9__pages_account_order_details_order_details__["a" /* OrderDetails */],
                __WEBPACK_IMPORTED_MODULE_10__pages_account_orders_orders__["a" /* Orders */],
                __WEBPACK_IMPORTED_MODULE_8__pages_post_post__["a" /* Post */],
                __WEBPACK_IMPORTED_MODULE_11__pages_account_register_register__["a" /* AccountRegister */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_wishlist_wishlist__["a" /* WishlistPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_pages_feedback_pages_feedback__["a" /* PagesFeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_checkout_billing_address_form_billing_address_form__["a" /* BillingAddressForm */],
                __WEBPACK_IMPORTED_MODULE_16__pages_checkout_order_summary_order_summary__["a" /* OrderSummary */],
                __WEBPACK_IMPORTED_MODULE_21__pages_reviews_reviews__["a" /* ReviewPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_checkout_terms_condition_terms_condition__["a" /* TermsCondition */],
                __WEBPACK_IMPORTED_MODULE_18__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_filter_filter__["a" /* Filter */],
                __WEBPACK_IMPORTED_MODULE_41__providers_pipe_pipe__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_22__pages_pages_users_pages_users__["a" /* PagesUsers */],
                __WEBPACK_IMPORTED_MODULE_23__pages_category_category__["a" /* Category */],
                __WEBPACK_IMPORTED_MODULE_24__pages_wallet_wallet__["a" /* Wallet */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_30__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_47__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_48__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_49__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_49__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_47__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* Home */],
                __WEBPACK_IMPORTED_MODULE_4__pages_account_address_address__["a" /* Address */],
                __WEBPACK_IMPORTED_MODULE_5__pages_account_edit_address_form_edit_address_form__["a" /* EditAddressForm */],
                __WEBPACK_IMPORTED_MODULE_6__pages_account_forgotten_forgotten__["a" /* AccountForgotten */],
                __WEBPACK_IMPORTED_MODULE_7__pages_account_login_login__["a" /* AccountLogin */],
                __WEBPACK_IMPORTED_MODULE_9__pages_account_order_details_order_details__["a" /* OrderDetails */],
                __WEBPACK_IMPORTED_MODULE_10__pages_account_orders_orders__["a" /* Orders */],
                __WEBPACK_IMPORTED_MODULE_8__pages_post_post__["a" /* Post */],
                __WEBPACK_IMPORTED_MODULE_11__pages_account_register_register__["a" /* AccountRegister */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_wishlist_wishlist__["a" /* WishlistPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_pages_feedback_pages_feedback__["a" /* PagesFeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_reviews_reviews__["a" /* ReviewPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_checkout_billing_address_form_billing_address_form__["a" /* BillingAddressForm */],
                __WEBPACK_IMPORTED_MODULE_16__pages_checkout_order_summary_order_summary__["a" /* OrderSummary */],
                __WEBPACK_IMPORTED_MODULE_17__pages_checkout_terms_condition_terms_condition__["a" /* TermsCondition */],
                __WEBPACK_IMPORTED_MODULE_18__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_filter_filter__["a" /* Filter */],
                __WEBPACK_IMPORTED_MODULE_20__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_pages_users_pages_users__["a" /* PagesUsers */],
                __WEBPACK_IMPORTED_MODULE_23__pages_category_category__["a" /* Category */],
                __WEBPACK_IMPORTED_MODULE_24__pages_wallet_wallet__["a" /* Wallet */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_31__providers_service_cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_32__providers_service_wishlist_service__["a" /* WishlistService */],
                __WEBPACK_IMPORTED_MODULE_33__providers_service_category_service__["a" /* CategoryService */],
                __WEBPACK_IMPORTED_MODULE_34__providers_service_checkout_service__["a" /* CheckoutService */],
                __WEBPACK_IMPORTED_MODULE_35__providers_service_config__["a" /* Config */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                __WEBPACK_IMPORTED_MODULE_36__providers_service_functions__["a" /* Functions */],
                __WEBPACK_IMPORTED_MODULE_37__providers_service_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_38__providers_service_search_service__["a" /* SearchService */],
                __WEBPACK_IMPORTED_MODULE_39__providers_service_service__["a" /* Service */],
                __WEBPACK_IMPORTED_MODULE_40__providers_service_values__["a" /* Values */],
                __WEBPACK_IMPORTED_MODULE_51__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_46__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_app_rate__["a" /* AppRate */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_52__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_53__ionic_native_facebook__["a" /* Facebook */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_cart_service__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkout_billing_address_form_billing_address_form__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CartPage = /** @class */ (function () {
    function CartPage(nav, service, values, params, functions) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.params = params;
        this.functions = functions;
        this.addProduct = true;
        this.disableSubmit = false;
        this.buttonCoupon = false;
        this.disableSubmitCoupon = false;
        localStorage.setItem("pagename", "cart");
        this.Apply = "Apply";
        this.Checkout = "Checkout";
        this.quantity = 1;
        this.options = [];
        this.obj = params.data;
        this.service.loadCart()
            .then(function (results) { return _this.handleCartInit(results); });
    }
    CartPage.prototype.handleCartInit = function (results) {
        this.cart = results;
        this.shipping = results.zone_shipping;
        this.chosen_shipping = results.chosen_shipping;
    };
    CartPage.prototype.handleCart = function (results) {
        this.cart = results;
    };
    CartPage.prototype.delete = function (key) {
        var _this = this;
        this.service.deleteItem(key)
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.checkout = function () {
        var _this = this;
        this.disableSubmit = true;
        this.Checkout = "PleaseWait";
        this.service.checkout()
            .then(function (results) { return _this.handleBilling(results); });
    };
    CartPage.prototype.handleBilling = function (results) {
        this.disableSubmit = false;
        this.Checkout = "Checkout";
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__checkout_billing_address_form_billing_address_form__["a" /* BillingAddressForm */], results);
    };
    CartPage.prototype.deleteFromCart = function (id, key) {
        var _this = this;
        if (Object.keys(this.cart.cart_contents).length == 1) {
            if (this.cart.cart_contents[key].quantity == 1) {
                this.cart.cart_contents = {};
                console.log(this.cart);
            }
            ;
        }
        this.service.deleteFromCart(id, key)
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.addToCart = function (id, key) {
        var _this = this;
        this.service.addToCart(id, key)
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.updateCart = function (results) {
        var _this = this;
        this.service.loadCart()
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.handleAddToCart = function (results) {
        var _this = this;
        this.service.loadCart()
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.submitCoupon = function () {
        var _this = this;
        if (this.cart.coupon != undefined) {
            this.disableSubmitCoupon = true;
            this.Apply = "Apply";
            this.service.submitCoupon(this.cart.coupon)
                .then(function (results) { return _this.handleCoupon(results); });
        }
    };
    CartPage.prototype.removeCoupon = function () {
        var _this = this;
        this.service.removeCoupon(this.cart.applied_coupons)
            .then(function (results) { return _this.handleCoupon(results); });
    };
    CartPage.prototype.handleCoupon = function (results) {
        var _this = this;
        console.log(results);
        this.disableSubmitCoupon = false;
        this.Apply = "Apply";
        this.functions.showAlert("STATUS", results._body);
        this.service.loadCart()
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.handleResults = function (a) {
        if (a.message.status == 'success') {
            this.functions.showAlert(a.message.status, a.message.text);
        }
        else {
            this.functions.showAlert(a.message.status, a.message.text);
        }
    };
    CartPage.prototype.updateShipping = function (method) {
        var _this = this;
        this.chosen_shipping = method;
        this.service.updateShipping(method)
            .then(function (results) { return _this.handleShipping(results); });
    };
    CartPage.prototype.gohome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* Home */]);
    };
    CartPage.prototype.handleShipping = function (results) {
        this.cart = results;
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\deshimall\src\pages\cart\cart.html"*/'<ion-header>\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title>{{"Cart"| translate}}\n    </ion-title>\n    <ion-buttons end>\n      \n    </ion-buttons>\n  </ion-navbar>     \n</ion-header>\n<ion-content class="cart">\n  <ion-spinner *ngIf="!cart" name="crescent">\n  </ion-spinner>\n  <div *ngIf="cart">\n        <div class="empty" *ngIf="cart.cart_contents.length == 0"> \n            <ion-icon name="md-basket"></ion-icon>\n            <h4 color="side-heading-color" text-center no-lines>{{"Your cart is empty" | translate}}!</h4>\n            <h5 text-center no-lines>{{"Add some products available in our menu to checkout" | translate}}</h5> \n            <button ion-button class="butt" item-center medium color="button-color" text-uppercase (click)="gohome()">{{"Continue Shopping" | translate}}</button> \n        </div>\n    <div *ngIf="cart?.cart_contents">\n\n      <div class="cart-items">\n      <ion-list>\n        <div class="cart-list" *ngFor="let item of cart.cart_contents | keys">\n          <ion-item no-lines *ngIf="item.value.quantity != 0">\n            <ion-thumbnail item-left>\n              <img src="{{item.value.thumb}}">\n            </ion-thumbnail>\n            <h2 style="color: #0062bd;" wrap-text>{{item.value.name}}\n            </h2>\n            <h3 wrap-text style="color: red;"> {{"Price" | translate}}: {{item.value.price | currency:values.settings.currency:true:\'1.2-2\'}}\n            </h3>\n            <h3 wrap-text style="color: red;"> {{"Totals" | translate}}: {{1*item.value.line_subtotal | currency:values.settings.currency:true:\'1.2-2\'  }}\n            </h3>\n            <a (click)="delete( item.key )">\n              <ion-icon name="trash">\n              </ion-icon>\n            </a>\n            <button ion-button icon-only class="has-icon icon-only" no-margin item-right clear color="button-color" (click)="deleteFromCart(item.value.product_id, item.key)">\n              <ion-icon ios="ios-remove-circle-outline" md="ios-remove-circle-outline">\n              </ion-icon>\n            </button>\n            <button ion-button item-right color="button-color" clear>{{item.value.quantity}}\n            </button>\n            <button ion-button icon-only class="has-icon icon-only" no-margin item-right clear color="button-color" (click)="addToCart(item.value.product_id, item.key)">\n              <ion-icon ios="ios-add-circle-outline" md="ios-add-circle-outline">\n              </ion-icon>\n            </button>\n          </ion-item>\n        </div>\n      </ion-list>\n      </div>\n\n      <div *ngIf="cart.cart_contents.length != 0">\n        <ion-list *ngIf="shipping" no-margin text-wrap radio-group [(ngModel)]="chosen_shipping" (ngModelChange)="updateShipping(chosen_shipping)" class="shipping-methods">\n          <ion-item-divider>\n            <h2>{{"Select Shipping Method" | translate}}\n            </h2>\n          </ion-item-divider>\n          <ion-item *ngFor="let method of shipping | keys" >\n            <ion-label>{{method.value.method_title}} \n              <span *ngIf="method.value.cost">{{ 1*method.value.cost | currency:values.settings.currency:true:\'1.2-2\'}}\n              </span> \n            </ion-label>\n            <ion-radio value="{{method.value.id + \':\' + method.value.instance_id}}" >\n            </ion-radio>\n          </ion-item>\n        </ion-list>\n\n        <form #f="ngForm" class="coupon">\n          <ion-item>\n            <ion-label>{{"Coupon Code" | translate}}</ion-label>\n            <ion-input type="text" [(ngModel)]="cart.coupon" name="coupon">\n            </ion-input>\n            <h2 item-right>\n              <button ion-button color="button-color" block type="submit" text-uppercase [disabled]=\'disableSubmitCoupon\' (click)="submitCoupon()"> {{Apply | translate}}\n              </button>\n            </h2>\n          </ion-item>\n        </form>\n\n        <ion-list class="totals" *ngIf="cart.cart_totals">\n          <!--ion-item-divider>\n            <h2>{{"Totals" | translate}}\n            </h2>\n          </ion-item-divider-->\n          <ion-row>\n            <ion-col width-75>\n              <ion-label>{{"SubTotal" | translate}}\n              </ion-label>\n            </ion-col>\n            <ion-col width-25 text-right>\n              <ion-label>{{1*cart.cart_totals.subtotal | currency:values.settings.currency:true:\'1.2-2\'}}\n              </ion-label>\n            </ion-col>\n          </ion-row>  \n\n          <ion-row *ngIf="cart.cart_totals.cart_contents_total != 0" style="border-bottom: thin solid grey;">\n            <ion-col width-75>\n              <ion-label>{{"Subtotal Ex tax" | translate}}\n              </ion-label>\n            </ion-col>\n            <ion-col width-25 text-right>\n              <ion-label>{{1*cart.cart_totals.cart_contents_total | currency:values.settings.currency:true:\'1.2-2\'}}\n              </ion-label>\n            </ion-col>\n          </ion-row>  \n\n          <ion-row *ngIf="cart.cart_totals.tax_total != 0">\n            <ion-col width-75>\n              <ion-label>{{"Tax total" | translate}}\n              </ion-label>\n            </ion-col>\n            <ion-col width-25 text-right>\n              <ion-label>{{1*cart.cart_totals.total_tax | currency:values.settings.currency:true:\'1.2-2\'}}\n              </ion-label>\n            </ion-col>\n          </ion-row>\n\n          <ion-row *ngIf="cart.cart_totals.discount_total && cart.cart_totals.discount_total != 0"> \n            <ion-col width-75 class="remove-coupon">\n              <ion-label>{{"Coupons" | translate}} - {{cart.applied_coupons}} \n                <a (click)="removeCoupon()"> (Remove)\n                </a>\n              </ion-label>\n            </ion-col>\n            <ion-col width-25 text-right>\n              <ion-label>- {{1*cart.cart_totals.discount_total | currency:values.settings.currency:true:\'1.2-2\'}}\n              </ion-label>\n            </ion-col>\n          </ion-row>\n\n          <ion-row *ngIf="cart.cart_totals.shipping_total != 0"> \n            <ion-col width-75>\n              <ion-label>{{"Shipping" | translate}}\n              </ion-label>\n            </ion-col>\n            <ion-col width-25 text-right>\n              <ion-label >{{1*cart.cart_totals.shipping_total | currency:values.settings.currency:true:\'1.2-2\'}}\n              </ion-label>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col width-75>\n              <ion-label>\n                <b> {{"Grand Total" | translate}}\n                </b>\n              </ion-label>\n            </ion-col >\n            <ion-col width-25 text-right>\n              <ion-label><b>{{1*cart.cart_totals.total | currency:values.settings.currency:true:\'1.2-2\'}}</b>\n              </ion-label>\n            </ion-col>\n          </ion-row>\n\n        </ion-list>\n        \n      </div>\n    </div>\n  </div>\n</ion-content>\n<div *ngIf="cart">\n  <ion-footer *ngIf="cart.cart_contents.length != 0">\n    <button ion-button full color="button-color" no-padding no-margin text-uppercase [disabled]=\'disableSubmit\' (click)="checkout()">{{Checkout | translate}}\n    </button>\n  </ion-footer>\n</div>\n'/*ion-inline-end:"D:\ionic\deshimall\src\pages\cart\cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_service_config__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_products_products__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cart_cart__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_account_login_login__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_account_address_address__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_account_orders_orders__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_account_register_register__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_checkout_order_summary_order_summary__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_account_wishlist_wishlist__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_product_product__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_post_post__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_app_rate__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_social_sharing__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_email_composer__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_native_storage__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_wallet_wallet__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_pages_feedback_pages_feedback__ = __webpack_require__(386);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


























var MyApp = /** @class */ (function () {
    function MyApp(app, events, statusBar, splashScreen, alertCtrl, config, oneSignal, emailComposer, appRate, platform, service, values, translateService, socialSharing, nativeStorage) {
        var _this = this;
        this.app = app;
        this.events = events;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.config = config;
        this.oneSignal = oneSignal;
        this.emailComposer = emailComposer;
        this.appRate = appRate;
        this.platform = platform;
        this.service = service;
        this.values = values;
        this.translateService = translateService;
        this.socialSharing = socialSharing;
        this.nativeStorage = nativeStorage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* Home */];
        this.items = {};
        this.buttonLanguagesSettings = false;
        platform.ready().then(function () {
            localStorage.setItem("pagename", "home");
            _this.initializeApp();
            _this.splashScreen.hide();
            _this.statusBar.overlaysWebView(false);
            //  this.statusBar.backgroundColorByHexString('#FEAE00');
            _this.platform.registerBackButtonAction(function () { return _this.myHandlerFunction(); });
            _this.service.load().then(function (results) { return _this.handleService(results); });
            _this.nativeStorage.getItem('blocks').then(function (data) {
                if (data) {
                    _this.splashScreen.hide();
                    _this.service.blocks = data.blocks;
                    _this.values.settings = data.settings;
                    _this.service.categories = data.categories.filter(function (item) { return item.name !== 'Uncategorized'; });
                    _this.service.mainCategories = _this.service.categories.filter(function (item) { return item.parent === 0; });
                    _this.values.calc(platform.width());
                }
            }, function (error) { return console.error(error); });
        });
    }
    MyApp.prototype.initializeApp = function () {
        this.getwallet();
        var username = window.localStorage.getItem('username') ? window.localStorage.getItem('username') : '';
        if (username != "") {
            this.values.isLoggedIn = true;
        }
        else {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* Home */]);
            this.values.isLoggedIn = false;
        }
        //  alert(username);
    };
    MyApp.prototype.myHandlerFunction = function () {
        // let activeView = this.nav.getActive();
        var _this = this;
        if (localStorage.getItem("pagename") == 'home' || localStorage.getItem("pagename") == '') {
            var alert_1 = this.alertCtrl.create({
                title: 'Exit',
                message: 'Are you sure to exit app ?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: function () {
                            // console.log('Buy clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            _this.platform.exitApp();
                        }
                    }
                ]
            });
            if (this.lastBack + 500 < Date.now()) {
                alert_1.present();
            }
        }
        if (this.nav.canGoBack()) {
            this.nav.pop();
        }
        else {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* Home */]);
        }
        this.lastBack = Date.now();
    };
    MyApp.prototype.handleService = function (results) {
        var _this = this;
        if (this.values.settings.app_dir == 'rtl')
            this.platform.setDir('rtl', true);
        this.translateService.setDefaultLang(this.values.settings.language);
        this.splashScreen.hide();
        this.values.calc(this.platform.width());
        if (this.platform.is('cordova') && this.values.settings.onesignal_app_id) {
            this.oneSignal.startInit(this.values.settings.onesignal_app_id, this.values.settings.google_project_id);
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
            this.oneSignal.handleNotificationReceived().subscribe(function (result) {
                console.log(result);
            });
            this.oneSignal.handleNotificationOpened().subscribe(function (result) {
                if (result.notification.payload.additionalData.category) {
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_10__pages_products_products__["a" /* ProductsPage */], { id: result.notification.payload.additionalData.category });
                }
                else if (result.notification.payload.additionalData.product) {
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_18__pages_product_product__["a" /* ProductPage */], result.notification.payload.additionalData.product);
                }
                else if (result.notification.payload.additionalData.post) {
                    _this.post(result.notification.payload.additionalData.post);
                }
                else if (result.notification.payload.additionalData.order) {
                    _this.nav.push(__WEBPACK_IMPORTED_MODULE_16__pages_checkout_order_summary_order_summary__["a" /* OrderSummary */], { id: result.notification.payload.additionalData.order });
                }
            });
            this.oneSignal.endInit();
        }
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page);
    };
    MyApp.prototype.getCategory = function (id, slug, name) {
        this.items = [];
        this.items.id = id;
        this.items.slug = slug;
        this.items.name = name;
        this.items.categories = this.service.categories.filter(function (item) { return item.parent === parseInt(id); });
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_products_products__["a" /* ProductsPage */], this.items);
    };
    MyApp.prototype.getCart = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_cart_cart__["a" /* CartPage */]);
    };
    MyApp.prototype.logout = function () {
        window.localStorage.setItem('username', '');
        this.service.logout();
        this.values.wishlistId = [];
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_account_login_login__["a" /* AccountLogin */]);
    };
    MyApp.prototype.feedback = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_25__pages_pages_feedback_pages_feedback__["a" /* PagesFeedbackPage */]);
    };
    MyApp.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_account_login_login__["a" /* AccountLogin */]);
    };
    MyApp.prototype.register = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_15__pages_account_register_register__["a" /* AccountRegister */]);
    };
    MyApp.prototype.address = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_account_address_address__["a" /* Address */]);
    };
    MyApp.prototype.order = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_14__pages_account_orders_orders__["a" /* Orders */]);
    };
    MyApp.prototype.cart = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_cart_cart__["a" /* CartPage */]);
    };
    MyApp.prototype.wishlist = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_17__pages_account_wishlist_wishlist__["a" /* WishlistPage */]);
    };
    MyApp.prototype.shop = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* Home */]);
    };
    MyApp.prototype.wallet = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_24__pages_wallet_wallet__["a" /* Wallet */]);
    };
    MyApp.prototype.getwallet = function () {
        var _this = this;
        var userid = window.localStorage.getItem("userid");
        this.service.getwalletbalance(userid)
            .then(function (results) {
            _this.walletbalance = results;
        });
    };
    MyApp.prototype.rateApp = function () {
        if (this.platform.is('cordova')) {
            this.appRate.preferences.storeAppURL = {
                ios: this.values.settings.rate_app_ios_id,
                android: "https://play.google.com/store/apps/details?id=smart.webarts.deshimall",
                windows: 'ms-windows-store://review/?ProductId=' + this.values.settings.rate_app_windows_id
            };
            this.appRate.promptForRating(true);
        }
    };
    MyApp.prototype.shareApp = function () {
        if (this.platform.is('cordova')) {
            var url = '';
            if (this.platform.is('android'))
                url = "https://play.google.com/store/apps/details?id=smart.webarts.deshimall"; //this.values.settings.share_app_android_link;
            else
                url = this.values.settings.share_app_ios_link;
            var options = {
                message: 'Install deshimall app for beytter experience',
                subject: '',
                files: ['', ''],
                url: url,
                chooserTitle: ''
            };
            this.socialSharing.shareWithOptions(options);
        }
    };
    MyApp.prototype.contact = function () {
        var email = {
            to: "info@deshimall.in",
            subject: 'Contact Us',
            body: '',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    MyApp.prototype.post = function (id) {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_19__pages_post_post__["a" /* Post */], id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\deshimall\src\app\app.html"*/'\n<ion-menu [content]="content" side="{{this.values?.settings?.app_dir}}">\n  <div class="menu-toolbar">\n    <ion-toolbar color="header">\n      <div tappable menuClose  (click)="shop()" class="profile-image">\n        <img  tappable menuClose (click)="shop()" src="{{values.avatar}}">\n        <!--img src="{{values.avatar}}"-->\n      </div>\n      <!--button ion-button full menuClose clear color="light" class="button-customername" *ngIf="values.isLoggedIn">\n        <strong>{{values.customerName}}\n        </strong>\n      </button>\n      <button ion-button full menuClose clear color="light" class="button-welcome" *ngIf="!values.isLoggedIn">\n        <strong>{{"Welcome" | translate}}\n        </strong>\n      </button-->  \n    </ion-toolbar>\n  </div>\n  <ion-content class="sidemenugrad">\n    <ion-list no-margin>\n            \n      <div *ngIf="service.categories" class="list-item-divider">\n        <ion-item tappable full menuClose *ngFor="let item of service.mainCategories" (click)="getCategory(item.id, item.slug, item.name)">\n        \n          <!-- <ion-icon slot="start" item-left >\n            <ion-avatar>\n          <img *ngIf="item.image?.src" src="{{item.image.src}}"/>\n          <img *ngIf="!item.image?.src" src="assets/image/logo.png"/>\n          </ion-avatar>\n        </ion-icon> -->\n        \n          <span [innerHTML]="item.name"></span>    \n          <ion-icon item-right class="ion-ios-arrow-forward item-icon">\n          </ion-icon>\n       \n        </ion-item>\n      </div>\n    </ion-list>\n    <ion-list class="menu-items">\n      <ion-item-divider>\n        <ion-icon style="background-color: #32db64;" name="contact" item-left>\n        </ion-icon>\n        <strong>{{"Account" | translate}}\n        </strong>\n      </ion-item-divider>\n      <ion-item tappable menuClose (click)="login()" *ngIf="!values.isLoggedIn">\n        <ion-icon style="background-color: #f25362" name="log-in" item-left>\n        </ion-icon>{{"LogIn" | translate}}\n      </ion-item>\n\n      <ion-item tappable menuClose (click)="feedback()" >\n        <ion-icon style="background-color: #d26489" name="log-in" item-left>\n        </ion-icon>Feedback\n      </ion-item>\n\n\n      <ion-item tappable menuClose (click)="register()" *ngIf="!values.isLoggedIn">\n        <ion-icon style="background-color: #3aa756" item-left ios="ios-create" md="md-create">\n        </ion-icon>{{"Register" | translate}}\n      </ion-item>\n      <ion-item tappable menuClose (click)="address()" *ngIf="values.isLoggedIn">\n        <ion-icon style="background-color: #3aa756" item-left name="locate">\n        </ion-icon>{{"Address" | translate}}\n      </ion-item>\n      <ion-item tappable menuClose (click)="order()" *ngIf="values.isLoggedIn">\n        <ion-icon style="background-color: #4688f1" item-left name="reorder">\n        </ion-icon>{{"Your Orders" | translate}}\n      </ion-item>\n      <ion-item tappable menuClose (click)="wishlist()" *ngIf="values.isLoggedIn">\n        <ion-icon style="background-color: #e8453c" name="heart" item-left>\n        </ion-icon>{{"Wishlist" | translate}}\n      </ion-item>\n      <ion-item tappable menuClose (click)="cart()">\n        <ion-icon style="background-color: #8BC34A" name="md-basket" item-left>\n        </ion-icon>\n        {{"Checkout" | translate}}\n      </ion-item>\n      <ion-item tappable menuClose (click)="contact()">\n        {{"Contact Us" | translate}}\n        <ion-icon style="background-color: #FF5722" name="mail" item-left></ion-icon>\n     </ion-item>\n            <ion-item tappable menuClose *ngIf="values.data?.pages?.about && values.data?.pages?.about != \'0\'" (click)="post(values.data?.pages?.about)">\n               {{"About Us" | translate}}\n               <ion-icon style="background-color: #26C6DA" name="ios-information-circle" item-left></ion-icon>\n            </ion-item>\n            <ion-item tappable menuClose *ngIf="values.data?.pages?.terms && values.data?.pages?.terms != \'0\'" (click)="post(values.data?.pages?.terms)">\n               <ion-icon style="background-color: #8BC34A" name="paper" item-left></ion-icon>\n               {{"Terms & Conditions" | translate}}\n            </ion-item>\n            <ion-item tappable menuClose no-line (click)="shareApp()">\n              <ion-icon style="background-color: #FF5722" name="share" item-left></ion-icon>\n              {{"Share App" | translate}}\n           </ion-item>\n            <ion-item tappable menuClose no-line (click)="rateApp()">\n               <ion-icon style="background-color: #43A047" name="thumbs-up" item-left></ion-icon>\n               {{"Rate App" | translate}}\n            </ion-item>\n<div *ngIf="values.isLoggedIn">\n            <ion-item   tappable menuClose no-line (click)="wallet()">\n              <ion-icon   style="background-color: rgb(134, 67, 160)" name="albums" item-left></ion-icon>\n           My Wallet\n           </ion-item>\n</div>\n      <ion-item tappable menuClose (click)="logout()" *ngIf="values.isLoggedIn">\n        <ion-icon style="background-color: #FDD835" item-left name="md-log-out">\n        </ion-icon>{{"Logout" | translate}}\n      </ion-item>\n    </ion-list>\n    <br>\n    <br>\n    <br>\n  </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false">\n</ion-nav>\n'/*ion-inline-end:"D:\ionic\deshimall\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__providers_service_config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_22__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_20__ionic_native_app_rate__["a" /* AppRate */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_6__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_21__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_23__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_product_service__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__md5__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cart_cart__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reviews_reviews__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ProductPage = /** @class */ (function () {
    function ProductPage(iab, photoViewer, modalCtrl, nav, service, params, functions, values, toastCtrl, socialSharing, loadingCtrl) {
        var _this = this;
        this.iab = iab;
        this.photoViewer = photoViewer;
        this.modalCtrl = modalCtrl;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.toastCtrl = toastCtrl;
        this.socialSharing = socialSharing;
        this.loadingCtrl = loadingCtrl;
        this.options = {};
        this.disableSubmit = false;
        this.wishlistIcon = false;
        this.moreDescription = false;
        this.disableBuyNow = false;
        this.filter = {};
        this.usedVariationAttributes = [];
        this.mySlideOptions = {
            initialSlide: 1,
            loop: true,
            autoplay: 5800,
            pager: true
        };
        localStorage.setItem("pagename", "product");
        if (params.data.id) {
            this.product = params.data;
            this.usedVariationAttributes = this.product.attributes.filter(function (attribute) { return attribute.variation == true; });
            this.id = params.data.id;
            this.options.product_id = this.id;
            if ((this.product.type == 'variable') && this.product.variations.length)
                this.getVariationProducts();
            this.getRelatedProducts();
            this.getUpsellProducts();
            this.getCrossSellProducts();
            this.getReviews();
        }
        else {
            this.id = params.data;
            this.options.product_id = this.id;
            this.service.getProduct(this.id)
                .then(function (results) { return _this.handleProductResults(results); });
        }
        this.quantity = 1;
        this.AddToCart = "Add To Cart";
    }
    ProductPage_1 = ProductPage;
    ProductPage.prototype.ionViewWillEnter = function () {
        localStorage.setItem("pagename", "product");
        //alert(localStorage.getItem("usermobile"));
    };
    ProductPage.prototype.handleProductResults = function (results) {
        this.product = results;
        this.usedVariationAttributes = this.product.attributes.filter(function (attribute) { return attribute.variation == true; });
        if ((this.product.type == 'variable') && this.product.variations.length)
            this.getVariationProducts();
        this.getRelatedProducts();
        this.getUpsellProducts();
        this.getCrossSellProducts();
        this.getReviews();
    };
    ProductPage.prototype.external = function (url) {
        var options = "location=yes,hidden=no,toolbar=yes";
        var browser = this.iab.create(url, '_blank', options);
        browser.show();
    };
    ProductPage.prototype.getVariationProducts = function () {
        var _this = this;
        this.service.getVariationProducts(this.product.id).then(function (results) { return _this.variations = results; });
    };
    ProductPage.prototype.getProduct = function (item) {
        this.nav.push(ProductPage_1, item);
    };
    ProductPage.prototype.addToCart = function (id) {
        var _this = this;
        if (this.setVariations()) {
            this.service.addToCart(this.options).then(function (results) { return _this.updateCart(results); });
        }
    };
    ProductPage.prototype.buyNow = function (id) {
        var _this = this;
        if (this.setVariations()) {
            this.service.addToCart(this.options).then(function (results) { return _this.updateBuynowResults(results); });
        }
    };
    ProductPage.prototype.setVariations = function () {
        var _this = this;
        this.product.attributes.forEach(function (item) {
            if (item.selected) {
                _this.options['variation[attribute_pa_' + item.name + ']'] = item.selected;
            }
        });
        for (var i = 0; i < this.product.attributes.length; i++) {
            if (this.product.attributes[i].variation && this.product.attributes[i].selected == undefined) {
                this.functions.showAlert('Options', 'Please Select Product ' + this.product.attributes[i].name + ' Option');
                return false;
            }
        }
        return true;
    };
    ProductPage.prototype.updateBuynowResults = function (a) {
        this.disableBuyNow = false;
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__cart_cart__["a" /* CartPage */]);
    };
    ProductPage.prototype.updateCart = function (a) {
        this.disableSubmit = false;
        this.values.count += parseInt(this.quantity);
        this.AddToCart = "Add To Cart";
        this.presentToast();
    };
    ProductPage.prototype.getCart = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__cart_cart__["a" /* CartPage */]);
    };
    ProductPage.prototype.getReviews = function () {
        var _this = this;
        this.service.getReviews(this.id).then(function (results) { return _this.handleReview(results); });
    };
    ProductPage.prototype.handleReview = function (result) {
        this.reviews = result;
        for (var item in this.reviews) {
            this.reviews[item].avatar = Object(__WEBPACK_IMPORTED_MODULE_5__md5__["a" /* md5 */])(this.reviews[item].email);
        }
    };
    ProductPage.prototype.addToWishlist = function (id) {
        var _this = this;
        if (this.values.isLoggedIn) {
            this.service.addToWishlist(id).then(function (results) { return _this.update(results); });
        }
        else {
            this.presentToastLoginAlert();
        }
    };
    ProductPage.prototype.update = function (a) {
        if (a.success == "Success") {
            this.values.wishlistId[this.product.id] = true;
            this.presentToastAddToWishlist();
        }
        else {
            this.functions.showAlert("error", "error");
        }
    };
    ProductPage.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id).then(function (results) { return _this.updateWish(results, id); });
    };
    ProductPage.prototype.updateWish = function (results, id) {
        if (results.status == "success") {
            this.values.wishlistId[id] = false;
        }
    };
    ProductPage.prototype.showMore = function () {
        this.moreDescription = true;
    };
    ProductPage.prototype.showLess = function () {
        this.moreDescription = false;
    };
    ProductPage.prototype.getRelatedProduct = function (item) {
        this.nav.push(ProductPage_1, item);
    };
    ProductPage.prototype.getRelatedProducts = function () {
        var _this = this;
        if (this.product.related_ids != 0) {
            for (var item in this.product.related_ids)
                this.filter['include[' + item + ']'] = this.product.related_ids[item];
            this.service.getRelatedProducts(this.filter)
                .then(function (results) { return _this.related = results; });
        }
    };
    ProductPage.prototype.getUpsellProducts = function () {
        var _this = this;
        if (this.product.upsell_ids != 0) {
            for (var item in this.product.upsell_ids)
                this.filter['include[' + item + ']'] = this.product.upsell_ids[item];
            this.service.getUpsellProducts(this.filter)
                .then(function (results) { return _this.upsell = results; });
        }
    };
    ProductPage.prototype.getCrossSellProducts = function () {
        var _this = this;
        if (this.product.cross_sell_ids != 0) {
            for (var item in this.product.cross_sell_ids)
                this.filter['include[' + item + ']'] = this.product.cross_sell_ids[item];
            this.service.getCrossSellProducts(this.filter)
                .then(function (results) { return _this.crossSell = results; });
        }
    };
    ProductPage.prototype.showMoreReviews = function (productName, count, rating) {
        this.items = [];
        this.items.reviews = {};
        this.items.id = this.id;
        this.items.count = count;
        this.items.rating = rating;
        this.items.name = productName;
        this.items.reviews = this.reviews;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__reviews_reviews__["a" /* ReviewPage */], this.items);
        modal.present();
    };
    ProductPage.prototype.viewPhotos = function (image) {
        this.photoViewer.show(image);
    };
    ProductPage.prototype.viewPhoto = function (index) {
        this.slides.slideTo(index + 1, 500);
    };
    ProductPage.prototype.presentToastLoginAlert = function () {
        var toast = this.toastCtrl.create({
            message: 'You must login to add item to wishlist',
            duration: 2000,
            position: 'top'
        });
        toast.present();
    };
    ProductPage.prototype.presentToastAddToWishlist = function () {
        var toast = this.toastCtrl.create({
            message: 'Item added to wishlist',
            duration: 2000,
            position: 'top'
        });
        toast.present();
    };
    ProductPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Item added to cart',
            duration: 2000,
            position: 'top'
        });
        toast.present();
    };
    ProductPage.prototype.share = function (product, network, fab) {
        var options = {
            message: 'Hey check this product',
            subject: product.title,
            files: ['', ''],
            url: product.permalink,
            chooserTitle: 'Pick an app'
        };
        var loading = this.loadingCtrl.create({
            content: "Posting to " + network,
            duration: (Math.random() * 1000) + 500
        });
        loading.present();
        this.socialSharing.shareWithOptions(options);
    };
    ProductPage.prototype.chooseVariation = function (att, value) {
        var _this = this;
        this.product.attributes.forEach(function (item) {
            if (item.name == att.name) {
                item.selected = value;
            }
        });
        this.variations.forEach(function (variation) {
            var test = new Array(_this.usedVariationAttributes.length);
            test.fill(false);
            _this.usedVariationAttributes.forEach(function (attribute) {
                if (variation.attributes.length == 0) {
                    _this.options.variation_id = variation.id;
                    _this.product.in_stock = variation.in_stock;
                    _this.product.price = variation.price;
                    _this.product.sale_price = variation.sale_price;
                    _this.product.regular_price = variation.regular_price;
                }
                else {
                    variation.attributes.forEach(function (item, index) {
                        if (item.name == attribute.name && item.option == attribute.selected) {
                            test[index] = true;
                        }
                    });
                    if (test.every(function (v) { return v == true; })) {
                        _this.options.variation_id = variation.id;
                        _this.product.in_stock = variation.in_stock;
                        _this.product.price = variation.price;
                        _this.product.sale_price = variation.sale_price;
                        _this.product.regular_price = variation.regular_price;
                        test.fill(false);
                    }
                    ;
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ProductPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], ProductPage.prototype, "slides", void 0);
    ProductPage = ProductPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic\deshimall\src\pages\product\product.html"*/'<ion-header class="product-header">\n    <ion-navbar color="header">\n        <ion-title *ngIf="product?.name">\n            <h2 [innerHTML]="product.name" style="font-size: 18px;margin: 0"></h2>\n        </ion-title>\n        <ion-buttons end>\n\n      \n\n        <button ion-button icon-only light class="has-icon icon-only has-badge" (click)="getCart()">\n        <ion-icon color="icon-color" name="md-basket">\n        </ion-icon>\n        <ion-badge class="badge badge-light" *ngIf="values.count">{{values.count}}\n        </ion-badge>\n      </button> </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n<ion-content class="product-page" #pageContent>\n    <div class="spinner center-spinner"><ion-spinner *ngIf="!product" name="crescent"> </ion-spinner></div>\n\n    <ion-fab bottom right *ngIf="values.settings.enable_product_chat == \'1\'">\n        <a href="https://wa.me/{{values.settings.whatsapp_number}}"><button ion-fab color="secondary" mini><ion-icon name="chatbubbles"></ion-icon></button></a>\n    </ion-fab>\n\n    <div class="product-details">\n\n        <div class="header-image">\n        <div *ngIf="product && product?.images?.length">\n            <ion-slides pager="true" loop="true" autoplay="5800">\n                <ion-slide *ngFor="let item of product.images"> <img [style.height.px]="values.dimensions.imageProductViewHeight" src="{{item.src}}" (click)="viewPhotos(item.src)"> </ion-slide>\n            </ion-slides>\n\n        <!--div class="scrollmenu2">\n          <a *ngFor="let item of product.images; let i = index">\n            <img src="{{item.src}}" (click)="viewPhoto(i)"/>\n          </a>\n        </div-->\n\n        </div>\n\n        <div *ngIf="product && !product?.images?.length" class="header-image">\n            <ion-slides pager="true" loop="true" autoplay="5800">\n                <ion-slide> <img src="assets/image/500.png"> </ion-slide>\n            </ion-slides>\n        </div>\n    </div>\n<div class="main-content">\n    <div *ngIf="product">\n         <!--button ion-button clear *ngIf="product.stock_status == \'outofstock\'" item-left class="stock" color="danger">{{"No Stock" | translate}}\n      </button-->\n\n\n        <div class="body-index">\n            \n            <ion-item class="price-label" no-lines style="padding-right: 0 !important">\n                <span class="regular_price" style="color:#f3000d;" *ngIf="!product.sale_price">{{product.price | currency:values.settings.currency:true:\'1.2-2\'}} </span>\n                <span class="regular_price" style="color:#f3000d;" *ngIf="product.sale_price">{{product.sale_price | currency:values.settings.currency:true:\'1.2-2\'}} </span>\n                <span class="regular_price" style="color:#f3000d;" *ngIf="product.sale_price"><del style="color:#f3000d;">{{product.regular_price | currency:values.settings.currency:true:\'1.2-2\'}}</del> <span class="offer">{{(product.regular_price - product.sale_price) /product.regular_price*100 | number : \'1.0-0\'}}% OFF</span> </span>\n            \n\n\n        <div class="button-in-stock"><button ion-button clear *ngIf="values.wishlistId[product.id]" item-right class="wishlist1" color="danger">\n      <ion-icon name="md-heart"  (click)="removeFromWishlist(product.id)"></ion-icon>\n      </button> <button ion-button clear *ngIf="!values.wishlistId[product.id]" item-right class="wishlist2" color="danger">\n      <ion-icon name="md-heart-outline"  (click)="addToWishlist(product.id)"></ion-icon>\n      </button> </div>\n\n      </ion-item>\n\n            <ion-label style="color: #0062bd;" class="product-name" [innerHTML]="product.name" text-wrap></ion-label>\n\n            <!--variation product starts-->\n            <div class="variation-block" *ngIf="variations">\n                <div *ngFor="let attribute of usedVariationAttributes" class="variation-product">                 \n                    <div *ngIf="attribute.options.length" class="option-box">\n                        <button class="option-button" ion-button outline color="light" *ngFor="let option of attribute.options" (click)="chooseVariation(attribute, option)" [ngClass]="{\'selected-option\': attribute.selected == option}">{{option}}</button>\n                    </div>\n                </div>\n            </div>\n\n            <!--ion-grid class="add-to-cart">\n                <ion-row>\n                    <ion-col width-50 class="col1">\n                        <ion-item>\n                        <ion-label>{{"Quantity" | translate}}</ion-label>\n                        <ion-input required type="number" [(ngModel)]="quantity" min="1" name="quantity"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col>\n                        <button ion-button full text-uppercase color="button-color" *ngIf="product.type != \'external\'" [disabled]="disableSubmit || product.stock_status == \'outofstock\'" (click)="addToCart(product.id)" style="margin: 0;width: 100%; min-height: 50px;">\n                        {{AddToCart | translate}}\n                        </button>\n\n                        <button ion-button full text-uppercase color="button-color" *ngIf="product.type == \'external\'" (click)="external(product.external_url)" style="margin: 0;width: 100%; min-height: 50px;">\n                        {{"Buy Now" | translate}}\n                        </button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid-->\n\n\n            <!--div class="quantity">\n            <ion-item>\n            <ion-label>{{"Quantity" | translate}}</ion-label>\n            <ion-input required type="number" [(ngModel)]="quantity" min="1" name="quantity"></ion-input>\n            </ion-item>\n            </div-->\n\n\n                <ion-grid class="add-to-cart" *ngIf="product.type == \'external\'">\n                    <button ion-button full text-uppercase color="button-color" [disabled]="product.stock_status == \'outofstock\'" (click)="external(product?.external_url)" style="margin: 0;width: 100%; min-height: 50px; color: white; box-shadow: none;">\n                    {{"Buy now" | translate}}\n                    </button>\n                </ion-grid>\n\n                <ion-grid class="add-to-cart" *ngIf="product.type != \'external\'">\n                    <ion-row>\n                        <ion-col width-50>\n                            <button ion-button full text-uppercase color="button-color" [disabled]="product.stock_status == \'outofstock\'" (click)="buyNow(product.id)" style="margin: 0;width: 100%; min-height: 50px;background-color: #0cd1e8; color: white; box-shadow: none;">\n                            {{"Buy now" | translate}}\n                            </button>\n                        </ion-col>\n                        <ion-col width-50>\n                            <button ion-button full text-uppercase color="button-color" [disabled]="product.stock_status == \'outofstock\'" (click)="addToCart(product.id)" style="margin: 0;width: 100%; min-height: 50px;box-shadow: none;">\n                            {{AddToCart | translate}}\n                            </button>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n\n            <div *ngIf="product?.short_description" class="description">\n                <div class="devider"></div>\n                <ion-item no-lines class="item-background"> {{"Description" | translate}} </ion-item>\n                <ion-item text-wrap no-lines>\n                    <div [innerHTML]="product.short_description"> </div>\n                </ion-item>\n            </div>\n            <div *ngIf="product?.description" class="description">\n                <ion-item text-wrap no-lines>\n                    <div [innerHTML]="product.description"> </div>\n                </ion-item>\n            </div>\n            <!--ion-item no-lines class="show-more" *ngIf="!moreDescription && product.short_description">\n                <h2 (click)="showMore()"><span class="span1">{{"Read more" | translate}}</span><span class="span2"><ion-icon name="ios-more"></ion-icon></span></h2>\n            </ion-item>\n            <ion-item no-lines class="show-more" *ngIf="moreDescription">\n                <h2 (click)="showLess()"><span class="span1">{{"Read less" | translate}}</span></h2>\n            </ion-item-->\n            \n            <div *ngIf="related?.length" class="related-products">\n                <div class="devider"></div>\n                <ion-item *ngIf="related" class="related-item-name"> {{"Related Products" | translate}} </ion-item>\n                <div class="scroll-related-products">\n                    <a *ngFor="let item of related">\n                        <ion-card [style.width.px]="values.dimensions.productSliderWidth">\n                            <ion-card-content (click)="getRelatedProduct(item)"> <img [style.height.px]="values.dimensions.homeSliderHeight" src="{{item?.images[0]?.src}}" /> </ion-card-content>\n                            <h5 style="color: #0062bd;">{{item.name}}</h5>\n                            <ion-label> <span style="color:#f3000d;" class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.settings.currency:true:\'1.2-2\'}}\n            </span> <span style="color:#f3000d;" class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.settings.currency:true:\'1.2-2\'}}\n            </span> <span style="color:#f3000d;" *ngIf="item.sale_price">\n            <del style="color:#f3000d;" class="price-delete">{{1*item.regular_price | currency:values.settings.currency:true:\'1.2-2\'}}\n            </del>\n            </span> </ion-label>\n                        </ion-card>\n                    </a>\n                </div>\n            </div>\n            <div *ngIf="upsell?.length" class="related-products">\n                <div class="devider"></div>\n                <ion-item *ngIf="upsell" class="related-item-name"> {{"You may also like" | translate}} </ion-item>\n                <div class="scroll-related-products">\n                    <a [style.width.px]="values.dimensions.productSliderWidth" *ngFor="let item of upsell">\n                        <ion-card>\n                            <ion-card-content (click)="getRelatedProduct(item)"> <img [style.height.px]="values.dimensions.homeSliderHeight" src="{{item?.images[0]?.src}}" /> </ion-card-content>\n                            <h5 style="color: #0062bd;">{{item.name}}</h5>\n                            <ion-label> <span style="color:#f3000d;" class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.settings.currency:true:\'1.2-2\'}}\n            </span> <span style="color:#f3000d;" class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.settings.currency:true:\'1.2-2\'}}\n            </span> <span style="color:#f3000d;" *ngIf="item.sale_price">\n            <del style="color:#f3000d;">{{1*item.regular_price | currency:values.settings.currency:true:\'1.2-2\'}}\n            </del>\n            </span> </ion-label>\n                        </ion-card>\n                    </a>\n                </div>\n            </div>\n            <div *ngIf="crossSell?.length" class="related-products">\n                <div class="devider"></div>\n                <ion-item *ngIf="crossSell" class="related-item-name"> {{"Recommended Products" | translate}} </ion-item>\n                <div class="scroll-related-products">\n                    <a [style.width.px]="values.dimensions.productSliderWidth" *ngFor="let item of crossSell">\n                        <ion-card>\n                            <ion-card-content (click)="getRelatedProduct(item)"> <img [style.height.px]="values.dimensions.homeSliderHeight" src="{{item?.images[0]?.src}}" /> </ion-card-content>\n                            <h5 style="color: #0062bd;">{{item.name}}</h5>\n                            <ion-label> <span class="price-regular" style="color:#f3000d;" *ngIf="!item.sale_price">{{1*item.price | currency:values.settings.currency:true:\'1.2-2\'}}\n              </span> <span class="price-regular" style="color:#f3000d;" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.settings.currency:true:\'1.2-2\'}}\n              </span> <span style="color:#f3000d;" *ngIf="item.sale_price">\n              <del style="color:#f3000d;">{{1*item.regular_price | currency:values.settings.currency:true:\'1.2-2\'}}\n              </del>\n              </span> </ion-label>\n                        </ion-card>\n                    </a>\n                </div>\n            </div>\n            <div *ngIf="reviews?.length" style="margin-top: 5px;">\n                <div class="devider"></div>\n                <ion-item *ngIf="reviews" class="item-background"> {{"Reviews" | translate}} </ion-item>\n                <div *ngFor="let item of reviews | slice:0:2; let i=index" class="reviews">\n                    <ion-item no-lines>\n                        <ion-avatar item-start style="margin:8px"> <img src="https://www.gravatar.com/avatar/{{item.avatar}}"> </ion-avatar>\n                        <h3 style="margin-bottom:6px;font-size:15px">{{item.name}} <span class="rating review-star">\n             <span class="star-icon" [ngClass]="{full: item.rating >= 1, half: item.rating == 0.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.rating >= 2, half: item.rating == 1.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.rating >= 3, half: item.rating == 2.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.rating >= 4, half: item.rating == 3.5}">&#x2605;</span> <span class="star-icon" [ngClass]="{full: item.rating >= 5, half: item.rating == 4.5}">&#x2605;</span> </span>\n                        </h3>\n                        <h3 style="color:#9e9898;margin-bottom:4px">{{item.date_created | date:\'MMM d, y hh:mm a\'}}</h3>\n                    </ion-item>\n                    <p text-wrap>{{item.review}}</p>\n                </div>\n                <ion-item no-lines class="show-more">\n                    <h2 (click)="showMoreReviews(product.name, product.rating_count, product.average_rating)"><span class="span1">{{"Show more" | translate}}</span><span class="span2"><ion-icon name="ios-more"></ion-icon></span></h2>\n                </ion-item>\n            </div>\n        </div>\n        </div>\n        </div>\n    </div> </ion-content>'/*ion-inline-end:"D:\ionic\deshimall\src\pages\product\product.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer__["a" /* PhotoViewer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], ProductPage);
    return ProductPage;
    var ProductPage_1;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return md5; });
var md5 = function (string) {
    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }
    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            }
            else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        }
        else {
            return (lResult ^ lX8 ^ lY8);
        }
    }
    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }
    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }
    function H(x, y, z) {
        return (x ^ y ^ z);
    }
    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }
    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    }
    ;
    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    }
    ;
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }
    ;
    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
    string = Utf8Encode(string);
    x = ConvertToWordArray(string);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }
    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
    return temp.toLowerCase();
};
//# sourceMappingURL=md5.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return md5; });
var md5 = function (string) {
    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }
    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            }
            else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        }
        else {
            return (lResult ^ lX8 ^ lY8);
        }
    }
    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }
    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }
    function H(x, y, z) {
        return (x ^ y ^ z);
    }
    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }
    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    }
    ;
    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    }
    ;
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }
    ;
    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
    string = Utf8Encode(string);
    x = ConvertToWordArray(string);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }
    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
    return temp.toLowerCase();
};
//# sourceMappingURL=md5.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'keys'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], KeysPipe);
    return KeysPipe;
}());

//# sourceMappingURL=pipe.js.map

/***/ })

},[387]);
//# sourceMappingURL=main.js.map