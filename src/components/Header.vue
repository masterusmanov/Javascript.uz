<template>
    <div class="min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
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
                <button @click="toggleTheme" class="theme-toggle-btn">
                    <i class="bx text-xl" :class="theme === 'light' ? 'bx-moon' : 'bx-sun'"></i>
                </button>
                <i class='bx bx-search'></i>
            </div>
        </div>

    </div>
</template>

<script setup>
    import { useI18n } from "vue-i18n";
    import { ref, watch, onMounted } from "vue";
    import { useColorMode } from '@vueuse/core'
    import NavbarDropdown from './NavbarDropdown.vue'

    const { t, locale } = useI18n();
    const selectedLang = ref(locale.value);
    const theme = ref('light');

    const changeLanguage = (lang) => {
        locale.value = lang;
        localStorage.setItem("lang", lang); 
    };

   const toggleTheme = () => {
        theme.value = theme.value === 'light' ? 'dark' : 'light';
        applyTheme();
    };

    const applyTheme = () => {
        if (theme.value === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme.value);
    };

    onMounted(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            theme.value = savedTheme;
        }
        applyTheme();
    });

    watch(theme, () => {
        applyTheme();
    });
   
</script>

<style lang="scss" scoped>  

    .theme-toggle-btn {
    background-color: transparent;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s;
    }

    .theme-toggle-btn i {
        font-size: 1.5rem;
    }

    .header_link {
        @apply text-gray-800 dark:text-gray-200 hover:text-red-700;
    }

    .header_link:hover{
        color: red
    }
    
    .header_link:active{
        color: red
    }
</style>