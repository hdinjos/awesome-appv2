<template>
  <div>
    <Header />
    <div class="container">
      <div class="top-write">Management Users</div>
      <div class="second-text">List All Users</div>
      <Table class="table" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Table from "@/components/Table.vue";

export default {
  components: {
    Header,
    Table,
  },
};
</script>

<style src="./styles/index.scss" lang="scss" scoped>
</style>
