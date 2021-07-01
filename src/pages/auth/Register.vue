<template>
  <div class="container">
    <div class="main-wrapper">
      <div class="top-title">Register Now!</div>
      <div class="card">
        <div class="wrapping-input">
          <div class="label-input">Username</div>
          <input type="text" placeholder="hdinjos" />
        </div>
        <div class="wrapping-input">
          <div class="label-input">Password</div>
          <input type="text" placeholder="fkFJDf23%2" />
        </div>
        <div class="wrapping-input">
          <div class="label-input">Confirm password</div>
          <input type="text" placeholder="fkFJDf23%2" />
        </div>
        <div class="wrapping-input">
          <button class="btn-submit">Register</button>
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

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style src="./styles/auth.scss" lang="scss" scoped>
</style>
