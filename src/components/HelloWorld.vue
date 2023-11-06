<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})
</script>

<template>
  <div class="main">
    <h1>Hello Vue3</h1>
    <p>fsf</p>
    <button>sf</button>
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 200px;
  min-height: 100%;
  box-sizing: border-box;
  padding: 0 50px;
}
</style>
