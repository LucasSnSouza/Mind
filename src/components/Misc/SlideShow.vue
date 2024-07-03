<template>

    <div class="slide-show-wrapper">

        <div class="slide-show-data w-full flex gap-md x-center y-center">

            <div 
                class="slide-show-image rounded-md bg-color-brand-two"
                v-for="(image, index) of images"
                :class="{'selected': index == current_index}"
                :key="index"
            >
            </div>

        </div>

        <div class="slide-show-demolines flex x-center y-center w-full gap-md p-lg">

            <div
                v-for="(image, index) of images"
                class="rounded"
                :class="{'selected': index == current_index}"
                :key="index"
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
        }
    },
    props: {
        images: {
            type: Array,
            default: () => ['tete', 'dd', 'cc']
        }
    },
    created(){
        setInterval(() => {
            this.nextImage();
        }, 5000);
    },
    methods: {
        nextImage(){
            this.current_index = (this.current_index + 1) % this.images.length;
        }
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