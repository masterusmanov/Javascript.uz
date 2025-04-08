<template>
    <div class="py-[30px]">
        <h2 class="font-[900] text-[18px] lg:text-[20px]">{{$t("partnavbar.title")}}</h2>
        <p class="py-[20px] xl:w-[70%] leading-[28px]">{{$t("partnavbar.desc")}}</p>
        <div class="">
            <p class="font-[900]">{{$t("partnavbar.intro")}}</p>
           <div class="md:flex items-center gap-[50px] my-[24px]">
                <div class="md:w-[50%] lg:w-[30%] grid gap-[12px]">
                    <diV v-for="el in intro.slice(0, 2)" :key="el.id" class="">
                        <div class="flex items-center gap-[12px]">
                            <p>1.{{el.id}}</p>
                            <router-link :to="el.links" class="hover:text-red-500 border-b border-white border-transparent hover:border-red-500">{{$t(el.title)}}</router-link>
                        </div>
                    </diV>
                </div>
                <div class="md:w-[50%] lg:w-[30%] grid gap-[12px] mt-[12px] md:mt-0">
                    <diV v-for="el in intro.slice(2, 4)" :key="el.id" class="">
                        <div class="flex items-center gap-[12px]">
                            <p>1.{{el.id}}</p>
                            <router-link :to="el.links" class="hover:text-red-500 border-b border-white border-transparent hover:border-red-500">{{$t(el.title)}}</router-link>
                        </div>
                    </diV>
                </div>
           </div>
        </div>
    </div>
</template>

<script setup>
    import intro from '../../constants/intro'
</script>

<style lang="scss" scoped>

</style>