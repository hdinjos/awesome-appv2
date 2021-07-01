<template>
  <div class="wrapper-top">
    <div class="wrapper-main">
      <div class="left" @click="toHome">
        <div class="title">AWESOME APP</div>
      </div>
      <div class="right">
        <div class="profile" @click="changeOpen">
          Wellcome, {{ users.info.username }}
        </div>
        <div class="wrap-account" v-if="isOpen">
          <div class="btn-1" @click="toProfile">
            Profile
            <!-- <button>Profile</button> -->
          </div>
          <div @click="logOut" class="btn-1">
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
    toProfile() {
      this.$router.push("/profile");
    },
    logOut() {
      this.$store.commit("auth/setToken", "");
      this.$store.commit("auth/setUserInfo", "");
      localStorage.clear();
      this.$router.push("/auth/login");
      this.$store.commit("setAlert", true);
      this.$store.commit("setAlertMsg", "Logout Success!");
      this.$store.dispatch("setTimeAlert");
    },
    toHome() {
      if (this.users.info.admin) {
        this.$router.push("/admin");
      } else {
        this.$router.push("/");
      }
    },
  },
  async mounted() {
    if (!this.$store.state.auth.userInfo) {
      await this.$store.dispatch("auth/getUserInfo");
    }
  },
  computed: {
    users() {
      return this.$store.state.auth.userInfo;
    },
    adminUser() {
      return this.$store.state.auth.userInfo;
    },
  },
};
</script>

<style src="./styles/header.scss" lang="scss" scoped>
</style>
