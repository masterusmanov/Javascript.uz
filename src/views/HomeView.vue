
<template>
  <div class="min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
    <Header/>
    <main class="">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
  import Header from "../components/Header.vue"
</script>

<style lang="scss" scoped>

</style>