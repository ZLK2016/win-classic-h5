<template>
    <div class="desktop">
        <Shortcut v-for="s of shortcuts" :key="s.id" :icon="s.icon" :selected="selected==s" @click.native="selected=s">{{s.name}}</Shortcut>
        <Window v-for="w of windows" :key="'w_'+w.id"></Window>
    </div>
</template>
<script>
import Shortcut from './shortcut.vue';
import Window from './window.vue';
export default {
    name:'Desktop',
    components:{
        Shortcut,
        Window,
    },
    data(){
        return {
            shortcuts:[
                {id:1, name:'My Computer', icon:'/winpics/shell32_16.ico'},
                {id:2, name:'My Documents', icon:'/winpics/shell32_235.ico'},
                {id:3, name:'Network', icon:'/winpics/shell32_18.ico'},
                {id:4, name:'Recyle Bin', icon:'/winpics/shell32_32.ico'},
                {id:5, name:'Internet Explorer', icon:'/iepics/IEXPLORE_32528.ico'},
                // {id:6, name:'', icon:''},
            ],
            selected:null,
            windows:[
                {id:1,}
            ]
        }
    }
}
</script>
<style scoped>
    .desktop{flex:1 1 0;display:flex;flex-direction:column;flex-wrap:wrap;align-content:flex-start;padding-top:2px;min-height:0;}
    .desktop{position:relative;overflow:hidden;}
</style>