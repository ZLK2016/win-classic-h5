<template>
    <div class="btn">
        <img v-if="icon" class="icon" :src="icon" >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'Button',
    props:{
        icon:{
            type:String,
        },
    }
}
</script>

<style scoped>
    .btn{display:flex;align-items:center;padding:10px;min-width:75px;}
    .btn{background:#d4d0c8;border:2px outset #f1f0ee;}
    .btn:active{border-style:inset;}
</style>