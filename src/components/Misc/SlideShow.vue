<template>

    <div class="slide-show-wrapper">

        <div class="slide-show-data w-full flex gap-md x-center y-center">

            <div 
                class="slide-show-image flex x-center rounded-md bg-color-brand-two color-brand-two"
                v-for="(item, index) of items"
                :class="{'selected': index == current_index}"
                :key="index"
            >
                <div 
                    class="slide-show-description shadow-sm p-lg rounded-md"
                    v-if="item?.description"
                >
                    <p>{{ item?.description }}</p>
                </div>
            </div>

        </div>

        <div class="slide-show-demolines flex x-center y-center w-full gap-md p-lg">

            <div
                v-for="(item, index) of items"
                class="rounded"
                :style="{marginTop: `${items[current_index]?.description ? 15 : 0}px`}"
                :class="{'selected': index == current_index}"
                :key="index"
                @click="current_index = index"
            >
            </div>

        </div>

    </div>

</template>

<script>

export default{

    data(){
        return {
            current_index: 0,
            timer_id: null,
        }
    },
    props: {
        items: {
            type: Array,
            default: () => []
        }
    },
    created(){
        this.timer_id = setInterval(() => {
            this.nextItem();
        }, 5000);
    },
    methods: {
        nextItem(target = null){
            this.current_index = (this.current_index + 1) % this.items.length;
        },
    }
    
}

</script>

<style lang="scss">

.slide-show-wrapper{

    .slide-show-data{

        height: 200px;
        position: relative;

        .slide-show-image{
            min-width: 90%;
            height: 100%;
            position: absolute;
            transform: translateX(110%);
            top: 0px;
            transition: 1s;
            &.selected {
                transform: translateX(0); 
            }

            .slide-show-description{
                position: absolute;
                width: 90%;
                bottom: -20px;
                color: black;
                background: white;
            }
        }
        
    }

    .slide-show-demolines{

        div{
            width: 8px;
            height: 8px;
            background: var(--color-brand-two);
            transition: .5s;

            &.selected{
                width: 32px;
            }
        }

    }

}

</style>