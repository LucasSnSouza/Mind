<template>

    <div class="sing-up-wrapper flex flex-column gap-md h-full bg-color-brand-three p-lg">

        <div class="flex flex-column gap-md">
            <InputText
                title="Endereço de Email"
                placeholder="meu.email@gmail.com"
            />
            <InputText
                title="Senha"
                placeholder="Insira sua senha"
            />
        </div>

        <div>
            <ButtonBasic
                class="w-full p-xlg rounded-md color-brand-two"
                @click="$router.push({ name: 'HomeView' })"
            >
                Login
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
    }
}

</script>

<style lang="scss" scoped>


</style>