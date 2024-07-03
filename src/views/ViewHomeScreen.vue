<template>

    <div class="home-screen-wrapper h-full flex flex-column bg-color-brand-one">

        <div class="flex x-end p-lg" @click.stop="navigationStore.setMenubarStatus(true)">

            <MiscIcon
                icon="tri-dots-icon"
                color="#303030"
                :size="[17,17]"
            />

        </div>

        <div class="home-screen-title flex flex-column x-center color-brand-two">

            <div class="flex x-center y-center">
                <img src="/img/logo-icon.png">
                <h1 class="p-md font-lg">Mind</h1>
            </div>
            <p class="w-full text-center p-md font-sm">Compartilhando memorias</p>

        </div>

        <div>
            
            <MiscSlideShow/>

        </div>

    </div>

</template>

<script>

import * as Misc from "@/components/Misc"

import { useNavigationStore } from '@/stores/navigation.js'

export default{
    data(){
        return {
            navigationStore: useNavigationStore()
        }
    },
    components: {
        ...Misc
    },
    methods: {
    }

}

</script>

<style lang="scss">

.home-screen-wrapper{

    .home-screen-title{
        width: 100%;
        height: 100px;

        img{
            height: 40px;
        }
    }

}

</style>