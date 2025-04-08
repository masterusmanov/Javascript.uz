<template>
    <div>
         <p class="font-[900]">{{$t("partnavbar.fundament")}}</p>
        <div class="md:flex xl:items-center gap-[50px] my-[24px]">
            <div class="md:w-[50%] lg:w-[30%] grid gap-[12px]">
                <diV v-for="el in fundament.slice(0, 6)" :key="el.id" class="">
                    <div class="flex items-center gap-[12px]">
                        <p>2.{{el.id}}</p>
                        <router-link :to="el.links" class="hover:text-red-500 border-b border-white border-transparent hover:border-red-500">{{$t(el.title)}}</router-link>
                    </div>
                </diV>
            </div>
            <div class="md:w-[50%] lg:w-[30%] grid gap-[12px] mt-[12px] md:mt-0">
                <diV v-for="el in fundament.slice(6, 12)" :key="el.id" class="">
                    <div class="flex items-center gap-[12px]">
                        <p>2.{{el.id}}</p>
                        <router-link :to="el.links" class="hover:text-red-500 border-b border-white border-transparent hover:border-red-500">{{$t(el.title)}}</router-link>
                    </div>
                </diV>
            </div>
            <div class="md:w-[50%] lg:w-[30%] grid gap-[12px] mt-[12px] md:mt-0">
                <diV v-for="el in fundament.slice(12, 18)" :key="el.id" class="">
                    <div class="flex items-center gap-[12px]">
                        <p>2.{{el.id}}</p>
                        <router-link :to="el.links" class="hover:text-red-500 border-b border-white border-transparent hover:border-red-500">{{$t(el.title)}}</router-link>
                    </div>
                </diV>
            </div>
        </div>
    </div>
</template>

<script setup>
    import fundament from '../../constants/fundament'
</script>
<style lang="scss" scoped>

</style>