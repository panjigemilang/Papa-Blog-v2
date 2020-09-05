import axios from "axios"
import setAuthToken from "../../components/Utils/setAuthToken"
import isEmpty from "../../components/Utils/isEmpty"
import jwt_decode from "jwt-decode"

const post_url = "/api/posts"
const user_url = "/api/users"

const state = {
  errors: {},
  isAuthenticated: false,
  loading: false,
  navbarToggle: true,
  post: {},
  posts: {},
  user: {},
}

const mutations = {
  setError: (state, data) => {
    state.errors = data
  },
  setPost: (state, postData) => {
    state.post = postData
  },
  setPosts: (state, postData) => {
    state.posts = postData
  },
  setToggleNavbar: (state) => (state.navbarToggle = !state.navbarToggle),
  setUser: (state, userData) => {
    state.isAuthenticated = !isEmpty(userData)
    state.user = userData
  },
}

const getters = {
  getError: (state) => state.errors,
  getList: (state) => state.user,
  getState: (state) => state,
  getToggleNavbar: (state) => state.navbarToggle,
}

const actions = {
  async login({ commit, state }, payload) {
    state.loading = true

    await axios
      .post(user_url + "/login", payload)
      .then((res) => {
        const { token } = res.data

        // set token to local storage
        localStorage.setItem("jwtToken", token)
        // Set token to Auth Header
        setAuthToken(token)
        // decode token to get user data with jwt-decode
        const decoded = jwt_decode(token)
        // set current user
        commit("setUser", decoded)
      })
      .catch((err) => {
        commit("setError", err.response.data)
      })

    state.loading = false
  },
  logout({ commit }) {
    // Remove token from local storage
    localStorage.removeItem("jwtToken")
    // Remove authorization token
    setAuthToken(false)
    commit("setUser", {})
  },
  toggleNavbar({ commit }) {
    commit("setToggleNavbar")
  },
  async addPost({ commit, state }, payload) {
    state.loading = true

    await axios
      .post(post_url + "/add", payload)
      .then((res) => {
        commit("setPost", res.data)
      })
      .catch((err) => {
        commit("setError", err.response.data)
      })

    state.loading = false
  },
  async getPosts({ commit, state }, params) {
    state.loading = true

    await axios
      .post(`${post_url}/${params.limit}`, params)
      .then((res) => {
        commit("setPosts", res.data)
      })
      .catch((err) => {
        commit("setError", err.response.data)
      })

    state.loading = false
  },
  async getPost({ commit }, params) {
    state.loading = true

    await axios
      .get(`${post_url}/post/${params.id}`)
      .then((res) => {
        commit("setPost", res.data)
      })
      .catch((err) => {
        commit("setError", err.response.data)
      })

    state.loading = false
  },
  clearErrors({ commit }) {
    commit("setError", {})
  },
  setCurrentUser({ commit }, payload) {
    commit("setUser", payload)
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
