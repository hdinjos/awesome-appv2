import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    alert: false,
    alertMessage: "",
  },
  mutations: {
    setAlert(state, payload) {
      state.alert = payload;
    },
    setAlertMsg(state, payload) {
      state.alertMessage = payload;
    },
  },
  actions: {
    setTimeAlert({ commit }) {
      setTimeout(() => {
        commit("setAlert", false);
      }, 5000);
    },
  },
  modules: {
    auth,
  },
});
