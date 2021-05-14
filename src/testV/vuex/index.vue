<template>
  <div class="vuex-container">
    <A></A>
    <B></B>
  </div>
</template>

<script>
import A from "./A";
import B from "./B";
export default {
  components: {
    A,
    B,
  },
};
</script>

<style>
.vuex-container {
    width: 800px;
    height: 800px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>