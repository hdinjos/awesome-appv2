<template>
  <div class="container">
    <div class="main-wrapper">
      <div class="top-title">Login Here!</div>
      <div class="card">
        <div class="error">{{ err }}</div>
        <div class="wrapping-input">
          <div class="label-input">Username</div>
          <input v-model="username" type="text" placeholder="hdinjos" />
        </div>
        <div class="wrapping-input">
          <div class="label-input">Password</div>
          <input v-model="password" type="password" placeholder="fkFJDf23%2" />
        </div>
        <div class="wrapping-input">
          <button @click="toLogin" class="btn-submit">Login</button>
        </div>
      </div>
      <div class="wrap-text-bottom">
        <div class="text-bottom">
          Don't have an account yet?
          <router-link tag="a" class="txt-register" to="/auth/register"
            >Register Now!</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    username: "",
    password: "",
    err: "",
  }),
  methods: {
    async toLogin() {
      try {
        const payload = {
          username: this.username,
          password: this.password,
        };
        await this.$store.dispatch("auth/toLogin", payload);
        const admin = this.$store.state.auth.userInfo.info.admin;
        if (admin) {
          this.$router.push("/admin");
        } else {
          this.$router.push("/");
        }
      } catch (err) {
        if (err?.response?.status) {
          this.err = "username and password isn't suitable!";
        } else {
          this.err = err.message;
        }
      }
    },
  },
};
</script>

<style src="./styles/auth.scss" lang="scss" scoped>
</style>
