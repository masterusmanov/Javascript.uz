<template>
    <div class="container mx-auto flex items-center h-[96px]">
        <div class="flex items-center gap-[24px]">
            <div class=" p-[10px] border-2 border-[#E9E6E4] grid items-center text-center hover:text-red-700">
                <label for="lang"><i class='bx bx-globe text-[28px] cursor-pointer'></i></label>
                <select id="lang" v-model="selectedLang" @change="changeLanguage(selectedLang)" class="cursor-pointer">
                    <option value="en">EN</option>
                    <option value="ru">RU</option>
                    <option value="uz">UZ</option>
                </select>
            </div>
            <div>
               <router-link to="/"><img src="../assets/logo.svg" alt="" class="h-[70px]"></router-link>
               <div>
                    <router-link to="#">Uchebnik</router-link>
               </div>
            </div>
        </div>
    </div>
    <div>
    <h1>{{ t("hello") }}</h1>
    <p>{{ t("welcome") }}</p>

  </div>
</template>

<script setup>
    import { useI18n } from "vue-i18n";
    import { ref } from "vue";

    const { t, locale } = useI18n();
    const selectedLang = ref(locale.value);

    const changeLanguage = (lang) => {
    locale.value = lang;
    localStorage.setItem("lang", lang); 
    };
</script>

<style lang="scss" scoped>

</style>