<script setup lang="ts">
import { RouterView } from 'vue-router'
import '@/style.scss'
</script>

<template>
  <div id="app">
    <router-view class="header" name="header" />
    <div class="contents">
      <router-view class="body" name="body" />
    </div>
    <router-view class="footer" name="footer" />
  </div>
</template>

<style lang="scss"></style>
