<template>
    <div class="item" :class="{normalitem:!is_seperator,largemenu:large,smallmenu:!large,expanded:self_expanded}" @mouseenter="mouse_enter" @mouseleave="mouse_leave">
        <img class="icon" :class="large?'largeicon':'smallicon'" :src="icon" v-if="!is_seperator">
        <div class="name" v-if="!is_seperator"><slot></slot></div>
        <div class="arrow" v-if="children.length > 0">
            <svg width="5" height="9">
                <polygon points="0,0 4,4 0,8" style="fill:black"></polygon>
            </svg>
        </div>
        <div class="seperator" v-if="is_seperator"></div>
        <div class="children" v-if="children.length > 0 && self_expanded">
            <MenuItem v-for="item of children" :key="item.id" :icon="item.icon" :children="item.children" @expanded="child_expanded">{{item.name}}</MenuItem>
        </div>
    </div>
</template>
<script>
export default {
    name:'MenuItem',
    data(){
        return {
            self_expanded:false,
            expanded_child_item:null,
            timeoutid:0,
        }
    },
    props:{
        icon:{
            type:String,
        },
        children:{
            type:Array,
            default(){return []},
        },
        large:{
            type:Boolean,
            default:false,
        }
    },
    computed:{
        is_seperator(){
            return this.$slots.default[0].text == '-';
        }
    },
    methods:{
        child_expanded(item){
            if (this.expanded_child_item) {
                this.expanded_child_item.collapse();
            }
            this.expanded_child_item = item;
        },
        mouse_enter(){
            if (this.is_seperator) {
                return;
            }
            this.timeoutid = setTimeout(() => {
                this.self_expanded = true;
                this.$emit('expanded', this);
            }, 500);
        },
        mouse_leave(){
            if (this.timeoutid) {
                clearTimeout(this.timeoutid);
                this.timeoutid = 0;
            }
        },
        collapse(){
            this.self_expanded = false;
        }
    }
}
</script>
<style scoped>
    .item{flex:none;display:flex;align-items:center;position:relative;}
    .largemenu{padding:4px 5px;}
    .smallmenu{padding:2px 5px 3px;}
    .normalitem:hover,.expanded{background:Highlight;}
    .normalitem:hover>.name,.expanded>.name{color:HighlightText;}
    .largeicon{width:24px;height:24px;}
    .smallicon{width:16px;height:16px;}
    .name{flex:auto;white-space:nowrap;padding-left:9px;padding-right:25px;}
    .arrow{flex:none;}
    .seperator{flex:auto;height:1px;background-color:gray;}
    .children{position:absolute;left:100%;top:0;margin-left:-4px;margin-top:-2px;}
    .children{background-color:ThreeDFace;border:2px outset ButtonFace;box-shadow:3px 3px 3px #0005;}
</style>