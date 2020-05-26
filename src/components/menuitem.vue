<template>
    <div class="item" :class="menuclass" @mouseenter="mouse_enter" @mouseleave="mouse_leave" @click.stop="toggleexpand">
        <img class="icon" :class="large?'largeicon':'smallicon'" :src="icon" v-if="!is_seperator && icon">
        <div class="name" v-if="!is_seperator"><slot></slot></div>
        <div class="arrow" v-if="children.length > 0 && !horizontal">
            <svg width="5" height="9">
                <polygon points="0,0 4,4 0,8" style="fill:black"></polygon>
            </svg>
        </div>
        <div class="seperator" v-if="is_seperator"></div>
        <div class="children" :class="{horizontal:horizontal,vertical:!horizontal}" v-if="children.length > 0 && self_expanded">
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
        },
        horizontal:{
            type:Boolean,
            default:false,
        },
        open_by_click:{
            type:Boolean,
            default:false,
        }
    },
    computed:{
        is_seperator(){
            return this.$slots.default[0].text == '-';
        },
        menuclass(){
            if (this.is_seperator) {
                return {smallmenu:true}
            } else if (this.horizontal) {
                return {
                    horizitem:!this.self_expanded,
                    smallmenu:true,
                    expanded_horiz:this.self_expanded,
                }
            } else {
                return {
                    normalitem:true,
                    largemenu:this.large,
                    smallmenu:!this.large,
                    expanded:this.self_expanded,
                }
            }
        },
    },
    methods:{
        child_expanded(item){
            if (this.expanded_child_item) {
                this.expanded_child_item.collapse();
            }
            this.expanded_child_item = item;
        },
        toggleexpand(){
            this.self_expanded = !this.self_expanded;
            this.$emit('expanded', this.self_expanded ? this : null);
        },
        mouse_enter(){
            if (this.is_seperator) {
                return;
            }
            if (this.open_by_click) {
                return;
            }
            this.timeoutid = setTimeout(() => {
                this.expand();
            }, 0);
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
    .item{flex:none;display:flex;align-items:center;position:relative;border:1px solid transparent;}
    .largemenu{padding:3px 4px;}
    .smallmenu{padding:1px 4px 2px;}
    .normalitem:hover,.expanded{background:Highlight;}
    .normalitem:hover>.name,.expanded>.name{color:HighlightText;}
    .horizitem:hover{border:1px outset #e9e7e3;}
    .expanded_horiz{border:1px inset #e9e7e3;}
    .largeicon{width:24px;height:24px;}
    .smallicon{width:16px;height:16px;}
    .name{flex:auto;white-space:nowrap;padding:0 9px;}
    .arrow{flex:none;}
    .seperator{flex:auto;height:1px;background-color:gray;}
    .children{position:absolute;}
    .children{background-color:ThreeDFace;border:2px outset ButtonFace;box-shadow:3px 3px 3px #0005;}
    .horizontal{left:0;top:100%;}
    .vertical{left:100%;top:0;margin-left:-4px;margin-top:-2px;}
</style>