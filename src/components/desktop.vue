<template>
    <div class="desktop">
        <Shortcut v-for="s of shortcuts" :key="s.id" :icon="s.icon" :selected="selected==s" 
            @click.native="selected=s"
            @dblclick.native="openshortcut(s)"
        >{{s.name}}</Shortcut>
        <!-- <Window v-for="w of windows" :key="'w_'+w.id"></Window>
        <Dialog><div>这里填写文本</div></Dialog> -->
        <!-- <AppRun></AppRun>
        <AppIE></AppIE>
        <AppNotepad></AppNotepad> -->
        <component v-for="app of apps" :key="`app-${app.proc_id}`" :is="app.name"></component>
    </div>
</template>
<script>
import Shortcut from './shortcut.vue';
// import Window from './window.vue';
// import Dialog from './dialog.vue';
import AppRun from './Apps/run.vue';
import AppIE from './Apps/ie.vue';
import AppNotepad from './Apps/notepad.vue';
export default {
    name:'Desktop',
    components:{
        Shortcut,
        // Window,
        // Dialog,
        AppRun,
        AppIE,
        AppNotepad,
    },
    data(){
        return {
            shortcuts:[
                {id:1, name:'My Computer', icon:this.$res('winpics/shell32_16.ico'),},
                {id:2, name:'My Documents', icon:this.$res('winpics/shell32_235.ico')},
                {id:3, name:'Network', icon:this.$res('winpics/shell32_18.ico')},
                {id:4, name:'Recyle Bin', icon:this.$res('winpics/shell32_32.ico')},
                {id:5, name:'Internet Explorer', icon:this.$res('iepics/IEXPLORE_32528.ico'), app:'AppIE'},
                // {id:6, name:'', icon:''},
            ],
            selected:null,
            windows:[
                {id:1,}
            ]
        }
    },
    computed:{
        apps(){
            return this.$store.state.openedApps;
        }
    },
    methods:{
        openshortcut(s){
            if (s.app) {
                this.$store.commit('openapp', s.app);
            }
        }
    }
}
</script>
<style scoped>
    .desktop{flex:1 1 0;display:flex;flex-direction:column;flex-wrap:wrap;align-content:flex-start;padding-top:2px;min-height:0;}
    .desktop{position:relative;overflow:hidden;}
</style>