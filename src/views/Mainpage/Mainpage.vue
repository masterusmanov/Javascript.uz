<template>
    <div class="px-[10px] md:px-0 md:w-[80%] mx-auto py-[50px]">
        <div class="w-[100%] md:flex items-start">
            <div class="md:w-[60%]">
                <h1 class="text-[28px] leading-[32px] font-bold md:text-[32px] md:leading-[40px]">{{$t('mainpage.title')}}</h1>
                <p class="py-[15px] md:py-[25px] text-justify text-[18px] md:text-[20px] leading-[32px] font-[700]">{{$t('mainpage.desc')}}</p>
            <div>
                <input type="text" name="tutorial" :placeholder="$t('mainpage.tutor')" class="w-[70%] border border-[#F5F2F1] rounded-tl-[8px] rounded-bl-[8px] p-[10px] bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                <button class="px-[20px] py-[10px] bg-[#4F9E72] text-[#F5F2F1] font-[700] border-2 border-[#4F9E72] rounded-tr-[8px] rounded-br-[8px]">{{$t('mainpage.btn')}}</button>
            </div>
        </div>
        <div class="md:w-[40%] mt-[50px]">
            <p class="text-right">{{$t('mainpage.updatedate')}} {{new Date().toLocaleDateString("uz-UZ")}}</p>
            <router-link to="#" class="w-[150px] flex mt-[30px] items-center gap-[12px] mx-auto text-[#C4433A] bg-[#F7F4F3] hover:bg-[#B2B0AF] md:text-[18px] font-[700] py-[12px] px-[30px] rounded-[8px]">{{$t('mainpage.social')}} <i class='bx bxl-telegram text-[24px]'></i></router-link>
        </div>
        </div>
        <div class="pt-[50px]">
            <h3 class="font-[900] text-[24px] leading-[32px]">{{$t('mainpage.titletwo')}}</h3>
            <p class="font-[700] my-[25px] text-justify">{{$t('mainpage.desctwo')}}</p>
        </div>
    </div>
    <div class="px-[10px] md:px-0 md:w-[80%] mx-auto">
        <InternalNavbar/>
    </div>
</template>

<script setup>
import InternalNavbar from '../../components/InternalNavbar.vue';
</script>

<style lang="scss" scoped>

</style>