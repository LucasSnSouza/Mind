<template>

    <div class="sing-up-wrapper flex flex-column gap-lg h-full bg-color-brand-three p-lg">

        <div class="flex x-center y-center">
            <img src="/img/login-background-raibon.png" style="width: 100%;">
            <img src="/img/logo-icon.png" class="absolute" style="width: 60px; filter: grayscale(100%) brightness(0.4)"/>
        </div>

        <div class="">
            <h1 class="font-xlg color-brand-three">{{ `${getComprimentByHour()}, Bem vindo.` }}</h1>
            <p class="font-sm">Seremos seu consultor portatil</p>
        </div>

        <div class="flex flex-column gap-md">
            <InputText
                title="Endereço de Email"
                placeholder="meu.email@gmail.com"
            />
            <InputText
                title="Senha"
                placeholder="Insira sua senha"
            />
            <p class="text-center">Esqueceu sua senha? <strong class="color-brand-three">Recupere aqui</strong></p>
        </div>

        <div class="flex flex-column gap-md">
            <ButtonBasic
                class="w-full p-xlg rounded-md color-brand-two"
                @click="$router.push({ name: 'HomeView' })"
            >
                Entrar
            </ButtonBasic>
            <ButtonBasic
                class="w-full p-xlg rounded-md color-brand-three ghost"
                @click="$router.push({ name: 'HomeView' })"
            >
                Cadastrar
            </ButtonBasic>
        </div>

    </div>

</template>

<script>

import * as Button from "@/components/Button";
import * as Input from "@/components/Input";
import * as Misc from "@/components/Misc";

export default{
    data(){
        return {

        }
    },
    components: {
        ...Button,
        ...Input,
        ...Misc
    },
    methods: {
        getComprimentByHour(){
            let date = new Date();
            if( date.getHours() < 6){
                return 'Boa noite'
            }
            else if( date.getHours() < 12){
                return 'Bom dia'
            }
            else if( date.getHours() < 19){
                return 'Boa tarde'
            }
            else{
                return 'Boa noite'
            }
        }
    }
}

</script>

<style lang="scss" scoped>


</style>