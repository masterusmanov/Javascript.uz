<template>
    <div class=" flex items-center h-[96px]">
        <div class="flex items-center gap-[12px]">
            <div class=" h-[96px] p-[10px] border-2 border-[#E9E6E4] grid items-center text-center hover:text-red-700">
                <label for="lang"><i class='bx bx-globe text-[28px] cursor-pointer'></i></label>
                <select id="lang" v-model="selectedLang" @change="changeLanguage(selectedLang)" class="cursor-pointer">
                    <option value="en">EN</option>
                    <option value="ru">RU</option>
                    <option value="uz">UZ</option>
                </select>
            </div>
            <div class="flex items-center gap-[24px]">
               <router-link to="/"><img src="../assets/animat.svg" alt="" class="h-[70px] "></router-link>
               <div class="flex items-center gap-[24px]">
                    <router-link to="#" class="header_link">{{$t('header.textbook')}}</router-link>
                    <router-link to="#" class="header_link">{{$t('header.courses')}}</router-link>
                    <router-link to="#" class="header_link">{{$t('header.forum')}}</router-link>
                    <router-link to="#" class="header_link">{{$t('header.test')}}</router-link>
                    <NavbarDropdown/>
               </div>
            </div>
        </div>
        <div>
            <i class='bx bxs-user'></i>
            <button @click="toggleDark()">
                <i inline-block align-middle i="dark:carbon-moon carbon-sun" />
                <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
            </button>
            <i class='bx bx-search'></i>
        </div>
    </div>
    <div>
  </div>
</template>

<script setup>
    import { useI18n } from "vue-i18n";
    import { ref } from "vue";
    import { useToggle } from '@vueuse/shared'
    import NavbarDropdown from './NavbarDropdown.vue'
    import { isDark } from '../darkmode/drak'

    const { t, locale } = useI18n();
    const selectedLang = ref(locale.value);
    const toggleDark = useToggle(isDark)

    const changeLanguage = (lang) => {
    locale.value = lang;
    localStorage.setItem("lang", lang); 
    };

   
</script>

<style lang="scss" scoped>    
    .header_link:hover{
        color: red
    }
    
    .header_link:active{
        color: red
    }
</style>