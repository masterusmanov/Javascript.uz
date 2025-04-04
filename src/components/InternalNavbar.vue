<template>
    <div class="grid md:flex items-center justify-between gap-[12px] border-b-2">
        <router-link to="" class="linkactiv font-[700] pb-[10px] lg:pb-[22px]">{{$t('internal_navbar.navone.one')}}
            <p class="text-[15px]">{{$t('internal_navbar.navone.two')}}</p>
        </router-link>
         <router-link to="" class="linkactiv font-[700] pb-[10px] lg:pb-[22px]">{{$t('internal_navbar.navtwo.one')}}
            <p class="text-[15px]">{{$t('internal_navbar.navtwo.two')}}</p>
        </router-link>
         <router-link to="" class="linkactiv font-[700] pb-[10px] lg:pb-[22px]">{{$t('internal_navbar.navthree.one')}}
            <p class="text-[15px]">{{$t('internal_navbar.navthree.two')}}</p>
        </router-link>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    router-link-exact-active {
        color: #C4433A;
        border-bottom: 2px solid #C4433A;
    }
    .router-link-exact-active:hover {
        color: #C4433A;
        border-bottom: 2px solid #C4433A;
      }
      
</style>