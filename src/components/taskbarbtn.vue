<template>
    <div class="btn" :style="style">
        <img v-if="icon" :src="icon">
        <span><slot></slot></span>
        <div class="spacer"></div>
    </div>
</template>
<script>
export default {
    name:'TaskbarBtn',
    data(){
        return {
            checked:false,
        }
    },
    props:{
        icon:{
            type:String,
            default:'',
        },
        sizebycontent:{
            type:Boolean,
            default:true,
        },
        maxsize:{
            type:String,
            default:'160px',
        },
        down:{
            type:Boolean,
            default:false,
        }
    },
    computed:{
        style(){
            return {
                maxWidth:this.maxsize,
                flex:this.sizebycontent ? 'none':'1 1 0',
                borderStyle:this.down ? 'inset' : 'outset',
            }
        }
    }
}
</script>

<style scoped>
    .btn{padding:1px;border-width:2px;border-color:ButtonFace;margin-left:2px;background-color:ButtonFace;}
    .btn{display:flex;align-items:center;}
    .btn>img{flex:none;width:16px;height:16px;}
    .btn>span{flex:none;}
    .btn>.spacer{flex:auto;}
</style>