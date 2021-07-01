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
          <input v-model="password" type="text" placeholder="fkFJDf23%2" />
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

<script lang="ts">
import { login } from "@/services/auth";
import { defineComponent } from "vue";

export default defineComponent({
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
        const res = await login(payload);
        console.log(res);
      } catch (err) {
        if (err?.response?.status) {
          this.err = "username and password isn't suitable!";
        } else {
          this.err = err.message;
        }
        // console.log();
      }
    },
  },
});
</script>

<style src="./styles/auth.scss" lang="scss" scoped>
</style>
