<template>
  <div>
    <Header />
    <div class="container">
      <div>
        <div class="top-write">YOUR PROFILE</div>
        <div class="wrap-txt">
          <!-- <div>Username: {{ users.username }}</div> -->
          <div>
            Username: <strong>{{ users.info.username }}</strong>
          </div>
          <div>
            Is Admin: <strong>{{ users.info.admin ? "Yes" : "No" }}</strong>
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

<style src="./styles/index.scss" lang="scss" scoped>
</style>
