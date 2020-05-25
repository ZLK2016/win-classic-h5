<template>
    <div class="menu">
        <Item v-for="item of menuitems" :key="item.id" :icon="item.icon" :children="item.children">{{item.name}}</Item>
    </div>
</template>

<script>
import MenuItem from './menuitem.vue';
export default {
    name:'Menu',
    components:{
        'Item' : MenuItem,
    },
    props:{
        menuitems:{
            type:Array,
            default(){
                return [];
            },
        }
    }
}
</script>

<style scoped>
    .menu{position:absolute;left:100%;top:0;margin-left:-4px;margin-top:-2px;}
    .menu{background-color:ThreeDFace;border:2px outset ButtonFace;box-shadow:3px 3px 3px #0005;}
</style>