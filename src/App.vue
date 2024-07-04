<template>

  <div class="app flex w-full h-full x-end y-center bg-color-brand-two">

    <div class="app menubar-wrapper p-lg">

      <div class="flex flex-column gap-lg color-brand-two">
        <div class="app-grid-template grid gap-md">
          <ButtonBasic
            v-for="(item, index) of appItems"
            type="two"
            class="w-full p-xlg rounded-md color-brand-two"
            :key="index"
          >
            <div>
              <p class="text-start">{{ item.name }}</p>
            </div>
          </ButtonBasic>
        </div>
      </div>

    </div>
    
    <div 
      class="app route-view-wrapper h-full shadow-sm"
      :class="{'retreat': navigationStore.getMenubarStatus}"
      @click.stop="navigationStore.setMenubarStatus(false)"
    >
      <RouterView />
    </div>
  </div>

</template>

<script>

import { RouterLink, RouterView } from 'vue-router'

import { useNavigationStore } from '@/stores/navigation.js'

import * as Button from "@/components/Button";
import * as Input from "@/components/Input";
import * as Misc from "@/components/Misc";

export default{
    data(){
        return {
            navigationStore: useNavigationStore(),
            appItems: [
              {
                name: "Anime Mania"
              },
              {
                name: "Anime Mania"
              },
              {
                name: "Anime Mania"
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

<style lang="scss" scoped>

.app{

  overflow: hidden;

  .menubar-wrapper{
    width: 65%;
    height: 90%;

    .app-grid-template{
      grid-template-columns: 50% 50%;

      button{
        aspect-ratio: 1/1;
      }

    }

  }

  .route-view-wrapper{
    transition: .5s;
    min-width: 100vw;
    height: 100%;

    &.retreat{
      height: 90%;
      margin-right: -65%;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    }
  }

}

</style>
