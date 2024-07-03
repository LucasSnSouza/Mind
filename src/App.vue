<template>

  <div class="app flex w-full h-full x-end y-center bg-color-brand-two">

    <div class="app menubar-wrapper p-lg">

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

export default{
    data(){
        return {
            navigationStore: useNavigationStore()
        }
    },
    components: {
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
