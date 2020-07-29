(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customers/New.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/customers/New.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validate.js */ "./node_modules/validate.js/validate.js");
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validate_js__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "new-customer",
  data: function data() {
    return {
      customer: {
        name: "",
        email: "",
        phone: "",
        website: ""
      },
      errors: null
    };
  },
  computed: {
    currentUser: function currentUser() {
      return this.$store.getters.currentUser;
    }
  },
  methods: {
    add: function add() {
      var _this = this;

      this.errors = null;
      var constraints = this.getConstraints();
      var errors = validate_js__WEBPACK_IMPORTED_MODULE_0___default()(this.$data.customer, constraints);

      if (errors) {
        this.errors = errors;
        return;
      }

      if (!this.$store.getters.customers.length) {
        this.$store.dispatch('getCustomers');
        console.log("List added");
      }

      axios.post('/api/customers/new', this.$data.customer).then(function (res) {
        console.log(res.data.customer);

        _this.$store.commit('ADD_CUSTOMER', res.data.customer);

        _this.$router.push('/customers');
      })["catch"](function (err) {
        console.error(err);
      });
    },
    getConstraints: function getConstraints() {
      return {
        name: {
          presence: true,
          length: {
            minimum: 3,
            message: "Must be least 3 characters long"
          }
        },
        email: {
          presence: true,
          email: true
        },
        phone: {
          presence: true,
          numericality: true,
          length: {
            minimum: 9,
            message: "Must be at least 9 digits long"
          }
        },
        website: {
          presence: true,
          url: true
        }
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customers/New.vue?vue&type=template&id=88063cea&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/customers/New.vue?vue&type=template&id=88063cea& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.add($event)
          }
        }
      },
      [
        _c("table", { staticClass: "table" }, [
          _c("tr", [
            _c("th", [_vm._v("Name")]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.customer.name,
                    expression: "customer.name"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", placeholder: "Customer Name" },
                domProps: { value: _vm.customer.name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.customer, "name", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Email")]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.customer.email,
                    expression: "customer.email"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "email", placeholder: "Customer Email" },
                domProps: { value: _vm.customer.email },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.customer, "email", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Phone")]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.customer.phone,
                    expression: "customer.phone"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "tel", placeholder: "Customer Phone" },
                domProps: { value: _vm.customer.phone },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.customer, "phone", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Website")]),
            _vm._v(" "),
            _c("td", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.customer.website,
                    expression: "customer.website"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", placeholder: "Customer Wrbsite" },
                domProps: { value: _vm.customer.website },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.customer, "website", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c(
              "th",
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-default",
                    attrs: { to: "/customers" }
                  },
                  [_vm._v("Cancel")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm._m(0)
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _vm.errors
      ? _c(
          "div",
          _vm._l(_vm.errors, function(error, index) {
            return _c(
              "b-alert",
              { key: index, attrs: { show: "", variant: "danger" } },
              [
                _c("strong", { staticClass: "text-uppercase" }, [
                  _vm._v(_vm._s(index) + ":")
                ]),
                _vm._v(" " + _vm._s(error.join(",\n")) + "\n\t\t")
              ]
            )
          }),
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-right" }, [
      _c("input", {
        staticClass: "btn btn-outline-primary",
        attrs: { type: "submit", value: "Create customer" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/customers/New.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/customers/New.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _New_vue_vue_type_template_id_88063cea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./New.vue?vue&type=template&id=88063cea& */ "./resources/js/components/customers/New.vue?vue&type=template&id=88063cea&");
/* harmony import */ var _New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./New.vue?vue&type=script&lang=js& */ "./resources/js/components/customers/New.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _New_vue_vue_type_template_id_88063cea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _New_vue_vue_type_template_id_88063cea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/customers/New.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/customers/New.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/customers/New.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./New.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customers/New.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/customers/New.vue?vue&type=template&id=88063cea&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/customers/New.vue?vue&type=template&id=88063cea& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_88063cea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./New.vue?vue&type=template&id=88063cea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/customers/New.vue?vue&type=template&id=88063cea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_88063cea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_88063cea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);