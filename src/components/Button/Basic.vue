<template>
    <button
        class="button-basic" 
        :class="this.class, this.type"
    >
        <slot></slot>
    </button>
</template>

<script>

export default{
    props:{
        type: {
            type: String,
            default: "one"
        },
        class: {
            type: String,
            default: null
        }
    }
}

</script>

<style lang="scss" scoped>

.button-basic{
    outline: none;
    border: none;
    overflow: hidden;

    &.one{
        background: var(--color-brand-three);

        &.ghost{
            background: none;
            border: 1px solid var(--color-brand-three);
        }
    }

    &.two{
        background: var(--color-brand-one);
    }

}

</style>