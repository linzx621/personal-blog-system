<template>
  <div class="a-container">
    <span>{{$store.state.count}}</span>
    <button @click="handleIncrease">增加</button>
    <button @click="handleAsyncIncrease">异步减少</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleIncrease() {
      this.$store.commit('increase');
    },
    handleAsyncIncrease() {
       this.$store.dispatch('asyncDecrease');
    },
  },
};
</script>

<style>
.a-container {
  width: 300px;
  height: 300px;
  border: 1px solid #ddd;
}
</style>