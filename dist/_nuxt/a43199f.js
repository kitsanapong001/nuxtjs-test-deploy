(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(t,e,n){"use strict";n(179),n(20),n(2),n(1);var r={data:function(){return{path:"Data"}},computed:{header:function(){return this.$t("header")},availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},l=n(66),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[e("b-navbar-brand",{attrs:{to:t.localePath({name:"index"})}},[t._v(t._s(t.header.app))]),t._v(" "),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",[e("b-nav-item",{attrs:{to:t.localePath({name:"page1"})}},[t._v(t._s(t.header.link.page_1))]),t._v(" "),e("b-nav-item",{attrs:{to:t.localePath({name:"page2"})}},[t._v(t._s(t.header.link.page_2))]),t._v(" "),e("b-nav-item",{attrs:{to:t.localePath({name:"page3"})}},[t._v(t._s(t.header.link.page_3))])],1),t._v(" "),e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-item-dropdown",{attrs:{text:"".concat(t.header.lang),right:""}},t._l(t.availableLocales,(function(n){return e("b-dropdown-item",{key:n.code,attrs:{to:t.switchLocalePath(n.code)}},[t._v("\n            "+t._s(n.name)+"\n          ")])})),1)],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports},258:function(t,e,n){"use strict";var r={components:{Navbar:n(146).a}},l=n(66),component=Object(l.a)(r,(function(){var t=this._self._c;return t("div",[t("Navbar"),this._v(" "),t("nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},260:function(t,e,n){n(261),t.exports=n(262)}},[[260,10,1,11]]]);