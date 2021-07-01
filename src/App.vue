<template>
  <div style="position: relative">
    <AlertSuccess :alertMsg="alertMessage" v-if="alert" class="alert" />
    <router-view />
  </div>
</template>

<script>
import AlertSuccess from "@/components/AlertSuccess";
export default {
  components: {
    AlertSuccess,
  },
  computed: {
    alert() {
      return this.$store.state.alert;
    },
    alertMessage() {
      return this.$store.state.alertMessage;
    },
  },
  updated() {
    // this.$store.commit("setAlert", false);
  },
};
</script>

<style scoped>
.alert {
  position: fixed;
  bottom: 40px;
  right: 0;
  z-index: 10;
}
</style>