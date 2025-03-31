<template>
    <div class="w-[80%] mx-auto py-[50px] md:flex items-center">
        <div class="md:w-[50%]">
            <h1 class="text-[28px] leading-[32px] font-bold md:text-[32px] md:leading-[40px]">{{$t('mainpage.title')}}</h1>
            <p class="py-[15px] md:py-[25px] text-[18px] md:text-[20px] leading-[24px] font-[700]">{{$t('mainpage.desc')}}</p>
            <div>
                <input type="text" name="tutorial" :placeholder="$t('mainpage.tutor')" class="w-[70%] border border-[#F5F2F1] rounded-tl-[8px] rounded-bl-[8px] p-[10px] bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                <button class="px-[20px] py-[10px] bg-[#4F9E72] border-2 border-[#4F9E72] rounded-tr-[8px] rounded-br-[8px]">{{$t('mainpage.btn')}}</button>
            </div>
        </div>
        <div class="md:w-[50%] md:grid">
            <p class="text-right">{{$t('mainpage.updatedate')}} {{new Date().toLocaleDateString("uz-UZ")}}</p>
            <div>
                <button class=""></button>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>

</style>