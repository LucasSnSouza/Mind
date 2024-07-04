<template>

    <div class="home-screen-wrapper flex flex-column bg-color-brand-one">

        <div class="flex x-start p-lg" @click.stop="navigationStore.setMenubarStatus(true)">

            <div class="bg-color-brand-two p-md rounded-md">
                <MiscIcon
                    icon="tri-dots-icon"
                    color="#FFFFFF"
                    :size="[20,20]"
                />
            </div>

        </div>

        <div class="home-screen-title flex flex-column x-center color-brand-two">

            <div class="flex x-center y-center">
                <img src="/img/logo-icon.png">
                <h1 class="p-md font-lg">Mind</h1>
            </div>
            <p class="w-full text-center p-md font-sm">Compartilhando memorias</p>

        </div>

        <div v-if="slideshowItems.length > 0">
            
            <MiscSlideShow
                :items="slideshowItems"
            />

        </div>

        <div 
            v-if="favoritesAplicationItems.length > 0"
            class="favorite-tab flex flex-column p-lg gap-lg"
        >
            <div>
                <h1 class="font-md color-brand-two">Favoritos</h1>
                <!-- <p class="font-xsm color-brand-two">Suas aplicações favoritas aqui</p> -->
            </div>
            <div class="flex gap-md scroll-x">
                <ButtonBasic
                    v-for="(item, index) of favoritesAplicationItems"
                    class="button-favorite w-full p-lg rounded-sm flex flex-column y-start color-brand-two"
                    @click="console.log(item?.name)"
                >
                    <h1 class="font-sm text-start">{{ item?.name }}</h1>
                </ButtonBasic>
            </div>
        </div>

        <div class="p-lg relative flex flex-column gap-md">

            <h1 class="font-md color-brand-two">Busca</h1>

            <InputText
                placeholder="em que posso ajudar?"
            />
            <div class="icon-search bg-color-brand-two p-md rounded-sm">
                <MiscIcon
                    icon="search-icon"
                    :size="[16,16]"
                />
            </div>
        </div>

    </div>

</template>

<script>

import * as Button from "@/components/Button"
import * as Input from "@/components/Input";
import * as Misc from "@/components/Misc"

import { useNavigationStore } from '@/stores/navigation.js'

export default{
    data(){
        return {
            navigationStore: useNavigationStore(),
            slideshowItems: [
                {
                    description: "Bem vindo, praticidade e utilidade você pode encontrar aqui."
                }
            ],
            favoritesAplicationItems: [
                {
                    name: "Anime Mania",
                },
                {
                    name: "Easy Money",
                },
                {
                    name: "Hollywood Now",
                }
            ]
        }
    },
    components: {
        ...Button,
        ...Input,
        ...Misc
    },
    methods: {
    }

}

</script>

<style lang="scss">

.home-screen-wrapper{
    
    min-height: 100vh;

    .home-screen-title{
        width: 100%;
        height: 100px;

        img{
            height: 40px;
        }
    }

}

.favorite-tab{

    .button-favorite{
        min-width: 140px;
    }
}

.icon-search{
    position: absolute;
    bottom: 24px;
    right: 23px;
}

::-webkit-scrollbar {
    display: none; /* Chrome, Safari e Opera */
}

</style>