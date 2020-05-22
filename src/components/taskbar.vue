<template>
    <div class="taskbar">
        <div class="start" ref="start">
            <div class="menu_outside" @click="start_menu_open = false" v-if="start_menu_open"></div>
            <TaskbarBtn icon="/windows_xp.png" :down="start_menu_open" @mousedown.stop.native="start_menu_open = !start_menu_open">Start</TaskbarBtn>
            <StartMenu v-if="start_menu_open"></StartMenu>
        </div>
        <ul class="quickstart"></ul>
        <ul class="runningapps">
            <TaskbarBtn icon="/winpics/shell32_5.ico" :sizebycontent="false" maxsize="160px">New Folder</TaskbarBtn>
            <TaskbarBtn icon="/winpics/shell32_5.ico" :sizebycontent="false" maxsize="160px">New Folder</TaskbarBtn>
        </ul>
        <ul class="traypanel">
            🔉<span>{{clock}}</span>
        </ul>
    </div>
</template>

<script>
import TaskbarBtn from './taskbarbtn.vue';
import StartMenu from './startmenu.vue';
export default {
    name:'TaskBar',
    components:{TaskbarBtn, StartMenu},
    data(){
        return {
            runningapps:[
                {}
            ],
            start_menu_open:false,
            clock:'12:00',
        }
    },
    watch:{
        // start_menu_open(val){
        //     const closemenu = (e)=>{
        //         if (!this.$refs.start.contains(e.target)) {
        //             this.start_menu_open = false;
        //         }
        //     }
        //     if (val) {
        //         document.addEventListener('mousedown', closemenu);
        //     } else {
        //         document.removeEventListener('mousedown', closemenu);
        //     }
        // }
    },
    mounted(){
        setInterval(() => {
            const time = new Date();
            this.clock = `${String(time.getHours()).padStart(2, '0')}:${String(time.getMinutes()).padStart(2, '0')}`;
        }, 1000);
    },
}
</script>

<style scoped>
    .taskbar{display:flex;padding:1px;background-color:ThreeDFace;border-top:1px outset ButtonFace;}
    .start,.quickstart,.traypanel{flex:none;}
    .quickstart,.runningapps,.traypanel{margin-left:2px;}
    .runningapps{flex:auto;display:flex;}
    .traypanel{border:1px inset ButtonFace;padding:1px;}
    .start{position:relative;}
    .menu_outside{position:fixed;left:0;top:0;right:0;bottom:0;background-color:#fff5;}
</style>