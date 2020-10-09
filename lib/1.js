(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/Schema/SchemaItem.vue?vue&type=template&id=352b99f9&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-row",
        { attrs: { type: "flex", align: "middle" } },
        [
          _c(
            "el-col",
            {
              staticClass: "col-item name-item col-item-name",
              style: _vm.tagPaddingLeftStyle,
              attrs: { span: 8 }
            },
            [
              _c(
                "el-row",
                {
                  attrs: {
                    type: "flex",
                    justify: "space-around",
                    align: "middle"
                  }
                },
                [
                  _c(
                    "el-col",
                    { staticClass: "down-style-col", attrs: { span: 2 } },
                    [
                      _vm.value.type === "object"
                        ? _c(
                            "span",
                            {
                              staticClass: "down-style",
                              on: { click: _vm.handleClickIcon }
                            },
                            [
                              _vm.showIcon
                                ? _c("i", {
                                    staticClass:
                                      "el-icon-caret-bottom icon-object"
                                  })
                                : _vm._e(),
                              !_vm.showIcon
                                ? _c("i", {
                                    staticClass:
                                      "el-icon-caret-right icon-object"
                                  })
                                : _vm._e()
                            ]
                          )
                        : _vm._e()
                    ]
                  ),
                  _c(
                    "el-col",
                    { staticClass: "el-input--small", attrs: { span: 20 } },
                    [
                      _c("input", {
                        staticClass: "el-input el-input__inner",
                        class: { "is-disabled": _vm.value.disabled },
                        attrs: { size: "small", disabled: _vm.value.disabled },
                        domProps: { value: _vm.name },
                        on: { change: _vm.handleNameChange }
                      })
                    ]
                  ),
                  _c(
                    "el-col",
                    {
                      staticStyle: { "text-align": "center" },
                      attrs: { span: 2 }
                    },
                    [
                      _c(
                        "el-tooltip",
                        { attrs: { placement: "top", content: "是否必须" } },
                        [
                          _c("el-checkbox", {
                            attrs: {
                              checked:
                                (_vm.data.required &&
                                  _vm.data.required.indexOf(_vm.name) != -1) ||
                                false
                            },
                            on: { change: _vm.handleEnableRequire }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _c(
            "el-col",
            { staticClass: "col-item col-item-type", attrs: { span: 3 } },
            [
              _c(
                "el-select",
                {
                  staticClass: "type-select-style",
                  attrs: {
                    size: "small",
                    value: _vm.value.type,
                    disabled: _vm.value.disabled && !_vm.value.canChangeType
                  },
                  on: { change: _vm.handleChangeType }
                },
                _vm._l(_vm.schemaTypes, function(item) {
                  return _c("el-option", {
                    key: item,
                    attrs: { value: item, label: item }
                  })
                }),
                1
              )
            ],
            1
          ),
          _vm.isMock
            ? _c(
                "el-col",
                { staticClass: "col-item col-item-mock", attrs: { span: 3 } },
                [
                  _c("MockSelect", {
                    attrs: { schema: _vm.value },
                    on: {
                      showEdit: function($event) {
                        return _vm.handleAction({ eventType: "mock-edit" })
                      },
                      change: _vm.handleChangeMock
                    }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm.showTitle
            ? _c(
                "el-col",
                {
                  staticClass: "col-item col-item-mock",
                  attrs: { span: _vm.isMock ? 4 : 5 }
                },
                [
                  _c(
                    "el-input",
                    {
                      attrs: {
                        disabled: _vm.value.disabled,
                        size: "small",
                        placeholder: "标题"
                      },
                      model: {
                        value: _vm.value.title,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "title", $$v)
                        },
                        expression: "value.title"
                      }
                    },
                    [
                      _c("i", {
                        staticClass: "el-icon-edit",
                        attrs: { slot: "append" },
                        on: {
                          click: function($event) {
                            return _vm.handleAction({
                              eventType: "show-edit",
                              field: "title"
                            })
                          }
                        },
                        slot: "append"
                      })
                    ]
                  )
                ],
                1
              )
            : _vm._e(),
          !_vm.showTitle && _vm.showDefaultValue
            ? _c(
                "el-col",
                {
                  staticClass: "col-item col-item-mock",
                  attrs: { span: _vm.isMock ? 4 : 5 }
                },
                [
                  _c(
                    "el-input",
                    {
                      attrs: {
                        placeholder: "默认值",
                        size: "small",
                        disabled:
                          _vm.value.type === "object" ||
                          _vm.value.type === "array" ||
                          _vm.value.disabled
                      },
                      model: {
                        value: _vm.value.default,
                        callback: function($$v) {
                          _vm.$set(
                            _vm.value,
                            "default",
                            typeof $$v === "string" ? $$v.trim() : $$v
                          )
                        },
                        expression: "value.default"
                      }
                    },
                    [
                      _c("i", {
                        staticClass: "el-icon-edit",
                        attrs: { slot: "append" },
                        on: {
                          click: function($event) {
                            return _vm.handleAction({
                              eventType: "show-edit",
                              field: "default"
                            })
                          }
                        },
                        slot: "append"
                      })
                    ]
                  )
                ],
                1
              )
            : _vm._e(),
          _c(
            "el-col",
            {
              staticClass: "col-item col-item-desc",
              attrs: { span: _vm.isMock ? 4 : 5 }
            },
            [
              _c(
                "el-input",
                {
                  attrs: {
                    disabled: _vm.value.disabled,
                    size: "small",
                    placeholder: "备注"
                  },
                  model: {
                    value: _vm.value.description,
                    callback: function($$v) {
                      _vm.$set(_vm.value, "description", $$v)
                    },
                    expression: "value.description"
                  }
                },
                [
                  _c("i", {
                    staticClass: "el-icon-edit",
                    attrs: { slot: "append" },
                    on: {
                      click: function($event) {
                        return _vm.handleAction({
                          eventType: "show-edit",
                          field: "description"
                        })
                      }
                    },
                    slot: "append"
                  })
                ]
              )
            ],
            1
          ),
          _c(
            "el-col",
            {
              staticClass: "col-item col-item-setting",
              attrs: { span: _vm.isMock ? 2 : 3 }
            },
            [
              _c(
                "span",
                {
                  staticClass: "adv-set",
                  on: {
                    click: function($event) {
                      return _vm.handleAction({
                        eventType: "setting",
                        schemaType: _vm.value.type
                      })
                    }
                  }
                },
                [
                  _c(
                    "el-tooltip",
                    { attrs: { placement: "top", content: "高级设置" } },
                    [_c("i", { staticClass: "el-icon-setting" })]
                  )
                ],
                1
              ),
              _c(
                "span",
                {
                  staticClass: "delete-item",
                  class: { hidden: _vm.value.disabled },
                  on: {
                    click: function($event) {
                      return _vm.handleAction({ eventType: "delete-field" })
                    }
                  }
                },
                [_c("i", { staticClass: "el-icon-close close" })]
              ),
              _vm.value.type === "object"
                ? _c("DropPlus", {
                    attrs: { prefix: _vm.prefix, name: _vm.name },
                    on: { "add-field": _vm.handleAction }
                  })
                : _vm._e(),
              _vm.value.type !== "object"
                ? _c(
                    "span",
                    {
                      on: {
                        click: function($event) {
                          return _vm.handleAction({
                            eventType: "add-field",
                            isChild: false
                          })
                        }
                      }
                    },
                    [
                      _c(
                        "el-tooltip",
                        {
                          attrs: { placement: "top", content: "添加兄弟节点" }
                        },
                        [_c("i", { staticClass: "el-icon-plus plus" })]
                      )
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          )
        ],
        1
      ),
      _c(
        "div",
        { staticClass: "option-formStyle" },
        [
          _vm.value.type === "array"
            ? [
                _c("schema-array", {
                  attrs: {
                    prefix: _vm.prefixArray,
                    data: _vm.value,
                    "is-mock": _vm.isMock,
                    "show-title": _vm.showTitle,
                    "show-default-value": _vm.showDefaultValue,
                    "editor-id": _vm.editorId
                  }
                })
              ]
            : _vm._e(),
          _vm.value.type === "object" && _vm.showIcon
            ? [
                _c("schema-object", {
                  attrs: {
                    prefix: _vm.nameArray,
                    data: _vm.value,
                    "is-mock": _vm.isMock,
                    "show-title": _vm.showTitle,
                    "show-default-value": _vm.showDefaultValue,
                    "editor-id": _vm.editorId
                  }
                })
              ]
            : _vm._e()
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/Schema/SchemaItem.vue?vue&type=template&id=352b99f9&

// EXTERNAL MODULE: ./node_modules/lodash/isUndefined.js
var isUndefined = __webpack_require__(57);
var isUndefined_default = /*#__PURE__*/__webpack_require__.n(isUndefined);

// EXTERNAL MODULE: ./src/MockSelect/index.vue + 4 modules
var MockSelect = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/Schema/DropPlus.vue?vue&type=template&id=050a88e4&scoped=true&
var DropPlusvue_type_template_id_050a88e4_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-tooltip",
    { attrs: { placement: "top", content: "添加兄弟/子节点" } },
    [
      _c(
        "el-dropdown",
        { attrs: { trigger: "click" } },
        [
          _c("i", { staticClass: "el-icon-plus plus" }),
          _c(
            "el-dropdown-menu",
            { attrs: { slot: "dropdown" }, slot: "dropdown" },
            [
              _c("el-dropdown-item", [
                _c(
                  "span",
                  {
                    on: {
                      click: function($event) {
                        return _vm.addFieldAction({
                          type: "add-field",
                          isChild: false
                        })
                      }
                    }
                  },
                  [_vm._v("兄弟节点")]
                )
              ]),
              _c("el-dropdown-item", [
                _c(
                  "span",
                  {
                    on: {
                      click: function($event) {
                        return _vm.addFieldAction({
                          type: "add-field",
                          isChild: true
                        })
                      }
                    }
                  },
                  [_vm._v("子节点")]
                )
              ])
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var DropPlusvue_type_template_id_050a88e4_scoped_true_staticRenderFns = []
DropPlusvue_type_template_id_050a88e4_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./src/Schema/DropPlus.vue?vue&type=template&id=050a88e4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/Schema/DropPlus.vue?vue&type=script&lang=js&
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
/* harmony default export */ var DropPlusvue_type_script_lang_js_ = ({
  name: 'DropPlus',
  components: {},
  props: {
    prefix: {
      type: Array,
      default: () => []
    },
    name: {
      type: String,
      default: ''
    }
  },

  data() {
    return {};
  },

  created() {},

  mounted() {},

  methods: {
    addFieldAction(...args) {
      this.$emit('add-field', ...args);
    }

  }
});
// CONCATENATED MODULE: ./src/Schema/DropPlus.vue?vue&type=script&lang=js&
 /* harmony default export */ var Schema_DropPlusvue_type_script_lang_js_ = (DropPlusvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/Schema/DropPlus.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Schema_DropPlusvue_type_script_lang_js_,
  DropPlusvue_type_template_id_050a88e4_scoped_true_render,
  DropPlusvue_type_template_id_050a88e4_scoped_true_staticRenderFns,
  false,
  null,
  "050a88e4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/Schema/DropPlus.vue"
/* harmony default export */ var DropPlus = (component.exports);
// EXTERNAL MODULE: ./src/Schema/SchemaObject.vue + 4 modules
var SchemaObject = __webpack_require__(22);

// EXTERNAL MODULE: ./src/Schema/SchemaArray.vue + 4 modules
var SchemaArray = __webpack_require__(58);

// EXTERNAL MODULE: ./src/utils.js
var utils = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/Schema/SchemaItem.vue?vue&type=script&lang=js&
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






/* harmony default export */ var SchemaItemvue_type_script_lang_js_ = ({
  name: 'SchemaItem',
  components: {
    MockSelect: MockSelect["a" /* default */],
    DropPlus: DropPlus,
    'schema-array': SchemaArray["a" /* default */],
    'schema-object': SchemaObject["a" /* default */]
  },
  props: {
    isMock: {
      type: Boolean,
      default: true
    },
    showTitle: {
      type: Boolean,
      default: false
    },
    showDefaultValue: {
      type: Boolean,
      default: false
    },
    editorId: {
      type: String,
      default: 'editor_id'
    },
    name: {
      type: String,
      default: ''
    },
    prefix: {
      type: Array,
      default: () => []
    },
    data: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      showIcon: true,
      tagPaddingLeftStyle: {},
      schemaTypes: utils["b" /* SCHEMA_TYPE */],
      value: this.data.properties[this.name]
    };
  },

  computed: {
    nameArray() {
      const prefixArray = [].concat(this.prefix, this.name);
      return [].concat(prefixArray, 'properties');
    },

    prefixArray() {
      return [].concat(this.prefix, this.name); // return [].concat(this.prefix, 'items')
    }

  },

  beforeMount() {
    const length = this.prefix.filter(name => name !== 'properties').length;
    this.tagPaddingLeftStyle = {
      paddingLeft: `${20 * (length + 1)}px`
    };
  },

  methods: {
    isUndefined() {
      return isUndefined_default.a;
    },

    handleClickIcon() {
      this.showIcon = !this.showIcon;
    },

    handleAction(options) {
      const {
        prefix,
        name
      } = this;
      this.$event.emit(`schema-update-${this.editorId}`, {
        eventType: 'add-field',
        prefix,
        name,
        ...options
      });
    },

    handleNameChange(e) {
      this.handleAction({
        eventType: 'update-field-name',
        value: e.target.value
      });
    },

    handleEnableRequire(e) {
      const {
        prefix,
        name
      } = this;
      this.$event.emit(`schema-update-${this.editorId}`, {
        eventType: 'toggle-required',
        prefix,
        name,
        required: e
      });
    },

    handleChangeMock() {},

    handleChangeType(value) {
      this.handleAction({
        eventType: 'schema-type',
        value
      });
    }

  }
});
// CONCATENATED MODULE: ./src/Schema/SchemaItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var Schema_SchemaItemvue_type_script_lang_js_ = (SchemaItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/Schema/SchemaItem.vue





/* normalize component */

var SchemaItem_component = Object(componentNormalizer["a" /* default */])(
  Schema_SchemaItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var SchemaItem_api; }
SchemaItem_component.options.__file = "src/Schema/SchemaItem.vue"
/* harmony default export */ var SchemaItem = __webpack_exports__["default"] = (SchemaItem_component.exports);

/***/ })

}]);