<template>
    <div class="shortcut" :class="{selected:selected, focused:selected}">
        <img :src="icon" class="shortcuticon">
        <span class="shortcutname"><slot></slot></span>
    </div>
</template>
<script>
export default {
    name:'Shortcut',
    props:{
        icon:{
            type:String,
            default:''
        },
        selected:{
            type:Boolean,
            default:false,
        }
    },
    data(){
        return {

        }
    },
    methods:{

    }
}
</script>
<style scoped>
    .shortcut{flex:none;width:81px;height:81px;text-align:center;display:flex;flex-flow:column nowrap;align-items:center;}
    .shortcuticon{display:inline-block;width:32px;height:32px;}
    .shortcutname{text-overflow:ellipsis;color:white;overflow:hidden;border:1px solid transparent;}
    .focused .shortcuticon{filter:brightness(0.7);}
    .focused .shortcutname{background-color:#00f7;}
    .selected .shortcutname{border:1px dotted white;}
</style>