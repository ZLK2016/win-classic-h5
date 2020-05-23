<template>
    <div class="startmenu">
        <div class="logo">
            <span>Windows XP Professional</span>
        </div>
        <div class="menu">
            <MenuItem v-for="item of menu_items" :key="item.id" :icon="item.icon" :children="item.children" :large="true" @expanded="child_expanded">{{item.name}}</MenuItem>
        </div>
    </div>
</template>
<script>
import MenuItem from './menuitem.vue';
export default {
    name:'StartMenu',
    components:{
        MenuItem,
    },
    data(){
        return {
            menu_items:[
                {id:12, name:'Windows Catalog', icon:this.$res('winpics/moricons_108.ico')},
                {id:13, name:'Windows Update', icon:this.$res('winpics/shell32_47.ico')},
                {id:14, name:'Set Program Access and Defaults', icon:this.$res('winpics/moricons_114.ico')},
                {id:2, name:'-', icon:''},
                {id:3, name:'Programs', icon:this.$res('winpics/shell32_20.ico'),children:[
                    {id:11, name:'Accessories', icon:this.$res('winpics/shell32_37.ico'), children:[
                        {id:1, name:'Notepad', icon:''},
                        {id:2, name:'Command Prompt', icon:''},
                    ]},
                    {id:12, name:'Startup', icon:this.$res('winpics/shell32_37.ico'), children:[
                        {id:0, name:'(empty)', icon:''},
                    ]},
                    {id:1, name:'Internet Explorer', icon:this.$res('winpics/shell32_512.ico')},
                    {id:2, name:'Outlook Express', icon:''},
                    {id:3, name:'Windows Media Player', icon:''},
                    {id:4, name:'Windows Messenger', icon:''},
                ]},
                {id:4, name:'Documents', icon:this.$res('winpics/shell32_21.ico')},
                {id:5, name:'Settings', icon:this.$res('winpics/shell32_22.ico'),children:[
                    {id:1, name:'Control Panel', icon:this.$res('winpics/shell32_22.ico')},
                    {id:2, name:'-', icon:''},
                    {id:3, name:'Network Connections', icon:this.$res('winpics/shell32_175.ico')},
                    {id:4, name:'Printers and Faxes', icon:this.$res('winpics/shell32_138.ico')},
                    {id:5, name:'Taskbar and Start Menu', icon:this.$res('winpics/shell32_40.ico')},
                ]},
                {id:6, name:'Search', icon:this.$res('winpics/shell32_23.ico')},
                {id:7, name:'Help and Support', icon:this.$res('winpics/shell32_24.ico')},
                {id:8, name:'Run...', icon:this.$res('winpics/shell32_25.ico')},
                {id:9, name:'-', icon:''},
                {id:10, name:'Log Off...', icon:this.$res('winpics/shell32_45.ico')},
                {id:11, name:'Turn Off Computer...', icon:this.$res('winpics/shell32_28.ico')},
            ],
            expanded_child_item:null,
        }
    },
    methods:{
        child_expanded(item){
            if (this.expanded_child_item) {
                this.expanded_child_item.collapse();
            }
            this.expanded_child_item = item;
        },
    }
}
</script>
<style scoped>
    .startmenu{display:flex;position:absolute;left:0;bottom:100%;background-color:ThreeDFace;border:2px outset ButtonFace;box-shadow:3px 3px 3px #0005;}
    .logo{font-size:1.25em;line-height:1.25em; font-weight:bold;writing-mode:vertical-lr;background-color:black;color:white;width:1.25em;transform:rotate(180deg);}
    .logo>span{background:linear-gradient(#000080,blue,black);padding:10px 0 50px 0;}
    .menu{display:flex;flex-flow:column nowrap;align-items:stretch;}
</style>