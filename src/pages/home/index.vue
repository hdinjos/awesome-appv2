<template>
  <div>
    <Header />
    <div class="container">
      <div>
        <div class="wrap-img">
          <img class="img" :src="require('@/assets/images/welcome.svg')" />
          <div class="txt-group">
            <div class="welcome">Welcome, your home</div>
            <div class="top-write">You are not login as admin,</div>
            <div class="top-write">You can only see this page,</div>
            <div class="top-write">not change the user status</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style src="./styles/index.scss" lang="scss" scoped>
</style>
