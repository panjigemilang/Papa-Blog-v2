// Plugin
import Vue from "vue"
import App from "./App.vue"
import VueRouter from "vue-router"
import { Plugin } from "vue-fragment"
import Vue2Editor from "vue2-editor"
import Library from "./components/Utils/Library"
import store from "./store"

// Components
import Home from "./components/Home"
import About from "./components/About"
import Login from "./components/Auth/Login"
import Articles from "./components/Pages/Articles"
import Post from "./components/Pages/Post"
import AddPost from "./components/Features/AddPost"
import NotFound from "./components/NotFound"

Vue.config.productionTip = false

// use
Vue.use(Plugin)
Vue.use(VueRouter)
Vue.use(Vue2Editor)
Vue.use(Library)

const title = "Papa Blog"

const routes = [
  {
    path: "/login",
    component: Login,
    meta: {
      title: `${title} - Login`,
    },
  },
  {
    path: "/",
    component: Home,
    meta: {
      title: `${title} - Home`,
    },
  },
  {
    path: "/about",
    component: About,
    meta: {
      title: `${title} - About`,
    },
  },
  {
    path: "/articles",
    component: Articles,
    meta: {
      title: `${title} - Articles`,
    },
  },
  {
    path: "/article/:id",
    component: Post,
    props: true,
    meta: {
      title: `${title} - Article`,
    },
  },
  {
    path: "/add",
    component: AddPost,
    meta: {
      title: `${title} - Add Post`,
    },
  },
  {
    path: "*",
    component: NotFound,
    meta: {
      title: `${title} - Not Found`,
    },
  },
]

const router = new VueRouter({
  routes,
  mode: "history",
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  document.title = to.meta.title
  next()
})

new Vue({
  el: "#app",
  poll: true,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
