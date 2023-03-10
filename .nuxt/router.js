import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _22063120 = () => interopDefault(import('../pages/page3.vue' /* webpackChunkName: "pages/page3" */))
const _e6b26c84 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _22226022 = () => interopDefault(import('../pages/page2.vue' /* webpackChunkName: "pages/page2" */))
const _223e8f24 = () => interopDefault(import('../pages/page1.vue' /* webpackChunkName: "pages/page1" */))
const _1d076377 = () => interopDefault(import('../pages/users/index.vue' /* webpackChunkName: "pages/users/index" */))
const _399450c2 = () => interopDefault(import('../pages/users/_id.vue' /* webpackChunkName: "pages/users/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/animal",
    component: _22063120,
    name: "page3___th"
  }, {
    path: "/en",
    component: _e6b26c84,
    name: "index___en"
  }, {
    path: "/gun",
    component: _22226022,
    name: "page2___th"
  }, {
    path: "/shoes",
    component: _223e8f24,
    name: "page1___th"
  }, {
    path: "/users",
    component: _1d076377,
    name: "users___th"
  }, {
    path: "/en/animal",
    component: _22063120,
    name: "page3___en"
  }, {
    path: "/en/gun",
    component: _22226022,
    name: "page2___en"
  }, {
    path: "/en/shoes",
    component: _223e8f24,
    name: "page1___en"
  }, {
    path: "/en/users",
    component: _1d076377,
    name: "users___en"
  }, {
    path: "/en/users/:id",
    component: _399450c2,
    name: "users-id___en"
  }, {
    path: "/users/:id",
    component: _399450c2,
    name: "users-id___th"
  }, {
    path: "/",
    component: _e6b26c84,
    name: "index___th"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
