<template>
    <Window :caption="caption" :enable_min="enable_min" :enable_size="enable_size" :initsize="initsize">
        <div class="dlg">
            <div class="dlgbody">
                <slot></slot>
            </div>
            <div class="dlgfooter">
                <Button>确定</Button>
                <Button>取消</Button>
                <!-- <Button>浏览...</Button> -->
            </div>
        </div>
    </Window>
</template>

<script>
import Window from './window.vue';
import Button from './button.vue';
export default {
    name:'Dialog',
    components:{
        Window,Button,
    },
    props:{
        caption:{
            type:String,
            default:'Dialog',
        },
        icon:{
            type:String,
        },
        enable_size:{
            type:Boolean,
            default:true,
        },
        enable_min:{
            type:Boolean,
            default:true,
        },
        initsize:{
            type:Object,
            default(){
                return {x:40,y:40,w:300,h:300}
            }
        }
    }
}
</script>

<style scoped>
    .dlg{display:flex;flex-flow:column nowrap;width:100%;height:100%;align-items:stretch;}
    .dlgbody{flex:auto;}
    .dlgfooter{flex:none;padding:10px;text-align:center;}
    .dlgfooter{display:flex;align-items:center;justify-content:flex-end;}
    .dlgfooter>*{margin-left:5px;}
</style>