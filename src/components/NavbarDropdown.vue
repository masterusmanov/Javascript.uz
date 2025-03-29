<template>
     <div class="">
      <button class="hover:text-red-500" @click="toggleMenu">{{$t('header.dropdown.screenshot')}} <span class="text-gray-700"> ▼</span></button>
        <nav v-if="isOpen" class="menu absolute top-[70px] w-[150px] grid items-center gap-[6px] text-[14px] border shadow-lg p-[10px]">
          <router-link to="#" class="drop_link">Node.js</router-link>
          <router-link to="#" class="drop_link">Webpack</router-link>
          <router-link to="#" class="drop_link">Gulp</router-link>
          <router-link to="#" class="drop_link">React.js</router-link>
          <router-link to="#" class="drop_link">Angular</router-link>
          <router-link to="#" class="drop_link">{{$t('header.dropdown.gitcourse')}}</router-link>
          <router-link to="#" class="drop_link">{{$t('header.dropdown.gitother')}}</router-link>
        </nav>
    </div>
</template>

<script setup>
    import { ref } from "vue";

    const isOpen = ref(false);

    const toggleMenu = () => {
    isOpen.value = !isOpen.value;
    };

</script>

<style lang="scss" scoped>
    .drop_link:hover{
        color: red;
    }
</style>