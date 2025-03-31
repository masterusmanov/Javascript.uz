<template>
     <div class="">
      <button class="hover:text-red-500" @click="toggleMenu"><i class='bx bx-menu text-[36px] md:text-[42px]'></i></button>
        <nav v-if="isOpen" class="menu absolute top-[70px] w-[150px] grid items-center gap-[6px] text-[14px] border shadow-lg p-[10px] bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
          <router-link to="#" class="drop_link">Node.js</router-link>
          <router-link to="#" class="drop_link">Webpack</router-link>
          <router-link to="#" class="drop_link">Gulp</router-link>
          <router-link to="#" class="drop_link">React.js</router-link>
          <router-link to="#" class="drop_link">Angular</router-link>
          <router-link to="#" class="drop_link">{{$t('header.dropdown.gitcourse')}}</router-link>
          <router-link to="#" class="drop_link">{{$t('header.dropdown.gitother')}}</router-link>
          <details class="">
            <summary class="cursor-pointer text-gray-800 dark:text-gray-200 font-semibold">
                {{$t('header.dropdown.screenshot')}}
            </summary>
            <div class="grid gap-[6px] mt-[6px] ml-[25px]">
                <router-link to="#" class="header_link text-gray-800 dark:text-gray-200 hover:text-red-700">{{$t('header.textbook')}}</router-link>
                <router-link to="#" class="header_link text-gray-800 dark:text-gray-200 hover:text-red-700">{{$t('header.courses')}}</router-link>
                <router-link to="#" class="header_link text-gray-800 dark:text-gray-200 hover:text-red-700">{{$t('header.forum')}}</router-link>
                <router-link to="#" class="header_link text-gray-800 dark:text-gray-200 hover:text-red-700">{{$t('header.test')}}</router-link>
            </div>
          </details>
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