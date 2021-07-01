<template>
  <Header />
  <div class="container">
    <div class="top-write">Management Users</div>
    <div class="second-text">List All Users</div>
    <Table class="table" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Table from "@/components/Table.vue";

export default defineComponent({
  components: {
    Header,
    Table,
  },
});
</script>

<style src="./styles/index.scss" lang="scss" scoped>
</style>
