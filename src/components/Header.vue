<template>
  <div class="wrapper-top">
    <div class="wrapper-main">
      <div class="left">
        <div class="title">AWESOME APP</div>
      </div>
      <div class="right">
        <div class="profile" @click="changeOpen">Account</div>
        <div class="wrap-account" v-if="isOpen">
          <div class="btn-1">
            Profile
            <!-- <button>Profile</button> -->
          </div>
          <div class="btn-1">
            Logout
            <!-- <button>Logout</button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isOpen: false,
  }),
  methods: {
    changeOpen() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style src="./styles/header.scss" lang="scss" scoped>
</style>
