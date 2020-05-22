<template>
    <div class="window" :style="position">
        <div class="captionbar" 
            @pointerdown.self="mousedown" @pointermove.self="mousemove" @pointerup.self="mouseup"
            @dblclick="maximized = !maximized">
            <img class="sysicon" src="/winpics/shell32_3.ico" />
            <div class="caption">Window</div>
            <div class="spacer"></div>
            <div class="wndbtns">
                <div class="btn">
                    <svg width="7" height="9">
                        <line x1="0" y1="8" x2="5" y2="8" stroke="black"/>
                        <line x1="0" y1="9" x2="5" y2="9" stroke="black"/>
                    </svg>
                </div>
                <div class="btn" @click="maximized = !maximized">
                    <svg width="9" height="9">
                        <line x1="0" y1="1" x2="8" y2="1" stroke="black"/>
                        <rect x="0" y="0" width="8" height="8" stroke="black" fill="transparent"/>
                    </svg>
                </div>
                <div class="btn">
                    <svg width="8" height="7">
                        <line x1="0" y1="0" x2="7" y2="6" stroke="black"/>
                        <line x1="7" y1="0" x2="0" y2="6" stroke="black"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Window',
    data(){
        return {
            maximized:false,

            winpos:{x:20,y:20,w:300,h:200},
            dragging:false,
            dragging_pointer_id:0,
            pt_offset_x:0,
            pt_offset_y:0,
        }
    },
    computed:{
        position(){
            return this.maximized ? {
                left:'-2px',
                top:'-2px',
                right:'-2px',
                bottom:'-2px',
            } : {
                left:`${this.winpos.x}px`,
                top:`${this.winpos.y}px`,
                width:`${this.winpos.w}px`,
                height:`${this.winpos.h}px`,
            }
        }
    },
    methods:{
        mousedown(e){
            if (this.maximized) {
                return;
            }
            this.dragging = true;
            this.dragging_pointer_id = e.pointerId;
            // const rect = e.target.getBoundingClientRect();
            this.pt_offset_x = e.clientX - this.winpos.x;
            this.pt_offset_y = e.clientY - this.winpos.y;
            e.target.setPointerCapture(e.pointerId);
        },
        mousemove(e){
            if (this.dragging) {
                const new_wnd_left = e.clientX - this.pt_offset_x;
                const new_wnd_top = e.clientY - this.pt_offset_y;
                this.winpos = {
                    x:new_wnd_left,y:new_wnd_top,w:this.winpos.w,h:this.winpos.h,
                }
            }
        },
        mouseup(e){
            if (this.dragging && e.pointerId === this.dragging_pointer_id) {
                e.target.releasePointerCapture(this.dragging_pointer_id);
                this.dragging = false;
                this.dragging_pointer_id = 0;
            }
        }
    }
}
</script>

<style scoped>
    .window{position:absolute;}
    .window{border:2px outset #d4d0c8;background-color:#d4d0c8;}
    .captionbar{height:18px;display:flex;align-items:center;padding:0 2px 0 0;background:linear-gradient(to right,#0a2265,#a6caf0);}
    .captionbar>*{margin-left:2px;}
    .sysicon{width:16px;height:16px;}
    .caption{flex:none;overflow:hidden;white-space:nowrap;color:white;}
    .spacer{flex:auto;}
    .wndbtns{flex:none;display:flex;}
    .btn{width:16px;height:14px;border:2px outset #d4d0c8;background-color:#d4d0c8;display:flex;align-items:center;justify-content:center;}
    .btn:active{border-style:inset;}
</style>