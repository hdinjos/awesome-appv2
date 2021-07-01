<template>
  <div class="container">
    <div class="main-wrapper">
      <div class="top-title">Register Now!</div>
      <div class="card">
        <div v-if="err" class="error">{{ err }}</div>
        <div class="wrapping-input">
          <div class="label-input">Username</div>
          <input v-model="username" type="text" placeholder="hdinjos" />
        </div>
        <div class="wrapping-input">
          <div class="label-input">Password</div>
          <input v-model="password" type="password" placeholder="fkFJDf23%2" />
        </div>
        <div class="wrapping-input">
          <div class="label-input">Confirm password</div>
          <input
            v-model="confirmPassword"
            type="password"
            placeholder="fkFJDf23%2"
          />
        </div>
        <div class="wrapping-input">
          <button @click="toRegister" class="btn-submit">Register</button>
        </div>
      </div>
      <div class="wrap-text-bottom">
        <div class="text-bottom">
          Have an account now?
          <router-link tag="a" class="txt-register" to="/auth/login"
            >Login Here!</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { register } from "@/services/auth";
export default {
  data: () => ({
    username: "",
    password: "",
    confirmPassword: "",
    err: "",
    time: 0,
  }),
  methods: {
    async toRegister() {
      try {
        const payload = {
          username: this.username,
          password: this.password,
          confirmPassword: this.confirmPassword,
        };
        console.log(payload);
        await register(payload);
        this.$router.push("/auth/login");
      } catch (err) {
        if (err?.response?.status === 409) {
          this.err = "username already exist!";
          this.time = 1;
        } else {
          this.err = err.message;
          this.time = 1;
        }
      }
    },
  },
  watch: {
    time: function () {
      const context = this;
      console.log("hahhah");
      setTimeout(function () {
        context.err = "";
      }, 10000);
      context.time = 0;
    },
  },
};
</script>

<style src="./styles/auth.scss" lang="scss" scoped>
</style>
