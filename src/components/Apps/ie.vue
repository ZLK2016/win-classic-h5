<template>
    <Window caption="Internet Explorer" :icon="$res('iepics/IEXPLORE_32547.ico')">
        <div class="main">
            <div class="commandbars">
                <div class="menubar bar">
                    <MenuBar :border="true"></MenuBar>
                    <img src="">
                </div>
                <div class="addressbar bar">
                    <label>地址</label>
                    <input type="text" v-model="dispurl">
                    <Button @click.native="go">转到</Button>
                </div>
            </div>
            <div class="webpage">
                <iframe :src="pageurl" frameborder="2" @load="pageloaded"
                    sandbox="allow-scripts allow-forms allow-popups allow-same-origin"></iframe>
            </div>
            <StatusBar></StatusBar> 
        </div>
    </Window>
</template>

<script>
import Window from '../window.vue';
import Button from '../button.vue';
import MenuBar from '../menubar.vue';
import StatusBar from '../statusbar.vue';
export default {
    name: 'AppIE',
    components:{
        Window, Button, MenuBar, StatusBar,
    },
    data(){
        return {
            dispurl:'http://www.bing.com',
            pageurl:''
        }
    },
    methods:{
        go(){
            this.pageurl = this.dispurl;
        },
        pageloaded(e){
            this.dispurl = e.target.contentWindow.location.href;
        }
    }
}
</script>

<style scoped>
    .main{display:flex;flex-flow:column nowrap;align-items:stretch;height:100%;}
    .addressbar{display:flex;align-items:center;}
    .addressbar>input{flex:auto;}
    .webpage{flex:auto;}
    .webpage>iframe{width:100%;height:100%;background-color:white;}
    .bar{border: 1px outset #e9e7e3;}
    .commandbars{border:1px groove silver;}
    .menubar{display:flex;align-items:stretch;}
    .menubar>div{flex:auto;}
    .menubar>img{width:40px;background-color:white;}
</style>