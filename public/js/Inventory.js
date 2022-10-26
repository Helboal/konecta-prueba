"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Inventory"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/inventory/InventoryCreate.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/inventory/InventoryCreate.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'InventoryCreate',
  data: function data() {
    return {
      modal: true,
      nameState: null,
      referenceState: null,
      priceState: null,
      weightState: null,
      stockState: null,
      categoryState: null,
      data: {
        name: '',
        reference: '',
        price: '',
        weight: '',
        stock: '',
        category: ''
      }
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)({
    inventoryCreate: 'Inventory/inventoryCreate'
  })),
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)({
    setModal: 'Inventory/SET_INVENTORY_CREATE_MODAL'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)({
    inventoryStore: 'Inventory/inventoryStore'
  })), {}, {
    closeModal: function closeModal() {
      this.setModal(false);
    },
    validateForm: function validateForm() {
      var valid = this.$refs.formCreate.checkValidity();
      this.nameState = valid;
      this.referenceState = valid;
      this.priceState = valid;
      this.weightState = valid;
      this.stockState = valid;
      this.categoryState = valid;
      return valid;
    },
    create: function create() {
      var _this = this;
      if (!this.validateForm()) {
        return;
      }
      swal({
        title: "¿Desea enviar los datos del producto?",
        icon: "warning",
        closeOnClickOutside: false,
        closeOnEsc: false,
        buttons: {
          cancel: {
            text: "Cancelar",
            value: false,
            visible: true,
            closeModal: true
          },
          confirm: {
            text: "Enviar",
            value: true,
            visible: true,
            className: "bg-primary",
            closeModal: false
          }
        }
      }).then(function (enviar) {
        if (!enviar) throw null;
        var m = document.querySelector(".swal-button--cancel");
        m.setAttribute("disabled", "disabled");
        return _this.inventoryStore(_this.data);
      }).then(function (response) {
        swal({
          title: "Se ha creado el producto con éxito",
          icon: "success",
          button: "Cerrar"
        });
      })["catch"](function (error) {
        if (error) {
          _this.handleError(error);
        } else {
          swal.stopLoading();
          swal.close();
        }
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/inventory/InventoryEdit.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/inventory/InventoryEdit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'InventoryEdit',
  data: function data() {
    return {
      modal: true,
      nameState: null,
      referenceState: null,
      priceState: null,
      weightState: null,
      stockState: null,
      categoryState: null,
      data: {
        id: '',
        name: '',
        reference: '',
        price: '',
        weight: '',
        stock: '',
        category: ''
      }
    };
  },
  mounted: function mounted() {
    this.data.id = this.inventoryEdit.values.product.id;
    this.data.name = this.inventoryEdit.values.product.name;
    this.data.reference = this.inventoryEdit.values.product.reference;
    this.data.price = this.inventoryEdit.values.product.price;
    this.data.weight = this.inventoryEdit.values.product.weight;
    this.data.stock = this.inventoryEdit.values.product.stock;
    this.data.category = this.inventoryEdit.values.product.category_id;
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)({
    inventoryEdit: 'Inventory/inventoryEdit'
  })),
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)({
    setModal: 'Inventory/SET_INVENTORY_EDIT_MODAL',
    setModalValues: 'Inventory/SET_INVENTORY_EDIT_VALUES'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)({
    inventoryUpdate: 'Inventory/inventoryUpdate'
  })), {}, {
    closeModal: function closeModal() {
      this.setModal(false);
      this.setModalValues({});
    },
    validateForm: function validateForm() {
      var valid = this.$refs.formEdit.checkValidity();
      this.nameState = valid;
      this.referenceState = valid;
      this.priceState = valid;
      this.weightState = valid;
      this.stockState = valid;
      this.categoryState = valid;
      return valid;
    },
    update: function update() {
      var _this = this;
      if (!this.validateForm()) {
        return;
      }
      swal({
        title: "¿Desea editar los datos del producto?",
        icon: "warning",
        closeOnClickOutside: false,
        closeOnEsc: false,
        buttons: {
          cancel: {
            text: "Cancelar",
            value: false,
            visible: true,
            closeModal: true
          },
          confirm: {
            text: "Editar",
            value: true,
            visible: true,
            className: "bg-primary",
            closeModal: false
          }
        }
      }).then(function (enviar) {
        if (!enviar) throw null;
        var m = document.querySelector(".swal-button--cancel");
        m.setAttribute("disabled", "disabled");
        return _this.inventoryUpdate(_this.data);
      }).then(function (response) {
        swal({
          title: "Se ha editado el producto con éxito",
          icon: "success",
          button: "Cerrar"
        });
      })["catch"](function (error) {
        if (error) {
          _this.handleError(error);
        } else {
          swal.stopLoading();
          swal.close();
        }
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Inventory.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Inventory.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_inventory_InventoryEdit_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/inventory/InventoryEdit.vue */ "./resources/js/components/inventory/InventoryEdit.vue");
/* harmony import */ var _components_inventory_InventoryCreate_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/inventory/InventoryCreate.vue */ "./resources/js/components/inventory/InventoryCreate.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//import Inventory from '../components/inventory/Inventory.vue'


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Inventory',
  components: {
    InventoryEdit: _components_inventory_InventoryEdit_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    InventoryCreate: _components_inventory_InventoryCreate_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      headers: [{
        key: 'id',
        label: 'Id',
        "class": 'text-center'
      }, {
        key: 'name',
        label: 'Nombre',
        "class": 'text-center'
      }, {
        key: 'reference',
        label: 'Referencia',
        "class": 'text-center'
      }, {
        key: 'price',
        label: 'Precio',
        "class": 'text-center'
      }, {
        key: 'weight',
        label: 'Peso',
        "class": 'text-center'
      }, {
        key: 'stock',
        label: 'Stock',
        "class": 'text-center'
      }, {
        key: 'category',
        label: 'Categoría',
        "class": 'text-center'
      }, {
        key: 'Acciones',
        label: 'Acciones',
        "class": 'text-center'
      }]
    };
  },
  mounted: function mounted() {
    this.getInventories();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)({
    inventories: 'Inventory/inventories',
    InventoryEdit: 'Inventory/inventoryEdit',
    InventoryCreateModal: 'Inventory/inventoryCreateModal'
  })),
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapMutations)({
    setModalCreate: 'Inventory/SET_INVENTORY_CREATE_MODAL'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)({
    getInventories: 'Inventory/getInventories',
    inventoryEdit: 'Inventory/inventoryEdit',
    inventoryCreate: 'Inventory/inventoryCreate',
    deleteInventory: 'Inventory/deleteInventory'
  })), {}, {
    create: function create() {
      var _this = this;
      this.inventoryCreate()["catch"](function (error) {
        _this.handleError(error);
      });
      this.setModalCreate(true);
    },
    edit: function edit(value) {
      var _this2 = this;
      this.inventoryEdit(value)["catch"](function (error) {
        _this2.handleError(error);
      });
    },
    destroy: function destroy(value) {
      var _this3 = this;
      swal({
        title: "¿Desea eliminar los datos del producto?",
        icon: "warning",
        closeOnClickOutside: false,
        closeOnEsc: false,
        dangerMode: true,
        buttons: {
          cancel: {
            text: "Cancelar",
            value: false,
            visible: true,
            closeModal: true
          },
          confirm: {
            text: "Eliminar",
            value: true,
            visible: true,
            closeModal: false
          }
        }
      }).then(function (enviar) {
        if (!enviar) throw null;
        var m = document.querySelector(".swal-button--cancel");
        m.setAttribute("disabled", "disabled");
        return _this3.deleteInventory(value);
      }).then(function (response) {
        swal({
          title: "Se ha eliminado el producto con éxito",
          icon: "success",
          button: "Cerrar"
        });
      })["catch"](function (error) {
        if (error) {
          _this3.handleError(error);
        } else {
          swal.stopLoading();
          swal.close();
        }
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/inventory/InventoryCreate.vue?vue&type=template&id=10082c6a&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/inventory/InventoryCreate.vue?vue&type=template&id=10082c6a& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-modal", {
    attrs: {
      size: "lg",
      centered: "",
      "no-close-on-esc": "",
      "no-close-on-backdrop": ""
    },
    scopedSlots: _vm._u([{
      key: "modal-header",
      fn: function fn() {
        return [_c("h5", [_vm._v("Nuevo Producto")])];
      },
      proxy: true
    }, {
      key: "default",
      fn: function fn() {
        return [_c("b-form", {
          ref: "formCreate",
          on: {
            submit: function submit($event) {
              $event.preventDefault();
            }
          }
        }, [_c("b-form-group", {
          attrs: {
            id: "name",
            label: "Nombre producto",
            "label-for": "input-name"
          }
        }, [_c("b-form-input", {
          attrs: {
            id: "input-name",
            state: _vm.nameState,
            required: ""
          },
          model: {
            value: _vm.data.name,
            callback: function callback($$v) {
              _vm.$set(_vm.data, "name", $$v);
            },
            expression: "data.name"
          }
        })], 1), _vm._v(" "), _c("b-form-group", {
          attrs: {
            id: "reference",
            label: "Referencia producto",
            "label-for": "input-reference"
          }
        }, [_c("b-form-input", {
          attrs: {
            id: "input-reference",
            state: _vm.referenceState,
            required: ""
          },
          model: {
            value: _vm.data.reference,
            callback: function callback($$v) {
              _vm.$set(_vm.data, "reference", $$v);
            },
            expression: "data.reference"
          }
        })], 1), _vm._v(" "), _c("b-form-group", {
          attrs: {
            id: "price",
            label: "Precio producto",
            "label-for": "input-price"
          }
        }, [_c("b-form-input", {
          attrs: {
            id: "input-price",
            state: _vm.priceState,
            required: ""
          },
          model: {
            value: _vm.data.price,
            callback: function callback($$v) {
              _vm.$set(_vm.data, "price", $$v);
            },
            expression: "data.price"
          }
        })], 1), _vm._v(" "), _c("b-form-group", {
          attrs: {
            id: "weight",
            label: "Peso producto",
            "label-for": "input-weight"
          }
        }, [_c("b-form-input", {
          attrs: {
            id: "input-weight",
            state: _vm.weightState,
            required: ""
          },
          model: {
            value: _vm.data.weight,
            callback: function callback($$v) {
              _vm.$set(_vm.data, "weight", $$v);
            },
            expression: "data.weight"
          }
        })], 1), _vm._v(" "), _c("b-form-group", {
          attrs: {
            id: "stock",
            label: "Stock producto",
            "label-for": "input-stock"
          }
        }, [_c("b-form-input", {
          attrs: {
            id: "input-stock",
            state: _vm.stockState,
            required: ""
          },
          model: {
            value: _vm.data.stock,
            callback: function callback($$v) {
              _vm.$set(_vm.data, "stock", $$v);
            },
            expression: "data.stock"
          }
        })], 1), _vm._v(" "), _c("b-form-group", {
          attrs: {
            id: "category",
            label: "Categoría producto",
            "label-for": "input-category"
          }
        }, [_c("b-form-select", {
          attrs: {
            id: "input-category",
            options: _vm.inventoryCreate.values.categories,
            state: _vm.categoryState,
            "value-field": "id",
            "text-field": "category"
          },
          model: {
            value: _vm.data.category,
            callback: function callback($$v) {
              _vm.$set(_vm.data, "category", $$v);
            },
            expression: "data.category"
          }
        })], 1)], 1)];
      },
      proxy: true
    }, {
      key: "modal-footer",
      fn: function fn() {
        return [_c("b-button", {
          attrs: {
            variant: "secondary"
          },
          on: {
            click: _vm.closeModal
          }
        }, [_vm._v("Cerrar")]), _vm._v(" "), _c("b-button", {
          attrs: {
            variant: "primary"
          },
          on: {
            click: _vm.create
          }
        }, [_vm._v("Continuar")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.modal,
      callback: function callback($$v) {
        _vm.modal = $$v;
      },
      expression: "modal"
    }
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/inventory/InventoryEdit.vue?vue&type=template&id=a3970010&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/inventory/InventoryEdit.vue?vue&type=template&id=a3970010& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-modal", {
    attrs: {
      size: "lg",
      centered: "",
      "no-close-on-esc": "",
      "no-close-on-backdrop": ""
    },
    scopedSlots: _vm._u([{
      key: "modal-header",
      fn: function fn() {
        return [_c("h5", [_vm._v("Editar Producto - " + _vm._s(_vm.inventoryEdit.values.product.name))])];
      },
      proxy: true
    }, {
      key: "default",
      fn: function fn() {
        return [_c("b-form", {
          ref: "formEdit",
          on: {
            submit: function submit($event) {
              $event.preventDefault();
            }
          }
        }, [_c("b-form-group", {
          attrs: {
            id: "name",
            label: "Nombre producto",
            "label-for": "input-name"
          }
        }, [_c("b-form-input", {
          attrs: {
            id: "input-name",
            state: _vm.nameState,
            required: ""
          },
          model: {
            value: _vm.data.name,
            callback: function callback($$v) {
              _vm.$set(_vm.data, "name", $$v);
            },
            expression: "data.name"
          }
        })], 1), _vm._v(" "), _c("b-form-group", {
          attrs: {
            id: "reference",
            label: "Referencia producto",
            "label-for": "input-reference"
          }
        }, [_c("b-form-input", {
          attrs: {
            id: "input-reference",
            state: _vm.referenceState,
            required: ""
          },
          model: {
            value: _vm.data.reference,
            callback: function callback($$v) {
              _vm.$set(_vm.data, "reference", $$v);
            },
            expression: "data.reference"
          }
        })], 1), _vm._v(" "), _c("b-form-group", {
          attrs: {
            id: "price",
            label: "Precio producto",
            "label-for": "input-price"
          }
        }, [_c("b-form-input", {
          attrs: {
            id: "input-price",
            state: _vm.priceState,
            required: ""
          },
          model: {
            value: _vm.data.price,
            callback: function callback($$v) {
              _vm.$set(_vm.data, "price", $$v);
            },
            expression: "data.price"
          }
        })], 1), _vm._v(" "), _c("b-form-group", {
          attrs: {
            id: "weight",
            label: "Peso producto",
            "label-for": "input-weight"
          }
        }, [_c("b-form-input", {
          attrs: {
            id: "input-weight",
            state: _vm.weightState,
            required: ""
          },
          model: {
            value: _vm.data.weight,
            callback: function callback($$v) {
              _vm.$set(_vm.data, "weight", $$v);
            },
            expression: "data.weight"
          }
        })], 1), _vm._v(" "), _c("b-form-group", {
          attrs: {
            id: "stock",
            label: "Stock producto",
            "label-for": "input-stock"
          }
        }, [_c("b-form-input", {
          attrs: {
            id: "input-stock",
            state: _vm.stockState,
            required: ""
          },
          model: {
            value: _vm.data.stock,
            callback: function callback($$v) {
              _vm.$set(_vm.data, "stock", $$v);
            },
            expression: "data.stock"
          }
        })], 1), _vm._v(" "), _c("b-form-group", {
          attrs: {
            id: "category",
            label: "Categoría producto",
            "label-for": "input-category"
          }
        }, [_c("b-form-select", {
          attrs: {
            id: "input-category",
            options: _vm.inventoryEdit.values.categories,
            state: _vm.categoryState,
            "value-field": "id",
            "text-field": "category"
          },
          model: {
            value: _vm.data.category,
            callback: function callback($$v) {
              _vm.$set(_vm.data, "category", $$v);
            },
            expression: "data.category"
          }
        })], 1)], 1)];
      },
      proxy: true
    }, {
      key: "modal-footer",
      fn: function fn() {
        return [_c("b-button", {
          attrs: {
            variant: "secondary"
          },
          on: {
            click: _vm.closeModal
          }
        }, [_vm._v("Cerrar")]), _vm._v(" "), _c("b-button", {
          attrs: {
            variant: "primary"
          },
          on: {
            click: _vm.update
          }
        }, [_vm._v("Continuar")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.modal,
      callback: function callback($$v) {
        _vm.modal = $$v;
      },
      expression: "modal"
    }
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Inventory.vue?vue&type=template&id=81f8c566&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Inventory.vue?vue&type=template&id=81f8c566& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm.InventoryCreateModal ? _c("InventoryCreate") : _vm._e(), _vm._v(" "), _vm.InventoryEdit.modal ? _c("InventoryEdit") : _vm._e(), _vm._v(" "), _c("b-row", [_c("b-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("b-card", {
    attrs: {
      "header-tag": "header"
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function fn() {
        return [_c("h4", {
          staticClass: "text-primary"
        }, [_vm._v("Inventario")])];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("b-card-text", [_c("b-button", {
    staticClass: "mb-3",
    attrs: {
      variant: "primary"
    },
    on: {
      click: _vm.create
    }
  }, [_vm._v("Crear producto")]), _vm._v(" "), _c("b-table", {
    attrs: {
      responsive: "",
      bordered: "",
      striped: "",
      hover: "",
      items: _vm.inventories,
      fields: _vm.headers
    },
    scopedSlots: _vm._u([{
      key: "cell(Acciones)",
      fn: function fn(data) {
        return [_c("span", {
          staticClass: "text-primary",
          staticStyle: {
            cursor: "pointer"
          },
          on: {
            click: function click($event) {
              return _vm.edit(data.item.id);
            }
          }
        }, [_c("b-icon", {
          attrs: {
            icon: "pencil",
            variant: "primary"
          }
        }), _vm._v("\n                                Editar\n                            ")], 1), _vm._v(" "), _c("span", {
          staticClass: "text-danger",
          staticStyle: {
            cursor: "pointer"
          },
          on: {
            click: function click($event) {
              return _vm.destroy(data.item.id);
            }
          }
        }, [_c("b-icon", {
          attrs: {
            icon: "trash",
            variant: "danger"
          }
        }), _vm._v("\n                                Eliminar\n                            ")], 1)];
      }
    }])
  })], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/inventory/InventoryCreate.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/inventory/InventoryCreate.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InventoryCreate_vue_vue_type_template_id_10082c6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InventoryCreate.vue?vue&type=template&id=10082c6a& */ "./resources/js/components/inventory/InventoryCreate.vue?vue&type=template&id=10082c6a&");
/* harmony import */ var _InventoryCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InventoryCreate.vue?vue&type=script&lang=js& */ "./resources/js/components/inventory/InventoryCreate.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InventoryCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InventoryCreate_vue_vue_type_template_id_10082c6a___WEBPACK_IMPORTED_MODULE_0__.render,
  _InventoryCreate_vue_vue_type_template_id_10082c6a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/inventory/InventoryCreate.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/inventory/InventoryEdit.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/inventory/InventoryEdit.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InventoryEdit_vue_vue_type_template_id_a3970010___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InventoryEdit.vue?vue&type=template&id=a3970010& */ "./resources/js/components/inventory/InventoryEdit.vue?vue&type=template&id=a3970010&");
/* harmony import */ var _InventoryEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InventoryEdit.vue?vue&type=script&lang=js& */ "./resources/js/components/inventory/InventoryEdit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InventoryEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InventoryEdit_vue_vue_type_template_id_a3970010___WEBPACK_IMPORTED_MODULE_0__.render,
  _InventoryEdit_vue_vue_type_template_id_a3970010___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/inventory/InventoryEdit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Inventory.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Inventory.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Inventory_vue_vue_type_template_id_81f8c566___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Inventory.vue?vue&type=template&id=81f8c566& */ "./resources/js/views/Inventory.vue?vue&type=template&id=81f8c566&");
/* harmony import */ var _Inventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Inventory.vue?vue&type=script&lang=js& */ "./resources/js/views/Inventory.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Inventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Inventory_vue_vue_type_template_id_81f8c566___WEBPACK_IMPORTED_MODULE_0__.render,
  _Inventory_vue_vue_type_template_id_81f8c566___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Inventory.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/inventory/InventoryCreate.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/inventory/InventoryCreate.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InventoryCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InventoryCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/inventory/InventoryCreate.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InventoryCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/inventory/InventoryEdit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/inventory/InventoryEdit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InventoryEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InventoryEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/inventory/InventoryEdit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InventoryEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Inventory.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Inventory.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Inventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Inventory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Inventory.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Inventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/inventory/InventoryCreate.vue?vue&type=template&id=10082c6a&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/inventory/InventoryCreate.vue?vue&type=template&id=10082c6a& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InventoryCreate_vue_vue_type_template_id_10082c6a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InventoryCreate_vue_vue_type_template_id_10082c6a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InventoryCreate_vue_vue_type_template_id_10082c6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InventoryCreate.vue?vue&type=template&id=10082c6a& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/inventory/InventoryCreate.vue?vue&type=template&id=10082c6a&");


/***/ }),

/***/ "./resources/js/components/inventory/InventoryEdit.vue?vue&type=template&id=a3970010&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/inventory/InventoryEdit.vue?vue&type=template&id=a3970010& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InventoryEdit_vue_vue_type_template_id_a3970010___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InventoryEdit_vue_vue_type_template_id_a3970010___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_InventoryEdit_vue_vue_type_template_id_a3970010___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InventoryEdit.vue?vue&type=template&id=a3970010& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/inventory/InventoryEdit.vue?vue&type=template&id=a3970010&");


/***/ }),

/***/ "./resources/js/views/Inventory.vue?vue&type=template&id=81f8c566&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Inventory.vue?vue&type=template&id=81f8c566& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Inventory_vue_vue_type_template_id_81f8c566___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Inventory_vue_vue_type_template_id_81f8c566___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Inventory_vue_vue_type_template_id_81f8c566___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Inventory.vue?vue&type=template&id=81f8c566& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Inventory.vue?vue&type=template&id=81f8c566&");


/***/ })

}]);