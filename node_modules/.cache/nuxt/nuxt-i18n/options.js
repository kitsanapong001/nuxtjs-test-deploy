

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"th","messages":{"en":{"header":{"app":"BANK SHOP","link":{"page_1":"Shoes","page_2":"Gun","page_3":"Animal"},"lang":"English Change langue"},"footer":{"app":"English Footer"},"index":{"title":"English Nuxt.js หลายภาษาด้วย i18n","body":"English ส่วนหน้าแรก มาทำ i18n หลายภาษากันเถอะ","footer":"English ส่วนจบหน้าแรก"},"page_1":{"title":"product type shoes","body":"body","footer":"footer","product":[{"product_id":1001,"product_name":"สินค้า 1","product_img":"https://f.btwcdn.com/store-43839/product/339cd93f-25c9-6725-1d70-5f06971e2c98.jpg"},{"product_id":1002,"product_name":"สินค้า 2","product_img":"https://www.kito.co.th/wp-content/uploads/2021/10/Kito-BE7-BW-1.jpg"},{"product_id":1003,"product_name":"สินค้า 3","product_img":"https://pim-cdn0.ofm.co.th/products/zoom/Y033115.jpg"}]},"page_2":{"title":"product type gun","body":"body","footer":"footer","product":[{"product_id":1004,"product_name":"สินค้า 4","product_img":"https://rshop.rweb-images.com/4Kwuimj_1MPdwEv23GrcNs5O9cg=/500x500/953b90d675ec44db890aaf45f95d8719"},{"product_id":1005,"product_name":"สินค้า 5","product_img":"https://static.se-ed.com/ws/Storage/Contents/552292/002/5522920021606-01.jpg"},{"product_id":1006,"product_name":"สินค้า 6","product_img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLIScuJS3tA3I3KvhUzb6BoukNpKBdzm4gt5rDsqUI2v3IkXnKYNHEX7UY2Ao9udaozP8&usqp=CAU"}]},"page_3":{"title":"product type animal","body":"body","footer":"footer","product":[{"product_id":1007,"product_name":"สินค้า 7","product_img":"https://www.baosamong.com/wp-content/uploads/2020/04/animal-cat-face-5.jpg"},{"product_id":1008,"product_name":"สินค้า 8","product_img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThtKOgU1sI-I9hE-dIrCTLg2OwV7h446nBcQ&usqp=CAU"},{"product_id":1009,"product_name":"สินค้า 9","product_img":"https://fwmail.teenee.com/strange/img8/m253450.jpg"}]}},"th":{"header":{"app":"แบงค์ ช็อป","link":{"page_1":"รองเท้า","page_2":"ปืน","page_3":"สัตว์"},"lang":"เปลี่ยนภาษา"},"footer":{"app":"ส่วนท้าย"},"index":{"title":"Nuxt.js หลายภาษาด้วย i18n","body":"ส่วนหน้าแรก มาทำ i18n หลายภาษากันเถอะ","footer":"ส่วนจบหน้าแรก"},"page_1":{"title":"สินค้าประเภท รองเท้า","body":"ส่วนบอดี้","footer":"ส่วนจบ","product":[{"product_id":1001,"product_name":"product 1","product_img":"https://f.btwcdn.com/store-43839/product/339cd93f-25c9-6725-1d70-5f06971e2c98.jpg"},{"product_id":1002,"product_name":"product 2","product_img":"https://www.kito.co.th/wp-content/uploads/2021/10/Kito-BE7-BW-1.jpg"},{"product_id":1003,"product_name":"product 3","product_img":"https://pim-cdn0.ofm.co.th/products/zoom/Y033115.jpg"}]},"page_2":{"title":"สินค้าประเภท ปืน","body":"ส่วนบอดี้","footer":"ส่วนจบ","product":[{"product_id":1004,"product_name":"product 4","product_img":"https://rshop.rweb-images.com/4Kwuimj_1MPdwEv23GrcNs5O9cg=/500x500/953b90d675ec44db890aaf45f95d8719"},{"product_id":1005,"product_name":"product 5","product_img":"https://static.se-ed.com/ws/Storage/Contents/552292/002/5522920021606-01.jpg"},{"product_id":1006,"product_name":"product 6","product_img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLIScuJS3tA3I3KvhUzb6BoukNpKBdzm4gt5rDsqUI2v3IkXnKYNHEX7UY2Ao9udaozP8&usqp=CAU"}]},"page_3":{"title":"สินค้าประเภท สัตว์","body":"ส่วนบอดี้","footer":"ส่วนจบ","product":[{"product_id":1007,"product_name":"product 7","product_img":"https://www.baosamong.com/wp-content/uploads/2020/04/animal-cat-face-5.jpg"},{"product_id":1008,"product_name":"product 8","product_img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThtKOgU1sI-I9hE-dIrCTLg2OwV7h446nBcQ&usqp=CAU"},{"product_id":1009,"product_name":"product 9","product_img":"https://fwmail.teenee.com/strange/img8/m253450.jpg"}]}}}},
  vueI18nLoader: false,
  locales: [{"code":"en","iso":"en-US","name":"English"},{"code":"th","iso":"th-TH","name":"ไทย"}],
  defaultLocale: "th",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: false,
  langDir: null,
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieAge":365,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: false,
  pages: {"page1":{"th":"/shoes","en":"/shoes"},"page2":{"th":"/gun","en":"/gun"},"page3":{"th":"/animal","en":"/animal"}},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  encodePaths: false,
  normalizedLocales: [{"code":"en","iso":"en-US","name":"English"},{"code":"th","iso":"th-TH","name":"ไทย"}],
  localeCodes: ["en","th"],
  additionalMessages: [],
}
export const localeFiles = {
  0: "{",
  1: "}",
}

export const localeMessages = {}
