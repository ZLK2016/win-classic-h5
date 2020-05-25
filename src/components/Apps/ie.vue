<template>
    <Window>
        <div class="main">
            <div class="addressbar">
                <label>地址</label>
                <input type="text" v-model="dispurl">
                <Button @click.native="go">转到</Button>
            </div>
            <div class="webpage">
                <iframe :src="pageurl" frameborder="2" @load="pageloaded"
                    sandbox="allow-scripts allow-forms allow-popups allow-same-origin"></iframe>
            </div>
        </div>
    </Window>
</template>

<script>
import Window from '../window.vue';
import Button from '../button.vue';
export default {
    name: 'AppIE',
    components:{
        Window, Button
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
            this.dispurl = e.target.contentWindow.location;
            console.log(this.dispurl);
        }
    }
}
</script>

<style scoped>
    .main{display:flex;flex-flow:column nowrap;align-items:stretch;height:100%;}
    .addressbar{display:flex;align-items:center;}
    .addressbar>input{flex:auto;}
    .webpage{flex:auto;}
    .webpage>iframe{width:100%;height:100%;}
</style>