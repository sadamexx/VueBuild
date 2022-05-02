import Vue from "vue";
import Vuex from "vuex";
import apiClient from "../services/axiosCalls";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accessToken: null,
    loggingIn: false,
    loginError: null,
  },
  mutations: {
    LOGIN_START: (state) => (state.loggingIn = true),
    LOGIN_STOP(state, errorMessage) {
      state.loggingIn = false;
      state.loginError = errorMessage;
    },
    UPDATE_ACCESS_TOKEN(state, accessToken) {
      state.accessToken = accessToken;
    },
  },
  actions: {
    loginUser({ commit }, credentials) {
      commit("LOGIN_START");
      return apiClient
        .login(credentials)
        .then((response) => {
          localStorage.setItem("accessToken", response.data.access_token);
          commit("UPDATE_ACCESS_TOKEN", response.data.access_token);
          commit("LOGIN_STOP", null);
        }) //end then
        .catch((error) => {
          commit("LOGIN_STOP", error);
          commit("UPDATE_ACCESS_TOKEN", null);
        });
    },
    fetchAccessToken({ commit }) {
      commit("UPDATE_ACCESS_TOKEN", localStorage.getItem("accessToken"));
    },
  },
});
