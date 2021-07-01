<template>
  <div class="wrapper-top">
    <div class="wrapper-main">
      <div class="left">
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
    },
  },
  async mounted() {
    if (!this.$store.state.auth.userInfo) {
      await this.$store.dispatch("auth/getUserInfo");
    }
    console.log(this.users);
  },
  computed: {
    users() {
      return this.$store.state.auth.userInfo;
    },
  },
};
</script>

<style src="./styles/header.scss" lang="scss" scoped>
</style>
