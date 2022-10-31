"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Sale"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Sale.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Sale.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Sale',
  data: function data() {
    return {
      modal: false,
      quantityState: null,
      data: [],
      selectedProduct: '',
      dataSelected: {
        quantity: ''
      },
      products: [],
      perPage: 15,
      currentPage: 1,
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
      }],
      cartHeaders: [{
        key: 'id',
        label: 'Id',
        "class": 'text-center'
      }, {
        key: 'name',
        label: 'Producto',
        "class": 'text-center'
      }, {
        key: 'price',
        label: 'Precio',
        "class": 'text-center'
      }, {
        key: 'quantity',
        label: 'Cantidad',
        "class": 'text-center'
      }, {
        key: 'total',
        label: 'Total',
        "class": 'text-center'
      }, {
        key: 'Acciones',
        label: 'Acciones',
        "class": 'text-center'
      }],
      search: ''
    };
  },
  mounted: function mounted() {
    this.getProducts();
  },
  computed: {
    rows: function rows() {
      return this.productsFiltered.length;
    },
    totalQuantity: function totalQuantity() {
      var sum = this.data.reduce(function (a, b) {
        return a + parseInt(b.quantity);
      }, 0);
      return sum;
    },
    totalValue: function totalValue() {
      var sum = this.data.reduce(function (a, b) {
        return a + parseInt(b.price) * b.quantity;
      }, 0);
      console.log(sum);
      return sum;
    },
    productsFiltered: function productsFiltered() {
      var _this = this;
      if (this.search != '') {
        return this.products.filter(function (product) {
          return product.name.includes(_this.search);
        });
      }
      return this.products;
    }
  },
  methods: {
    getProducts: function getProducts() {
      var _this2 = this;
      axios.get('products').then(function (response) {
        _this2.products = response.data.data;
      })["catch"](function (error) {
        reject(error);
      });
    },
    addModal: function addModal(value) {
      this.modal = true;
      this.selectedProduct = value;
    },
    closeModal: function closeModal() {
      this.selectedProduct = '';
      this.dataSelected.quantity = '';
      this.modal = false;
    },
    validateForm: function validateForm() {
      var valid = this.$refs.form.checkValidity();
      this.quantityState = valid;
      return valid;
    },
    add: function add() {
      if (!this.validateForm()) {
        return;
      }
      if (this.selectedProduct.stock < this.dataSelected.quantity) {
        swal({
          title: 'No se puede completar la acción.',
          text: 'La cantidad seleccionada es superior al stock disponible.',
          icon: 'error',
          className: 'swalError',
          buttons: {
            cancel: {
              text: "Cerrar",
              value: null,
              visible: true,
              closeModal: true
            }
          }
        });
        return false;
      }
      this.selectedProduct.quantity = this.dataSelected.quantity;
      this.data.push(this.selectedProduct);
      this.selectedProduct = '';
      this.dataSelected.quantity = '';
      this.quantityState = null;
      this.modal = false;
    },
    destroy: function destroy(value) {
      var i = this.data.map(function (product) {
        return product.id;
      }).indexOf(value);
      this.data.splice(i, 1);
    },
    validateButtons: function validateButtons(value) {
      var index = this.data.map(function (product) {
        return product.id;
      }).indexOf(value);
      if (index > -1) {
        return true;
      }
      return false;
    },
    shop: function shop() {
      var _this3 = this;
      swal({
        title: "¿Desea completar la compra?",
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
            text: "Completar",
            value: true,
            visible: true,
            className: "bg-success",
            closeModal: false
          }
        }
      }).then(function (enviar) {
        if (!enviar) throw null;
        var m = document.querySelector(".swal-button--cancel");
        m.setAttribute("disabled", "disabled");
        var formData = new FormData();
        formData.append('purchase', JSON.stringify(_this3.data));
        return new Promise(function (resolve, reject) {
          axios.post('order', formData).then(function (response) {
            _this3.getProducts();
            _this3.data = [];
            swal({
              title: "Se ha completado la compra con exito",
              icon: "success",
              button: "Cerrar"
            });
          })["catch"](function (error) {
            swal({
              title: 'Ha ocurrido un error',
              text: error.response.data.message,
              icon: 'error',
              className: 'swalError',
              buttons: {
                cancel: {
                  text: "Cerrar",
                  value: null,
                  visible: true,
                  closeModal: true
                }
              }
            });
          });
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Sale.vue?vue&type=template&id=5e7a2466&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Sale.vue?vue&type=template&id=5e7a2466& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b-modal", {
    attrs: {
      size: "lg",
      centered: "",
      "no-close-on-esc": "",
      "no-close-on-backdrop": ""
    },
    scopedSlots: _vm._u([{
      key: "modal-header",
      fn: function fn() {
        return [_c("h5", [_vm._v("Agregar Producto - (" + _vm._s(_vm.selectedProduct.id) + ") " + _vm._s(_vm.selectedProduct.name))])];
      },
      proxy: true
    }, {
      key: "default",
      fn: function fn() {
        return [_c("b-form", {
          ref: "form",
          on: {
            submit: function submit($event) {
              $event.preventDefault();
            }
          }
        }, [_c("b-form-group", {
          attrs: {
            id: "quantity",
            label: "Cantidad producto",
            "label-for": "input-quantity"
          }
        }, [_c("b-form-input", {
          attrs: {
            id: "input-quantity",
            type: "number",
            state: _vm.quantityState,
            min: "1",
            required: ""
          },
          model: {
            value: _vm.dataSelected.quantity,
            callback: function callback($$v) {
              _vm.$set(_vm.dataSelected, "quantity", $$v);
            },
            expression: "dataSelected.quantity"
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
            variant: "success"
          },
          on: {
            click: _vm.add
          }
        }, [_vm._v("Agregar")])];
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
  }), _vm._v(" "), _c("div", [_c("b-card", {
    staticClass: "mb-2",
    attrs: {
      title: "Carrito de compras",
      tag: "article"
    }
  }, [_c("b-card-text", [_vm.data.length == 0 ? _c("div", [_c("span", [_vm._v("Carrito vacio.")])]) : _c("div", [_c("b-table-lite", {
    attrs: {
      responsive: "",
      small: "",
      hover: "",
      items: _vm.data,
      fields: _vm.cartHeaders,
      "foot-clone": "",
      "foot-row-variant": "secondary"
    },
    scopedSlots: _vm._u([{
      key: "cell(price)",
      fn: function fn(data) {
        return [_vm._v("\n                            " + _vm._s(_vm.formatNumber(data.item.price)) + "\n                        ")];
      }
    }, {
      key: "cell(total)",
      fn: function fn(data) {
        return [_vm._v("\n                            " + _vm._s(_vm.formatNumber(data.item.price * data.item.quantity)) + "\n                        ")];
      }
    }, {
      key: "cell(Acciones)",
      fn: function fn(data) {
        return [_c("span", {
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
    }, {
      key: "foot()",
      fn: function fn() {
        return [_c("span")];
      },
      proxy: true
    }, {
      key: "foot(quantity)",
      fn: function fn() {
        return [_c("span", [_vm._v(_vm._s(_vm.totalQuantity))])];
      },
      proxy: true
    }, {
      key: "foot(total)",
      fn: function fn() {
        return [_c("span", [_vm._v(_vm._s(_vm.formatNumber(_vm.totalValue)))])];
      },
      proxy: true
    }])
  })], 1)]), _vm._v(" "), _c("b-button", {
    attrs: {
      variant: "success",
      disabled: _vm.data.length == 0
    },
    on: {
      click: _vm.shop
    }
  }, [_vm._v("Comprar")])], 1)], 1), _vm._v(" "), _c("hr"), _vm._v(" "), _c("b-row", [_c("b-col", {
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
        }, [_vm._v("Productos")])];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("b-card-text", [_c("b-form-group", {
    attrs: {
      id: "search",
      label: "Buscar",
      "label-for": "input-search"
    }
  }, [_c("b-form-input", {
    attrs: {
      id: "input-search"
    },
    model: {
      value: _vm.search,
      callback: function callback($$v) {
        _vm.search = $$v;
      },
      expression: "search"
    }
  })], 1), _vm._v(" "), _c("b-table", {
    attrs: {
      responsive: "",
      bordered: "",
      striped: "",
      hover: "",
      items: _vm.productsFiltered,
      fields: _vm.headers,
      id: "products-table",
      "per-page": _vm.perPage,
      "current-page": _vm.currentPage,
      "show-empty": ""
    },
    scopedSlots: _vm._u([{
      key: "empty",
      fn: function fn() {
        return [_c("h5", {
          staticClass: "text-center"
        }, [_vm._v("No se encontraron registros")])];
      },
      proxy: true
    }, {
      key: "cell(price)",
      fn: function fn(data) {
        return [_vm._v("\n                            " + _vm._s(_vm.formatNumber(data.item.price)) + "\n                        ")];
      }
    }, {
      key: "cell(Acciones)",
      fn: function fn(data) {
        return [data.item.stock == 0 ? [_c("span", {
          staticClass: "text-danger"
        }, [_vm._v("No disponible")])] : _vm.validateButtons(data.item.id) ? [_c("span", {
          staticClass: "text-primary"
        }, [_vm._v("Producto agregado")])] : [_c("span", {
          staticClass: "text-success",
          staticStyle: {
            cursor: "pointer"
          },
          on: {
            click: function click($event) {
              return _vm.addModal(data.item);
            }
          }
        }, [_c("b-icon", {
          attrs: {
            icon: "cart-plus",
            variant: "success"
          }
        }), _vm._v("\n                                    Agregar\n                                ")], 1)]];
      }
    }])
  }), _vm._v(" "), _c("b-pagination", {
    attrs: {
      "total-rows": _vm.rows,
      "per-page": _vm.perPage,
      align: "center",
      "aria-controls": "products-table",
      "first-number": "",
      "last-number": ""
    },
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  })], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/views/Sale.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Sale.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sale_vue_vue_type_template_id_5e7a2466___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sale.vue?vue&type=template&id=5e7a2466& */ "./resources/js/views/Sale.vue?vue&type=template&id=5e7a2466&");
/* harmony import */ var _Sale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sale.vue?vue&type=script&lang=js& */ "./resources/js/views/Sale.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sale_vue_vue_type_template_id_5e7a2466___WEBPACK_IMPORTED_MODULE_0__.render,
  _Sale_vue_vue_type_template_id_5e7a2466___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Sale.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Sale.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Sale.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sale.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Sale.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Sale.vue?vue&type=template&id=5e7a2466&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Sale.vue?vue&type=template&id=5e7a2466& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sale_vue_vue_type_template_id_5e7a2466___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sale_vue_vue_type_template_id_5e7a2466___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sale_vue_vue_type_template_id_5e7a2466___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Sale.vue?vue&type=template&id=5e7a2466& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Sale.vue?vue&type=template&id=5e7a2466&");


/***/ })

}]);