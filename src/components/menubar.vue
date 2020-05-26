<template>
        <div class="menu">
            <MenuItem v-for="item of menu" :key="item.id" :icon="item.icon" :children="item.children" :large="true" @expanded="child_expanded" :horizontal="true" :open_by_click="true">{{item.name}}</MenuItem>
        </div>
</template>
<script>
import MenuItem from './menuitem.vue';
export default {
    name:'MenuBar',
    components:{
        MenuItem,
    },
    props:{
        menu:{
            type:Array,
            default(){
                return [
                    {id:1, name: 'File', children:[
                        {id:1, name: 'New'},
                        {id:2, name: 'Open...'},
                        {id:3, name: 'Save'},
                        {id:4, name: 'Save as...'},
                        {id:5, name: '-'},
                        {id:6, name: 'Exit'},
                    ]},
                    {id:2, name: 'Edit', children:[
                        {id:1, name: 'Undo'},
                        {id:2, name: 'Redo'},
                        {id:3, name: '-'},
                        {id:4, name: 'Cut'},
                        {id:5, name: 'Copy'},
                        {id:6, name: 'Paste'},
                        {id:7, name: 'Delete'},
                        {id:8, name: '-'},
                        {id:9, name: 'Find...'},
                    ]},
                    {id:3, name: 'View', children:[
                        {id:1, name: 'Status bar'},
                    ]},
                    {id:4, name: 'Help', children:[
                        {id:1, name: 'About...'},
                    ]},
                ];
            }
        }
    },
    data(){
        return {
            expanded_child_item:null,
        }
    },
    methods:{
        child_expanded(item){
            if (this.expanded_child_item && this.expanded_child_item != item) {
                this.expanded_child_item.collapse();
            }
            this.expanded_child_item = item;
        },
    }
}
</script>
<style scoped>
    .menu{display:flex;}
</style>