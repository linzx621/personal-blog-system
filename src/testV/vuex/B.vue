<template>
  <div class="b-container">
    <span>{{$store.state.count}}</span>
    <button @click="handleDecrease">减少</button>
    <button @click="handleAsyncDecrease">异步增加</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleDecrease() {
      this.$store.commit('decrease');
    },
    handleAsyncDecrease() {
      this.$store.dispatch('asyncIncrease');
    },
  },
};
</script>

<style>
.b-container {
  width: 300px;
  height: 300px;
  border: 1px solid #ddd;
}
</style>