<template>
    <div :class="'resize-'+position" 
        @pointerdown="mousedown"
        @pointermove="mousemove"
        @pointerup="mouseup"
    ></div>
</template>

<script>
export default {
    name:'Resizer',
    props:{
        position:{
            type:String,
            required:true,
        }
    },
    data(){
        return {
            pointer_id:0,
            last_pos:{x:0,y:0},
        }
    },
    computed:{
        ratio(){
            const strategies = {
                left:{x:1, y:0, w:-1, h:0},
                top:{x:0, y:1, w:0, h:-1},
                right:{x:0, y:0, w:1, h:0},
                bottom:{x:0, y:0, w:0, h:1},
                topleft:{x:1, y:1, w:-1, h:-1},
                topright:{x:0, y:1, w:1, h:-1},
                bottomright:{x:0, y:0, w:1, h:1},
                bottomleft:{x:1, y:0, w:-1, h:1},
            }
            return strategies[this.position];
        }
    },
    methods:{
        mousedown(e){
            this.pointer_id = e.pointerId;
            e.target.setPointerCapture(e.pointerId);
            this.last_pos = {x:e.pageX,y:e.pageY};
        },
        mousemove(e){
            if (e.pointerId == this.pointer_id) {
                const cx = e.pageX - this.last_pos.x;
                const cy = e.pageY - this.last_pos.y;
                this.last_pos = {x:e.pageX,y:e.pageY};
                this.$emit('resize', {offsetX:cx * this.ratio.x,
                    offsetY:cy *  this.ratio.y,
                    offsetWidth: cx *  this.ratio.w,
                    offsetHeight: cy * this.ratio.h,
                });
            }
            e.target;
        },
        mouseup(e){
            if (e.pointerId == this.pointer_id) {
                e.target.releasePointerCapture(this.pointer_id);

                this.pointer_id = 0;
                this.last_pos = {x:0,y:0};
            }
        },
    }
}
</script>

<style scoped>
    .resize-left{cursor:ew-resize;position:absolute;left:-2px;top:0;width:2px;bottom:0;}
    .resize-top{cursor:ns-resize;position:absolute;left:0;top:-2px;right:0;height:2px;}
    .resize-bottom{cursor:ns-resize;position:absolute;left:0;bottom:-2px;right:0;height:2px;}
    .resize-right{cursor:ew-resize;position:absolute;right:-2px;width:2px;top:0;bottom:0;}
    .resize-topleft{cursor:nwse-resize;position:absolute;width:4px;height:4px;left:-2px;top:-2px;}
    .resize-topright{cursor:nesw-resize;position:absolute;width:4px;height:4px;right:-2px;top:-2px;}
    .resize-bottomleft{cursor:nesw-resize;position:absolute;width:4px;height:4px;left:-2px;bottom:-2px;}
    .resize-bottomright{cursor:nwse-resize;position:absolute;width:4px;height:4px;right:-2px;bottom:-2px;}
</style>