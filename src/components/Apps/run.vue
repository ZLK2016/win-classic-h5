<template>
    <Dialog caption="运行" :initsize="{x:20,y:400,w:345,h:170}">
        <div class="content">
            <div class="desc">
                <img :src="$res('winpics/shell32_25.ico')">
                <div>请键入程序、文件夹、文档或 Internet 资源的名称，Windows 将为您打开它。</div>
            </div>
            <div class="input">
                <label>打开：</label>
                <input type="text" list="cmds">
                <datalist id="cmds">
                    <option>cmd</option>
                </datalist>
            </div>
        </div>
    </Dialog>
</template>

<script>
import Dialog from '../dialog.vue';
export default {
    name:'AppRun',
    components:{
        Dialog
    }
}
</script>

<style scoped>
    .content{padding:17px 12px;}
    .desc{display:flex;align-items:center;}
    .desc>img{width:32px;height:32px;object-fit:contain;}
    .desc>div{flex:auto;margin-left:12px;}
    .input{margin-top:16px;display:flex;align-items:center;}
    .input>input{flex:auto;border:2px inset #e9e7e3;}
</style>