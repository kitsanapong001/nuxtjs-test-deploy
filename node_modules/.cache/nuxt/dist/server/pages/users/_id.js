exports.ids = [7];
exports.modules = {

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/users/_id.vue?vue&type=template&id=a1840494&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-container', [_vm.profile ? _c('div', [_c('div', {
    staticClass: "text-center"
  }, [_c('b-img', {
    attrs: {
      "src": _vm.profile.avatar_url,
      "rounded": "circle",
      "alt": "",
      "width": "250"
    }
  }), _vm._v(" "), _c('h5', {
    staticClass: "mt-3"
  }, [_vm._v("Welcome : " + _vm._s(_vm.$route.params.id))]), _vm._v(" "), _c('a', {
    attrs: {
      "href": _vm.profile.html_url,
      "target": "_blank"
    }
  }, [_vm._v("Link github")])], 1), _vm._v(" "), _c('pre', [_vm._v(_vm._s(_vm.profile))])]) : _vm._e(), _vm._v(" "), !_vm.profile ? _c('div', [_c('h5', [_vm._v("loading.....")])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "text-center"
  }, [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Back Home")])], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/users/_id.vue?vue&type=template&id=a1840494&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/users/_id.vue?vue&type=script&lang=js&
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  data() {
    return {
      profile: '',
      id: this.$route.params.id
    };
  },
  async mounted() {
    await this.fetchUser();
  },
  methods: {
    async fetchUser() {
      try {
        this.profile = await this.$axios.$get('https://api.github.com/users/' + this.$route.params.id);
      } catch (error) {
        alert('data not found!');
        this.$router.push("/");
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/users/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var users_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/users/_id.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  users_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "71245886"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map