<template>
    <div class="container mx-auto xl:px-[10px]">
        <div class="flex items-center h-[96px] justify-between">
            <div class="flex items-center gap-[12px]">
                <div class=" h-[96px] p-[10px] grid items-center text-center hover:text-red-700">
                    <label for="lang"><i class='bx bx-globe text-[28px] cursor-pointer'></i></label>
                    <select id="lang" v-model="selectedLang" @change="changeLanguage(selectedLang)" class="text-lg xl:text-base cursor-pointer bg-white text-gray-900 dark:bg-gray-800 dark:text-white dark:border-gray-600 outline-none border-none">
                        <option value="en" class="hover:text-red-700 text-[14px]">EN</option>
                        <option value="ru" class="hover:text-red-700 text-[14px]">RU</option>
                        <option value="uz" class="hover:text-red-700 text-[14px]">UZ</option>
                        <option value="tr" class="hover:text-red-700 text-[14px]">TR</option>
                    </select>
                </div>
                <div class="flex items-center gap-[24px]">
                   <router-link to="/"><img src="../assets/animat.svg" alt="" class="h-[70px] "></router-link>
                   <div class="hidden lg:flex items-center gap-[24px]">
                        <router-link to="#" class="header_link text-gray-800 dark:text-gray-200 hover:text-red-700;">{{$t('header.textbook')}}</router-link>
                        <router-link to="#" class="header_link text-gray-800 dark:text-gray-200 hover:text-red-700;">{{$t('header.courses')}}</router-link>
                        <router-link to="#" class="header_link text-gray-800 dark:text-gray-200 hover:text-red-700;">{{$t('header.forum')}}</router-link>
                        <router-link to="#" class="header_link text-gray-800 dark:text-gray-200 hover:text-red-700;">{{$t('header.test')}}</router-link>
                        <NavbarDropdown/>
                   </div>
                </div>
                <NavbarDropdownphone class="lg:hidden"/>
            </div>
            <div class="ml-[12px] md:ml-0 flex items-center md:gap-[24px]">
                <div v-if="!isSearchActive" class="flex items-center md:gap-[24px]">
                    <i class='bx bxs-user text-[clamp(1.5rem,2.5vw,2rem)] cursor-pointer'></i>
                    <button @click="toggleTheme" class="theme-toggle-btn">
                        <i class="bx text-[clamp(1.5rem,2.5vw,2rem)]" :class="theme === 'light' ? 'bx-moon' : 'bx-sun'"></i>
                    </button>
                </div>
                <div class="flex items-center md:gap-[12px]">
                    <input v-if="isSearchActive" type="text" :placeholder="t('header.search')" class="border border-gray-400 px-3 py-2 rounded-md outline-none text-black dark:text-white dark:bg-gray-800 transition-all duration-300"/>
                    <i class='bx bx-search text-[clamp(1.5rem,2.5vw,2rem)] cursor-pointer' @click="toggleSearch"></i>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
    import { useI18n } from "vue-i18n";
    import { ref, watch, onMounted } from "vue";
    import NavbarDropdown from './NavbarDropdown.vue'
    import NavbarDropdownphone from '../components/NavbarDropdownphone.vue';

    const { t, locale } = useI18n();
    const selectedLang = ref(locale.value);
    const isSearchActive = ref(false);
    const theme = ref('light');

    const toggleSearch = () => {
        isSearchActive.value = !isSearchActive.value;
    };

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

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.10s ease-in-out, transform 0.10s ease;
    }

    .fade-enter-from, .fade-leave-to {
        opacity: 0;
        transform: translateY(-20px);
    }
    .header_link:hover{
        color: red
    }
    
    .header_link:active{
        color: red
    }
</style>