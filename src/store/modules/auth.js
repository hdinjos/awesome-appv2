import { login, getUserInfo } from "../../services/auth";

const auth = {
  namespaced: true,
  state: () => ({
    token: "",
    userInfo: "",
  }),
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
    setUserInfo(state, payload) {
      state.userInfo = payload;
    },
  },
  actions: {
    async toLogin(context, payload) {
      const data = await login(payload);
      context.commit("setToken", data.token);
      localStorage.setItem("token", data.token);
      await context.dispatch("getUserInfo");
      return data;
    },
    async getUserInfo(context) {
      const token = localStorage.getItem("token");
      const data = await getUserInfo(token);
      context.commit("setUserInfo", data);
    },
  },
};

export default auth;
