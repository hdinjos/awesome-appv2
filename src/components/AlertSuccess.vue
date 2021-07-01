<template>
  <div class="wrap-alert">
    <div class="block"></div>
    {{ alertMsg }}
  </div>
</template>

<script>
export default {
  props: {
    alertMsg: String,
  },
};
</script>

<style scoped>
.wrap-alert {
  width: 18%;
  height: 9%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  background-color: rgb(162, 245, 162);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.block {
  width: 20px;
  height: 20px;
  border-radius: 100px;
  background-color: rgb(0, 206, 0);
  border: 2px solid #fff;
  margin-right: 5px;
}
</style>