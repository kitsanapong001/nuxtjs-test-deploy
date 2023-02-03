exports.ids = [4];
exports.modules = {

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/page1.vue?vue&type=template&id=26dce316&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-container', [_c('h1', [_vm._v(_vm._s(_vm.$t('page_1.title')))]), _vm._v(" "), _c('h4', [_vm._v(_vm._s(_vm.$t('page_1.body')))]), _vm._v(" "), _c('h4', [_vm._v(_vm._s(_vm.$t('page_1.footer')))]), _vm._v(" "), _c('b-row', _vm._l(_vm.$t('page_1.product'), function (item, i) {
    return _c('b-col', {
      key: i,
      attrs: {
        "cols-3": ""
      }
    }, [_c('b-card', {
      staticClass: "mb-2",
      staticStyle: {
        "max-width": "20rem"
      },
      attrs: {
        "title": String(item.product_name),
        "img-src": item.product_img,
        "img-alt": "Image",
        "img-top": "",
        "tag": "article"
      }
    }, [_c('b-card-text', [_vm._v("\n          " + _vm._s(item.product_id) + "\n      ")]), _vm._v(" "), _c('b-button', {
      attrs: {
        "to": `shoes/${i + 1}`,
        "variant": "info"
      }
    }, [_vm._v("Buy")])], 1)], 1);
  }), 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/page1.vue?vue&type=template&id=26dce316&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/page1.vue?vue&type=script&lang=js&
/* harmony default export */ var page1vue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./pages/page1.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_page1vue_type_script_lang_js_ = (page1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/page1.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_page1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6aec7656"
  
)

/* harmony default export */ var page1 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=page1.js.map