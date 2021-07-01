<template>
  <Header />
  <div class="container">
    <div class="top-write">WELLCOME, USERS ----</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";

export default defineComponent({
  components: {
    Header,
  },
});
</script>

<style src="./styles/index.scss" lang="scss" scoped>
</style>
