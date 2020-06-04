<template>
    <Window caption="Notepad" :icon="$res('appicons/NOTEPAD_2.ico')">
        <div class="main">
            <MenuBar :menuitems="menu"></MenuBar>
            <textarea name="txt" wrap="off"></textarea>
            <StatusBar></StatusBar>
        </div>
    </Window>
</template>

<script>
import Window from '../window.vue';
import MenuBar from '../menubar.vue';
import StatusBar from '../statusbar.vue';
export default {
    name:'AppNotepad',
    components:{
        Window, MenuBar,StatusBar,
    },
    data(){
        return {
            menu:[
                {id:1, name:'File', children:[]},
                {id:1, name:'Edit', children:[]},
                {id:1, name:'Format', children:[]},
                {id:1, name:'View', children:[]},
                {id:1, name:'Help', children:[]},
            ]
        }
    }
}
</script>

<style scoped>
    .main{width:100%;height:100%;display:flex;flex-flow:column nowrap;align-items:stretch;}
    textarea{flex:auto;border:2px inset #e9e7e3;cursor:text;resize:none;overflow:scroll;padding:2px;}
    textarea:focus{outline:none;}
</style>